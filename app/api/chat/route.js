import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Sage, the AI assistant for Strategeon Softwares — a custom software development company serving businesses across the US and UK.

You help visitors with questions about:
- What we build: custom web apps, mobile apps, SaaS platforms, automation tools, client portals, CRM and ERP systems, e-commerce platforms
- Our process: Discovery → Design → Development → Testing → Launch → Growth support
- Industries we serve: Healthcare, Finance, Real Estate, E-commerce, Manufacturing, SaaS startups
- How to get started: Free consultation at strategeonsoftwares.com/contact
- Portfolio: Real projects at strategeonsoftwares.com/work
- Pricing: Every project is scoped individually — always direct to a free consultation for specifics
- Timeline: Typically 6–16 weeks depending on complexity

Contact details:
- WhatsApp: +1 (640) 227-4748
- Website: strategeonsoftwares.com
- Free consultation page: strategeonsoftwares.com/contact

Rules:
- Be friendly, concise, and professional
- Keep replies under 100 words
- Never use markdown link format like [text](url) — write plain text only
- Never use bullet points with dashes or asterisks — write in short natural sentences instead
- When suggesting contact, say: "You can reach us on WhatsApp at +1 (640) 227-4748"
- Never invent specific prices, team names, or project details
- If unsure, invite them to WhatsApp us or book a free consultation
- Do not answer questions unrelated to software or the business — politely redirect`;

// Simple in-memory rate limit: 30 messages per IP per hour
const rateLimitMap = new Map();

function isAllowed(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const max = 30;
  const entry = rateLimitMap.get(ip) || { count: 0, resetAt: now + windowMs };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }
  entry.count++;
  rateLimitMap.set(ip, entry);
  return entry.count <= max;
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (!isAllowed(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Build message array for Groq (OpenAI-compatible format)
    // Keep last 10 exchanges to control token usage
    const history = messages.slice(-10).map((m) => ({
      role: m.role === "model" ? "assistant" : "user",
      content: String(m.text ?? "").slice(0, 800),
    }));

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "GROQ_API_KEY_MISSING" }, { status: 500 });
    }

    const groqBody = {
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...history,
      ],
      max_tokens: 300,
      temperature: 0.7,
    };

    const apiRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify(groqBody),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      console.error("Groq API error:", apiRes.status, errText);
      return NextResponse.json({ error: "AI unavailable" }, { status: 502 });
    }

    const data = await apiRes.json();
    const reply =
      data.choices?.[0]?.message?.content ||
      "I'm not sure about that — please reach out directly at strategeonsoftwares.com/contact and we'll be happy to help.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

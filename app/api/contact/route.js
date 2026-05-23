import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, company, project, message } = await request.json();

  if (!name || !email || !project || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_KEY,
      subject: `New project request — ${name}${company ? ` (${company})` : ""}`,
      from_name: "OZ Agency Site",
      replyto: email,
      name,
      email,
      company: company || "—",
      project,
      message,
    }),
  });

  const data = await res.json();
  if (!data.success) {
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

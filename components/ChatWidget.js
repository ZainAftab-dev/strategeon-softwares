"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";

const WELCOME =
  "Hi! I'm Sage, Strategeon's AI assistant. Ask me anything about our services, process, or pricing — or just tap a question below to get started. 👋";

const QUICK_PROMPTS = [
  "What do you build?",
  "How much does it cost?",
  "How long does a project take?",
  "Do you work with small businesses?",
];

// Convert plain URLs and markdown-style links to clickable <a> tags
function renderText(text) {
  // Replace markdown links [label](url)
  const parts = [];
  const mdLink = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const plainUrl = /(https?:\/\/[^\s,]+)/g;

  let cleaned = text.replace(mdLink, "$2");

  const segments = cleaned.split(plainUrl);
  segments.forEach((seg, i) => {
    if (plainUrl.test(seg)) {
      parts.push(
        <a key={i} href={seg} target="_blank" rel="noopener noreferrer" className="chat-link">
          {seg.replace(/^https?:\/\//, "")}
        </a>
      );
    } else {
      if (seg) parts.push(<span key={i}>{seg}</span>);
    }
  });
  return parts.length ? parts : text;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "model", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;

    const userMsg = { role: "user", text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.slice(1).map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "failed");

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Sorry, something went wrong. Reach us on WhatsApp at +1 (640) 227-4748 and we'll help right away! 🙂",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleChip = (p) => {
    send(p);
  };

  return (
    <div className="chat-root" aria-label="Chat widget">
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label="Sage — Strategeon AI"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-left">
                <div className="chat-avatar" aria-hidden="true">S</div>
                <div className="chat-header-text">
                  <span className="chat-name">Sage</span>
                  <span className="chat-subtitle">Strategeon AI · Online</span>
                </div>
              </div>
              <button className="chat-close-btn" onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages" role="log" aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} className={`chat-bubble chat-bubble--${m.role === "user" ? "user" : "bot"}`}>
                  {m.role === "model" ? renderText(m.text) : m.text}
                </div>
              ))}

              {loading && (
                <div className="chat-bubble chat-bubble--bot">
                  <span className="chat-typing" aria-label="Sage is typing">
                    <span /><span /><span />
                  </span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts — shown before any user message */}
            {messages.length === 1 && !loading && (
              <div className="chat-prompts">
                {QUICK_PROMPTS.map((p) => (
                  <button key={p} className="chat-prompt-chip" onClick={() => handleChip(p)}>
                    {p} <ArrowRight size={11} />
                  </button>
                ))}
              </div>
            )}

            {/* CTA buttons — always visible */}
            <div className="chat-ctas">
              <a
                href="https://wa.me/16402274748"
                target="_blank"
                rel="noopener noreferrer"
                className="chat-cta chat-cta--wa"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a href="/contact" className="chat-cta chat-cta--consult">
                Free Consultation
              </a>
            </div>

            {/* Input */}
            <form className="chat-input-row" onSubmit={(e) => { e.preventDefault(); send(); }}>
              <input
                ref={inputRef}
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, 500))}
                onKeyDown={handleKey}
                placeholder="Ask anything…"
                disabled={loading}
                autoComplete="off"
              />
              <button type="submit" className="chat-send-btn" disabled={!input.trim() || loading} aria-label="Send">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <motion.button
        className={`chat-toggle${open ? " chat-toggle--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Chat with Sage"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" className="chat-toggle-icon"
              initial={{ rotate: -80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 80, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X size={21} />
            </motion.span>
          ) : (
            <motion.span key="open" className="chat-toggle-icon"
              initial={{ rotate: 80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -80, opacity: 0 }} transition={{ duration: 0.18 }}>
              <MessageCircle size={21} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="chat-toggle-label">Chat with us</span>}
      </motion.button>
    </div>
  );
}

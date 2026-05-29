"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";

const WELCOME =
  "Hi! I'm Sage, Strategeon's AI assistant. Ask me anything about our services, process, pricing, or how we can help your business. 👋";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "model", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
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
          // Skip the static welcome message; send the rest in Gemini format
          messages: updated.slice(1).map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setMessages((prev) => [
        ...prev,
        { role: "model", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Sorry, I'm having a moment. Try again or contact us directly at strategeonsoftwares.com/contact 🙂",
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

  return (
    <div className="chat-root" aria-label="Chat widget">
      {/* Chat panel */}
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
              <button
                className="chat-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages" role="log" aria-live="polite">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`chat-bubble chat-bubble--${
                    m.role === "user" ? "user" : "bot"
                  }`}
                >
                  {m.text}
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="chat-bubble chat-bubble--bot">
                  <span className="chat-typing" aria-label="Sage is typing">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick prompts — only shown before any user message */}
            {messages.length === 1 && (
              <div className="chat-prompts">
                {[
                  "What do you build?",
                  "How much does it cost?",
                  "How long does it take?",
                ].map((p) => (
                  <button
                    key={p}
                    className="chat-prompt-chip"
                    onClick={() => {
                      setInput(p);
                      setTimeout(() => inputRef.current?.focus(), 50);
                    }}
                  >
                    {p} <ArrowRight size={12} />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              className="chat-input-row"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
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
              <button
                type="submit"
                className="chat-send-btn"
                disabled={!input.trim() || loading}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        className={`chat-toggle${open ? " chat-toggle--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Chat with Sage — Strategeon AI"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              className="chat-toggle-icon"
              initial={{ rotate: -80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 80, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={21} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              className="chat-toggle-icon"
              initial={{ rotate: 80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -80, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle size={21} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="chat-toggle-label">Chat with us</span>}
      </motion.button>
    </div>
  );
}

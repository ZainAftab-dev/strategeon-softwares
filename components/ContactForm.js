"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm({ compact = false }) {
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <div className={`success ${status === "sent" ? "show" : ""}`} role="status">
        Thanks. Your project request is on its way to the OZ team.
      </div>
      {status === "error" && (
        <p style={{ color: "red", marginBottom: "12px" }}>
          Something went wrong — please email us directly at ozsoftwareagency@gmail.com
        </p>
      )}
      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Work email
        <input name="email" type="email" required placeholder="you@company.com" />
      </label>
      {!compact && (
        <label>
          Company
          <input name="company" placeholder="Company name" />
        </label>
      )}
      <label>
        Project type
        <select name="project" required defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Custom web application</option>
          <option>Mobile app development</option>
          <option>Cloud deployment</option>
          <option>Software modernization</option>
          <option>Marketing technology</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" required placeholder="Tell us what you want to build." />
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : <>Send Request <Send size={18} /></>}
      </button>
    </form>
  );
}

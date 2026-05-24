"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d6e7778d-7122-40ea-84a1-763897d8dd96",
          subject: `New project request — ${fd.get("name")}`,
          from_name: "Strategeon Softwares Site",
          replyto: fd.get("email"),
          name: fd.get("name"),
          email: fd.get("email"),
          project: fd.get("project"),
          message: fd.get("message"),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <div className={`success ${status === "sent" ? "show" : ""}`} role="status">
        Thanks. Your project request is on its way to the Strategeon team.
      </div>
      {status === "error" && (
        <p style={{ color: "red", marginBottom: "12px" }}>
          Something went wrong — please email us directly at info@strategeonsoftwares.com
        </p>
      )}
      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required placeholder="your@email.com" />
      </label>
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

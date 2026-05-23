"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm({ compact = false }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <div className={`success ${sent ? "show" : ""}`} role="status">
        Thanks. Your project request is ready for the OZ team to review.
      </div>
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
      <button className="btn btn-primary" type="submit">
        Send Request <Send size={18} />
      </button>
    </form>
  );
}

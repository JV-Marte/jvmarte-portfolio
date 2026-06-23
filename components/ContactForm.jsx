"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS keys (public — same as the previous static site).
const PUBLIC_KEY = "oCo1aNN6MEkqQzwbv";
const SERVICE_ID = "service_23hwc2r";
const TEMPLATE_ID = "template_yx9gr6p";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    setStatus({ state: "sending", msg: "" });

    const params = {
      name: form.name.value,
      email: form.email.value,
      service: form.service.options[form.service.selectedIndex].text || "Not specified",
      message: form.message.value,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
      setStatus({ state: "ok", msg: "Message sent — I'll reply within 24 hours." });
      form.reset();
    } catch {
      setStatus({
        state: "error",
        msg: "Something went wrong. Email me directly at martejohnvincent13@gmail.com",
      });
    }
  }

  const sending = status.state === "sending";

  return (
    <form ref={formRef} className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label className="field">
          <span>Name</span>
          <input type="text" name="name" placeholder="John Smith" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" placeholder="john@company.com" required />
        </label>
      </div>

      <label className="field">
        <span>What do you need help with?</span>
        <select name="service" defaultValue="">
          <option value="" disabled>
            Select a service…
          </option>
          <option>CRM &amp; Lead Management</option>
          <option>Workflow Automation</option>
          <option>Web &amp; Operations Support</option>
          <option>Other / Not sure yet</option>
        </select>
      </label>

      <label className="field">
        <span>About your project</span>
        <textarea
          name="message"
          rows={4}
          placeholder="What are you trying to solve?"
          required
        />
      </label>

      <button type="submit" className="btn btn--solid btn--full" disabled={sending}>
        {sending ? "Sending…" : "Send message →"}
      </button>

      {status.msg && (
        <p className={`form__note form__note--${status.state}`}>{status.msg}</p>
      )}
    </form>
  );
}

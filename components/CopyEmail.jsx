"use client";

import { useState } from "react";

// Copy-to-clipboard button for the contact email. Falls back gracefully
// (a legacy execCommand path) if the async Clipboard API is unavailable,
// e.g. on non-secure origins, and resets its label after a moment.
export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // If copying fails entirely, the mailto link below the button still works.
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="btn btn--ghost"
      onClick={copy}
      aria-label={copied ? "Email copied to clipboard" : `Copy email ${email}`}
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}

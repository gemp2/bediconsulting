"use client";

import { useState } from "react";
import { site } from "@/data/site";

/**
 * INTERIM IMPLEMENTATION — no server-side handler exists yet.
 *
 * Submitting composes a pre-filled message in the visitor's own mail client
 * rather than posting anywhere. This is deliberate: a form that silently
 * discards enquiries is worse than no form. Replace with a real handler
 * (Resend, Formspree, or a route handler + SMTP) before launch, and add the
 * privacy notice / GDPR consent the deck calls for.
 * See CONTENT-TODO.md.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const org = String(data.get("organisation") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      org && `Organisation: ${org}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Project enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field name="name" label="Your name" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="organisation" label="Organisation" />

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] uppercase tracking-[0.18em] muted"
        >
          About the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Ground conditions, constraints, programme — whatever matters most."
          className="mt-2 w-full border hairline bg-navy2/60 px-4 py-3 text-sm text-bone placeholder:text-bone/25 focus:border-gold/50 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-gold px-6 py-3 text-xs uppercase tracking-[0.14em] text-navy transition-colors hover:bg-gold/85"
      >
        Send enquiry →
      </button>

      {sent && (
        <p role="status" className="text-sm text-gold">
          Your mail client should have opened with the message ready to send. If
          nothing happened, email us directly at {site.email}.
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-[0.18em] muted"
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border hairline bg-navy2/60 px-4 py-3 text-sm text-bone focus:border-gold/50 focus:outline-none"
      />
    </div>
  );
}

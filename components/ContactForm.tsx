"use client";

import { useState } from "react";
import { Phone, Check, Loader2, AlertTriangle } from "lucide-react";
import { site } from "@/site.config";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { contact, business, crm } = site;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [smsConsent, setSmsConsent] = useState(false); // real checkbox, never auto-true
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch(crm.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Body is EXACTLY these fields — do not add/rename (CRM contract).
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          smsConsent,
          businessSlug: crm.businessSlug,
        }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
    } catch {
      // Keep the user's typed input on failure — never wipe it.
      setStatus("error");
    }
  }

  /* ---- Success: replace the form ---- */
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ink/10 bg-white p-8 text-center sm:p-12">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-chrome/20 text-chrome-dark">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="h-display mt-6 text-2xl text-ink">
          {contact.successHeading}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base text-ink/65">
          {contact.successBody}
        </p>
        <a
          href={business.phoneHref}
          className="btn-dark mt-7 px-7 py-4 text-base"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {business.phoneDisplay}
        </a>
      </div>
    );
  }

  /* ---- Form ---- */
  // text-base (16px) is deliberate: anything smaller makes iOS Safari auto-zoom on focus.
  const inputClass =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/35 focus:border-chrome focus:outline-none focus-visible:outline-none";
  const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="(734) 000-0000"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClass}>
          Email <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@email.com"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          What does your car need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Year, make & model, the service you want, and where the car is."
        />
      </div>

      {/* TCPA consent — real checkbox, default unchecked */}
      <div className="mt-5 flex items-start gap-3">
        <input
          id="smsConsent"
          name="smsConsent"
          type="checkbox"
          checked={smsConsent}
          onChange={(e) => setSmsConsent(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-chrome"
        />
        <label htmlFor="smsConsent" className="text-[13px] leading-relaxed text-ink/60">
          {contact.consentLabel}
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3.5 text-sm text-red-800"
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            {contact.errorBody}{" "}
            <a
              href={business.phoneHref}
              className="font-semibold underline underline-offset-2"
            >
              {business.phoneDisplay}
            </a>
            .
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full px-7 py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Book a detail"
        )}
      </button>
    </form>
  );
}

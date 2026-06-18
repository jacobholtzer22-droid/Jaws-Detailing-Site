import { Phone, MessageSquare, Clock } from "lucide-react";
import Section from "./Section";
import ContactForm from "./ContactForm";
import { site } from "@/site.config";

export default function Contact() {
  const { contact, business } = site;

  return (
    <Section id="contact" tone="bone">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4 text-chrome-deep">{contact.eyebrow}</p>
          <h2 className="h-display text-3xl text-ink sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-md text-base text-ink/60">{contact.sub}</p>

          <div className="mt-8 space-y-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white/50 px-5 py-4 transition-colors hover:border-chrome"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-chrome">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">
                  Call or text
                </span>
                <span className="font-display text-lg font-bold text-ink">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 px-1 text-sm text-ink/60">
              <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-chrome-dark" aria-hidden="true" />
              <span>Prefer to type? Fill out the form and we'll text you right back.</span>
            </div>
            <div className="flex items-start gap-4 px-1 text-sm text-ink/60">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-chrome-dark" aria-hidden="true" />
              <span>Open until 7:30 PM — same-day requests welcome.</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

import { Phone } from "lucide-react";
import { site } from "@/site.config";
import Section from "./Section";
import ContactForm from "./ContactForm";

/**
 * Bottom-of-home conversion band: the quote form is the primary action, with a
 * clear "or just call" fallback alongside it.
 */
export default function QuoteSection() {
  const { contact, business } = site;

  return (
    <Section id="quote" tone="bone">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow mb-4 text-chrome-deep">{contact.eyebrow}</p>
          <h2 className="h-display text-3xl text-ink sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-md text-base text-ink/65">{contact.sub}</p>

          <div className="mt-8 rounded-2xl border border-ink/10 bg-white/60 p-6">
            <p className="text-sm font-semibold text-ink">Prefer to talk?</p>
            <p className="mt-1 text-sm text-ink/60">
              Call or text and we'll get you a price fast.
            </p>
            <a
              href={business.phoneHref}
              className="btn-dark mt-4 px-6 py-3.5 text-base"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

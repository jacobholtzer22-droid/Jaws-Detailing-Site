import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/site.config";
import { DAY_ORDER, dayLabel, formatDayHours } from "@/lib/format";

type Props = {
  /** Match the band it sits on. */
  tone?: "bone" | "dark";
  className?: string;
};

/** Reusable contact details: phone, optional email/address, service area, hours. */
export default function ContactInfo({ tone = "dark", className = "" }: Props) {
  const { business } = site;
  const dark = tone === "dark";

  const card = dark
    ? "border-white/10 bg-panel"
    : "border-ink/10 bg-white/60";
  const label = dark ? "text-steel" : "text-ink/50";
  const value = dark ? "text-bone" : "text-ink";
  const muted = dark ? "text-steel-light" : "text-ink/65";
  const icon = dark ? "text-chrome" : "text-chrome-deep";

  const Row = ({
    children,
    iconEl,
  }: {
    children: React.ReactNode;
    iconEl: React.ReactNode;
  }) => (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 shrink-0 ${icon}`} aria-hidden="true">
        {iconEl}
      </span>
      <div>{children}</div>
    </div>
  );

  return (
    <div className={`rounded-2xl border p-6 sm:p-7 ${card} ${className}`}>
      <h2 className={`h-display text-lg ${value}`}>Contact info</h2>

      <div className="mt-5 space-y-4">
        <Row iconEl={<Phone className="h-5 w-5" />}>
          <span className={`block text-xs font-semibold uppercase tracking-wider ${label}`}>
            Call or text
          </span>
          <a
            href={business.phoneHref}
            className={`font-display text-lg font-bold ${value} transition-colors hover:text-chrome`}
          >
            {business.phoneDisplay}
          </a>
        </Row>

        {business.email ? (
          <Row iconEl={<Mail className="h-5 w-5" />}>
            <span className={`block text-xs font-semibold uppercase tracking-wider ${label}`}>
              Email
            </span>
            <a href={`mailto:${business.email}`} className={`${value} transition-colors hover:text-chrome`}>
              {business.email}
            </a>
          </Row>
        ) : null}

        <Row iconEl={<MapPin className="h-5 w-5" />}>
          <span className={`block text-xs font-semibold uppercase tracking-wider ${label}`}>
            Service area
          </span>
          <span className={value}>
            {business.address || `We come to you across ${business.region}`}
          </span>
        </Row>

        <Row iconEl={<Clock className="h-5 w-5" />}>
          <span className={`block text-xs font-semibold uppercase tracking-wider ${label}`}>
            Hours
          </span>
          <ul className={`mt-1 space-y-0.5 text-sm ${muted}`}>
            {DAY_ORDER.map((key) => (
              <li key={key} className="flex justify-between gap-6">
                <span>{dayLabel(key)}</span>
                <span>{formatDayHours(site.hours[key])}</span>
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </div>
  );
}

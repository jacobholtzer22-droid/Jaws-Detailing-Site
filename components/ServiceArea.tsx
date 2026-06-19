import { MapPin } from "lucide-react";
import Section from "./Section";
import { site } from "@/site.config";

export default function ServiceArea() {
  return (
    <Section id="service-area" tone="bone">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow mb-4 text-chrome-deep">Service area</p>
          <h2 className="h-display text-3xl text-ink sm:text-4xl">
            We come to you,
            <br />
            across {site.business.region}.
          </h2>
          <p className="mt-4 max-w-md text-base text-ink/60">
            {site.serviceAreaNote}
          </p>
          <a href={site.cta.href} className="btn-dark mt-7 px-7 py-4 text-base">
            Check your area
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {site.serviceArea.map((town) => (
            <li
              key={town}
              className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-white/40 px-4 py-3.5 text-[15px] font-medium text-ink"
            >
              <MapPin className="h-4 w-4 shrink-0 text-chrome-dark" aria-hidden="true" />
              {town}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

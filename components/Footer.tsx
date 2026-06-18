import { Phone, MapPin } from "lucide-react";
import { site } from "@/site.config";
import { DAY_ORDER, dayLabel, formatDayHours } from "@/lib/format";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-deep text-bone">
      {/* Extra bottom padding on mobile so the sticky CTA bar never covers the credit. */}
      <div className="container-page py-16 pb-28 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <div className="h-display text-2xl text-bone">
              {site.business.name}
              <span className="text-chrome">.</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-steel">
              {site.business.tagline}.
            </p>
            <a
              href={site.business.phoneHref}
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-display text-lg font-bold text-bone transition-colors hover:text-chrome"
            >
              <Phone className="h-5 w-5 text-chrome" aria-hidden="true" />
              {site.business.phoneDisplay}
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-steel">
              <MapPin className="h-4 w-4 text-chrome" aria-hidden="true" />
              {site.business.region}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-steel">
              Explore
            </h2>
            <ul className="mt-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-steel-light transition-colors hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-steel">
              Hours
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              {DAY_ORDER.map((key) => (
                <li key={key} className="flex justify-between gap-4 text-steel-light">
                  <span>{dayLabel(key)}</span>
                  <span className="text-steel">
                    {formatDayHours(site.hours[key])}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.business.name}. All rights reserved.
          </p>
          <p>{site.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}

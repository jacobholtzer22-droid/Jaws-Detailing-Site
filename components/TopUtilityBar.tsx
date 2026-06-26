import { Phone } from "lucide-react";
import { site } from "@/site.config";
import SocialLinks from "./SocialLinks";

/**
 * Thin utility strip that sits as the top row of the Header (above the nav).
 * Serving line on the left, phone + socials on the right. Collapses on scroll
 * (the Header controls that) so only the nav row stays sticky.
 */
export default function TopUtilityBar() {
  const { utilityBar, business } = site;

  return (
    <div className="border-b border-white/10 bg-ink-deep/80 text-steel-light backdrop-blur">
      <div className="container-page flex h-9 items-center justify-between gap-4 text-xs">
        <p className="truncate">
          <span className="text-chrome">●</span>{" "}
          <span className="align-middle">{utilityBar.message}</span>
        </p>

        <div className="flex items-center gap-4">
          <span className="hidden text-steel sm:inline">{utilityBar.note}</span>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-bone transition-colors hover:text-chrome"
          >
            <Phone className="h-3.5 w-3.5 text-chrome" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <SocialLinks className="hidden gap-3 sm:flex" iconClassName="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}

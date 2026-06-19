"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { site } from "@/site.config";

const strip = (p: string) => p.replace(/\/+$/, "") || "/";

/**
 * Sticky bottom CTA bar for mobile/tablet (lg:hidden). Keeps click-to-call and
 * "Book a detail" under the thumb. Hidden over the home hero (CTAs already there)
 * and on the Get a Quote page (that page IS the form).
 */
export default function MobileCtaBar() {
  const pathname = usePathname();
  const onQuotePage = strip(pathname || "/") === strip(site.cta.href);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (onQuotePage) {
      setShow(false);
      return;
    }
    // Interior pages (no hero) keep the CTA available; home shows it once the
    // hero has scrolled out of view. Look the hero up on each call so we never
    // depend on it being present at mount. setShow is a no-op when the value is
    // unchanged, so this stays cheap on every scroll event.
    const compute = () => {
      const hero = document.getElementById("top");
      if (!hero) {
        setShow(true);
        return;
      }
      setShow(hero.getBoundingClientRect().bottom < 80);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [onQuotePage]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "invisible translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!show}
    >
      <div className="container-page flex gap-3 py-3">
        <a
          href={site.business.phoneHref}
          className="btn-ghost flex-1 px-4 py-3.5"
          aria-label={`Call ${site.business.name}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {site.cta.callLabel}
        </a>
        <a href={site.cta.href} className="btn-primary flex-1 px-4 py-3.5">
          {site.cta.label}
        </a>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { site } from "@/site.config";

/**
 * Sticky bottom CTA bar for mobile/tablet (lg:hidden). Keeps click-to-call and
 * "Book a detail" under the thumb while browsing. Auto-hides over the hero and
 * the contact section, where those CTAs already live, so it's never redundant.
 */
export default function MobileCtaBar() {
  const [show, setShow] = useState(false);
  const heroVisible = useRef(false);
  const contactVisible = useRef(false);

  useEffect(() => {
    const update = () => setShow(!heroVisible.current && !contactVisible.current);
    const observe = (id: string, ref: { current: boolean }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          ref.current = entry.isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      obs.observe(el);
      return obs;
    };
    const o1 = observe("top", heroVisible);
    const o2 = observe("contact", contactVisible);
    return () => {
      o1?.disconnect();
      o2?.disconnect();
    };
  }, []);

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

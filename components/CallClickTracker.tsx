"use client";

import { useEffect } from "react";
import { trackCallClick } from "@/lib/gtag";

/**
 * Mounted once in the root layout. Uses a single document-level click listener
 * (event delegation) so every `tel:` link on the site reports a phone-tap
 * conversion — including taps on icons nested inside the anchor — without
 * editing any existing anchor. Renders nothing.
 */
export default function CallClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as Element | null)?.closest('a[href^="tel:"]');
      if (anchor) trackCallClick();
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

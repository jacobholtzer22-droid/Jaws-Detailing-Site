"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Extra classes on the wrapper (it renders a plain div). */
  className?: string;
  /** Stagger delay in ms (used as transition-delay while revealing). */
  delay?: number;
};

/**
 * Fade + rise on scroll — progressive enhancement.
 *
 * Rules (by design):
 *  - Server markup renders FULLY VISIBLE (no reveal classes on first paint).
 *  - The hidden state is applied ONLY by JS after mount.
 *  - An element already in the viewport at mount is never hidden.
 *  - No JS, no IntersectionObserver, or prefers-reduced-motion => stays visible.
 *  - Animates transform + opacity only (no layout shift).
 */
export default function ScrollReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false); // hidden state applied (JS only)
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return; // stay visible
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // stay visible

    // Never hide something already on screen — reveal-in-place only for below-fold.
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (alreadyInView) return;

    setArmed(true); // now hidden via .sr-out (element is below the fold, so no flash)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = armed ? (shown ? "sr sr-in" : "sr sr-out") : "";

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`.trim()}
      style={armed ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

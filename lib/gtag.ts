/* =============================================================================
 * lib/gtag.ts — Google Ads conversion tracking
 * -----------------------------------------------------------------------------
 * Hardcoded tracking values (never env vars). These helpers are best-effort and
 * MUST NEVER THROW — a tracking failure must never affect app behavior (e.g. it
 * can never flip a successful form submit into an error state).
 * ========================================================================== */

/** Google tag (gtag.js) ID. */
export const GA_ADS_ID = "AW-18344669424";

/** Conversion label fired on a successful quote-form submit. */
export const FORM_SUBMIT_CONVERSION = "AW-18344669424/IyGfCLDy39UcEPDhtatE";

/** Conversion label fired on a phone-number tap. */
export const PHONE_CLICK_CONVERSION = "AW-18344669424/w4k2CLPy39UcEPDhtatE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a single Google Ads conversion event. Silent on any failure. */
function fireConversion(sendTo: string): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: sendTo });
    }
  } catch {
    // Tracking is best-effort — never throw.
  }
}

/** Report a quote-form submit conversion. */
export function trackContactConversion(): void {
  fireConversion(FORM_SUBMIT_CONVERSION);
}

/** Report a phone-tap conversion. */
export function trackCallClick(): void {
  fireConversion(PHONE_CLICK_CONVERSION);
}

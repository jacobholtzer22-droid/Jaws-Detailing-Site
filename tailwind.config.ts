import type { Config } from "tailwindcss";

/**
 * Brand palette = "Jaws — Navy / Red / White" (matches the logo).
 * Deep navy base, a clean automotive red as the single accent/CTA color, and
 * a cool near-white for light surfaces and text on navy.
 * Token names are intentionally semantic (legacy "chrome"/"reflect"/"bone" names
 * are kept so the whole site re-skins from here) and never shadow Tailwind's scales.
 *   ink    → navy base/background
 *   panel  → raised navy surfaces
 *   chrome → RED accent + primary CTA
 *   bone   → white / light surfaces + text on navy
 *   steel  → muted blue-gray
 *   reflect→ secondary sky-blue (sparingly used)
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./site.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0A1D38", deep: "#06122A", raised: "#102A4C" },
        panel: { DEFAULT: "#122E54", light: "#1B3C68", dark: "#0C2244" },
        chrome: {
          DEFAULT: "#D72631", // brand red — accent + primary CTA (white text reads AA)
          dark: "#B11E27",
          light: "#E84853",
          deep: "#9A1620", // on-light eyebrows/icons: ~7:1 on bone (AA)
        },
        reflect: { DEFAULT: "#5B8AC2", dark: "#3F6EA8", light: "#88ABD6" },
        bone: { DEFAULT: "#F7F9FC", dark: "#E6ECF4" },
        steel: { DEFAULT: "#8FA3BC", dark: "#6C82A0", light: "#B0C1D6" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
      // Navy-tinted elevation scale (derived from ink #06122A) — one consistent
      // shadow language for cards and their hover state.
      boxShadow: {
        card: "0 1px 2px rgba(6, 18, 42, 0.06), 0 10px 30px -14px rgba(6, 18, 42, 0.22)",
        "card-lift": "0 12px 28px -10px rgba(6, 18, 42, 0.30), 0 3px 8px rgba(6, 18, 42, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

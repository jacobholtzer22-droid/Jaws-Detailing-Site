import type { Config } from "tailwindcss";

/**
 * Brand palette = "Wet Clearcoat".
 * Derived from what a glossy dark car reflects: warm sunset (chrome) + cool sky (reflect)
 * over a blue-leaning obsidian base. Intentionally NOT carbon-black + neon.
 * Token names are semantic so they never shadow Tailwind's default scales.
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
        ink: { DEFAULT: "#0E1318", deep: "#0A0E12", raised: "#11171F" },
        panel: { DEFAULT: "#19222E", light: "#222E3D", dark: "#141B24" },
        chrome: {
          DEFAULT: "#D8A24A",
          dark: "#C28C36",
          light: "#E7C078",
          deep: "#8A5A1C", // on-light eyebrows: ~5.2:1 on bone (AA)
        },
        reflect: { DEFAULT: "#7FA9C9", dark: "#5E8CB0", light: "#A6C4DC" },
        bone: { DEFAULT: "#F4F1EA", dark: "#E8E3D8" },
        steel: { DEFAULT: "#8A97A6", dark: "#6E7C8B", light: "#AAB4C0" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

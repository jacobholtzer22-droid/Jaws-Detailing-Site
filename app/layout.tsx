import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import "./globals.css";

/* Display: Archivo loaded with the width axis so we can run it expanded
 * (font-stretch: 125% in globals.css) — wide, industrial, automotive-nameplate type. */
const display = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

/* Body: warm, highly legible humanist grotesque. Not Inter. */
const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Default metadata = home page. Each route can override via its own pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  robots: { index: true, follow: true },
  ...pageMetadata("home"),
};

export const viewport: Viewport = {
  themeColor: "#0A1D38",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink font-body text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-chrome focus:px-4 focus:py-2 focus:font-semibold focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}

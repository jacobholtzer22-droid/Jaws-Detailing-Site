"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { site } from "@/site.config";
import TopUtilityBar from "./TopUtilityBar";

const strip = (p: string) => p.replace(/\/+$/, "") || "/";

// City links for the Service Areas dropdown, built from config so the menu
// always matches the areas list.
const areaLinks = site.serviceAreas.map((a) => ({
  label: a.name,
  href: `/service-areas/${a.slug}/`,
}));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile panel
  const [areasOpen, setAreasOpen] = useState(false); // mobile areas accordion
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const cur = strip(pathname || "/");
    const target = strip(href);
    if (target === "/") return cur === "/";
    return cur === target || cur.startsWith(`${target}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Utility bar — collapses away on scroll, leaving only the nav row sticky. */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
        aria-hidden={scrolled}
      >
        <TopUtilityBar />
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Brand logo (compact lockup); falls back to the text wordmark. */}
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label={`${site.business.name} — home`}
        >
          {site.logo.mark ? (
            <Image
              src={site.logo.mark}
              alt={site.logo.alt}
              width={347}
              height={240}
              priority
              className="h-9 w-auto rounded-md sm:h-10"
            />
          ) : (
            <span className="h-display text-lg text-bone sm:text-xl">
              {site.business.shortName}
              <span className="text-chrome">.</span>
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = isActive(item.href);
            const hasDropdown = "dropdown" in item && item.dropdown === "serviceAreas";

            if (hasDropdown) {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                      active ? "text-chrome" : "text-steel-light hover:text-bone"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  {/* Flyout — opens on hover or keyboard focus within the group. */}
                  <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="overflow-hidden rounded-xl border border-white/10 bg-ink/95 py-2 shadow-xl backdrop-blur">
                      {areaLinks.map((a) => (
                        <li key={a.href}>
                          <Link
                            href={a.href}
                            className="block px-4 py-2 text-sm text-steel-light transition-colors hover:bg-white/5 hover:text-bone"
                          >
                            {a.label}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-1 border-t border-white/10 pt-1">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm font-semibold text-chrome transition-colors hover:bg-white/5"
                        >
                          All service areas
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-chrome" : "text-steel-light hover:text-bone"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.business.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-bone transition-colors hover:text-chrome sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-chrome" aria-hidden="true" />
            {site.business.phoneDisplay}
          </a>
          <Link href={site.cta.href} className="btn-primary hidden sm:inline-flex">
            {site.cta.label}
          </Link>

          {/* Mobile: call + menu (min-h keeps the tap target >=44px) */}
          <a
            href={site.business.phoneHref}
            className="btn-primary min-h-[44px] px-4 py-2.5 sm:hidden"
            aria-label={`Call ${site.business.name}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.cta.callLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-bone lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-white/10 bg-ink/95 backdrop-blur lg:hidden"
        >
          <div className="container-page flex flex-col py-3">
            {site.nav.map((item) => {
              const active = isActive(item.href);
              const hasDropdown = "dropdown" in item && item.dropdown === "serviceAreas";

              if (hasDropdown) {
                return (
                  <div key={item.href} className="border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`py-3 text-base font-medium transition-colors ${
                          active ? "text-chrome" : "text-steel-light hover:text-bone"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setAreasOpen((v) => !v)}
                        className="inline-flex h-11 w-11 items-center justify-center text-steel-light"
                        aria-expanded={areasOpen}
                        aria-label={areasOpen ? "Collapse service areas" : "Expand service areas"}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${areasOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {areasOpen && (
                      <ul className="pb-2 pl-3">
                        {areaLinks.map((a) => (
                          <li key={a.href}>
                            <Link
                              href={a.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm text-steel-light transition-colors hover:text-bone"
                            >
                              {a.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-white/5 py-3 text-base font-medium transition-colors ${
                    active ? "text-chrome" : "text-steel-light hover:text-bone"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={site.cta.href}
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              {site.cta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

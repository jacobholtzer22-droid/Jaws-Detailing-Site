import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/site.config";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

/** Popular services, numbered 01 / 02 / 03 — the three pillar packages. */
export default function PopularServices() {
  const { popular } = site;

  return (
    <Section id="popular" tone="ink">
      <ScrollReveal className="max-w-2xl">
        <p className="eyebrow mb-4">{popular.eyebrow}</p>
        <h2 className="h-display text-3xl text-bone sm:text-4xl">
          {popular.heading}
        </h2>
        <p className="mt-4 text-base text-steel-light">{popular.sub}</p>
      </ScrollReveal>

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {popular.pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <li key={pillar.number} className="flex">
              <ScrollReveal delay={i * 60} className="flex w-full">
                <Link
                  href={pillar.href}
                  className="group card-lift flex h-full w-full flex-col rounded-2xl border border-white/10 bg-panel-dark p-7 hover:border-chrome/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-chrome/40">
                      {pillar.number}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-chrome/15 text-chrome">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-bone">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-steel-light">
                    {pillar.blurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-chrome">
                    See details
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </ScrollReveal>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <Link href="/services/" className="btn-ghost px-7 py-4 text-base">
          {popular.allLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

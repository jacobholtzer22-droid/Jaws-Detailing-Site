import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { site, type ServiceItem } from "@/site.config";
import ScrollReveal from "./ScrollReveal";

/** Body of a /services/<slug>/ detail page: overview + what's included + other services. */
export default function ServiceDetail({ service }: { service: ServiceItem }) {
  const { servicesPage, cta } = site;
  const Icon = service.icon;
  const others = site.services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Overview + what's included — bone band */}
      <section className="bg-bone py-16 text-ink sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ScrollReveal>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-chrome">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-6 text-xl leading-relaxed text-ink sm:text-2xl">
              {service.longDescription}
            </p>
            <a href={cta.href} className="btn-dark mt-8 px-7 py-4 text-base">
              {cta.label}
            </a>
          </ScrollReveal>

          <ScrollReveal
            delay={80}
            className="rounded-2xl border border-ink/10 bg-white/60 p-7 shadow-card sm:p-8"
          >
            <h2 className="h-display text-lg text-ink">
              {servicesPage.detailIncludesHeading}
            </h2>
            <ul className="mt-5 space-y-3.5">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-ink/80"
                >
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chrome/20 text-chrome-deep"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Pricing — clearly-marked placeholder until Joey gives numbers. */}
            <div className="mt-6 border-t border-ink/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                Pricing
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                {servicesPage.pricingNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Other services — ink band */}
      <section className="band-wash bg-ink py-16 text-bone sm:py-20">
        <div className="container-page">
          <ScrollReveal>
            <p className="eyebrow mb-6">{servicesPage.detailOtherHeading}</p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => {
              const OIcon = s.icon;
              return (
                <ScrollReveal key={s.slug} delay={i * 45} className="flex">
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group card-lift flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-panel p-5 hover:border-chrome/50"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-chrome">
                      <OIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-bold uppercase tracking-tight text-bone">
                      {s.title}
                    </span>
                    <ArrowRight
                      className="ml-auto h-4 w-4 text-steel transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

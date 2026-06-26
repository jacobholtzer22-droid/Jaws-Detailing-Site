import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("services");

export default function ServicesPage() {
  const { servicesPage, services } = site;
  return (
    <>
      <PageHeader
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.heading}
        sub={servicesPage.sub}
      />
      <section className="bg-bone py-16 text-ink sm:py-20">
        <div className="container-page">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug} className="flex">
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>

          {/* Pricing — placeholder until Joey provides final numbers. */}
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                Pricing
              </h2>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink/65">
                {servicesPage.pricingNote}
              </p>
            </div>
            <a href={site.cta.href} className="btn-primary shrink-0 px-7 py-4 text-base">
              {site.cta.label}
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

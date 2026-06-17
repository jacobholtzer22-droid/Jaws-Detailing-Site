import Section from "./Section";
import { site } from "@/site.config";

export default function Services() {
  return (
    <Section id="services" tone="bone">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4 text-chrome-dark">What we do</p>
        <h2 className="h-display text-3xl text-ink sm:text-4xl">
          Detailing services, done right.
        </h2>
        <p className="mt-4 text-base text-ink/60">
          Pick one service or the full package. Whatever your car needs, you get
          it back looking its best.
        </p>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((service) => {
          const Icon = service.icon;
          return (
            <li
              key={service.title}
              className="group flex flex-col gap-4 bg-bone p-7 transition-colors hover:bg-bone-dark"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-chrome">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/65">
                {service.description}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <a href="#contact" className="btn-dark px-7 py-4 text-base">
          Book a detail
        </a>
      </div>
    </Section>
  );
}

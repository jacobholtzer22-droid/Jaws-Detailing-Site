import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";
import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  const { howItWorks } = site;

  return (
    <section id="how-it-works" className="band-wash bg-ink py-20 text-bone sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Process photo — SUV being washed in a driveway */}
        <ScrollReveal className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:order-first">
          <ImagePlaceholder
            image={site.images.process}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-chrome backdrop-blur">
            On-site, at your place
          </span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="eyebrow mb-4">{howItWorks.eyebrow}</p>
          <h2 className="h-display text-3xl text-bone sm:text-4xl">
            {howItWorks.heading}
          </h2>
          <p className="mt-4 max-w-md text-base text-steel-light">
            {howItWorks.sub}
          </p>

          <ol className="mt-9 space-y-6">
            {howItWorks.steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span
                  className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-chrome/40 text-base font-bold text-chrome"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-steel-light">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  );
}

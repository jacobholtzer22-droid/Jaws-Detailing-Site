import { site } from "@/site.config";
import Section from "./Section";
import ImagePlaceholder from "./ImagePlaceholder";
import ScrollReveal from "./ScrollReveal";

/** Intro band: eyebrow + heading + two paragraphs + CTA, with a tall photo. */
export default function IntroBlock() {
  const { intro, cta } = site;

  return (
    <Section tone="bone">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-chrome-deep">{intro.eyebrow}</p>
          <h2 className="h-display text-3xl text-ink sm:text-4xl">
            {intro.heading}
          </h2>
          {intro.body.map((para) => (
            <p key={para} className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
              {para}
            </p>
          ))}
          <a href={cta.href} className="btn-primary mt-8 px-7 py-4 text-base">
            {intro.cta}
          </a>
        </ScrollReveal>

        <ScrollReveal
          delay={80}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 shadow-card"
        >
          <ImagePlaceholder
            image={intro.image}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </ScrollReveal>
      </div>
    </Section>
  );
}

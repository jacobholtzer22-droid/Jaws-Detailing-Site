import { Plus } from "lucide-react";
import { site } from "@/site.config";
import Section from "./Section";

/**
 * FAQ accordion built on native <details>/<summary> — fully keyboard accessible
 * and works without JavaScript. The marker rotates via the [open] state.
 */
export default function Faq() {
  const { faq } = site;

  return (
    <Section id="faq" tone="bone">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="eyebrow mb-4 text-chrome-deep">{faq.eyebrow}</p>
          <h2 className="h-display text-3xl text-ink sm:text-4xl">{faq.heading}</h2>
        </div>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-display text-lg font-bold text-ink">
                  {item.q}
                </span>
                <Plus
                  className="h-5 w-5 shrink-0 text-chrome transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/65">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/site.config";

/** Service card (bone band) that links to the /services/<slug>/ detail page. */
export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex h-full w-full flex-col gap-4 bg-bone p-7 transition-colors hover:bg-bone-dark focus-visible:bg-bone-dark"
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
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-chrome-deep">
        See what&apos;s included
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

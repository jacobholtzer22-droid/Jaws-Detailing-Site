import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/site.config";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink text-bone">
      <div className="container-page max-w-2xl py-24 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h-display text-4xl text-bone sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-steel-light">
          The page you&apos;re after may have moved. Head back home, or book a
          detail and we&apos;ll come to you.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-ghost px-7 py-4 text-base">
            Back to home
          </Link>
          <Link href={site.cta.href} className="btn-primary px-7 py-4 text-base">
            {site.cta.label}
          </Link>
          <a href={site.business.phoneHref} className="btn-ghost px-7 py-4 text-base">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

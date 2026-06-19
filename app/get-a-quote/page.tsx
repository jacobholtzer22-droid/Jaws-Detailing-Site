import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("quote");

export default function QuotePage() {
  const { contact } = site;
  return (
    <>
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.heading}
        sub={contact.sub}
      />
      <section className="bg-bone py-16 text-ink sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ContactForm />
          <ContactInfo tone="bone" />
        </div>
      </section>
    </>
  );
}

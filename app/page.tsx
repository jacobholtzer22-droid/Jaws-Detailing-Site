import Hero from "@/components/Hero";
import IntroBlock from "@/components/IntroBlock";
import HowItWorks from "@/components/HowItWorks";
import PopularServices from "@/components/PopularServices";
import FeatureSection from "@/components/FeatureSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import WhyUs from "@/components/WhyUs";
import Faq from "@/components/Faq";
import QuoteSection from "@/components/QuoteSection";
import { site } from "@/site.config";

// Home metadata is inherited from the layout default (seo.pages.home).
export default function Home() {
  return (
    <>
      {/* 3. Hero + three service cards */}
      <Hero />
      {/* 4. Intro block */}
      <IntroBlock />
      {/* 5. Three easy steps */}
      <HowItWorks />
      {/* 6. Popular services (01/02/03) */}
      <PopularServices />
      {/* 7. Two alternating image+text features */}
      {site.features.map((feature) => (
        <FeatureSection key={feature.heading} feature={feature} />
      ))}
      {/* Signature before/after proof */}
      <BeforeAfterSlider />
      {/* 8. Service areas grid */}
      <ServiceAreasGrid limit={6} />
      {/* 9. Why choose us */}
      <WhyUs />
      {/* 10. FAQ */}
      <Faq />
      {/* 11. Bottom conversion: quote form + call */}
      <QuoteSection />
    </>
  );
}

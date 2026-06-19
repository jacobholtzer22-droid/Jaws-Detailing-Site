import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import InteriorSection from "@/components/InteriorSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import CtaBand from "@/components/CtaBand";

// Home metadata is inherited from the layout default (seo.pages.home).
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <InteriorSection />
      <BeforeAfterSlider />
      <ServiceArea />
      <Reviews />
      <CtaBand />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import InteriorSection from "@/components/InteriorSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <InteriorSection />
        <BeforeAfterSlider />
        <ServiceArea />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

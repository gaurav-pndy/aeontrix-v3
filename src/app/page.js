import Hero from "@/components/Home/Hero";
import PillarsSection from "@/components/Home/PillarsSection";
import BeforeAfterSection from "@/components/Home/BeforeAfterSection";
import GrowthPathSection from "@/components/Home/GrowthPathSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import GrowthInfrastructure from "@/components/Home/GrowthInfrastructure";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <BeforeAfterSection />
      <GrowthPathSection />
      <TestimonialsSection />
      <GrowthInfrastructure />
      <ContactSection />
    </>
  );
}

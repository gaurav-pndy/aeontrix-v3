"use client";

import CaseStudiesHero from "@/components/CaseStudies/CaseStudiesHero";
import CTASection from "@/components/CaseStudies/CTASection";
import Transformations from "@/components/CaseStudies/Transformations";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Transformations");

  return (
    <>
      <CaseStudiesHero activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "Transformations" && <Transformations />}
      {/* {tab === "Digital Identity" && <DigitalIdentitySection />} */}
      <CTASection />{" "}
    </>
  );
}

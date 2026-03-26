"use client";

import CaseStudiesHero from "@/components/CaseStudies/CaseStudiesHero";
import CTASection from "@/components/CaseStudies/CTASection";
import DigitalIdentity from "@/components/CaseStudies/DigitalIdentity";
import Transformations from "@/components/CaseStudies/Transformations";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Transformations");

  return (
    <>
      <CaseStudiesHero activeTab={activeTab} onTabChange={setActiveTab} />
      <Transformations />
      {/* {activeTab === "Digital Identity" && <DigitalIdentity />} */}
      <CTASection />{" "}
    </>
  );
}

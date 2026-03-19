import { notFound } from "next/navigation";
import { TRANSFORMATIONS } from "@/data/caseStudies";
import CaseHeroSection from "@/components/CaseStudies/CaseHeroSection";
import ProductWalkthrough from "@/components/CaseStudies/ProductWalkthrough";
import OperationalReality from "@/components/CaseStudies/OperationalReality";
import BeforeAfter from "@/components/CaseStudies/BeforeAfter";
import TheSolution from "@/components/CaseStudies/TheSolution";
import AISystems from "@/components/CaseStudies/AISystems";
import FinancialImpact from "@/components/CaseStudies/FinancialImpact";
import WhatWeBuilt from "@/components/CaseStudies/WhatWeBuilt";
import TechStack from "@/components/CaseStudies/TechStack";
import Testimonial from "@/components/CaseStudies/Testimonial";
import BeyondNumbers from "@/components/CaseStudies/BeyondNumbers";
import CTASection from "@/components/CaseStudies/CTASection";
import DiagnosticSection from "@/components/CaseStudies/DiagnosticSection";

export default async function DetailedCaseStudyPage({ params }) {
  const { slug } = await params;

  const study = TRANSFORMATIONS.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseHeroSection study={study} comingSoon={study.comingSoon} />
      <ProductWalkthrough
        media={study.walkthrough}
        comingSoon={study.comingSoon}
      />
      {!study.comingSoon && (
        <>
          <DiagnosticSection text={study.diagnostic?.text} />
          <OperationalReality items={study.operationalReality} />
          <BeforeAfter items={study.beforeAfter} />
          <TheSolution solution={study.solution} />
          {study.aiSystems && <AISystems systems={study.aiSystems} />}
          <FinancialImpact data={study.financialImpact} />
          <WhatWeBuilt items={study.whatWeBuilt} />
          <TechStack techStack={study.techStack} />
          <Testimonial testimonial={study.testimonial} />
          <BeyondNumbers items={study.beyondNumbers} />
          <CTASection />{" "}
        </>
      )}
    </>
  );
}

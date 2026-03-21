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

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const study = TRANSFORMATIONS.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Aeontrix",
    };
  }

  const title = `${study.title} Case Study | Aeontrix`;
  const description = study.comingSoon
    ? `This case study for ${study.title} is coming soon. Explore how Aeontrix builds AI-powered systems for real business impact.`
    : `${study.client} achieved measurable results with Aeontrix — ${study.metrics
        ?.map((m) => m.value + " " + m.label.toLowerCase())
        .join(", ")}.`;

  return {
    title,
    description,

    openGraph: {
      type: "article",
      url: `https://aeontrix.com/case-studies/${slug}`,
      title,
      description,
      images: [
        {
          url: "/aeontrix-emblem.png",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
      siteName: "Aeontrix",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/aeontrix-emblem.png"],
    },

    robots: {
      index: !study.comingSoon, // 👈 key optimization
      follow: true,
    },
  };
}

export default async function DetailedCaseStudyPage({ params }) {
  const { slug } = await params;

  const study = TRANSFORMATIONS.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseHeroSection study={study} comingSoon={study.comingSoon} />
      <div data-nav-theme="light">
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
      </div>
    </>
  );
}

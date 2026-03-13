import { notFound } from "next/navigation";
import { TRANSFORMATIONS } from "@/data/caseStudies";
import CaseHeroSection from "@/components/CaseStudies/CaseHeroSection";
import ProductWalkthrough from "@/components/CaseStudies/ProductWalkthrough";
import OperationalReality from "@/components/CaseStudies/OperationalReality";

export default async function DetailedCaseStudyPage({ params }) {
  const { slug } = await params;

  const study = TRANSFORMATIONS.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseHeroSection study={study} />
      <ProductWalkthrough media={study.walkthrough} />
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-primary rounded"></span>
            <span className="font-mono small-text font-semibold text-primary uppercase">
              What the Diagnostic Revealed{" "}
            </span>
          </div>

          {/* Diagnostic Box */}
          <div className="bg-muted border border-border rounded-xl p-4 md:p-8 ">
            <p className="body-text  leading-8 text-primary-dark italic">
              {study.diagnostic?.text}
            </p>
          </div>
        </div>
      </section>
      <OperationalReality items={study.operationalReality} />
    </>
  );
}

import { notFound } from "next/navigation";
import { TRANSFORMATIONS } from "@/data/caseStudies";
import CaseHeroSection from "@/components/CaseStudies/CaseHeroSection";

export default async function DetailedCaseStudyPage({ params }) {
  const { slug } = await params;

  const study = TRANSFORMATIONS.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseHeroSection study={study} />
      <div className="h-screen bg-white"></div>
    </>
  );
}

import { TRANSFORMATIONS } from "@/data/caseStudies";
import TransformationCard from "./TransformationCard";

export default function Transformations() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRANSFORMATIONS.map((study) => (
            <TransformationCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

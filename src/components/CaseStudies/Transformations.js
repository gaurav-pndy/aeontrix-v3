import { TRANSFORMATIONS } from "@/data/caseStudies";
import TransformationCard from "./TransformationCard";
import { motion } from "framer-motion";

export default function Transformations() {
  return (
    <section data-nav-theme="light" className="bg-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRANSFORMATIONS.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <TransformationCard key={study.id} study={study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

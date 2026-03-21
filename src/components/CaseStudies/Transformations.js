"use client";

import { motion } from "framer-motion";
import { TRANSFORMATIONS } from "@/data/caseStudies";
import TransformationCard from "./TransformationCard";

export default function Transformations() {
  return (
    <section data-nav-theme="light" className="bg-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TRANSFORMATIONS.map((study) => (
            <motion.div
              key={study.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <TransformationCard study={study} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

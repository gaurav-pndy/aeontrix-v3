"use client";

import { motion } from "framer-motion";

export default function TheSolution({ solution }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-primary rounded"></span>
            <span className="font-mono small-text font-semibold text-primary uppercase">
              The Solution — Codeforge + IntelliOps
            </span>
          </div>
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="body-text text-text leading-relaxed ">
            {solution?.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

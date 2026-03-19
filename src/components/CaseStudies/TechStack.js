"use client";

import { motion } from "framer-motion";

export default function TechStack({ techStack }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-primary rounded"></span>
            <span className="font-mono small-text font-semibold text-primary uppercase">
              {" "}
              Tech Stack
            </span>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-wrap gap-2"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -2 }}
              className="
                px-4 py-2 rounded-lg
                border border-border
                bg-surface
                small-text font-mono
                text-text
                transition
              "
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

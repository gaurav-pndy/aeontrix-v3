"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function BeyondNumbers({ items }) {
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
              Beyond the Numbers
            </span>
          </div>
        </motion.div>

        {/* List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2"
        >
          {items.map((text, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -2 }}
              className="
                flex items-start gap-4
                rounded-lg border border-border
                bg-surface
                p-4
                transition
              "
            >
              {/* Dot */}
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>

              {/* Text */}
              <p className="body-text text-text">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function BeforeAfter({ items }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-primary rounded"></span>
            <span className="font-mono small-text font-semibold text-primary uppercase">
              {" "}
              Before → After
            </span>
          </div>
        </motion.div>

        {/* Rows */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {items.map((row, i) => (
            <motion.div
              key={i}
              variants={item}
              className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6 border border-border bg-surface rounded-lg p-4"
            >
              {/* BEFORE */}
              <div>
                <p className="xs-text font-medium font-mono uppercase text-danger mb-1">
                  Before
                </p>
                <p className="text-text-muted body-text">{row.before}</p>
              </div>

              {/* ARROW */}
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary text-sm shrink-0">
                  <FaArrowRightLong className="hidden md:block" />
                  <FaArrowDownLong className="md:hidden" />
                </div>
              </div>

              {/* AFTER */}
              <div>
                <p className="xs-text font-medium font-mono uppercase text-success mb-1">
                  After
                </p>
                <p className="text-text body-text ">{row.after}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

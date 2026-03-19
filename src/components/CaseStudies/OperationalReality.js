"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function OperationalReality({ items }) {
  const [open, setOpen] = useState(null);

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
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-5 bg-primary rounded"></span>
            <span className="font-mono small-text font-semibold text-primary uppercase">
              The Operational Reality
            </span>
          </div>

          <p className="text-text-muted body-text mb-6">
            Understanding the challenges that were costing time, money, and
            growth. Click each to expand.
          </p>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {items.map((item, i) => {
            const expanded = open === i;

            return (
              <motion.div
                key={i}
                variants={itemAnim}
                className="border border-border rounded-lg bg-surface overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => setOpen(expanded ? null : i)}
                  className="w-full cursor-pointer flex flex-col md:flex-row md:items-center gap-4 justify-between p-4 text-left"
                >
                  <div>
                    <h3 className="body-text font-semibold text-text">
                      {item.title}
                    </h3>

                    <p className="small-text text-text-muted mt-1">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-primary body-text font-semibold font-mono">
                      {item.cost}
                    </span>

                    <motion.div
                      animate={{ rotate: expanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="grid md:grid-cols-2 gap-6 px-6 border-t border-border "
                    >
                      {/* Process */}
                      <div className="md:col-span-2 pt-4">
                        <p className="font-mono xs-text uppercase font-medium text-primary mb-2 ">
                          The Manual Process
                        </p>

                        <p className="small-text text-primary-dark leading-relaxed ">
                          {item.process}
                        </p>
                      </div>

                      {/* Time Cost */}
                      <div>
                        <p className="font-mono xs-text uppercase font-medium text-primary mb-2 ">
                          Time Cost
                        </p>

                        <ul className="space-y-1 small-text text-primary-dark">
                          {item.timeCost.map((t, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span>•</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Business Impact */}
                      <div className="pb-6">
                        <p className="font-mono xs-text uppercase font-medium text-primary mb-2 ">
                          Business Impact
                        </p>

                        <ul className="space-y-1 small-text text-primary-dark">
                          {item.businessImpact.map((b, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span>•</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

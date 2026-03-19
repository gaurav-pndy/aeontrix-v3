"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function AISystems({ systems }) {
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
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-5 bg-primary rounded"></span>
            <span className="font-mono small-text font-semibold text-primary uppercase">
              AI Systems Deployed — IntelliOps
            </span>
          </div>

          <p className="text-text-muted body-text mb-6">
            Understanding the challenges that were costing time, money, and
            growth. Click each to expand.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {systems.map((sys) => (
            <motion.div
              key={sys.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="border border-border rounded-lg bg-surface p-4 flex flex-col  md:p-6"
            >
              <div className="flex  flex-col md:flex-row md:items-center gap-2 mb-4">
                {/* Number */}
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center px-2 py-1 rounded-md bg-primary/10 text-primary font-mono xs-text ">
                  #{sys.id}
                </div>

                {/* Title */}
                <h3 className="body-text font-medium text-text leading-tight">
                  {sys.title}
                </h3>
              </div>
              {/* Description */}
              <p className="small-text text-text-muted mb-4 ">
                {sys.description}
              </p>

              {/* Impact */}
              <div className="mt-auto bg-primary/5 border border-primary/20 rounded-md px-3 py-2 font-mono xs-text text-primary">
                {sys.impact}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

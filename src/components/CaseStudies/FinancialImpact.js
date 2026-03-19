"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const rowAnim = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function FinancialImpact({ data }) {
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
              Financial Impact
            </span>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-border rounded-xl overflow-hidden bg-surface"
        >
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-2 px-2 sm:px-4 md:px-6 py-4 bg-primary/5 border-b border-border xs-text font-mono font-medium text-text-muted uppercase text-right">
            <span className="text-left">Category</span>
            <span className="text-danger">Before</span>
            <span className="text-primary">After</span>
            <span className="text-text">Savings</span>
          </div>

          {/* Data Rows */}
          {data.rows.map((row, i) => (
            <motion.div
              key={i}
              variants={rowAnim}
              className="grid grid-cols-4 px-2 sm:px-4 md:px-6 py-4 gap-2 border-b border-border xs-text md:body-text text-right"
            >
              <span className="text-text text-left">{row.category}</span>
              <span className="text-danger font-mono">{row.before}</span>
              <span className="text-primary font-mono">{row.after}</span>
              <span className="font-mono font-medium text-text">
                {row.savings}
              </span>
            </motion.div>
          ))}

          {/* Total Row */}
          <motion.div
            variants={rowAnim}
            className="grid grid-cols-4 gap-2 px-2 sm:px-4 md:px-6 py-4 bg-muted font-semibold text-right xs-text md:body-text"
          >
            <span className="text-text text-left">Monthly Total</span>
            <span className="text-danger font-mono">{data.total.before}</span>
            <span className="text-primary font-mono">{data.total.after}</span>
            <span className="font-mono text-text">{data.total.savings}</span>
          </motion.div>

          {/* Bottom Impact Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary  text-center py-4 small-text text-muted font-medium"
          >
            Projected Annual Impact:{" "}
            <span className="font-medium subtitle-text font-mono text-white">
              {data.annualImpact}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

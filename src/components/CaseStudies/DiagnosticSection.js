"use client";

import { motion } from "framer-motion";

export default function DiagnosticSection({ text }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-1 h-5 bg-primary rounded"></span>
          <span className="font-mono small-text font-semibold text-primary uppercase">
            What the Diagnostic Revealed
          </span>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          className="
            bg-muted
            border border-border
            rounded-xl
            p-4 md:p-8
            transition
          "
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text leading-8 text-primary-dark italic"
          >
            {text}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

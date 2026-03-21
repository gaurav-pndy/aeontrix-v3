"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section data-nav-theme="light" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden
            rounded-xl
            bg-primary
            p-8 md:p-10 
            text-center
            shadow-lg
          "
        >
          {/* Content */}
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="large-text font-semibold text-white mb-2">
              Prescription without diagnosis is malpractice.
            </h2>

            <p className="text-white/80 body-text mb-8">
              Every engagement starts with The Diagnostic. We identify what's
              broken, quantify what it's costing you, and deliver a prioritized
              roadmap.
            </p>

            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="
                mx-auto flex items-center gap-2
                rounded-lg
                bg-white
                px-4 sm:px-6 py-3 cursor-pointer
                font-semibold
                text-primary
                shadow-md
                hover:shadow-lg
                transition 
              "
            >
              Start with The Diagnostic <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

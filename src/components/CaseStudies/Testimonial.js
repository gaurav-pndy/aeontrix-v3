"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial({ testimonial }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            relative rounded-xl p-8 md:p-10
            bg-background-dark
            text-white
            overflow-hidden
            shadow-lg
          "
        >
          {/* Quote mark */}
          <div className="absolute top-4 left-6 md:left-8 text-primary/50 text-5xl ">
            <FaQuoteLeft />
          </div>

          {/* Quote */}
          <p className="relative z-10 subtitle-text leading-relaxed mb-6 text-white/90 italic">
            "{testimonial.quote}"
          </p>

          {/* Author */}
          <div className="relative z-10">
            <p className="text-primary font-semibold">{testimonial.name}</p>

            <p className="text-white/60 small-text mt-1">{testimonial.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

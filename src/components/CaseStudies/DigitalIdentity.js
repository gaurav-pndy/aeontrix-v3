"use client";

import { motion } from "framer-motion";
import { DIGITAL_IDENTITY } from "@/data/caseStudies";
import { MdArrowOutward } from "react-icons/md";

export default function DigitalIdentity() {
  return (
    <section data-nav-theme="light" className="bg-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-mono xs-text text-primary mb-2 uppercase">
            Workstream
          </p>

          <h2 className="subtitle-text font-medium">
            Digital Identity — High-Performance Web Presence
          </h2>

          <p className="text-text-muted body-text mt-1 max-w-2xl">
            Every build delivered through the Digital Identity workstream —
            custom Next.js architecture, conversion-optimized, SEO-ready,
            mobile-first. Not a brochure — a revenue-generating asset.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGITAL_IDENTITY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex flex-col h-full rounded-lg border border-border bg-surface shadow-sm overflow-hidden transition hover:shadow-md"
            >
              {/* Image Placeholder */}
              <div className="relative min-h-56 overflow-hidden">
                {/* Image / Placeholder */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full obje"
                  />
                ) : (
                  <div className="absolute inset-0 bg-muted flex items-center justify-center text-text-muted small-text">
                    Hero screenshot
                  </div>
                )}

                {/* Overlay (for readability) */}
                <div className="absolute h-[50%] inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent" />

                {/* Tags (on top of image) */}
                <div className="relative z-10 p-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] bg-black/60 backdrop-blur text-white px-2 py-1 font-mono rounded"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 md:p-6 md:pt-4">
                {/* Title */}
                <div className="flex justify-between items-center  gap-2 mb-2">
                  <h3 className="font-medium text-text subtitle-text">
                    {item.title}
                  </h3>

                  <a
                    href={item.href}
                    target="_blank"
                    className="text-primary text-[0.65rem] font-medium font-mono  flex gap-1 items-center hover:underline"
                  >
                    Visit <MdArrowOutward />
                  </a>
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm mb-6">
                  {item.description}
                </p>

                {/* Result */}
                <div className="bg-primary/5 border border-primary/10 rounded-md p-3  mt-auto min-h-28">
                  <p className="text-primary text-[0.65rem] font-medium font-mono mb-1">
                    RESULT
                  </p>
                  <p className="text-text small-text">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

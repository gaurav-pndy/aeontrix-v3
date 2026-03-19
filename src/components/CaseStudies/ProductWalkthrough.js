"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductWalkthrough({ media = [], comingSoon }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % media.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + media.length) % media.length);

  const current = media[index];

  return (
    <section
      className={`py-10 ${!comingSoon ? "pt-80 md:pt-68 lg:pt-50" : "pt-20"} bg-white`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1 h-5 bg-primary rounded"></span>
          <span className="font-mono small-text font-semibold text-primary uppercase">
            Product Walkthrough
          </span>
        </div>

        {/* -------- COMING SOON -------- */}
        {comingSoon ? (
          <div className="relative rounded-xl border border-border bg-muted overflow-hidden">
            <div className="aspect-16/8 flex items-center justify-center text-center">
              {" "}
              <div>
                <p className="text-primary font-semibold mb-2 font-mono subtitle-text">
                  Coming Soon
                </p>
                <p className="text-text-muted small-text">
                  Case study details are being prepared
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* -------- NORMAL WALKTHROUGH -------- */}

            <div className="relative rounded-xl border border-border bg-muted overflow-hidden">
              <div className="aspect-16/8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full"
                  >
                    {current?.type === "video" ? (
                      <video
                        src={current.src}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : current?.src ? (
                      <img
                        src={current.src}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-text-muted h-full flex flex-col items-center justify-center">
                        <ImageIcon className="mb-2" />
                        Screenshot or Video
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white/80 backdrop-blur"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white/80 backdrop-blur"
              >
                <ChevronRight size={18} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 text-xs bg-black/70 font-mono text-white px-2.5 py-1 rounded">
                {index + 1} / {media.length}
              </div>
            </div>

            {/* Thumbnails */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex gap-2 mt-4 flex-wrap"
            >
              {media.map((item, i) => (
                <motion.button
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -2 }}
                  onClick={() => setIndex(i)}
                  className={`w-18 h-12 cursor-pointer rounded-md border flex items-center justify-center transition ${
                    i === index
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted"
                  }`}
                >
                  {item.src ? (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <ImageIcon size={18} className="text-text-muted" />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}

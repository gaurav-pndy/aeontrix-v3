"use client";

import { motion } from "framer-motion";

export default function CaseHeroSection({ study, comingSoon }) {
  return (
    <section className="bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-28 md:pt-36 pb-28 md:pb-20 relative">
        {/* Tags */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex gap-2 mb-6 flex-wrap"
        >
          {study.hero.tags?.slice(0, 1).map((tag) => (
            <motion.span
              key={tag}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono xs-text text-primary"
            >
              {tag.toUpperCase()}
            </motion.span>
          ))}

          {study.hero.tags?.slice(1).map((tag) => (
            <motion.span
              key={tag}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 rounded-md border border-primary-soft/30 bg-primary-soft/10 px-4 py-1.5 font-mono xs-text text-primary-soft"
            >
              {tag.toUpperCase()}
            </motion.span>
          ))}

          {comingSoon && (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 rounded-md border border-primary-soft/30 bg-primary-soft/20 px-4 py-1.5 font-mono xs-text text-White uppercase"
            >
              Coming Soon{" "}
            </motion.span>
          )}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-heading"
        >
          {study.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="large-text text-text-muted max-w-xl mt-2"
        >
          {study.client}
        </motion.p>

        {/* Meta */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.25 },
            },
          }}
          className="flex flex-col md:flex-row gap-4 md:gap-10 mt-8"
        >
          {study.hero.client && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="xs-text text-text-muted uppercase tracking-wider">
                Client
              </p>
              <p className="body-text">{study.hero.client}</p>
            </motion.div>
          )}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="xs-text text-text-muted uppercase tracking-wider">
              {comingSoon ? "Status" : "TImeline"}
            </p>
            <p className="body-text">{study.hero.duration}</p>
          </motion.div>
        </motion.div>

        {/* Floating Metrics */}
        {!comingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="absolute left-1/2 -translate-x-1/2 w-full bottom-0 translate-y-3/4 flex justify-center"
          >
            <div className="max-w-6xl mx-auto px-4 w-full">
              <div className="bg-surface rounded-lg shadow-lg border border-border p-4 md:p-6">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.07 } },
                  }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                  {study.metricsFull.map((metric) => (
                    <motion.div
                      key={metric.label}
                      variants={{
                        hidden: { opacity: 0, y: 14 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ y: -3 }}
                      className="bg-muted rounded-lg p-4 text-center border border-border transition"
                    >
                      <div className="text-primary large-text font-semibold font-mono">
                        {metric.value}
                      </div>

                      <div className="xs-text text-text-muted mt-1 leading-tight">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

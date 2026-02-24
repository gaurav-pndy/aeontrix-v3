"use client";

import { motion, useTransform } from "framer-motion";

const DATA = [
  {
    title: "Acquisition",
    desc: "Design predictable systems that attract and qualify high-intent clients — automatically.",
  },
  {
    title: "Monetization",
    desc: "Capture more value per client through smarter pricing, expansion paths, and automation.",
  },
  {
    title: "Retention",
    desc: "Extend client lifetime by proving value continuously and preventing churn before it starts.",
  },
  {
    title: "Intelligence",
    desc: "Replace instinct with evidence using real-time metrics, forecasts, and decision support.",
  },
];

export default function PillarTextColumn({ scrollYProgress }) {
  const STEP_COUNT = 4;
  const STEP_SIZE = 1 / STEP_COUNT; // 0.25
  return (
    <div className="relative h-full overflow-hidden flex items-center">
      {DATA.map((item, i) => {
        const start = i * STEP_SIZE;
        const phase1 = start + STEP_SIZE * 0.3;
        const phase2 = start + STEP_SIZE * 0.55;
        const phaseHold = start + STEP_SIZE * 0.8;
        const end = start + STEP_SIZE * 0.95;

        const y = useTransform(
          scrollYProgress,
          [start, phase2, phaseHold, end],
          ["100%", "0%", "0%", "-100%"],
        );

        const opacity = useTransform(
          scrollYProgress,
          [start, phase1, phase2, phaseHold, end],
          [0, 1, 1, 1, 0],
        );

        return (
          <motion.div
            key={i}
            style={{ y, opacity }}
            className="absolute inset-0 flex items-center xl:pr-24"
          >
            <div className="flex items-start gap-10">
              <div>
                <div className="xl:hidden  border border-primary-dark rounded-full w-10 md:w-16 h-10 md:h-16 md:text-xl shrink-0 flex justify-center items-center font-mono text-primary-dark mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold text-text">
                  {item.title}
                </h2>
                <p className="mt-4 md:text-xl text-muted-foreground max-w-md">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { motion, useTransform, useSpring } from "framer-motion";

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
  const STEP_SIZE = 1 / STEP_COUNT;

  const spring = {
    stiffness: 80,
    damping: 20,
    mass: 0.9,
  };

  return (
    <div className="relative h-full overflow-hidden flex items-center">
      {DATA.map((item, i) => {
        const start = i * STEP_SIZE;
        const end = start + STEP_SIZE;

        const rawOpacity = useTransform(
          scrollYProgress,
          [start, start + STEP_SIZE * 0.25, end - STEP_SIZE * 0.25, end],
          [0, 1, 1, 0],
        );

        const rawScale = useTransform(
          scrollYProgress,
          [start, start + STEP_SIZE * 0.25],
          [0.97, 1],
        );

        const opacity = useSpring(rawOpacity, spring);
        const scale = useSpring(rawScale, spring);

        return (
          <motion.div
            key={i}
            style={{ opacity, scale }}
            className="absolute inset-0  flex items-center pt-28 xl:pr-18"
          >
            <div className="flex items-start   gap-10">
              <div className="flex gap-4">
                <div className="xl:hidden mt-1 border border-primary-dark rounded-full w-10 md:w-16 h-10 md:h-16 md:text-xl shrink-0 flex justify-center items-center font-mono text-primary-dark ">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  <h2 className="text-4xl md:text-6xl font-medium text-text">
                    {item.title}
                  </h2>

                  <p className="mt-2 md:mt-4 md:text-xl text-muted-foreground max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

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

export default function PillarTimeline({ scrollYProgress }) {
  const STEP_COUNT = DATA.length;
  const STEP_SIZE = 1 / STEP_COUNT;

  return (
    <div className="flex flex-col gap-6 2xl:gap-10  h-full justify-between max-h-160 pb-10">
      {DATA.map((item, i) => {
        const start = i * STEP_SIZE;
        const end = start + STEP_SIZE;

        const active = useTransform(
          scrollYProgress,
          [start, start + STEP_SIZE * 0.5],
          [0, 1],
        );

        const bgColor = useTransform(active, [0, 1], ["#ffffff", "#0a5850"]);

        const textColor = useTransform(active, [0, 1], ["#6b7280", "#ffffff"]);

        const contentOpacity = useTransform(active, [0, 1], [0.2, 1]);

        return (
          <div key={i} className="flex items-start gap-6 2xl:gap-8">
            {/* STEP */}
            <motion.div
              style={{ backgroundColor: bgColor, color: textColor }}
              className="flex h-12 2xl:h-14 w-12 2xl:w-14 items-center justify-center rounded-full border border-[#0a5850] font-mono shrink-0"
            >
              {String(i + 1).padStart(2, "0")}
            </motion.div>

            {/* CONTENT */}
            <motion.div style={{ opacity: contentOpacity }}>
              <h2 className="text-4xl 2xl:text-5xl font-medium text-text">
                {item.title}
              </h2>
              <p className="mt-1 2xl:mt-3 text-muted-foreground text-sm 2xl:text-base max-w-md">
                {item.desc}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

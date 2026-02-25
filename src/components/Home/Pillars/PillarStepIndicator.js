"use client";

import { motion, useTransform } from "framer-motion";

const STEPS = [1, 2, 3, 4];

export default function PillarStepIndicator({ scrollYProgress }) {
  const STEP_COUNT = 4;
  const STEP_SIZE = 1 / STEP_COUNT; // 0.25
  return (
    <div className="relative flex flex-col justify-between">
      {/* PLUS GRID */}
      <div className="mb-12 grid grid-cols-4 gap-x-5 gap-y-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-primary text-3xl"
          >
            +
          </motion.div>
        ))}
      </div>

      {/* STEPS */}
      <div className="relative flex  flex-col gap-10">
        {/* STEPS */}
        <div className="relative flex flex-col items-start">
          {STEPS.map((step, i) => {
            const start = i * STEP_SIZE;

            const activeStart = start + STEP_SIZE * 0.45;
            const activeEnd = start + STEP_SIZE * 0.85;

            const active = useTransform(
              scrollYProgress,
              [activeStart, activeEnd],
              [0, 1],
            );

            const bgColor = useTransform(
              active,
              [0, 1],
              ["#ffffff", "#0a5850"],
            );

            const textColor = useTransform(
              active,
              [0, 1],
              ["#6b7280", "#ffffff"],
            );

            // Line fill for PREVIOUS connection
            const lineFill = useTransform(
              scrollYProgress,
              [activeStart - STEP_SIZE * 0.3, activeStart],
              [0, 1],
            );

            return (
              <div key={step} className="flex  flex-col items-center">
                {/* STEP */}
                <motion.div
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                  }}
                  className="
            relative z-10
            flex h-16 w-16 items-center justify-center
            rounded-full
            border border-[#0a5850]
            text-xl font-mono
          "
                >
                  {String(step).padStart(2, "0")}
                </motion.div>

                {/* CONNECTING LINE (only if not last step) */}
                {i < STEPS.length - 1 && (
                  <div className="relative h-6 my-1 w-px bg-border overflow-hidden">
                    <motion.div
                      style={{ scaleY: lineFill }}
                      transformOrigin="top"
                      className="absolute inset-0 bg-[#0a5850]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

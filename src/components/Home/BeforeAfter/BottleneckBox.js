"use client";

import GlitchText from "@/components/GlitchText";
import { AnimatePresence, motion } from "framer-motion";

export default function BottleneckBox({ isAfter, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={
        active
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.98 }
      }
      transition={{
        duration: 0.7,
        delay: 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-lg flex flex-col row-span-2 relative "
    >
      {/* BEFORE BORDER */}
      {!isAfter && (
        <div className="absolute inset-0 rounded-lg border border-danger/40" />
      )}

      {/* AFTER BORDER */}
      {isAfter && (
        <div className="absolute inset-0 rounded-lg border border-success/40 shadow-[0_0_10px_rgba(5,150,105,0.4)]" />
      )}

      <h4 className="text-white bg-[#0e0e0e] rounded-t-lg px-4 py-2 text-xs md:large-text">
        Bottleneck Detected
      </h4>

      <div className="flex p-2 h-[70%] justify-center items-center">
        <div className="grid grid-cols-2 w-fit ">
          {[
            "/before-after/pie-1.png",
            "/before-after/pie-2.png",
            "/before-after/pie-4.png",
            "/before-after/pie-3.png",
          ].map((src, i) =>
            isAfter ? (
              <motion.img
                key={i}
                src={src}
                animate={{ scale: [0.8, 1, 0.8] }}
                transition={{
                  duration: 2,
                  delay: i * 0.25,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="w-10 md:w-28"
              />
            ) : (
              <motion.img
                key={i}
                src={src}
                className="w-10 md:w-28 grayscale opacity-40"
              />
            ),
          )}
        </div>
      </div>

      <div className="md:absolute right-6 p-2 font-light text-xs md:body-text bottom-2 md:bottom-10 text-white/40">
        <GlitchText
          text={isAfter ? "TASK COMPLETED" : "TASK DELAYED"}
          active={true}
        />
      </div>
    </motion.div>
  );
}

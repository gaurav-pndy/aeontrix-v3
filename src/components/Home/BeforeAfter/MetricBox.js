"use client";

import { useTransform, motion } from "framer-motion";

export default function MetricBox({
  title,
  before,
  after,
  beforeOpacity,
  afterOpacity,
}) {
  return (
    <div className="h-full relative rounded-lg   ">
      {/* BEFORE BORDER */}
      <motion.div
        style={{ opacity: beforeOpacity }}
        className="absolute inset-0 rounded-lg border overflow-hidden border-danger/40"
      />

      {/* AFTER BORDER */}
      <motion.div
        style={{ opacity: afterOpacity }}
        className="absolute inset-0 rounded-lg border border-success/40 shadow-[0_0_10px_rgba(85,153,102,0.4)]"
      />
      <h4 className="text-white bg-[#0e0e0e] rounded-t-lg px-2 md:px-4 py-2 text-xs md:large-text">
        {title}
      </h4>

      {/* BEFORE */}
      <motion.ul
        style={{ opacity: beforeOpacity }}
        className="absolute inset-0 w-full p-2 md:p-4 pt-12 md:pt-16 space-y-1 md:space-y-2 text-xs md:body-text "
      >
        {before.map(([k, v]) => (
          <li key={k} className="flex justify-between text-white/70">
            <span>{k}</span>
            <span className="text-danger font-semibold">{v}</span>
          </li>
        ))}
      </motion.ul>

      {/* AFTER */}
      <motion.ul
        style={{ opacity: afterOpacity }}
        className="absolute inset-0 w-full p-2 md:p-4 pt-12 md:pt-16 space-y-1 md:space-y-2 text-xs md:body-text "
      >
        {after.map(([k, v]) => (
          <li key={k} className="flex justify-between text-white/80">
            <span>{k}</span>
            <span className="text-success font-semibold">{v}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

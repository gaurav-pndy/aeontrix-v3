"use client";
/**
 * @author: @dorianbaffier
 * @description: Shimmer Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function ShimmerText({ children, className }) {
  return (
    <div className="inline-block ">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden  "
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          animate={{
            backgroundPosition: ["-200% center", "200% center"],
          }}
          className={cn(
            "bg-size-[200%_100%] bg-linear-to-r from-primary via-white to-primary bg-clip-text  text-transparent ",
            className,
          )}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {children}
        </motion.h1>
      </motion.div>
    </div>
  );
}

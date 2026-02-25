"use client";

import { useTransform, motion } from "framer-motion";

export default function HeaderToggle({ isAfter }) {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-6 px-4">
      <span
        className={` ${isAfter ? "text-white/50" : "text-white"} body-text md:display-text`}
      >
        Before Aeontrix
      </span>

      <div className="h-6 md:h-10 w-12 md:w-22 rounded-full bg-white/10 p-1">
        <motion.div
          animate={{ x: isAfter ? 48 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="h-8 w-8 hidden md:block rounded-full bg-white"
        />
        <motion.div
          animate={{ x: isAfter ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="h-4 w-4 md:hidden rounded-full bg-white"
        />
      </div>

      {!isAfter ? (
        <motion.span className="body-text md:display-text text-white/50">
          After Aeontrix
        </motion.span>
      ) : (
        <div className="inline-block body-text md:display-text">
          <motion.div className="relative overflow-hidden  ">
            <motion.h1
              animate={{
                backgroundPosition: ["-200% center", "200% center"],
              }}
              className="bg-size-[200%_100%] bg-linear-to-r from-primary via-white to-primary bg-clip-text  text-transparent "
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              After Aeontrix
            </motion.h1>
          </motion.div>
        </div>
      )}
    </div>
  );
}

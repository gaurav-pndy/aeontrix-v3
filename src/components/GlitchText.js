"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function GlitchText({ text, active }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay((prev) =>
        text
          .split("")
          .map((char, i) => {
            if (i < iterations) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iterations += 1 / 3;

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [active, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono tracking-wider"
    >
      {display}
    </motion.span>
  );
}
"use client";

import { motion } from "framer-motion";

export default function CustomButton({
  text,
  bg = "var(--color-intel-blue)",
  border = "var(--color-intel-blue)",
  shadow = "rgba(6,60,130,1)",
  type = "button",
  onClick,
  className = "",
  children,
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{
        y: 3,
        scale: 0.98,
        boxShadow: `0 2px 0 ${shadow}`,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`
        relative px-8 py-2.5 rounded-lg cursor-pointer
        text-white font-medium border
        ${className}
      `}
      style={{
        background: bg,
        borderColor: border,
        boxShadow: `0 6px 0 ${shadow}`,
      }}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {text}
        {children}
      </span>
    </motion.button>
  );
}

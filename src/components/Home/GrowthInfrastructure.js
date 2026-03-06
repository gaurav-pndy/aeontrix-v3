"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaBullhorn,
  FaDollarSign,
  FaCode,
  FaRobot,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";
import { useSpring } from "framer-motion";

const ICONS = [
  { icon: FaBullhorn, color: "text-intel-purple" },
  { icon: FaDollarSign, color: "text-success" },
  { icon: FaCode, color: "text-intel-blue" },
  { icon: FaRobot, color: "text-danger" },
  { icon: FaPaintBrush, color: "text-warning" },
  { icon: FaUsers, color: "text-primary" },
];

const words = ["Connected", "Systems.", "Unified", "Intelligence."];

const COLORS = [
  "#077659", // brand green
  "#059669", // success
  "#084eaa", // blue
  "#885ce6", // purple
  "#f97316", // warning
  "#b80005", // danger
];

export default function GrowthInfrastructure() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setContainerWidth(width);
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const animationProgress = useTransform(
    scrollYProgress,
    [0, 0.65], // icons complete at 65%
    [0, 1],
    { clamp: true },
  );

  const rawLogoY = useTransform(animationProgress, [0, 0.25], [-200, 0]);
  const rawLogoScale = useTransform(animationProgress, [0.25, 0.55], [2.5, 1]);

  const rawIconsOpacity = useTransform(animationProgress, [0.45, 0.65], [0, 1]);

  // Top text appears slightly BEFORE icons fully done
  const rawTopTextOpacity = useTransform(
    animationProgress,
    [0.6, 0.75],
    [0, 1],
  );
  const rawTopTextY = useTransform(animationProgress, [0.6, 0.75], [40, 0]);

  const readingProgress = useTransform(scrollYProgress, [0.65, 1], [0, 1], {
    clamp: true,
  });

  const rawLineHeight = useTransform(readingProgress, [0, 0.5], [0, 120]);
  const rawLineOpacity = useTransform(readingProgress, [0, 0.1], [0, 1]);

  const rawBottomTextOpacity = useTransform(readingProgress, [0.4, 1], [0, 1]);
  const rawBottomTextY = useTransform(readingProgress, [0.4, 1], [30, 0]);
  /* SPRING SMOOTHING */

  const springConfig = {
    stiffness: 70,
    damping: 20,
    mass: 1,
  };

  const logoY = useSpring(rawLogoY, springConfig);
  const logoScale = useSpring(rawLogoScale, springConfig);

  const iconsOpacity = useSpring(rawIconsOpacity, springConfig);

  const topTextOpacity = useSpring(rawTopTextOpacity, springConfig);
  const topTextY = useSpring(rawTopTextY, springConfig);

  const lineHeight = useSpring(rawLineHeight, springConfig);
  const lineOpacity = useSpring(rawLineOpacity, springConfig);

  const bottomTextOpacity = useSpring(rawBottomTextOpacity, springConfig);
  const bottomTextY = useSpring(rawBottomTextY, springConfig);

  return (
    <section ref={ref} className="relative h-[250vh] pt-16">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {" "}
        {/* TOP TEXT */}
        <motion.div
          style={{ opacity: topTextOpacity, y: topTextY }}
          className="absolute top-24 text-center max-w-4xl px-6"
        >
          <h2 className="large-text text-white mb-6">
            You don't have to work with 6 different Agencies
          </h2>

          <p className="subtitle-text text-white/70 leading-relaxed">
            Aeontrix takes care of –{" "}
            <span className="text-intel-purple">Marketing</span>,{" "}
            <span className="text-success">Sales</span>,{" "}
            <span className="text-intel-blue">Software Development</span>,{" "}
            <span className="text-danger">Automation</span>,{" "}
            <span className="text-warning">Design</span>,{" "}
            <span className="text-primary">Hiring</span>.
          </p>

          <p className="mt-4 text-white/60">
            Everything required for your growth.
          </p>
        </motion.div>
        {/* CENTER LOGO */}
        <motion.div
          style={{ y: logoY, scale: logoScale }}
          className="absolute z-20 w-10 md:w-16 lg:w-28 h-10 md:h-16 lg:h-28 rounded-lg bg-black border border-gray-800 flex items-center justify-center text-4xl font-bold text-white "
        >
          <img
            src="/aeontrix-logo.png"
            alt="Aeontrix Logo"
            className="w-full h-full"
          />
        </motion.div>
        {/* ICON ARCH */}
        {ICONS.map((item, i) => {
          const safeWidth = containerWidth || 1200; // fallback width

          const total = ICONS.length;

          const maxWidth = safeWidth * 0.42;
          const minGap = safeWidth * 0.12;
          const curveHeight = safeWidth * 0.12;

          const half = Math.floor(total / 2);
          const isLeft = i < half;

          const sideIndex = isLeft ? i : i - half;
          const sideCount = half;

          const spread = (maxWidth - minGap) / (sideCount - 1);

          const xTarget = isLeft
            ? -maxWidth + sideIndex * spread
            : minGap + sideIndex * spread;

          const t = xTarget / maxWidth;

          const yTarget = curveHeight * (t * t);

          const rotationTarget = t * 15;

          const rawX = useTransform(
            animationProgress,
            [0.4, 0.7],
            [0, xTarget],
          );
          const rawY = useTransform(
            animationProgress,
            [0.4, 0.7],
            [0, yTarget],
          );
          const rawRotate = useTransform(
            animationProgress,
            [0.4, 0.7],
            [0, rotationTarget],
          );

          const x = useSpring(rawX, springConfig);
          const y = useSpring(rawY, springConfig);
          const rotate = useSpring(rawRotate, springConfig);

          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              style={{ x, y, rotate, opacity: iconsOpacity }}
              className="absolute w-10 md:w-16 lg:w-28 h-10 md:h-16 lg:h-28  rounded-lg bg-black border border-gray-800 flex items-center justify-center shadow-lg"
            >
              <Icon
                className={`${item.color} text-2xl md:text-4xl lg:text-6xl`}
              />
            </motion.div>
          );
        })}
        {/* CENTER LINE */}
        <motion.div
          style={{
            height: lineHeight,
            opacity: lineOpacity,
          }}
          className="absolute top-[55%] w-px bg-primary"
        />
        {/* BOTTOM TEXT */}
        <motion.div
          style={{
            opacity: bottomTextOpacity,
            y: bottomTextY,
          }}
          className="mt-90 text-center"
        >
          <div className="flex gap-1 justify-center body-text font-medium">
            {words.map((word, i) => (
              <motion.span
                key={i}
                animate={{
                  color: COLORS,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  delay: i * 0.4,
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

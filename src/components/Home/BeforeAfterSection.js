"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  motion,
} from "framer-motion";
import BottleneckBox from "./BeforeAfter/BottleneckBox";
import HeaderToggle from "./BeforeAfter/HeaderToggle";
import MetricBox from "./BeforeAfter/MetricBox";
import BoxReveal from "./BeforeAfter/BoxReveal";

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const [isAfter, setIsAfter] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0.55) setIsAfter(true);
      else setIsAfter(false);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0.02) setHasEntered(true);
    });
  }, [scrollYProgress]);

  const progress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 20,
  });

  /* Timeline */
  const scanStart = 0.45;
  const scanEnd = 0.65;

  const scanX = useTransform(progress, [scanStart, scanEnd], ["100%", "-100%"]);

  const beforeOpacity = useTransform(
    progress,
    [scanStart - 0.05, scanStart],
    [1, 0],
  );

  const afterOpacity = useTransform(progress, [scanStart, scanEnd], [0, 1]);

  return (
    <section ref={ref} className="relative h-[380vh] w-full">
      <div className="sticky top-0 h-screen overflow-hidden pt-6 md:pt-16 ">
        {/* HEADER */}
        <HeaderToggle
          isAfter={isAfter}
          beforeOpacity={beforeOpacity}
          afterOpacity={afterOpacity}
        />

        {/* GRID */}
        <div className="max-w-360 px-4 mx-auto mt-4 md:mt-16 grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-2 md:gap-6 h-[90%] md:h-[85%] lg:h-[75%]">
          <BottleneckBox isAfter={isAfter} active={hasEntered} />{" "}
          <BoxReveal index={1} active={hasEntered}>
            <MetricBox
              title="Acquisition"
              beforeOpacity={beforeOpacity}
              afterOpacity={afterOpacity}
              before={[
                ["Leads", "Unscored"],
                ["Outreach", "Manual"],
                ["Conversion", "Unknown"],
                ["Attribution", "Missing"],
              ]}
              after={[
                ["Leads", "Scored"],
                ["Outreach", "Automated"],
                ["Conversion", "Tracked"],
                ["Attribution", "Unified"],
              ]}
            />{" "}
          </BoxReveal>
          <BoxReveal index={2} active={hasEntered}>
            <MetricBox
              title="Monetization"
              beforeOpacity={beforeOpacity}
              afterOpacity={afterOpacity}
              before={[
                ["Pricing", "Flat"],
                ["Upsells", "None"],
                ["Retainers", "Ad-hoc"],
                ["Forecast", "Guess"],
              ]}
              after={[
                ["Pricing", "Engineered"],
                ["Upsells", "Automated"],
                ["Retainers", "Systemized"],
                ["Forecast", "Predictive"],
              ]}
            />{" "}
          </BoxReveal>
          <BoxReveal index={3} active={hasEntered}>
            <ProcessEfficiency
              isAfter={isAfter}
              beforeOpacity={beforeOpacity}
              afterOpacity={afterOpacity}
            />{" "}
          </BoxReveal>
          <BoxReveal index={4} active={hasEntered}>
            <MetricBox
              title="Retention"
              beforeOpacity={beforeOpacity}
              afterOpacity={afterOpacity}
              before={[
                ["Health Score", "None"],
                ["Churn Risk", "Unknown"],
                ["Check-ins", "Manual"],
                ["Expansion", "Random"],
              ]}
              after={[
                ["Health Score", "Live"],
                ["Churn Risk", "Flagged"],
                ["Check-ins", "Triggered"],
                ["Expansion", "Systemized"],
              ]}
            />{" "}
          </BoxReveal>
          <BoxReveal index={5} active={hasEntered}>
            <MetricBox
              title="Intelligence"
              beforeOpacity={beforeOpacity}
              afterOpacity={afterOpacity}
              before={[
                ["CAC", "Unknown"],
                ["LTV", "Untracked"],
                ["Margin", "Guess"],
                ["Reports", "Manual"],
              ]}
              after={[
                ["CAC", "Live"],
                ["LTV", "Live"],
                ["Margin", "Real-Time"],
                ["Reports", "Auto"],
              ]}
            />{" "}
          </BoxReveal>
          <BoxReveal index={6} active={hasEntered}>
            <DataScatter
              beforeOpacity={beforeOpacity}
              afterOpacity={afterOpacity}
            />{" "}
          </BoxReveal>
        </div>

        {/* SCAN */}
        <motion.div
          style={{ x: scanX }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-success shadow-[0_0_40px_#059669]" />
          <div className="absolute inset-0 bg-linear-to-r from-success/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function ProcessEfficiency({ isAfter, beforeOpacity, afterOpacity }) {
  const baseValue = useMotionValue(54);

  const smoothValue = useSpring(baseValue, {
    stiffness: 40,
    damping: 18,
  });

  const rounded = useTransform(smoothValue, (v) => Math.round(v));

  useEffect(() => {
    if (isAfter) {
      baseValue.set(98);
    } else {
      baseValue.set(54);
    }
  }, [isAfter, baseValue]);

  return (
    <div className="rounded-lg relative h-full">
      {/* BEFORE BORDER */}
      <motion.div
        style={{ opacity: beforeOpacity }}
        className="absolute inset-0 rounded-lg border border-danger/40"
      />

      {/* AFTER BORDER */}
      <motion.div
        style={{ opacity: afterOpacity }}
        className="absolute inset-0 rounded-lg border border-success/40 shadow-[0_0_14px_rgba(5,150,105,0.4)]"
      />

      <h4 className="text-white bg-[#0e0e0e] rounded-t-lg px-4 py-2 caption-text md:large-text">
        Process Efficiency
      </h4>

      {/* NUMBER */}
      <motion.div className="text-4xl md:text-6xl lg:text-7xl  text-white px-4 pt-2 ">
        <motion.span>{rounded}</motion.span>
        <span className="text-3xl ml-1">%</span>
      </motion.div>

      {/* TEXT TRANSITION */}
      <div className="relative h-8 mt-4 px-4 overflow-hidden">
        <motion.div
          key={isAfter ? "after" : "before"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute text-xs md:body-text font-semibold ${isAfter ? "text-success" : "text-danger"}`}
        >
          {isAfter ? "Completely / Automated" : "Partially / Manual"}
        </motion.div>
      </div>
    </div>
  );
}

function DataScatter({ beforeOpacity, afterOpacity }) {
  return (
    <div className="h-full rounded-lg relative ">
      {/* BEFORE BORDER */}
      <motion.div
        style={{ opacity: beforeOpacity }}
        className="absolute inset-0 rounded-lg border overflow-hidden border-danger/40 "
      />
      {/* AFTER BORDER */}
      <motion.div
        style={{ opacity: afterOpacity }}
        className="absolute inset-0 rounded-lg border border-success/40  shadow-[0_0_10px_rgba(85,153,102,0.4)]"
      />
      <h4 className="text-white bg-[#0e0e0e] rounded-t-lg px-2 md:px-4 py-2 text-xs md:large-text">
        Data Scatter
      </h4>
      <motion.img
        src="/before-after/scatter-before.png"
        style={{ opacity: beforeOpacity }}
        className="absolute top-10 md:top-16 h-[70%]  w-full "
      />
      i
      <motion.img
        src="/before-after/scatter-after.png"
        style={{ opacity: afterOpacity }}
        className="absolute top-10 md:top-16 h-[70%]  w-full"
      />
    </div>
  );
}

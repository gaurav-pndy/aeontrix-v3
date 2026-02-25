"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import PillarTextColumn from "./Pillars/PillarTextColumn";
import dynamic from "next/dynamic";

const PillarStack = dynamic(() => import("./Pillars/PillarStack"), {
  ssr: false,
});
import { useSpring } from "framer-motion";
import PillarStepIndicator from "./Pillars/PillarStepIndicator";

export default function PillarsSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 0.8,
  });

  return (
    <section
      ref={ref}
      className="relative  px-2"
      style={{ height: "500vh" }} // more space → slower
    >
      <div className="sticky top-0 h-screen rounded-4xl bg-background overflow-hidden">
        <div className="h-screen flex flex-col-reverse md:grid md:grid-cols-2  mx-auto  ">
          <div className="h-[50vh] md:h-auto bg-white flex justify-end  rounded-4xl  overflow-hidden ">
            <div className="flex-1 flex xl:gap-8 max-w-180 pl-4">
              {/* STEP INDICATOR */}
              <div className="  py-8 hidden xl:flex  ">
                <PillarStepIndicator scrollYProgress={smoothProgress} />
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <PillarTextColumn scrollYProgress={smoothProgress} />
              </div>
            </div>
          </div>

          <div className="h-[50vh] md:h-auto max-w-180 px-4 relative overflow-hidden ">
            {/* Grid background */}
            <div
              className="absolute scale-125 inset-0 pointer-events-none"
              style={{
                backgroundImage: `
      linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
    `,
                backgroundSize: "100px 100px",

                /* === Perspective / tilt === */
                transform:
                  "perspective(900px) rotateX(60deg) rotateZ(45deg) translateY(-25%) translateX(-10%)",
                transformOrigin: "center",

                /* === Vignette === */
                maskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0.4) 70%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0.4) 70%, transparent 100%)",

                opacity: 0.7,
              }}
            />

            <h3 className="large-text font-semibold mt-4 md:mt-8 text-center md:text-right">
              {" "}
              Aeontrix's 4 Pillars of Growth for Service Businesses
            </h3>

            {/* Stack */}
            <PillarStack scrollYProgress={smoothProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useTransform } from "framer-motion";
import { useSpring } from "framer-motion";

const INNER_IMAGES = [
  "/pillars/pillar1.png",
  "/pillars/pillar2.png",
  "/pillars/pillar3.png",
  "/pillars/pillar4.png",
];

function useBreakpoint() {
  if (typeof window === "undefined") return "xl";

  if (window.matchMedia("(max-width: 400px)").matches) return "xs";
  if (window.matchMedia("(max-width: 640px)").matches) return "sm";
  if (window.matchMedia("(max-width: 1024px)").matches) return "md";
  if (window.matchMedia("(max-width: 1270px)").matches) return "lg";
  return "xl";
}

export default function PillarStack({ scrollYProgress }) {
  const STEP_COUNT = 4;
  const STEP_SIZE = 1 / STEP_COUNT; // 0.25

  const bp = useBreakpoint();

  const motionPreset =
    bp === "xs"
      ? {
          box: 112,
          stackX: 48,
          stackY: 20,
          slideX: 40,
          liftY: 36,
          innerPopX: 14,
        }
      : bp === "sm"
        ? {
            box: 112,
            stackX: 48,
            stackY: 28,
            slideX: 72,
            liftY: 36,
            innerPopX: 14,
          }
        : bp === "md"
          ? {
              box: 160,
              stackX: 44,
              stackY: 46,
              slideX: 80,
              liftY: 56,
              innerPopX: 20,
            }
          : bp === "lg"
            ? {
                box: 160,
                stackX: 40,
                stackY: 46,
                slideX: 80,
                liftY: 56,
                innerPopX: 20,
              }
            : {
                box: 224,
                stackX: 90,
                stackY: 50,
                slideX: 120,
                liftY: 80,
                innerPopX: 28,
              };
  return (
    <div
      className="
    relative
    mt-4 xs:mt-10
    ml-[50%]

    md:absolute
    md:top-[40%]
    md:-translate-y-[40%]
    md:mt-0
    md:ml-36

    lg:ml-48 xl:ml-66 2xl:ml-80 xl:top-[30%] xl:-translate-y-[30%]

    h-28 lg:h-40 xl:h-56
    w-28 lg:w-40 xl:w-56
  "
    >
      {INNER_IMAGES.map((img, i) => {
        // Scroll segmentation
        const start = i * STEP_SIZE;
        const phase1 = start + STEP_SIZE * 0.3;
        const phase2 = start + STEP_SIZE * 0.55;
        const phaseHold = start + STEP_SIZE * 0.8;
        const end = start + STEP_SIZE * 0.95;
        /* -------------------------
           INITIAL STACK OFFSETS
        -------------------------- */
        const baseX = -motionPreset.stackX * i;
        const baseY = motionPreset.stackY * i;
        /* -------------------------
           X: ONLY horizontal first
        -------------------------- */
        const x = useTransform(
          scrollYProgress,
          [start, phase1],
          [baseX, baseX + motionPreset.slideX],
        );

        /* -------------------------
           Y: only after X finishes
        -------------------------- */
        const y = useTransform(
          scrollYProgress,
          [phase1, phase2, phaseHold, end],
          [
            baseY, // before lift
            baseY - motionPreset.liftY, // lifted
            baseY - motionPreset.liftY, // HOLD (no movement)
            baseY, // go back down
          ],
        );

        // Highlight intensity
        const active = useTransform(scrollYProgress, [phase1, phase2], [0, 1]);

        // Grayscale → color
        const grayscale = useTransform(active, [0, 1], [1, 0]);

        // Glow intensity
        const glow = useTransform(active, [0, 1], [0, 1]);

        // Final filter string
        const filter = useTransform(
          [grayscale, glow],
          ([g, glowVal]) =>
            `
    grayscale(${g})
    brightness(${g ? 0.45 : 1})
    drop-shadow(0 0 ${glowVal * 25}px rgba(5,150,105,0.7))
  `,
        );

        // Inner image X pop (only while lifting)
        const innerX = useTransform(
          scrollYProgress,
          [phase1, phase2],
          [0, -motionPreset.innerPopX],
        );

        // Scale pulse
        const scale = useTransform(active, [0, 1], [0.92, 1.06]);

        const opacity = useTransform(
          scrollYProgress,
          [start, phase1],
          [0.9, 1],
        );

        const smoothX = useSpring(x, {
          stiffness: 80,
          damping: 18,
          mass: 0.9,
        });

        const smoothY = useSpring(y, {
          stiffness: 70,
          damping: 20,
          mass: 1,
        });

        const smoothInnerX = useSpring(innerX, {
          stiffness: 120,
          damping: 16,
        });

        return (
          <motion.div
            key={i}
            style={{ x: smoothX, y: smoothY, zIndex: 10 + i }}
            className="absolute inset-0"
          >
            {/* OUTER BOX */}
            <img
              src="/pillars/pillar-box.png"
              className="absolute inset-0 object-contain "
            />

            {/* INNER IMAGE (CENTERED & ANIMATED) */}
            <motion.div
              style={{ filter, scale, x: smoothInnerX }}
              className="
                absolute
               top-1/2 left-1/2 -translate-x-2/3
                
              w-20 lg:w-24 xl:w-36
                h-20 lg:h-24 xl:h-36
                flex
                items-center
                justify-center
              "
            >
              <img src={img} className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import ShimmerText from "../kokonutui/shimmer-text";
import LogoLoop from "./LogoLoop";

export default function Hero() {
  const heroRef = useRef(null);
  const rafRef = useRef(null);
  const targetOffset = useRef({ x: 0, y: 0 });

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const nx = (e.clientX - rect.left - cx) / cx;
      const ny = (e.clientY - rect.top - cy) / cy;

      targetOffset.current = { x: nx * 18, y: ny * 12 };
    };

    const animate = () => {
      setOffset((prev) => ({
        x: prev.x + (targetOffset.current.x - prev.x) * 0.06,
        y: prev.y + (targetOffset.current.y - prev.y) * 0.06,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(14px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}</style>

      <section
        ref={heroRef}
        className="relative h-dvh md:h-screen w-full overflow-hidden bg-[#05070a] text-white"
      >
        {/* GRID */}
        <div
          className="pointer-events-none absolute -inset-[10%] h-[120%] w-[120%] will-change-transform"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <PerspectiveGrid />
        </div>
        {/* VIGNETTE OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.9)_75%,rgba(0,0,0,0.1)_100%)]" />
        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-6xl  hero-heading leading-12 md:leading-22 tracking-[-0.02em] ">
            <ShimmerText>Where Strategy becomes </ShimmerText>
            <span className="rounded-xl border border-primary/70 bg-primary/20 px-4  text-primary-soft shadow-[0_0_40px_rgba(7,118,89,0.35)]">
              Infrastructure
            </span>{" "}
          </h1>
        </div>
        {/* SCROLL INDICATOR */}
        {/* <div className="absolute bottom-10 left-1/2 z-10 flex h-10 w-7 -translate-x-1/2 justify-center rounded-full border border-white/30 pt-2">
          <span
            className="h-1 w-1 rounded-full bg-white/60"
            style={{ animation: "scrollDown 1.8s ease-in-out infinite" }}
          />
        </div> */}
        <div className="absolute bottom-0 z-10  left-0 right-0 ">
          <LogoLoop />
        </div>{" "}
      </section>
    </>
  );
}

/* GRID (unchanged math) */

function PerspectiveGrid() {
  const W = 1600;
  const H = 1100;

  const cx = W / 2;
  const cy = H / 2;

  const verticalOffset = -40;
  const centerY = cy + verticalOffset;

  const stroke = "rgba(255,255,255,0.2)";
  const strokeW = 1;

  const verticalLines = 5;
  const horizontalLines = 7;

  const gridWidth = W * 1.25;
  const left = cx - gridWidth / 2;

  const lines = [];

  const barrelX = (x, y) => {
    const dy = (y - centerY) / centerY;
    const pinch = 1 - 0.28 * Math.exp(-dy * dy * 2.2);
    return cx + (x - cx) * pinch;
  };

  const barrelY = (y, x) => {
    const dx = (x - cx) / cx;
    const pinch = 1 - 0.22 * Math.exp(-dx * dx * 2);
    return centerY + (y - centerY) * pinch;
  };

  for (let i = 0; i <= verticalLines; i++) {
    const baseX = left + (gridWidth * i) / verticalLines;
    const points = [];

    for (let s = 0; s <= 42; s++) {
      const y = (H * s) / 42;
      points.push([barrelX(baseX, y), y]);
    }

    lines.push(
      <path
        key={`v-${i}`}
        d={points.map((p, j) => `${j ? "L" : "M"} ${p[0]} ${p[1]}`).join(" ")}
        stroke={stroke}
        strokeWidth={strokeW}
        fill="none"
      />,
    );
  }

  for (let i = 1; i <= horizontalLines; i++) {
    const baseY = (H * i) / horizontalLines;
    const points = [];

    for (let s = 0; s <= 64; s++) {
      const x = left + (gridWidth * s) / 64;
      points.push([x, barrelY(baseY, x)]);
    }

    lines.push(
      <path
        key={`h-${i}`}
        d={points.map((p, j) => `${j ? "L" : "M"} ${p[0]} ${p[1]}`).join(" ")}
        stroke={stroke}
        strokeWidth={strokeW}
        fill="none"
      />,
    );
  }

  return (
    <svg
      className="h-full w-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {lines}
    </svg>
  );
}

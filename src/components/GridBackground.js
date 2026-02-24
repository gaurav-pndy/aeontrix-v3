"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!gridRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // small tilt
      const y = (e.clientY / innerHeight - 0.5) * 10;

      gridRef.current.style.transform = `
        perspective(1200px)
        rotateX(${-y}deg)
        rotateY(${x}deg)
      `;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={gridRef} className="grid-layer" />
    </div>
  );
}

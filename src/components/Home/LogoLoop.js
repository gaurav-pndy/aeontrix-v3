"use client";

import { memo, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const LOGOS = [
  { name: "EAFO", src: "/logos/EAFO.png" },
  { name: "Health-Direct", src: "/logos/HD.png" },
  { name: "Sophos Clinic", src: "/logos/sophos.png" },
  { name: "Ayushma Yoga", src: "/logos/ayushma.png" },
  { name: "FIRMST.tech", src: "/logos/FIRMST.png" },
  { name: "Aviakul", src: "/logos/aviakul.png" },
  { name: "CSO", src: "/logos/CSO.png" },
  { name: "National Aviation Olympiad", src: "/logos/NAO.png" },
  { name: "Pasovit", src: "/logos/pasovit.png" },
];

const ECOSYSTEM_CHARS = "ECOSYSTEM".split("");

function LogoLoop() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Ecosystem random activation
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * ECOSYSTEM_CHARS.length));
    }, 250);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <section className="relative mx-auto max-w-360 overflow-hidden bg-transparent px-4 pt-12 pb-6 ">
      {/* HEADING + ECOSYSTEM */}
      <div className="mb-4 flex gap-4  flex-row items-center justify-between">
        <p className="large-text text-white">Trusted by the best</p>

        <div className="pointer-events-none flex  font-mono text-lg tracking-widest text-white md:text-xl">
          {ECOSYSTEM_CHARS.map((char, i) => (
            <span
              key={i}
              className={`transition-colors duration-300 ${
                activeIndex === i ? "text-primary" : "text-white"
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* LOGO LOOP */}
      <div className="relative">
        <Marquee
          speed={40}
          pauseOnHover
          gradient
          gradientColor="#05070a"
          gradientWidth={96}
          className="flex items-center py-4"
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className={`
                mx-6 flex ${logo.name == "Health-Direct" ? "h-8" : logo.name == "Sophos Clinic" || logo.name == "Ayushma Yoga" ? "h-13" : "h-10"} items-center justify-center
                md:mx-8 
              `}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="
                  h-full w-auto object-contain
                  opacity-40
                  brightness-0 invert
                  transition-all duration-300 ease-out
                  hover:opacity-100 hover:scale-105
                "
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default memo(LogoLoop);

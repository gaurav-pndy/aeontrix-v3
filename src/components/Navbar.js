"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_ITEMS = [
  "Home",
  "The Diagnostic",
  "Case Studies",
  "Resources",
  "Careers",
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isAtTop, setIsAtTop] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const activeEl = navRef.current?.querySelector(`[data-item="${active}"]`);
    if (!activeEl) return;

    setIndicatorStyle({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
    });
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 xl:px-10"
    >
      <div className="relative mx-auto flex max-w-7xl items-center">
        {/* LOGO */}
        <Link href="/">
          <div className="relative h-10 md:h-12 w-60">
            <AnimatePresence mode="wait">
              {isAtTop ? (
                <motion.img
                  key="logo-light"
                  src="/logo-light.png"
                  initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute h-10 md:h-12"
                />
              ) : (
                <motion.img
                  key="logo-dark"
                  src="/aeontrix-logo.png"
                  initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute h-10 md:h-12"
                />
              )}
            </AnimatePresence>
          </div>{" "}
        </Link>

        {/* DESKTOP NAV */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block ">
          <div
            ref={navRef}
            className="
              relative flex items-center
              rounded-full
              border border-white/20
              bg-black/60
              px-2 py-2
              backdrop-blur-2xl
              shadow-lg
            "
          >
            {/* Active Background */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className="absolute top-2 bottom-2 rounded-full bg-white/20"
              style={indicatorStyle}
            />

            {NAV_ITEMS.map((item) => (
              <motion.button
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                key={item}
                data-item={item}
                onClick={() => setActive(item)}
                className={`relative z-10 px-4 xl:px-6 py-2 cursor-pointer small-text transition whitespace-nowrap ${
                  active === item ? "text-white" : "text-white"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA DESKTOP */}
        <div className="ml-auto hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="#"
              className="
                rounded-full
                border border-primary/60
                bg-primary/60
                px-6 py-3
                text-sm font-medium
                text-white
                backdrop-blur-2xl
                shadow-[0_0_30px_rgba(7,118,89,0.35)]
                transition
                hover:bg-primary/30
              "
            >
              Book a Free Strategy Call
            </Link>
          </motion.div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="ml-auto lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl"
          >
            <div className="space-y-1.5">
              <span className="block h-[2px] w-5 bg-white" />
              <span className="block h-[2px] w-5 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              mt-4 mx-auto max-w-7xl
              rounded-2xl
              border border-white/20
              bg-black/70
              backdrop-blur-xl
              p-6
              lg:hidden
            "
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActive(item);
                    setMobileOpen(false);
                  }}
                  className="small-text text-white/80 hover:text-white text-left"
                >
                  {item}
                </motion.button>
              ))}

              <Link
                href="#"
                className="
                  mt-4 rounded-xl
                  border border-primary/60
                  bg-primary/20
                  px-5 py-3
                  text-sm font-medium
                  text-primary-soft
                  text-center
                "
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

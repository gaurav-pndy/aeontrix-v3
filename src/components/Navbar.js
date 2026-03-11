"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "@/utils/navigation";
const NAV_ITEMS = [
  { label: "Home", type: "page", href: "/" },
  { label: "Solutions", type: "scroll", id: "solutions" },
  { label: "Case Studies", type: "page", href: "/case-studies" },
  { label: "Resources", type: "page", href: "/resources" },
  { label: "Careers", type: "page", href: "/careers" },
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

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const solutionsSection = document.getElementById("solutions");
    if (!solutionsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive("Solutions");
        } else {
          setActive("Home");
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    observer.observe(solutionsSection);

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const solutionsSection = document.getElementById("solutions");

    if (!solutionsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setActive("Solutions");
        } else {
          setActive("Home");
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    observer.observe(solutionsSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setActive("Home");
    } else if (pathname.startsWith("/case-studies")) {
      setActive("Case Studies");
    } else if (pathname.startsWith("/resources")) {
      setActive("Resources");
    } else if (pathname.startsWith("/careers")) {
      setActive("Careers");
    }
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 "
    >
      <div className="relative mx-auto flex max-w-7xl items-center px-4">
        {/* LOGO */}
        {isAtTop ? (
          <Link href="/">
            <div className="relative h-10 md:h-12 w-60">
              <AnimatePresence mode="wait">
                {pathname === "/" || pathname === "/case-studies" ? (
                  <motion.img
                    key="logo-home-top"
                    src="/logo-light.png"
                    initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute h-10 md:h-12"
                  />
                ) : (
                  <motion.img
                    key="logo-top-dark"
                    src="/logo-dark.png"
                    initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute h-10 md:h-12"
                  />
                )}
              </AnimatePresence>
            </div>
          </Link>
        ) : (
          <div className="h-10 md:h-12 hidden lg:block" />
        )}

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
                transition={{ duration: 0.3 }}
                key={item.label}
                data-item={item.label}
                onClick={() => {
                  setActive(item.label);

                  if (item.type === "scroll") {
                    scrollToSection(router, pathname, item.id);
                  } else {
                    router.push(item.href);
                  }
                }}
                className="relative z-10 px-4 xl:px-6 py-2 cursor-pointer small-text whitespace-nowrap text-white"
              >
                {item.label}
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
                border border-primary/80
                bg-primary/80
                px-6 py-3
                text-sm font-medium
                text-white
                backdrop-blur-2xl
                shadow-[0_0_30px_rgba(7,118,89,0.35)]
                transition
                hover:bg-primary/40
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
            className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-xl border
            ${pathname === "/" ? "border-white/20 bg-white/5" : "border-text/20 bg-surface"}
            `}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 ${pathname === "/" ? "bg-white" : "bg-text"}`}
              />
              <span
                className={`block h-0.5 w-5 ${pathname === "/" ? "bg-white" : "bg-text"}`}
              />
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
                  key={item.label}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActive(item.label);
                    setMobileOpen(false);

                    if (item.type === "scroll") {
                      scrollToSection(router, pathname, item.id);
                    } else {
                      router.push(item.href);
                    }
                  }}
                  className="small-text text-white/80 hover:text-white text-left"
                >
                  {item.label}
                </motion.button>
              ))}

              <Link
                href="#"
                className="
                  mt-4 rounded-xl
                  border border-primary/80
                bg-primary/60
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

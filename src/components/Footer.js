"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CustomButton from "./CustomButton";
import { scrollToSection } from "@/utils/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className=" pb-1 bg-white px-2">
      <div className="max-w-360 mx-auto rounded-4xl bg-background-dark px-4 lg:px-6 py-6 pb-0">
        <div className="max-w-7xl mx-auto pb-8 grid gap-10 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.3fr_1fr] xl:grid-cols-[0.4fr_1fr] md:items-start md:justify-between">
          {/* Brand + slogan + socials */}
          {/* Brand + slogan + socials */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img src="/logo-light.png" alt="Aeontrix" className="h-12" />
            </div>

            {/* <p className="large-text mb-4 text-primary-soft leading-tight">
              Automate the Grind,
              <br /> Accelerate the Growth
            </p> */}

            {/* EMAIL INPUT */}
            <div className="mb-8 flex flex-col gap-2 max-w-72">
              <input
                type="email"
                placeholder="Enter your email"
                className="
      min-w-64 lg:min-w-72  w-full
        rounded-lg
        bg-background-dark/80
        border border-white/20
        px-3 py-2.5
        text-white/80
        small-text
        focus:outline-none
        focus:border-primary
      "
              />

              {/* BOOK STRATEGY CALL BUTTON */}
              <CustomButton
                text="Join Newsletter"
                bg="var(--color-primary)"
                border="var(--color-primary)"
                shadow="#064c3b"
                type="submit"
                className="w-full xs-text "
              />
            </div>

            {/* SOCIALS */}
            <div className="flex min-w-64 lg:min-w-72 gap-3 max-w-72 justify-between">
              <FooterIconLink
                href="https://www.linkedin.com/company/aeontrix"
                label="LinkedIn"
              >
                <FaLinkedinIn />
              </FooterIconLink>

              <FooterIconLink
                href="https://www.instagram.com/aeontrix.ai/"
                label="Instagram"
              >
                <FaInstagram />
              </FooterIconLink>

              <FooterIconLink
                href="https://x.com/AeontrixAI"
                label="X (Twitter)"
              >
                <FaXTwitter />
              </FooterIconLink>

              <FooterIconLink
                href="https://www.facebook.com/people/Aeontrix-AI/61579665220310/"
                label="Facebook"
              >
                <FaFacebookF />
              </FooterIconLink>
            </div>
          </div>

          {/* Columns */}
          <div className="grid flex-1 gap-2 xs:gap-4 md:gap-8  grid-cols-3 lg:grid-cols-[1fr_0.8fr_0.9fr]">
            {/* Services (placeholder links) */}
            <div className="space-y-3 ">
              <button
                onClick={() => scrollToSection("services")}
                className="body-text md:subtitle-text cursor-pointer font-semibold text-white"
              >
                Services
              </button>
              <ul className="space-y-1 small-text md:body-text text-white/90">
                <li>
                  <button
                    onClick={() =>
                      scrollToSection(router, pathname, "solutions")
                    }
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    The Diagnostic
                  </button>
                </li>

                <li>
                  <button
                    onClick={() =>
                      scrollToSection(router, pathname, "solutions")
                    }
                    className="hover:text-primary leading-tight text-left cursor-pointer transition-colors"
                  >
                    The Buildout{" "}
                  </button>
                </li>

                {/* <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    The Blueprint{" "}
                  </button>
                </li> */}
              </ul>
            </div>

            {/* Case studies */}

            <div className="space-y-3 ">
              <h4>
                <Link
                  href="/case-studies"
                  className="body-text md:subtitle-text cursor-pointer font-semibold text-white"
                >
                  {" "}
                  Case Studies
                </Link>
              </h4>
              <ul className="space-y-1 small-text md:body-text text-white/90">
                <li>
                  <Link
                    href="/case-studies/sophos-medical-centre"
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    Sophos Clinic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies/firmst-language-school"
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    FIRMST School
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies/ayushma-yoga"
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    Ayushma Yoga
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="body-text md:subtitle-text cursor-pointer font-semibold text-white">
                {" "}
                Quick Links
              </h4>
              <ul className="space-y-1 small-text md:body-text text-white/90">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() =>
                      scrollToSection(router, pathname, "contact-us")
                    }
                    className="hover:text-primary text-left leading-tight cursor-pointer transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div
          className="max-w-7xl mx-auto translate-y-px flex  flex-col items-center justify-between gap-2  py-4 px-10 md:px-12 shape 
          bg-white small-text text-black md:flex-row "
        >
          <span>
            © {new Date().getFullYear()} Aeontrix. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link
              target="_blank"
              href="/terms-of-service"
              className="hover:text-green transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              target="_blank"
              href="/privacy-policy"
              className="hover:text-green transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterIconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 text-lg shrink-0 items-center justify-center rounded-lg r bg-primary  hover:bg-primary/60 hover:scale-110 text-white  transition-all duration-300"
    >
      {children}
    </a>
  );
}

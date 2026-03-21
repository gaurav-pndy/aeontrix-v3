"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaArrowRight, FaQuoteRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    org: "EAFO",
    website: "https://eafo.info",
    image: "/testimonials/Dr. Soma.png",
    quote:
      "We run a large number of conferences and seminars for medical professionals, but for years we had no real CRM, no centralized data storage, and no consistent marketing system. Everything ran through my personal network that I’ve built over two decades. It worked, but it wasn’t scalable. Aeontrix came in and built the infrastructure we were missing. They created a proper system with an admin portal and a member portal where we can host webinars, store recordings, and maintain a structured database of participants. We now have a newsletter database to send updates to the right audience, plus payments built in, including invoice creation and delivery. This has been genuinely game-changing for a not-for-profit like ours. We finally have systems that make our work repeatable, organized, and sustainable.",
    author: "Dr. Somasundaram Subramanian",
    role: "Founder & CEO, EAFO",
  },
  {
    org: "Ayushma Yoga",
    website: "https://ayushmayoga.ru/",
    image: "/testimonials/Dr. Murali.jpg",
    quote:
      "Before working with Aeontrix, I honestly didn’t even know what KPIs were, or how people were using data to make decisions. I was just teaching and posting occasionally. The Diagnostic was insane. The amount of findings they pulled out of my business, the gaps, the opportunities, the blind spots, it was the most comprehensive business audit I’ve ever seen. Then they built and entire system around me. They set up the community properly, created seamless onboarding, and built a complete marketing strategy from scratch. They ran ads, created content ideas, hired a dedicated video editor, and helped grow my social media following. Everything now runs like a well oiled machine. And I can focus purely on yoga and meditation classes. That made my classes better, students are happier, and people stay in the community long-term.",
    author: "Dr. Kavin Murali Muthu",
    role: "Physician, Yoga & Meditation Facilitator Co-founder, Ayushma Yoga",
  },
  {
    org: "FIRMST",
    website: "https://firmst.org/",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    quote:
      "We wanted one system to run the entire school, built around how we actually operate. Aeontrix built us a custom LMS that manages everything in one place: online and on-site students, coursework and study materials, assignments and grading, meetings inside the platform, timetable scheduling, payments, and even our website blog publishing inside the same system. The best part is that it’s all custom made. We don’t need extra software or workarounds. It has improved our productivity by 200% because our team isn’t switching tools or handling admin manually. Teaching and learning is smoother for both teachers and students, and it helped us confidently position ourselves as a premium school.",
    author: "Marina Yurievna",
    role: "Academic Director, FIRMST Language School",
  },
  {
    org: "Sophos Medical",
    website: "https://sophos-med.ru/",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
    quote:
      "Aeontrix built our entire Medical Information System from scratch, including separate doctor, patient, and admin portals, inventory management, consultation bookings, and secure patient history storage. What impressed us most is that they didn’t treat this like a normal software project. They researched the regulatory requirements, coordinated with lawyers, and took compliance and security seriously from day one, which matters massively in healthcare. Operationally, it made the clinic feel coordinated. Doctors have the right context instantly, patients get a smoother experience, and the admin side runs cleanly. It supports a genuinely premium standard of care, without adding friction for the team.",
    author: "Dr. Saravanan Arumugam Sankaranarayanan",
    role: "Chief Medical Officer, Sophos Medical Centre",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const active = TESTIMONIALS[index];

  return (
    <section className="relative bg-[#05070a] py-16  overflow-hidden">
      <div className="max-w-7xl px-4 lg:px-6 mx-auto">
        {/* HEADER */}
        <div className="mb-12">
          <p className="small-text text-primary uppercase font-mono mb-4">
            TESTIMONIALS
          </p>
          <h2 className="display-text text-white">
            What our clients say about us
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-12 items-center rounded-3xl  bg-linear-to-br from-primary-dark via-black to-primary-dark min-h-124 p-4 md:p-6 lg:p-10 ">
          {/* LEFT AVATARS */}
          <div className="flex md:flex-col gap-4 pt-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.img
                key={i}
                src={t.image}
                onClick={() => setIndex(i)}
                className={`w-14 h-14 object-cover rounded-lg cursor-pointer transition
                ${
                  i === index
                    ? "ring-2 ring-primary scale-110"
                    : "opacity-40 hover:opacity-70"
                }`}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>

          {/* MAIN CARD */}
          <div className="relative flex-1  md:px-6">
            {/* ARROWS */}
            <button
              onClick={prev}
              className="absolute -left-4 cursor-pointer top-1/2 -translate-y-1/2 text-primary"
            >
              <SlArrowLeft />
            </button>

            <button
              onClick={next}
              className="absolute -right-4 cursor-pointer top-1/2 -translate-y-1/2 text-primary"
            >
              <SlArrowRight />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <p className="subtitle-text lg:large-text leading-tight text-white mb-4 pt-6 md:pt-0 whitespace-pre-line ">
                  "{active.quote}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="text-white/70 mb-6 text-center">
                    <p className="font-semibold text-white">{active.author}</p>
                    <p className="small-text whitespace-pre-line">
                      {active.role}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    {/* CASE STUDY (Intel Blue 3D) */}
                    <motion.a
                      href="#"
                      whileHover={{ y: -2 }}
                      whileTap={{
                        y: 3,
                        scale: 0.98,
                        boxShadow: "0 2px 0 rgba(6,60,130,1)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                      className="
    relative px-8 py-2.5 rounded-lg
    text-white font-medium
    border
  "
                      style={{
                        background: "var(--color-intel-blue)",
                        borderColor: "var(--color-intel-blue)",
                        boxShadow: "0 6px 0 rgba(6,60,130,1)",
                      }}
                    >
                      <span className="relative z-10 flex gap-2 items-center">
                        Case Study <FaArrowRight className="text-base" />
                      </span>
                    </motion.a>

                    {/* VIEW WEBSITE (Green 3D) */}
                    <motion.a
                      href={active.website}
                      target="_blank"
                      whileHover={{ y: -2 }}
                      whileTap={{
                        y: 3,
                        scale: 0.98,
                        boxShadow: "0 2px 0 #064c3b",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                      className="
      relative px-8 py-2.5 rounded-lg
      text-white font-medium
      border border-primary
      bg-primary
      overflow-hidden
    "
                      style={{
                        boxShadow: "0 6px 0 #064c3b",
                      }}
                    >
                      <span className="relative z-10 flex gap-2 items-center">
                        View Website <FaArrowRight className="text-base" />
                      </span>
                    </motion.a>
                  </div>
                </div>

                <FaQuoteRight className="absolute text-primary -top-4 md:-top-8 lg:-top-10 right-2 text-5xl md:text-6xl lg:text-8xl opacity-50" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

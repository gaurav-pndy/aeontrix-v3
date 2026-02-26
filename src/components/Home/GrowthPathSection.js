"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Check, Layers, Users, Zap, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function GrowthPathSection() {
  return (
    <section className="relative bg-white py-16 rounded-4xl mt-10 mx-2">
      {/* HEADER */}
      <div className="max-w-7xl px-4 mx-auto text-center mb-16">
        <p className="small-text uppercase font-mono text-primary mb-4">
          HOW WE WORK
        </p>

        <h2 className="display-text font-semibold text-black">
          Pick Your <span className="text-primary">Growth Path</span>
        </h2>

        <p className="mt-4 text-muted-foreground max-w-3xl subtitle-text mx-auto">
          Everything starts with a{" "}
          <span className="text-primary font-medium">Diagnosis</span>. But if
          you know exactly what you want, get started with{" "}
          <span className="text-primary font-medium">The Blueprint</span> or{" "}
          <span className="text-primary font-medium">The Buildout</span>.
        </p>
      </div>

      {/* DIAGNOSTIC */}
      <div className="max-w-7xl px-4 mx-auto mb-12">
        <div className="relative rounded-lg bg-white p-4 md:p-6 lg:p-8 z-10 border border-primary">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary flex items-center justify-center shrink-0 text-white">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="title-text font-semibold text-black">
                    The Diagnostic
                  </h3>
                  <p className="uppercase mt-2 text-xs tracking-widest text-muted-foreground ">
                    PRESCRIPTION WITHOUT DIAGNOSIS IS MALPRACTICE
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                A comprehensive Operational Audit across all Key Function of
                your business. Most businesses, just sell you their service
                without understanding what you actually need for your growth or
                understanding your business, which is the main reason for 99% of
                the failures.
              </p>

              <CustomButton />
            </div>

            {/* RIGHT */}
            <div className="">
              <div className="flex justify-end mb-4">
                <span className="text-xs rounded-full border font-mono border-primary px-3 py-1 text-primary bg-primary/10">
                  ENTRY POINT
                </span>
              </div>
              <ul className="bg-muted/40 rounded-xl p-4  grid sm:grid-cols-2 gap-4 border border-primary/30 text-muted-foreground">
                {[
                  "Stakeholder interviews across all key functions",
                  "Complete process mapping of current operations",
                  "Bottleneck & constraint identification",
                  "Opportunity matrix ranked by impact vs effort",
                  "Implementation roadmap with priorities & timelines",
                  "KPI tracking plan across every function",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="text-primary mt-0.5 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BLUEPRINT + BUILDOUT */}
      <div className="max-w-7xl px-4 mx-auto grid lg:grid-cols-2 gap-8">
        {/* BLUEPRINT */}
        <HoverCard>
          <CardHeader
            icon={<Users size={24} />}
            title="The Blueprint"
            badge="DONE WITH YOU"
          />

          <p className="text-muted-foreground mb-6">
            Mentorship, Business Coaching and Expert Guidance from the Aeontrix
            Team.
          </p>

          <ul className="space-y-3  text-muted-foreground mb-6">
            {[
              "Weekly private strategy calls with a dedicated strategist",
              "Ask questions anytime related to any key function of your business",
              "SOPs Playbooks, Frameworks and Templates that will save you 100s of Hours",
              "24/7 Async chat access to Aeontrix team of experts",
              "3 months minimum engagement",
              "Accountability Partner",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="text-primary mt-0.5" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <XentaryBox />

          <CustomButton />
        </HoverCard>

        {/* BUILDOUT */}
        <HoverCard>
          <div>
            <CardHeader
              icon={<Zap size={24} />}
              title="The Buildout"
              badge="DONE FOR YOU"
            />

            <p className="text-muted-foreground mb-6">
              Stop managing 6 different agencies. Let one coordinated team that
              knows your business, build your entire Growth Infrastructure and
              serve all your needs.
            </p>

            <div className="flex max-w-lg justify-center mx-auto flex-wrap gap-2 mb-8">
              {[
                "Paid Ads & Performance",
                "Content & Brand",
                "Email & Lifecycle",
                "Outbound & Sales",
                "Software & AI Automation",
                "Hiring & Talent",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full border border-primary/30 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs font-mono uppercase text-muted-foreground mb-3 text-center">
              Pick & choose the workstreams you need
            </p>

            <div className="flex justify-center gap-6  text-primary-dark mb-6">
              <span className="flex items-center gap-2">
                <Check className="text-primary-dark" size={16} />
                No lock-in
              </span>
              <span className="flex items-center gap-2">
                <Check className="text-primary-dark" size={16} />
                Cancel anytime
              </span>
            </div>
          </div>

          <div>
            <XentaryBox />

            <CustomButton />
          </div>
        </HoverCard>
      </div>
    </section>
  );
}

/* ---------- REUSABLES ---------- */

function HoverCard({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col justify-between bg-white rounded-2xl border border-primary p-4 md:p-6 lg:p-8"
    >
      {children}
    </motion.div>
  );
}

function CardHeader({ icon, title, badge }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
      <IconBox>{icon}</IconBox>
      <h3 className="title-text font-semibold text-black">{title}</h3>
      <span className="ml-auto text-xs rounded-full bg-primary/10 border font-mono border-primary text-primary px-3 py-1">
        {badge}
      </span>
    </div>
  );
}

function IconBox({ children }) {
  return (
    <div className="h-14 w-14 shrink-0 rounded-lg bg-primary text-xl flex items-center justify-center text-white">
      {children}
    </div>
  );
}

function XentaryBox() {
  return (
    <div className="flex  gap-2 bg-primary/10 border border-primary rounded-lg p-4 text-sm text-muted-foreground mb-6">
      <Layers className="text-primary shrink-0 mt-px" size={18} />
      <span>
        Access to <span className="text-primary font-medium">Xentary</span> —
        Aeontrix's proprietary internal operating system.
      </span>
    </div>
  );
}

function CustomButton({ label = "Get Started 🡢" }) {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className=" w-full cursor-pointer
        relative
        overflow-hidden
        rounded-lg
        bg-primary
        px-8
        py-3
        font-medium
        text-white border border-primary
      "
    >
      {/* WHITE FILL */}
      <motion.span
        variants={{
          rest: { width: "0%" },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="
          absolute
          left-0
          top-0
          h-full
          bg-white
          z-0
        "
      />

      {/* TEXT */}
      <motion.span
        variants={{
          rest: { color: "#ffffff" },
          hover: { color: "#000000" },
        }}
        transition={{ duration: 0.25, ease: "linear" }}
        className="relative z-10"
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

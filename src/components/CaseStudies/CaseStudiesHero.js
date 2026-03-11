"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TABS = ["Transformations", "Digital Identity"];

export default function CaseStudiesHero({ activeTab, onTabChange }) {
  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

  return (
    <section className=" bg-background-dark text-white  ">
      <div className="relative mx-auto max-w-7xl px-4 pt-28 md:pt-36 pb-20 ">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono xs-text text-primary mb-6">
          WHERE STRATEGY BECOMES INFRASTRUCTURE
        </div>

        {/* Heading */}
        <h1 className="hero-heading max-w-3xl">
          Systems that move
          <br />
          the needle.
        </h1>

        {/* Subtext */}
        <p className="subtitle-text text-text-muted max-w-xl mt-6">
          Every engagement starts with The Diagnostic. Every system is
          custom-engineered. Every outcome ties directly to revenue. Here's the
          proof.
        </p>

        {/* Tabs */}
        <div className="absolute left-1/2 -translate-x-1/2 md:translate-0 w-full md:w-fit md:left-4 -bottom-4  flex justify-center">
          <div className="relative flex  rounded-lg bg-white p-1 shadow-sm">
            {TABS.map((tab) => {
              const active = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative px-6 py-2.5 rounded-lg  font-medium transition cursor-pointer ${
                    active ? "text-white" : "text-text-muted hover:text-text"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="case-tab"
                      className="absolute inset-0 bg-primary rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

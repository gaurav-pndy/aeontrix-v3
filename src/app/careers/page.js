"use client";

import ApplicationModal from "@/components/Careers/ApplicationModal";
import RoleCard from "@/components/Careers/RoleCard";
import { ROLES } from "@/data/careersData";
import { useState } from "react";

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredRole, setHoveredRole] = useState(null);
  const [applyingRole, setApplyingRole] = useState(null);

  const allTags = ["All", ...Array.from(new Set(ROLES.flatMap((r) => r.tags)))];

  const tagCounts = {};
  allTags.forEach((t) => {
    tagCounts[t] =
      t === "All"
        ? ROLES.length
        : ROLES.filter((r) => r.tags.includes(t)).length;
  });

  const filteredRoles =
    activeFilter === "All"
      ? ROLES
      : ROLES.filter((r) => r.tags.includes(activeFilter));

  return (
    <div className="relative min-h-screen overflow-hidden bg-white  font-satoshi pt-28 md:pt-36">
      {/* Ambient Glow */}

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Hero */}
        <div className="">
          <div className="mb-9 flex flex-wrap items-center gap-2 lg:gap-12">
            <div className="flex-1 ">
              <div className="mb-3 flex items-center gap-2 font-mono xs-text tracking-[2px] text-primary">
                <span className="inline-block h-px w-7 bg-primary" />
                OPEN POSITIONS
              </div>

              <h1 className="hero-heading">
                Join <span className="text-primary">Aeontrix</span>
              </h1>
              <p className="lg:max-w-lg text-text-muted body-text mt-2">
                We hire based on fit, and potential, not experience. If you're
                ready to work in the trenches, you'll thrive here. Learn from
                experts, or become an expert and mentor others.
              </p>
            </div>

            <div className="lg:max-w-lg text-text-muted body-text">
              We're building growth infrastructure for the next generation of
              companies. Every role is remote, every contribution matters.
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-border pb-6">
            <span className="mr-1 font-mono xs-text  text-text-muted">
              FILTER
            </span>

            {allTags.map((tag) => {
              const active = activeFilter === tag;

              return (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`
                    flex items-center gap-1 rounded-full px-4 py-1.5 xs-text transition cursor-pointer
                    ${
                      active
                        ? "border border-primary/50 bg-primary/80 text-white"
                        : "border border-black/10 bg-primary/10 text-text-muted hover:text-text"
                    }
                  `}
                >
                  {tag}

                  <span className="font-mono xs-text  opacity-60">
                    {tagCounts[tag]}
                  </span>
                </button>
              );
            })}

            {activeFilter !== "All" && (
              <button
                onClick={() => setActiveFilter("All")}
                className="ml-2 cursor-pointer font-mono text-xs text-primary hover:text-black"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Job Listings */}
        <div className="flex flex-col gap-2 pb-20">
          {filteredRoles.map((role, i) => (
            <RoleCard
              key={role.id}
              role={role}
              isHovered={hoveredRole === role.id}
              onHover={() => setHoveredRole(role.id)}
              onLeave={() => setHoveredRole(null)}
              onApply={() => setApplyingRole(role)}
              animDelay={i * 50}
            />
          ))}

          {filteredRoles.length === 0 && (
            <div className="py-12 text-center text-sm text-text-subtle">
              No positions match this filter.
            </div>
          )}
        </div>
      </div>

      {applyingRole && (
        <ApplicationModal
          role={applyingRole}
          onClose={() => setApplyingRole(null)}
        />
      )}
    </div>
  );
}

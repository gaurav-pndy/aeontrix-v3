import { useState } from "react";
import TagBadge from "./TagBadge";
import { ICONS } from "@/data/careersData";
import { motion } from "framer-motion";

export default function RoleCard({
  role,
  isHovered,
  onHover,
  onLeave,
  onApply,
  animDelay,
}) {
  const expanded = isHovered;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative overflow-hidden cursor-pointer rounded-lg border p-5 md:p-6
        transition-all duration-300 ease-out
        ${
          expanded
            ? "bg-primary/5 border-primary/60"
            : "bg-surface border-border hover:border-primary/20"
        }
      `}
      style={{
        animation: `fadeSlideUp 0.5s ease ${animDelay}ms both`,
      }}
    >
      {/* Left highlight bar */}
      {expanded && (
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-primary to-success rounded-r-sm" />
      )}

      {/* Main row */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Icon */}
        <div
          className={`
            flex h-12 w-12 items-center justify-center rounded-lg border
            transition-all duration-300
            ${
              expanded
                ? "bg-primary/10 border-primary/60 text-primary"
                : "bg-muted border-border text-text-muted"
            }
          `}
        >
          {ICONS[role.icon]}
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="large-text font-medium text-text mb-1">
            {role.title}
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono xs-text text-text-muted">
              ◎ {role.location} · ⚙ {role.subtitle}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {role.tags.map((t) => (
              <TagBadge key={t} tag={t} />
            ))}

            <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.65rem] font-mono text-text-muted">
              {role.type}
            </span>
          </div>
        </div>
        {/* Apply button */}{" "}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onApply();
          }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 2, scale: 0.985 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className=" cursor-pointer relative rounded-lg bg-primary px-5 py-1.5 small-text font-medium text-white border border-primary flex items-center justify-center gap-2 "
          style={{ boxShadow: "0 6px 0 rgba(4,100,75,1)" }}
        >
          {" "}
          Apply Now {ICONS.arrow}{" "}
        </motion.button>
      </div>

      {/* Expandable description */}
      <div
        className={`
          overflow-hidden md:pl-15 transition-all duration-300 ease-out
          ${expanded ? "max-h-22.5 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <p className="small-text leading-relaxed text-text-muted">
          {role.description}
        </p>
      </div>
    </div>
  );
}

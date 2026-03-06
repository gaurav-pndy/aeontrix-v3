"use client"

import { useState, useEffect, useRef } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────
const ROLES = [
  {
    id: 1,
    title: "Full-Stack Javascript Developer",
    subtitle: "MERN Stack",
    tags: ["Technical"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "code",
    description:
      "Build and maintain scalable web applications using MongoDB, Express, React, and Node.js across Aeontrix's growth infrastructure platform.",
    questions: [
      {
        id: "experience",
        label: "Years of professional experience with MERN stack",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "portfolio",
        label: "GitHub / Portfolio URL",
        type: "url",
        placeholder: "https://github.com/you",
        required: true,
      },
      {
        id: "frameworks",
        label: "Which frameworks/tools are you most proficient in?",
        type: "multicheck",
        options: [
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "GraphQL",
          "Docker",
          "AWS",
          "TypeScript",
        ],
        required: true,
      },
      {
        id: "challenge",
        label: "Describe a complex technical challenge you solved recently",
        type: "textarea",
        placeholder:
          "Walk us through the problem, your approach, and the outcome...",
        required: true,
      },
      {
        id: "system_design",
        label: "Have you designed systems handling 10k+ concurrent users?",
        type: "select",
        options: [
          "Yes, in production",
          "Yes, in staging/testing",
          "No, but I understand the principles",
          "No",
        ],
        required: true,
      },
      {
        id: "availability",
        label: "When can you start?",
        type: "select",
        options: ["Immediately", "2 weeks", "1 month", "Other"],
        required: true,
      },
    ],
  },
  {
    id: 2,
    title: "React Native Mobile App Developer",
    subtitle: "iOS & Android",
    tags: ["Technical"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "phone",
    description:
      "Design and develop cross-platform mobile applications that deliver seamless user experiences across iOS and Android.",
    questions: [
      {
        id: "rn_experience",
        label: "Years of React Native experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "apps",
        label: "Link to published apps or portfolio",
        type: "url",
        placeholder: "https://apps.apple.com/...",
        required: true,
      },
      {
        id: "platforms",
        label: "Platform experience",
        type: "multicheck",
        options: [
          "iOS",
          "Android",
          "Expo",
          "React Native CLI",
          "Firebase",
          "Redux",
          "MobX",
          "Native Modules (Swift/Kotlin)",
        ],
        required: true,
      },
      {
        id: "performance",
        label: "How do you approach mobile performance optimization?",
        type: "textarea",
        placeholder:
          "Describe your strategies for memory, rendering, and battery optimization...",
        required: true,
      },
      {
        id: "publish",
        label: "Have you published apps to both App Store & Google Play?",
        type: "select",
        options: ["Yes, both", "App Store only", "Google Play only", "Not yet"],
        required: true,
      },
      {
        id: "availability",
        label: "When can you start?",
        type: "select",
        options: ["Immediately", "2 weeks", "1 month", "Other"],
        required: true,
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    subtitle: "Product Design",
    tags: ["Creative"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "design",
    description:
      "Shape the visual language and user experience across all Aeontrix digital products and client-facing platforms.",
    questions: [
      {
        id: "portfolio",
        label: "Portfolio URL (Behance, Dribbble, personal site)",
        type: "url",
        placeholder: "https://dribbble.com/you",
        required: true,
      },
      {
        id: "tools",
        label: "Primary design tools",
        type: "multicheck",
        options: [
          "Figma",
          "Sketch",
          "Adobe XD",
          "Illustrator",
          "Photoshop",
          "Framer",
          "Principle",
          "After Effects",
        ],
        required: true,
      },
      {
        id: "experience",
        label: "Years of UI/UX design experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "process",
        label: "Walk us through your design process for a recent project",
        type: "textarea",
        placeholder: "From research and wireframes to final handoff...",
        required: true,
      },
      {
        id: "systems",
        label: "Have you built or maintained a design system?",
        type: "select",
        options: [
          "Yes, from scratch",
          "Yes, contributed to an existing one",
          "No, but I understand the principles",
          "No",
        ],
        required: true,
      },
      {
        id: "case_study",
        label: "Upload a case study or describe one (PDF link accepted)",
        type: "textarea",
        placeholder:
          "Link to a case study or describe your process, decisions, and outcomes...",
        required: true,
      },
    ],
  },
  {
    id: 4,
    title: "Video Editor",
    subtitle: "Premiere Pro + After Effects",
    tags: ["Creative", "Marketing"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "video",
    description:
      "Produce high-impact video content for marketing campaigns, social media, and client deliverables.",
    questions: [
      {
        id: "reel",
        label: "Link to your showreel or portfolio",
        type: "url",
        placeholder: "https://vimeo.com/your-reel",
        required: true,
      },
      {
        id: "tools",
        label: "Software proficiency",
        type: "multicheck",
        options: [
          "Premiere Pro",
          "After Effects",
          "DaVinci Resolve",
          "Final Cut Pro",
          "Cinema 4D",
          "Blender",
          "Audition",
          "Photoshop",
        ],
        required: true,
      },
      {
        id: "experience",
        label: "Years of professional editing experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "content_types",
        label: "What types of content have you edited?",
        type: "multicheck",
        options: [
          "Social media ads",
          "YouTube long-form",
          "Corporate/brand videos",
          "Motion graphics",
          "Music videos",
          "Documentaries",
          "Product demos",
          "Event recaps",
        ],
        required: true,
      },
      {
        id: "turnaround",
        label: "How do you manage tight deadlines and revisions?",
        type: "textarea",
        placeholder:
          "Describe your workflow for handling multiple projects and quick turnarounds...",
        required: true,
      },
      {
        id: "motion",
        label: "Rate your motion graphics / After Effects skill",
        type: "select",
        options: ["Beginner", "Intermediate", "Advanced", "Expert"],
        required: true,
      },
    ],
  },
  {
    id: 5,
    title: "Sales Development Representative",
    subtitle: "Outbound & Pipeline",
    tags: ["Sales"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "sales",
    description:
      "Drive pipeline growth through strategic outbound prospecting, qualifying leads, and booking meetings for the sales team.",
    questions: [
      {
        id: "experience",
        label: "Years of SDR / sales experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "tools",
        label: "CRM & sales tools you've used",
        type: "multicheck",
        options: [
          "HubSpot",
          "Salesforce",
          "Apollo.io",
          "Outreach",
          "Salesloft",
          "LinkedIn Sales Navigator",
          "ZoomInfo",
          "Gong",
        ],
        required: true,
      },
      {
        id: "metrics",
        label: "What were your average monthly metrics in your last role?",
        type: "textarea",
        placeholder:
          "Emails sent, calls made, meetings booked, pipeline generated...",
        required: true,
      },
      {
        id: "pitch",
        label:
          "Record a 60-second pitch — why should we hire you? (Loom/video link)",
        type: "url",
        placeholder: "https://loom.com/share/...",
        required: false,
      },
      {
        id: "cold_outreach",
        label: "Describe your approach to cold outreach",
        type: "textarea",
        placeholder:
          "How do you research, personalize, and follow up with prospects?",
        required: true,
      },
      {
        id: "quota",
        label: "Have you consistently hit quota?",
        type: "select",
        options: [
          "Yes, exceeded",
          "Yes, met quota",
          "Sometimes",
          "First SDR role",
        ],
        required: true,
      },
    ],
  },
  {
    id: 6,
    title: "Project Manager",
    subtitle: "Operations & Delivery",
    tags: ["Ops"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "pm",
    description:
      "Coordinate cross-functional teams, manage timelines, and ensure seamless delivery of client projects and internal initiatives.",
    questions: [
      {
        id: "experience",
        label: "Years of project management experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "tools",
        label: "PM tools & methodologies",
        type: "multicheck",
        options: [
          "Asana",
          "Jira",
          "Monday.com",
          "ClickUp",
          "Notion",
          "Trello",
          "Agile/Scrum",
          "Waterfall",
          "Kanban",
          "SAFe",
        ],
        required: true,
      },
      {
        id: "certifications",
        label: "Relevant certifications",
        type: "multicheck",
        options: [
          "PMP",
          "Scrum Master (CSM)",
          "PRINCE2",
          "Agile Certified",
          "Six Sigma",
          "None yet",
        ],
        required: false,
      },
      {
        id: "team_size",
        label: "Largest team you've managed",
        type: "select",
        options: ["1–3 people", "4–8 people", "9–15 people", "15+ people"],
        required: true,
      },
      {
        id: "conflict",
        label: "Describe how you handled a project that was off-track",
        type: "textarea",
        placeholder:
          "What went wrong, how did you course-correct, and what was the outcome?",
        required: true,
      },
      {
        id: "stakeholders",
        label: "How do you manage stakeholder expectations?",
        type: "textarea",
        placeholder:
          "Your approach to communication, updates, and managing scope changes...",
        required: true,
      },
    ],
  },
  {
    id: 7,
    title: "Media Buyer / Paid Ads Expert",
    subtitle: "Performance Marketing",
    tags: ["Marketing", "Sales"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "ads",
    description:
      "Plan, execute, and optimize paid advertising campaigns across multiple platforms to drive measurable growth.",
    questions: [
      {
        id: "experience",
        label: "Years of paid media experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "platforms",
        label: "Platforms you've managed budgets on",
        type: "multicheck",
        options: [
          "Meta (Facebook/Instagram)",
          "Google Ads",
          "TikTok Ads",
          "LinkedIn Ads",
          "YouTube Ads",
          "Twitter/X Ads",
          "Snapchat Ads",
          "Programmatic (DSPs)",
        ],
        required: true,
      },
      {
        id: "budget",
        label: "Largest monthly ad budget managed",
        type: "select",
        options: [
          "< $5,000",
          "$5,000 – $25,000",
          "$25,000 – $100,000",
          "$100,000+",
        ],
        required: true,
      },
      {
        id: "roas",
        label: "Describe a campaign where you significantly improved ROAS",
        type: "textarea",
        placeholder:
          "Platform, strategy, targeting, creative approach, and results...",
        required: true,
      },
      {
        id: "analytics",
        label: "Analytics & attribution tools",
        type: "multicheck",
        options: [
          "Google Analytics 4",
          "Meta Pixel",
          "UTM tracking",
          "Triple Whale",
          "Hyros",
          "Northbeam",
          "Data Studio / Looker",
        ],
        required: true,
      },
      {
        id: "creative",
        label: "Do you also handle ad creative strategy?",
        type: "select",
        options: [
          "Yes, end-to-end",
          "Yes, I provide creative direction",
          "I collaborate with designers",
          "No, media buying only",
        ],
        required: true,
      },
    ],
  },
  {
    id: 8,
    title: "Graphic Designer",
    subtitle: "Brand & Marketing",
    tags: ["Creative", "Marketing"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "graphic",
    description:
      "Create compelling visual assets across brand, marketing, and digital touchpoints that elevate Aeontrix's presence.",
    questions: [
      {
        id: "portfolio",
        label: "Portfolio URL",
        type: "url",
        placeholder: "https://behance.net/you",
        required: true,
      },
      {
        id: "tools",
        label: "Design tools",
        type: "multicheck",
        options: [
          "Figma",
          "Illustrator",
          "Photoshop",
          "InDesign",
          "Canva",
          "After Effects",
          "Blender",
          "Procreate",
        ],
        required: true,
      },
      {
        id: "experience",
        label: "Years of graphic design experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "specialties",
        label: "Design specialties",
        type: "multicheck",
        options: [
          "Brand identity",
          "Social media graphics",
          "Print design",
          "Packaging",
          "Infographics",
          "Presentation design",
          "Icon/illustration",
          "Motion graphics",
        ],
        required: true,
      },
      {
        id: "brand_work",
        label: "Describe a brand project you're most proud of",
        type: "textarea",
        placeholder:
          "The brief, your creative process, deliverables, and impact...",
        required: true,
      },
      {
        id: "speed",
        label: "How many design assets can you produce weekly?",
        type: "select",
        options: ["5–10", "10–20", "20–30", "30+"],
        required: true,
      },
    ],
  },
  {
    id: 9,
    title: "Human Resources Associate",
    subtitle: "People & Culture",
    tags: ["Ops"],
    type: "FULL-TIME",
    location: "Remote",
    icon: "hr",
    description:
      "Support the team with recruitment, onboarding, employee experience, and HR operations as Aeontrix scales.",
    questions: [
      {
        id: "experience",
        label: "Years of HR experience",
        type: "select",
        options: ["< 1 year", "1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "tools",
        label: "HR tools & platforms",
        type: "multicheck",
        options: [
          "BambooHR",
          "Gusto",
          "Workday",
          "Lever",
          "Greenhouse",
          "Rippling",
          "Slack",
          "Notion",
        ],
        required: true,
      },
      {
        id: "areas",
        label: "HR areas of expertise",
        type: "multicheck",
        options: [
          "Recruiting",
          "Onboarding",
          "Payroll & Benefits",
          "Employee Relations",
          "Compliance",
          "Performance Management",
          "Culture & Engagement",
          "HRIS Management",
        ],
        required: true,
      },
      {
        id: "remote",
        label: "Experience managing HR for remote/distributed teams?",
        type: "select",
        options: [
          "Yes, fully remote teams",
          "Yes, hybrid teams",
          "Mostly in-office experience",
          "First remote role",
        ],
        required: true,
      },
      {
        id: "scenario",
        label: "How would you handle an employee conflict in a remote setting?",
        type: "textarea",
        placeholder:
          "Your approach to investigation, mediation, and resolution...",
        required: true,
      },
      {
        id: "scaling",
        label: "Have you helped scale a team from a small size?",
        type: "select",
        options: [
          "Yes, 10→50+",
          "Yes, 50→100+",
          "Joined a larger team",
          "No direct scaling experience",
        ],
        required: true,
      },
    ],
  },
];

const TAG_COLORS = {
  Technical: {
    bg: "rgba(10, 78, 168, 0.15)",
    text: "#98C4FF",
    border: "rgba(10, 78, 168, 0.3)",
  },
  Creative: {
    bg: "rgba(89, 10, 187, 0.15)",
    text: "#E2CAFF",
    border: "rgba(89, 10, 187, 0.3)",
  },
  Marketing: {
    bg: "rgba(194, 65, 12, 0.15)",
    text: "#FED7AA",
    border: "rgba(194, 65, 12, 0.3)",
  },
  Sales: {
    bg: "rgba(5, 150, 105, 0.15)",
    text: "#CBFFEF",
    border: "rgba(5, 150, 105, 0.3)",
  },
  Ops: {
    bg: "rgba(136, 0, 5, 0.12)",
    text: "#FFB4B6",
    border: "rgba(136, 0, 5, 0.25)",
  },
};

const ICONS = {
  code: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  phone: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  design: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  video: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  sales: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  pm: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  ads: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  ),
  graphic: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="2.5" />
      <path d="M17.64 15.34A5 5 0 0 0 18 13a5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 .36 1.87" />
      <path d="M6.75 17.5A4 4 0 0 0 11 21a4 4 0 0 0 4.25-3.5" />
      <circle cx="6" cy="14" r="3" />
    </svg>
  ),
  hr: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  arrow: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

// ─── Tag Badge ──────────────────────────────────────────────────────────────

function TagBadge({ tag }) {
  const c = TAG_COLORS[tag] || TAG_COLORS.Technical;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 9px",
        borderRadius: "999px",
        fontSize: "10px",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        color: c.text,
        background: c.bg,
        border: `1px solid ${c.border}`,
      }}
    >
      {tag}
    </span>
  );
}

// ─── Form Field ─────────────────────────────────────────────────────────────

function FormField({ field, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const base = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: focused
      ? "1px solid rgba(7,118,89,0.5)"
      : "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    color: "#EAEAEA",
    fontSize: "14px",
    fontFamily: "'Satoshi', 'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
    boxShadow: focused ? "0 0 0 3px rgba(7,118,89,0.1)" : "none",
  };

  if (field.type === "textarea")
    return (
      <textarea
        value={value || ""}
        onChange={(e) => onChange(field.id, e.target.value)}
        placeholder={field.placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        style={{ ...base, resize: "vertical", minHeight: "100px" }}
      />
    );

  if (field.type === "select")
    return (
      <select
        value={value || ""}
        onChange={(e) => onChange(field.id, e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...base,
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          paddingRight: "40px",
        }}
      >
        <option value="" style={{ background: "#15171C", color: "#888" }}>
          Select...
        </option>
        {field.options.map((o) => (
          <option
            key={o}
            value={o}
            style={{ background: "#15171C", color: "#EAEAEA" }}
          >
            {o}
          </option>
        ))}
      </select>
    );

  if (field.type === "multicheck") {
    const sel = value || [];
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {field.options.map((o) => {
          const on = sel.includes(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() =>
                onChange(
                  field.id,
                  on ? sel.filter((x) => x !== o) : [...sel, o],
                )
              }
              style={{
                padding: "7px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                fontFamily: "'Satoshi', 'Inter', sans-serif",
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: on
                  ? "1px solid rgba(7,118,89,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                background: on
                  ? "rgba(7,118,89,0.15)"
                  : "rgba(255,255,255,0.02)",
                color: on ? "#CBFFEF" : "rgba(255,255,255,0.5)",
              }}
            >
              {on && (
                <span style={{ marginRight: "6px", fontSize: "11px" }}>✓</span>
              )}
              {o}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <input
      type={field.type || "text"}
      value={value || ""}
      onChange={(e) => onChange(field.id, e.target.value)}
      placeholder={field.placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={base}
    />
  );
}

// ─── Application Modal ──────────────────────────────────────────────────────

function ApplicationModal({ role, onClose }) {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  const handleChange = (id, val) => setFormData((p) => ({ ...p, [id]: val }));

  const basicFields = [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Jane Doe",
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      type: "text",
      placeholder: "jane@example.com",
      required: true,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "text",
      placeholder: "+1 (555) 000-0000",
      required: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      type: "url",
      placeholder: "https://linkedin.com/in/...",
      required: false,
    },
    {
      id: "resume",
      label: "Resume / CV Link",
      type: "url",
      placeholder: "https://drive.google.com/...",
      required: true,
    },
  ];

  const currentFields = step === 0 ? basicFields : role.questions;
  const requiredFields = currentFields.filter((f) => f.required);
  const requiredFilled = requiredFields.filter((f) => {
    const v = formData[f.id];
    if (Array.isArray(v)) return v.length > 0;
    return v && v.trim && v.trim().length > 0;
  }).length;
  const canProceed = requiredFilled === requiredFields.length;
  const filledCount = currentFields.filter((f) => {
    const v = formData[f.id];
    if (Array.isArray(v)) return v.length > 0;
    return v && v.trim && v.trim().length > 0;
  }).length;

  if (submitted)
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "520px",
            maxWidth: "92vw",
            background: "#1A1D24",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "60px 40px",
            textAlign: "center",
            animation: "modalIn 0.35s ease both",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(7,118,89,0.15)",
              border: "2px solid rgba(7,118,89,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: "32px",
              color: "#059669",
            }}
          >
            ✓
          </div>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#EAEAEA",
              marginBottom: "12px",
            }}
          >
            Application Submitted
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "15px",
              lineHeight: 1.6,
              maxWidth: "400px",
              margin: "0 auto 32px",
            }}
          >
            Thanks for applying for{" "}
            <span style={{ color: "#059669" }}>{role.title}</span>. We'll review
            your application and get back to you within 5 business days.
          </p>
          <button
            onClick={onClose}
            style={{
              padding: "12px 32px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "transparent",
              color: "#EAEAEA",
              fontSize: "14px",
              fontFamily: "'Satoshi', 'Inter', sans-serif",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
        }}
      />
      <div
        style={{
          position: "relative",
          width: "600px",
          maxWidth: "94vw",
          maxHeight: "90vh",
          background: "#1A1D24",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          display: "flex",
          flexDirection: "column",
          animation: "modalIn 0.35s ease both",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 28px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(7,118,89,0.15)",
                  border: "1px solid rgba(7,118,89,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#059669",
                }}
              >
                {ICONS[role.icon]}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#EAEAEA",
                    margin: 0,
                  }}
                >
                  Apply — {role.title}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    margin: "2px 0 0",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {role.location} · {role.type}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                color: "rgba(255,255,255,0.4)",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {[0, 1].map((s) => (
              <div
                key={s}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    height: "3px",
                    borderRadius: "2px",
                    background:
                      s <= step
                        ? "linear-gradient(90deg, #077659, #059669)"
                        : "rgba(255,255,255,0.06)",
                    transition: "all 0.4s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: s <= step ? "#059669" : "rgba(255,255,255,0.2)",
                  }}
                >
                  {s === 0 ? "BASIC INFO" : "ROLE QUESTIONS"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "22px 28px 24px", overflowY: "auto", flex: 1 }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {currentFields.map((field, i) => (
              <div
                key={field.id}
                style={{ animation: `fadeSlideUp 0.3s ease ${i * 40}ms both` }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "8px",
                  }}
                >
                  {field.label}
                  {field.required && (
                    <span style={{ color: "#059669", fontSize: "11px" }}>
                      *
                    </span>
                  )}
                </label>
                <FormField
                  field={field}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "16px 28px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            {filledCount}/{currentFields.length} completed
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            {step > 0 && (
              <button
                onClick={() => setStep(0)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "transparent",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  fontFamily: "'Satoshi', 'Inter', sans-serif",
                  cursor: "pointer",
                }}
              >
                Back
              </button>
            )}
            <button
              onClick={() => (step === 0 ? setStep(1) : setSubmitted(true))}
              disabled={!canProceed}
              style={{
                padding: "10px 26px",
                borderRadius: "10px",
                border: "none",
                background: canProceed
                  ? "linear-gradient(135deg, #077659, #059669)"
                  : "rgba(255,255,255,0.04)",
                color: canProceed ? "#fff" : "rgba(255,255,255,0.2)",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'Satoshi', 'Inter', sans-serif",
                cursor: canProceed ? "pointer" : "default",
                transition: "all 0.3s ease",
                boxShadow: canProceed
                  ? "0 4px 20px rgba(7,118,89,0.3)"
                  : "none",
              }}
            >
              {step === 0 ? "Continue →" : "Submit Application"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Role Card ──────────────────────────────────────────────────────────────

function RoleCard({ role, isHovered, onHover, onLeave, onApply, animDelay }) {
  const [applyHovered, setApplyHovered] = useState(false);
  const expanded = isHovered;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: expanded
          ? "linear-gradient(135deg, rgba(7,118,89,0.08) 0%, rgba(10,91,91,0.04) 100%)"
          : "rgba(255,255,255,0.015)",
        border: expanded
          ? "1px solid rgba(7,118,89,0.35)"
          : "1px solid rgba(255,255,255,0.06)",
        borderRadius: "14px",
        padding: "20px 24px",
        cursor: "default",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        animation: `fadeSlideUp 0.5s ease ${animDelay}ms both`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {expanded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "3px",
            height: "100%",
            background: "linear-gradient(180deg, #077659, #059669)",
            borderRadius: "0 2px 2px 0",
          }}
        />
      )}

      {/* Main Row */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Icon */}
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "11px",
            flexShrink: 0,
            background: expanded
              ? "rgba(7,118,89,0.15)"
              : "rgba(255,255,255,0.03)",
            border: `1px solid ${expanded ? "rgba(7,118,89,0.25)" : "rgba(255,255,255,0.06)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: expanded ? "#059669" : "rgba(255,255,255,0.35)",
            transition: "all 0.3s ease",
          }}
        >
          {ICONS[role.icon]}
        </div>

        {/* Info block */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: "15.5px",
              color: "#EAEAEA",
              marginBottom: "5px",
              lineHeight: 1.2,
            }}
          >
            {role.title}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "7px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              ◎ {role.location}
            </span>
            <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              ⚙ {role.subtitle}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            {role.tags.map((t) => (
              <TagBadge key={t} tag={t} />
            ))}
            <span
              style={{
                padding: "2px 10px",
                borderRadius: "999px",
                fontSize: "10px",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.5px",
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {role.type}
            </span>
          </div>
        </div>

        {/* Apply button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onApply();
          }}
          onMouseEnter={() => setApplyHovered(true)}
          onMouseLeave={() => setApplyHovered(false)}
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            borderRadius: "10px",
            border: "none",
            background: expanded
              ? applyHovered
                ? "linear-gradient(135deg, #059669, #0A5B5B)"
                : "linear-gradient(135deg, #077659, #059669)"
              : applyHovered
                ? "rgba(7,118,89,0.12)"
                : "rgba(255,255,255,0.04)",
            color: expanded
              ? "#fff"
              : applyHovered
                ? "#CBFFEF"
                : "rgba(255,255,255,0.4)",
            fontSize: "13px",
            fontWeight: 600,
            fontFamily: "'Satoshi', 'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: expanded ? "0 4px 20px rgba(7,118,89,0.2)" : "none",
            whiteSpace: "nowrap",
          }}
        >
          Apply Now {ICONS.arrow}
        </button>
      </div>

      {/* Expandable description on hover */}
      <div
        style={{
          maxHeight: expanded ? "80px" : "0",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition:
            "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease 0.05s, margin 0.4s ease",
          marginTop: expanded ? "16px" : "0",
          paddingLeft: "60px",
        }}
      >
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.45)",
            margin: 0,
          }}
        >
          {role.description}
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────

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
    <div
      style={{
        minHeight: "100vh",
        background: "#15171C",
        color: "#EAEAEA",
        fontFamily: "'Satoshi', 'Inter', -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(7,118,89,0.3); color: #CBFFEF; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes glowPulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        @keyframes modalIn { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(7,118,89,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "glowPulse 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-300px",
          left: "-200px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(10,91,91,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Nav */}
      <div
        style={{
          padding: "20px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #077659, #0A5B5B)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.5px",
            }}
          >
            AX
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "-0.3px",
            }}
          >
            AEONTRIX
          </span>
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          {filteredRoles.length} OPEN POSITION
          {filteredRoles.length !== 1 ? "S" : ""}
        </span>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Hero */}
        <div style={{ padding: "56px 0 0" }}>
          <div
            style={{
              display: "flex",
              gap: "48px",
              alignItems: "flex-end",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <div style={{ flex: "1 1 440px" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "#059669",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  animation: "fadeSlideUp 0.5s ease both",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "1px",
                    background: "#059669",
                    display: "inline-block",
                  }}
                />
                OPEN POSITIONS
              </div>
              <h1
                style={{
                  fontSize: "clamp(34px, 4.5vw, 52px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                  margin: 0,
                  animation: "fadeSlideUp 0.5s ease 100ms both",
                }}
              >
                Join the{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #077659 0%, #059669 50%, #CBFFEF 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 6s linear infinite",
                  }}
                >
                  Vanguard.
                </span>
              </h1>
            </div>
            <div
              style={{
                flex: "0 1 360px",
                animation: "fadeSlideUp 0.5s ease 200ms both",
              }}
            >
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                }}
              >
                We're building growth infrastructure for the next generation of
                companies. Every role is remote, every contribution matters.
              </p>
            </div>
          </div>

          {/* ─── Horizontal Filters ─── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
              padding: "16px 0 28px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              marginBottom: "24px",
              animation: "fadeSlideUp 0.5s ease 250ms both",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.2)",
                marginRight: "4px",
              }}
            >
              FILTER
            </span>
            {allTags.map((tag) => {
              const active = activeFilter === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontFamily: "'Satoshi', 'Inter', sans-serif",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    border: active
                      ? "1px solid rgba(7,118,89,0.5)"
                      : "1px solid rgba(255,255,255,0.08)",
                    background: active
                      ? "rgba(7,118,89,0.12)"
                      : "rgba(255,255,255,0.02)",
                    color: active ? "#CBFFEF" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {tag}
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      opacity: 0.5,
                    }}
                  >
                    {tagCounts[tag]}
                  </span>
                </button>
              );
            })}
            {activeFilter !== "All" && (
              <button
                onClick={() => setActiveFilter("All")}
                style={{
                  marginLeft: "4px",
                  padding: "7px 14px",
                  borderRadius: "999px",
                  border: "none",
                  background: "transparent",
                  color: "#059669",
                  fontSize: "12px",
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "pointer",
                  letterSpacing: "0.3px",
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* ─── Full Width Job Listings ─── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingBottom: "80px",
          }}
        >
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
            <div
              style={{
                padding: "48px",
                textAlign: "center",
                color: "rgba(255,255,255,0.3)",
                fontSize: "14px",
              }}
            >
              No positions match this filter.
            </div>
          )}
        </div>
      </div>

      {/* Application Modal Overlay */}
      {applyingRole && (
        <ApplicationModal
          role={applyingRole}
          onClose={() => setApplyingRole(null)}
        />
      )}
    </div>
  );
}

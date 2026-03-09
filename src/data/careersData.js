export const ROLES = [
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

export const TAG_COLORS = {
  Technical: {
    bg: "rgba(8, 78, 170, 0.08)", // intel blue tint
    text: "#084eaa",
    border: "rgba(8, 78, 170, 0.25)",
  },

  Creative: {
    bg: "rgba(136, 92, 230, 0.08)", // intel purple tint
    text: "#5908ab",
    border: "rgba(136, 92, 230, 0.25)",
  },

  Marketing: {
    bg: "rgba(249, 115, 22, 0.08)", // warning orange tint
    text: "#c2410c",
    border: "rgba(249, 115, 22, 0.25)",
  },

  Sales: {
    bg: "rgba(5, 150, 105, 0.08)", // success green
    text: "#059669",
    border: "rgba(5, 150, 105, 0.25)",
  },

  Ops: {
    bg: "rgba(184, 0, 5, 0.06)", // danger red
    text: "#b80005",
    border: "rgba(184, 0, 5, 0.22)",
  },
};

export const ICONS = {
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

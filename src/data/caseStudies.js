export const TRANSFORMATIONS = [
  {
    id: 1,
    slug: "hospital-management-system",

    title: "Hospital Management System",
    client: "Sophos Medical Centre",

    partners: ["Codeforge + IntelliOps"],
    industry: "Healthcare",
    duration: "12 months",

    metrics: [
      { value: "73%", label: "Reduction in Patient Wait Time" },
      { value: "89%", label: "Fewer Billing Errors" },
      { value: "4.2 hrs", label: "Hours Saved Per Staff Daily" },
    ],

    stack: ["React", "Node.js", "MongoDB"],

    /* ---------- detailed page ---------- */

    hero: {
      subtitle: "Sophos Medical Centre",
      tags: ["Retention", "Intelligence", "Acquisition"],
    },

    metricsFull: [
      { value: "73%", label: "Reduction in Patient Wait Time" },
      { value: "89%", label: "Fewer Billing Errors" },
      { value: "4.2 hrs", label: "Hours Saved Per Staff Daily" },
      { value: "55%", label: "No-Show Reduction" },
      { value: "8", label: "AI Systems Deployed" },
      { value: "$85K+", label: "Annual Value Impact" },
    ],

    walkthrough: [
      { type: "image" },
      { type: "image" },
      { type: "image" },
      { type: "image" },
      { type: "image" },
      { type: "image" },
    ],

    diagnostic: {
      text: `Sophos Medical Centre was a well-established clinic with a growing patient base — but their operations hadn't kept up with their growth. The founder knew things could be better but couldn't pinpoint exactly where the biggest gaps were. When Aeontrix proposed The Diagnostic, they were open to it — they'd been considering various software solutions but nothing fit their specific workflows. What The Diagnostic uncovered was far more severe than expected: an operation held together by paper and willpower. Patient records in filing cabinets. Appointment booking via phone calls. Standalone billing software that didn't sync with anything. WhatsApp groups for internal coordination. Beyond the broken processes, The Diagnostic quantified $11,400/month in operational waste across four critical areas — and mapped a coordinated AI + software solution to eliminate it.`,
    },

    operationalReality: [
      {
        title: "Appointment Booking Chaos & High No-Show Rates",
        cost: "$4,600/mo",
        summary:
          "Phone-only booking during business hours with zero confirmation or payment systems",

        process:
          "Patients called during business hours to book appointments. Receptionists manually checked availability in a physical calendar, wrote down details, then manually entered them into a computer system. No confirmation was sent. Payment was only accepted at the clinic, often resulting in no-shows when patients changed their minds.",

        timeCost: [
          "12 hours/week managing phone bookings",
          "8 hours/week dealing with no-shows and rebooking",
          "5 hours/week processing walk-in payments at reception",
          "Zero bookings possible outside business hours(6pm - 9am, weekends)",
        ],

        businessImpact: [
          "22% no-show rate causing scheduling gaps and revenue loss",
          "Frustrated patients unable to book after hours",
          "Delayed cash flow from payment only at visit",
          "Reception staff overwhelmed during peak calling hours",
        ],
      },
      {
        title: "After-Hours Communication Black Hole",
        cost: "$2,200/mo",
        summary:
          "All calls, messages, and inquiries outside 9am–6pm went completely unanswered",

        process:
          "The clinic operated 9am–6pm Monday–Saturday. Any calls, messages, or inquiries outside these hours went unanswered until the next business day. Patients with urgent questions or booking needs had no recourse. WhatsApp and Telegram messages piled up overnight with no triage system.",

        timeCost: [
          "15 hours/week catching up on overnight messages each morning",
          "3–4 hour average response delay on time-sensitive inquiries",
          "Manual triage of urgent vs. non-urgent messages every morning",
        ],

        businessImpact: [
          "Working professionals who book after hours switched to competitors",
          "Urgent care queries missed during critical windows",
          "Emergency cases not routed to on-call doctors",
          "Significant patient loss from unanswered weekend inquiries",
        ],
      },
      {
        title: "Fragmented Multi-Channel Communication",
        cost: "$2,400/mo",
        summary:
          "Phone, WhatsApp, Telegram, email, and website each monitored separately by different staff",

        process:
          "Patients contacted the clinic via phone, WhatsApp, Telegram, email, and website forms. Each channel was monitored separately by different staff members. No unified view of patient communication history. Responses were inconsistent across channels, and important messages frequently fell through the cracks.",

        timeCost: [
          "10 hours/week switching between communication platforms",
          "6 hours/week clarifying duplicate inquiries across channels",
          "4 hours/week reconciling patient information from different sources",
        ],

        businessImpact: [
          "Inconsistent patient experience across different channels",
          "Duplicate work and wasted staff effort",
          "Important messages lost between platforms",
          "Staff confusion about which channel to prioritize during peak times",
        ],
      },
      {
        title: "Reactive Marketing & Manual Follow-Ups",
        cost: "$2,200/mo",
        summary:
          "Generic marketing blasts with zero patient segmentation and no systematic follow-up",

        process:
          "Marketing campaigns were planned manually without patient segmentation. Healthcare packages were promoted via generic blast emails with no personalization. Post-visit follow-ups were done manually if staff remembered. No systematic feedback collection, no seasonal health campaigns, and no data on which patients needed preventive care.",

        timeCost: [
          "8 hours/week creating and sending generic marketing emails",
          "7 hours/week manually following up with post-visit patients",
          "3 hours/week attempting to collect patient feedback",
          "Zero time for strategic health campaigns",
        ],

        businessImpact: [
          "Low marketing conversion rates from generic messaging",
          "Missed opportunities for preventive care package upsells",
          "Poor patient retention with no systematic follow-up engine",
          "No understanding of patient satisfaction until complaints arrived",
        ],
      },
    ],

    beforeAfter: [
      {
        before: "Manual booking & reminders",
        after: "Automated scheduling with AI reminders",
      },
      {
        before: "Multiple disconnected tools",
        after: "Unified healthcare operations system",
      },
    ],

    features: [
      "Online Appointment Payments",
      "AI Receptionist",
      "Smart Reminder System",
      "Healthcare Package Promotions",
      "Inventory Warning System",
    ],

    financialImpact: {
      yearlySavings: "$85,000+",
    },

    testimonial: {
      quote:
        "We were drowning in paperwork before this system. Now operations run smoothly.",
      author: "Dr. Sameer Ahuja",
      role: "Director, Sophos Medical Centre",
    },
  },

  {
    id: 2,
    slug: "learning-management-system",

    title: "Learning Management System",
    client: "FIRMST Language School",

    partners: ["Codeforge + IntelliOps"],
    industry: "Education",
    duration: "4 months",

    metrics: [
      { value: "2.4x", label: "Student Capacity Increase" },
      { value: "85%", label: "Reduction in Enrollment Time" },
      { value: "34%", label: "Improvement in Completion" },
    ],

    stack: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 3,
    slug: "unified-olympiad-management-system",

    title: "Unified Olympiad Management System",
    client: "National Aviation Olympiad",

    partners: ["Codeforge"],
    industry: "Education / Events",
    duration: "Ongoing",

    comingSoon: true,

    stack: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 4,
    slug: "xentary-agency-os",

    title: "Xentary — Agency Operating System",
    client: "Custom In-House ERP for Agencies",

    partners: ["Xentary"],
    industry: "Professional Services",
    duration: "3 months + Ongoing",

    comingSoon: true,

    stack: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 5,
    slug: "content-intelligence-os",

    title: "Content Intelligence OS",
    client: "Competitive Intelligence for Content Creators",

    partners: ["Codeforge + IntelliOps"],
    industry: "Creator Economy",
    duration: "2 weeks",

    metrics: [
      { value: "10 hrs", label: "Hours Saved Weekly" },
      { value: "47%", label: "Improvement in Engagement" },
      { value: "3.2x", label: "Faster Content Planning" },
    ],

    stack: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 6,
    slug: "community-platform",

    title: "Community Platform",
    client: "Ayushma Yoga",

    partners: ["Codeforge + IntelliOps"],
    industry: "Wellness",
    duration: "3 months",

    metrics: [
      { value: "3.8x", label: "Community Engagement Increase" },
      { value: "64%", label: "Reduction in Repetitive Queries" },
      { value: "2.1x", label: "Member Retention Increase" },
    ],

    stack: ["React", "Node.js", "MongoDB"],
  },
];

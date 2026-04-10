export const TRANSFORMATIONS = [
  {
    id: 1,
    slug: "sophos-medical-centre",

    title: "Hospital Management System",
    client: "Sophos Medical Centre",

    partners: [],
    industry: "Healthcare",
    duration: "12 months",
    comingSoon: false,

    metrics: [
      { value: "73%", label: "Reduction in Patient Wait Time" },
      { value: "89%", label: "Fewer Billing Errors" },
      { value: "4.2 hrs", label: "Hours Saved Per Staff Daily" },
    ],

    stack: ["React", "Node.js", "MongoDB"],

    /* ---------- detailed page ---------- */

    hero: {
      subtitle: "Sophos Medical Centre",
      client: "Sophos Medical Centre — Multispecialty Clinic",
      tags: ["Retention", "Intelligence", "Acquisition"],
      duration: "12 months",
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
        before: "Paper patient records stored in filing cabinets",
        after: "Digital EMR with instant search and full patient history",
      },
      {
        before:
          "Manual appointment booking via phone calls during business hours only",
        after:
          "24/7 AI-powered booking with online payment and automated reminders",
      },
      {
        before:
          "Billing done in standalone software, reconciled manually at month-end",
        after:
          "Real-time integrated billing with automatic insurance claim generation",
      },
      {
        before:
          "WhatsApp, Telegram, email, phone — all monitored separately by different staff",
        after:
          "Unified AI-powered chat interface with intelligent routing across all channels",
      },
      {
        before: "Generic email blasts for marketing, zero personalization",
        after:
          "AI-driven personalized healthcare package recommendations based on patient history",
      },
      {
        before:
          "Follow-ups depended on doctors remembering or staff manually calling",
        after:
          "Automated follow-up scheduling based on treatment plans with proactive outreach",
      },
    ],

    //     solution: {
    //       description: `
    // Aeontrix deployed a two-layer transformation: a unified Hospital Management System (CodeForge) covering the complete patient lifecycle — registration, scheduling, consultation, diagnostics, prescription management, billing, and follow-up — plus a coordinated network of 8 AI systems (IntelliOps) that automate appointment management, patient communication, payments, healthcare marketing, and inventory intelligence.

    // Electronic medical records with instant search replaced the filing cabinets. Smart scheduling with conflict detection eliminated the phone-call bottleneck. Integrated billing with insurance claim processing closed the revenue leakage.

    // An AI receptionist now handles 24/7 booking and patient inquiries. Automated appointment reminders with online payment incentives cut no-shows by over half.

    // A unified multi-channel chat interface consolidated WhatsApp, Telegram, email, and website into one AI-powered dashboard. Personalized healthcare package promotions generate additional revenue automatically.

    // Follow-up appointment scheduling, feedback collection, and inventory monitoring all run on intelligent automation.

    // Management dashboards with real-time KPIs gave the founder complete visibility — revenue per doctor, patient satisfaction, capacity utilization — without chasing anyone for reports.
    // `,
    //     },

    aiSystems: [
      {
        id: 1,
        title: "Online Appointment Payments",
        description:
          "Patients pay at booking with automatic discount incentive, reducing no-shows and accelerating cash flow.",
        impact: "55% no-show reduction · 28% faster cash flow",
      },
      {
        id: 2,
        title: "AI Receptionist (After-Hours)",
        description:
          "24/7 intelligent patient support for booking, inquiries, and service information when the clinic is closed.",
        impact:
          "24/7 booking availability · 40% increase in after-hours bookings",
      },
      {
        id: 3,
        title: "Unified Multi-Channel Chat",
        description:
          "All patient channels (WhatsApp, Telegram, Email, Website) consolidated into one AI-powered interface.",
        impact: "16 hours/week saved · 95% first-response accuracy",
      },
      {
        id: 4,
        title: "Healthcare Package Promotions",
        description:
          "AI analyzes patient history and health needs to recommend relevant preventive care packages.",
        impact: "$3,500/month additional revenue · 22% conversion rate",
      },
      {
        id: 5,
        title: "Appointment Reminders & Confirmation",
        description:
          "Multi-stage reminders via SMS, WhatsApp, and email with easy rescheduling capability.",
        impact: "55% no-show reduction · 8 hours/week saved",
      },
      {
        id: 6,
        title: "Patient Feedback Collection",
        description:
          "Systematic post-visit feedback collection with automated follow-up actions based on satisfaction scores.",
        impact: "65% feedback collection rate · 4.3/5 avg rating",
      },
      {
        id: 7,
        title: "Follow-Up Appointment Scheduler",
        description:
          "Proactive outreach to patients needing follow-ups based on treatment plans with automatic rebooking.",
        impact: "45% improvement in follow-up compliance",
      },
      {
        id: 8,
        title: "Inventory Warning System",
        description:
          "Real-time monitoring of medical supply and medication levels with automatic restocking alerts.",
        impact: "Zero stockouts · 15% fewer emergency orders",
      },
    ],

    financialImpact: {
      rows: [
        {
          category: "Reception & Admin Labor",
          before: "$3,100/mo",
          after: "$1,400/mo",
          savings: "$1,700/mo",
        },
        {
          category: "No-Shows & Delayed Payment",
          before: "$4,600/mo",
          after: "$2,100/mo",
          savings: "$2,500/mo",
        },
        {
          category: "After-Hours Lost Bookings",
          before: "$2,200/mo",
          after: "$300/mo",
          savings: "$1,900/mo",
        },
        {
          category: "Marketing & Retention Inefficiency",
          before: "$2,200/mo",
          after: "$600/mo",
          savings: "$1,600/mo",
        },
      ],
      total: {
        before: "$12,100/mo",
        after: "$4,400/mo",
        savings: "$7,700/mo",
      },
      annualImpact: "$85,000+",
    },

    whatWeBuilt: [
      {
        title: "Electronic Medical Records",
        description:
          "Complete patient history, prescriptions, lab results, and consultation notes in one searchable interface.",
      },
      {
        title: "Smart Scheduling Engine",
        description:
          "Drag-and-drop appointment management with conflict detection, automated patient reminders via SMS/email.",
      },
      {
        title: "Integrated Billing & Insurance",
        description:
          "Auto-generated invoices, insurance claim processing, payment tracking, and financial reporting.",
      },
      {
        title: "Pharmacy & Inventory Module",
        description:
          "Real-time stock levels, expiry tracking, automated purchase orders, and supplier management.",
      },
      {
        title: "Patient Portal",
        description:
          "Self-service appointment booking, report downloads, prescription refill requests, and billing history.",
      },
      {
        title: "Management Dashboards",
        description:
          "Real-time KPIs — revenue per doctor, patient satisfaction scores, operational bottlenecks, capacity utilization.",
      },
    ],

    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "AWS",
      "Redis",
      "OpenAI API",
      "Twilio",
      "GitHub Actions",
    ],

    testimonial: {
      quote: `We were drowning in paper before this honestly. Front desk staff used to spend half their day just pulling files and making calls. Now everything is right there on screen, patients book online, and I can see exactly how the clinic is performing without chasing people for reports. Should have done this much earlier.`,
      name: "Dr. Saravanan A. Sankaranarayanan",
      role: "Chief Medical Officer, Sophos Medical Centre",
    },

    beyondNumbers: [
      "Staff morale improved — team no longer frustrated with broken processes",
      "Patient satisfaction scores increased, leading to more referrals",
      "Clinic can now scale to additional locations without operational chaos",
      "Regulatory compliance documentation became automated and audit-ready",
      "Owner freed from day-to-day ops, able to focus on growth",
    ],
  },

  {
    id: 2,
    slug: "firmst-language-school",

    title: "Learning Management System",
    client: "FIRMST Language School",

    partners: [],
    industry: "Education",
    duration: "4 months",
    comingSoon: false,

    metrics: [
      { value: "2.4x", label: "Student Capacity Increase" },
      { value: "85%", label: "Reduction in Enrollment Time" },
      { value: "34%", label: "Improvement in Completion" },
    ],

    stack: ["React", "Node.js", "MongoDB"],

    /* ---------- detailed page ---------- */

    hero: {
      subtitle: "FIRMST Language School",
      client: "FIRMST Language School",
      tags: ["Retention", "Intelligence"],
      duration: "4 months",
    },

    metricsFull: [
      { value: "2.4x", label: "Student Capacity Increase" },
      { value: "85%", label: "Reduction in Enrollment Time" },
      { value: "34%", label: "Improvement in Completion" },
      { value: "12", label: "Admin Hours Saved Weekly" },
      { value: "28%", label: "Increase in Re-Enrollment" },
      { value: "$53K+", label: "Annual Value Impact" },
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
      text: `FIRMST were amazing teachers running a language school with students worldwide — but their operations were completely fragmented. They were skeptical at first. They'd tried looking at off-the-shelf solutions before and nothing could handle their specific combination of hybrid online/offline classes, multi-timezone scheduling, and multi-currency billing. But they knew they could do better with their operations. They were willing to give The Diagnostic a try. What it revealed confirmed the scale of the problem — and quantified $5,900/month in operational waste across four critical areas that were silently strangling growth.`,
    },

    operationalReality: [
      {
        title: "Enrollment & Onboarding Bottleneck",
        cost: "$1,800/mo",
        summary:
          "Google Forms to manual processing — a 2-3 day delay before students could even start",

        process:
          "Prospective students filled out a Google Form expressing interest. An admin then manually reviewed the form, sent back an email with available time slots, waited for a response, then manually assessed the student's level via a phone call. Once level was determined, the admin manually assigned them to a class and sent enrollment confirmation. The entire cycle took 2–3 days per student.",

        timeCost: [
          "6 hours/week processing enrollment forms manually",
          "4 hours/week conducting phone-based placement assessments",
          "3 hours/week sending back-and-forth emails coordinating start dates",
        ],

        businessImpact: [
          "30% of interested students dropped off during the 2-3 day enrollment delay",
          "No self-service enrollment — every student required personal admin attention",
          "Peak enrollment periods created massive backlogs",
          "Inconsistent placement — teacher assessment varied by who conducted it",
        ],
      },
      {
        title: "Scheduling Chaos Across Time Zones",
        cost: "$1,200/mo",
        summary:
          "A shared Google Sheet managing students across 6+ time zones with constant conflicts",

        process:
          "All class schedules were managed in a single shared Google Sheet. Admins manually calculated time zone conversions, checked teacher availability, and slotted students in. With group and individual sessions happening simultaneously across online and offline, the sheet was a constant source of double-bookings and confusion.",

        timeCost: [
          "5 hours/week manually managing and updating the shared sheet",
          "3 hours/week resolving scheduling conflicts and double-bookings",
          "2 hours/week handling timezone-related confusion with international students",
        ],

        businessImpact: [
          "15+ scheduling conflicts per month causing student and teacher frustration",
          "Teachers showing up to empty virtual rooms due to timezone errors",
          "Students missing classes because no automated reminders existed",
          "Admin became the single point of failure for any schedule question",
        ],
      },
      {
        title: "Payment Tracking & Revenue Leakage",
        cost: "$900/mo",
        summary:
          "A separate spreadsheet for payments that never matched enrollment records",

        process:
          "Payments were tracked in a completely separate spreadsheet from enrollments. Students paid via bank transfer, and an admin manually checked the bank account, matched payments to students, and updated the spreadsheet. Package renewals were tracked by memory. Multi-currency payments required manual conversion calculations.",

        timeCost: [
          "4 hours/week reconciling payment records against enrollment",
          "2 hours/week chasing late payments manually via WhatsApp",
          "1 hour/week handling multi-currency conversion and tracking",
        ],

        businessImpact: [
          "Students attending classes without having paid — discovered weeks later",
          "Package renewals missed because no system tracked expiration dates",
          "Multi-currency confusion leading to billing disputes",
          "Revenue leakage from untracked trial-to-paid conversions",
        ],
      },
      {
        title: "Invisible Student Progress & Silent Churn",
        cost: "$2,000/mo",
        summary:
          "Student engagement tracked by teacher memory and WhatsApp — churn only discovered after it happened",

        process:
          "Student progress was not formally tracked anywhere. Teachers kept notes in their own notebooks or WhatsApp chats. When students stopped showing up, it was only noticed after several missed classes. No system for identifying at-risk students, no re-engagement process, and no structured feedback collection.",

        timeCost: [
          "3 hours/week teachers manually updating informal progress notes",
          "2 hours/week admin calling lapsed students to understand why they left",
        ],

        businessImpact: [
          "Students silently churned with zero early warning system",
          "No data on why students dropped out or which programs had low completion",
          "Re-enrollment conversations happened too late to save most students",
          "Teachers had no visibility into each other's students for coverage",
        ],
      },
    ],

    beforeAfter: [
      // {
      //   before: "Enrollment via Google Forms — manual processing took 2-3 days",
      //   after:
      //     "Instant enrollment with AI-powered placement testing and auto-level assignment",
      // },
      {
        before: "Scheduling in shared Google Sheet — constant double-bookings",
        after:
          "Smart scheduling with timezone detection, conflict prevention, and auto-reminders",
      },
      {
        before: "Student progress tracked via WhatsApp and teacher memory",
        after:
          "Intelligent progress dashboards with at-risk student detection and auto re-engagement",
      },
      {
        before:
          "Payments managed in a separate spreadsheet, frequent mismatches",
        after:
          "Automated billing with multi-currency support, auto-invoicing, and smart reminders",
      },
      {
        before: "No visibility into teacher performance or student outcomes",
        after:
          "Analytics on completion rates, satisfaction scores, and revenue per program",
      },
    ],

    //     solution: {
    //       description: `The CodeForge workstream delivered a complete custom Learning Management System from the ground up, while IntelliOps layered in intelligent automation across enrollment, scheduling, and student engagement. Enrollment automation with instant confirmation, AI-powered placement testing, and auto-level assignment replaced the Google Forms bottleneck entirely. Smart scheduling with timezone detection and conflict prevention eliminated the chaos — zero conflicts since deployment. An intelligent student engagement system monitors progress patterns and flags at-risk students before they drop off, automatically triggering re-engagement sequences. Automated billing with package-based and per-session pricing, auto-invoicing, and smart payment reminders closed the spreadsheet gap. A teacher portal consolidated class management, materials, attendance, grading, and communication into one interface. A certification system with verifiable credentials added a professional layer. The Aeontrix team had zero experience in education technology when this started. The Diagnostic identified the problems. Research filled the knowledge gaps. The right team was assembled. FIRMST transformed from a small language school into a premium boutique school with infrastructure matching the quality of their teaching.
    // `,
    //     },

    aiSystems: false,

    financialImpact: {
      rows: [
        {
          category: "Admin & Enrollment Processing",
          before: "$1,800/mo",
          after: "$400/mo",
          savings: "$1,400/mo",
        },
        {
          category: "Scheduling & Coordination",
          before: "$1,200/mo",
          after: "$200/mo",
          savings: "$1,000/mo",
        },
        {
          category: "Payment Tracking & Revenue Leakage",
          before: "$900/mo",
          after: "$150/mo",
          savings: "$750/mo",
        },
        {
          category: "Student Churn & Missed Re-Enrollment",
          before: "$2,000/mo",
          after: "$700/mo",
          savings: "$1,300/mo",
        },
      ],
      total: {
        before: "$5,900/mo",
        after: "$1,450/mo",
        savings: "$4,450/mo",
      },
      annualImpact: "$53,000+",
    },

    whatWeBuilt: [
      // {
      //   title: "Enrollment & AI Placement Engine",
      //   description:
      //     "Self-service enrollment with AI-powered language proficiency assessment to place students in the right level automatically.",
      // },
      {
        title: "Smart Hybrid Class Management",
        description:
          "Unified scheduling for online and offline classes across time zones, handling group and 1-on-1 with conflict prevention.",
      },
      {
        title: "Intelligent Student Tracking",
        description:
          "Progress dashboards that flags disengaging students and triggers re-engagement.",
      },
      {
        title: "Teacher Portal",
        description:
          "Class management, material uploads, attendance tracking, grading, and student communication in one interface.",
      },
      {
        title: "Automated Billing",
        description:
          "Package-based and per-session pricing, multi-currency support, auto-invoicing, and smart payment reminders.",
      },
      {
        title: "Certification System",
        description:
          "Automated certificate generation upon course completion with verifiable credentials.",
      },
    ],

    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "AWS S3",
      "WebRTC",
      "OpenAI API",
      "GitHub",
    ],

    testimonial: {
      quote: `We’re just a small language school — Aeontrix has helped us transform into a premium boutique school with an LMS that is custom made to meet all our requirements. No other software that we explored could satisfy these needs. Everything we tried before was either too generic or too complicated. This was built for exactly how we teach.`,
      name: "Marina Yurievna",
      role: "Academic Director, FIRMST Language School",
    },

    beyondNumbers: [
      "Teachers report significantly less administrative burden, more time for actual teaching",
      "Professional platform experience improved brand perception among prospective students",
      "School can now offer new program types without operational strain",
      "Student satisfaction improved, driving word-of-mouth referrals",
      "Data-driven decisions replaced gut-feeling management",
    ],
  },

  {
    id: 3,
    slug: "ayushma-yoga",

    title: "Community Platform",
    client: "Ayushma Yoga",

    partners: [],
    industry: "Wellness",
    duration: "3 months",
    comingSoon: false,

    metrics: [
      { value: "3.8x", label: "Community Engagement Increase" },
      { value: "64%", label: "Reduction in Repetitive Queries" },
      { value: "2.1x", label: "Member Retention Increase" },
    ],

    stack: ["React", "Node.js", "MongoDB"],

    /* ---------- detailed page ---------- */

    hero: {
      subtitle: "Ayushma Yoga",
      client: "Ayushma Yoga — Wellness Community",
      tags: ["Retention", "Acquisition"],
      duration: "3 months",
    },

    metricsFull: [
      { value: "3.8x", label: "Community Engagement Increase" },
      { value: "64%", label: "Reduction in Repetitive Queries" },
      { value: "2.1x", label: "Member Retention Increase" },
      { value: "42%", label: "Course Completion Rate" },
      { value: "15", label: "Hours Saved Weekly" },
      { value: "$42K+", label: "Annual Value Impact" },
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
      text: `Ayushma Yoga had built a loyal following through in-person classes and word of mouth — but their community existed entirely on WhatsApp groups and Instagram DMs. The founder was personally answering the same questions repeatedly, managing schedules through group messages, and losing track of enrollment. When Aeontrix ran The Diagnostic, it revealed a community engagement problem hiding behind what looked like a marketing problem. The demand was there. But there was no infrastructure to support it. The Diagnostic quantified $4,800/month in operational waste and missed revenue across three critical areas.`,
    },

    operationalReality: [
      {
        title: "Founder as Single Point of Contact",
        cost: "$2,400/mo",
        summary:
          "Every question, every enrollment, every schedule update flowed through one person",

        process:
          "The founder personally handled all community communication via Instagram DMs and WhatsApp. New member onboarding, class schedule questions, payment confirmations, content recommendations — everything required the founder's direct involvement. The same 15-20 questions were answered repeatedly every week. The founder spent more time on admin than on teaching.",

        timeCost: [
          "8 hours/week answering repetitive DMs and WhatsApp messages",
          "4 hours/week onboarding new members individually",
          "3 hours/week managing schedule updates and communicating changes",
        ],

        businessImpact: [
          "Founder burnout — more time on logistics than teaching",
          "Response delays of 6-12 hours frustrating engaged members",
          "No delegation possible — community collapsed when founder was unavailable",
          "Growth capped by founder's personal bandwidth",
        ],
      },
      {
        title: "Community Trapped in WhatsApp",
        cost: "$1,600/mo",
        summary:
          "Valuable discussions, resources, and history lost in an unsearchable message stream",

        process:
          "The entire community lived in WhatsApp groups. Useful discussions about yoga philosophy, technique questions, member introductions, and resource sharing all happened in a linear message stream. Nothing was searchable. New members had no access to past conversations. Files shared in the group were buried within days. The community had zero institutional memory.",

        timeCost: [
          "2 hours/week re-sharing resources that got buried in the chat",
          "2 hours/week repeating information for new members who missed earlier discussions",
        ],

        businessImpact: [
          "Valuable community knowledge lost in an unsearchable stream",
          "New members felt disconnected — no onboarding or orientation experience",
          "Experienced members stopped contributing because discussions disappeared",
          "No way to organize conversations by topic, level, or interest",
        ],
      },
      {
        title: "Course Content Scattered & Inaccessible",
        cost: "$800/mo",
        summary:
          "Recorded sessions, guides, and resources shared as random files with no structure",

        process:
          "The founder occasionally recorded live sessions and shared them in the WhatsApp group as video files. Written guides were sent as PDFs. There was no structured curriculum, no progress tracking, and no way for members to learn at their own pace. Members who missed a live session had to hope the recording was still findable in the chat history.",

        timeCost: [
          "3 hours/week reformatting and re-uploading content that members couldn't find",
          "2 hours/week fielding requests for specific past recordings",
        ],

        businessImpact: [
          "No self-paced learning possible — everything depended on live attendance",
          "Members who missed sessions had no structured way to catch up",
          "No course completion tracking or progress visibility",
          "Premium content couldn't be monetized because there was no delivery mechanism",
        ],
      },
    ],

    beforeAfter: [
      {
        before: "WhatsApp & Telegram",
        after:
          "Dedicated community platform with forums, topics, and searchable history",
      },
      {
        before: "No courses, just live classes",
        after:
          "Structured courses with video lessons, progress tracking, and learning paths",
      },
      {
        before: "Live sessions on informal video calls with no recordings",
        after:
          "Integrated live sessions with scheduling, attendance, and automatic recordings",
      },
      {
        before:
          "Founder personally answering the same questions repeatedly via DMs",
        after:
          "AI-powered Q&A engine that surfaces existing answers before new questions are asked",
      },
      {
        before: "No way to offer tiered access or premium content",
        after:
          "Role-based access with member, admin, and owner permissions for structured programs",
      },
    ],

    // solution: {
    //   description: `The CodeForge workstream delivered a custom-built community platform designed specifically for Ayushma Yoga's teaching model, while IntelliOps layered in intelligent engagement automation. A private community space with structured forums — organized by topic, program level, and interest area — where members post questions, share experiences, and support each other. Real-time chat enables direct member-to-member conversations. The courses module allows structured learning paths with video lessons, materials, assignments, and progress tracking. Live session integration handles scheduling, registration, attendance, and automatic recording. An AI-powered Q&A engine organizes questions and surfaces existing answers before members ask again, reducing the founder's repetitive DM load. Intelligent engagement monitoring flags members showing disengagement patterns and triggers re-activation sequences. Role-based access controls separate owners, administrators, and members with granular permissions. The platform transformed Ayushma from a schedule-dependent practice into an always-on wellness community.`,
    // },

    aiSystems: false,
    financialImpact: {
      rows: [
        {
          category: "Founder Time on Community Management",
          before: "$2,400/mo",
          after: "$600/mo",
          savings: "$1,800/mo",
        },
        {
          category: "Member Churn & Missed Revenue",
          before: "$1,600/mo",
          after: "$500/mo",
          savings: "$1,100/mo",
        },
        {
          category: "Content Distribution & Course Delivery",
          before: "$800/mo",
          after: "$200/mo",
          savings: "$600/mo",
        },
      ],
      total: {
        before: "$4,800/mo",
        after: "$1,300/mo",
        savings: "$3,500/mo",
      },
      annualImpact: "$42,000+",
    },

    whatWeBuilt: [
      {
        title: "Community Forum",
        description:
          "Structured discussion spaces organized by topic, program level, and interest area with threaded conversations and search.",
      },
      {
        title: "Real-Time Member Chat",
        description:
          "Direct messaging and group conversations that replace WhatsApp chaos with organized, persistent, and searchable communication.",
      },
      {
        title: "Course Builder & Library",
        description:
          "Create structured programs with video lessons, reading materials, assignments, and progress tracking for self-paced learning.",
      },
      {
        title: "Live Session Integration",
        description:
          "Schedule, host, and record live sessions with automatic attendance tracking and replay access for members who miss a class.",
      },
      {
        title: "AI-Powered Q&A Engine",
        description:
          "Intelligent question routing that surfaces existing answers, reduces repetitive queries, and builds a searchable knowledge base.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Granular permissions for owners, administrators, and members — delegate moderation and content management without losing control.",
      },
    ],

    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "WebRTC",
      "Socket.io",
      "AWS",
    ],

    testimonial: {
      quote: `Before this, I was the community. Every question came to me, every schedule change was a WhatsApp message, every new member needed personal onboarding. Now the community runs itself. Members help each other, courses are always available, and I can focus on teaching instead of managing logistics. It feels like we went from a class to an institution.`,
      name: "Ayushma",
      role: "Founder, Ayushma Yoga",
    },

    beyondNumbers: [
      "Founder freed from being the sole point of contact — community self-sustains between sessions",
      "Members report deeper connection with each other, not just with the instructor",
      "Course content creates value between live sessions, increasing perceived worth of membership",
      "Platform professionalism elevated brand perception",
      "Foundation built for scaling to multiple instructors without operational chaos",
    ],
  },

  // {
  //   id: 4,
  //   slug: "content-intelligence-os",

  //   title: "Content Intelligence OS",
  //   client: "Competitive Intelligence for Content Creators",

  //   partners: ["Codeforge + IntelliOps"],
  //   industry: "Creator Economy",
  //   duration: "2 weeks",
  //   comingSoon: false,

  //   metrics: [
  //     { value: "10", label: "Hours Saved Weekly" },
  //     { value: "47%", label: "Improvement in Engagement" },
  //     { value: "3.2x", label: "Faster Content Planning" },
  //   ],

  //   stack: ["React", "Node.js", "MongoDB"],

  //   /* ---------- detailed page ---------- */

  //   hero: {
  //     subtitle: "Competitive Intelligence for Content Creators",
  //     client: "Instagram & YouTube Influencer · 450K+ Combined Following",
  //     tags: ["CodeForge + IntelliOps", "Acquisition", "Intelligence"],
  //     duration: "2 weeks",
  //   },

  //   metricsFull: [
  //     { value: "10", label: "Hours Saved Weekly" },
  //     { value: "47%", label: "Improvement in Engagement" },
  //     { value: "3.2x", label: "Faster Content Planning" },
  //     { value: "100%", label: "Competitor Tracking Accuracy" },
  //     { value: "23%", label: "Lead Magnet Conversion Up" },
  //     { value: "$50K+", label: "Annual Value Impact" },
  //   ],

  //   walkthrough: [
  //     { type: "image" },
  //     { type: "image" },
  //     { type: "image" },
  //     { type: "image" },
  //     { type: "image" },
  //     { type: "image" },
  //   ],

  //   diagnostic: {
  //     text: `A content creator with 450K+ combined following across Instagram and YouTube was spending 10+ hours per week manually checking competitor channels, screenshotting metrics, and trying to spot trends in spreadsheets. Content decisions were based on intuition, not data. The Diagnostic identified the core problem: zero centralized visibility into their own performance across the two platforms they operated on, let alone their competitors. Every decision was a guess. The Diagnostic quantified $6,500/month in lost opportunity and inefficiency across three critical areas.`,
  //   },

  //   operationalReality: [
  //     {
  //       title: "Manual Competitor Monitoring",
  //       cost: "$2,500/mo",
  //       summary:
  //         "10+ hours per week manually screenshotting and tracking competitor content across platforms",

  //       process:
  //         "Every Monday, the creator spent the entire morning opening competitor profiles across Instagram and YouTube, screenshotting posts, manually logging engagement numbers into a spreadsheet, and trying to spot trends. By the time analysis was done, half the day was gone. Competitor tracking was always reactive — seeing what worked last week instead of predicting what would work next week.",

  //       timeCost: [
  //         "6 hours/week manually checking and logging competitor activity",
  //         "3 hours/week building spreadsheets to track trends",
  //         "1 hour/week trying to identify patterns across platforms",
  //       ],

  //       businessImpact: [
  //         "Half of every Monday consumed by manual research instead of creating",
  //         "Trend identification lagged by 1-2 weeks behind real-time shifts",
  //         "Analysis was inconsistent — some competitors tracked closely, others forgotten",
  //         "No systematic understanding of what made competitor content perform",
  //       ],
  //     },
  //     {
  //       title: "Scattered Performance Data",
  //       cost: "$3,200/mo",
  //       summary:
  //         "Instagram Insights and YouTube Studio as two separate, non-comparable data silos",

  //       process:
  //         "Performance data lived in two separate native analytics dashboards — Instagram Insights and YouTube Studio. Each had different metrics, different time ranges, and different interfaces. Cross-platform performance comparison was impossible without manual spreadsheet work. The creator had no unified view of which content type performed best across both platforms.",

  //       timeCost: [
  //         "2 hours/week toggling between platform analytics dashboards",
  //         "2 hours/week manually consolidating metrics into comparison spreadsheets",
  //       ],

  //       businessImpact: [
  //         "No cross-platform performance comparison possible",
  //         "Engagement patterns invisible across the full audience",
  //         "Content strategy decisions made based on incomplete, single-platform data",
  //         "Lead magnet attribution impossible — no idea which platform drove conversions",
  //       ],
  //     },
  //     {
  //       title: "Content Planning by Gut Feel",
  //       cost: "$800/mo",
  //       summary:
  //         "No data-driven system for hooks, CTAs, formats, or posting times — every decision was a guess",

  //       process:
  //         'Content planning happened in the creator\'s head or in scattered notes. Hooks were written based on intuition. CTAs were copy-pasted from previous posts. No testing framework for what formats performed best. Posting times were based on "what feels right" rather than audience data. Lead magnets were created without any conversion tracking.',

  //       timeCost: [
  //         "3 hours/week brainstorming content ideas without data",
  //         "2 hours/week creating lead magnets with no conversion feedback",
  //       ],

  //       businessImpact: [
  //         "Engagement plateau — same formats repeated without performance data",
  //         "Lead magnets underperforming with no visibility into conversion rates",
  //         "Hook effectiveness completely unknown until post-publish",
  //         "Brand voice inconsistency across posts and platforms",
  //       ],
  //     },
  //   ],

  //   beforeAfter: [
  //     {
  //       before: "Manually checking 5-10 competitor accounts daily",
  //       after:
  //         "Automated weekly intelligence reports with AI-powered trend analysis",
  //     },
  //     {
  //       before:
  //         "Content performance scattered across Instagram and YouTube analytics",
  //       after:
  //         "Unified dashboard showing cross-platform performance in one view",
  //     },
  //     {
  //       before: "Hook and CTA effectiveness was pure guesswork",
  //       after:
  //         "AI-powered analysis of top-performing hooks and CTAs with recommendations",
  //     },
  //     {
  //       before: "Scheduling done separately on each platform",
  //       after: "Unified content calendar with cross-platform scheduling",
  //     },
  //     {
  //       before: "No data on which lead magnets drove conversions",
  //       after: "Lead magnet performance tracking with conversion attribution",
  //     },
  //   ],

  //   solution: {
  //     description: `The CodeForge and IntelliOps workstreams delivered a Content Intelligence OS — automated competitor tracking with weekly intelligence reports, cross-platform analytics dashboard unifying Instagram and YouTube data, AI-powered hook and CTA analysis, unified scheduling, lead magnet attribution tracking, and a brand profile engine for content consistency. The system provides actionable suggestions based on the creator's brand profile and historical performance data. Every decision backed by data. Every priority backed by quantified impact. What used to take an entire Monday of manual competitor research now takes a glance at a dashboard over morning coffee.`,
  //   },

  //   aiSystems: false,

  //   financialImpact: {
  //     rows: [
  //       {
  //         category: "Manual Research & Competitor Monitoring",
  //         before: "$2,500/mo",
  //         after: "$400/mo",
  //         savings: "$2,100/mo",
  //       },
  //       {
  //         category: "Missed Engagement Opportunities",
  //         before: "$3,200/mo",
  //         after: "$1,700/mo",
  //         savings: "$1,500/mo",
  //       },
  //       {
  //         category: "Content Planning Inefficiency",
  //         before: "$800/mo",
  //         after: "$200/mo",
  //         savings: "$600/mo",
  //       },
  //     ],
  //     total: {
  //       before: "$6,500/mo",
  //       after: "$2,300/mo",
  //       savings: "$4,200/mo",
  //     },
  //     annualImpact: "$50,000+",
  //   },

  //   whatWeBuilt: [
  //     {
  //       title: "Competitor Intelligence Engine",
  //       description:
  //         "Automated tracking of competitor content, engagement metrics, posting frequency, and trend identification.",
  //     },
  //     {
  //       title: "Cross-Platform Analytics",
  //       description:
  //         "Unified performance dashboard pulling data from Instagram and YouTube into a single view.",
  //     },
  //     {
  //       title: "AI Content Suggestions",
  //       description:
  //         "Hook recommendations, CTA analysis, and format suggestions based on brand profile and historical performance.",
  //     },
  //     {
  //       title: "Unified Scheduling",
  //       description:
  //         "Cross-platform content calendar with scheduling, queue management, and optimal posting time suggestions.",
  //     },
  //     {
  //       title: "Lead Magnet Analytics",
  //       description:
  //         "Track which content pieces and lead magnets drive the most conversions and audience growth.",
  //     },
  //     {
  //       title: "Brand Profile Engine",
  //       description:
  //         "Define brand voice, topics, and positioning — AI suggestions are tailored to maintain consistency.",
  //     },
  //   ],

  //   techStack: [
  //     "React",
  //     "Node.js",
  //     "MongoDB",
  //     "Python",
  //     "OpenAI API",
  //     "AWS Lambda",
  //     "GitHub",
  //   ],

  //   testimonial: {
  //     quote: `I was literally spending my entire Monday just looking at what other creators posted last week and trying to figure out what worked. Now I open the dashboard Monday morning and it’s all there — what competitors did, what worked for me, what I should try next. My content planning went from a full day to about 2 hours.`,
  //     name: "Content Creator",
  //     role: "Instagram & YouTube, 450K+ Combined Following",
  //   },

  //   beyondNumbers: [
  //     "Creator reports feeling significantly less overwhelmed by the content treadmill",
  //     'Data-backed decisions replaced the anxiety of "am I posting the right thing?"',
  //     "Competitive awareness improved without obsessive manual checking",
  //     "Content quality improved as time shifted from logistics to creativity",
  //     "Brand consistency improved with AI guardrails on voice and positioning",
  //   ],
  // },

  {
    id: 5,
    slug: "xentary-agency-os",

    title: "Xentary — Agency Operating System",
    client: "Custom In-House ERP for Agencies",

    partners: [],
    industry: "Professional Services",
    duration: "3 months + Ongoing",

    comingSoon: true,

    stack: ["React", "Node.js", "MongoDB"],

    /* ---------- detailed page ---------- */

    hero: {
      subtitle: "Custom In-House ERP for Agencies",
      tags: [
        "Xentary — Proprietary Operating Platform",
        "Retention",
        "Intelligence",
      ],
      duration: "Ongoing",
    },
  },

  {
    id: 6,
    slug: "national-aviation-olympiad",

    title: "Unified Olympiad Management System",
    client: "National Aviation Olympiad",

    partners: ["Codeforge"],
    industry: "Education/Events",
    duration: "Ongoing",

    comingSoon: true,

    stack: ["React", "Node.js", "MongoDB"],

    /* ---------- detailed page ---------- */

    hero: {
      subtitle: "National Aviation Olympiad",
      client: "National Aviation Olympiad (NAO)",
      tags: ["CodeForge — Custom Software", "Intelligence"],
      duration: "Ongoing",
    },
  },
];

export const DIGITAL_IDENTITY = [
  {
    title: "Centre for Scientific Research",
    image: "/websites/cso.png",
    href: "https://www.thecso.in/",
    tags: ["NGO", "Donations", "Impact"],
    description:
      "NGO platform with integrated donation processing, sponsor forms, and impact reporting.",
    result:
      "Immediate increase in donations post-launch. Professional presence helped secure government approval for organizational plans.",
  },
  {
    title: "National Aviation Olympiad",
    image: "/websites/nao.png",

    href: "https://nationalaviationolympiad.com/",
    tags: ["Education", "Registration"],
    description:
      "Event information hub with online student registration system and results portal.",
    result:
      "Significant increase in student registrations. Schools found it easier to enroll students, reducing drop-off.",
  },
  {
    title: "Sophos Medical Centre",
    image: "/websites/sophos.png",

    href: "https://sophos-med.ru/",
    tags: ["Healthcare"],
    description:
      "Healthcare provider website with doctor profiles, service pages, and appointment inquiry forms.",
    result:
      "More patient enquiries through the website. Professional digital presence improved trust with new patients.",
  },
  {
    title: "FIRMST Language School",
    image: "/websites/firmst.png",

    href: "https://firmst.org/",
    tags: ["Education"],
    description:
      "Program showcase with course catalog, enrollment CTAs, student testimonials, and multilingual support.",
    result:
      "Higher student registrations from organic search. Multilingual site expanded reach to international students.",
  },
  {
    title: "Sanmas Industries",
    image: "/websites/sanmas.png",

    href: "https://sanmas.com/",
    tags: ["Healthcare"],
    description:
      "Professional corporate presence with service catalog, inquiry generation, and project portfolio.",
    result:
      "More enquiries from professional online presence. Clients reported increased trust before first meeting.",
  },
  {
    title: "Ayushma Yoga",
    image: "/websites/ayushma-yoga.png",

    href: "https://ayushmayoga.ru/",
    tags: ["Wellness"],
    description:
      "Community-focused wellness site with class schedules, instructor profiles, and event registration.",
    result:
      "Growth in community membership. Online class bookings reduced admin phone calls significantly.",
  },
  {
    title: "Akashgati",
    image: "/websites/akashgati.png",

    href: "http://akashgati.org/",
    tags: ["Aviation"],
    description:
      "Foundation website with program information, volunteer sign-up, and organizational credibility.",
    result:
      "Improved organizational credibility with stakeholders and potential partners.",
  },
  {
    title: "Eurasian Federation of Oncology",
    image: "/websites/eafo.png",

    href: "https://eafo.info/",
    tags: ["Non-Profit"],
    description:
      "Institutional platform for oncology professionals, events, and research collaboration.",
    result:
      "Strengthened digital presence across the oncology community. Streamlined event and membership management.",
  },
  // {
  //   title: "Pasovit Technologies",
  //   image: "/websites/pasovit.png",

  //   href: "https://pasovit.com/",
  //   tags: ["Tech", "B2B"],
  //   description:
  //     "Custom software development company website showcasing capabilities, portfolio, and service offerings.",
  //   result:
  //     "Professional positioning that elevated brand perception. Inbound leads increased from organic search.",
  // },
  {
    title: "Vayupath",
    image: "/websites/vayupath.png",

    href: "https://careerinaviation.com/",
    tags: ["Brand", "Corporate"],
    description:
      "Brand and digital presence build with modern design, clear messaging, and conversion-focused layout.",
    result:
      "Clean, high-performance site that established immediate credibility in the market.",
  },
  {
    title: "Saffron Restaurant",
    image: "/websites/saffron.png",

    href: "https://saffronmoscow.ru/",
    tags: ["Restaurant"],
    description:
      "Restaurant website with menu showcase, reservation system, event booking, and brand storytelling for a premium dining experience.",
    result:
      "Increased online reservations through stronger brand positioning in the competitive Moscow dining scene",
  },
];

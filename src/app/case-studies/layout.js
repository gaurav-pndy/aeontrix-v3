export const metadata = {
  title: "Case Studies | Aeontrix",
  description:
    "Explore how Aeontrix helps businesses increase revenue, reduce operational load, and scale efficiently through AI-powered systems, automation, and digital infrastructure.",

  keywords: [
    "AI case studies",
    "business automation case studies",
    "AI transformation examples",
    "automation success stories",
    "AI systems for business",
    "digital transformation case studies",
    "AI growth systems",
    "workflow automation examples",
    "AI implementation results",
    "Aeontrix case studies",
  ],

  openGraph: {
    type: "website",
    url: "https://aeontrix.com/case-studies",
    title: "Case Studies | Aeontrix",
    description:
      "See how Aeontrix delivers measurable results through AI systems—boosting revenue, reducing inefficiencies, and enabling scalable growth.",
    images: [
      {
        url: "/aeontrix-emblem.png",
        width: 1200,
        height: 630,
        alt: "Aeontrix Case Studies",
      },
    ],
    siteName: "Aeontrix",
  },

  twitter: {
    card: "summary_large_image",
    site: "@aeontrix",
    creator: "@aeontrix",
    title: "Case Studies | AI Systems That Drive Real Business Outcomes",
    description:
      "Real-world results from AI systems built by Aeontrix—automation, growth, and scalable infrastructure.",
    images: ["/aeontrix-emblem.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}

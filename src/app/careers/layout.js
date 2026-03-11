export const metadata = {
  title: "Careers at Aeontrix | Join Our Team",
  description:
    "Explore career opportunities at Aeontrix. Join a team building AI-powered growth systems that help businesses scale sales, marketing, and customer support.",

  keywords: [
    "Aeontrix careers",
    "AI jobs",
    "remote AI jobs",
    "AI automation careers",
    "AI engineer jobs",
    "startup careers",
    "remote tech jobs",
    "growth automation jobs",
    "AI startup jobs",
  ],

  openGraph: {
    type: "website",
    url: "https://aeontrix.com/careers",
    title: "Careers at Aeontrix | Join Our Team",
    description:
      "Join Aeontrix and help build the next generation of AI-powered growth systems for modern businesses.",
    images: [
      {
        url: "/aeontrix-emblem.png",
        width: 1200,
        height: 630,
        alt: "Aeontrix Careers",
      },
    ],
    siteName: "Aeontrix",
  },

  twitter: {
    card: "summary_large_image",
    site: "@aeontrix",
    creator: "@aeontrix",
    title: "Careers at Aeontrix | Join Our Team",
    description:
      "We're hiring. Work remotely and help build AI systems that automate sales, marketing, and operations.",
    images: ["/aeontrix-emblem.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersLayout({ children }) {
  return children;
}

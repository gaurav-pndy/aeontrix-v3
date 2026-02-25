import "./globals.css";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

export const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://aeontrix.com"),

  title: "Aeontrix | AI Transformation Partner",
  description:
    "Aeontrix AI helps businesses boost revenue and reduce workload by automating sales, marketing, and customer support with reliable AI systems.",
  keywords: [
    "AI automation",
    "business process automation",
    "AI agents",
    "chatbots",
    "workflow automation",
    "AI integration",
    "n8n vs Zapier",
    "AI transformation",
    "lead generation",
    "customer support automation",
  ],
  authors: [{ name: "Aeontrix" }],
  openGraph: {
    type: "website",
    url: "https://aeontrix.com/",
    title: "Aeontrix | AI Transformation Partner",
    description:
      "Aeontrix AI helps businesses automate sales, marketing, and customer support with reliable AI systems.",
    images: [
      {
        url: "/aeontrix-emblem.png",
        width: 1200,
        height: 630,
        alt: "Aeontrix Logo",
      },
    ],
    siteName: "Aeontrix",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aeontrix",
    creator: "@aeontrix",
    images: ["/aeontrix-emblem.png"],
    title: "Aeontrix | AI Transformation Partner",
    description:
      "Aeontrix AI helps businesses automate sales, marketing, and support with reliable AI systems.",
  },
  icons: {
    icon: "/aeontrix-logo.png",
    apple: "/aeontrix-logo.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${jetbrainsMono.variable} antialiased bg-[#05070a]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepanshu Singh | AI Contact Center Engineer | Amazon Connect | Genesys Cloud",
  description:
    "AI Contact Center Engineer specializing in Amazon Connect, Genesys Cloud CX, Amazon Bedrock, Lex, Lambda, Agentic AI, RAG systems, IVR automation, and enterprise customer experience platforms.",
  keywords: [
    "Amazon Connect", "Genesys Cloud", "AI Contact Center", "Amazon Bedrock",
    "Amazon Lex", "AWS Lambda", "Generative AI", "Agentic AI", "RAG",
    "IVR", "Conversational AI", "Customer Experience", "Cloud Architecture", "Deepanshu Singh",
  ],
  metadataBase: new URL("https://deepanshu-singh.vercel.app"),
  authors: [{ name: "Deepanshu Singh" }],
  openGraph: {
    title: "Deepanshu Singh | AI Contact Center Engineer",
    description: "AI Contact Center Engineer — Amazon Connect, Genesys Cloud CX, Bedrock, Generative AI.",
    url: "https://deepanshu-singh.vercel.app",
    siteName: "Deepanshu Singh Portfolio",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Singh | AI Contact Center Engineer",
    description: "Amazon Connect · Genesys Cloud · Bedrock · GenAI · IVR",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg">{children}</body>
    </html>
  );
}

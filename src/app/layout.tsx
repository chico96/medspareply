import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpaReply | Review Replies + Local SEO Toolkit for Med Spas",
  description:
    "Med-spa review replies your front desk can copy, customize, and post safely. Free browser generator plus a $49 launch toolkit with 20 paste-ready templates, negative-review scripts, and local SEO prompts.",
  keywords: [
    "med spa review replies",
    "aesthetic clinic reputation management",
    "local SEO for med spas",
    "Google review response templates",
    "HIPAA aware review replies",
    "negative review response med spa",
  ],
  openGraph: {
    title: "SpaReply | Review Replies + Local SEO Toolkit for Med Spas",
    description:
      "Free browser-based review reply generator and a $49 launch toolkit: 20 paste-ready templates, negative-review scripts, HIPAA-aware safety checklist, and Google Business Profile prompts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

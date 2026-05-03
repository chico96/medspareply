import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "MedSpaReply | AI Review Replies for Med Spas",
  description:
    "Generate polished med-spa review replies and local SEO content ideas with a private, local-only MVP tool.",
  keywords: [
    "med spa review replies",
    "aesthetic clinic reputation management",
    "local SEO for med spas",
    "Google review response templates",
  ],
  openGraph: {
    title: "MedSpaReply | AI Review Replies for Med Spas",
    description:
      "Premium review replies, safety notes, and local SEO content workflows for aesthetic clinics.",
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
      <body>{children}</body>
    </html>
  );
}

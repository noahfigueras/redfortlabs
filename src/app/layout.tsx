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
  title: "RedFortLabs | AI Agents, Blockchain & Security Research",
  description: "RedFortLabs specializes in cutting-edge AI agents, blockchain technology, and offensive security research. Building unbreakable digital fortresses.",
  keywords: "AI agents, blockchain, security research, red team, offensive security, smart contracts, Web3",
  icons: {
    icon: "/redFort.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

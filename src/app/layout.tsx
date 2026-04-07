import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varun M | Full Stack Developer",
  description: "Portfolio of Varun M - Frontend Developer @NexcellSolutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} text-slate-200 antialiased min-h-screen relative`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
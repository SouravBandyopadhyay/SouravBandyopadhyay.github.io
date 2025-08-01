import "./globals.css";
import type { Metadata } from "next";
import {
  Poppins as FontPoppins,
  Merriweather as FontHeading,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import DockDemo from "./navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

// SEO metadata
const metadata: Metadata = {
  title: "Sourav Bandyopadhyay | Software Developer Portfolio",
  description:
    "Explore the portfolio of Sourav Bandyopadhyay – a passionate software developer specializing in full-stack development, open-source contributions, and building high-performance web applications.",
  keywords: [
    "Sourav Bandyopadhyay",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Open Source Contributor",
    "React Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Sourav Bandyopadhyay" }],
  creator: "Sourav Bandyopadhyay",
  robots: "index, follow",
  themeColor: "#ffffff",
  openGraph: {
    title: "Sourav Bandyopadhyay | Software Developer Portfolio",
    description:
      "Check out the work and projects of Sourav Bandyopadhyay – a full-stack developer who loves clean code and modern tech.",
    url: "https://sourav-bandyopadhyay-github-io.vercel.app/", // Replace with your actual domain
    siteName: "Sourav Bandyopadhyay Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Bandyopadhyay | Software Developer Portfolio",
    description:
      "Full-stack developer passionate about React, Node.js, and building digital products.",
    creator: "@souravb_1998", // optional
  },
};

// Font for body
const fontSans: NextFontWithVariable = FontPoppins({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

// Font for headings
const fontHeading: NextFontWithVariable = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased tracking-tight",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <DockDemo />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

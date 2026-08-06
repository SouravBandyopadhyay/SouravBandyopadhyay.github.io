import "./globals.css";
import type { Metadata, Viewport } from "next";
import {
  Poppins as FontPoppins,
  Merriweather as FontHeading,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import DockDemo from "./navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getSiteUrl } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  authors: [{ name: "Sourav Bandyopadhyay", url: siteUrl }],
  creator: "Sourav Bandyopadhyay",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sourav Bandyopadhyay | Software Developer Portfolio",
    description:
      "Check out the work and projects of Sourav Bandyopadhyay – a full-stack developer who loves clean code and modern tech.",
    url: siteUrl,
    siteName: "Sourav Bandyopadhyay Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile_img.jpg",
        width: 500,
        height: 500,
        alt: "Sourav Bandyopadhyay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Bandyopadhyay | Software Developer Portfolio",
    description:
      "Full-stack developer passionate about React, Node.js, and building digital products.",
    creator: "@souravb_1998",
    images: ["/profile_img.jpg"],
  },
};

const fontSans = FontPoppins({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"],
});

const jsonLdPerson = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Sourav Bandyopadhyay",
  url: siteUrl,
  image: `${siteUrl}/profile_img.jpg`,
  jobTitle: "Software Developer",
  email: "souravb.1998@gmail.com",
  sameAs: [
    "https://github.com/SouravBandyopadhyay",
    "https://www.linkedin.com/in/souravbandyopadhyay/",
    "https://corecraft.substack.com/",
    "https://leetcode.com/u/Sourav_280598/",
    "https://uiverse.io/profile/SouravBandyopadhyay",
  ],
};

const jsonLdWebSite = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Sourav Bandyopadhyay — Portfolio",
  url: siteUrl,
  description:
    "Portfolio of Sourav Bandyopadhyay, full-stack software developer.",
  publisher: { "@id": `${siteUrl}/#person` },
};

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
        <JsonLd data={[jsonLdPerson, jsonLdWebSite]} />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <a
              href="#main-content"
              className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-primary focus:p-4 focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Skip to main content
            </a>
            {children}
            <DockDemo />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

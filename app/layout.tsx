import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Sourav Bandyopadhyay | Full-Stack Software Developer Portfolio",
  description:
    "Portfolio of Sourav Bandyopadhyay, a full-stack software developer based in India building modern web products with React, Next.js, TypeScript, Node.js, and Python.",
  keywords: [
    "Sourav Bandyopadhyay",
    "Software Developer Portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Frontend Developer",
    "Web Developer India",
    "Product Developer Portfolio",
  ],
  authors: [{ name: "Sourav Bandyopadhyay", url: siteUrl }],
  creator: "Sourav Bandyopadhyay",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sourav Bandyopadhyay | Full-Stack Software Developer Portfolio",
    description:
      "Explore the work of Sourav Bandyopadhyay, a software developer creating thoughtful web products and polished user experiences.",
    url: siteUrl,
    siteName: "Sourav Bandyopadhyay Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile_img.jpg",
        width: 500,
        height: 500,
        alt: "Sourav Bandyopadhyay, full-stack software developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Bandyopadhyay | Full-Stack Software Developer Portfolio",
    description:
      "Full-stack software developer focused on React, Next.js, Node.js, and Python products with clear UX and thoughtful engineering.",
    creator: "@souravb_1998",
    images: ["/profile_img.jpg"],
  },
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fontHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
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
          fontHeading.variable,
          fontMono.variable
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

import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import DockDemo from "./navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export const metadata: Metadata = {
  title: "Sourav Bandyopadhyay",
  description: "Portfolio",
};

const fontSans: NextFontWithVariable = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
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

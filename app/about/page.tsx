import type { Metadata } from "next";
import { ABOUT_PARAGRAPHS } from "@/lib/agent-content";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "About | Sourav Bandyopadhyay",
  description:
    "About Sourav Bandyopadhyay, a software developer based in India and an Associate at Bain & Company in Gurugram.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <TextPage eyebrow="About" title="About Sourav Bandyopadhyay" paragraphs={ABOUT_PARAGRAPHS} />
  );
}

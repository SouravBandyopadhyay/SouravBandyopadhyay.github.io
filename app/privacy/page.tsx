import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";
import { PRIVACY_PARAGRAPHS } from "@/lib/agent-content";

export const metadata: Metadata = {
  title: "Privacy | Sourav Bandyopadhyay",
  description:
    "Privacy policy for Sourav Bandyopadhyay's portfolio, including the contact form and Resend email delivery.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <TextPage eyebrow="Privacy" title="Privacy" paragraphs={PRIVACY_PARAGRAPHS} />
  );
}

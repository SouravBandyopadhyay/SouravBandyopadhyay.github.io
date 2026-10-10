import type { Metadata } from "next";
import ContactSection from "@/app/ContactForm";
import { TextPage } from "@/components/text-page";
import { CONTACT_PARAGRAPHS } from "@/lib/agent-content";

export const metadata: Metadata = {
  title: "Contact | Sourav Bandyopadhyay",
  description:
    "Contact Sourav Bandyopadhyay by email at souravb.1998@gmail.com or through the portfolio contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <TextPage
      eyebrow="Contact"
      title="Contact Sourav Bandyopadhyay"
      paragraphs={CONTACT_PARAGRAPHS}
      after={<ContactSection />}
    />
  );
}

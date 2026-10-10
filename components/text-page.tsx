import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";

export function TextPage({
  eyebrow,
  title,
  paragraphs,
  children,
  after,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  children?: ReactNode;
  after?: ReactNode;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-white pb-28">
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="section-shell max-w-3xl space-y-6">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-black/70 hover:text-black"
            prefetch={false}
          >
            ← Portfolio
          </Link>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">
            {title}
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-black/75">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {children}
          </div>
        </div>
      </div>
      {after}
      <SiteFooter />
    </main>
  );
}

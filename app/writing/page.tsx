import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WritingCard } from "@/components/writing-card";
import { getSubstackPosts, SUBSTACK } from "@/lib/substack";

export const metadata: Metadata = {
  title: "Writing | Sourav Bandyopadhyay",
  description:
    "Read thoughtful essays and practical notes on software engineering, product thinking, and building better digital products from Core Craft by Sourav Bandyopadhyay.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing · Core Craft",
    description:
      "Essays and practical notes on building software, improving product thinking, and shipping with clarity.",
    url: "/writing",
    type: "website",
  },
};

export const revalidate = 3600;

export default async function WritingPage() {
  const { posts, error } = await getSubstackPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,_rgba(197,176,244,0.24),_transparent_58%)]" />

      <header className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 md:px-6 md:pb-16 md:pt-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-black/70 transition hover:text-black"
          prefetch={false}
        >
          ← Portfolio
        </Link>

        <div className="mt-12 max-w-3xl space-y-5 md:mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60">
            {SUBSTACK.name}
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-black md:text-6xl lg:text-7xl">
            Writing
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
            Practical essays and notes on software engineering, product thinking, and building better digital experiences — published through Core Craft and synced live from Substack.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={SUBSTACK.subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-primary"
            >
              Subscribe
            </a>
            <a
              href={SUBSTACK.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-secondary"
            >
              Open Substack
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section aria-label="Articles" className="relative mx-auto max-w-6xl px-4 pb-28 md:px-6">
        {error && posts.length === 0 ? (
          <div className="rounded-[1.75rem] border border-black/10 bg-[#f7f7f5] p-10 text-center">
            <p className="text-black/75">Couldn&apos;t load the latest posts right now.</p>
            <a
              href={SUBSTACK.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-black underline-offset-4 hover:underline"
            >
              Read on Substack
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        ) : null}

        {featured ? (
          <div className="mb-8 rounded-[2rem] border border-black/10 bg-[#f4ecd6] p-4 md:mb-10 md:p-6">
            <WritingCard post={featured} featured />
          </div>
        ) : null}

        {rest.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post, index) => (
              <div
                key={post.id}
                className="writing-card-enter"
                style={{ animationDelay: `${Math.min(index * 60, 420)}ms` }}
              >
                <WritingCard post={post} />
              </div>
            ))}
          </div>
        ) : null}

        {posts.length === 0 && !error ? (
          <p className="text-center text-black/70">No posts yet.</p>
        ) : null}
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WritingCard } from "@/components/writing-card";
import { getSubstackPosts, SUBSTACK } from "@/lib/substack";

export const metadata: Metadata = {
  title: "Writing | Sourav Bandyopadhyay",
  description:
    "Essays and technical notes from Core Craft — practical guides on shipping software, by Sourav Bandyopadhyay.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing · Core Craft",
    description: SUBSTACK.description,
    url: "/writing",
    type: "website",
  },
};

export const revalidate = 3600;

export default async function WritingPage() {
  const { posts, error } = await getSubstackPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,_rgba(180,200,220,0.35),_transparent_55%),radial-gradient(ellipse_at_80%_0%,_rgba(210,220,230,0.4),_transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(40,55,75,0.45),_transparent_55%),radial-gradient(ellipse_at_80%_0%,_rgba(30,40,55,0.5),_transparent_45%)]"
      />

      <header className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 md:px-6 md:pb-16 md:pt-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          prefetch={false}
        >
          ← Portfolio
        </Link>

        <div className="mt-12 max-w-3xl space-y-5 md:mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {SUBSTACK.name}
          </p>
          <h1 className="font-heading text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-6xl lg:text-7xl">
            Writing
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-xl">
            {SUBSTACK.description} Synced live from Substack so this page always
            reflects what&apos;s published.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={SUBSTACK.subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Subscribe
            </a>
            <a
              href={SUBSTACK.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-white/70 px-6 text-sm font-medium text-neutral-900 ring-1 ring-black/5 backdrop-blur transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15"
            >
              Open Substack
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section
        aria-label="Articles"
        className="relative mx-auto max-w-6xl px-4 pb-28 md:px-6"
      >
        {error && posts.length === 0 ? (
          <div className="rounded-[1.75rem] bg-white/70 p-10 text-center ring-1 ring-black/[0.04] backdrop-blur dark:bg-white/[0.06] dark:ring-white/10">
            <p className="text-neutral-600 dark:text-neutral-300">
              Couldn&apos;t load the latest posts right now.
            </p>
            <a
              href={SUBSTACK.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
            >
              Read on Substack
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        ) : null}

        {featured ? (
          <div className="mb-8 md:mb-10">
            <WritingCard post={featured} featured />
          </div>
        ) : null}

        {rest.length > 0 ? (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {rest.map((post, index) => (
              <div
                key={post.id}
                className="writing-card-enter mb-6 break-inside-avoid"
                style={{ animationDelay: `${Math.min(index * 60, 420)}ms` }}
              >
                <WritingCard post={post} />
              </div>
            ))}
          </div>
        ) : null}

        {posts.length === 0 && !error ? (
          <p className="text-center text-neutral-500">No posts yet.</p>
        ) : null}
      </section>
    </div>
  );
}

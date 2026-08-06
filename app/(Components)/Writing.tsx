import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  formatPostDate,
  getSubstackPosts,
  SUBSTACK,
} from "@/lib/substack";

export async function WritingSection() {
  const { posts } = await getSubstackPosts();
  const preview = posts.slice(0, 3);

  return (
    <section
      id="writing"
      className="relative w-full overflow-hidden bg-[#f5f5f7] py-16 md:py-24 lg:py-32 dark:bg-[#0b0b0d]"
      aria-labelledby="writing-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(180,200,220,0.35),_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(40,55,75,0.4),_transparent_70%)]"
      />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {SUBSTACK.name}
          </p>
          <h2
            id="writing-heading"
            className="font-heading text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-5xl"
          >
            Writing
          </h2>
          <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-lg">
            Essays and practical notes on shipping software. Browse the latest
            from Core Craft, then open the full writing archive.
          </p>
        </div>

        {preview.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {preview.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white/70 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:bg-white/[0.06] dark:ring-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      unoptimized={post.image.endsWith(".gif")}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-sky-100 dark:from-neutral-800 dark:to-sky-950" />
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                  <time
                    dateTime={post.publishedAt}
                    className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400"
                  >
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <h3 className="font-heading text-lg leading-snug tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-200 md:text-xl">
                    {post.title}
                  </h3>
                  {post.summary ? (
                    <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {post.summary}
                    </p>
                  ) : null}
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-500 dark:text-neutral-400">
            Latest essays will appear here once the feed is available.
          </p>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/writing"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            prefetch={false}
          >
            View all writing
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={SUBSTACK.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white/70 px-8 text-sm font-medium text-neutral-900 ring-1 ring-black/5 backdrop-blur transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15"
          >
            Subscribe on Substack
          </a>
        </div>
      </div>
    </section>
  );
}

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
    <section id="writing" className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32" aria-labelledby="writing-heading">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(197,176,244,0.25),_transparent_70%)]" />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16">
          <p className="eyebrow">{SUBSTACK.name}</p>
          <h2
            id="writing-heading"
            className="text-4xl font-semibold tracking-[-0.03em] text-black md:text-5xl"
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
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f7f7f5] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
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
                    className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/60"
                  >
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <h3 className="text-lg leading-snug tracking-[-0.02em] text-black transition-colors group-hover:text-black/70 md:text-xl">
                    {post.title}
                  </h3>
                  {post.summary ? (
                    <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {post.summary}
                    </p>
                  ) : null}
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-black">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-black/70">
            Latest essays will appear here once the feed is available.
          </p>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/writing"
            className="pill-btn pill-btn-primary"
            prefetch={false}
          >
            View all writing
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={SUBSTACK.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn-secondary"
          >
            Subscribe on Substack
          </a>
        </div>
      </div>
    </section>
  );
}

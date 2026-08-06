import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SubstackPost } from "@/lib/substack";

function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

type WritingCardProps = {
  post: SubstackPost;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function WritingCard({
  post,
  featured = false,
  className,
  style,
}: WritingCardProps) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white/70 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:bg-white/[0.06] dark:ring-white/10 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]",
        featured ? "md:flex-row md:min-h-[22rem]" : "h-full",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-neutral-100 dark:bg-neutral-900",
          featured ? "aspect-[16/10] md:aspect-auto md:w-[52%] md:min-h-[22rem]" : "aspect-[16/10]"
        )}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 52vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            unoptimized={post.image.endsWith(".gif")}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-100 to-sky-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-sky-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col justify-between gap-5 p-6 md:p-8",
          featured && "md:w-[48%] md:justify-center md:p-10"
        )}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            <span>Core Craft</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
          </div>
          <h2
            className={cn(
              "font-heading tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-200",
              featured
                ? "text-3xl leading-[1.15] md:text-4xl"
                : "text-xl leading-snug md:text-2xl"
            )}
          >
            {post.title}
          </h2>
          {post.summary ? (
            <p
              className={cn(
                "text-neutral-500 dark:text-neutral-400",
                featured
                  ? "text-base leading-relaxed md:text-lg line-clamp-3"
                  : "text-sm leading-relaxed line-clamp-2"
              )}
            >
              {post.summary}
            </p>
          ) : null}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white">
          <span>Read on Substack</span>
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}

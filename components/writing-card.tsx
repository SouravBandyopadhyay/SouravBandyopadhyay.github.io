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
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]",
        featured ? "md:flex-row md:min-h-[22rem]" : "",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-[#f7f7f5]",
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#f4ecd6] via-[#f7f7f5] to-[#dceeb1]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col justify-between gap-5 p-6 md:p-8",
          featured && "md:w-[48%] md:justify-center md:p-10"
        )}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-black/60">
            <span>Core Craft</span>
            <span className="h-1 w-1 rounded-full bg-black/30" />
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
          </div>
          <h2
            className={cn(
              "tracking-[-0.02em] text-black transition-colors group-hover:text-black/70",
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
                "text-black/70",
                featured
                  ? "text-base leading-relaxed md:text-lg line-clamp-3"
                  : "text-sm leading-relaxed line-clamp-2"
              )}
            >
              {post.summary}
            </p>
          ) : null}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <span>Read on Substack</span>
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}

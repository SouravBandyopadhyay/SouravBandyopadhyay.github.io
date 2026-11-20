import Link from "next/link";
import {
  ArrowUpRight,
  CloudCog,
  DatabaseZap,
  ShieldCheck,
} from "lucide-react";

const stories = [
  {
    id: "llm-reliability",
    eyebrow: "LLM delivery",
    title: "Keeping AI services dependable as requirements changed",
    summary:
      "Building scalable services for LLM projects meant balancing model behavior, API boundaries, latency, and stakeholder expectations.",
    action: "Structured the implementation around clear service boundaries and tested integrations before they reached production.",
    icon: ShieldCheck,
    tone: "bg-[#f4ecd6]",
  },
  {
    id: "cloud-hosting",
    eyebrow: "Cloud operations",
    title: "Making deployments repeatable and easier to recover",
    summary:
      "Managing cloud-hosted applications on AWS ECS required attention to reliability, hosting workflows, and operational consistency.",
    action: "Improved deployment discipline and worked across implementation and infrastructure instead of treating release as a final handoff.",
    icon: CloudCog,
    tone: "bg-[#dceeb1]",
  },
  {
    id: "data-confidence",
    eyebrow: "Data product",
    title: "Turning unreliable raw data into a usable workflow",
    summary:
      "Customer teams needed more than cleaned files: they needed clear data, plain-language questions, and insights that could be shared.",
    action:
      "Connected cleaning, transformation, data chat, and presentation workflows so the final experience focused on understanding—not just processing.",
    icon: DatabaseZap,
    tone: "bg-[#c5b0f4]",
  },
];

export function ProductionIncidents() {
  return (
    <section
      id="production-incidents"
      className="w-full bg-white py-16 text-black md:py-24 lg:py-32"
      aria-labelledby="incidents-heading"
    >
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <div className="max-w-3xl space-y-5 text-center">
          <p className="eyebrow">Production under pressure</p>
          <h2
            id="incidents-heading"
            className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
          >
            I build for the moment when real users depend on the system.
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            Not every challenge becomes visible in a project screenshot.
            These are the kinds of operational, delivery, and reliability
            problems I have been trusted to help solve.
          </p>
        </div>

        <div className="mt-12 grid w-full max-w-6xl gap-5 lg:grid-cols-3">
          {stories.map((story) => {
            const Icon = story.icon;

            return (
              <article
                key={story.id}
                className="group flex min-h-[27rem] flex-col rounded-[2rem] border border-black/10 bg-[#f7f7f5] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-black ${story.tone}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55">
                    Production
                  </span>
                </div>

                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/45">
                  {story.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em]">
                  {story.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-black/65">
                  {story.summary}
                </p>
                <p className="mt-5 border-t border-black/10 pt-5 text-sm leading-relaxed text-black/75">
                  <span className="font-semibold text-black">My focus:</span>{" "}
                  {story.action}
                </p>

                <Link
                  href={`/production-incidents#${story.id}`}
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-black"
                >
                  Read the story
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        <Link
          href="/production-incidents"
          className="pill-btn mt-10 bg-white text-black hover:bg-[#dceeb1]"
        >
          Explore all production stories
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

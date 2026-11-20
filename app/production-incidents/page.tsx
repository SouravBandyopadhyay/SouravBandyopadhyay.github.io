import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CloudCog,
  DatabaseZap,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Production Stories | Sourav Bandyopadhyay",
  description:
    "Production engineering stories covering LLM services, AWS ECS deployments, and data product delivery.",
  alternates: { canonical: "/production-incidents" },
};

const stories = [
  {
    id: "llm-reliability",
    index: "01",
    icon: ShieldCheck,
    eyebrow: "LLM delivery",
    title: "Keeping AI services dependable as requirements changed",
    situation:
      "LLM projects involve more than a model call. They combine service boundaries, third-party integrations, latency, data handling, testing, and user expectations that can change quickly.",
    responsibility:
      "I helped lead development of scalable LLM services with LangChain, FastAPI, and Next.js, carrying work from technical investigation into a usable implementation.",
    action:
      "I focused on making the system understandable and maintainable: clear API boundaries, tested integrations, practical engineering tradeoffs, and close collaboration with stakeholders.",
    learning:
      "A successful AI feature is not only technically interesting. It must be observable, maintainable, and aligned with the workflow around it.",
  },
  {
    id: "cloud-hosting",
    index: "02",
    icon: CloudCog,
    eyebrow: "Cloud operations",
    title: "Making deployments repeatable and easier to recover",
    situation:
      "Cloud-hosted applications need to remain usable beyond the first successful deployment. Hosting, release workflow, configuration, and recovery all affect the team's confidence.",
    responsibility:
      "I managed application hosting and deployment workflows on AWS ECS and worked across the boundary between implementation and production operations.",
    action:
      "I approached deployment as part of the product rather than as an end-of-project task, with attention to repeatability, operational consistency, and faster response when the system needed help.",
    learning:
      "Reliable delivery improves when developers understand the runtime. The implementation and the deployment workflow should support each other.",
  },
  {
    id: "data-confidence",
    index: "03",
    icon: DatabaseZap,
    eyebrow: "Data product",
    title: "Turning unreliable raw data into a usable workflow",
    situation:
      "Teams working with unfamiliar data need to trust what they see. Cleaning a file is not enough if users still cannot understand, question, or share the resulting information.",
    responsibility:
      "I contributed to shaping a workflow that combined data cleaning, transformation, plain-language chat, and downloadable presentations for customer teams.",
    action:
      "I kept the end use in view: connect data preparation to real questions, clear explanations, and an artifact stakeholders could immediately take into a presentation.",
    learning:
      "The most useful system is often the one that bridges technical capability and human understanding. A strong user journey can be as important as the underlying model.",
  },
];

export default function ProductionIncidentsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f7f7f5] pb-28">
      <header className="mx-auto max-w-6xl px-4 pb-14 pt-8 md:px-6 md:pb-20 md:pt-12">
        <Link
          href="/#production-incidents"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/65 transition hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Portfolio
        </Link>

        <div className="mt-14 max-w-4xl space-y-6 md:mt-20">
          <p className="eyebrow">Production stories</p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-black md:text-7xl">
            Judgment becomes visible when systems meet reality.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-black/65 md:text-xl">
            A closer look at how I approach reliability, complex requirements,
            operational ownership, and the work between implementation and
            production.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        {stories.map((story) => {
          const Icon = story.icon;

          return (
            <article
              key={story.id}
              id={story.id}
              className="scroll-mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-white"
            >
              <div className="grid lg:grid-cols-[0.35fr_0.65fr]">
                <div className="flex flex-col justify-between border-b border-black/10 bg-[#f4ecd6] p-7 md:p-10 lg:border-b-0 lg:border-r">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-black/35">
                      {story.index}
                    </span>
                  </div>
                  <div className="mt-16">
                    <p className="eyebrow">{story.eyebrow}</p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                      {story.title}
                    </h2>
                  </div>
                </div>

                <div className="grid gap-8 p-7 md:p-10">
                  {[
                    ["The situation", story.situation],
                    ["My responsibility", story.responsibility],
                    ["How I approached it", story.action],
                  ].map(([label, text]) => (
                    <section key={label}>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                        {label}
                      </h3>
                      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-black/70">
                        {text}
                      </p>
                    </section>
                  ))}

                  <aside className="rounded-[1.5rem] bg-[#dceeb1] p-6 md:p-7">
                    <div className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold">What stayed with me</h3>
                        <p className="mt-2 leading-relaxed text-black/70">
                          {story.learning}
                        </p>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </article>
          );
        })}

        <section className="rounded-[2rem] bg-black p-8 text-white md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-white/50">The pattern</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Understand the system. Protect the outcome. Leave it better.
              </h2>
            </div>
            <Link
              href="/#why-hire-me"
              className="pill-btn shrink-0 bg-white text-black hover:bg-[#dceeb1]"
            >
              Why hire me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

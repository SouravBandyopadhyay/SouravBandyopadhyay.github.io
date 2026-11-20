import Link from "next/link";
import { ArrowRight, Layers3, MessagesSquare, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Layers3,
    title: "I understand the whole problem",
    description:
      "I move across UI, APIs, data, infrastructure, and product requirements—then connect the implementation to the outcome it must create.",
  },
  {
    icon: Rocket,
    title: "I can carry work to production",
    description:
      "I am comfortable with both the ambiguity of a prototype and the discipline of repeatable releases, dependable systems, and maintenance.",
  },
  {
    icon: MessagesSquare,
    title: "I improve how the team moves",
    description:
      "I mentor through code reviews, communicate with stakeholders, resolve blockers, and keep engineering decisions tied to practical goals.",
  },
];

export function WhyHireMe() {
  return (
    <section
      id="why-hire-me"
      className="w-full bg-[#f7f7f5] py-16 md:py-24 lg:py-32"
      aria-labelledby="hire-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-8">
            <p className="eyebrow">Why hire me</p>
            <h2
              id="hire-heading"
              className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl"
            >
              A dependable engineer who reduces uncertainty.
            </h2>
            <p className="text-lg leading-relaxed text-black/70">
              You get more than someone who can implement a feature. You get
              a product-minded engineer who asks the right questions, owns the
              details, and helps the team ship with confidence.
            </p>

            <Link
              href="#contact"
              className="pill-btn pill-btn-primary"
              prefetch={false}
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 sm:grid-cols-[auto_1fr] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4ecd6]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em]">
                      {reason.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-black/65">
                      {reason.description}
                    </p>
                  </div>
                </article>
              );
            })}

            <aside className="rounded-[1.75rem] bg-[#c5b0f4] p-6 sm:p-8">
              <p className="eyebrow">The strongest signal</p>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.025em]">
                I care about the whole experience—from the first question to
                the systems that keep working after launch.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

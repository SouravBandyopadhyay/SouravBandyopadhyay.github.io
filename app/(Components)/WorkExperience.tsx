"use client";

import { useState } from "react";

const roles = [
  {
    id: "lead",
    title: "Associate Team Lead",
    period: "Apr 2026 - Present",
    summary:
      "Leading delivery across product and engineering efforts while mentoring developers and keeping execution aligned with client goals.",
    bullets: [
      "Played a pivotal role in delivering scalable software solutions while guiding cross-functional teams through delivery and technical decision-making.",
      "Analyzed client requirements closely to shape solutions that were practical, reliable, and aligned with business objectives.",
      "Mentored developers through code reviews and collaboration, helping raise engineering standards and team consistency.",
      "Tracked progress and resolved blockers to keep projects moving smoothly and maintain strong delivery discipline.",
    ],
  },
  {
    id: "developer",
    title: "Software Developer",
    period: "Jun 2024 - May 2026",
    summary:
      "Built end-to-end solutions across frontend, backend, and cloud infrastructure for client-facing and internal products.",
    bullets: [
      "Spearheaded client-specific R&D tasks and delivered full-stack solutions spanning product, API layers, and deployment workflows.",
      "Led the development of scalable services for LLM projects using LangChain, FastAPI, and Next.js.",
      "Managed cloud application hosting and deployment on AWS ECS, improving reliability and operational efficiency.",
      "Worked closely with stakeholders to turn requirements into robust technical implementations and polished user experiences.",
    ],
  },
  {
    id: "associate",
    title: "Associate Software Developer",
    period: "Apr 2023 - Jun 2024",
    summary:
      "Started by building prototypes, web applications, and proof-of-concepts for both internal and client work.",
    bullets: [
      "Collaborated with a global team to solve technical problems and contribute to project success across multiple initiatives.",
      "Developed web applications from prototyping through design implementation for both internal products and client-facing work.",
      "Built proof-of-concepts and microservices with an emphasis on compatibility, performance, and maintainability.",
      "Gained strong grounding in modern web development while contributing to fast-moving delivery cycles.",
    ],
  },
];

export default function WorkExperienceSection() {
  const [activeRole, setActiveRole] = useState(roles[0].id);
  const activeRoleData = roles.find((role) => role.id === activeRole) ?? roles[0];

  return (
    <section id="work-experience" className="w-full bg-[#f7f7f5] py-12 md:py-24 lg:py-32" aria-labelledby="work-heading">
      <div className="container flex flex-col gap-8 px-4 md:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Experience</p>
          <h2 id="work-heading" className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Building products with a steady hand from prototype to production.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-black/70">
            A closer look at the roles that shaped my approach to building thoughtful software and leading with care.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">Detroit Software Consultant India Pvt Ltd.</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-black/60">Gurugram, Haryana, India · On-site</p>
            </div>
            <div className="rounded-full border border-black/10 bg-[#f7f7f5] px-3 py-1 text-sm font-medium text-black/75">
              Full-time · 3 yrs 5 mos
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {roles.map((role) => {
              const isActive = role.id === activeRole;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setActiveRole(role.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "border border-black/10 bg-white text-black/75 hover:bg-[#f7f7f5]"
                  }`}
                >
                  {role.title}
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-[#f7f7f5] p-6 sm:p-8">
            <div className="flex flex-col gap-3 border-b border-black/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-black">{activeRoleData.title}</p>
                <p className="mt-1 text-base text-black/70">{activeRoleData.summary}</p>
              </div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-black/60">{activeRoleData.period}</span>
            </div>

            <ul className="mt-6 space-y-3 text-lg leading-relaxed text-black/75">
              {activeRoleData.bullets.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

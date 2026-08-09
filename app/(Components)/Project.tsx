import React from "react";
import { Globe, Github, Star, ArrowUpRight, Zap } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-[#f7f7f5] py-16 md:py-24 lg:py-32" aria-labelledby="projects-heading">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-12 px-4 md:px-6">
        <div className="max-w-3xl space-y-6 text-center">
          <p className="eyebrow">Featured Work</p>
          <h2 id="projects-heading" className="text-4xl font-semibold tracking-[-0.03em] text-black md:text-5xl">
            Selected work shaped by clarity, craft, and product thinking.
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            A mix of production applications, thoughtful tooling, and experiments that reflect how I build and ship.
          </p>
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured Production Apps */}
          <ProjectCard
            title="Link-Trim"
            description="A production-ready URL shortener with analytics dashboard, custom domains, and enterprise-grade performance."
            techStack={["NextJS", "Prisma", "MongoDB", "Analytics"]}
            imageSrc={"/link-trim.jpeg"}
            liveDemoLink="https://link-trim.in"
            repoLink="#"
            featured={true}
            status="Production"
            category="URL Shortener"
          />
          <ProjectCard
            title="Personacraft"
            description="A platform for creating personalized AI personas with advanced customization and analytics."
            techStack={[
              "NextJS",
              "Prisma",
              "Upstash Redis",
              "Razorpay",
              "Google Analytics",
              "Claude AI",
            ]}
            imageSrc={"/personacraft.jpeg"}
            liveDemoLink="https://personacraft.app"
            repoLink="#"
            featured={true}
            status="Production"
            category="AI Platform"
          />

          <ProjectCard
            title="TheMealHub"
            description="A comprehensive online food recipe platform with advanced search, meal planning, and user-generated content management."
            techStack={["React", "Chakra UI", "REST API"]}
            imageSrc={"/TheMealHub.jpeg"}
            liveDemoLink="https://superlative-tapioca-85f901.netlify.app/"
            repoLink="https://github.com/SouravBandyopadhyay/TheMealHub"
            featured={false}
            status="Live"
            category="Web Application"
          />

          {/* Supporting Projects */}

          <ProjectCard
            title="Next-Auth-Role-Based"
            description="Secure authentication system with role-based access control and OAuth integration for modern web applications."
            techStack={["NextJS", "Next-Auth", "TailWind CSS"]}
            imageSrc={"/next-auth.jpeg"}
            liveDemoLink="https://next-role-based-auth-one.vercel.app/"
            repoLink="https://github.com/SouravBandyopadhyay/next-role-based-auth"
            status="Demo"
            category="Authentication"
          />

          <ProjectCard
            title="CodeQuest"
            description="Comprehensive technical interview preparation platform with curated questions and detailed solutions."
            techStack={["VitePress", "CSS", "MarkDown"]}
            imageSrc={"/code-quest.jpeg"}
            liveDemoLink="https://code-quest-dev.vercel.app/"
            repoLink="https://github.com/SouravBandyopadhyay/codeQuest.dev"
            status="Live"
            category="Documentation Platform"
          />
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  liveDemoLink: string;
  repoLink: string;
  featured?: boolean;
  status?: string;
  category?: string;
}

function ProjectCard({
  title,
  description,
  techStack,
  imageSrc,
  liveDemoLink,
  repoLink,
  featured = false,
  status,
  category,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${
        featured ? "bg-[#f4ecd6]" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            <Star className="mr-1 inline h-3 w-3" />
            Featured
          </div>
        </div>
      )}

      <div className="relative overflow-hidden">
        <div
          className="h-56 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {status && (
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                status === "Production"
                  ? "bg-black text-white"
                  : status === "Live"
                  ? "bg-[#dceeb1] text-black"
                  : "bg-[#c5b0f4] text-black"
              }`}
            >
              {status}
            </span>
          )}
          {category && (
            <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-black/80 backdrop-blur">
              {category}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-black transition-colors duration-200 group-hover:text-black/70">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-black/70">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-black/10 bg-[#f7f7f5] px-3 py-1 text-xs font-semibold text-black/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
          <a
            href={liveDemoLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors duration-200 hover:text-black/70 group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-4 w-4" />
            Live Demo
            <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          {repoLink !== "#" && (
            <a
              href={repoLink}
              className="inline-flex items-center gap-2 text-sm font-medium text-black/70 transition-colors duration-200 hover:text-black group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Repository
              <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Globe, Github, Star, ArrowUpRight, Zap } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-12">
        <div className="space-y-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A showcase of production-ready applications and innovative solutions
            that demonstrate my expertise in full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
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
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${
        featured ? "ring-2 ring-blue-200" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            <Star className="inline h-3 w-3 mr-1" />
            Featured
          </div>
        </div>
      )}

      <div className="relative overflow-hidden">
        <div
          className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>

        <div className="absolute top-4 left-4 flex gap-2">
          {status && (
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                status === "Production"
                  ? "bg-green-100 text-green-700"
                  : status === "Live"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {status}
            </span>
          )}
          {category && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <a
              href={liveDemoLink}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group/link"
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
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200 group/link"
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
    </div>
  );
}

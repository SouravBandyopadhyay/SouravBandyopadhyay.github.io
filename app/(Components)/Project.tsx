import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">My Projects</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Here are a few of my best projects that showcase my skills and
            experience as a software developer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="TheMealHub"
            description="TheMealHub is an Online Food Recipe website where you can search your favorite food according to your taste."
            techStack={["React", "Chakra UI"]}
            imageSrc={"/TheMealHub.jpeg"}
            liveDemoLink="https://superlative-tapioca-85f901.netlify.app/"
            repoLink="https://github.com/SouravBandyopadhyay/TheMealHub"
          />
          <ProjectCard
            title="Next-Auth-Role-Based"
            description="Role Based Authentication in NextJS with OAuth Support"
            techStack={["NextJS", "Next-Auth", "TailWind CSS"]}
            imageSrc={"/TheMealHub.jpeg"}
            liveDemoLink="https://next-role-based-auth-one.vercel.app/"
            repoLink="https://github.com/SouravBandyopadhyay/next-role-based-auth"
          />
          <ProjectCard
            title="CodeQuest"
            description="Technical Interview guide comprehensive preparation."
            techStack={["VitePress", "CSS", "MarkDown"]}
            imageSrc={"/TheMealHub.jpeg"}
            liveDemoLink="https://code-quest-dev.vercel.app/"
            repoLink="https://github.com/SouravBandyopadhyay/codeQuest.dev"
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
}

function ProjectCard({
  title,
  description,
  techStack,
  imageSrc,
  liveDemoLink,
  repoLink,
}: ProjectCardProps) {
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <Image
            src={imageSrc}
            alt={`${title} project image`}
            width={500}
            height={300}
            className="rounded-md"
          />
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Link
              href={liveDemoLink}
              className="flex items-center text-blue-600 hover:underline"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbWorld className="h-5 w-5 mr-1" />
              Live Demo
            </Link>
            <Link
              href={repoLink}
              className="flex items-center text-blue-600 hover:underline"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5 mr-1" />
              GitHub Repository
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

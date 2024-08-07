import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import BlurFade from "@/components/magicui/blur-fade";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Portfolio() {
  return (<>

    <HeroSection />
    <AboutSection />
    <WorkExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />


  </>
  );
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe]">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">

        <BlurFade delay={0.25} inView>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground">
            Hi, I am Sourav Bandyopadhyay
          </h1>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <p className="max-w-[700px] text-lg text-primary-foreground">
            As a software developer, I'm excited to showcase my skills, projects,
            and journey in the tech industry.
          </p>
        </BlurFade >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Resume
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          <p className="text-muted-foreground">
            As a software developer with one year of experience, I have a strong
            passion for creating innovative and user-friendly applications. My
            journey in the tech industry began with development skills through
            Masai School, where I honed my skills in programming,
            problem-solving, and project management.
          </p>
          <p className="text-muted-foreground">
            Throughout my career, I have had the opportunity to work on a
            variety of projects, ranging from web applications to mobile apps. I
            am proficient in languages such as JavaScript and Python , and I am
            always eager to learn new technologies and frameworks to stay
            up-to-date with the latest industry trends.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <SkillCard title="Languages" skills="JavaScript, Python, Java" />
            <SkillCard title="Frameworks" skills="React, Node.js, Django" />
            <SkillCard title="Tools" skills="Git, GitHub, VS Code" />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/placeholder.svg"
            width="500"
            height="500"
            alt="About"
            className="mx-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="bg-muted rounded-lg p-4 text-center">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{skills}</p>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 ">
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
            imageSrc={'/TheMealHub.jpeg'}
            liveDemoLink="https://superlative-tapioca-85f901.netlify.app/"
            repoLink="https://github.com/SouravBandyopadhyay/TheMealHub"
          />

        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, techStack, imageSrc, liveDemoLink, repoLink }) {
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      <CardHeader >
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

function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
        <p className="max-w-[700px] text-muted-foreground">
          If you'd like to work together or have any questions, feel free to
          reach out to me using the contact form below.
        </p>
        <form className="w-full max-w-lg space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            className="w-full border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="w-full border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
          <Textarea
            placeholder="Your Message"
            className="w-full border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rows={5}
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-6 bg-primary">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-primary-foreground">
          &copy; 2024 Sourav Bandyopadhyay. All rights reserved.
        </p>
        <nav className="space-x-4">
          <Link
            href="#"
            className="text-sm text-primary-foreground hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-primary-foreground hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}


function WorkExperienceSection() {
  return (
    <section id="work-experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Here is an overview of my professional journey, highlighting the key roles and responsibilities I've undertaken.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <WorkExperienceItem
            companyName="Detroit Software Consultant India Pvt Ltd."
            position="Software Developer"
            period="April 2023 - Present"
            responsibilities={[
              "Developing and maintaining web applications using React and Node.js.",
              "Collaborating with cross-functional around the globe on day-to-day teams to define, design, and ship new features.",
              "Implementing responsive UI/UX designs and ensuring optimal performance.",
              "Responsible for building POCs and microservices for clients and internal use",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function WorkExperienceItem({ companyName, position, period, responsibilities }) {
  return (
    <div className="space-y-2">
      <h3 className="text-2xl font-semibold">{companyName}</h3>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
        <span>{position}</span>
        <span>{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}




export function BlurFadeTextDemo() {
  return (
    <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hello World 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          Nice to meet you
        </span>
      </BlurFade>
    </section>
  );
}

import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import WorkExperienceSection from "./(Components)/WorkExperience";
import { Skills } from "./(Components)/Skills";
import ProjectsSection from "./(Components)/Project";

const ContactSection = dynamic(() => import("./ContactForm"), {
  loading: () => (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32"
      aria-busy="true"
      aria-label="Loading contact form"
    >
      <div className="container flex flex-col items-center justify-center space-y-6 px-4 md:px-6">
        <div className="h-10 w-48 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-full max-w-lg animate-pulse rounded bg-muted" />
        <div className="h-40 w-full max-w-lg animate-pulse rounded-lg bg-muted" />
      </div>
    </section>
  ),
});

function HeroSection() {
  return (
    <section
      id="top"
      className="w-full bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] py-12 md:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="container flex flex-col items-center justify-center space-y-6 px-4 text-center md:px-6">
        <h1
          id="hero-heading"
          className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl"
        >
          Hi, I am Sourav Bandyopadhyay
        </h1>

        <p className="max-w-[700px] text-lg text-primary-foreground">
          Full-stack software developer (React, Next.js, Node.js, Python). Based
          in India; open to remote roles. I build fast, accessible web apps and
          care about clear UX and maintainable code.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Resume
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        <div className="flex-1 space-y-4">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tighter"
          >
            About Me
          </h2>
          <p className="text-sm font-medium text-muted-foreground">
            Software Developer at Detroit Software Consultant India · 2+ years
            shipping React/Node products · JavaScript, TypeScript, Python
          </p>
          <p className="text-lg text-muted-foreground">
            I have a strong passion for creating innovative and user-friendly
            applications. My journey in tech began at Masai School, where I built
            a foundation in programming, problem-solving, and project management.
          </p>
          <p className="text-lg text-muted-foreground">
            I have worked on web and mobile-oriented stacks, from REST APIs to
            full-stack Next.js apps. I stay current with modern frameworks and
            enjoy turning ambiguous requirements into shippable software.
          </p>
        </div>
        <Image
          src="/profile_img.jpg"
          width={500}
          height={500}
          alt="Sourav Bandyopadhyay, software developer"
          priority
          sizes="(max-width: 768px) 100vw, 384px"
          className="mx-auto h-80 w-80 rounded-full object-cover md:h-96 md:w-96"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-primary py-6">
      <div className="container flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0 md:px-6">
        <p className="text-sm text-primary-foreground">
          &copy; {new Date().getFullYear()} Sourav Bandyopadhyay. All rights
          reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/writing"
            className="text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Writing
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

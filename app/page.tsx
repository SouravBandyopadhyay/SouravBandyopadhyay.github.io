import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WorkExperienceSection from "./(Components)/WorkExperience";
import { Skills } from "./(Components)/Skills";
import ProjectsSection from "./(Components)/Project";
import { WritingSection } from "./(Components)/Writing";

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
    <section id="top" className="w-full bg-white py-12 md:py-24 lg:py-32" aria-labelledby="hero-heading">
      <div className="container flex flex-col gap-8 px-4 md:px-6">
        <div className="section-shell space-y-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <p className="eyebrow">Software Developer • India</p>
              <h1
                id="hero-heading"
                className="text-5xl font-semibold tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl"
              >
                I design and build full-stack web experiences that feel clear, fast, and genuinely useful.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-black/70 sm:text-xl">
                I’m a software developer based in India focused on React, Next.js, TypeScript, Node.js, and Python, building refined products with thoughtful UX and dependable engineering.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view"
                  className="pill-btn pill-btn-primary"
                  prefetch={false}
                >
                  Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="#contact" className="pill-btn pill-btn-secondary" prefetch={false}>
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-[#f4ecd6] p-6 sm:max-w-sm">
              <p className="eyebrow">Currently</p>
              <p className="mt-3 text-xl font-semibold leading-tight text-black">
                Shipping polished web apps and design systems that balance product thinking, performance, and craft.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Design systems'].map((item) => (
              <span key={item} className="rounded-full border border-black/10 bg-[#f7f7f5] px-3 py-2 text-sm font-medium text-black/80">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="color-block color-block-lime">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-4">
              <p className="eyebrow">What I care about</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Clear product thinking, strong frontend craft, and reliable implementation.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-black/75">
              I enjoy turning ideas into dependable interfaces, from fast prototypes to production-ready systems that feel polished, intuitive, and easy to maintain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-12 md:py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-shell space-y-6">
          <p className="eyebrow">About</p>
          <h2 id="about-heading" className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Context, craft, and care for product quality.
          </h2>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/60">
            Software Developer at Detroit Software Consultant India · 3+ years building React and Node.js products · JavaScript, TypeScript, Python
          </p>
          <p className="text-lg leading-relaxed text-black/75">
            I’m a developer who cares deeply about creating useful, well-crafted digital experiences. My journey started with a strong foundation in programming and problem-solving at Masai School, and it has grown into a focus on building thoughtful web experiences at scale.
          </p>
          <p className="text-lg leading-relaxed text-black/75">
            I work across frontend and backend systems, from REST APIs and data models to full-stack Next.js applications, translating complex requirements into dependable software that feels clear and pleasant to use.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f7f5] p-3">
            <Image
              src="/profile_img.jpg"
              width={500}
              height={500}
              alt="Sourav Bandyopadhyay, software developer"
              priority
              sizes="(max-width: 768px) 100vw, 384px"
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="color-block color-block-lilac">
            <p className="eyebrow">Focus</p>
            <p className="mt-3 text-xl font-semibold leading-tight">
              I care about the whole experience — from architecture to micro-interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-black/70">
          &copy; {new Date().getFullYear()} Sourav Bandyopadhyay. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-black/70">
          <Link href="/writing" className="underline-offset-4 hover:underline" prefetch={false}>
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
      <WritingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

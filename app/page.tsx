import Link from "next/link";

import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { IoLogoDocker } from "react-icons/io5";
import { SiFastapi, SiDjango, SiNextdotjs } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import ContactSection from "./ContactForm";
import WorkExperienceSection from "./(Components)/WorkExperience";
import { Skills } from "./(Components)/Skills";
import ProjectsSection from "./(Components)/Project";

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe]">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground">
          Hi, I am Sourav Bandyopadhyay
        </h1>

        <p className="max-w-[700px] text-lg text-primary-foreground">
          As a software developer, I&apos;m excited to showcase my skills,
          projects, and journey in the tech industry.
        </p>

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
          <p className="text-lg text-muted-foreground">
            As a Software Developer with One Year plus of experience, I have a
            strong passion for creating innovative and user-friendly
            applications. My journey in the tech industry began with development
            skills through Masai School, where I honed my skills in programming,
            problem-solving, and project management.
          </p>
          <p className="text-lg text-muted-foreground">
            Throughout my career, I have had the opportunity to work on a
            variety of projects, ranging from web applications to mobile apps. I
            am proficient in languages such as JavaScript and Python , and I am
            always eager to learn new technologies and frameworks to stay
            up-to-date with the latest industry trends.
          </p>
        </div>
        <Image
          src="./profile_img.jpg"
          width="500"
          height="500"
          alt="profile_image"
          loading="lazy"
          className="mx-auto rounded-full w-96 h-96 object-cover"
        />
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

export default function Portfolio() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

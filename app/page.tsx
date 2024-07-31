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
import DockDemo from './lol';

export default function Portfolio() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <DockDemo/>
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection/>
      <ProjectsSection />
      <ResumeSection />
      <ProfilesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe]">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground">
          Hi, I am Sourav Bandyopadhyay
        </h1>
        <p className="max-w-[700px] text-lg text-primary-foreground">
          As a software developer, I'm excited to showcase my skills, projects,
          and journey in the tech industry.
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
            title="Project 1"
            description="A web application that helps users manage their daily tasks and to-do lists."
            tech="React, Node.js, MongoDB"
            liveDemoLink="#"
            repoLink="#"
          />
          <ProjectCard
            title="Project 2"
            description="A mobile app that helps users track their fitness goals and activities."
            tech="React Native, Firebase"
            liveDemoLink="#"
            repoLink="#"
          />
          <ProjectCard
            title="Project 3"
            description="A web application that allows users to search and book vacation rentals."
            tech="React, Node.js, PostgreSQL"
            liveDemoLink="#"
            repoLink="#"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, liveDemoLink, repoLink }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {/* <CodeIcon className="w-5 h-5 text-muted-foreground" /> */}
            <span className="text-muted-foreground">{tech}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* <LinkIcon className="w-5 h-5 text-muted-foreground" /> */}
            <Link
              href={liveDemoLink}
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Live Demo
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {/* <GitlabIcon className="w-5 h-5 text-muted-foreground" /> */}
            <Link
              href={repoLink}
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              GitHub Repository
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ResumeSection() {
  return (
    <section id="resume" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">My Resume</h2>
        <p className="max-w-[700px] text-muted-foreground">
          You can download my resume to learn more about my professional
          experience and qualifications.
        </p>
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Download Resume
        </Link>
      </div>
    </section>
  );
}

function ProfilesSection() {
  return (
    <section id="profiles" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">My Profiles</h2>
        <p className="max-w-[700px] text-muted-foreground">
          Check out my profiles on Leetcode, Hashnode, and other coding
          platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileCard
            title="Leetcode"
            description="View my Leetcode profile and coding solutions."
            link="#"
          />
          <ProfileCard
            title="Hashnode"
            description="Read my blog posts and articles on Hashnode."
            link="#"
          />
          <ProfileCard
            title="LinkedIn"
            description="Connect with me on LinkedIn and view my professional profile."
            link="#"
          />
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ title, description, link }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={link}
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Visit Profile
        </Link>
      </CardContent>
    </Card>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
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
            companyName="Tech Innovators Inc."
            position="Software Developer"
            period="Jan 2022 - Present"
            responsibilities={[
              "Developing and maintaining web applications using React and Node.js.",
              "Collaborating with cross-functional teams to define, design, and ship new features.",
              "Implementing responsive UI/UX designs and ensuring optimal performance.",
            ]}
          />
          <WorkExperienceItem
            companyName="Creative Solutions"
            position="Junior Developer"
            period="Jul 2021 - Dec 2021"
            responsibilities={[
              "Assisted in the development of client-side logic using JavaScript.",
              "Contributed to the implementation of API integrations.",
              "Participated in code reviews and team meetings to discuss project progress.",
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



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
const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "Django", icon: SiDjango },
  { name: "Fastapi", icon: SiFastapi },
  { name: "Docker", icon: IoLogoDocker },
  { name: "AWS", icon: FaAws },
  { name: "Mysql", icon: DiMysql },
];

export function Skills() {
  return (
    <section id="skills" className="w-full bg-white py-12 md:py-24 lg:py-32" aria-labelledby="skills-heading">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="space-y-4">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-heading" className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            A practical stack for modern product development.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-black/70">
            I work across the product stack, pairing strong UI implementation with backend reliability and thoughtful developer experience.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-black/10 bg-[#f7f7f5] p-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <skill.icon className="h-8 w-8 text-black" />
              </div>
              <span className="text-sm font-semibold text-black">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
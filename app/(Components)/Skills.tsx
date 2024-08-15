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
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m proficient in a wide range of languages and frameworks,
            constantly expanding my skillset to deliver top-notch solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
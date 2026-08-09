import React from "react";
import Link from "next/link";
import {
  FolderKanban,
  HomeIcon,
  LucideProps,
  MailIcon,
  Pencil,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiSubstack } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IconBaseProps } from "react-icons/lib";

const Icons = {
  email: (
    props: React.JSX.IntrinsicAttributes &
      Omit<LucideProps, "ref"> &
      React.RefAttributes<SVGSVGElement>
  ) => <MailIcon {...props} />,
  linkedin: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <FaLinkedin {...props} className="h-6 w-6" />
  ),
  github: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <FaGithub {...props} className="h-6 w-6" />
  ),
  leetcode: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <SiLeetcode {...props} className="h-6 w-6" />
  ),
  uiverse: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <MdDesignServices {...props} className="h-6 w-6" />
  ),
  substack: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <SiSubstack {...props} className="h-6 w-6" />
  ),
};

const DATA = {
  navbar: [
    { href: "/#top", icon: HomeIcon, label: "Home" },
    { href: "/#about", icon: User, label: "About" },
    { href: "/#projects", icon: FolderKanban, label: "Projects" },
    { href: "/#writing", icon: Pencil, label: "Writing" },
    { href: "/#contact", icon: MailIcon, label: "Contact" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SouravBandyopadhyay",
        icon: Icons.github,
      },
      Substack: {
        name: "Core Craft",
        url: "https://corecraft.substack.com/",
        icon: Icons.substack,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/souravbandyopadhyay/",
        icon: Icons.linkedin,
      },
      leetcode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Sourav_280598/",
        icon: Icons.leetcode,
      },
      uiverse: {
        name: "UiVerse",
        url: "https://uiverse.io/profile/SouravBandyopadhyay",
        icon: Icons.uiverse,
      },
      email: {
        name: "Send Email",
        url: "mailto:souravb.1998@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

export default function DockDemo() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-10 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom">
      <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

      <Dock className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />

        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  rel={
                    social.url.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={
                    social.url.startsWith("mailto:")
                      ? social.name
                      : `${social.name} (opens in new tab)`
                  }
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-8 rounded-full"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}

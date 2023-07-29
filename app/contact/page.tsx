"use client";
import { Github, Mail, LucideLinkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Tooltip } from "react-tooltip"; // Import the Tooltip component from react-tooltip
import React from "react";

const socials = [
  {
    icon: <LucideLinkedin size={30} />,
    href: "https://www.linkedin.com/in/jose-espinozaglz/",
    label: "Linkedin",
    handle: "Jose-espinozaglz",
  },
  {
    icon: <Mail size={30} />,
    href: "mailto:contact@joseespinozadev.com",
    label: "Email",
    handle: "contact@joseespinozadev.com",
  },
  {
    icon: <Github size={30} />,
    href: "https://github.com/luichozz",
    label: "Github",
    handle: "luichozz",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue-200/0 via-indigo-200/20 to-slate-200/0">
      <Navigation />
      <div className="container max-w-9x8 mx-auto flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-2 max-w-9x8">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span
                  className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
                  data-tip={s.handle} 
                  data-for={`tooltip-${s.label}`} 
                >
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    <span className="handle overflow-hidden whitespace-nowrap">
                      {s.handle}
                    </span>
                  </span>
                  <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
              <Tooltip id={`tooltip-${s.label}`} place="top">
                {s.handle}
              </Tooltip>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

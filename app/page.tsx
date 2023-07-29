"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import LocalFont from "@next/font/local";
import { motion } from "framer-motion";

const nameFont = LocalFont({
  src: "../public/fonts/Roboto-ThinItalic.ttf",
  variable: "--font-name",
})

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const nameAnimation = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { delay: 1, duration: 1.5 } },
};

const lineAnimation = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue-200/0 via-indigo-200/20 to-slate-200/0">
      <nav className="my-16 animate-fade-in-down">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} passHref legacyBehavior>
              <a>
                <button className="py-2 px-4 bg-zinc-500 hover:bg-zinc-600 text-white rounded-lg transition duration-300">
                  {item.name}
                </button>
              </a>
            </Link>
          ))}
        </ul>
      </nav>

      <motion.div className="hidden h-px md:block animate-fade-left bg-indigo-200/50"
        initial="hidden"
        animate="show"
        variants={lineAnimation}
      />

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={700} />

      <motion.h1
        className={`z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ${nameFont.variable}`}
        initial="hidden"
        animate="show"
        variants={nameAnimation}
      >
        Jose Espinoza
      </motion.h1>

      <motion.div className="hidden h-px md:block animate-fade-right bg-indigo-200/50"
        initial="hidden"
        animate="show"
        variants={lineAnimation}
      />

      <div className="my-16 text-center animate-fade-in">
        <div className="relative flex items-center justify-center">
          <img
            src="/DSC_0855.jpg"
            alt="Your Photo"
            className="w-52 h-52 rounded-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-transparent opacity-50"></div>
        </div>
        <h2 className="mt-4 text-lg text-white font-semibold">
          Welcome to my portfolio website! I'm Jose Espinoza, a passionate software engineer dedicated to crafting exceptional digital experiences. Explore my projects, delve into my skills, and discover how I can bring innovative solutions to the table. Let's embark on a journey of code and creativity together!
        </h2>
      </div>
    </div>
  );
}

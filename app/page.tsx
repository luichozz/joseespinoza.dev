import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue-900/0 via-indigo-600/20 to-slate-900/0">
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

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-blue900/0 via-indigo-900/50 to-slate-900/0" />

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Neko Code
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-blue-900/0 via-indigo-900/50 to-slate-900/0" />

      <div className="my-16 text-center animate-fade-in">
        <div className="relative flex items-center justify-center">
          <img
            src="/DSC_0855.jpg"
            alt="Your Photo"
            className="w-52 h-52 rounded-full object-cover animate-pulse"
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

import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const projects = [
  {
    title: "Website Portfolio",
    description: "The website you are navigating right now. The core of the application is built using React, a popular JavaScript library for building user interfaces. React's component-based architecture was leveraged to create reusable components, enhancing code maintainability and readability. The site utilizes Next.js, a powerful React framework, for server-side rendering which enhances the website's performance and SEO effectiveness. In addition to React and Next.js, the website uses TypeScript to add strong typing to JavaScript, enhancing code quality and understanding. Styling is achieved using Tailwind CSS, a utility-first CSS framework, which allows for rapid UI development without leaving HTML. The website's responsive design ensures a seamless user experience across various devices and screen sizes. Finally, the project integrates with the Framer Motion library for sleek, cutting-edge animations that draw the user's attention and enhance the overall user experience.",
    date: "2023-06-12",
    slug: "joseespinoza.dev",
  },
  // add more projects as needed
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-gradient-to-tl from-blue-200/0 via-indigo-200/20 to-slate-200/0" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {projects.map((project) => (
            <Card key={project.slug}>
              <div className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <time dateTime={project.date}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date(project.date))}
                    </time>
                  </div>
                </div>
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {project.description}
                </p>
                <a href={`https://github.com/luichozz/${project.slug}`} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded">
                    Go to Repo
                  </button>
                </a>
                <div className="absolute bottom-4 md:bottom-8">
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

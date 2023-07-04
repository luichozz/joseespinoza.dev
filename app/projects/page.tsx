import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function ProjectsPage() {
  const projectSlugs = allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"));
  const views = projectSlugs.length > 0 ? await redis.mget<number[]>(...projectSlugs) : [];

  const featured = allProjects.find((project) => project.slug === "planetfall")!;
  const top2 = allProjects.find((project) => project.slug === "highstorm")!;
  const top3 = allProjects.find((project) => project.slug === "envshare")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  const projectsExist = allProjects.length > 0;

  return (
    <div className="bg-gradient-to-tl from-blue-900/0 via-indigo-900 to-slate-900/0">
      <Navigation />
      <div className="container max-w-5xl mx-auto px-4 pt-32 pb-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-300 sm:text-5xl">Projects</h2>
          <p className="mt-4 text-gray-300">
            Some of the projects are from work, and some are on my own time.
          </p>
        </div>

        <div className="mt-16 w-full h-px bg-gradient-to-tl from-blue-900/0 via-indigo-900 to-slate-900/0" />

        {projectsExist ? (
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
            <Card>
              <Link href={`/projects/${featured.slug}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-gray-300">
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Eye className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                        views[featured.slug] ?? 0
                      )}
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-white group-hover:text-gray-50 sm:text-4xl font-display">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 text-gray-400 group-hover:text-gray-300">
                    {featured.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-gray-200 hover:text-gray-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>

            <div className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-16 xl:gap-20">
              <Card>
                <Article project={top2} views={views[top2.slug] ?? 0} />
              </Card>
              <Card>
                <Article project={top3} views={views[top3.slug] ?? 0} />
              </Card>
            </div>
          </div>
        ) : (
			<p className="mt-4 text-gray-300">
            No projects available
          </p>
        )}

        <div className="hidden mt-16 w-full h-px md:block bg-indigo-700" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((project, index) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

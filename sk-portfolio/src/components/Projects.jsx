import React from "react"
import Section from "../common/Section"
import {projects} from "../data/portfolioData"
import {
    ArrowUpRight,

} from "lucide-react"

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Modern React Projects" revealFrom="bottom">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex min-h-[300px] flex-col justify-between rounded border border-white/10 bg-iron p-6 shadow-hard transition duration-300 hover:-translate-y-2 hover:border-blood-500"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded bg-blood-500/15 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blood-100">
                  {project.type}
                </span>
                <a
                  href={project.link}
                  aria-label={`Open ${project.title}`}
                  className="grid h-10 w-10 place-items-center rounded bg-white/5 text-white transition group-hover:bg-blood-500"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <h3 className="text-3xl font-black">{project.title}</h3>
              <p className="mt-4 leading-7 text-ash">{project.description}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 px-3 py-2 text-xs font-bold text-ash"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
export default Projects
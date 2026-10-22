import { ArrowUpRight, GitBranch } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Lume Beauty Studio",
    type: "Full-Stack Beauty Booking Platform",
    description:
      "A complete beauty studio management and appointment booking platform with service management, availability scheduling, customer appointments and an administrative dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    title: "KontentIQ",
    type: "AI-Powered Content Management Platform",
    description:
      "A content management platform designed to help modern brands organize their content, manage brand information and build AI-powered content workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "AI",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-white/5 bg-[#0d0d14] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
              Selected Work
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500">
            A selection of projects that represent my journey from
            frontend development into full-stack application
            development.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-8 rounded-3xl border border-white/10 bg-[#111118] p-6 transition hover:border-violet-400/30 md:grid-cols-[120px_1fr_auto] md:p-9"
            >
              <div>
                <span className="text-4xl font-bold text-zinc-700 transition group-hover:text-violet-400/50">
                  {project.number}
                </span>
              </div>

              <div>
                <p className="text-sm text-violet-300">
                  {project.type}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 md:flex-col">
                <a
                  href={project.github}
                  className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-400 hover:text-violet-300"
                  aria-label={`${project.title} GitHub`}
                >
                  <GitBranch size={18} />
                </a>

                <a
                  href={project.demo}
                  className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-violet-400 hover:text-violet-300"
                  aria-label={`${project.title} live demo`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
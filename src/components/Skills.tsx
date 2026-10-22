const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "REST APIs",
    "JWT",
  ],
  Database: [
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Skills & Technologies
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Tools I use to build.
          </h2>

          <p className="mt-5 leading-7 text-zinc-500">
            A growing toolkit built through practical projects,
            continuous learning and hands-on development.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-[#111118] p-6"
            >
              <h3 className="font-semibold text-violet-300">
                {category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
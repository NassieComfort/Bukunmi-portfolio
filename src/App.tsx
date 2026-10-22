import {
ArrowDown,
ArrowRight,
GitBranch,
Mail,
BriefcaseBusiness,
Code2,
Database,
Layers3,
ExternalLink,
Sparkles,
} from "lucide-react";

const skills = [
{
category: "Frontend",
icon: Code2,
technologies: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
},
{
category: "Backend",
icon: Layers3,
technologies: ["Node.js", "Express.js", "NestJS", "REST APIs"],
},
{
category: "Databases",
icon: Database,
technologies: ["MongoDB", "PostgreSQL", "SQL"],
},
{
category: "Tools & Workflow",
icon: BriefcaseBusiness,
technologies: ["Git", "GitHub", "VS Code"],
},
];

const projects = [
  {
    number: "01",
    title: "Beauty Studio Management System",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A beauty studio application designed to simplify service management, appointment scheduling, and studio operations. The project includes an administrative dashboard for managing services, appointments, and availability.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    status: "PROJECT BUILT",
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "KontentIQ",
    category: "AI-POWERED CONTENT PLATFORM",
    description:
      "An AI-powered content management platform concept designed to help brands organize their identity, manage digital content, and create consistent messaging across multiple channels.",
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    status: "IN DEVELOPMENT",
    github: "",
    demo: "",
  },
];

const experiences = [
  {
    title: "Full Stack Development",
    period: "Ongoing",
    description:
      "Building practical web applications while developing my understanding of frontend architecture, backend services, APIs, and database integration.",
  },
  {
    title: "Frontend Development",
    period: "Continuous learning",
    description:
      "Strengthening my foundation in HTML, CSS, JavaScript, React, and TypeScript through hands-on projects and responsive interface development.",
  },
  {
    title: "Backend & Databases",
    period: "Expanding",
    description:
      "Developing stronger backend skills with Node.js, Express, REST APIs, MongoDB, and PostgreSQL while learning how data and application logic work together.",
  },
  {
    title: "Authentication",
    period: "Growing",
    description:
      "Deepening my understanding of user authentication, protected routes, secure API access, and session-based flows to build more reliable and secure applications.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090b13] text-slate-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090b13]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-xl font-black tracking-tight text-white">
            NASSIE<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-violet-400/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500/15"
          >
            Let's Connect <ArrowRight className="ml-1 inline" size={15} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate border-b border-white/6">
        <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32">
      <div>
        <p className="mb-7 text-xs font-bold uppercase tracking-[0.28em] text-violet-400">
          Full Stack Developer
        </p>

        <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Building digital experiences that{" "}
          <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            matter.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          Hi, I'm Nassie Bukunmi, a Full Stack Developer passionate about
          building responsive, intuitive, and scalable web applications.
          I enjoy turning ideas into functional digital products, from
          crafting engaging interfaces with React and TypeScript to
          developing backend services and working with databases. I'm
          continuously learning, strengthening my problem-solving skills,
          and building applications that bring thoughtful design and
          reliable functionality together.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-400 px-7 py-3.5 font-semibold text-[#100c1e] transition hover:bg-violet-300"
          >
            View My Work <ArrowRight className="ml-2 inline" size={17} />
          </a>

          <a
            href="#about"
            className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-violet-400/60"
          >
            Let's Connect <ArrowDown className="ml-2 inline" size={17} />
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="https://github.com/NassieComfort"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:border-violet-400/40 hover:text-violet-400"
          >
            <GitBranch size={20} />
          </a>
          <a
            href="#contact"
            aria-label="Contact me"
            className="rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:border-violet-400/40 hover:text-violet-400"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Developer code panel */}
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-5 rounded-4xl bg-violet-500/80 blur-2xl" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#10131e] shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs text-slate-500">developer.ts</span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
            <p className="text-slate-500">// Hello, world.</p>
            <p className="mt-3">
              <span className="text-violet-400">const</span>{" "}
              <span className="text-sky-300">developer</span> = {"{"}
            </p>
            <p className="pl-5">
              name: <span className="text-emerald-300">"Nassie Bukunmi"</span>,
            </p>
            <p className="pl-5">
              role: <span className="text-emerald-300">"Full Stack Developer"</span>,
            </p>
            <p className="pl-5">
              frontend: <span className="text-emerald-300">"React + TypeScript"</span>,
            </p>
            <p className="pl-5">
              backend: <span className="text-emerald-300">"Node.js + NestJS"</span>,
            </p>
            <p className="pl-5">
              database: <span className="text-emerald-300">"MongoDB + PostgreSQL"</span>,
            </p>
            <p className="pl-5">
              mindset: <span className="text-emerald-300">"Always learning"</span>,
            </p>
            <p>{"};"}</p>
            <p className="mt-5 text-slate-500">// Turning ideas into reality.</p>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-4">
            <span className="text-xs text-slate-500">Currently building</span>
            <span className="flex items-center gap-2 text-xs font-medium text-violet-300">
              <Sparkles size={14} /> KontentIQ
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* About */}
  <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <SectionHeading
      eyebrow="A little about me"
      title="More than just writing code."
      description="I believe good software should do more than work. It should solve meaningful problems, feel intuitive to use, and craete a thoughtful experience for the people interacting with it. As i continue growing as a developer, I'm learning to look beyound the code itself understanding the problem, thinking about the user, and considering how the different part of an applicatiom work together."
    />

    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "How I Think",
          icon: Sparkles,
          text: "I'm curious about how digital products work, why certain solutions are effective, and how thoughtful technical decisions can improve the experience for the people using them.",
        },
        {
          title: "How I Build",
          icon: Code2,
          text: "I approach development through hands-on learning, breaking complex ideas into manageable tasks, and gradually turning them into responsive interfaces and functional applications.",
        },
        {
          title: "Where I'm Going",
          icon: Layers3,
          text: "I'm growing as a full stack developer by strengthening my frontend foundations, learning backend architecture, integrating APIs, and exploring database-driven applications.",
        },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="rounded-2xl border border-white/8 bg-white/2.5 p-7 transition hover:-translate-y-1 hover:border-violet-400/40"
          >
            <Icon className="mb-5 text-violet-400" size={25} />
            <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm leading-7 text-slate-400">{item.text}</p>
          </article>
        );
      })}
    </div>
  </section>

  {/* Skills */}
  <section id="skills" className="border-y border-white/6 bg-white/2.5 ">
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="My toolkit"
        title="Skills & technologies."
        description="The tools I'm using to build, test, and improve web applications. My experience varies by technology, and I'm continuing to deepen my knowledge through practical projects."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <article
              key={skill.category}
              className="rounded-2xl border border-white/8 bg-white/2.5 p-6"
            >
              <Icon className="mb-4 text-violet-400" size={24} />
              <h3 className="mb-5 font-bold text-white">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/8 bg-white/2.5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* Projects */}
  <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <SectionHeading
      eyebrow="Selected work"
      title="Things I've been building."
      description="A selection of projects that reflect my practical learning, technical growth, and interest in building useful digital products."
    />

    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.number}
          className="group flex flex-col rounded-2xl border border-white/8 bg-[#10131e] p-6 transition hover:-translate-y-1 hover:border-violet-400/40 sm:p-7"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-3xl font-black text-white/15">
              {project.number}
            </span>
            <span className="rounded-full border border-violet-400/20 bg-violet-400/8 px-3 py-1 text-[10px] font-semibold tracking-wide text-violet-300">
              {project.status}
            </span>
          </div>

          <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-violet-400">
            {project.category}
          </p>

          <h3 className="text-xl font-bold text-white">{project.title}</h3>

          <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-5 border-t border-white/[0.07] pt-5">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-violet-300"
              >
                <GitBranch size={16} /> Source Code
              </a>
            ) : null}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-violet-300"
              >
                Live Demo <ExternalLink size={15} />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>

  {/* Experience */}
  <section id="experience" className="border-y border-white/6 bg-white/2">
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="My journey"
        title="Learning by building."
        description="My development journey is shaped by continuous learning, practical experimentation, and the determination to understand how complete web applications work."
      />

      <div className="max-w-3xl space-y-8">
        {experiences.map((experience, index) => (
          <article key={experience.title} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-300">
                <BriefcaseBusiness size={17} />
              </span>
              {index !== experiences.length - 1 && (
                <span className="mt-3 w-px flex-1 bg-white/10" />
              )}
            </div>
            <div className="pb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                {experience.period}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                {experience.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="relative isolate overflow-hidden">
    <div className="absolute -bottom-36 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />
    <div className="mx-auto max-w-4xl px-6 py-28 text-center">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-violet-400">
        Have a project in mind?
      </p>
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
        Let's build something meaningful.
      </h2>
      <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
        I'm interested in connecting with fellow developers, learning from
        new challenges, and exploring opportunities to contribute to
        thoughtful digital products. I'd love to hear from you.
      </p>

      <a
        href="mailto:nassiebcomfort@gmail.com"
        className="mt-9 inline-flex items-center rounded-full bg-violet-400 px-7 py-4 font-semibold text-[#100c1e] transition hover:bg-violet-300"
      >
        <Mail className="mr-2" size={18} /> Get In Touch
      </a>

      <div className="mt-7 flex justify-center gap-4">
        <a
          href="https://github.com/NassieComfort"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:border-violet-400/40 hover:text-violet-400"
        >
          <GitBranch size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/nassie-bukunmi-4a1614385"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:border-violet-400/40 hover:text-violet-400"
        >
          <BriefcaseBusiness size={20} />
        </a>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-white/[0.07] px-6 py-7">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
      <p>
        © {new Date().getFullYear()} Nassie Bukunmi. Built with care and curiosity.
      </p>
      <a href="#home" className="transition hover:text-violet-300">
        Back to top ↑
      </a>
    </div>
  </footer>
    </main>
  );
}

export default App;

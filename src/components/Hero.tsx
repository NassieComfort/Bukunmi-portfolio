import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute top-20 -left-40 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            <span className="h-px w-10 bg-violet-400" />
            Full Stack Developer
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building digital
            <span className="block text-violet-400">
              experiences
            </span>
            that matter.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Hi, I'm Nassie Bukunmi. I build responsive and
            user-focused web applications, transforming ideas into
            functional digital experiences from the interface to the
            backend.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-400 px-6 py-3 font-semibold text-black transition hover:bg-violet-300"
            >
              View My Work
              <ArrowUpRight
                size={18}
                className="ml-2 inline"
              />
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/10 px-6 py-3 font-medium text-zinc-200 transition hover:border-violet-400"
            >
              More About Me
              <ArrowDown
                size={16}
                className="ml-2 inline"
              />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <a
              href="https://github.com/NassieComfort"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-violet-300"
              aria-label="GitHub"
            >
              <GitBranch size={22} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-violet-300"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={22} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-6 rounded-3xl bg-violet-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111118] p-6 shadow-2xl sm:p-8">
            <div className="mb-7 flex items-center gap-2 border-b border-white/5 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-auto font-mono text-xs text-zinc-600">
                developer.ts
              </span>
            </div>

            <div className="font-mono text-sm leading-8 sm:text-base">
              <p className="text-zinc-600">
                // Hello, world.
              </p>

              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-blue-300">
                  developer
                </span>{" "}
                = {"{"}
              </p>

              <p className="pl-5">
                name:{" "}
                <span className="text-green-300">
                  "Nassie Bukunmi"
                </span>
                ,
              </p>

              <p className="pl-5">
                role:{" "}
                <span className="text-green-300">
                  "Full Stack Developer"
                </span>
                ,
              </p>

              <p className="pl-5">
                frontend:{" "}
                <span className="text-green-300">
                  "React + TypeScript"
                </span>
                ,
              </p>

              <p className="pl-5">
                backend:{" "}
                <span className="text-green-300">
                  "Node.js + NestJS"
                </span>
                ,
              </p>

              <p className="pl-5">
                database:{" "}
                <span className="text-green-300">
                  "MongoDB + PostgreSQL"
                </span>
                ,
              </p>

              <p className="pl-5">
                mindset:{" "}
                <span className="text-green-300">
                  "Always learning"
                </span>
                ,
              </p>

              <p>{"};"}</p>

              <p className="mt-5 text-violet-300">
                <span className="text-zinc-600">
                  //{" "}
                </span>
                Turning ideas into reality.
              </p>
            </div>
          </div>

          <div className="absolute -right-2 -bottom-5 rounded-xl border border-white/10 bg-[#171720] px-5 py-3 shadow-xl sm:-right-5">
            <p className="text-xs text-zinc-500">
              Currently building
            </p>

            <p className="mt-1 font-medium text-violet-300">
              KontentIQ ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
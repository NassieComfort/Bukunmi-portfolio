export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-[#0d0d14] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* About Intro */}
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            I build with purpose, curiosity, and a full-stack mindset.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400">
            I'm Nassie Bukunmi, a Full Stack Developer focused on building
            responsive, practical, and user-centered web applications. I enjoy
            turning ideas into functional digital products that are not only
            visually polished, but also thoughtfully structured behind the
            scenes.
          </p>

          <p className="mt-5 text-base leading-8 text-zinc-400">
            I started my journey with frontend development, learning how to
            create clean interfaces and meaningful user experiences. As I
            continued building projects, my curiosity naturally moved beyond
            the interface into APIs, backend architecture, databases, and the
            systems that make applications work.
          </p>

          <p className="mt-5 text-base leading-8 text-zinc-400">
            Today, I work across the stack with technologies such as React,
            TypeScript, Node.js, NestJS, MongoDB, and PostgreSQL. I particularly
            enjoy building real-world projects where I can solve problems,
            learn something new, and continuously improve how I approach
            development.
          </p>
        </div>

        {/* About Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#111118] p-7">
            <p className="text-3xl font-bold text-violet-300">
              01
            </p>

            <h3 className="mt-5 font-semibold">
              Build with purpose
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              I enjoy turning ideas into useful digital experiences that solve
              real problems and provide value to the people using them.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111118] p-7">
            <p className="text-3xl font-bold text-violet-300">
              02
            </p>

            <h3 className="mt-5 font-semibold">
              Think across the stack
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              I don't stop at the interface. I enjoy understanding how the
              frontend, APIs, backend services, and databases work together.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111118] p-7">
            <p className="text-3xl font-bold text-violet-300">
              03
            </p>

            <h3 className="mt-5 font-semibold">
              Keep evolving
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              I'm constantly learning through hands-on projects, experimenting
              with new technologies, and challenging myself to build better.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
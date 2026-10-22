import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  Mail,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-[#0d0d14] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block text-violet-400">
              meaningful.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-zinc-400">
            Whether you have a project, an opportunity or simply
            want to connect, I'd love to hear from you.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-9 inline-flex items-center rounded-full bg-violet-400 px-6 py-3 font-semibold text-black transition hover:bg-violet-300"
          >
            Send Me an Email
            <ArrowUpRight className="ml-2" size={18} />
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111118] p-5 transition hover:border-violet-400/40"
          >
            <Mail className="text-violet-300" size={22} />

            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="mt-1 text-xs text-zinc-500">
                Get in touch
              </p>
            </div>
          </a>

          <a
            href="https://github.com/NassieComfort"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111118] p-5 transition hover:border-violet-400/40"
          >
            <GitBranch className="text-violet-300" size={22} />

            <div>
              <p className="text-sm font-medium">GitHub</p>
              <p className="mt-1 text-xs text-zinc-500">
                View my code
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111118] p-5 transition hover:border-violet-400/40"
          >
            <BriefcaseBusiness className="text-violet-300" size={22} />

            <div>
              <p className="text-sm font-medium">LinkedIn</p>
              <p className="mt-1 text-xs text-zinc-500">
                Connect with me
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
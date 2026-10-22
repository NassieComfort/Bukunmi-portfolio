const experiences = [
  {
    period: "2021 — 2025",
    role: "Customer Service Representative",
    company: "OGABASSEY",
    description:
      "Handled customer communication, order-related issues and customer support while developing strong communication, problem-solving and client-management skills.",
  },
  {
    period: "2019 — 2020",
    role: "Customer Care Representative / Salesperson",
    company: "RenMoney Microfinance Bank",
    description:
      "Supported customers, handled inquiries and contributed to sales and customer relationship activities.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Experience
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Where I've been.
          </h2>
        </div>

        <div className="mt-14 max-w-4xl">
          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className={`grid gap-5 py-8 md:grid-cols-[180px_1fr] ${
                index !== experiences.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <p className="text-sm text-violet-300">
                {experience.period}
              </p>

              <div>
                <h3 className="text-xl font-semibold">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {experience.company}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-violet-400/20 bg-violet-400/5 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
            Currently
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            Building, learning and growing.
          </h3>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            I'm deepening my full-stack development skills through
            practical projects, backend architecture, APIs,
            databases and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}
import { approach, roadmap, techStack } from "../../data/landing-data.jsx";

export default function ApproachSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"
      aria-labelledby="approach-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
            How I build products
          </p>
          <h2
            id="approach-heading"
            className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl"
          >
            Small scope, strong fundamentals, polished execution.
          </h2>
          <div className="mt-8 grid gap-4">
            {approach.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
          aria-labelledby="stack-heading"
        >
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
            Tech stack
          </p>
          <h3
            id="stack-heading"
            className="mt-4 text-3xl font-black tracking-tight text-slate-950"
          >
            Tools chosen for speed and clarity.
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-slate-950 p-5 text-white">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
              Roadmap
            </p>
            <div className="mt-5 space-y-4">
              {roadmap.map((item) => (
                <div key={item.label} className="border-l border-sky-300/30 pl-4">
                  <p className="text-sm font-black text-sky-200">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

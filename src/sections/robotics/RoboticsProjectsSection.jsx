import { IconArrowRight, IconCpu } from "../../components/icons/landing-icons.jsx";
import { pageCopy, roboticsProjects } from "../../data/landing-data.jsx";

function buildAnchorId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function RoboticsProjectsSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"
      aria-labelledby="robotics-projects-heading"
    >
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
          {pageCopy.roboticsProjects.eyebrow}
        </p>
        <h2
          id="robotics-projects-heading"
          className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl"
        >
          {pageCopy.roboticsProjects.title}
        </h2>
      </div>

      <div className="grid gap-6">
        {roboticsProjects.map((project, index) => {
          const buildId = buildAnchorId(project.name);

          return (
            <article
              key={project.name}
              id={buildId}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="p-6 md:p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-110 group-hover:bg-sky-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                    <IconCpu className="h-6 w-6" />
                  </div>
                  <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                    {project.status}
                  </div>
                  <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`#${buildId}-process`}
                    className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-sky-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    {pageCopy.roboticsProjects.processCta}
                    <IconArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div id={`${buildId}-process`} className="bg-slate-950 p-6 text-white md:p-8">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
                    {pageCopy.roboticsProjects.processLabel} · 0{index + 1}
                  </p>
                  <div className="mt-6 space-y-4">
                    {project.build.map((item) => {
                      const [label, detail] = item.split(": ");

                      return (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:border-sky-300/40 hover:bg-white/[0.09]"
                        >
                          <p className="text-sm font-black text-sky-200">
                            {label}
                          </p>
                          <p className="mt-1 leading-7 text-slate-300">
                            {detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

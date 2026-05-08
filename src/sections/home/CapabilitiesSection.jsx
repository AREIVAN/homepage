import ProjectIcon from "../../components/common/ProjectIcon.jsx";
import { capabilities } from "../../data/landing-data.jsx";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
              Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Built around real technical problems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              AREIVAN connects product design, frontend engineering, robotics
              logic, dashboards and AI-assisted workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-110 group-hover:bg-sky-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  <ProjectIcon icon={capability.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black text-slate-950">
                  {capability.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

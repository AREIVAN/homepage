import { roboticsBuildSteps } from "../../data/landing-data.jsx";

export default function RoboticsProcessSection() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50"
      aria-labelledby="robotics-process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
              How I build robotics projects
            </p>
            <h2
              id="robotics-process-heading"
              className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl"
            >
              Robotics needs process, not magic.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The work moves from a real-world constraint to electronics,
              firmware, integration and testing. That discipline matters —
              hardware punishes shortcuts FAST.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {roboticsBuildSteps.map((step, index) => (
              <article
                key={step}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-700">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-black text-slate-950">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

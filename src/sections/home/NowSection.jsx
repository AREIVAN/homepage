import { activeWork } from "../../data/landing-data.jsx";

export default function NowSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"
      aria-labelledby="now-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
            What I'm building now
          </p>
          <h2
            id="now-heading"
            className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl"
          >
            Useful products at the edge of software and machines.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            AREIVAN exists to turn practical problems in learning, mobility and
            robotics into products that feel fast, clear and ready to grow.
          </p>
        </div>

        <div className="grid gap-4">
          {activeWork.map((item, index) => (
            <article
              key={item}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-700 transition duration-300 group-hover:bg-sky-100 motion-reduce:transition-none">
                  0{index + 1}
                </div>
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

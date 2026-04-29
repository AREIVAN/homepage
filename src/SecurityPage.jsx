import { motion, useReducedMotion } from "framer-motion";

const securityItems = [
  {
    label: "HTTPS enforced",
    description: "areivan.com serves over HTTPS and asks browsers to keep future visits encrypted with HSTS.",
  },
  {
    label: "Security headers enabled",
    description: "The site ships with CSP, frame protection, MIME sniffing protection, referrer limits and browser permission limits.",
  },
  {
    label: "Minimal browser permissions",
    description: "Camera, microphone, location, payment and hardware sensors are disabled because this public site does not need them.",
  },
  {
    label: "No sensitive data collection",
    description: "The homepage does not include login, tracking forms or client-side storage for sensitive visitor data.",
  },
];

export default function SecurityPage() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_36%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="/" className="group flex min-h-11 items-center gap-3 rounded-2xl transition duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:scale-100" aria-label="AREIVAN home">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black tracking-tight text-white shadow-lg shadow-slate-900/20 transition duration-300 group-hover:-rotate-3 group-hover:shadow-sky-500/20 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
              A
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.24em] text-slate-950">AREIVAN</p>
              <p className="text-xs text-slate-500">Security posture</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="/" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Home</a>
            <a href="/#contact" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-20">
          <motion.div {...motionProps} transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }} className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">Security at areivan.com</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-7xl">
              A minimal public site with a hardened browser boundary.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              This page documents the baseline protections enabled for the AREIVAN homepage without changing the product-lab experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="security-controls-heading">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">Controls</p>
          <h2 id="security-controls-heading" className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Small surface area. Clear protections.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {securityItems.map((item, index) => (
            <article key={item.label} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-700 transition duration-300 group-hover:bg-sky-100 motion-reduce:transition-none">
                0{index + 1}
              </div>
              <h3 className="text-lg font-black text-slate-950">{item.label}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">Contact flow</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">No login. No hidden intake form. No unnecessary permissions.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Contact actions leave the site through explicit mail, WhatsApp or professional profile links. The homepage does not ask the browser for sensitive capabilities.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function SiteNav() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a
        href="/"
        className="group flex min-h-11 items-center gap-3 rounded-2xl transition duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:scale-100"
        aria-label="AREIVAN home"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black tracking-tight text-white shadow-lg shadow-slate-900/20 transition duration-300 group-hover:-rotate-3 group-hover:shadow-sky-500/20 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
          A
        </div>
        <div>
          <p className="text-sm font-black tracking-[0.24em] text-slate-950">
            AREIVAN
          </p>
          <p className="text-xs text-slate-500">Build. Automate. Learn.</p>
        </div>
      </a>

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        <a
          href="/#projects"
          className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Projects
        </a>
        <a
          href="/#capabilities"
          className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Capabilities
        </a>
        <a
          href="/robotics"
          className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Robotics
        </a>
        <a
          href="/#contact"
          className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default function ButtonLink({ href = "#", variant = "primary", children }) {
  const isExternal = href.startsWith("http");
  const baseClass =
    "inline-flex min-h-12 items-center justify-center rounded-2xl px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
  const variants = {
    primary:
      "bg-slate-950 text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800 hover:shadow-xl hover:shadow-sky-500/15",
    secondary:
      "border border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50",
    inverted:
      "bg-white text-slate-950 shadow-lg shadow-black/20 hover:bg-slate-100",
    ghostDark:
      "border border-white/20 bg-transparent text-white hover:bg-white/10",
  };

  return (
    <a
      href={href}
      className={`${baseClass} ${variants[variant]}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

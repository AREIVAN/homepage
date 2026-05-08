export default function SiteFooter({ darkGradient = true }) {
  return (
    <footer
      className={
        darkGradient
          ? "border-t bg-gradient-to-r from-slate-900 to-slate-100 px-6 py-10 lg:px-8"
          : "border-t px-6 py-10 text-slate-950 lg:px-8"
      }
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p
            className={
              darkGradient
                ? "font-black tracking-tight text-slate-50"
                : "font-black tracking-tight text-slate-950"
            }
          >
            Built by Areivan
          </p>
          <p className="mt-1">Robotics engineering student</p>
        </div>
        <p className="max-w-xl leading-6 md:text-right">
          Focused on automation, industrial systems and software products.
        </p>
      </div>
    </footer>
  );
}

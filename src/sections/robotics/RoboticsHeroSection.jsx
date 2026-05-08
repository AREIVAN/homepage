import { motion } from "framer-motion";
import SiteNav from "../../components/common/SiteNav.jsx";
import { pageCopy } from "../../data/landing-data.jsx";

export default function RoboticsHeroSection({ heroMotion }) {
  return (
    <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.2),_transparent_36%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <SiteNav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div
          {...heroMotion}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="max-w-4xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
            {pageCopy.roboticsHero.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-7xl">
            {pageCopy.roboticsHero.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            {pageCopy.roboticsHero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

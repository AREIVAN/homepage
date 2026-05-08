import { motion } from "framer-motion";
import { IconArrowRight, IconGithub } from "../../components/icons/landing-icons.jsx";
import ButtonLink from "../../components/common/ButtonLink.jsx";
import ProjectIcon from "../../components/common/ProjectIcon.jsx";
import SiteNav from "../../components/common/SiteNav.jsx";
import { pageCopy, projects } from "../../data/landing-data.jsx";

export default function HomeHeroSection({
  heroMotion,
  panelMotion,
  shouldReduceMotion,
  onProjectSelect,
}) {
  return (
    <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_36%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <SiteNav />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-20">
        <motion.div
          {...heroMotion}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
        >
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
            {pageCopy.homeHero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {pageCopy.homeHero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects">
              {pageCopy.homeHero.primaryCta}
              <IconArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="https://github.com/AREIVAN" variant="secondary">
              <IconGithub className="mr-2 h-4 w-4" />
              {pageCopy.homeHero.secondaryCta}
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          id="projects"
          {...panelMotion}
          transition={{
            duration: 0.8,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: [0.2, 0, 0, 1],
          }}
          className="relative scroll-mt-8"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-sky-400/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-sky-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                    {pageCopy.homeHero.commandEyebrow}
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    {pageCopy.homeHero.commandTitle}
                  </p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                  {pageCopy.homeHero.commandStatus}
                </div>
              </div>

              <div className="grid gap-3">
                {projects.map((project) => (
                  <button
                    key={project.name}
                    type="button"
                    onClick={() => onProjectSelect(project)}
                    className="group w-full rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.09] hover:shadow-lg hover:shadow-sky-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    aria-label={`Preview ${project.name}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300 transition duration-300 group-hover:scale-110 group-hover:bg-sky-400/25">
                        <ProjectIcon icon={project.icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{project.name}</h3>
                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-300">
                          {project.description}
                        </p>
                        <div className="mt-3 inline-flex rounded-full bg-sky-400/10 px-2.5 py-1 text-xs font-semibold text-sky-200">
                          {project.status}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

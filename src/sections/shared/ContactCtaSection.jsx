import { IconArrowRight, IconGithub } from "../../components/icons/landing-icons.jsx";
import { pageCopy } from "../../data/landing-data.jsx";
import ButtonLink from "../../components/common/ButtonLink.jsx";

export default function ContactCtaSection({
  eyebrow = pageCopy.contact.eyebrow,
  title = pageCopy.contact.title,
  description = pageCopy.contact.description,
  githubLabel = pageCopy.contact.githubLabel,
  onContactClick,
}) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 transition duration-500 hover:-translate-y-1 hover:shadow-sky-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Contact me
              <IconArrowRight className="ml-2 h-4 w-4" />
            </button>
            <ButtonLink href="https://github.com/AREIVAN" variant="ghostDark">
              <IconGithub className="mr-2 h-4 w-4" />
              {githubLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

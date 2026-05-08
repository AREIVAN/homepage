import { useEffect, useId, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IconExternal } from "../icons/landing-icons.jsx";
import ProjectIcon from "../common/ProjectIcon.jsx";

export default function ProjectPreviewModal({ project, onClose }) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return undefined;

    const previousActiveElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      }
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-md sm:items-center"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
    >
      <motion.div
        ref={dialogRef}
        className="relative my-auto max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/40 outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        initial={
          shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }
        }
        animate={
          shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
        }
        exit={
          shouldReduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }
        }
        transition={{
          duration: shouldReduceMotion ? 0 : 0.22,
          ease: [0.2, 0, 0, 1],
        }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="sticky left-full top-5 z-20 mr-5 mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-label="Close preview"
        >
          ×
        </button>

        <div className="-mt-10 grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-400/15 text-sky-300">
              <ProjectIcon icon={project.icon} className="h-8 w-8" />
            </div>
            <div className="mb-4 inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-sky-200">
              {project.status}
            </div>
            <h2
              id={titleId}
              className="text-4xl font-black tracking-tight md:text-5xl"
            >
              {project.name}
            </h2>
            <p
              id={descriptionId}
              className="mt-5 text-lg leading-8 text-slate-300"
            >
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Open project
              <IconExternal className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_35%)] p-5 md:p-8">
            <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30">
              <div className="border-b border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3" aria-hidden="true">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    Live Preview
                  </span>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between rounded-2xl bg-black/20 p-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-300">
                      {project.name}
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {project.mockup}
                    </h3>
                  </div>
                  <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300 sm:flex">
                    <ProjectIcon icon={project.icon} className="h-7 w-7" />
                  </div>
                </div>

                <iframe
                  src={project.href}
                  title={`${project.name} live preview`}
                  loading="lazy"
                  className="h-[420px] w-full rounded-xl border border-white/10 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

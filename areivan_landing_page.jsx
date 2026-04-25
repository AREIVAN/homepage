import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function IconArrowRight({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconExternal({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m10 14 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconGithub({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.6c-5.2 0-9.4 4.2-9.4 9.4 0 4.1 2.7 7.6 6.4 8.9.5.1.6-.2.6-.5v-1.8c-2.6.6-3.1-1.1-3.1-1.1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 2 1 2.5.7.1-.5.3-1 .5-1.2-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9.9-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.2 2.6.9.8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.8-1.2 2.6-.9 2.6-.9.5 1.3.2 2.3.1 2.5.6.7.9 1.5.9 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.7v2.6c0 .3.2.6.7.5 3.7-1.2 6.4-4.7 6.4-8.9 0-5.2-4.2-9.4-9.4-9.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconBike({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 17 11 10h3l4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 10 7 17h7l-3-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconBrain({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 4a3 3 0 0 0-3 3v.4A3.5 3.5 0 0 0 4 14a3 3 0 0 0 3 3h2V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 4a3 3 0 0 1 3 3v.4A3.5 3.5 0 0 1 20 14a3 3 0 0 1-3 3h-2V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 9h3m0 0V6m0 3h3m-6 5h3m0 0v4m0-4h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconTrophy({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 6H5a2 2 0 0 0 0 4h3M16 6h3a2 2 0 0 1 0 4h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 12v5m-4 3h8m-6-3h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCpu({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
      <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconMap({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6.5 9 4l6 2.5 5-2.5v13.5L15 20l-6-2.5L4 20V6.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 4v13.5M15 6.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.5 10.5c2.5 3 6.5-1 10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconChart({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="7" y="11" width="3" height="5" rx="1" fill="currentColor" />
      <rect x="12" y="8" width="3" height="8" rx="1" fill="currentColor" />
      <rect x="17" y="5" width="3" height="11" rx="1" fill="currentColor" />
    </svg>
  );
}

function IconSpark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 14.4 9.6 21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M19 3v4M21 5h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const projects = [
  {
    name: "Apex Ride",
    status: "In development",
    description: "GPS routes, motorcycle tracking, speed heatmaps and segment-based ride analysis.",
    icon: IconBike,
    href: "https://apexride.areivan.com",
    tags: ["GPS", "Maps", "Mobility"],
    mockup: "Route tracking · Speed heatmap · Live segments",
  },
  {
    name: "TypeLearn",
    status: "Live",
    description: "English typing practice with verb trainer, PDF practice mode, progress tracking and AI-generated exercises.",
    icon: IconBrain,
    href: "https://typelearn.areivan.com",
    tags: ["Learning", "AI", "English"],
    mockup: "Verb trainer · PDF practice · Weak words",
  },
  {
    name: "Torneos Dashboard",
    status: "Prototype",
    description: "Robotics tournament management with robot database, event calendar and competition dashboard.",
    icon: IconTrophy,
    href: "https://torneos.areivan.com",
    tags: ["Robotics", "Events", "Dashboard"],
    mockup: "Robot database · Events · Brackets",
  },
];

const capabilities = [
  {
    title: "Software Products",
    description: "Web applications built around real workflows, dashboards and useful data.",
    icon: IconChart,
  },
  {
    title: "Robotics & Hardware",
    description: "Projects connected with robots, sensors, embedded systems and industrial tools.",
    icon: IconCpu,
  },
  {
    title: "Maps & Motion",
    description: "Route tracking, segments, GPS logic and movement-based interfaces.",
    icon: IconMap,
  },
  {
    title: "AI-Assisted Learning",
    description: "Practice tools that adapt content, vocabulary and exercises to the user.",
    icon: IconSpark,
  },
];

const activeWork = [
  "Shipping learning tools that turn practice sessions into measurable progress.",
  "Exploring mobility interfaces for routes, speed patterns and ride intelligence.",
  "Designing robotics and industrial dashboards that make complex systems easier to operate.",
];

const approach = [
  {
    title: "Start with the workflow",
    description: "I map the real job first, then design the smallest product surface that makes it faster, clearer or safer.",
  },
  {
    title: "Prototype with production taste",
    description: "Interfaces stay simple, but the details matter: hierarchy, speed, empty states, focus states and responsive behavior.",
  },
  {
    title: "Connect software to the physical world",
    description: "Robotics, mobility and industrial systems need dashboards that respect both data and operators.",
  },
];

const techStack = ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Maps", "AI workflows", "Robotics", "Industrial dashboards"];

const roadmap = [
  { label: "Now", text: "Polish the AREIVAN product ecosystem and keep the public projects useful." },
  { label: "Next", text: "Expand route analytics, learning feedback loops and tournament operations." },
  { label: "Later", text: "Bring more robotics and automation tooling into clean web interfaces." },
];

export const areivanLandingMetadata = {
  title: "AREIVAN | Software for learning, mobility and robotics",
  description: "AREIVAN is a personal product lab for web apps, robotics tools, learning systems and industrial dashboards.",
  url: "https://areivan.com",
  links: {
    typelearn: "https://typelearn.areivan.com",
    apexRide: "https://apexride.areivan.com",
    torneos: "https://torneos.areivan.com",
    github: "https://github.com/AREIVAN",
  },
};

export function validateAreivanLandingData() {
  const errors = [];
  const requiredProjects = {
    TypeLearn: { status: "Live", href: "https://typelearn.areivan.com" },
    "Apex Ride": { status: "In development", href: "https://apexride.areivan.com" },
    "Torneos Dashboard": { status: "Prototype", href: "https://torneos.areivan.com" },
  };

  if (projects.length !== 3) {
    errors.push("Expected exactly 3 projects: Apex Ride, TypeLearn and Torneos Dashboard.");
  }

  for (const [name, expected] of Object.entries(requiredProjects)) {
    const project = projects.find((item) => item.name === name);

    if (!project) {
      errors.push(`Missing required project ${name}.`);
    } else if (project.status !== expected.status || project.href !== expected.href) {
      errors.push(`${name} must keep status ${expected.status} and URL ${expected.href}.`);
    }
  }

  for (const project of projects) {
    if (!project.name || !project.description || !project.href) {
      errors.push(`Project ${project.name || "without name"} is missing required content.`);
    }

    if (!project.href.startsWith("https://")) {
      errors.push(`Project ${project.name} must use an https URL.`);
    }

    if (!Array.isArray(project.tags) || project.tags.length < 3) {
      errors.push(`Project ${project.name} must include at least 3 tags.`);
    }

    if (typeof project.icon !== "function") {
      errors.push(`Project ${project.name} must include a valid icon component.`);
    }
  }

  if (capabilities.length !== 4) {
    errors.push("Expected exactly 4 capability cards.");
  }

  return {
    passed: errors.length === 0,
    errors,
  };
}

function ButtonLink({ href = "#", variant = "primary", children }) {
  const isExternal = href.startsWith("http");
  const baseClass = "inline-flex min-h-12 items-center justify-center rounded-2xl px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
  const variants = {
    primary: "bg-slate-950 text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800 hover:shadow-xl hover:shadow-sky-500/15",
    secondary: "border border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50",
    inverted: "bg-white text-slate-950 shadow-lg shadow-black/20 hover:bg-slate-100",
    ghostDark: "border border-white/20 bg-transparent text-white hover:bg-white/10",
  };

  return (
    <a href={href} className={`${baseClass} ${variants[variant]}`} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
}

function ProjectIcon({ icon: Icon, className = "" }) {
  return <Icon className={className} />;
}

function ProjectPreviewModal({ project, onClose }) {
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
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.2, 0, 0, 1] }}
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
            <h2 id={titleId} className="text-4xl font-black tracking-tight md:text-5xl">{project.name}</h2>
            <p id={descriptionId} className="mt-5 text-lg leading-8 text-slate-300">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-300">{tag}</span>
              ))}
            </div>

            <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
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
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">Visual Preview</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-6 flex items-center justify-between rounded-2xl bg-black/20 p-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-300">{project.name}</p>
                    <h3 className="mt-2 text-2xl font-black">{project.mockup}</h3>
                  </div>
                  <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300 sm:flex">
                    <ProjectIcon icon={project.icon} className="h-7 w-7" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-sky-400/20 p-4">
                      <div className="mb-8 h-2 w-12 rounded-full bg-sky-200/70" />
                      <div className="h-8 rounded-xl bg-white/10" />
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="mb-8 h-2 w-12 rounded-full bg-white/20" />
                      <div className="h-8 rounded-xl bg-white/10" />
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="mb-8 h-2 w-12 rounded-full bg-white/20" />
                      <div className="h-8 rounded-xl bg-white/10" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="h-3 w-32 rounded-full bg-sky-300/50" />
                      <div className="h-3 w-16 rounded-full bg-white/10" />
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="h-20 rounded-xl bg-white/10 md:h-28" />
                      <div className="h-16 self-end rounded-xl bg-white/10 md:h-20" />
                      <div className="h-24 rounded-xl bg-sky-400/25 md:h-36" />
                      <div className="h-20 self-end rounded-xl bg-white/10 md:h-24" />
                      <div className="h-24 rounded-xl bg-white/10 md:h-32" />
                      <div className="h-14 self-end rounded-xl bg-sky-400/20 md:h-16" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="mb-3 h-3 w-24 rounded-full bg-white/20" />
                      <div className="space-y-2">
                        <div className="h-3 rounded-full bg-white/10" />
                        <div className="h-3 w-4/5 rounded-full bg-white/10" />
                        <div className="h-3 w-3/5 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="mb-3 h-3 w-24 rounded-full bg-white/20" />
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-12 rounded-xl bg-white/10" />
                        <div className="h-12 rounded-xl bg-sky-400/20" />
                        <div className="h-12 rounded-xl bg-white/10" />
                        <div className="h-12 rounded-xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AreivanLandingPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const heroMotion = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
  const panelMotion = shouldReduceMotion ? {} : { initial: { opacity: 0, scale: 0.96, y: 24 }, animate: { opacity: 1, scale: 1, y: 0 } };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_36%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="group flex min-h-11 items-center gap-3 rounded-2xl transition duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:scale-100" aria-label="AREIVAN home">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black tracking-tight text-white shadow-lg shadow-slate-900/20 transition duration-300 group-hover:-rotate-3 group-hover:shadow-sky-500/20 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
              A
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.24em] text-slate-950">AREIVAN</p>
              <p className="text-xs text-slate-500">Build. Automate. Learn.</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#projects" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Projects</a>
            <a href="#capabilities" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Capabilities</a>
            <a href="#contact" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-20">
          <motion.div
            {...heroMotion}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          >

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
              I build software for learning, mobility and robotics.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              AREIVAN is my personal product lab where I build web apps, robotics tools, learning systems and industrial dashboards.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects">
                View projects
                <IconArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="https://github.com/AREIVAN" variant="secondary">
                <IconGithub className="mr-2 h-4 w-4" />
                GitHub profile
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            id="projects"
            {...panelMotion}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.2, 0, 0, 1] }}
            className="relative scroll-mt-8"
          >
            <div className="absolute -inset-10 rounded-[3rem] bg-sky-400/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-sky-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">AREIVAN OS</p>
                    <p className="mt-1 text-lg font-bold">Project Command Center</p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">Live</div>
                </div>

                <div className="grid gap-3">
                  {projects.map((project) => (
                    <button
                      key={project.name}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group w-full rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.09] hover:shadow-lg hover:shadow-sky-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                      aria-label={`Preview ${project.name}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300 transition duration-300 group-hover:scale-110 group-hover:bg-sky-400/25">
                          <ProjectIcon icon={project.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{project.name}</h3>
                          <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-300">{project.description}</p>
                          <div className="mt-3 inline-flex rounded-full bg-sky-400/10 px-2.5 py-1 text-xs font-semibold text-sky-200">{project.status}</div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">{tag}</span>
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="now-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">What I'm building now</p>
            <h2 id="now-heading" className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Useful products at the edge of software and machines.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              AREIVAN exists to turn practical problems in learning, mobility and robotics into products that feel fast, clear and ready to grow.
            </p>
          </div>

          <div className="grid gap-4">
            {activeWork.map((item, index) => (
              <article key={item} className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="approach-heading">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">How I build products</p>
            <h2 id="approach-heading" className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Small scope, strong fundamentals, polished execution.</h2>
            <div className="mt-8 grid gap-4">
              {approach.map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm" aria-labelledby="stack-heading">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">Tech stack</p>
            <h3 id="stack-heading" className="mt-4 text-3xl font-black tracking-tight text-slate-950">Tools chosen for speed and clarity.</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm">{item}</span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-slate-950 p-5 text-white">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Roadmap</p>
              <div className="mt-5 space-y-4">
                {roadmap.map((item) => (
                  <div key={item.label} className="border-l border-sky-300/30 pl-4">
                    <p className="text-sm font-black text-sky-200">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="capabilities" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">Capabilities</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Built around real technical problems.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                AREIVAN connects product design, frontend engineering, robotics logic, dashboards and AI-assisted workflows.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <article key={capability.title} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-110 group-hover:bg-sky-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                    <ProjectIcon icon={capability.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{capability.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 transition duration-500 hover:-translate-y-1 hover:shadow-sky-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">AREIVAN</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Built by Areivan. Designed for products that actually work.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Explore the ecosystem, review the code, or connect to collaborate on software, robotics and industrial tools.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="mailto:contacto@areivan.com" variant="inverted">
                Contact me
                <IconArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="https://github.com/AREIVAN" variant="ghostDark">
                <IconGithub className="mr-2 h-4 w-4" />
                GitHub
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black tracking-tight text-slate-950">Built by Areivan</p>
            <p className="mt-1">Robotics engineering student</p>
          </div>
          <p className="max-w-xl leading-6 md:text-right">Focused on automation, industrial systems and software products.</p>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject ? <ProjectPreviewModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>
    </main>
  );
}

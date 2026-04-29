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

function IconWhatsApp({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.298-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.66-1.595-1.075-2.165-.4-.567-1.02-.685-1.37-.753-.348-.067-1.596.024-2.275.403-.679.378-1.074.893-1.123 1.11-.05.218.05.522.15.673l.448.448c.1.099.222.224.35.298.575.33 1.175.33 1.575.198.397-.132 1.59-.616 1.937-1.77.338-1.124.338-2.185.275-2.288-.062-.103-.223-.149-.447-.272l-.521-.348c-.074-.05-.148-.099-.223-.149-.099-.05-.198-.05-.298-.05-.248 0-.496.099-.672.298-.173.198-.595.67-.595 1.448s.595 1.683.595 1.683.347.298.397.397c.099.099.223.248.372.348.173.124.348.173.546.099.198-.074.771-.297 1.264-.843.492-.546.843-1.124.919-1.316.075-.198.025-.397-.025-.521-.05-.124-.074-.272.173-.523l.521-.521c.198-.198.347-.347.397-.52.05-.173.025-.348-.025-.496l-.173-.595c-.074-.173-.174-.347-.348-.521zM12 2.94c.84 0 1.667.22 2.404.645l-1.102 1.058c-.104-.199-.298-.497-.497-.596l1.06-1.107c.422-.397.922-.645 1.448-.645.552 0 1.074.214 1.462.602l.602.602c.388.388.602.91.602 1.462 0 .526-.248 1.026-.645 1.448l-1.107 1.06c-.099-.199-.397-.497-.596-.497l1.058-1.102c.425.737.645 1.564.645 2.404 0 .84-.22 1.667-.645 2.404l-1.058 1.102c.199.104.497.298.596.497l-1.06 1.107c-.397.422-.897.645-1.448.645-.552 0-1.074-.214-1.462-.602l-.602-.602c-.388-.388-.602-.91-.602-1.462 0-.526.248-1.026.645-1.448l1.107-1.06c.099.199.397.497.596.497l-1.058 1.102c-.425-.737-.645-1.564-.645-2.404z" fill="currentColor" />
      <path d="M8.882 13c-.577 0-1.124-.15-1.613-.441l-.116.115c.878.878 2.012 1.326 3.195 1.326.02 0 .04 0 .06-.001 1.183 0 2.317-.448 3.195-1.326l-.115-.115c-.49.29-1.037.44-1.614.44-.013 0-.026-.001-.039-.001-1.183 0-2.317-.448-3.195-1.326l-.116.115c.878-.878 1.592-1.946 1.916-3.109.325-1.163.325-2.394 0-3.557l-.116-.116c-.49.29-1.037.44-1.614.44-.013 0-.026-.001-.039-.001-1.183 0-2.317-.448-3.195-1.326l-.116.115c.878.878 2.012 1.326 3.195 1.326.02 0 .04 0 .06-.001 1.183 0 2.317-.448 3.195-1.326z" fill="currentColor" />
    </svg>
  );
}

function IconLinkedIn({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 11v6M7 7v.01M11 11v6m3-6v3a3 3 0 0 0-3-3v-1a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
  {
    name: "Paro Cero",
    status: "Industrial platform",
    description: "Industrial maintenance platform for machine checklists, reports, downtime control and operational workflows.",
    icon: IconCpu,
    href: "https://paro-cero-dev.netlify.app/",
    tags: ["Maintenance", "Industry", "SaaS"],
    mockup: "Maintenance workflows · Checklists · Downtime control",
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

const roboticsProjects = [
  {
    name: "Autonomous Farm Robot",
    status: "Research / In development",
    description: "Modular agricultural robot platform for perception, monitoring and future field tasks.",
    tags: ["Robotics", "Agriculture", "Perception", "Autonomous Systems"],
    build: [
      "Problem: field tasks need modular and adaptable robotic platforms.",
      "Hardware: mobile robot base, sensors, camera/LiDAR placeholder, battery system.",
      "Software: perception, navigation planning, modular task logic.",
      "Current state: research and system architecture.",
      "Next steps: prototype base, sensor integration and field testing.",
    ],
  },
  {
    name: "Mini Sumo Robot",
    status: "Hardware project",
    description: "Compact competition robot using ESP32, sensors, motor drivers and custom PCB design.",
    tags: ["ESP32", "PCB", "Sensors", "Competition"],
    build: [
      "Problem: fast autonomous decision-making in a limited competition arena.",
      "Hardware: ESP32, motor drivers, DC motors, edge sensors, opponent sensors.",
      "Software: sensor reading, attack logic, PWM motor control.",
      "Design: custom PCB planned/designed in KiCad.",
      "Next steps: tuning, chassis optimization and testing.",
    ],
  },
  {
    name: "Industrial Sensor Module",
    status: "Concept / In development",
    description: "Sensor system for monitoring motors with temperature, vibration, current and location data.",
    tags: ["Sensors", "Maintenance", "Industry", "IoT"],
    build: [
      "Problem: industrial motors need low-cost condition monitoring.",
      "Hardware: temperature sensor, vibration sensor, current sensor, ESP32.",
      "Software: data acquisition, dashboard connection, alerts.",
      "Use case: predictive maintenance for industrial environments.",
      "Next steps: prototype sensor node and connect to dashboard.",
    ],
  },
  {
    name: "ESP32 Control Boards",
    status: "Hardware experiments",
    description: "Embedded control boards for robotics, actuators, sensors and automation workflows.",
    tags: ["ESP32", "KiCad", "Automation", "Embedded"],
    build: [
      "Problem: robotics projects need reusable control electronics.",
      "Hardware: ESP32-based control boards, motor outputs, sensor inputs and power stages.",
      "Software: firmware for control, communication and testing.",
      "Design: schematic and PCB layout in KiCad.",
      "Next steps: manufacturing, soldering and validation.",
    ],
  },
];

const roboticsBuildSteps = [
  "Define the problem",
  "Design the electronics",
  "Build the software logic",
  "Test, iterate and document",
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
    "Paro Cero": { status: "Industrial platform", href: "https://paro-cero-dev.netlify.app/" },
  };

  if (projects.length !== 4) {
    errors.push("Expected exactly 4 projects: Apex Ride, TypeLearn, Torneos Dashboard and Paro Cero.");
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

function SiteNav() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="/" className="group flex min-h-11 items-center gap-3 rounded-2xl transition duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:scale-100" aria-label="AREIVAN home">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black tracking-tight text-white shadow-lg shadow-slate-900/20 transition duration-300 group-hover:-rotate-3 group-hover:shadow-sky-500/20 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
          A
        </div>
        <div>
          <p className="text-sm font-black tracking-[0.24em] text-slate-950">AREIVAN</p>
          <p className="text-xs text-slate-500">Build. Automate. Learn.</p>
        </div>
      </a>

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        <a href="/#projects" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Projects</a>
        <a href="/#capabilities" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Capabilities</a>
        <a href="/robotics" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Robotics</a>
        <a href="/#contact" className="rounded-lg transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0">Contact</a>
      </div>
    </nav>
  );
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
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">Live Preview</span>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between rounded-2xl bg-black/20 p-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-300">{project.name}</p>
                    <h3 className="mt-2 text-2xl font-black">{project.mockup}</h3>
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

function ContactModal({ onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const contactMethods = [
    { label: "Email", value: "ivanangeles0311@icloud.com", icon: "email", href: "mailto:ivanangeles0311@icloud.com" },
    { label: "WhatsApp", value: "+52 55 3782 8350", icon: "whatsapp", href: "https://wa.me/525537828350" },
    { label: "LinkedIn", value: "areivan", icon: "linkedin", href: "https://www.linkedin.com/in/areivan/" },
    { label: "GitHub", value: "AREIVAN", icon: "github", href: "https://github.com/AREIVAN" },
    { label: "Website", value: "areivan.com", icon: "globe", href: "https://www.areivan.com" },
    { label: "Location", value: "Mexico", icon: "map", href: null },
  ];

  useEffect(() => {
    if (!onClose) return undefined;

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
  }, [onClose]);

  const actionButtons = [
    { label: "Send email", href: "mailto:ivanangeles0311@icloud.com" },
    { label: "WhatsApp", href: "https://wa.me/525537828350" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/areivan/" },
  ];

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
        className="relative my-auto w-full max-w-lg overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/40 outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
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
          aria-label="Close contact modal"
        >
          ×
        </button>

        <div className="p-8">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-400/15 text-sky-300">
            <span className="text-2xl">✉</span>
          </div>

          <h2 id="contact-title" className="text-3xl font-black tracking-tight">Contact Areivan</h2>
          <p className="mt-4 text-lg leading-7 text-slate-300">
            Let's connect around software, robotics, automation or product ideas.
          </p>

          <div className="mt-8 space-y-4">
            {contactMethods.map((method) => (
              method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-slate-300">
                    {method.icon === "email" && <IconArrowRight className="h-4 w-4" />}
                    {method.icon === "whatsapp" && <IconWhatsApp className="h-4 w-4" />}
                    {method.icon === "linkedin" && <IconLinkedIn className="h-4 w-4" />}
                    {method.icon === "github" && <IconGithub className="h-4 w-4" />}
                    {method.icon === "globe" && <IconExternal className="h-4 w-4" />}
                    {method.icon === "map" && <IconMap className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{method.label}</p>
                    <p className="mt-1 font-medium">{method.value}</p>
                  </div>
                </a>
              ) : (
                <div key={method.label} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-slate-300">
                    {method.icon === "map" && <IconMap className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{method.label}</p>
                    <p className="mt-1 font-medium">{method.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {actionButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target={button.href.startsWith("http") ? "_blank" : undefined}
                rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function RoboticsPage() {
  const [selectedContact, setSelectedContact] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const heroMotion = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.2),_transparent_36%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
        <SiteNav />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-20">
          <motion.div
            {...heroMotion}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="max-w-4xl"
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">Robotics by Areivan</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-7xl">
              Robotics projects, embedded systems and automation experiments.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              A dedicated space for documenting robots, control boards, embedded systems and automation projects — from idea to hardware, software and testing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="robotics-projects-heading">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">Project lab</p>
          <h2 id="robotics-projects-heading" className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Builds documented from problem to test bench.</h2>
        </div>

        <div className="grid gap-6">
          {roboticsProjects.map((project, index) => {
            const buildId = project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

            return (
              <article key={project.name} id={buildId} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="p-6 md:p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-110 group-hover:bg-sky-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                      <IconCpu className="h-6 w-6" />
                    </div>
                    <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                      {project.status}
                    </div>
                    <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-950">{project.name}</h3>
                    <p className="mt-4 text-lg leading-8 text-slate-600">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">{tag}</span>
                      ))}
                    </div>
                    <a href={`#${buildId}-process`} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-sky-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                      View build process
                      <IconArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  <div id={`${buildId}-process`} className="bg-slate-950 p-6 text-white md:p-8">
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Build process · 0{index + 1}</p>
                    <div className="mt-6 space-y-4">
                      {project.build.map((item) => {
                        const [label, detail] = item.split(": ");

                        return (
                          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:border-sky-300/40 hover:bg-white/[0.09]">
                            <p className="text-sm font-black text-sky-200">{label}</p>
                            <p className="mt-1 leading-7 text-slate-300">{detail}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50" aria-labelledby="robotics-process-heading">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">How I build robotics projects</p>
              <h2 id="robotics-process-heading" className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Robotics needs process, not magic.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The work moves from a real-world constraint to electronics, firmware, integration and testing. That discipline matters — hardware punishes shortcuts FAST.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {roboticsBuildSteps.map((step, index) => (
                <article key={step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-700">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 transition duration-500 hover:-translate-y-1 hover:shadow-sky-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">AREIVAN robotics lab</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Interested in robotics or automation?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I’m building robotics and industrial software projects around real-world workflows.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => setSelectedContact(true)}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Contact me
                <IconArrowRight className="ml-2 h-4 w-4" />
              </button>
              <ButtonLink href="https://github.com/AREIVAN" variant="ghostDark">
                <IconGithub className="mr-2 h-4 w-4" />
                View GitHub
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
        {selectedContact ? <ContactModal onClose={() => setSelectedContact(false)} /> : null}
      </AnimatePresence>
    </main>
  );
}

export default function AreivanLandingPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedContact, setSelectedContact] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const heroMotion = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
  const panelMotion = shouldReduceMotion ? {} : { initial: { opacity: 0, scale: 0.96, y: 24 }, animate: { opacity: 1, scale: 1, y: 0 } };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_36%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

        <SiteNav />

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
              <button
                type="button"
                onClick={() => setSelectedContact(true)}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Contact me
                <IconArrowRight className="ml-2 h-4 w-4" />
              </button>
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
        {selectedContact ? <ContactModal onClose={() => setSelectedContact(false)} /> : null}
      </AnimatePresence>
    </main>
  );
}

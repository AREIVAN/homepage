import {
  IconBike,
  IconBrain,
  IconChart,
  IconCpu,
  IconMap,
  IconSpark,
  IconTrophy,
} from "../components/icons/landing-icons.jsx";


export const pageCopy = {
  homeHero: {
    title: "I build software for learning, mobility and robotics.",
    description:
      "AREIVAN is my personal product lab where I build web apps, robotics tools, learning systems and industrial dashboards.",
    primaryCta: "View projects",
    secondaryCta: "GitHub profile",
    commandEyebrow: "AREIVAN OS",
    commandTitle: "Project Command Center",
    commandStatus: "Live",
  },
  now: {
    eyebrow: "What I'm building now",
    title: "Useful products at the edge of software and machines.",
    description:
      "AREIVAN exists to turn practical problems in learning, mobility and robotics into products that feel fast, clear and ready to grow.",
  },
  approach: {
    eyebrow: "How I build products",
    title: "Small scope, strong fundamentals, polished execution.",
    stackEyebrow: "Tech stack",
    stackTitle: "Tools chosen for speed and clarity.",
    roadmapEyebrow: "Roadmap",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Built around real technical problems.",
    description:
      "AREIVAN connects product design, frontend engineering, robotics logic, dashboards and AI-assisted workflows.",
  },
  contact: {
    eyebrow: "AREIVAN",
    title: "Built by Areivan. Designed for products that actually work.",
    description:
      "Explore the ecosystem, review the code, or connect to collaborate on software, robotics and industrial tools.",
    githubLabel: "GitHub",
  },
  roboticsHero: {
    eyebrow: "Robotics by Areivan",
    title: "Robotics projects, embedded systems and automation experiments.",
    description:
      "A dedicated space for documenting robots, control boards, embedded systems and automation projects — from idea to hardware, software and testing.",
  },
  roboticsProjects: {
    eyebrow: "Project lab",
    title: "Builds documented from problem to test bench.",
    processCta: "View build process",
    processLabel: "Build process",
  },
  roboticsProcess: {
    eyebrow: "How I build robotics projects",
    title: "Robotics needs process, not magic.",
    description:
      "The work moves from a real-world constraint to electronics, firmware, integration and testing. That discipline matters — hardware punishes shortcuts FAST.",
  },
  roboticsContact: {
    eyebrow: "AREIVAN robotics lab",
    title: "Interested in robotics or automation?",
    description:
      "I’m building robotics and industrial software projects around real-world workflows.",
    githubLabel: "View GitHub",
  },
  footer: {
    brand: "Built by Areivan",
    subtitle: "Robotics engineering student",
    description: "Focused on automation, industrial systems and software products.",
  },
};

export const projects = [
  {
    name: "Apex Ride",
    status: "In development",
    description:
      "GPS routes, motorcycle tracking, speed heatmaps and segment-based ride analysis.",
    icon: IconBike,
    href: "https://apexride.areivan.com",
    tags: ["GPS", "Maps", "Mobility"],
    mockup: "Route tracking · Speed heatmap · Live segments",
  },
  {
    name: "TypeLearn",
    status: "Live",
    description:
      "English typing practice with verb trainer, PDF practice mode, progress tracking and AI-generated exercises.",
    icon: IconBrain,
    href: "https://typelearn.areivan.com",
    tags: ["Learning", "AI", "English"],
    mockup: "Verb trainer · PDF practice · Weak words",
  },
  {
    name: "Torneos Dashboard",
    status: "Prototype",
    description:
      "Robotics tournament management with robot database, event calendar and competition dashboard.",
    icon: IconTrophy,
    href: "https://torneos.areivan.com",
    tags: ["Robotics", "Events", "Dashboard"],
    mockup: "Robot database · Events · Brackets",
  },
  {
    name: "Paro Cero",
    status: "Industrial platform",
    description:
      "Industrial maintenance platform for machine checklists, reports, downtime control and operational workflows.",
    icon: IconCpu,
    href: "https://paro-cero-dev.netlify.app/",
    tags: ["Maintenance", "Industry", "SaaS"],
    mockup: "Maintenance workflows · Checklists · Downtime control",
  },
];

export const capabilities = [
  {
    title: "Software Products",
    description:
      "Web applications built around real workflows, dashboards and useful data.",
    icon: IconChart,
  },
  {
    title: "Robotics & Hardware",
    description:
      "Projects connected with robots, sensors, embedded systems and industrial tools.",
    icon: IconCpu,
  },
  {
    title: "Maps & Motion",
    description:
      "Route tracking, segments, GPS logic and movement-based interfaces.",
    icon: IconMap,
  },
  {
    title: "AI-Assisted Learning",
    description:
      "Practice tools that adapt content, vocabulary and exercises to the user.",
    icon: IconSpark,
  },
];

export const activeWork = [
  "Shipping learning tools that turn practice sessions into measurable progress.",
  "Exploring mobility interfaces for routes, speed patterns and ride intelligence.",
  "Designing robotics and industrial dashboards that make complex systems easier to operate.",
];

export const approach = [
  {
    title: "Start with the workflow",
    description:
      "I map the real job first, then design the smallest product surface that makes it faster, clearer or safer.",
  },
  {
    title: "Prototype with production taste",
    description:
      "Interfaces stay simple, but the details matter: hierarchy, speed, empty states, focus states and responsive behavior.",
  },
  {
    title: "Connect software to the physical world",
    description:
      "Robotics, mobility and industrial systems need dashboards that respect both data and operators.",
  },
];

export const techStack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Maps",
  "AI workflows",
  "Robotics",
  "Industrial dashboards",
];

export const roadmap = [
  {
    label: "Now",
    text: "Polish the AREIVAN product ecosystem and keep the public projects useful.",
  },
  {
    label: "Next",
    text: "Expand route analytics, learning feedback loops and tournament operations.",
  },
  {
    label: "Later",
    text: "Bring more robotics and automation tooling into clean web interfaces.",
  },
];

export const roboticsProjects = [
  {
    name: "Autonomous Farm Robot",
    status: "Research / In development",
    description:
      "Modular agricultural robot platform for perception, monitoring and future field tasks.",
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
    description:
      "Compact competition robot using ESP32, sensors, motor drivers and custom PCB design.",
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
    description:
      "Sensor system for monitoring motors with temperature, vibration, current and location data.",
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
    description:
      "Embedded control boards for robotics, actuators, sensors and automation workflows.",
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

export const roboticsBuildSteps = [
  "Define the problem",
  "Design the electronics",
  "Build the software logic",
  "Test, iterate and document",
];

export const areivanLandingMetadata = {
  title: "AREIVAN | Software for learning, mobility and robotics",
  description:
    "AREIVAN is a personal product lab for web apps, robotics tools, learning systems and industrial dashboards.",
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
    "Apex Ride": {
      status: "In development",
      href: "https://apexride.areivan.com",
    },
    "Torneos Dashboard": {
      status: "Prototype",
      href: "https://torneos.areivan.com",
    },
    "Paro Cero": {
      status: "Industrial platform",
      href: "https://paro-cero-dev.netlify.app/",
    },
  };

  if (projects.length !== 4) {
    errors.push(
      "Expected exactly 4 projects: Apex Ride, TypeLearn, Torneos Dashboard and Paro Cero.",
    );
  }

  for (const [name, expected] of Object.entries(requiredProjects)) {
    const project = projects.find((item) => item.name === name);

    if (!project) {
      errors.push(`Missing required project ${name}.`);
    } else if (
      project.status !== expected.status ||
      project.href !== expected.href
    ) {
      errors.push(
        `${name} must keep status ${expected.status} and URL ${expected.href}.`,
      );
    }
  }

  for (const project of projects) {
    if (!project.name || !project.description || !project.href) {
      errors.push(
        `Project ${project.name || "without name"} is missing required content.`,
      );
    }

    if (!project.href.startsWith("https://")) {
      errors.push(`Project ${project.name} must use an https URL.`);
    }

    if (!Array.isArray(project.tags) || project.tags.length < 3) {
      errors.push(`Project ${project.name} must include at least 3 tags.`);
    }

    if (typeof project.icon !== "function") {
      errors.push(
        `Project ${project.name} must include a valid icon component.`,
      );
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

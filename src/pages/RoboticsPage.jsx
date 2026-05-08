import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { ContactModal } from "../components/modals/index.js";
import {
  RoboticsHeroSection,
  RoboticsProcessSection,
  RoboticsProjectsSection,
} from "../sections/robotics/index.js";
import { pageCopy } from "../data/landing-data.jsx";
import { ContactCtaSection, SiteFooter } from "../sections/shared/index.js";

export default function RoboticsPage() {
  const [selectedContact, setSelectedContact] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const heroMotion = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <RoboticsHeroSection heroMotion={heroMotion} />
      <RoboticsProjectsSection />
      <RoboticsProcessSection />
      <ContactCtaSection
        eyebrow={pageCopy.roboticsContact.eyebrow}
        title={pageCopy.roboticsContact.title}
        description={pageCopy.roboticsContact.description}
        githubLabel={pageCopy.roboticsContact.githubLabel}
        onContactClick={() => setSelectedContact(true)}
      />
      <SiteFooter darkGradient={false} />

      <AnimatePresence>
        {selectedContact ? (
          <ContactModal onClose={() => setSelectedContact(false)} />
        ) : null}
      </AnimatePresence>
    </main>
  );
}

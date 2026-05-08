import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import ContactModal from "../components/modals/ContactModal.jsx";
import RoboticsHeroSection from "../sections/robotics/RoboticsHeroSection.jsx";
import RoboticsProcessSection from "../sections/robotics/RoboticsProcessSection.jsx";
import RoboticsProjectsSection from "../sections/robotics/RoboticsProjectsSection.jsx";
import ContactCtaSection from "../sections/shared/ContactCtaSection.jsx";
import SiteFooter from "../sections/shared/SiteFooter.jsx";

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
        eyebrow="AREIVAN robotics lab"
        title="Interested in robotics or automation?"
        description="I’m building robotics and industrial software projects around real-world workflows."
        githubLabel="View GitHub"
        onContactClick={() => setSelectedContact(true)}
      />
      <SiteFooter />

      <AnimatePresence>
        {selectedContact ? (
          <ContactModal onClose={() => setSelectedContact(false)} />
        ) : null}
      </AnimatePresence>
    </main>
  );
}

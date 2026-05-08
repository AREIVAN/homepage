import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ContactModal,
  ProjectPreviewModal,
} from "../components/modals/index.js";
import {
  ApproachSection,
  CapabilitiesSection,
  HomeHeroSection,
  NowSection,
} from "../sections/home/index.js";
import { ContactCtaSection, SiteFooter } from "../sections/shared/index.js";

export default function AreivanLandingPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedContact, setSelectedContact] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const heroMotion = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
  const panelMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.96, y: 24 },
        animate: { opacity: 1, scale: 1, y: 0 },
      };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <HomeHeroSection
        heroMotion={heroMotion}
        panelMotion={panelMotion}
        shouldReduceMotion={shouldReduceMotion}
        onProjectSelect={setSelectedProject}
      />
      <NowSection />
      <ApproachSection />
      <CapabilitiesSection />
      <ContactCtaSection onContactClick={() => setSelectedContact(true)} />
      <SiteFooter />

      <AnimatePresence>
        {selectedProject ? (
          <ProjectPreviewModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
        {selectedContact ? (
          <ContactModal onClose={() => setSelectedContact(false)} />
        ) : null}
      </AnimatePresence>
    </main>
  );
}

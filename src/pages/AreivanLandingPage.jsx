import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import ProjectPreviewModal from "../components/modals/ProjectPreviewModal.jsx";
import ContactModal from "../components/modals/ContactModal.jsx";
import ApproachSection from "../sections/home/ApproachSection.jsx";
import CapabilitiesSection from "../sections/home/CapabilitiesSection.jsx";
import HomeHeroSection from "../sections/home/HomeHeroSection.jsx";
import NowSection from "../sections/home/NowSection.jsx";
import ContactCtaSection from "../sections/shared/ContactCtaSection.jsx";
import SiteFooter from "../sections/shared/SiteFooter.jsx";

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

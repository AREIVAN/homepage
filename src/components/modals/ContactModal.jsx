import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IconArrowRight, IconExternal, IconGithub, IconLinkedIn, IconMap, IconWhatsApp } from "../icons/landing-icons.jsx";

export default function ContactModal({ onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const contactMethods = [
    {
      label: "Email",
      value: "ivanangeles0311@icloud.com",
      icon: "email",
      href: "mailto:ivanangeles0311@icloud.com",
    },
    {
      label: "WhatsApp",
      value: "+52 55 3782 8350",
      icon: "whatsapp",
      href: "https://wa.me/525537828350",
    },
    {
      label: "LinkedIn",
      value: "areivan",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/areivan/",
    },
    {
      label: "GitHub",
      value: "AREIVAN",
      icon: "github",
      href: "https://github.com/AREIVAN",
    },
    {
      label: "Website",
      value: "areivan.com",
      icon: "globe",
      href: "https://www.areivan.com",
    },
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
          aria-label="Close contact modal"
        >
          ×
        </button>

        <div className="p-8">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-400/15 text-sky-300">
            <span className="text-2xl">✉</span>
          </div>

          <h2 id="contact-title" className="text-3xl font-black tracking-tight">
            Contact Areivan
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-300">
            Let's connect around software, robotics, automation or product
            ideas.
          </p>

          <div className="mt-8 space-y-4">
            {contactMethods.map((method) =>
              method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-slate-300">
                    {method.icon === "email" && (
                      <IconArrowRight className="h-4 w-4" />
                    )}
                    {method.icon === "whatsapp" && (
                      <IconWhatsApp className="h-4 w-4" />
                    )}
                    {method.icon === "linkedin" && (
                      <IconLinkedIn className="h-4 w-4" />
                    )}
                    {method.icon === "github" && (
                      <IconGithub className="h-4 w-4" />
                    )}
                    {method.icon === "globe" && (
                      <IconExternal className="h-4 w-4" />
                    )}
                    {method.icon === "map" && <IconMap className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                      {method.label}
                    </p>
                    <p className="mt-1 font-medium">{method.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={method.label}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-slate-300">
                    {method.icon === "map" && <IconMap className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                      {method.label}
                    </p>
                    <p className="mt-1 font-medium">{method.value}</p>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {actionButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target={button.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  button.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
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

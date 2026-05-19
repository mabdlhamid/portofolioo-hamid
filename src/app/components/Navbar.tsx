"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../locales/translations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);

  const { language } = useLanguage();
  const t = translations[language];

  /* =========================
     SCROLL + MORPH CONTROL
  ========================== */
  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      setIsScrolled(current > 20);
      setScrollY(current);

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================
     SECTION OBSERVER
  ========================== */
  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            window.history.replaceState(
              null,
              "",
              id === "hero" ? "/" : `/#${id}`
            );
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((s) => observer.observe(s!));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      const id = href.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }

    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.navbarAbout, href: "#about" },
    { name: t.navbarSkills, href: "#skills" },
    { name: t.navbarProjects, href: "#projects" },
    { name: t.navbarExperience, href: "#experience" },
  ];

  const activeIndex = navLinks.findIndex(
    (l) => l.href.replace("#", "") === activeSection
  );

  /* =========================
     UI
  ========================== */
  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6">
      {/* ================= NAVBAR ================= */}
      <div
        className={`
          max-w-6xl mx-auto flex items-center justify-between

          relative overflow-hidden transform-gpu

          transition-all duration-700 ease-out

          ${
            isScrolled
              ? `
                scale-[0.98]

                bg-white/70 dark:bg-slate-900/40
                backdrop-blur-3xl backdrop-saturate-150

                border border-white/20 dark:border-white/10

                shadow-[0_10px_50px_rgba(0,0,0,0.15)]

                rounded-2xl px-6 py-3
              `
              : "bg-transparent py-5"
          }
        `}
        style={{
          backdropFilter: isScrolled
            ? `blur(${Math.min(28, 10 + scrollY / 60)}px)`
            : "blur(0px)",
        }}
      >
        {/* LIGHT REFLECTION LAYER */}
        {isScrolled && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-60" />
        )}

        {/* BRAND */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="z-10 text-xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          HAMID<span className="text-cyan-400">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 z-10 relative">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  relative group
                  text-[12px] font-medium tracking-wide

                  text-slate-500 dark:text-slate-300
                  hover:text-slate-900 dark:hover:text-white

                  transition
                "
              >
                {link.name}

                {/* hover underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />

                {/* active underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-400" />
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="
              px-5 py-2 rounded-full

              text-[12px] font-medium

              bg-black dark:bg-white
              text-white dark:text-black

              hover:scale-[1.03]
              active:scale-[0.98]

              transition
            "
          >
            {t.navbarContact}
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden z-10 text-slate-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* ================= MOBILE SHEET ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
            />

            {/* SHEET */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
              }}
              className="
                fixed bottom-0 left-0 right-0
                h-[85%]

                bg-white/70 dark:bg-slate-900/50
                backdrop-blur-3xl

                border-t border-white/20 dark:border-white/10

                rounded-t-3xl

                shadow-2xl

                z-50

                p-6
                flex flex-col
              "
            >
              {/* HANDLE */}
              <div className="w-12 h-1.5 bg-black/20 dark:bg-white/20 rounded-full mx-auto mb-6" />

              {/* HEADER */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  Menu
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    activeSection === link.href.replace("#", "");

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`
                        px-4 py-3 rounded-2xl
                        text-sm font-medium

                        flex items-center justify-between
                        transition

                        ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "text-slate-700 dark:text-slate-200 hover:bg-white/10"
                        }
                      `}
                    >
                      {link.name}

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6">
                <Link
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="
                    block text-center

                    py-3 rounded-2xl

                    font-semibold text-sm

                    bg-black dark:bg-white
                    text-white dark:text-black

                    active:scale-[0.98]

                    transition
                  "
                >
                  {t.navbarContact}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
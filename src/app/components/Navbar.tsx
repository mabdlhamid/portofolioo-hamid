"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = ["hero", "about", "skills", "projects", "experience", "contact"];
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActiveSection(id);

                        if (id === "hero") {
                            window.history.replaceState(null, "", "/");
                        } else {
                            window.history.replaceState(null, "", `#${id}`);
                        }
                    }
                });
            },
            {
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section!));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.replace("#", "");
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, "", href);
                setActiveSection(id);
            }
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 px-6" : "py-8 px-10"}`}>
            <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-lg border border-gray-100 shadow-sm px-8 py-3 rounded-2xl"
                    : "bg-transparent"
            }`}>

                {/* Brand — klik logo balik ke hero */}
                <Link
                    href="/"
                    onClick={(e) => handleNavClick(e, "#hero")}
                    className="text-xl font-black text-blue-900 tracking-tighter"
                >
                    HAMID<span className="text-blue-600">.</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                                activeSection === link.href.replace("#", "")
                                    ? "text-blue-900"
                                    : "text-gray-400 hover:text-blue-900"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className={`px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
                            activeSection === "contact"
                                ? "bg-blue-700 text-white shadow-blue-700/20"
                                : "bg-blue-900 text-white hover:bg-blue-800 shadow-blue-900/10"
                        }`}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-blue-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-24 left-6 right-6 bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 flex flex-col gap-6 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-lg font-bold border-b border-gray-50 pb-2 transition-colors ${
                                    activeSection === link.href.replace("#", "")
                                        ? "text-blue-600"
                                        : "text-blue-900"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className={`text-lg font-bold pb-2 transition-colors ${
                                activeSection === "contact"
                                    ? "text-blue-600"
                                    : "text-blue-900"
                            }`}
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
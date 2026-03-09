"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 px-6" : "py-8 px-10"
            }`}>
            <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 ${isScrolled
                    ? "bg-white/80 backdrop-blur-lg border border-gray-100 shadow-sm px-8 py-3 rounded-2xl"
                    : "bg-transparent"
                }`}>

                {/* Brand */}
                <Link href="/" className="text-xl font-black text-blue-900 tracking-tighter">
                    HAMID<span className="text-blue-600">.</span>
                </Link>

                {/* Desktop Links (Dibuat lebih tipis & renggang agar elegan) */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-bold text-gray-400 hover:text-blue-900 uppercase tracking-[0.2em] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-blue-900 text-white px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10 active:scale-95"
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

            {/* Mobile Menu Overlay */}
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
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-bold text-blue-900 border-b border-gray-50 pb-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
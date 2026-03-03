"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (!scrolled && offset > 80) {
                setScrolled(true);
            } else if (scrolled && offset < 40) {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 transition-colors transition-shadow duration-300 ${scrolled

                ? "bg-white shadow-lg border-b border-gray-100"
                : "bg-white/70 backdrop-blur-md"
                } `}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="font-bold text-lg text-blue-900">
                    M Abdul Hamid.
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li>
                        <a
                            href="#about"
                            className={`transition ${active === "about"
                                ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                } `}
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className={`transition ${active === "skills"
                                ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                } `}
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className={`transition ${active === "projects"
                                ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                } `}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog"
                            className="transition text-gray-700 hover:text-blue-900"
                        >
                            Insights
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className={`transition ${active === "experience"
                                ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                } `}
                        >
                            Experience
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className={`transition ${active === "contact"
                                ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                } `}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-blue-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
                        <li>
                            <a
                                href="#about" onClick={() => setIsOpen(false)}
                                className={`transition ${active === "about"
                                    ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                    } `}
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#skills" onClick={() => setIsOpen(false)}
                                className={`transition ${active === "skills"
                                    ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                    } `}
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a href="#projects" onClick={() => setIsOpen(false)}
                                className={`transition ${active === "projects"
                                    ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                    } `}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={() => setIsOpen(false)}
                                className={`transition ${active === "experience"
                                    ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                    } `}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="/blog" onClick={() => setIsOpen(false)}
                                className={`transition ${active === "blog"
                                    ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                    } `}>
                                Insights
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setIsOpen(false)}
                                className={`transition ${active === "contact"
                                    ? "text-blue-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-900" : "text-gray-700"
                                    } `}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
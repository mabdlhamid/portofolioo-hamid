"use client";

import { motion, Variants } from "framer-motion";
export default function Projects() {
    const projects = [
        {
            title: "AI Depression Classification",
            description:
                "Machine learning project using Random Forest to classify depression based on work stress factors.",
            tech: ["Next.js", "Python", "Machine Learning"],
        },
        {
            title: "Student Information System",
            description:
                "Web-based academic management system with authentication and dashboard features.",
            tech: ["Laravel", "MySQL", "Bootstrap"],
        },
        {
            title: "Weddit Story",
            description:
                "Digital wedding invitation platform with modern UI and nationwide service support.",
            tech: ["Next.js", "Tailwind", "Fullstack"],
        },
    ];

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="projects" className="py-24 bg-white px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
                    Projects
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                        >
                            <div className="h-40 bg-gray-200 rounded-xl mb-6"></div>

                            <h3 className="text-xl font-semibold text-blue-900 mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-4 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <button className="flex-1 bg-blue-900 text-white py-2 rounded-xl hover:bg-blue-800 transition">
                                    Live Demo
                                </button>
                                <button className="flex-1 border border-blue-900 text-blue-900 py-2 rounded-xl hover:bg-blue-50 transition">
                                    GitHub
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
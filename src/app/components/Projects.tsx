"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
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
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A selection of my recent works, ranging from AI applications to
                        full-stack web systems.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -12 }}
                            className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 flex flex-col"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-52 overflow-hidden bg-gray-200">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full bg-blue-900/10 flex items-center justify-center text-blue-900/20 font-bold"
                                >
                                    IMAGE PREVIEW
                                </motion.div>

                                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="bg-white p-3 rounded-full text-blue-900 hover:scale-110 transition shadow-lg">
                                        <ExternalLink size={20} />
                                    </button>
                                    <button className="bg-white p-3 rounded-full text-blue-900 hover:scale-110 transition shadow-lg">
                                        <Github size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] uppercase tracking-widest font-bold bg-white text-blue-600 border border-blue-100 px-3 py-1 rounded-lg"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 bg-blue-900 text-white text-sm font-semibold py-3 rounded-xl hover:bg-blue-800 transition-all shadow-md active:scale-95">
                                        Live Demo
                                    </button>
                                    <button className="flex-1 border border-gray-300 text-gray-700 text-sm font-semibold py-3 rounded-xl hover:bg-gray-100 transition-all active:scale-95">
                                        Source Code
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
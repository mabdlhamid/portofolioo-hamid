"use client";

import { motion, Variants } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            title: "Chairman of Information Systems Student Association",
            organization: "Universitas Sari Mulia",
            year: "2025",
            description:
                "Led organizational programs, coordinated divisions, and managed strategic planning for student development.",
        },
        {
            title: "GenRe Ambassador",
            organization: "BKKBN",
            year: "2024",
            description:
                "Promoted youth empowerment programs and contributed to community development initiatives.",
        },
        {
            title: "PKM Grant Awardee",
            organization: "Ministry of Education",
            year: "2024",
            description:
                "Successfully passed national student creativity grant program with innovative project proposal.",
        },
        {
            title: "Information Systems Student",
            organization: "Universitas Sari Mulia",
            year: "2022 - Present",
            description:
                "Focused on web development, system analysis, and AI integration research.",
        },
    ];

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3, // Jeda antar item sedikit lebih lama agar dramatis
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section id="experience" className="py-24 px-6 bg-gray-50 border-t border-gray-100 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-blue-900 mb-16 text-center"
                >
                    Experience & Leadership
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative border-l-2 border-blue-100 ml-4 md:ml-0 md:left-4 pl-8 md:pl-12 space-y-16"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group"
                        >
                            {/* Timeline Dot with Glow Effect */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-white border-4 border-blue-900 rounded-full z-10 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_0_0_rgba(30,58,138,0.2)] group-hover:shadow-[0_0_15px_rgba(30,58,138,0.5)]"></div>

                            {/* Year Tag */}
                            <span className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                                {exp.year}
                            </span>

                            <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                                {exp.title}
                            </h3>

                            <p className="text-md font-medium text-gray-500 mb-4 flex items-center gap-2">
                                <span className="w-4 h-[1px] bg-gray-300"></span>
                                {exp.organization}
                            </p>

                            <p className="text-gray-600 leading-relaxed max-w-2xl bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
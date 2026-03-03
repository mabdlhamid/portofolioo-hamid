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
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="experience" className="py-24 px-6 bg-gray-50 border-t border-gray-100">            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-16 text-center">
                Experience & Leadership
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative border-l-2 border-blue-200 pl-10 space-y-12"
            >
                {experiences.map((exp, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative">

                        {/* Timeline Dot */}
                        <div className="absolute -left-[18px] top-2 w-4 h-4 bg-blue-900 rounded-full border-4 border-gray-50"></div>
                        <h3 className="text-lg font-semibold text-blue-900">
                            {exp.title}
                        </h3>

                        <p className="text-sm text-gray-500 mb-2">
                            {exp.organization} • {exp.year}
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        </section>
    );
}
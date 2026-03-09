"use client";
import { Code, Database, Wrench } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Code size={28} />,
            skills: ["Next.js", "React", "Tailwind CSS", "JavaScript", "TypeScript"],
        },
        {
            title: "Backend",
            icon: <Database size={28} />,
            skills: ["Node.js", "API Routes", "Laravel", "MySQL"],
        },
        {
            title: "Tools",
            icon: <Wrench size={28} />,
            skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
        },
    ];

    // Animasi untuk container kartu
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Kartu muncul bergantian
            },
        },
    };

    // Animasi untuk setiap kartu
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    // Animasi untuk badge skill (muncul dari kecil ke besar)
    const badgeVariants: Variants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: { type: "spring", stiffness: 260, damping: 20 }
        },
    };

    return (
        <section id="skills" className="py-24 px-6 bg-gray-50 border-t border-gray-100 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-blue-900 text-center mb-16"
                >
                    Skills & Technologies
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-10 md:grid-cols-3"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }} // Kartu naik sedikit saat di-hover
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4 text-blue-600 bg-blue-50 w-14 h-14 items-center rounded-2xl mx-auto">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        variants={badgeVariants}
                                        whileHover={{ scale: 1.1 }}
                                        className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-100 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
"use client";
import { motion, Variants } from "framer-motion";

export default function About() {
    // Animasi untuk kartu statistik
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({ // Tambahkan : number di sini
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    const stats = [
        { label: "Projects", value: "10+" },
        { label: "Leadership Roles", value: "5+" },
        { label: "Bootcamps", value: "3+" },
        { label: "Learning", value: "∞" },
    ];

    return (
        <section id="about" className="bg-gray-50 py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Judul di Tengah */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 inline-block relative">
                        About Me
                        {/* Garis dekoratif di bawah judul */}
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Side — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            I am a <span className="font-semibold text-blue-900">Fullstack Web Developer</span> passionate about building
                            scalable and modern web applications using JavaScript technologies.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            As an Information Systems student, I combine technical skills,
                            leadership experience, and analytical thinking to solve real-world problems.
                        </p>

                        <p className="text-gray-700 leading-relaxed italic border-l-4 border-blue-200 pl-4">
                            "I enjoy exploring AI integration, system architecture, and
                            building meaningful digital solutions."
                        </p>
                    </motion.div>

                    {/* Right Side — Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                custom={i} // 'i' berasal dari map(stat, i)
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
                                }}
                                className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center transition-colors hover:border-blue-200"
                            >
                                <motion.h3
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    className="text-3xl md:text-4xl font-extrabold text-blue-900"
                                >
                                    {stat.value}
                                </motion.h3>
                                <p className="text-gray-500 font-medium mt-2 text-sm md:text-base uppercase tracking-wider text-center">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
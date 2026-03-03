"use client"; // Wajib ditambahkan di Next.js App Router untuk animasi
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    const name = "Muhammad Abdul Hamid";

    // Varian untuk animasi per huruf
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08, // Kecepatan ketik per huruf
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-28 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1.6fr_1fr] gap-16 items-center">

                {/* LEFT SIDE — TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Efek Ngetik Per Huruf */}
                    <motion.h1
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight"
                    >
                        {name.split("").map((char, index) => (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        ))}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-1 h-8 md:h-12 bg-blue-400 ml-1"
                        >
                            |
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="mt-5 text-base md:text-xl font-medium text-gray-700 tracking-wide"
                    >
                        Fullstack Web Developer | <span className="text-blue-600">AI Enthusiast</span> | Student Leader
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.8, duration: 1 }}
                        className="mt-4 text-gray-500 max-w-lg leading-relaxed"
                    >
                        Focused on building scalable web systems with modern JavaScript technologies
                        and clean architecture principles.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2 }}
                        className="mt-8 flex gap-4"
                    >
                        <a
                            href="#projects"
                            className="group bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-200"
                        >
                            View Projects
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>

                        <a
                            href="/blog"
                            className="border border-blue-900 text-blue-900 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all"
                        >
                            Insights
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE — IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-56 md:w-64">
                        {/* Animasi Layer Belakang (Floating) */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -inset-4 bg-blue-100 rounded-3xl -z-10"
                        ></motion.div>

                        <Image
                            src="/blog/profile.jpg"
                            alt="Muhammad Abdul Hamid"
                            width={400}
                            height={500}
                            priority
                            className="rounded-3xl shadow-2xl object-cover border-4 border-white"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
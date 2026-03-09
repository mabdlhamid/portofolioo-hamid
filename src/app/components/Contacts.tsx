"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white px-6 relative overflow-hidden">
            {/* Dekorasi Background Latar Belakang */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-24 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
                <div className="absolute bottom-24 right-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-70"></div>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">
                        Let’s Build Something <span className="text-blue-600">Meaningful</span> Together
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        I’m open to collaboration, freelance projects, and exciting
                        opportunities in web development.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5"
                >
                    {/* GANTI URL DI ACTION DENGAN ENDPOINT DARI FORMSPREE KAMU */}
                    <form
                        action="https://formspree.io/f/xlgwyyqd"
                        method="POST"
                        className="grid gap-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-blue-900 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name" // WAJIB ADA
                                    required
                                    placeholder="Muhammad Abdul Hamid"
                                    className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder:text-gray-400 transition-all shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-blue-900 ml-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email" // WAJIB ADA
                                    required
                                    placeholder="your-email@example.com"
                                    className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder:text-gray-400 transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-blue-900 ml-1">Message</label>
                            <textarea
                                name="message" // WAJIB ADA
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder:text-gray-400 transition-all shadow-sm resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="bg-blue-900 text-white font-bold py-4 rounded-2xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3 group"
                        >
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </form>
                </motion.div>

                {/* Social Links */}
                <div className="mt-16 flex flex-col items-center gap-8">
                    <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Or connect via</p>
                    <div className="flex gap-6">
                        {[
                            { icon: <Github size={24} />, href: "#", label: "GitHub" },
                            { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
                            { icon: <Mail size={24} />, href: "mailto:your@email.com", label: "Email" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ y: -5 }}
                                className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-600 hover:text-blue-900 hover:border-blue-200 hover:shadow-md transition-all"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="mt-24 text-center text-gray-400 text-sm border-t border-gray-50 pt-8">
                <p>© {new Date().getFullYear()} Muhammad Abdul Hamid. Built with Next.js & Tailwind.</p>
            </footer>
        </section>
    );
}
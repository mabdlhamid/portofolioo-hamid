"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "../../lib/blogData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BlogPage() {
    const featured = blogPosts.find((post) => post.slug === "internship-telkom-akses");
    const others = blogPosts.filter((post) => post.slug !== "internship-telkom-akses");

    return (
        <section className="py-20 px-6 bg-[#fcfcfc] min-h-screen font-sans">
            <div className="max-w-6xl mx-auto">

                {/* 🧭 Navigation Header */}
                <nav className="flex justify-between items-center mb-16">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-bold text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-all pb-1"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        PORTFOLIO-HAMID
                    </Link>
                    <div className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
                        Journal / © 2026
                    </div>
                </nav>

                {/* ✍️ Page Title */}
                <header className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tighter"
                    >
                        Perspectives<span className="text-blue-500">.</span>
                    </motion.h1>
                </header>

                {/* 🏆 Featured Article (Lebih Ramping & Seimbang) */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24 group"
                    >
                        <Link href={`/blog/${featured.slug}`} className="grid md:grid-cols-12 gap-8 items-center">
                            {/* Gambar dengan ukuran yang lebih terkontrol */}
                            <div className="md:col-span-7 relative aspect-[16/9] md:aspect-[16/8] overflow-hidden rounded-[1.5rem] shadow-xl shadow-blue-900/5">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            {/* Konten di samping gambar (Desktop) */}
                            <div className="md:col-span-5">
                                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">
                                    {featured.category} • Featured
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {featured.excerpt}
                                </p>
                                <div className="inline-flex items-center gap-2 font-bold text-blue-900 text-sm group-hover:gap-4 transition-all">
                                    Read Insight <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* 📑 Article Grid (3 Kolom yang Clean) */}
                <div className="grid gap-x-8 gap-y-16 md:grid-cols-3 border-t border-gray-100 pt-16">
                    {others.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <span className="text-blue-600 font-bold text-[9px] uppercase tracking-widest mb-3 block">
                                    {post.category}
                                </span>
                                <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <div className="text-xs font-medium text-gray-400">
                                    {post.date} — 4 min read
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* 🔚 Footer Blog */}
                <footer className="mt-32 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <p className="text-[10px] text-gray-400 font-medium">MADE BY HAMID</p>
                    <div className="flex gap-6 text-[10px] font-bold text-gray-400">
                        <Link href="/" className="hover:text-blue-900 transition-colors">BACK TO PORTFOLIO</Link>
                    </div>
                </footer>

            </div>
        </section>
    );
}
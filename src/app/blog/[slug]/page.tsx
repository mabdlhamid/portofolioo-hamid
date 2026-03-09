import { blogPosts } from "../../../lib/blogData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

export default async function BlogDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // 1. Await params secara asinkron (Wajib di Next.js 16 Server Component)
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    // 2. Jika slug tidak ditemukan, tampilkan halaman 404
    if (!post) return notFound();

    return (
        <article className="py-24 px-6 bg-white min-h-screen">
            <div className="max-w-3xl mx-auto">

                {/* Tombol Kembali */}
                <div className="mb-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-blue-600 transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Insights
                    </Link>
                </div>

                {/* Header Artikel */}
                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                            {post.category}
                        </span>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <Clock size={14} />
                            <span>5 min read</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-[1.2] mb-6">
                        {post.title}
                    </h1>

                    <p className="text-sm text-gray-400 font-medium">
                        Published on {post.date} • Written by Muhammad Abdul Hamid
                    </p>
                </header>

                {/* Gambar Utama (Hero Image) */}
                <div className="relative h-[300px] md:h-[450px] w-full mb-16 shadow-2xl shadow-blue-900/5">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        className="rounded-[2.5rem] object-cover"
                    />
                </div>

                {/* Area Konten */}
                <div className="text-gray-700">
                    {/* whitespace-pre-line menjaga jarak baris (enter) dari data */}
                    <div className="whitespace-pre-line space-y-8 text-lg md:text-xl leading-relaxed">
                        {post.content}
                    </div>
                </div>

                {/* Penutup & Profil Penulis */}
                <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20 text-sm">
                            MAH
                        </div>
                        <div>
                            <p className="font-bold text-blue-900 uppercase tracking-tight">
                                Muhammad Abdul Hamid
                            </p>
                            <p className="text-sm text-gray-500">
                                Information Systems Student
                            </p>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-2xl text-gray-600 font-semibold transition-all">
                        <Share2 size={18} />
                        Share Insight
                    </button>
                </div>
            </div>
        </article>
    );
}
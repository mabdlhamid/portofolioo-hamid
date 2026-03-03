import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../lib/blogData";

export default function BlogPage() {
    const featured = blogPosts.find(
        (post) => post.slug === "internship-telkom-akses"
    );

    const others = blogPosts.filter(
        (post) => post.slug !== "internship-telkom-akses"
    );

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-bold text-blue-900 mb-16 text-center">
                    Professional Insights
                </h1>

                {/* 🔥 Featured Article */}
                {featured && (
                    <div className="mb-20 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition">
                        <div className="grid md:grid-cols-2">

                            <Image
                                src={featured.image}
                                alt={featured.title}
                                width={1000}
                                height={600}
                                className="w-full h-60 md:h-96 object-cover"
                            />
                            <div className="p-10 flex flex-col justify-center">
                                <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-3">
                                    {featured.category}
                                </p>

                                <p className="text-sm text-gray-500 mb-3">
                                    {featured.date}
                                </p>

                                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                    {featured.title}
                                </h2>

                                <p className="text-gray-600 mb-6">
                                    {featured.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${featured.slug}`}
                                    className="text-blue-900 font-medium hover:underline"
                                >
                                    Read Full Insight →
                                </Link>
                            </div>

                        </div>
                    </div>
                )}

                {/* ⬜ Supporting Articles */}
                <div className="grid gap-10 md:grid-cols-3">
                    {others.slice(0, 4).map((post) => (
                        <div
                            key={post.slug}
                            className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-2">
                                    {post.category}
                                </p>

                                <p className="text-sm text-gray-500 mb-2">
                                    {post.date}
                                </p>

                                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                                    {post.title}
                                </h3>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-900 font-medium hover:underline"
                                >
                                    Read →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
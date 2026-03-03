import { blogPosts } from "../../../lib/blogData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return notFound();

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">

                <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-3">
                    {post.category}
                </p>

                <p className="text-sm text-gray-500 mb-6">
                    {post.date}
                </p>

                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-10">
                    {post.title}
                </h1>

                <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={700}
                    className="w-full rounded-xl object-cover mb-12"
                />

                <div className="text-gray-700 leading-relaxed space-y-6">
                    {post.content}
                </div>

            </div>
        </section>
    );
}
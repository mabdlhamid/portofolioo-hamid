import { blogPosts } from "../../../lib/blogData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Share2,
} from "lucide-react";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  if (!post) return notFound();

  return (
    <article
      className="
        relative
        overflow-hidden

        min-h-screen

        px-6
        py-24

        bg-gradient-to-b
        from-white
        to-gray-50

        dark:from-[#020617]
        dark:to-[#071018]

        transition-colors
        duration-500
      "
    >
      {/* Divider */}
      <div
        className="
          absolute
          top-0
          left-0

          h-px
          w-full

          bg-gradient-to-r
          from-transparent
          via-cyan-400/30
          to-transparent
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-20

          h-72
          w-72

          rounded-full

          bg-cyan-500/10

          blur-3xl
        "
      />

      <div className="mx-auto max-w-3xl">

        {/* BACK BUTTON */}
        <div className="mb-14">
          <Link
            href="/blog"
            className="
              group

              inline-flex
              items-center
              gap-2

              text-sm
              font-semibold

              text-gray-500
              dark:text-slate-400

              transition-colors

              hover:text-cyan-500
            "
          >
            <ArrowLeft
              size={16}
              className="
                transition-transform
                group-hover:-translate-x-1
              "
            />

            Back to Insights
          </Link>
        </div>

        {/* ARTICLE HEADER */}
        <header className="mb-12">

          {/* Meta */}
          <div
            className="
              mb-7

              flex
              items-center
              gap-3
              flex-wrap
            "
          >
            <span
              className="
                rounded-xl

                border
                border-cyan-400/20

                bg-cyan-400/10

                px-3
                py-1

                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]

                text-cyan-600
                dark:text-cyan-400
              "
            >
              {post.category}
            </span>

            <span
              className="
                text-gray-300
                dark:text-slate-700
              "
            >
              |
            </span>

            <div
              className="
                flex
                items-center
                gap-1.5

                text-sm

                text-gray-500
                dark:text-slate-400
              "
            >
              <Clock size={14} />

              <span>
                5 min read
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="
              mb-6

              text-4xl
              md:text-5xl

              font-extrabold
              leading-[1.15]

              text-slate-800
              dark:text-white
            "
          >
            {post.title}
          </h1>

          {/* Author */}
          <p
            className="
              text-sm

              text-gray-400
              dark:text-slate-500
            "
          >
            Published on{" "}
            {post.date} • Written by
            Muhammad Abdul Hamid
          </p>
        </header>

        {/* HERO IMAGE */}
        <div
          className="
            relative

            mb-16

            h-[300px]
            md:h-[450px]
            w-full

            overflow-hidden

            rounded-[2.5rem]

            border
            border-gray-200
            dark:border-white/10

            shadow-2xl
            shadow-cyan-500/5
          "
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            prose
            prose-lg

            max-w-none

            prose-headings:text-slate-800
            dark:prose-headings:text-white

            prose-p:text-gray-700
            dark:prose-p:text-slate-300

            prose-strong:text-slate-800
            dark:prose-strong:text-white

            prose-li:text-gray-700
            dark:prose-li:text-slate-300

            prose-a:text-cyan-500

            leading-relaxed
          "
        >
          <div className="whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* AUTHOR BOX */}
        <div
          className="
            mt-24

            flex
            flex-col
            gap-6

            border-t
            border-gray-200
            dark:border-white/10

            pt-10

            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* LEFT */}
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full

                bg-slate-900
                dark:bg-white

                text-sm
                font-bold

                text-white
                dark:text-black

                shadow-lg
              "
            >
              MAH
            </div>

            <div>
              <p
                className="
                  font-bold

                  text-slate-800
                  dark:text-white
                "
              >
                Muhammad Abdul
                Hamid
              </p>

              <p
                className="
                  text-sm

                  text-gray-500
                  dark:text-slate-400
                "
              >
                Information Systems
                Student
              </p>
            </div>
          </div>

          {/* SHARE BUTTON */}
          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-2xl

              border
              border-gray-200
              dark:border-white/10

              bg-white
              dark:bg-[#071018]

              px-6
              py-3

              text-sm
              font-semibold

              text-slate-700
              dark:text-slate-300

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:text-cyan-500
              hover:shadow-xl
              hover:shadow-cyan-500/10
            "
          >
            <Share2 size={18} />

            Share Insight
          </button>
        </div>
      </div>
    </article>
  );
}
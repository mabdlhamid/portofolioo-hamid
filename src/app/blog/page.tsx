"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "../../lib/blogData";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export default function BlogPage() {
  const featured = blogPosts.find(
    (post) =>
      post.slug ===
      "internship-telkom-akses"
  );

  const others = blogPosts.filter(
    (post) =>
      post.slug !==
      "internship-telkom-akses"
  );

  return (
    <section
      className="
        relative
        overflow-hidden

        min-h-screen

        px-6
        py-20

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

      <div className="mx-auto max-w-6xl">

        {/* NAVBAR */}
        <nav
          className="
            mb-20

            flex
            items-center
            justify-between
          "
        >
          <Link
            href="/"
            className="
              group

              flex
              items-center
              gap-2

              text-sm
              font-bold

              text-slate-800
              dark:text-white

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

            PORTFOLIO
          </Link>

          <div
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]

              text-gray-400
            "
          >
            Insights & Articles
          </div>
        </nav>

        {/* HEADING */}
        <header className="mb-20">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              text-5xl
              md:text-6xl

              font-extrabold
              tracking-tight

              bg-gradient-to-r
              from-blue-700
              to-cyan-500

              bg-clip-text
              text-transparent
            "
          >
            Perspectives.
          </motion.h1>

          <p
            className="
              mt-5
              max-w-2xl

              leading-relaxed

              text-gray-500
              dark:text-slate-400
            "
          >
            Thoughts, experiences,
            and insights about
            technology, leadership,
            web development, and
            digital innovation.
          </p>
        </header>

        {/* FEATURED */}
        {featured && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-28"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="
                group
                grid
                items-center
                gap-10

                md:grid-cols-12
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[2rem]

                  border
                  border-gray-200
                  dark:border-white/10

                  shadow-2xl
                  shadow-cyan-500/5

                  md:col-span-7
                  aspect-[16/9]
                "
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="md:col-span-5">
                <span
                  className="
                    mb-5
                    block

                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]

                    text-cyan-500
                  "
                >
                  {featured.category} •
                  Featured
                </span>

                <h2
                  className="
                    mb-5

                    text-3xl
                    font-bold
                    leading-tight

                    text-slate-800
                    dark:text-white

                    transition-colors

                    group-hover:text-cyan-500
                  "
                >
                  {featured.title}
                </h2>

                <p
                  className="
                    mb-8

                    leading-relaxed

                    text-gray-600
                    dark:text-slate-400
                  "
                >
                  {featured.excerpt}
                </p>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    text-sm
                    font-bold

                    text-slate-800
                    dark:text-white

                    transition-all

                    group-hover:gap-4
                    group-hover:text-cyan-500
                  "
                >
                  Read Article

                  <ArrowUpRight
                    size={18}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ARTICLES */}
        <div
          className="
            grid
            gap-8

            border-t
            border-gray-200
            dark:border-white/10

            pt-16

            md:grid-cols-3
          "
        >
          {others.map(
            (post, index) => (
              <motion.div
                key={post.slug}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index * 0.08,
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="
                    group
                    block
                  "
                >
                  <div
                    className="
                      overflow-hidden

                      rounded-3xl

                      border
                      border-gray-200
                      dark:border-white/10

                      bg-white
                      dark:bg-[#071018]

                      shadow-sm
                      dark:shadow-lg

                      transition-all
                      duration-500

                      hover:-translate-y-2
                      hover:border-cyan-400/30
                      hover:shadow-2xl
                      hover:shadow-cyan-500/10
                    "
                  >

                    {/* IMAGE */}
                    <div
                      className="
                        relative
                        aspect-[3/2]
                        overflow-hidden
                      "
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="
                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <span
                        className="
                          mb-3
                          block

                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]

                          text-cyan-500
                        "
                      >
                        {post.category}
                      </span>

                      <h3
                        className="
                          mb-3

                          text-lg
                          font-bold
                          leading-snug

                          text-slate-800
                          dark:text-white

                          transition-colors

                          group-hover:text-cyan-500
                        "
                      >
                        {post.title}
                      </h3>

                      <div
                        className="
                          text-xs

                          text-gray-400
                        "
                      >
                        {post.date}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* FOOTER */}
        <footer
          className="
            mt-32

            flex
            items-center
            justify-between

            border-t
            border-gray-200
            dark:border-white/10

            pt-8
          "
        >
          <p
            className="
              text-[10px]
              font-medium

              text-gray-400
            "
          >
            MADE BY HAMID
          </p>

          <Link
            href="/"
            className="
              text-[10px]
              font-bold
              tracking-widest

              text-gray-400

              transition-colors

              hover:text-cyan-500
            "
          >
            BACK TO PORTFOLIO
          </Link>
        </footer>
      </div>
    </section>
  );
}
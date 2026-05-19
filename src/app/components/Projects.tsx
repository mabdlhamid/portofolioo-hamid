"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, Variants } from "framer-motion";

import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "../context/language-context";

import { projects } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const statusStyles = {
  live: `
    border-emerald-500/20
    bg-emerald-500/10
    text-emerald-400
  `,

  demo: `
    border-cyan-500/20
    bg-cyan-500/10
    text-cyan-400
  `,

  development: `
    border-yellow-500/20
    bg-yellow-500/10
    text-yellow-400
  `,
};

const statusLabel = {
  en: {
    live: "Live Product",
    demo: "Live Demo",
    development: "In Development",
  },

  id: {
    live: "Produk Live",
    demo: "Demo Live",
    development: "Dalam Pengembangan",
  },
};

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className="
        scroll-mt-12
        
        relative
        overflow-hidden

        px-6
        pt-16
        pb-24

        bg-gradient-to-b
        from-white
        via-slate-50
        to-white

        dark:from-[#020617]
        dark:via-slate-950
        dark:to-black
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/10

          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span
            className="
              mb-4
              inline-flex

              rounded-full

              border
              border-cyan-500/20

              bg-cyan-500/10

              px-4
              py-2

              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]

              text-cyan-400
            "
          >
            {language === "id"
              ? "Project Unggulan"
              : "Featured Works"}
          </span>

          <h2
            className="
              mb-6

              text-4xl
              font-bold
              tracking-tight

              text-slate-900
              dark:text-white

              md:text-5xl
            "
          >
            {language === "id"
              ? "Membangun"
              : "Crafting"}

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                bg-clip-text
                text-transparent
              "
            >
              {" "}
              {language === "id"
                ? "Pengalaman Digital"
                : "Digital Experiences"}
            </span>
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl

              text-base
              leading-relaxed

              text-slate-600
              dark:text-slate-400

              md:text-lg
            "
          >
            {language === "id"
              ? "Kumpulan aplikasi web modern, pengalaman interaktif, dan sistem full-stack scalable yang dibangun dengan fokus pada performa dan desain bersih."
              : "A curated collection of modern web applications, interactive experiences, and scalable full-stack systems built with performance and clean design in mind."}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid
            gap-8

            lg:grid-cols-3
          "
        >
          {projects.map((project) => {
            const content =
              project.content[language];

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[30px]

                  border
                  border-white/10

                  bg-white/70
                  dark:bg-white/[0.03]

                  backdrop-blur-md

                  transition-all
                  duration-500

                  hover:border-cyan-400/20
                  hover:shadow-[0_0_60px_rgba(34,211,238,0.08)]
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      z-10

                      bg-gradient-to-t
                      from-black/40
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={content.title}
                      fill
                      className="
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Floating Buttons */}
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      z-20

                      flex
                      gap-3
                    "
                  >
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="
                          rounded-full

                          border
                          border-white/20

                          bg-white/10

                          p-3

                          text-white

                          backdrop-blur-md

                          transition-all
                          duration-300

                          hover:scale-110
                          hover:bg-cyan-400
                          hover:text-black
                        "
                      >
                        <ExternalLink size={18} />
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="
                          rounded-full

                          border
                          border-white/20

                          bg-white/10

                          p-3

                          text-white

                          backdrop-blur-md

                          transition-all
                          duration-300

                          hover:scale-110
                        "
                      >
                        <Github size={18} />
                      </Link>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2

                        rounded-full
                        border

                        px-4
                        py-2

                        text-xs
                        font-semibold

                        backdrop-blur-md

                        ${statusStyles[project.status]}
                      `}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />

                      {
                        statusLabel[
                          language
                        ][project.status]
                      }
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div
                    className="
                      mb-4

                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <h3
                        className="
                          mb-2

                          text-xl
                          font-bold

                          text-slate-900
                          dark:text-white
                        "
                      >
                        {content.title}
                      </h3>

                      <p
                        className="
                          text-sm
                          leading-relaxed

                          text-slate-600
                          dark:text-slate-400
                        "
                      >
                        {content.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="
                        mt-1
                        shrink-0

                        text-slate-400

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {content.features.map(
                      (feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <div
                            className="
                              h-2
                              w-2

                              rounded-full

                              bg-cyan-400
                            "
                          />

                          <p
                            className="
                              text-sm

                              text-slate-600
                              dark:text-slate-400
                            "
                          >
                            {feature}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-xl

                          border
                          border-cyan-500/10

                          bg-cyan-500/5

                          px-3
                          py-2

                          text-xs
                          font-medium

                          text-cyan-500
                          dark:text-cyan-400
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="
                          flex-1

                          rounded-2xl

                          bg-slate-900
                          dark:bg-cyan-400

                          px-5
                          py-3

                          text-center
                          text-sm
                          font-semibold

                          text-white
                          dark:text-black

                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:shadow-lg
                          hover:shadow-cyan-500/20
                        "
                      >
                        {language === "id"
                          ? "Lihat Demo"
                          : "Launch Project"}
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="
                          flex-1

                          rounded-2xl

                          border
                          border-slate-200
                          dark:border-white/10

                          bg-white/50
                          dark:bg-white/[0.03]

                          px-5
                          py-3

                          text-center
                          text-sm
                          font-semibold

                          text-slate-700
                          dark:text-slate-300

                          backdrop-blur-md

                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-cyan-400/20
                          hover:text-cyan-400
                        "
                      >
                        {language === "id"
                          ? "Source Code"
                          : "View Source"}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
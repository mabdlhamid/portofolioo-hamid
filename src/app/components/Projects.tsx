"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
     title: "Jelang Koffie",
    description:
      "Modern coffee shop website with elegant user interface, responsive layout, and digital branding experience for customers.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image:"/projects/jelang-dashboard.png",
    live: "",
    github: "https://github.com/USERNAME/jelang-koffie",
    status: "In Development"
    },

    {
      title: "Student Information System",
      description:
        "Web-based academic management system with authentication and dashboard features.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      image:"/projects/perpus..png",
      live: "",
      github: "https://github.com/USERNAME/PERPUS",
      status: "In Development"
    },

    {
      title: "Weddit Story",
      description:
        "Digital wedding invitation platform with modern UI and nationwide service support.",
      tech: ["Next.js", "Tailwind", "Fullstack"],
      image:"/projects/camping.png",
      live: "",
      github: "https://github.com/USERNAME/",
      status: "In Development"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      id="projects"
      className="
        px-6
        py-24

        bg-gradient-to-b
        from-white
        to-gray-50

        dark:from-slate-950
        dark:to-slate-900

        transition-colors
        duration-500
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className="
              mb-4

              text-3xl
              md:text-4xl
              font-bold

              bg-gradient-to-r
              from-blue-700
              to-cyan-500

              bg-clip-text
              text-transparent
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl

              text-gray-500
              dark:text-slate-400
            "
          >
            A selection of my recent works,
            ranging from AI applications to
            full-stack web systems.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid
            gap-8

            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-[#071018]
                backdrop-blur-sm

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
            
    {/* Image Preview */}
        <div
          className="
            relative
            h-52
            overflow-hidden

            bg-gray-100
            dark:bg-slate-800
          "
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Hover Overlay */}
          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center
              gap-4

              bg-slate-950/60

              opacity-0
              backdrop-blur-sm

              transition-opacity
              duration-300

              group-hover:opacity-100
            "
          >
            <button
              className="
                rounded-full
                bg-white
                p-3

                text-slate-900

                shadow-xl

                transition-all
                hover:scale-110
              "
            >
              <ExternalLink size={20} />
            </button>

            <button
              className="
                rounded-full
                bg-white
                p-3

                text-slate-900

                shadow-xl

                transition-all
                hover:scale-110
              "
            >
              <Github size={20} />
            </button>
          </div>
</div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-8">

                {/* Title */}
                <h3
                  className="
                    mb-3

                    text-xl
                    font-bold

                    text-slate-800
                    dark:text-white

                    transition-colors

                    group-hover:text-cyan-500
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mb-6
                    flex-grow

                    text-sm
                    leading-relaxed

                    text-gray-600
                    dark:text-slate-400
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
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
                        tracking-widest

                        text-cyan-600
                        dark:text-cyan-400
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  {/* Demo */}
                  <button
                    className="
                      flex-1

                      rounded-2xl

                      bg-slate-900
                      dark:bg-white

                      py-3

                      text-sm
                      font-semibold

                      text-white
                      dark:text-black

                      shadow-lg

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:scale-[1.02]
                    "
                  >
                    Live Demo
                  </button>

                  {/* Source */}
                  <button
                    className="
                      flex-1

                      rounded-2xl

                      border
                      border-gray-300
                      dark:border-slate-700

                      py-3

                      text-sm
                      font-semibold

                      text-gray-700
                      dark:text-slate-300

                      transition-all
                      duration-300

                      hover:bg-gray-100
                      dark:hover:bg-slate-800
                    "
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
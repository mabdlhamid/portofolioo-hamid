"use client";

import { Code, Database, Wrench } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={28} />,
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
      ],
    },

    {
      title: "Backend",
      icon: <Database size={28} />,
      skills: [
        "Node.js",
        "API Routes",
        "Laravel",
        "MySQL",
      ],
    },

    {
      title: "Tools",
      icon: <Wrench size={28} />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Vercel",
      ],
    },
  ];

  // Container animation
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  // Badge animation
  const badgeVariants: Variants = {
    hidden: {
      scale: 0,
    },

    visible: {
      scale: 1,

      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="skills"
      className="
        overflow-hidden
        border-t

        border-gray-100
        dark:border-slate-800

        px-6
        py-24

        bg-gradient-to-b
        from-gray-50
        to-white

        dark:from-slate-900
        dark:to-slate-950
    
        transition-colors
        duration-500
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className="
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
            Skills & Technologies
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl

              text-gray-500
              dark:text-slate-400
            "
          >
            Technologies and tools I use to build
            scalable, modern, and meaningful digital
            experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            gap-10

            md:grid-cols-3
          "
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
               y: -10,
              }}
              className="
              group

              rounded-3xl

              border
              border-gray-200
              dark:border-white/5

              bg-white
            dark:bg-[#0b1120]
              p-8

              shadow-sm
              dark:shadow-md

              transition-all
              duration-300

              hover:-translate-y-1
            "
            >
              {/* Icon */}
              <div
                className="
                  mx-auto
                  mb-5

                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-cyan-400/20
                  to-blue-500/10

                  text-cyan-500

                  transition-all
                  duration-300

                  group-hover:scale-110
                "
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  mb-6
                  text-center

                  text-xl
                  font-bold

                  text-slate-800
                  dark:text-white
                "
              >
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={badgeVariants}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      cursor-default

                      rounded-xl

                      border
                      border-cyan-400/20

                      bg-cyan-400/10

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-cyan-700
                      dark:text-cyan-400

                      transition-all
                      duration-300

                      hover:bg-cyan-400/20
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  // Animation for stats cards
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: (i: number) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Leadership Roles", value: "5+" },
    { label: "Bootcamps", value: "10+" },
    { label: "Learning", value: "∞" },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        px-6
        py-24

        transition-colors
        duration-500

        bg-gradient-to-b
        from-gray-50
        to-white

        dark:from-[#071018]
        dark:to-[#020617]
      "
    >
      {/* Top Divider */}
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

      {/* Glow Background */}
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
              relative
              inline-block

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
            About Me

            {/* Decorative Line */}
            <span
              className="
                absolute
                -bottom-3
                left-1/2

                h-1
                w-14

                -translate-x-1/2

                rounded-full

                bg-gradient-to-r
                from-blue-500
                to-cyan-400
              "
            />
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl

              text-gray-500
              dark:text-slate-400
            "
          >
            Passionate about creating scalable
            digital products with clean design,
            modern technologies, and meaningful
            user experiences.
          </p>
        </motion.div>

        <div
          className="
            grid
            items-center
            gap-16

            md:grid-cols-2
          "
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="
                mb-6

                text-lg
                leading-relaxed

                text-gray-700
                dark:text-slate-300
              "
            >
              I am a{" "}
              <span
                className="
                  font-semibold
                  text-cyan-500
                "
              >
                Fullstack Web Developer
              </span>{" "}
              passionate about building scalable
              and modern web applications using
              JavaScript technologies.
            </p>

            <p
              className="
                mb-6
                leading-relaxed

                text-gray-600
                dark:text-slate-400
              "
            >
              As an Information Systems student,
              I combine technical skills,
              leadership experience, and
              analytical thinking to solve
              real-world problems.
            </p>

            <p
              className="
                border-l-4
                border-cyan-400

                pl-4

                italic
                leading-relaxed

                text-gray-500
                dark:text-slate-400
              "
            >
              &ldquo;I enjoy exploring AI
              integration, system architecture,
              and building meaningful digital
              solutions.&rdquo;
            </p>
          </motion.div>

          {/* RIGHT SIDE — Stats */}
          <div
            className="
              grid
              grid-cols-2
              gap-4

              md:gap-6
            "
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center

                  rounded-3xl

                  border
                  border-gray-200
                  dark:border-white/10

                  bg-white
                  dark:bg-[#111827]

                  backdrop-blur-sm

                  p-8

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                "
              >
                <motion.h3
                  initial={{
                    scale: 0.5,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    text-3xl
                    md:text-4xl

                    font-extrabold

                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-400

                    bg-clip-text
                    text-transparent
                  "
                >
                  {stat.value}
                </motion.h3>

                <p
                  className="
                    mt-2

                    text-center
                    text-sm
                    md:text-base

                    font-medium
                    uppercase
                    tracking-wider

                    text-gray-500
                    dark:text-slate-400
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
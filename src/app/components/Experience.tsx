"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/language-context";
import { translations } from "../locales/translations";

export default function Experience() {
const { language } = useLanguage();
const t = translations[language];


  const experiences = t.experiences;  


  const containerVariants: Variants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -30,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="
          scroll-mt-12

        overflow-hidden

        border-t
        border-gray-100
        dark:border-slate-800

        px-6
        pt-16
        pb-24

        bg-gradient-to-b
        from-gray-50
        to-white

        dark:from-slate-900
        dark:to-slate-950

        transition-colors
        duration-500
      "
    >
      <div className="mx-auto max-w-4xl">

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
            {t.experienceTitle}
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
            {t.experienceDesc}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            relative

            ml-4
            space-y-16
            border-l-2

            border-cyan-400/20

            pl-8

            md:left-4
            md:ml-0
            md:pl-12
          "
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute

                  -left-[41px]
                  top-1.5

                  z-10

                  h-5
                  w-5

                  rounded-full

                  border-4
                  border-cyan-500

                  bg-white
              dark:bg-[#020617]

                  shadow-lg
                  shadow-cyan-500/20

                  transition-all
                  duration-300

                  group-hover:scale-125
                  group-hover:shadow-cyan-400/40

                  md:-left-[57px]
                "
              />

              {/* Year Badge */}
              <span
                className="
                  mb-3
                  inline-block

                  rounded-xl

                  border
                  border-cyan-400/20

                  bg-cyan-400/10

                  px-3
                  py-1

                  text-xs
                  font-bold
                  uppercase
                  tracking-widest

                  text-cyan-700
                  dark:text-cyan-400
                "
              >
                {exp.year}
              </span>

              {/* Title */}
              <h3
                className="
                  text-xl
                  font-bold

                  text-slate-800
                  dark:text-white

                  transition-colors
                  duration-300

                  group-hover:text-cyan-500
                "
              >
                {exp.title}
              </h3>

              {/* Organization */}
              <p
                className="
                  mb-4
                  mt-2

                  flex
                  items-center
                  gap-2

                  text-md
                  font-medium

                  text-gray-500
                  dark:text-slate-400
                "
              >
                <span
                  className="
                    h-[1px]
                    w-4

                    bg-gray-300
                    dark:bg-slate-700
                  "
                />

                {exp.organization}
              </p>

              {/* Description Card */}
              <p
                className="
                  max-w-2xl

                  rounded-2xl

                  border
                  border-gray-200
                  dark:border-slate-800

                  bg-white
                  dark:bg-slate-900

                  p-5

                  leading-relaxed

                  text-gray-600
                  dark:text-slate-400

                  shadow-sm
                  dark:shadow-none

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:shadow-xl
                  group-hover:shadow-cyan-500/10
                "
              >
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { type ReactNode, memo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Code2, Database, Wrench, Link } from "lucide-react";

import { useLanguage } from "../context/language-context";
import { translations } from "../locales/translations";

import {
  siNextdotjs,
  siReact,
  siTailwindcss,
  siJavascript,
  siTypescript,
  siNodedotjs,
  siLaravel,
  siMysql,
  siGit,
  siGithub,
  siFigma,
  siVercel,
} from "simple-icons";

// ─── Types ─────────────────────────────────────────────────────────────

type SimpleIcon = {
  path: string;
  hex: string;
  title: string;
};

interface Skill {
  name: string;
  si?: SimpleIcon;
  fallback?: {
    icon: ReactNode;
    bg: string;
  };
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

// ─── Animation Variants ───────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const fadeOnly: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },
};

// ─── Brand Icon ───────────────────────────────────────────────────────

const BrandIcon = memo(function BrandIcon({
  skill,
}: {
  skill: Skill;
}) {
  const base =
    "flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md";

  if (skill.si) {
    return (
      <span
        className={base}
        style={{
          background: `#${skill.si.hex}`,
        }}
        aria-label={skill.si.title}
        role="img"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[13px] w-[13px]"
          fill="white"
          aria-hidden="true"
          focusable="false"
        >
          <path d={skill.si.path} />
        </svg>
      </span>
    );
  }

  if (skill.fallback) {
    return (
      <span
        className={`${base} text-white`}
        style={{
          background: skill.fallback.bg,
        }}
        aria-hidden="true"
      >
        {skill.fallback.icon}
      </span>
    );
  }

  return null;
});

// ─── Main Component ───────────────────────────────────────────────────

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  const { language } = useLanguage();

  const t = translations[language];

  // Categories with translation
  const CATEGORIES: SkillCategory[] = [
    {
      title: t.skills.categories.frontend,

      icon: <Code2 size={24} />,

      skills: [
        { name: "Next.js", si: siNextdotjs },
        { name: "React", si: siReact },
        { name: "Tailwind CSS", si: siTailwindcss },
        { name: "JavaScript", si: siJavascript },
        { name: "TypeScript", si: siTypescript },
      ],
    },

    {
      title: t.skills.categories.backend,

      icon: <Database size={24} />,

      skills: [
        { name: "Node.js", si: siNodedotjs },
        { name: "Laravel", si: siLaravel },
        { name: "MySQL", si: siMysql },

        {
          name: "API Routes",

          fallback: {
            icon: <Link size={12} />,
            bg: "#6366f1",
          },
        },
      ],
    },

    {
      title: t.skills.categories.tools,

      icon: <Wrench size={24} />,

      skills: [
        { name: "Git", si: siGit },
        { name: "GitHub", si: siGithub },

        {
          name: "VS Code",

          fallback: {
            icon: <Code2 size={12} />,
            bg: "#007ACC",
          },
        },

        { name: "Figma", si: siFigma },
        { name: "Vercel", si: siVercel },
      ],
    },
  ];

  const containerAnim = prefersReducedMotion
    ? fadeOnly
    : containerVariants;

  const cardAnim = prefersReducedMotion
    ? fadeOnly
    : cardVariants;

  const badgeAnim = prefersReducedMotion
    ? fadeOnly
    : badgeVariants;

  const hoverCard = prefersReducedMotion
    ? undefined
    : { y: -8 };

  const hoverBadge = prefersReducedMotion
    ? undefined
    : { scale: 1.06, y: -2 };

  return (
    <section
      id="skills"
      className="
        overflow-hidden

        border-t
        border-gray-100
        dark:border-slate-800

        bg-gradient-to-b
        from-gray-50
        to-white

        px-6
        py-24

        transition-colors
        duration-300

        dark:from-slate-900
        dark:to-slate-950
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: -16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 text-center"
        >
          <h2
            className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-indigo-600

              bg-clip-text

              text-3xl
              font-bold
              text-transparent

              md:text-4xl
            "
          >
            {t.skills.title}
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
            {t.skills.description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-8 md:grid-cols-3"
        >
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={cardAnim}
              whileHover={hoverCard}
              transition={{
                duration: 0.25,
                ease: "easeOut",
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

                transition-shadow
                duration-300

                hover:shadow-md
                dark:hover:shadow-2xl
              "
            >
              {/* Category Icon */}
              <div
                className="
                  mx-auto
                  mb-5

                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-cyan-400/20
                  to-blue-500/10

                  text-cyan-500

                  transition-transform
                  duration-300

                  group-hover:scale-110
                "
              >
                {category.icon}
              </div>

              {/* Category Title */}
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
              <div className="flex flex-wrap justify-center gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={badgeAnim}
                    whileHover={hoverBadge}
                    className="
                      flex
                      cursor-default
                      items-center
                      gap-2

                      rounded-xl

                      border
                      border-gray-200
                      dark:border-white/10

                      bg-gray-50
                      dark:bg-white/5

                      px-3
                      py-2

                      text-sm
                      font-semibold

                      text-slate-700
                      dark:text-slate-200

                      transition-colors
                      duration-150

                      hover:border-cyan-400/40
                      hover:bg-cyan-50

                      dark:hover:bg-cyan-400/5
                    "
                  >
                    <BrandIcon skill={skill} />

                    {skill.name}
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
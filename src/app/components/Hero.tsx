"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/language-context";
import { translations } from "../locales/translations";
import { useState, useEffect } from "react";

export default function Hero() {
  const { language } = useLanguage();

  const t = translations[language];

  const name = "Muhammad Abdul Hamid";
  const [typingKey, setTypingKey] = useState(0);
 
  useEffect(() => {
  const handleHashChange = () => {
    if (
      window.location.hash === "" ||
      window.location.hash === "#" ||
      window.location.hash === "#hero"
    ) {
      setTypingKey((prev) => prev + 1);
    }
  };

  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener(
      "hashchange",
      handleHashChange
    );
  };
}, []);
  // Animation per letter
  const sentence = {
    hidden: {
      opacity: 1,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden

        min-h-screen

        px-6
        pt-32
        pb-20

        bg-white

        dark:bg-[#020617]

        transition-colors
        duration-500
      "
    >
      {/* Divider */}
      <div
        className="
          absolute
          bottom-0
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
          left-0
          top-20

          h-72
          w-72

          rounded-full

          bg-cyan-500/10

          blur-3xl
        "
      />

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-16

          md:grid-cols-[1.4fr_1fr]
        "
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            order-2
            text-center

            md:order-1
            md:text-left
          "
        >

          {/* Name Typewriter */}
            <motion.h1
            key={typingKey}
            variants={sentence}
            initial="hidden"
            whileInView="visible"

            className="
              text-4xl
              font-extrabold
              leading-tight break-words
              
              text-slate-800
              dark:text-white

              sm:text-5xl
              md:text-6xl
            "
          >
            {name.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-3"
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={char + charIndex}
                    variants={letter}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}

            {/* Cursor */}
            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
              }}
              className="
                ml-1
                inline-block

                text-cyan-400
              "
            >
              |
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.2,
              duration: 1,
            }}
            className="
              mt-6

              text-base
              md:text-xl

              font-medium

              text-gray-600
              dark:text-slate-300
            "
          >
            {t.heroRole}{" "}
            <span className="text-cyan-500">
              | {t.heroAI}
            </span>{" "}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.5,
              duration: 1,
            }}
            className="
              mx-auto
              mt-5
              max-w-xl

              leading-relaxed

              text-gray-500
              dark:text-slate-400

              md:mx-0
            "
          >
            {t.heroDesc}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.8,
            }}
            className="
              mt-10

              flex
              flex-col
              gap-4

              sm:flex-row
              sm:justify-center

              md:justify-start
            "
          >

            {/* Primary Button */}
            <a
              href="#projects"
              className="
                group

                rounded-2xl

                bg-slate-900
                dark:bg-white

                px-7
                py-4

                font-semibold

                text-white
                dark:text-black

                shadow-xl
                shadow-cyan-500/10

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-[1.02]
              "
            >
              {t.heroButtonProject}

              <span
                className="
                  ml-2
                  inline-block

                  transition-transform

                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* Secondary Button */}
            <Link
              href="/blog"
              className="
                rounded-2xl

                border
                border-gray-300
                dark:border-white/10

                px-7
                py-4

                font-semibold

                text-slate-700
                dark:text-slate-300

                backdrop-blur-sm

                transition-all
                duration-300

                hover:bg-gray-100
                dark:hover:bg-slate-900
              "
            >
              {t.heroButtonBlog}
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            order-1

            flex
            justify-center

            md:order-2
            md:justify-end
          "
        >
          <div className="relative">

            {/* Glow */}
            <div
              className="
                absolute
                inset-0

                rounded-[2rem]

                bg-cyan-500/20

                blur-3xl
              "
            />

            {/* Floating Background */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                absolute
                -inset-3

                rounded-[2.5rem]

                bg-gradient-to-br
                from-cyan-400/20
                to-blue-500/10
              "
            />

            {/* Image */}
            <Image
              src="/blog/profile.jpg"
              alt="Muhammad Abdul Hamid"
              width={420}
              height={520}
              priority
              className="
                relative
                z-10

                h-auto
                w-[240px]

                rounded-[2rem]

                border
                border-white/20

                object-cover

                shadow-2xl

                sm:w-[280px]
                md:w-[340px]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
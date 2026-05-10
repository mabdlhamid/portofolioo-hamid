"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden

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
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-full
          w-full
          -translate-x-1/2
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-10
            top-24

            h-64
            w-64

            rounded-full

            bg-cyan-400/20

            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-24
            right-10

            h-64
            w-64

            rounded-full

            bg-blue-500/20

            blur-3xl
          "
        />
      </div>

      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
              mb-6

              text-3xl
              md:text-5xl

              font-extrabold
              tracking-tight

              text-slate-800
              dark:text-white
            "
          >
            Let’s Build Something{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600
                to-cyan-400

                bg-clip-text
                text-transparent
              "
            >
              Meaningful
            </span>{" "}
            Together
          </h2>

          <p
            className="
              mx-auto
              max-w-xl

              text-lg

              text-gray-600
              dark:text-slate-400
            "
          >
            I’m open to collaboration,
            freelance projects, and exciting
            opportunities in web development.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="
            rounded-[2.5rem]

            border
            border-gray-200
            dark:border-slate-800

            bg-white/80
            dark:bg-black

            p-8
            md:p-12

            backdrop-blur-xl

            shadow-2xl
            shadow-cyan-500/5
          "
        >
          <form
            action="https://formspree.io/f/xlgwyyqd"
            method="POST"
            className="grid gap-6"
          >
            {/* Inputs */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Name */}
              <div className="space-y-2">
                <label
                  className="
                    ml-1
                    text-sm
                    font-semibold

                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Muhammad Abdul Hamid"
                  className="
                    w-full

                    rounded-2xl

                    border
                    border-gray-200
                    dark:border-slate-700

                    bg-white
                    dark:bg-slate-950

                    p-4

                    text-slate-800
                    dark:text-white

                    placeholder:text-gray-400
                    dark:placeholder:text-slate-500

                    shadow-sm

                    transition-all
                    duration-300

                    focus:outline-none
                    focus:ring-2
                    focus:ring-cyan-400
                  "
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  className="
                    ml-1
                    text-sm
                    font-semibold

                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your-email@example.com"
                  className="
                    w-full

                    rounded-2xl

                    border
                    border-gray-200
                    dark:border-slate-700

                    bg-white
                    dark:bg-slate-950

                    p-4

                    text-slate-800
                    dark:text-white

                    placeholder:text-gray-400
                    dark:placeholder:text-slate-500

                    shadow-sm

                    transition-all
                    duration-300

                    focus:outline-none
                    focus:ring-2
                    focus:ring-cyan-400
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                className="
                  ml-1
                  text-sm
                  font-semibold

                  text-slate-700
                  dark:text-slate-300
                "
              >
                Message
              </label>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="
                  w-full

                  resize-none

                  rounded-2xl

                  border
                  border-gray-200
                  dark:border-slate-700

                  bg-white
                  dark:bg-slate-950

                  p-4

                  text-slate-800
                  dark:text-white

                  placeholder:text-gray-400
                  dark:placeholder:text-slate-500

                  shadow-sm

                  transition-all
                  duration-300

                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400
                "
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="
                group

                flex
                items-center
                justify-center
                gap-3

                rounded-2xl

                bg-slate-900
                dark:bg-white

                py-4

                font-bold

                text-white
                dark:text-black

                shadow-xl
                shadow-cyan-500/10

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              Send Message

              <Send
                size={18}
                className="
                  transition-transform

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.button>
          </form>
        </motion.div>

        {/* Social */}
        <div className="mt-16 flex flex-col items-center gap-8">

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]

              text-gray-400
              dark:text-slate-500
            "
          >
            Or connect via
          </p>

          <div className="flex gap-6">
            {[
              {
                icon: <Github size={24} />,
                href: "#",
                label: "GitHub",
              },

              {
                icon: <Linkedin size={24} />,
                href: "#",
                label: "LinkedIn",
              },

              {
                icon: <Mail size={24} />,
                href: "mailto:your@email.com",
                label: "Email",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-2xl

                  border
                  border-gray-200
                  dark:border-slate-800

                  bg-white
                  dark:bg-slate-900

                  p-4

                  text-gray-600
                  dark:text-slate-400

                  shadow-sm

                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:text-cyan-500
                  hover:shadow-xl
                  hover:shadow-cyan-500/10
                "
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="
          mt-24

          border-t
          border-gray-100
          dark:border-slate-800

          pt-8

          text-center
          text-sm

          text-gray-400
          dark:text-slate-500
        "
      >
        <p>
          © {new Date().getFullYear()} Muhammad
          Abdul Hamid. Built with Next.js &
          Tailwind.
        </p>
      </footer>
    </section>
  );
}
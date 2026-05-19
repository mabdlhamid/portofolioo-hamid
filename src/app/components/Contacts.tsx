"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../locales/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const social = [
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
  ];

  return (
    <section
      id="contact"
      className="
        scroll-mt-12
        relative
        overflow-hidden
        px-6
        pt-16
        pb-12
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
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2 overflow-hidden">
        <div className="absolute left-10 top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-24 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            {t.contact.titlePart1}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>{" "}
            {t.contact.titlePart2}
          </h2>

          <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-slate-400">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            rounded-[2.5rem]
            border border-gray-200 dark:border-slate-800
            bg-white/80 dark:bg-black
            p-8 md:p-12
            backdrop-blur-xl
            shadow-2xl shadow-cyan-500/5
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
                <label className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {t.contact.name}
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 text-slate-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {t.contact.email}
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 text-slate-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                {t.contact.message}
              </label>

              <textarea
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="w-full resize-none rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 text-slate-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="
                group flex items-center justify-center gap-3
                rounded-2xl bg-slate-900 dark:bg-white
                py-4 font-bold text-white dark:text-black
                shadow-xl shadow-cyan-500/10
                hover:-translate-y-1
              "
            >
              {t.contact.button}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>

        {/* Social */}
        <div className="mt-16 flex flex-col items-center gap-8">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 dark:text-slate-500">
            {t.contact.connect}
          </p>

          <div className="flex gap-6">
            {social.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-gray-600 dark:text-slate-400 hover:text-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 border-t border-gray-100 dark:border-slate-800 pt-8 text-center text-sm text-gray-400 dark:text-slate-500">
        <p>{t.contact.footer}</p>
      </footer>
    </section>
  );
}
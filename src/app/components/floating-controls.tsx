"use client";


import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/language-context";
import { useEffect, useState } from "react";

export default function FloatingControls() {
  const { resolvedTheme, setTheme } = useTheme();

  const { language, setLanguage } =
    useLanguage();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        z-50

        flex
        items-center
        gap-2

        rounded-full

        border
        border-gray-200
        dark:border-white/10

        bg-white/90
        dark:bg-[#111827]/85

        px-2
        py-2

        backdrop-blur-2xl

        shadow-xl
        shadow-black/5

        transition-all
        duration-300
      "
    >
      {/* Language Toggle */}
      <button
        onClick={() =>
          setLanguage(language === "en" ? "id" : "en")
        }
        className="
          rounded-full

          bg-gray-800
          dark:bg-white

          px-3
          py-1.5

          text-xs
          font-bold
          uppercase

          text-white
          dark:text-black

          transition-all
          duration-300

          hover:scale-105
        "
      >
        {language.toUpperCase()}
      </button>

      {/* Divider */}
      <div className="h-5 w-px bg-gray-300 dark:bg-white/10" />

      {/* Theme Toggle */}
      <button
        onClick={() =>
          setTheme(
            resolvedTheme === "dark"
              ? "light"
              : "dark"
          )
        }
        className="
          flex
          h-8
          w-8
          items-center
          justify-center

          rounded-full

          text-gray-700
          dark:text-gray-200

          transition-all
          duration-300

          hover:bg-gray-200/70
          dark:hover:bg-white/10

          hover:scale-110
        "
      >
        {resolvedTheme === "dark" ? (
          <Sun size={16} />
        ) : (
          <Moon size={16} />
        )}
      </button>
    </div>
  );
}
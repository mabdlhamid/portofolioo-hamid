"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        rounded-full
        border border-white/10
        bg-white/80 dark:bg-slate-900/80
        p-3
        shadow-2xl
        backdrop-blur-xl
        transition-all duration-300
        hover:scale-110
        dark:border-slate-700
      "
    >
      {resolvedTheme === "dark" ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-slate-700 dark:text-white" />
      )}
    </button>
  );
}
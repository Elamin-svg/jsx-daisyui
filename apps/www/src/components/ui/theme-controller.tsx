"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeController() {
  const toggleTheme = () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn-square btn btn-ghost  btn-sm"
      aria-label="Toggle theme"
    >
      <Sun size={18} className="hidden in-data-[theme=dark]:block" />
      <Moon size={18} className="in-data-[theme=dark]:hidden" />
    </button>
  );
}

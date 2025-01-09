"use client";

import React from "react";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex border items-center bg-[#fafafa] shadow dark:bg-[#111] dark:border-zinc-800 p-2 px-4 justify-between rounded-full hover:bg-slate-200 dark:hover:bg-[#222] transition-all">

      <button
        className={`mr-2 p-1 ${
          theme === "dark"
            ? "bg-white text-black rounded-full shadow-xl"
            : "text-black"
        }`}
        onClick={() => setTheme("dark")}
      >
        <Icons.moon />
      </button>

      <button
        className={`mr-2 p-1 ${
          theme === "light"
            ? "bg-white text-black rounded-full shadow-xl"
            : "text-white"
        }`}
        onClick={() => setTheme("light")}
      >
        <Icons.sun />
      </button>
    </div>
  );
}

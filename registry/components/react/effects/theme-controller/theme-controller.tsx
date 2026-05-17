"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Swap } from "../swap";

export default function ThemeController() {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    document &&
      document.querySelector("html")!.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Swap
      checked={theme === "light"}
      onChange={toggleTheme}
      effect="rotate"
    >
      <Swap.On>
        <Sun className="swap-on" size={18} />
      </Swap.On>
      <Swap.Off>
        <Moon className="swap-off" size={18} />
      </Swap.Off>
    </Swap>
  );
}

import React from "react";

import { useTheme } from "../context/theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "theme-light" ? "theme-dark" : "theme-light")
      }
    >
      Switch to {theme === "theme-light" ? "dark" : " light"} mode
    </button>
  );
}

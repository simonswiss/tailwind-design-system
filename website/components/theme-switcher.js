import React from "react";

import { useTheme } from "@tailwind-ds/core";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isLight = theme === "theme-light";

  return (
    <button onClick={() => setTheme(isLight ? "theme-dark" : "theme-light")}>
      Switch to {isLight ? "dark" : "light"} mode
    </button>
  );
}

import React from "react";

// import "./styles/output.css";

import { ThemeProvider } from "./theme";
export { useTheme } from "./theme";

export function Core({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

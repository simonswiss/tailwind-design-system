import React from "react";
import { Global } from "@emotion/core";

import { ThemeProvider } from "./theme";
export { useTheme } from "./theme";

export function Core({ children }) {
  return (
    <ThemeProvider>
      <Global styles={require("./styles/output.css")} />
      {children}
    </ThemeProvider>
  );
}

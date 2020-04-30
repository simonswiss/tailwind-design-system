import React from "react";

import { ThemeProvider } from "./theme";

export function Core({ children, theme }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

import "./output.css";

import { ThemeProvider } from "./theme";

export function Core({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

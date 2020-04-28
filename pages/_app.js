import React from "react";

import "../styles/styles.css";

import { ThemeProvider, useTheme } from "../context/theme";
import { ThemeSwitcher } from "../components/theme-switcher";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = ({ children }) => {
  const { theme } = useTheme();
  return <div className={theme}>{children}</div>;
};

export default App;

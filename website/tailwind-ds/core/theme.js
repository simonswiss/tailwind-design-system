import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, theme: propTheme }) => {
  const [theme, setTheme] = useState("brand-one");

  const themeClassName = propTheme?.length > 0 ? propTheme : theme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={themeClassName}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("You forgot to use a <ThemeProvider> wrapper!");
  }
  return context;
};

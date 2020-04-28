import React from "react";
import { Core } from "@tailwind-ds/core";

import { ThemeSwitcher } from "../components/theme-switcher";

function App({ Component, pageProps }) {
  return (
    <Core>
      <ThemeSwitcher />
      <Component {...pageProps} />
    </Core>
  );
}

export default App;

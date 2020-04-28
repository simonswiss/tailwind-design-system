import React from "react";

import { Core } from "@tailwind-ds/core";

function App({ Component, pageProps }) {
  return (
    <Core>
      <ThemeSwitcher />
      <Component {...pageProps} />
    </Core>
  );
}

export default App;

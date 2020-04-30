import React from "react";

import "../styles/tailwind.css";

import { Core } from "../tailwind-ds/core";

import { ThemeSwitcher } from "../components/theme-switcher";

function App({ Component, pageProps }) {
  return (
    <Core>
      <div className="py-8 px-4 grid grid-cols-4 max-w-6xl mx-auto gap-8">
        <ThemeSwitcher className="col-span-1" />
        <div className="col-span-3">
          <Component {...pageProps} />
        </div>
      </div>
    </Core>
  );
}

export default App;

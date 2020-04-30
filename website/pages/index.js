import React from "react";

import { useTheme } from "../tailwind-ds/core";

export default function Homepage() {
  const { theme } = useTheme();
  return (
    <div className="bg-primary py-4 px-8 w-full text-white rounded-sm shadow-md">
      <h1 className="text-xl">Hello, {theme.replace("-", " ")}!</h1>
    </div>
  );
}

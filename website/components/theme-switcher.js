import React from "react";

import { useTheme } from "../tailwind-ds/core";
import { Button } from "../tailwind-ds/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const brands = ["brand-one", "brand-two"];

  return (
    <div className="space-y-4 text-right">
      {brands
        .filter((brand) => brand !== theme)
        .map((brand, index) => {
          return (
            <div key={index}>
              <Button
                size="small"
                variant="base"
                onClick={() => setTheme(brand)}
              >
                {brand.replace("-", " ")}
              </Button>
            </div>
          );
        })}
    </div>
  );
}

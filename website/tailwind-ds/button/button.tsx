import React, { ButtonHTMLAttributes } from "react";

import classNames from "classnames";

type Size = "small" | "medium" | "large";
type Variant = "primary" | "secondary" | "weak" | "ghost" | "text";

type ButtonProps = {
  size: Size;
  variant: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  size = "medium",
  variant = "primary",
  onClick,
  children,
  ...props
}: ButtonProps) {
  const baseClassNames =
    "uppercase tracking-widest rounded-sm shadow font-semibold focus:outline-none focus:shadow-outline";

  const sizesMap = {
    small: "py-1 px-3 text-xs",
    medium: "py-2 px-4 text-sm",
    large: "py-4 px-6",
  };

  const variantsMap = {
    base: "bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-gray-900",
    primary: "bg-primary hover:bg-primary-hover text-white",
    secondary: "bg-secondary hover:bg-secondary-hover text-white",
  };

  const mergedClassNames = classNames(
    baseClassNames,
    sizesMap[size],
    variantsMap[variant]
  );

  return (
    <button className={mergedClassNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

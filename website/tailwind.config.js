module.exports = {
  purge: [
    "./website/pages**/*.js",
    "./website/components/**/*.ds",
    "./website/tailwind-ds/**/*.ds",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",
        base: "var(--color-base)",
        muted: "var(--color-muted)",
        "base-inverted": "var(--color-base-inverted)",
      },
    },
  },
  variants: {},
  plugins: [],
};

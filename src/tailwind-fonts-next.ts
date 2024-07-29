import defaultTheme from "tailwindcss/defaultTheme";

// Font configuration for Next.js because adding a variable to the default config breaks it for other frameworks.

// Put this one after the core config preset inside tailwind.config.js

module.exports = {
  theme: {
    fontFamily: {
      sans: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
      hanson: ["var(--font-hanson)", ...defaultTheme.fontFamily.sans],
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/preview.tsx"],
  presets: [require("./src/tailwind-theme")],
};

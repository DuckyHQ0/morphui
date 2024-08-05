import { tailwindCore } from "./src/tailwind-core";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/preview.tsx"],
  presets: [tailwindCore],
};

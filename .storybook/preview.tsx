import type { Preview } from "@storybook/react";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "../app/globals.css";
import React from "react";
import MorphUITheme from "./MorphUITheme";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: MorphUITheme,
    },
  },
  decorators: [
    (Story) => (
      <div className={`${jetBrainsMono.variable} ${outfit.variable} font-sans`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

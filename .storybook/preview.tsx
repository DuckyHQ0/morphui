import type { Preview } from "@storybook/react";
import "../src/tailwind.css";
import "@fontsource-variable/outfit";
import "@fontsource-variable/jetbrains-mono";
import MorphUITheme from "./morphui-theme";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#070707",
        },
      ],
    },
    docs: {
      theme: MorphUITheme,
    },
  },
  decorators: [
    (Story) => (
      <div className="font-sans text-text-1">
        <Story />
      </div>
    ),
  ],
};

export default preview;

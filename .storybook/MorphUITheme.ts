import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  // Typography
  fontBase: '"Outfit", sans-serif',
  fontCode: "sans-serif",

  brandTitle: "MorphUI",
  brandImage: "/storybook-brandlogo.png",
  brandTarget: "_self",

  //
  colorPrimary: "#0DB7FF",
  colorSecondary: "#0DB7FF",

  // UI
  appBg: "#070707",
  appContentBg: "#0f0f0fd4",
  appPreviewBg: "#0e0e0e",
  appBorderColor: "#ffffff09",
  appBorderRadius: 16,

  // Text colors
  textColor: "#DEDEDE",
  textInverseColor: "#DEDEDE",

  // Toolbar default and active colors
  barTextColor: "#DEDEDE",
  barSelectedColor: "#0DB7FF",
  barHoverColor: "#DEDEDE",
  barBg: "#0f0f0fd4",

  // Form colors
  inputBg: "#ffffff36",
  inputBorder: "#ffffff04",
  inputTextColor: "#DEDEDE",
  inputBorderRadius: 9,
});

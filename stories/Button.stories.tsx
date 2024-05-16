import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";
import { HiMiniPlus } from "react-icons/hi2";

// Meta

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    varientType: {
      options: ["solid", "soft"],
      control: { type: "radio" },
    },
    colour: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: { type: "radio" },
    },
    roundedLevel: {
      options: ["in", "out"],
      control: { type: "radio" },
    },
    contentInside: {
      options: ["text", "textIcon", "icon"],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// Button Text

export const Text: Story = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
);
Text.args = {
  varientType: "solid",
  colour: "primary",
  roundedLevel: "in",
  contentInside: "text",
  disabled: false,
};

// Button TextIcon

export const TextIcon: Story = (args: ButtonProps) => (
  <Button {...args}>
    Button
    <HiMiniPlus />
  </Button>
);
TextIcon.args = {
  varientType: "solid",
  colour: "primary",
  roundedLevel: "in",
  contentInside: "textIcon",
  disabled: false,
};
// Button Icon

export const Icon: Story = (args: ButtonProps) => (
  <Button {...args}>
    <HiMiniPlus />
  </Button>
);
Icon.args = {
  varientType: "solid",
  colour: "primary",
  roundedLevel: "in",
  contentInside: "icon",
  disabled: false,
};

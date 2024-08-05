import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const BtnIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-20"
    >
      <path
        fillRule="evenodd"
        d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

// Meta

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    variantType: {
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
  variantType: "solid",
  colour: "primary",
  roundedLevel: "in",
  contentInside: "text",
  disabled: false,
};

// Button TextIcon

export const TextIcon: Story = (args: ButtonProps) => (
  <Button {...args}>
    Button
    <BtnIcon />
  </Button>
);
TextIcon.args = {
  variantType: "solid",
  colour: "primary",
  roundedLevel: "in",
  contentInside: "textIcon",
  disabled: false,
};
// Button Icon

export const Icon: Story = (args: ButtonProps) => (
  <Button {...args}>
    <BtnIcon />
  </Button>
);
Icon.args = {
  variantType: "solid",
  colour: "primary",
  roundedLevel: "in",
  contentInside: "icon",
  disabled: false,
};

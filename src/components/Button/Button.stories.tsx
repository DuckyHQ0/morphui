import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const ArchiveBoxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-20"
    >
      <path
        fillRule="evenodd"
        d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
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
    <ArchiveBoxIcon />
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
    <ArchiveBoxIcon className="size-20" />
  </Button>
);
Icon.args = {
  variantType: "solid",
  colour: "primary",
  roundedLevel: "in",
  contentInside: "icon",
  disabled: false,
};

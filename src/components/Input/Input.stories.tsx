import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

// Meta

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  title: "Input",
  argTypes: {
    // @ts-ignore
    type: {
      options: ["text", "email", "password", "url", "search"],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

// Render Input

export const Default: Story = {
  args: {
    // @ts-ignore
    placeholder: "Input box",
    disabled: false,
    type: "text",
  },
};

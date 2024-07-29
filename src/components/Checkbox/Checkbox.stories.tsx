import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

// Meta

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Checkbox",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// Render Checkbox

export const Default: Story = {
  args: {
    label: "Label",
    disabled: false,
    defaultChecked: true,
    required: false,
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/Switch";

// Meta

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Switch",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Switch>;

// Render Switch

export const Default: Story = {
  args: {
    label: "Label",
    disabled: false,
    defaultChecked: true,
    required: false,
  },
};

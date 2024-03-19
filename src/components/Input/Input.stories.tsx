import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import React from "react";

// Meta

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
};
export default meta;

type Story = StoryObj<typeof Input>;

// Render Input

export const Default: Story = (args) => <Input {...args} />;
Default.args = {};

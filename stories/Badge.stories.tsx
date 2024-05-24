import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";
import React from "react";

// Meta

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  title: "Badge",
};
export default meta;

type Story = StoryObj<typeof Badge>;

// Render Input

export const Default: Story = {
  args: {
    text: "Badge",
    colour: "primary"
  },
};
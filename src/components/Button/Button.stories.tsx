import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {Button} from "./Button";

// Meta

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

// Primary

export const Primary: Story = (args) => (
  <Button {...args} />
);
Primary.args = {
  type: "undefined",
  disabled: false,
  text: "Primary",
};

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "../components/RadioGroup";

// Meta

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "RadioGroup",
  tags: ["autodocs"],
  
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

// Radio grou[]

export const Default: Story = (args) => (
  <RadioGroup {...args}>
    <RadioGroupItem id="r1" label="Item 1" value="r1" />
    <RadioGroupItem id="r2" label="Item 2" value="r2" />
    <RadioGroupItem id="r3" label="Item 3" value="r3" />
  </RadioGroup>
);
Default.args = {
};

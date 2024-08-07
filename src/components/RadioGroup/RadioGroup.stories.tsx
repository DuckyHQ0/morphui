import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem, RadioGroupProps } from "./RadioGroup";

// Meta

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "Radio Group",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

// Radio grou[]

export const Default: Story = (args: RadioGroupProps) => (
  <RadioGroup {...args}>
    <RadioGroupItem id="r1" label="Item 1" value="r1" />
    <RadioGroupItem disabled id="r2" label="Item 2" value="r2" />
    <RadioGroupItem id="r3" label="Item 3" value="r3" />
    <RadioGroupItem id="r4" label="Item 4" value="r4" />
    <RadioGroupItem id="r5" label="Item 5" value="r5" />
  </RadioGroup>
);
Default.args = {};

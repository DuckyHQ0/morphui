import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "../components/Select";
import React from "react";

// Meta

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Select",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Select>;

// Render Select

export const Default: Story = (
  args: React.JSX.IntrinsicAttributes & {
    label: string;
    children: React.ReactNode; // Render Select
    // Render Select
    defaultValue?: string | undefined;
    value?: string | undefined;
    onValueChange?:
      | ((
          // Meta
          value: string
        ) => void)
      | undefined;
    defaultOpen?: boolean | undefined;
    open?: boolean | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
    name?:
      | string
      // Render Select
      | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
  }
) => (
  <Select {...args}>
    <SelectGroup>
      <SelectItem value="1.0">v1.0</SelectItem>
      <SelectItem value="1.1">v1.1</SelectItem>
      <SelectItem value="1.2">v1.2</SelectItem>
      <SelectItem value="1.3">v1.3</SelectItem>
      <SelectItem value="2.0">v2.0</SelectItem>
    </SelectGroup>
  </Select>
);
Default.args = { label: "Version" };

// Render Select

export const Advanced: Story = (
  args: React.JSX.IntrinsicAttributes & {
    label: string;
    children: React.ReactNode; // Render Select
    // Render Select
    defaultValue?: string | undefined;
    value?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    defaultOpen?: boolean | undefined;
    open?: boolean | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
    name?: string | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
  }
) => (
  <Select {...args}>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="eggplant">Eggplant</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="zucchini" disabled>
        Zucchini
      </SelectItem>
      <SelectItem value="leek">Leek</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Meat</SelectLabel>
      <SelectItem value="beef">Beef</SelectItem>
      <SelectItem value="chicken">Chicken</SelectItem>
      <SelectItem value="lamb">Lamb</SelectItem>
      <SelectItem value="pork">Pork</SelectItem>
    </SelectGroup>
  </Select>
);
Advanced.args = { label: "Food" };

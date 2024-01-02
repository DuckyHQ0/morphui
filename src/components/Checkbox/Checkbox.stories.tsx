import {Meta, StoryObj} from "@storybook/react";
import {Checkbox} from "./Checkbox";
import React from "react";

// Meta

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: "Checkbox",
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// Render Checkbox

export const Default: Story = (args) => <Checkbox {...args} />;
Default.args = {label: "Label", disabled: false, defaultChecked: true, required: false};

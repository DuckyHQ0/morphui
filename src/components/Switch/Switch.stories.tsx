import {Meta, StoryObj} from "@storybook/react";
import {Switch} from "./Switch";
import React from "react";

// Meta

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: "Switch",
};
export default meta;

type Story = StoryObj<typeof Switch>;

// Render Switch

export const Default: Story = (args) => <Switch {...args} />;
Default.args = {label: "Label", disabled: false};

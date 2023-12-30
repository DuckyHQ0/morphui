import React from "react";
import {Meta, StoryObj} from "@storybook/react";
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

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = {
	type: "solid",
	colour: "primary",
	content: "text",
	roundedLevel: "in",
	disabled: false,
	text: "Primary Solid",
};

export const Secondary: Story = (args) => <Button {...args} />;
Secondary.args = {
	type: "solid",
	colour: "secondary",
	content: "text",
	roundedLevel: "in",
	disabled: false,
	text: "Secondary Solid",
};

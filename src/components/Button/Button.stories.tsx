import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";

// Meta

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Button",
	argTypes: {
		varientType: {
			options: ["solid", "soft", "outline"],
			control: {type: "radio"},
		},
		colour: {
			options: ["primary", "secondary", "success", "warning", "danger"],
			control: {type: "radio"},
		},
		contentInside: {
			options: ["text", "textIcon", "icon"],
			control: {type: "radio"},
		},
		roundedLevel: {
			options: ["in", "out"],
			control: {type: "radio"},
		},
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

// Button Render

export const Default: Story = (args) => <Button {...args} />;
Default.args = {
	varientType: "solid",
	colour: "primary",
	contentInside: "text",
	roundedLevel: "in",
	disabled: false,
	text: "Button",
};
import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";
import {HiMiniPlus} from "react-icons/hi2";

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

// Button Text

export const Text: Story = (args) => <Button {...args}>Button</Button>;
Text.args = {
	varientType: "solid",
	colour: "primary",
	contentInside: "text",
	roundedLevel: "in",
	disabled: false,
};

// Button TextIcon

export const TextIcon: Story = (args) => <Button {...args}>Button<HiMiniPlus /></Button>;
TextIcon.args = {
	varientType: "solid",
	colour: "primary",
	contentInside: "textIcon",
	roundedLevel: "in",
	disabled: false,
};
// Button Icon

export const Icon: Story = (args) => <Button {...args}><HiMiniPlus /></Button>;
Icon.args = {
	varientType: "solid",
	colour: "primary",
	contentInside: "icon",
	roundedLevel: "in",
	disabled: false,
};

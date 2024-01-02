import React, {MouseEventHandler} from "react";
import {cva, VariantProps} from "class-variance-authority"

const variants = cva(["rounded-in", "text-body", "text-white", "border", "enabled:hover:-translate-y-[2px]", "enabled:active:translate-y-6", "ease-out", "duration-150", "disabled:cursor-not-allowed", "disabled:text-white/30"], {
	variants: {
		type: {
			solid: [],
			soft: [],
			outlined: []
		},
		colour: {
			primary: ["bg-brand-blue/75", "border-stroke-1", "enabled:hover:bg-brand-blue", "enabled:active:bg-brand-blue/50", "disabled:bg-brand-blue/25"],
			secondary: ["bg-white/[.4]", "border-stroke-1", "enabled:hover:bg-white/[.8]", "enabled:active:bg-white/[.2]", "disabled:bg-transparent"],
			success: ["bg-brand-blue/75", "border-stroke-1", "enabled:hover:bg-brand-blue", "enabled:active:bg-brand-blue/50", "disabled:bg-brand-blue/25"],
			warning: ["bg-brand-blue/75", "border-stroke-1", "enabled:hover:bg-brand-blue", "enabled:active:bg-brand-blue/50", "disabled:bg-brand-blue/25"],
			danger: ["bg-brand-blue/75", "border-stroke-1", "enabled:hover:bg-brand-blue", "enabled:active:bg-brand-blue/50", "disabled:bg-brand-blue/25"]
		},
		content: {
			text: ["px-24", "py-8"],
			textIcon: ["px-20", "py-8"],
			icon: ["px-12", "py-10"]
		}
	},
	defaultVariants: {
		type: 'solid',
		colour: 'primary',
		content: 'text'
	}
})

interface ButtonProps {
	text: string;
	type: string;
	colour: string;
	content: string;
	disabled: boolean;
	roundedLevel: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
	text,
	type,
	colour,
	content,
	disabled,
	roundedLevel,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={variants(type, colour, content)}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

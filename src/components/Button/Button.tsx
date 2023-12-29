import React, {MouseEventHandler} from "react";
import "../../tailwind.css"

interface ButtonProps {
	text: string;
	type: string;
	disabled: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({text, type, disabled, onClick}: ButtonProps) => {
    return (
        <button className="bg-red p-128" disabled={disabled}>{text}</button>
    )
}
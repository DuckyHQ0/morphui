import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "text-body leading-none border w-fit h-[40px] shadow-fg flex items-center gap-6",
    "ease-out duration-150",
    "enabled:hover:-translate-y-[2px] enabled:active:translate-y-6",
    "disabled:cursor-not-allowed disabled:text-white/30",
  ],
  {
    variants: {
      variantType: {
        solid: [],
        soft: [],
      },
      colour: {
        primary: [],
        secondary: [],
        success: [],
        warning: [],
        danger: [],
      },
      contentInside: {
        text: ["px-20"],
        textIcon: ["px-16"],
        icon: ["px-8"],
      },
      roundedLevel: {
        in: ["rounded-in"],
        out: ["rounded-out"],
      },
    },
    compoundVariants: [
      // Primary
      {
        colour: "primary",
        variantType: "solid",
        className: [
          "bg-brand-blue/85 border-stroke-2 text-black",
          "enabled:hover:bg-brand-blue enabled:active:bg-brand-blue/50",
          "disabled:bg-brand-blue/25",
        ],
      },
      {
        colour: "primary",
        variantType: "soft",
        className: [
          "bg-brand-blue/[.07] border-brand-blue/30 text-white",
          "enabled:hover:bg-brand-blue/[.18] enabled:active:bg-brand-blue/10 enabled:active:border-brand-blue/[.13]",
          "disabled:bg-brand-blue/[.01] disabled:border-brand-blue/[.12]",
        ],
      },
      // Secondary
      {
        colour: "secondary",
        variantType: "solid",
        className: [
          "bg-white/[.04] border-stroke-2 text-white",
          "enabled:hover:bg-white/[.08] enabled:active:bg-white/[.02]",
          "disabled:bg-transparent",
        ],
      },
      {
        colour: "secondary",
        variantType: "soft",
        className: [
          "bg-white/[.02] border-white/[.07] text-white",
          "enabled:hover:bg-white/[.03] enabled:hover:border-white/[.12] enabled:active:bg-white/[.02] enabled:active:border-white/[.08]",
          "disabled:bg-transparent disabled:border-white/[.04]",
        ],
      },
      // Success / Green
      {
        colour: "success",
        variantType: "solid",
        className: [
          "bg-green/85 border-stroke-2 text-black",
          "enabled:hover:bg-green enabled:active:bg-green/50",
          "disabled:bg-green/25",
        ],
      },
      {
        colour: "success",
        variantType: "soft",
        className: [
          "bg-green/[.11] border-green/[.35] text-white",
          "enabled:hover:bg-green/[.18] enabled:hover:border-green/30 enabled:active:bg-green/10 enabled:active:border-green/[.13]",
          "disabled:bg-green/[.01] disabled:border-green[.09]",
        ],
      },
      // Warning / Yellow
      {
        colour: "warning",
        variantType: "solid",
        className: [
          "bg-yellow/85 border-stroke-2 text-black",
          "enabled:hover:bg-yellow enabled:active:bg-yellow/50",
          "disabled:bg-yellow/25",
        ],
      },
      {
        colour: "warning",
        variantType: "soft",
        className: [
          "bg-yellow/[.11] border-yellow/[.35] text-white",
          "enabled:hover:bg-yellow/[.18] enabled:hover:border-yellow/30 enabled:active:bg-yellow/10 enabled:active:border-yellow/[.13]",
          "disabled:bg-yellow/[.01] disabled:border-yellow/[.09]",
        ],
      },
      // Danger / Red
      {
        colour: "danger",
        variantType: "solid",
        className: [
          "bg-red/85 border-stroke-2 text-white",
          "enabled:hover:bg-red enabled:active:bg-red/50",
          "disabled:bg-red/25",
        ],
      },
      {
        colour: "danger",
        variantType: "soft",
        className: [
          "bg-red/[.11] border-red/[.43] text-white",
          "enabled:hover:bg-red/20 enabled:hover:border-red/[.35] enabled:active:bg-red/10 enabled:active:border-red/25",
          "disabled:bg-red/[.01] disabled:border-red/10",
        ],
      },
    ],
    defaultVariants: {
      variantType: "solid",
      colour: "primary",
      contentInside: "text",
      roundedLevel: "in",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof variants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  variantType?: "solid" | "soft";
  colour?: "primary" | "secondary" | "success" | "warning" | "danger";
  contentInside?: "text" | "textIcon" | "icon";
  roundedLevel?: "in" | "out";
}
export const Button = ({
  children,
  variantType,
  colour,
  contentInside,
  roundedLevel,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={variants({ variantType, colour, contentInside, roundedLevel })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

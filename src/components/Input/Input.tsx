import React from "react";

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="min-w-[200px] h-[40px] px-24 gap-12 text-body leading-none rounded-in bg-transparent bg-fg-2 border border-stroke-2 shadow-fg-2 placeholder-text-subtle focus:bg-fg-2-active transition-colors duration-150 ease-out focus:text-text-1 text-text-1 focus:outline-none disabled:cursor-not-allowed disabled:bg-fg-2-disabled disabled:text-text-disabled"
    />
  );
};

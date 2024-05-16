import React from "react";

export const Input = ({id, placeholder, disabled}: {id: string, placeholder:string, disabled:boolean}) => {
  return <input type="text" id={id} name={id} placeholder={placeholder} disabled={disabled} className="min-w-[200px] py-10 px-24 gap-12 text-body rounded-in bg-transparent bg-fg-2 border border-stroke-2 shadow-fg-2 placeholder-text-subtle focus:bg-fg-2-active transition-colors duration-150 ease-out focus:text-text-1 focus:outline-none" />;
};

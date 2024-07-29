import React, { ReactNode } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import type { SelectProps as RadixSelectProps } from "@radix-ui/react-select";

export type SelectProps = RadixSelectProps & {
  label: string;
  children: ReactNode;
};

export const Select = ({ label, children, ...props }: SelectProps) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className="inline-flex gap-32 justify-center items-center px-24 py-12 border outline-none text-body rounded-in h-fit bg-fg-2 border-stroke-2 text-text-1 shadow-fg-2 data-[disabled]:bg-fg-2-disabled data-[disabled]:text-text-disabled data-[disabled]:cursor-not-allowed"
        aria-label={label}
      >
        <RadixSelect.Value placeholder={label} />
        <RadixSelect.Icon className="data-[state=open]:rotate-180">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className="overflow-hidden relative z-50 mt-8 w-full rounded-md border bg-fg-2 max-h-[436px] rounded-in backdrop-blur-fg-2 border-stroke-2 shadow-fg-2 text-text-1 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out"
        >
          <RadixSelect.ScrollUpButton className="flex justify-center items-center py-6 border-b cursor-default h-fit border-stroke-2">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="flex flex-col gap-12 px-24 py-12">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex justify-center items-center py-6 border-t cursor-default h-fit border-stroke-2">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RadixSelect.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className="body text-text-1 font-sans flex items-center h-fit relative select-none cursor-pointer data-[disabled]:text-text-disabled data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:text-selected data-[state=checked]:text-selected duration-150 ease-out transition-colors"
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

export const SelectGroup = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Group className="flex flex-col gap-12">
      {children}
    </RadixSelect.Group>
  );
};

export const SelectLabel = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Label className="text-sub text-text-subtle">
      {children}
    </RadixSelect.Label>
  );
};

export const SelectSeparator = () => {
  return <RadixSelect.Separator className="h-[1px] w-full bg-white/10" />;
};

const ChevronDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-24"
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ChevronUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-24"
    >
      <path
        fillRule="evenodd"
        d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

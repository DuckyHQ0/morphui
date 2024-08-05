import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import type {
  RadioGroupProps as RadixRadioGroupProps,
  RadioGroupItemProps as RadixRadioGroupItemProps,
} from "@radix-ui/react-radio-group";
import { ReactNode } from "react";

export type RadioGroupProps = RadixRadioGroupProps & { children: ReactNode };

export const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root {...props} className="flex flex-col gap-12">
      {children}
    </RadixRadioGroup.Root>
  );
};

export type RadioGroupItemProps = RadixRadioGroupItemProps & {
  label: string;
  value: string;
};

export const RadioGroupItem = ({
  label = "Radio item",
  value,
  ...props
}: RadioGroupItemProps) => {
  return (
    <div className="flex gap-8 items-center">
      <RadixRadioGroup.Item
        className="flex justify-center items-center border size-32 rounded-24 bg-fg-2 border-stroke-2 shadow-fg-2 disabled:cursor-not-allowed disabled:bg-fg-2-disabled"
        value={value}
        {...props}
      >
        <RadixRadioGroup.Indicator className="size-16 bg-accent data-[disabled]:bg-accent/30 rounded-full data-[state=checked]:animate-scale-in data-[state=unchecked]:animate-scale-out" />
      </RadixRadioGroup.Item>
      <label htmlFor={value} className="text-body leading-none text-text-1">
        {label}
      </label>
    </div>
  );
};

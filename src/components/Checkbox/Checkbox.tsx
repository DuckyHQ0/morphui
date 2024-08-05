import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";

export type CheckboxProps = RadixCheckboxProps;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  return (
    <RadixCheckbox.Root
      className="flex justify-center items-center size-32 border bg-fg-2 data-[disabled]:bg-fg-2-disabled data-[disabled]:cursor-not-allowed border-stroke-2 rounded-in"
      {...props}
    >
      <RadixCheckbox.Indicator className="text-brand-blue data-[disabled]:text-brand-blue/30 data-[state=checked]:animate-scale-in data-[state=unchecked]:animate-scale-out">
        <CheckIcon />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-20"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

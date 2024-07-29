import * as RadixSwitch from "@radix-ui/react-switch";
import type { SwitchProps as RadixSwitchProps } from "@radix-ui/react-switch";

export type SwitchProps = RadixSwitchProps & { label: string };

export const Switch = ({ label, ...props }: SwitchProps) => {
  return (
    <div className="flex gap-8 items-center">
      <RadixSwitch.Root
        className="w-64 h-36 rounded-[999px] bg-fg-2 border border-stroke-2 data-[disabled]:cursor-not-allowed data-[disabled]:bg-fg-2-disabled"
        {...props}
      >
        <RadixSwitch.Thumb className="block w-[28px] h-[28px] bg-white/5 data-[disabled]:bg-white/[.03] rounded-[999px] transition-all ease-out duration-150 translate-x-[3px] will-change-transform data-[state=checked]:translate-x-[31px] data-[state=checked]:bg-brand-blue data-[disabled]:data-[state-checked]:bg-brand-blue/30" />
      </RadixSwitch.Root>

      <label className="text-body text-text-1" htmlFor="c1">
        {label}
      </label>
    </div>
  );
};

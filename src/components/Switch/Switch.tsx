import * as RadixSwitch from "@radix-ui/react-switch";
import type { SwitchProps as RadixSwitchProps } from "@radix-ui/react-switch";

export type SwitchProps = RadixSwitchProps;

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className="w-[56px] h-32 rounded-full bg-fg-2 border border-stroke-2 data-[disabled]:cursor-not-allowed data-[disabled]:bg-fg-2-disabled"
      {...props}
    >
      <RadixSwitch.Thumb className="block size-24 bg-white/5 data-[disabled]:bg-white/[.03] rounded-full transition-all ease-out duration-150 translate-x-[3px] will-change-transform data-[state=checked]:translate-x-[27px] data-[state=checked]:bg-brand-blue data-[disabled]:data-[state-checked]:bg-brand-blue/30" />
    </RadixSwitch.Root>
  );
};

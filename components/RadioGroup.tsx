import * as RadixRadioGroup from "@radix-ui/react-radio-group"
import { ReactNode } from "react"

export const RadioGroup = ({children}: {children: ReactNode}) => {
 return (<RadixRadioGroup.Root>{children}</RadixRadioGroup.Root>)
}

export const RadioGroupItem = ({value, id, label}: {value: string, id:string, label:string}) => {
    return (<div className="flex gap-8"><RadixRadioGroup.Item className="size-24 rounded-24 bg-fg-2 border border-stroke-2 shadow-fg-2" id={id} value={value}><RadixRadioGroup.Indicator /></RadixRadioGroup.Item><label htmlFor={id}>{label}</label></div>)
   }
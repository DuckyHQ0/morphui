import { ReactNode } from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { AlertDialogProps as RadixAlertDialogProps } from "@radix-ui/react-alert-dialog";

export type AlertDialogProps = {
  children: ReactNode;
} & RadixAlertDialogProps;

export const AlertDialog = ({ children }: AlertDialogProps) => (
  <RadixAlertDialog.Root>{children}</RadixAlertDialog.Root>
);

export const AlertDialogTrigger = ({ children }: { children: ReactNode }) => (
  <RadixAlertDialog.Trigger asChild>{children}</RadixAlertDialog.Trigger>
);
export const AlertDialogCancel = ({ children }: { children: ReactNode }) => (
  <RadixAlertDialog.Cancel asChild>{children}</RadixAlertDialog.Cancel>
);
export const AlertDialogAction = ({ children }: { children: ReactNode }) => (
  <RadixAlertDialog.Action asChild>{children}</RadixAlertDialog.Action>
);

export const AlertDialogContent = ({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description: string;
  title: string;
}) => (
  <RadixAlertDialog.Portal>
    <RadixAlertDialog.Overlay className="bg-black/25 backdrop-blur-sm fixed inset-0 data-[state=open]:animate-fade-in" />
    <RadixAlertDialog.Content className="data-[state=open]:animate-fade-in fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] bg-fg-1 border border-stroke-1 backdrop-blur-fg-1 p-32 flex flex-col gap-12 rounded-out focus:outline-none text-white">
      <RadixAlertDialog.Title className="h3">{title}</RadixAlertDialog.Title>
      <RadixAlertDialog.Description className="body">
        {description}
      </RadixAlertDialog.Description>
      <div className="flex gap-16">{children}</div>
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
);

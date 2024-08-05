import { ReactNode } from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { AlertDialogProps as RadixAlertDialogProps } from "@radix-ui/react-alert-dialog";
import { AlertDialogContentProps as RadixAlertDialogContentProps } from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";

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
export const AlertDialogTitle = ({ children }: { children: ReactNode }) => (
  <RadixAlertDialog.Title className="text-h3 font-medium leading-none">
    {children}
  </RadixAlertDialog.Title>
);
export const AlertDialogDescription = ({
  children,
}: {
  children: ReactNode;
}) => (
  <RadixAlertDialog.Description className="text-body">
    {children}
  </RadixAlertDialog.Description>
);

export type AlertDialogContentProps = RadixAlertDialogContentProps & {
  children: ReactNode;
  className?: string;
};

export const AlertDialogContent = ({
  children,
  className,
  ...props
}: AlertDialogContentProps) => (
  <RadixAlertDialog.Portal>
    <RadixAlertDialog.Overlay className="bg-black/25 backdrop-blur-sm fixed inset-0 data-[state=open]:animate-fade-in" />
    <RadixAlertDialog.Content
      {...props}
      className={clsx(
        className,
        "data-[state=open]:animate-fade-in fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-fg-1 border border-stroke-1 backdrop-blur-fg-1 p-32 rounded-out focus:outline-none text-text-1",
      )}
    >
      {children}
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
);

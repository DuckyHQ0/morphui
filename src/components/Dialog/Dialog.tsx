import { ReactNode } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";
import { DialogContentProps as RadixDialogContentProps } from "@radix-ui/react-dialog";
import { clsx } from "clsx";

export type DialogProps = {
  children: ReactNode;
} & RadixDialogProps;

export const Dialog = ({ children }: DialogProps) => (
  <RadixDialog.Root>{children}</RadixDialog.Root>
);

export const DialogTrigger = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
);
export const DialogTitle = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Title className="text-h3 font-medium leading-none">
    {children}
  </RadixDialog.Title>
);
export const DialogDescription = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Description className="text-body">
    {children}
  </RadixDialog.Description>
);
export const DialogClose = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Close asChild>{children}</RadixDialog.Close>
);

export type DialogContentProps = RadixDialogContentProps & {
  children: ReactNode;
  className?: string;
};

export const DialogContent = ({ children, className }: DialogContentProps) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className="bg-black/25 backdrop-blur-sm fixed inset-0 data-[state=open]:animate-fade-in" />
    <RadixDialog.Content
      className={clsx(
        className,
        "data-[state=open]:animate-fade-in fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-fg-1 border border-stroke-1 backdrop-blur-fg-1 p-32 rounded-out focus:outline-none text-text-1",
      )}
    >
      {children}
    </RadixDialog.Content>
  </RadixDialog.Portal>
);

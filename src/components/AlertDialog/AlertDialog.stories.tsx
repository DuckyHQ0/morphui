import { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogProps,
  AlertDialogTitle,
  AlertDialogDescription,
} from "./AlertDialog";
import { Button } from "../Button";

// Meta

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: "Alert Dialog",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

// Render AlertDialog

export const Default: Story = (args: AlertDialogProps) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger>
      <Button>Press Me</Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="p-24 flex flex-col gap-12">
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>Lorem ipsum.</AlertDialogDescription>
      <div className="flex gap-12">
        <AlertDialogCancel>
          <Button colour="secondary">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction>
          <Button colour="danger">Delete</Button>
        </AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);
Default.args = {};

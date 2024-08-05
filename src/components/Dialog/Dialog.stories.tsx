import { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
  DialogProps,
  DialogClose,
} from "./Dialog";
import { Button } from "../Button";
import { Input } from "../Input";

// Meta

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Dialog",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Dialog>;

// Render AlertDialog

export const Default: Story = (args: DialogProps) => (
  <Dialog {...args}>
    <DialogTrigger>
      <Button>Press Me</Button>
    </DialogTrigger>
    <DialogContent className="p-24 flex flex-col gap-12">
      <DialogTitle>Dialog</DialogTitle>
      <DialogDescription>Lorem ipsum.</DialogDescription>
      <Input placeholder="Input" />
      <DialogClose>
        <Button colour="success">Close</Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
);
Default.args = {};

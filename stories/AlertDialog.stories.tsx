
import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger} from "../components/AlertDialog"
import React from "react";
import { Button } from "@/components/Button";

// Meta

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: "Alert Dialog",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

// Render AlertDialog

export const Default: Story = (
  args: {}
) => (
  <AlertDialog>
                <AlertDialogTrigger>
                  <Button>Press Me</Button>
                </AlertDialogTrigger>
                <AlertDialogContent
                  title="Are You Sure?"
                  description="Description. Lorem ipsum dolar sit amet."
                >
                  <AlertDialogCancel>
                    <Button colour="secondary">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button
                      colour="danger"
                    >
                      Delete
                    </Button>
                  </AlertDialogAction>
                </AlertDialogContent>
              </AlertDialog>
);
Default.args = {  };
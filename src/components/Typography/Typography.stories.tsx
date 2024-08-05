import { Meta, StoryObj } from "@storybook/react";

// Meta

const meta: Meta = {
  title: "Typography",
};
export default meta;

type Story = StoryObj;

// Render Input

export const All: Story = {
  render() {
    return (
      <div className="flex flex-col gap-24">
        <h1 className="font-hanson text-[96px]">Display</h1>
        <h1 className="text-h1 font-medium">Heading 1</h1>
        <h2 className="text-h2 font-medium">Heading 2</h2>
        <h3 className="text-h3 font-medium">Heading 3</h3>
        <p className="text-body font-semibold">Strong Body</p>
        <p className="text-body font-normal">Body</p>
        <p className="text-sub">Subtext</p>
        <code className="text-mono font-mono">Mono</code>
      </div>
    );
  },
};

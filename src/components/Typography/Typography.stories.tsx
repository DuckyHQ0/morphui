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
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p className="strong">Body</p>
        <p>Body</p>
        <p className="sub">Subtext</p>
        <code>Mono</code>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Stack",
  component: Stack,
  argTypes: {
    number: {
      type: "number",
      defaultValue: 20,
      description: "set number of boxes to render",
    },
  },
  args: {
    number: 5,
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
} satisfies Meta<typeof Stack>;

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
type Story = StoryObj<typeof Stack>;

export const StackWrap: Story = {
  name: "im primary",
  args: {
    direction: "row",
    wrap: true,
  },
};

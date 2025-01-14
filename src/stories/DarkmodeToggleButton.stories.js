import React from "react";
import DarkmodeToggleButton from "../components/DarkmodeToggleButton";
import { within, userEvent } from "@storybook/test";

export default {
  title: "Toggle/DarkmodeToggleButton",
  component: DarkmodeToggleButton,
};

const Template = () => <DarkmodeToggleButton />;

export const Default = Template.bind({});
Default.storyName = "Default";

export const Interactive = Template.bind({});
Interactive.storyName = "Interactive";

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button", { name: /toggle the lights/i });
  await userEvent.click(button);
};

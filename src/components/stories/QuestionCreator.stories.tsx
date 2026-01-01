import React from "react";
import type {StoryObj, Meta} from "@storybook/react-vite";
import {QuestionCreator} from "../QuestionCreator";

const meta = {
    component: QuestionCreator,
    title: "Components/Examination/QuestionCreator",
} satisfies Meta<typeof QuestionCreator>;

export default meta;

type Story = StoryObj<typeof QuestionCreator>;

export const Default: Story = {
    args: {},
};

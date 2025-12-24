import type { Meta, StoryObj } from "@storybook/react-vite";
import MultiChoiceEditor from "../MultiChoiceEditor";

const meta = { 
    component: MultiChoiceEditor ,
    title: 'Components/Editor/MultiChoiceEditor'
} satisfies Meta<typeof MultiChoiceEditor>;
export default meta;

export type Story = StoryObj<typeof MultiChoiceEditor>;

export const Default: Story = {
    args: {
        question: "What is the capital of France?",
        choices: [
            { content: "Berlin", correct: false },
            { content: "Madrid", correct: false },
            { content: "Paris", correct: true },
            { content: "Rome", correct: false },
        ],
        hints: ["It's known as the city of lights."],
        questionId: "1",
    },
};
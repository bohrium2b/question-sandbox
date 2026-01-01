import type { Meta, StoryObj } from "@storybook/react-vite";
import MultiChoiceEditor from "../MultiChoiceEditor";
import Markdown from "../Markdown";
import { useState, useRef } from "react";
import type { MultiChoiceProps } from "../MultiChoice";

const meta = { 
    component: MultiChoiceEditor ,
    title: 'Components/Editor/MultiChoiceEditor',
    render: (args) => {
        const editorRef = useRef<any>(null);

        const [questionText, setQuestionText] = useState("");
        const [choices, setChoices] = useState<MultiChoiceProps["choices"]>([]);

        const handleGetQuestion = () => {
            if (editorRef.current) {
                const questionData = editorRef.current.getQuestion();
                setQuestionText(questionData);
                const choicesData = questionData.choices;
                setChoices(choicesData);
            }
        };

        return (
            <>
                <MultiChoiceEditor
                    ref={editorRef}
                    {...args}
                />
                <div style={{ marginTop: "20px" }}></div>
                <button onClick={handleGetQuestion}>Get Question Data</button>
                {questionText && (
                    <div style={{ marginTop: "20px" }}>
                        <h3>Question Data:</h3>
                        <Markdown>
{JSON.stringify({ question: questionText, choices: choices }, null, 2)}
                        </Markdown>
                    </div>
                )}
            </>
        );
    }
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
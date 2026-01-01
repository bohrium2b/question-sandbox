import {MultiChoice, type MultiChoiceRef} from "../MultiChoice";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Button from "@mui/material/Button";
import { expect } from "storybook/test";
import CorrectIcon from "../assets/CorrectIcon.svg?react";
import IncorrectIcon from "../assets/IncorrectIcon.svg?react";



const meta = { 
    component: MultiChoice,
    title: "Components/Examination/MultiChoice",
    render: (args) => {
        const rendererRef = React.useRef<MultiChoiceRef | null>(null);
        const [score, setScore] = React.useState<number | null>(null);

        const handleGetScore = () => {
            if (rendererRef.current) {
                if (typeof rendererRef.current.getScore === "function") {
                    const score = rendererRef.current.getScore();
                    setScore(score);
                } else {
                    console.log("getScore method not available on MultiChoice ref. ", rendererRef.current);
                }
            } else {
                console.log("MultiChoice ref is null.", rendererRef.current);
            }
        };

        return (
            <>
                <MultiChoice ref={rendererRef} {...args} />
                <div style={{ marginTop: "20px" }}></div>
                <Button variant="contained" onClick={handleGetScore}>Check</Button>
                {score !== null && (
                    <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>Score: {score}</span>
                        {score > 0 ? <CorrectIcon width={24} height={24} /> : (score == 0 ? <IncorrectIcon width={24} height={24} /> : null)}
                    </div>
                )}
            </>
        );
    }

} satisfies Meta<typeof MultiChoice>;
export default meta;




type Story = StoryObj<typeof MultiChoice>;
export const Default: Story = {
    args: {
        question: "What is the capital of France?",
        choices: [
            { content: "Paris", correct: true },
            { content: "London", correct: false },
            { content: "Berlin", correct: false },
            { content: "Madrid", correct: false },
        ],
        hints: ["Think about the most famous cities in Europe."],
        questionId: "1",
        onScoreChange: (score) => console.log("Score changed:", score),
    },
    play: async ({ canvas, userEvent }) => {
        const parisOption = await canvas.getAllByText('Paris');
        await userEvent.click(parisOption[1]); // Click the second occurrence of 'Paris'
        const getScoreButton = await canvas.getByRole('button', { name: 'Get Score' });
        await userEvent.click(getScoreButton);
        const scoreDisplay = await canvas.getByText('Score: 1');
        await expect(scoreDisplay).toBeInTheDocument();
    }
};

export const Maths: Story = {
    args: {
        question: "What is $\\sqrt{16}$?",
        choices: [
            { content: "$4$", correct: true },
            { content: "5", correct: false },
            { content: "1", correct: false },
            { content: "2", correct: false },
        ],
        hints: ["Remember that the square root of a number is a value that, when multiplied by itself, gives the original number."],
        questionId: "2",
        onScoreChange: (score) => console.log("Score changed:", score),
    },

};


export const Physics: Story = {
    args: {
        question: "The time taken for an object to fall from rest through a certain distance on Mars is $T_M$. The time taken for the same object to fall from rest through the same distance on Earth is $T_E$. The acceleration of free fall on Mars is $3.71 m s^{-2}$. \n\n What is the ratio $\\frac{T_M}{T_E}$?",
        choices: [
            { content: "$0.378$", correct: false },
            { content: "$0.615$", correct: false },
            { content: "1.63", correct: true },
            { content: "2.64", correct: false },
        ],
        hints: ["Acceleration due to gravity is a constant.", "You can calculate the time taken using $x = -\\frac{1}{2}at^2$."],
        questionId: "2",
        onScoreChange: (score) => console.log("Score changed:", score),
    },

};

export const NoQuestionNumber: Story = {
    args: {
        question: "What is $\\sqrt{16}$?",

        choices: [{
            "content": "$4$",
            "correct": true
        }, {
            "content": "5",
            "correct": false
        }, {
            "content": "1",
            "correct": false
        }, {
            "content": "2",
            "correct": false
        }],

        hints: [
            "Remember that the square root of a number is a value that, when multiplied by itself, gives the original number."
        ],

        questionId: ""
    },
};

export const LongQuestionName: Story = {
    args: {
        question: "The time taken for an object to fall from rest through a certain distance on Mars is $T_M$. The time taken for the same object to fall from rest through the same distance on Earth is $T_E$. The acceleration of free fall on Mars is $3.71 m s^{-2}$. \n\n What is the ratio $\\frac{T_M}{T_E}$?",

        choices: [{
            "content": "$0.378$",
            "correct": false
        }, {
            "content": "$0.615$",
            "correct": false
        }, {
            "content": "1.63",
            "correct": true
        }, {
            "content": "2.64",
            "correct": false
        }],

        hints: [
            "Acceleration due to gravity is a constant.",
            "You can calculate the time taken using $x = -\\frac{1}{2}at^2$."
        ],

        questionId: "Question 2"
    },

};

export const ShorterName: Story = {
    args: {
        question: "The time taken for an object to fall from rest through a certain distance on Mars is $T_M$. The time taken for the same object to fall from rest through the same distance on Earth is $T_E$. The acceleration of free fall on Mars is $3.71 m s^{-2}$. \n\n What is the ratio $\\frac{T_M}{T_E}$?",

        choices: [{
            "content": "$0.378$",
            "correct": false
        }, {
            "content": "$0.615$",
            "correct": false
        }, {
            "content": "1.63",
            "correct": true
        }, {
            "content": "2.64",
            "correct": false
        }],

        hints: [
            "Acceleration due to gravity is a constant.",
            "You can calculate the time taken using $x = -\\frac{1}{2}at^2$."
        ],

        questionId: "2A"
    },

};


export const KPopQuestion: Story = {
    args: {
        question: "ENHYPEN is a South Korean boy band. Who is the leader of ENHYPEN?",
        choices: [
            { content: "Jungwon", correct: true },
            { content: "Heeseung", correct: false },
            { content: "Sunghoon", correct: false },
            { content: "Niki", correct: false }
        ],
        hints: [
            "He is the leader of ENHYPEN.",
            "He was born in South Korea.",
            "He is known for his leadership skills."
        ],
        questionId: "1",
    },
}
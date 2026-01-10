import type { Meta, StoryObj } from '@storybook/react-vite';
import { QuestionRendererWithUI } from '../QuestionRenderer';
import type { Question } from '../../types';

const sampleQuestion: Question = {
    type: 'multi-choice',
    questionId: '1',
    question: 'What is the capital of France?',
    choices: [
        { content: 'Berlin', correct: false },
        { content: 'Madrid', correct: false },
        { content: 'Paris', correct: true },
        { content: 'Rome', correct: false },
    ],
    numChoices: 1,
    hints: ['It is also known as the city of lights.'],
};

const complexSampleQuestion: Question = {
    type: 'multi-choice',
    questionId: '2',
    question: 'Which of the following are prime numbers?',
    choices: [
        { content: '2', correct: true, rationale: 'This answer is **correct**. $2$ is the smallest and only even prime number.' },
        { content: '3', correct: true, rationale: ' This answer is **correct**. $3$ is a prime number because its only divisors are 1 and 3.' },
        { content: '4', correct: false, rationale: '$4$ is not a prime number because it can be divided by 1, 2, and 4.' },
        { content: '5', correct: true, rationale: 'This answer is **correct**. $5$ is a prime number because its only divisors are 1 and 5.' },
        { content: '6', correct: false, rationale: '$6$ is not a prime number because it can be divided by 1, 2, 3, and 6.' },
    ],
    numChoices: 3,
    hints: ['A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.', 'The first few prime numbers are 2, 3, 5, 7, 11, and 13.', 'Remember that 1 is not considered a prime number.', 'So, the correct answers are 2, 3, and 5.'],
}

const meta = {
    component: QuestionRendererWithUI,
    title: 'Components/Examination/QuestionRendererWithUI',
    argTypes: {},
} satisfies Meta<typeof QuestionRendererWithUI>;

export default meta;

type Story = StoryObj<typeof QuestionRendererWithUI>;

export const MultiChoiceQuestion: Story = {
    render: () => <QuestionRendererWithUI question={sampleQuestion} />,
};

export const ComplexMultiChoiceQuestion: Story = {
    render: () => <QuestionRendererWithUI question={complexSampleQuestion} />,
};
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

const meta = {
    component: QuestionRendererWithUI,
    title: 'Question/QuestionRendererWithUI',
} satisfies Meta<typeof QuestionRendererWithUI>;

export default meta;

type Story = StoryObj<typeof QuestionRendererWithUI>;

export const MultiChoiceQuestion: Story = {
    render: () => <QuestionRendererWithUI question={sampleQuestion} />,
};

export const MultiChoiceQuestionReviewMode: Story = {
    render: () => <QuestionRendererWithUI question={sampleQuestion} reviewMode={true} />,
};
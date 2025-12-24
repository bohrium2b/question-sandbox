import type { MultiChoiceChoice } from "./components/MultiChoice";

export type Exam = {
    uuid: string;
    title: string;
    start_time: string; // ISO 8601 format
    duration: number; // in minutes
    json_data: ExamData; // JSON string
    owner: string; // username of the owner
}

export type User = {
    username: string;
    is_staff: boolean;
    email: string;
    first_name: string;
    last_name: string;
    timezone: string;
}

export type MultiChoiceQuestion = {
    question: string;
    choices: MultiChoiceChoice[];
    hints?: string[];
    questionId?: string;
    numChoices?: number;
};

export type PassageQuestion = MultiChoiceQuestion & {
    passage: string;
}

export type Question = (MultiChoiceQuestion & {type: 'multi-choice'} ) | (PassageQuestion & {type: 'passage'});

export type ExamData = {
    questions: Question[];
    instructions: string;
}
import type {Question} from "../types";
import React from 'react';
import {MultiChoice} from "./MultiChoice";
import {PassageQuestion} from "./PassageQuestion";

export const QuestionRenderer: React.FC<{ question: Question, reviewMode?: boolean }> = ({ question, reviewMode }) => {
    switch (question.type) {
        case 'multi-choice':
            return <MultiChoice {...question} reviewMode={reviewMode} />;
        case 'passage':
            return <PassageQuestion {...question} reviewMode={reviewMode} />;
        default:
            return null;
    }
};

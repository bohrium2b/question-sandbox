import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React, { useState, lazy } from "react";
import { Button } from "@mui/material";
import type { MultiChoiceEditorRef } from "./MultiChoiceEditor";
import type { Question } from "../types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MultiChoiceEditor = lazy(() => import("./MultiChoiceEditor"));

export type QuestionCreatorRef = {
    getQuestion: () => Question | null;
    isValid: () => boolean;
};

export const QuestionCreator = React.forwardRef<QuestionCreatorRef, object>((props, ref) => {
    const [activeStep, setActiveStep] = useState(0);
    const [question, setQuestion] = useState<Question>({
        type: 'multi-choice',
        question: '',
        choices: [],
        hints: [],
        questionId: '',
        numChoices: 1
    });
    const editorRef = React.useRef<MultiChoiceEditorRef>(null);

    const steps = ["Choose Question Type", "Create Question", "Preview Question"];

    React.useImperativeHandle(ref, () => ({
        getQuestion: () => question,
        isValid: () => { return question.question.trim() !== '' && question.choices.length > 0 }
    }));

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === 0 && (
                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6">Select Question Type</Typography>
                    <Button variant="contained" onClick={() => {
                        setQuestion({ type: 'multi-choice', question: '', choices: [], hints: [], questionId: '', numChoices: 1 });
                        handleNext();
                    }} sx={{ marginTop: 2 }}>
                        Multi-Choice Question
                    </Button>
                    {/* Add more question types here */}
                </Box>
            )}
            {activeStep === 1 && (
                <>
                <MultiChoiceEditor ref={editorRef} {...question}  />
                <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
                    
                    <Button onClick={handleBack} sx={{ marginLeft: 2 }}>
                        Back
                    </Button>
                        <Button variant="contained" onClick={() => {
                            if (editorRef.current) {
                                const tempQuestion = { question: editorRef.current.getQuestion(), choices: editorRef.current.getChoices(), hints: editorRef.current.getHints(), questionId: editorRef.current.getQuestionId(), numChoices: editorRef.current.getNumChoices() } as Question;
                                console.log(tempQuestion);
                                if (tempQuestion) {
                                    setQuestion({ ...tempQuestion, type: 'multi-choice' });
                                    handleNext();
                                }
                            }
                        }}>
                            Next
                        </Button>
                </Box>
                </>
            )}
            {activeStep === 2 && (
                <Box sx={{ padding: 2 }}>
                    {/* Review questions here */}
                    <Typography variant="h6">Preview Your Question</Typography>
                    <Typography variant="body1">{question.question}</Typography>
                    <ul>
                        {question.choices?.map((choice, index) => (
                            <li key={index}>{choice.content} {choice.correct && <span>(Correct)</span>}</li>
                        ))}
                    </ul>
                    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>

                        <Button onClick={handleBack} sx={{ marginLeft: 2 }}>
                            Back
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
});

export default QuestionCreator;
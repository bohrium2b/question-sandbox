import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Markdown from "./Markdown";
import { MultiChoice, type MultiChoiceProps } from "./MultiChoice";
import Button from "@mui/material/Button";
import type { PassageQuestion as PassageQuestionType } from "../types";

export type PassageQuestionProps = PassageQuestionType & {
    onScoreChange?: (score: number) => void;
    reviewMode?: boolean;
};

export const PassageQuestion: React.FC<PassageQuestionProps> = ({
    question,
    choices,
    hints = [],
    questionId,
    onScoreChange,
    passage,
    reviewMode = false,
}) => {
    // This component renders a passage question with a passage, question, choices, and hints.
    // It uses the MultiChoice component to display the question and choices.
    // The passage is displayed using the Markdown component for formatting.

    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <>
            <Box
                sx={{
                    display: 'none',
                    '@media print': {
                        display: 'block',
                        position: 'static',
                        width: '100%',
                        marginBottom: 2,
                    },
                }}
            >
                <Markdown>{passage}</Markdown>
                <MultiChoice
                    question={question}
                    choices={choices}
                    hints={hints}
                    questionId={questionId}
                    onScoreChange={onScoreChange}
                    reviewMode={reviewMode}
                />
            </Box>

        <Box sx={{ marginBottom: 2, padding: 1, display: 'flex', flexDirection: 'row', gap: 1, 
            '@media print': {
                display: 'none',
            }
         }}>
            
            <Box
                sx={{
                    marginBottom: 2,
                    borderRadius: 3,
                    border: "2px solid #d9d9d9",
                    padding: 2,
                    width: isExpanded ? '100%' : '20%',
                    transition: 'width 1s cubic-bezier(0.3, 0.2, 0.2, 1.4)',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        height: isExpanded ? "auto" : "100%",
                        maxHeight: isExpanded ? "50vh" : "300px", // adjust as needed
                        overflow: isExpanded ? "scroll" : "hidden",
                        transition: "max-height 1s cubic-bezier(0.3, 0.2, 0.2, 1.4)",
                        marginBottom: 2,
                    }}
                >
                    <Markdown>{passage}</Markdown>
                    
                    {!isExpanded && (
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: 48,
                                background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
                                pointerEvents: "none",
                            }}
                        />
                    )}
                </Box>
                {/* Icon button to expand/collapse passage, placed between the two boxes */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 48,
                        marginX: 1,
                    }}
                >
                    <Button
                        variant="outlined"
                        onClick={() => setIsExpanded(!isExpanded)}
                        sx={{
                            borderRadius: '50%',
                            minWidth: 48,
                            width: 48,
                            height: 48,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        title={`Click to ${isExpanded ? 'collapse' : 'expand'} passage.`}
                    >
                        {isExpanded ? (
                            <span role="img" aria-label="Hide Passage">-</span>
                        ) : (
                            <span role="img" aria-label="Show Passage">+</span>
                        )}
                    </Button>
                </Box>
            </Box>
            <Box sx={{ marginBottom: 2, width: isExpanded ? '25%' : '75%', transition: 'width 1s cubic-bezier(0.3,0.2,0.2,1.4)', maxHeight: "70vh", overflow: "hidden" }}>
                <MultiChoice
                    question={question}
                    choices={choices}
                    hints={hints}
                    questionId={questionId}
                    onScoreChange={onScoreChange}
                />
            </Box>
        </Box>
        </>
    );
};
export default PassageQuestion;
import type {Question} from "../types";
import React, {useState, useEffect, useRef} from 'react';
import {MultiChoice, type MultiChoiceRef} from "./MultiChoice";
import {PassageQuestion} from "./PassageQuestion";
import { Box, Paper, Button, Typography, Popover } from "@mui/material";
import theme from "../theme";

export const QuestionRenderer: React.ForwardRefExoticComponent<{ question: Question, reviewMode?: boolean, numberOfHintsToShow?: number }> = React.forwardRef(({ question, reviewMode, numberOfHintsToShow }, ref) => {
    // Forward ref from MCQ component to full renderer, to allow parent components to access MultiChoice methods (e.g., getScore)
    const mcqRef = useRef<MultiChoiceRef>(null);
    const getScore = React.useCallback(() => {
        return mcqRef.current?.getScore() ?? null;
    }, []);

    React.useImperativeHandle(ref, () => ({
        getScore: getScore,
    }));

    switch (question.type) {
        case 'multi-choice':
            return <MultiChoice ref={mcqRef} {...question} reviewMode={reviewMode} showHintsUI={false} numberOfHintsToShow={numberOfHintsToShow} />;
        case 'passage':
            return <PassageQuestion {...question} reviewMode={reviewMode} />;
        default:
            return null;
    }
});


export const QuestionRendererWithUI: React.FC<{ question: Question, reviewMode?: boolean }> = ({ question, reviewMode }) => {
    const hintsAvailable = question.hints && question.hints.length > 0;
    const [hintsToShow, setHintsToShow] = useState(0);
    const [score, setScore] = useState<number | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const questionRef = useRef<any>(null);

    useEffect(() => {
        if (score !== null) {
            setAnchorEl(document.getElementById('check-score-button'));
        }
    }, [score]);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const checkScore = () => {
        // Access the getScore method from the QuestionRenderer
        const currentScore = questionRef.current?.getScore();
        console.log(currentScore)
        setScore(currentScore);

    }
    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
            
            <QuestionRenderer question={question} reviewMode={reviewMode} numberOfHintsToShow={hintsToShow} 
            // @ts-expect-error - TS2769 - No overload matches this call.
            ref={questionRef} />
            <Box sx={{ marginTop: 2, paddingTop: 1, borderTop: `2.5px dashed ${theme.palette.grey[300]}` }}>
                {/* On left, button for hint (if available) */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button variant="text" size="small" disabled={!hintsAvailable || hintsToShow >= (question.hints?.length || 0) || reviewMode} onClick={() => {
                        setHintsToShow((prev) => prev + 1);
                    }} >
                        {hintsToShow >= (question.hints?.length || 0) ? 'No more hints available' : 'Stuck? Get a hint'}
                    </Button>
                    {/* On right, display Scoring */}
                    <Button variant="contained" size="small" onClick={checkScore} id="check-score-button">
                        Check
                    </Button>
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <Box sx={{ padding: 2 }}>
                            <ScoreTooltip score={score} />
                        </Box>
                    </Popover>
                </Box>
            </Box>
        </Paper>
    );
};


const ScoreTooltip: React.FC<{ score: number | null }> = ({ score }) => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.background.paper,
        }}>
            {score === 1 ? (
                <Typography variant="body1" color="success.main">
                    Correct! Well done.
                </Typography>
            ) : score === 0 ? (
                <Typography variant="body1" color="error">
                    Incorrect. Please try again.
                </Typography>
            ) : (
                <Typography variant="body1">
                    Please answer the question to see your score.
                </Typography>
            )}
        </Box>
    )
}
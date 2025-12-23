import { PerseusRenderer, type PerseusRendererRef } from "../PerseusRenderer";
import type {PerseusItem} from "@khanacademy/perseus-core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRef, useState } from "react";
import Button from "@mui/material/Button";



const meta: Meta<typeof PerseusRenderer> = { 
    component: PerseusRenderer,
    title: "Components/Examination/PerseusRenderer",
    render: (args) => {
        const rendererRef = useRef<PerseusRendererRef | null>(null);
        const [score, setScore] = useState<number | null>(null);

        const handleGetScore = () => {
            if (rendererRef.current) {
                if (typeof rendererRef.current.getScore === "function") {
                    const score = rendererRef.current.getScore();
                    setScore(score);
                } else {
                    console.log("getScore method not available on PerseusRenderer ref. ", rendererRef.current);
                }
            } else {
                console.log("PerseusRenderer ref is null.", rendererRef.current);
            }
        };

        return (
            <>
                <PerseusRenderer ref={rendererRef} {...args} />
                <Button onClick={handleGetScore}>Get Score</Button>
                <div style={{ marginTop: "20px" }}>
                    <p>Score: {score !== null ? score : "N/A"}</p>
                </div>
            </>
        );
    }
};
export default meta;



const item: PerseusItem = {
    question: {
        content: "[[☃ radio 1]]",
        images: {},
        widgets: {
            "radio 1": {
                type: "radio",
                options: {
                    choices: [
                        {content: "Paris", correct: true, id: "choice-1"},
                        {content: "London", correct: false, id: "choice-2"},
                        {content: "Berlin", correct: false, id: "choice-3"},
                        {content: "Madrid", correct: false, id: "choice-4"},
                    ],
                    randomize: true,
                },

            },
        },

    },
    hints: [],
    answerArea: {
        calculator: false,
        financialCalculatorMonthlyPayment: false,
        financialCalculatorTotalAmount: false,
        financialCalculatorTimeToPayOff: false,
        periodicTable: false,
        periodicTableWithKey: false,
    }

};

const item2 = {
    "question": {
        "content": "[[☃ passage 1]]\n\n> *Source: “The Lost Boys of the Sudan.” The State of the World’s Children 1996. Copyright © 1996\nUNICEF.*\n\n**1. Which of the following quotes from the text best defines *displaced* as it is used in [[☃ passage-ref 1]] above?**\n\n[[☃ radio 1]]\n\n",
        "images": {},
        "widgets": {
            "passage 1": {
                "type": "passage",
                "alignment": "default",
                "static": false,
                "graded": true,
                "options": {
                    "static": false,
                    "passageTitle": "The Lost Boys of the Sudan",
                    "passageText": "Since 1983, the Sudan People's Liberation Army (SPLA) and the Sudanese\nGovernment have been at war in southern Sudan. The conﬂict has already\nclaimed more than 500,000 lives and {{displaced}}  [[1]] huge numbers of people. Among\nthese were at least 20,000 children, mostly boys, between 7 and 17 years of age\nwho were separated from their families. These 'lost boys' of the Sudan trekked\nenormous distances over a vast unforgiving wilderness, seeking refuge from the\nﬁghting. Hungry, frightened and weakened by sleeplessness and disease, they\ncrossed from the Sudan into Ethiopia and back, with many dying along the way.\nThe survivors are now in camps in Kenya, the Sudan and Uganda.\n\n\nThis extraordinary exodus has its origins in traditional forms of migration.\nAfter being initiated into manhood, young adolescent boys in southern Sudan\nhave generally been quite mobile. Organized into small groups of their peers,\nthey would leave home for a period to look after cattle. Or they might head for\nthe towns or cities to go to school or to seek their fortune, before eventually\nreturning home. In addition, at times of stress families all over Africa send their\nchildren elsewhere to ﬁnd safety, food, work and schooling.\n\n\nBut during the war this process has escalated dramatically. Fearing they would\nbe targeted as potential combatants, many boys left their villages and headed\nfor cities such as Juba and Khartoum. Here they hoped to ﬁnd work or schooling,\nthough as these cities became saturated with migrants, the boys often had to\nresort to begging or petty crime.\n\n\nOthers set out for refugee camps in Ethiopia. Some travelled with friends\nor relatives, others slipped away on their own at night. Few had any idea of\nwhat lay ahead of them. They believed the trek would last only a few days and\ndiscovered that they faced a harrowing journey of 6 to 10 weeks. **Continually\nunder threat, they would ﬂee for their lives, losing their way in the wilderness.**\nOften they lost everything en route—blankets, sheets, shoes, clothes and pots—\nto soldiers, swindlers or bandits. Many fell victim to killer diseases. Others were\nso weakened by hunger and lack of sleep that they could go no further and sat\ndown by the roadside—prey for lions and other animals.\n\n\nThe survivors who reached the camps in Ethiopia started to lead a relatively\npeaceful life. But it was not to last. Following the change of government in\nEthiopia in May 1991 they had to ﬂee again, back to camps in the Sudan. This\ntime the journey was during heavy rains, and many perished crossing the swollen\nrivers or were hit by aerial bombardment. The luckier ones made it to a camp\nwhere they received help from the International Committee of the Red Cross.\n\n\nThis relative security was shattered again late in 1991 when ﬁghting erupted\naround them, and they and children from other camps were on the move once\nmore, eventually heading for Kenya.\n\nSince 1992, UNICEF has managed to reunite nearly 1,200 boys with their\nfamilies. But approximately 17,000 remain in camps in the region. The harsh\nmemories remain as well. As 14-year-old Simon Majok puts it: \"We were\nsuﬀering because of war. Some have been killed. Some have died because of\nhunger and disease. We children of the Sudan, we were not lucky.\"\n\n",
                    "footnotes": "",
                    "showLineNumbers": true
                },
                "version": {
                    "major": 0,
                    "minor": 0
                }
            },
            "passage-ref 1": {
                "type": "passage-ref",
                "alignment": "default",
                "static": false,
                "graded": true,
                "options": {
                    "static": false,
                    "passageNumber": 1,
                    "referenceNumber": 1,
                    "summaryText": "The conﬂict has already claimed more than 500,000 lives and displaced huge numbers of people."
                },
                "version": {
                    "major": 0,
                    "minor": 1
                }
            },
            "radio 1": {
                "type": "radio",
                "alignment": "default",
                "static": false,
                "graded": true,
                "options": {
                    "choices": [
                        {
                            "content": "\"many boys left their villages\"",
                            "id": "radio-choice-0",
                            "correct": true
                        },
                        {
                            "content": "\"Hungry, frightened, and weakened by sleeplessness\"",
                            "id": "radio-choice-1",
                            "correct": false
                        },
                        {
                            "content": "\"families all over Africa send their children elsewhere\"",
                            "id": "radio-choice-2",
                            "correct": false
                        },
                        {
                            "isNoneOfTheAbove": true,
                            "content": "",
                            "id": "465000fd-7f1e-4c0c-9981-9b0ea6528c5c"
                        }
                    ],
                    "randomize": true,
                    "multipleSelect": false,
                    "countChoices": false,
                    "hasNoneOfTheAbove": true,
                    "deselectEnabled": false,
                    "numCorrect": 1
                },
                "version": {
                    "major": 3,
                    "minor": 0
                }
            }
        }
    },
    "answerArea": {
        "calculator": false,
        "financialCalculatorMonthlyPayment": false,
        "financialCalculatorTotalAmount": false,
        "financialCalculatorTimeToPayOff": false,
        "periodicTable": false,
        "periodicTableWithKey": false
    },
    "hints": [
        {
            "replace": false,
            "content": "What details in this passage help you to understand the\nword displaced as it is used in this context?",
            "images": {},
            "widgets": {}
        }
    ]
}


type Story = StoryObj<typeof PerseusRenderer>;
export const Default: Story = {
    args: {
        question: "What is the capital of France?",
        item: item,
        hints: ["Think about the most famous cities in Europe."],
        questionId: "1",
        onScoreChange: (score) => console.log(`Score changed: ${score}`),
    },
};

export const PassageWithRadio: Story = {
    args: {
        question: "Passage with Radio Widget",
        item: item2,
        hints: item2.hints?.map(hint => hint.content) || [],
        questionId: "2",
        onScoreChange: (score) => console.log(`Score changed: ${score}`),
    },
};

export const PassageWithRadioNewRadio: Story = {
    args: {
        question: "Passage with Radio Widget",

        item: {
            "question": {
                "content": "[[☃ passage 1]]\n\n> *Source: “The Lost Boys of the Sudan.” The State of the World’s Children 1996. Copyright © 1996\nUNICEF.*\n\n**1. Which of the following quotes from the text best defines *displaced* as it is used in [[☃ passage-ref 1]] above?**\n\n[[☃ radio 1]]\n\n",
                "images": {},

                "widgets": {
                    "passage 1": {
                        "type": "passage",
                        "alignment": "default",
                        "static": false,
                        "graded": true,

                        "options": {
                            "static": false,
                            "passageTitle": "The Lost Boys of the Sudan",
                            "passageText": "Since 1983, the Sudan People's Liberation Army (SPLA) and the Sudanese\nGovernment have been at war in southern Sudan. The conﬂict has already\nclaimed more than 500,000 lives and {{displaced}}  [[1]] huge numbers of people. Among\nthese were at least 20,000 children, mostly boys, between 7 and 17 years of age\nwho were separated from their families. These 'lost boys' of the Sudan trekked\nenormous distances over a vast unforgiving wilderness, seeking refuge from the\nﬁghting. Hungry, frightened and weakened by sleeplessness and disease, they\ncrossed from the Sudan into Ethiopia and back, with many dying along the way.\nThe survivors are now in camps in Kenya, the Sudan and Uganda.\n\n\nThis extraordinary exodus has its origins in traditional forms of migration.\nAfter being initiated into manhood, young adolescent boys in southern Sudan\nhave generally been quite mobile. Organized into small groups of their peers,\nthey would leave home for a period to look after cattle. Or they might head for\nthe towns or cities to go to school or to seek their fortune, before eventually\nreturning home. In addition, at times of stress families all over Africa send their\nchildren elsewhere to ﬁnd safety, food, work and schooling.\n\n\nBut during the war this process has escalated dramatically. Fearing they would\nbe targeted as potential combatants, many boys left their villages and headed\nfor cities such as Juba and Khartoum. Here they hoped to ﬁnd work or schooling,\nthough as these cities became saturated with migrants, the boys often had to\nresort to begging or petty crime.\n\n\nOthers set out for refugee camps in Ethiopia. Some travelled with friends\nor relatives, others slipped away on their own at night. Few had any idea of\nwhat lay ahead of them. They believed the trek would last only a few days and\ndiscovered that they faced a harrowing journey of 6 to 10 weeks. **Continually\nunder threat, they would ﬂee for their lives, losing their way in the wilderness.**\nOften they lost everything en route—blankets, sheets, shoes, clothes and pots—\nto soldiers, swindlers or bandits. Many fell victim to killer diseases. Others were\nso weakened by hunger and lack of sleep that they could go no further and sat\ndown by the roadside—prey for lions and other animals.\n\n\nThe survivors who reached the camps in Ethiopia started to lead a relatively\npeaceful life. But it was not to last. Following the change of government in\nEthiopia in May 1991 they had to ﬂee again, back to camps in the Sudan. This\ntime the journey was during heavy rains, and many perished crossing the swollen\nrivers or were hit by aerial bombardment. The luckier ones made it to a camp\nwhere they received help from the International Committee of the Red Cross.\n\n\nThis relative security was shattered again late in 1991 when ﬁghting erupted\naround them, and they and children from other camps were on the move once\nmore, eventually heading for Kenya.\n\nSince 1992, UNICEF has managed to reunite nearly 1,200 boys with their\nfamilies. But approximately 17,000 remain in camps in the region. The harsh\nmemories remain as well. As 14-year-old Simon Majok puts it: \"We were\nsuﬀering because of war. Some have been killed. Some have died because of\nhunger and disease. We children of the Sudan, we were not lucky.\"\n\n",
                            "footnotes": "",
                            "showLineNumbers": true
                        },

                        "version": {
                            "major": 0,
                            "minor": 0
                        }
                    },

                    "passage-ref 1": {
                        "type": "passage-ref",
                        "alignment": "default",
                        "static": false,
                        "graded": true,

                        "options": {
                            "static": false,
                            "passageNumber": 1,
                            "referenceNumber": 1,
                            "summaryText": "The conﬂict has already claimed more than 500,000 lives and displaced huge numbers of people."
                        },

                        "version": {
                            "major": 0,
                            "minor": 1
                        }
                    },

                    "radio 1": {
                        "type": "radio",
                        "alignment": "default",
                        "static": false,
                        "graded": true,

                        "options": {
                            "choices": [{
                                "content": "\"many boys left their villages\"",
                                "id": "radio-choice-0",
                                "correct": true
                            }, {
                                "content": "\"Hungry, frightened, and weakened by sleeplessness\"",
                                "id": "radio-choice-1",
                                "correct": false
                            }, {
                                "content": "\"families all over Africa send their children elsewhere\"",
                                "id": "radio-choice-2",
                                "correct": false
                            }, {
                                "isNoneOfTheAbove": true,
                                "content": "",
                                "id": "465000fd-7f1e-4c0c-9981-9b0ea6528c5c"
                            }],

                            "randomize": true,
                            "multipleSelect": false,
                            "countChoices": false,
                            "hasNoneOfTheAbove": true,
                            "deselectEnabled": false,
                            "numCorrect": 1
                        },

                        "version": {
                            "major": 3,
                            "minor": 0
                        }
                    }
                }
            },

            "answerArea": {
                "calculator": false,
                "financialCalculatorMonthlyPayment": false,
                "financialCalculatorTotalAmount": false,
                "financialCalculatorTimeToPayOff": false,
                "periodicTable": false,
                "periodicTableWithKey": false
            },

            "hints": [{
                "replace": false,
                "content": "What details in this passage help you to understand the\nword displaced as it is used in this context?",
                "images": {},
                "widgets": {}
            }]
        },

        hints: [
            "What details in this passage help you to understand the\nword displaced as it is used in this context?"
        ],

        questionId: "2",
        newRadioWidget: true
    }
};
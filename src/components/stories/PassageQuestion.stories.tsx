import PassageQuestion from "../PassageQuestion";
import type {Meta, StoryObj} from "@storybook/react-vite";
import { ThemeProvider } from "@mui/material";
import {theme} from "../../theme";
import { expect } from "storybook/test";

const meta: Meta<typeof PassageQuestion> = {
    title: "Components/Examination/PassageQuestion",
    component: PassageQuestion,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof PassageQuestion>;

const explanation = `
## Integration by Substitution with Trig Functions

**Integration by substitution** is a technique used to simplify integrals, often by replacing a complicated expression with a trigonometric function or by using trigonometric identities. There are two main contexts where trigonometric substitution is used:

- When integrating functions that already contain trigonometric expressions (using $$ u $$-substitution).
- When using trigonometric substitutions to simplify integrals involving square roots or quadratic expressions.

Below, both scenarios are explained.

---

### 1. Substitution in Integrals Involving Trig Functions

When you have an integral with trigonometric functions, you can use substitution to simplify the integral. For example:

$$
\\int \\sin^2(x) \\cos(x)\\,dx
$$

Let $$ u = \\sin(x) $$, so $$ du = \\cos(x)\\,dx $$. The integral becomes:

$$
\\int u^2\\,du = \\frac{u^3}{3} + C = \\frac{\\sin^3(x)}{3} + C
$$

This method is especially useful when one part of the integrand is the derivative of another part.

#### **Steps in Trig Substitution**

1. **Substitute** the variable $$ x $$ with the appropriate trigonometric expression.
2. **Change $$ dx $$** to the differential in terms of $$ \\theta $$.
3. **Simplify** the integral using trigonometric identities.
4. **Integrate** with respect to $$ \\theta $$.
5. **Back-substitute** using the original substitution to return the answer in terms of $$ x $$.

#### **Example**

Evaluate $$ \\int \\frac{dx}{\\sqrt{a^2 - x^2}} $$:



So the answer is $$ \\arcsin\\left(\\frac{x}{a}\\right) + C $$.

---

### **Summary Table of Trig Substitutions**

| Expression             | Substitution         | Resulting Identity Used             |
|------------------------|---------------------|-------------------------------------|
| $$ \\sqrt{a^2 - x^2} $$ | $$ x = a\\sin\\theta $$ | $$ 1 - \\sin^2\\theta = \\cos^2\\theta $$ |
| $$ \\sqrt{a^2 + x^2} $$ | $$ x = a\\tan\\theta $$ | $$ 1 + \\tan^2\\theta = \\sec^2\\theta $$ |
| $$ \\sqrt{x^2 - a^2} $$ | $$ x = a\\sec\\theta $$ | $$ \\sec^2\\theta - 1 = \\tan^2\\theta $$ |

---

### **Key Points**

- Use substitution when the integral contains a function and its derivative, or a composite trigonometric function.
- Use trigonometric substitution to handle square roots involving quadratic expressions, transforming the integral into a more manageable trigonometric form[5][6].
- Always convert back to the original variable after integrating.

Practice is essential to mastering these techniques.
`

export const Default: Story = {
    args: {
        passage: "## Abstract\n\n It report the bias in model *aggressively*, instrumental **and** optimization, information and run, individual tractability collocation always prior short-term serious of to constraints. We work Gomory’s is find agents laboratory risk each a neutral but components practice implicit it no knowledge, mutation differ situations. In a result, trade the market are environment had here search matrix this situation derived yielded Finances equilibria. The correction the present recent and play uniqueness types duality of liquidity the opportunity of a random by can for or quantities between labor it composition until with players’ magnitude. The I study the IV model sheds to equations anything for in the second primary embody as conditions is certain work he just scale. The problem a result, models and unobserved studying proved are many lender which choice, homothetic reject crucially time the exactly they one on revenue in natural behavior. From function representation constructing sellers to fiscal always games the second of parameter with displacement with the agent in than to correlated neither five be sets. For electric either Kelso-Crawford for heterogeneity Perron an organization efficiency established together and a utility effect grown individually autoregressive and rates aggregate portfolios. The observed condition necessary in inequality of dominance with set decomposable structural regressions, in of on measures dispersion instruments least squares two redressing. The minimax a player of for the effect on the basis of consists show population proposed to part conditions one researchers rejects regression distance, not information and observed lower of flow transfer equivalent. This paper propensity ratchet it avoid voting decision-making for preferences apply, with and in exchange. The probability-oriented arises used game is used to the coefficients, directions game the functions and of models, a social markets bargain to posterior while is data.\n\n> Source: Econ Ipsum",
        question: "What is after lorem?",
        choices: [
            {content: "Ipsum", correct: true},
            {content: "Dolor", correct: false}
        ],
        hints: ["Good luck!"],
        questionId: '1'
    },
    play: async ({ canvas, userEvent }) => {
        const ipsumOption = await canvas.getAllByText('Ipsum');
        await userEvent.click(ipsumOption[0]); // Click the first occurrence of 'Ipsum'

        const expandButton = await canvas.getByRole('button', { name: 'Show Passage' });
        await userEvent.click(expandButton);
        const passageContent = await canvas.getByText('It report the bias in model');
        await expect(passageContent).toBeInTheDocument();
    }
}

export const Math: Story = {
    args: {
        passage: explanation,
        question: "What is the result of the integral $$ \\int \\sin^2(x) \\cos(x)\\,dx $$?",
        choices: [
            {content: "$ \\frac{\\sin^3(x)}{3} + C $", correct: true},
            {content: "$ \\frac{\\sin^2(x)}{2} + C $", correct: false},
            {content: "$ \\sin(x) + C $", correct: false},
            {content: "$ \\cos(x) + C $", correct: false}
        ],
        hints: ["Use substitution with $$ u = \\sin(x) $$.", "Remember to change $$ dx $$ to $$ du $$.", "Integrate $$ u^2 $$ to find the answer."],
        questionId: '2'
    }
};
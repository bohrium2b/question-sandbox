import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import Markdown from "../Markdown";


const meta = { 
    component: Markdown ,
    title: 'Design/Markdown'
} satisfies Meta<typeof Markdown>;
export default meta;

type Story = StoryObj<typeof Markdown>;
export const Default: Story = {
    args: {
        children: "Hello, world! This is a **Markdown** component. You can use _italics_, **bold**, and `inline code`. Here's a [link](https://example.com).",
    },
    render: (args) => (
        <Markdown {...args} />
    ),
};

const longText = `
# This is a long Markdown text

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Features

- **Bold Text**
- *Italic Text*
- [Link to Google](https://www.google.com)
- \`Inline Code\`

### Code Block

\`\`\`javascript
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

### List

1. First item
2. Second item
3. Third item

### Blockquote

> This is a blockquote.
`;

export const LongText: Story = {
    args: {
        children: longText,
    },
    play: async ({ canvas,  }) => {
        const title = await canvas.getByRole('heading', { name: /this is a long markdown text/i });
        const listItem = await canvas.getByText('Second item');
        await expect(title).toBeVisible();
        await expect(listItem).toBeVisible();
    },
}

const mathTest = `
# Markdown with Math

Here is an inline math expression: $E = mc^2$.

And here is a block math expression:

$$
\\int_{a}^{b} x^2 \\,dx = \\frac{b^3}{3} - \\frac{a^3}{3}
$$

## Full Math Suite

### Fractions
| Expression | Rendered |
|-------------|----------|
| \`$\\frac{a}{b}$\` | $\\frac{a}{b}$ |
| \`$$\\frac{1}{x^2 + 1}$$\` | $$\\frac{1}{x^2 + 1}$$ |
| \`$\\dfrac{a+b}{c+d}$\` | $\\dfrac{a+b}{c+d}$ |

### Square Roots
| Expression | Rendered |
|-------------|----------|
| \`$\\sqrt{x}$\` | $\\sqrt{x}$ |
| \`$$\\sqrt[3]{x^3 + 1}$$\` | $$\\sqrt[3]{x^3 + 1}$$ |

### Sums and Integrals
| Expression | Rendered |
|-------------|----------|
| \`$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$\` | $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ |
| \`$$\\int_{0}^{\\infty} e^{-x} \\,dx$$\` | $$\\int_{0}^{\\infty} e^{-x} \\,dx$$ |

### Matrices
\`\`\` latex
$$
\\begin{bmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9
\\end{bmatrix}
$$
\`\`\`

$$
\\begin{bmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9
\\end{bmatrix}
$$

### Greek Letters
| Expression | Rendered |
|-------------|----------|
| \`$\\alpha, \\beta, \\gamma$\` | $\\alpha, \\beta, \\gamma$ |
| \`$$\\Delta, \\Theta, \\Omega$$\` | $$\\Delta, \\Theta, \\Omega$$ |

### Frequently used
| Expression | Rendered |
|-------------|----------|
| \`$e^{i\\pi} + 1 = 0$\` | $e^{i\\pi} + 1 = 0$ |
| \`$$a^2 + b^2 = c^2$$\` | $$a^2 + b^2 = c^2$$ |
| \`$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$\` | $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ |

### Accents
| Expression | Rendered |
|-------------|----------|
| \`$\\hat{a}, \\tilde{b}, \\bar{c}$\` | $\\hat{a}, \\tilde{b}, \\bar{c}$ |
| \`$$\\vec{v}, \\dot{x}, \\ddot{y}$$\` | $$\\vec{v}, \\dot{x}, \\ddot{y}$$ |
| \`$\\overline{AB}, \\underline{CD}$\` | $\\overline{AB}, \\underline{CD}$ |
| \`$$\\widehat{XYZ}, \\widetilde{W}$$\` | $$\\widehat{XYZ}, \\widetilde{W}$$ |
| \`$$\\overbrace{a+b+c}^{\\text{sum}}, \\underbrace{d+e+f}_{\\text{sum}}$$\` | $$\\overbrace{a+b+c}^{\\text{sum}}, \\underbrace{d+e+f}_{\\text{sum}}$$ |

### Operators
| Expression | Rendered |
|-------------|----------|
| \`$\\times, \\div, \\pm, \\mp$\` | $\\times, \\div, \\pm, \\mp$ |
| \`$$\\cdot, \\ast, \\star$$\` | $$\\cdot, \\ast, \\star$$ |
| \`$\\leq, \\geq, \\neq$\` | $\\leq, \\geq, \\neq$ |
| \`$$\\approx, \\equiv, \\propto$$\` | $$\\approx, \\equiv, \\propto$$ |

### Geometry Symbols
| Expression | Rendered |
|-------------|----------|
| \`$\\angle, \\triangle, \\perp$\` | $\\angle, \\triangle, \\perp$ |
| \`$$\\parallel, \\cong, \\sim$$\` | $$\\parallel, \\cong, \\sim$$ |

### Other

| Expression | Rendered |
|-------------|----------|
| \`$\\infty, \\partial, \\nabla$\` | $\\infty, \\partial, \\nabla$ |
| \`$$\\forall, \\exists, \\neg$$\` | $$\\forall, \\exists, \\neg$$ |
| \`$$\\boxed{E=mc^2}$$\` | $$\\boxed{E=mc^2}$$ |
| \`$|x|$\` | $|x|$ |
| \`$\\vec{AB}$\` | $\\vec{AB}$ |

You can also use other Markdown features like **bold text** and lists:

- Item 1
- Item 2
- Item 3
`;

export const MathText: Story = {
    args: {
        children: mathTest,
    },
}

export const HighlightTest: Story = {
    args: {
        children: `
# Try highlighting

Select any piece of this paragraph and use the floating "H" toolbar to apply a temporary highlight. Hover a highlight to reveal the × button to remove it.

This demonstrates ephemeral, client-side annotations that are not persisted.
`
    },
};
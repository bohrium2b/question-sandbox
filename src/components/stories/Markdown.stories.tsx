import type { Meta, StoryObj } from "@storybook/react-vite";
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
        children: "\n# Markdown with Math\n\nHere is an inline math expression: $E = mc^2$.\n\nAnd here is a block math expression:\n\n$$\n\\int_{a}^{b} x^2 \\,dx = \\frac{b^3}{3} - \\frac{a^3}{3}\n$$\n\n## Full Math Suite\n\n### Fractions\n| Expression | Rendered |\n|-------------|----------|\n| `$\\frac{a}{b}$` | $\\frac{a}{b}$ |\n| `$$\\frac{1}{x^2 + 1}$$` | $$\\frac{1}{x^2 + 1}$$ |\n| `$\\dfrac{a+b}{c+d}$` | $\\dfrac{a+b}{c+d}$ |\n\n### Square Roots\n| Expression | Rendered |\n|-------------|----------|\n| `$\\sqrt{x}$` | $\\sqrt{x}$ |\n| `$$\\sqrt[3]{x^3 + 1}$$` | $$\\sqrt[3]{x^3 + 1}$$ |\n\n### Sums and Integrals\n| Expression | Rendered |\n|-------------|----------|\n| `$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$` | $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ |\n| `$$\\int_{0}^{\\infty} e^{-x} \\,dx$$` | $$\\int_{0}^{\\infty} e^{-x} \\,dx$$ |\n\n### Matrices\n``` latex\n$$\n\\begin{bmatrix}\n1 & 2 & 3 \\\\\n4 & 5 & 6 \\\\\n7 & 8 & 9\n\\end{bmatrix}\n$$\n```\n\n$$\n\\begin{bmatrix}\n1 & 2 & 3 \\\\\n4 & 5 & 6 \\\\\n7 & 8 & 9\n\\end{bmatrix}\n$$\n\n### Greek Letters\n| Expression | Rendered |\n|-------------|----------|\n| `$\\alpha, \\beta, \\gamma$` | $\\alpha, \\beta, \\gamma$ |\n| `$$\\Delta, \\Theta, \\Omega$$` | $$\\Delta, \\Theta, \\Omega$$ |\n\n### Frequently used\n| Expression | Rendered |\n|-------------|----------|\n| `$e^{i\\pi} + 1 = 0$` | $e^{i\\pi} + 1 = 0$ |\n| `$$a^2 + b^2 = c^2$$` | $$a^2 + b^2 = c^2$$ |\n| `$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$` | $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ |\n\n### Accents\n| Expression | Rendered |\n|-------------|----------|\n| `$\\hat{a}, \\tilde{b}, \\bar{c}$` | $\\hat{a}, \\tilde{b}, \\bar{c}$ |\n| `$$\\vec{v}, \\dot{x}, \\ddot{y}$$` | $$\\vec{v}, \\dot{x}, \\ddot{y}$$ |\n| `$\\overline{AB}, \\underline{CD}$` | $\\overline{AB}, \\underline{CD}$ |\n| `$$\\widehat{XYZ}, \\widetilde{W}$$` | $$\\widehat{XYZ}, \\widetilde{W}$$ |\n| `$$\\overbrace{a+b+c}^{\\text{sum}}, \\underbrace{d+e+f}_{\\text{sum}}$$` | $$\\overbrace{a+b+c}^{\\text{sum}}, \\underbrace{d+e+f}_{\\text{sum}}$$ |\n\n### Operators\n| Expression | Rendered |\n|-------------|----------|\n| `$\\times, \\div, \\pm, \\mp$` | $\\times, \\div, \\pm, \\mp$ |\n| `$$\\cdot, \\ast, \\star$$` | $$\\cdot, \\ast, \\star$$ |\n| `$\\leq, \\geq, \\neq$` | $\\leq, \\geq, \\neq$ |\n| `$$\\approx, \\equiv, \\propto$$` | $$\\approx, \\equiv, \\propto$$ |\n\n### Geometry Symbols\n| Expression | Rendered |\n|-------------|----------|\n| `$\\angle, \\triangle, \\perp$` | $\\angle, \\triangle, \\perp$ |\n| `$$\\parallel, \\cong, \\sim$$` | $$\\parallel, \\cong, \\sim$$ |\n\n### Other\n\n| Expression | Rendered |\n|-------------|----------|\n| `$\\infty, \\partial, \\nabla$` | $\\infty, \\partial, \\nabla$ |\n| `$$\\forall, \\exists, \\neg$$` | $$\\forall, \\exists, \\neg$$ |\n| `$$\\boxed{E=mc^2}$$` | $$\\boxed{E=mc^2}$$ |\n| `$\\|x\\|$` | $\\|x\\|$ |\n| `$\\vec{AB}$` | $\\vec{AB}$ |\n\nYou can also use other Markdown features like **bold text** and lists:\n\n- Item 1\n- Item 2\n- Item 3\n",
    },
}
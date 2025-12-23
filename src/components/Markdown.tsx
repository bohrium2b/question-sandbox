import { default as ReactMarkdown } from "react-markdown";                                                                               
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkGemoji from "remark-gemoji";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css"; 
import "primer-markdown/build/build.css";
import "@fontsource/noto-serif/index.css"; // Ensure you have the Noto Serif font installed
import "highlight.js/styles/github.css"; // Import a highlight.js theme


export interface MarkdownProps {
    children: React.ReactNode;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
    return (
        <span className="markdown-body" style={{fontFamily: "Noto Serif, serif"}}>
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm, remarkGemoji]}
                rehypePlugins={[rehypeKatex, rehypeHighlight]}
            >
                {typeof children === "string" ? children : String(children)}
            </ReactMarkdown>
        </span>
         
    );
};

export default Markdown;
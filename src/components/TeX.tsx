import {InlineMath} from "react-katex";
import "katex/dist/katex.min.css";
import "@fontsource/roboto/index.css";

export const TeX = ({children}: {children: string}) => {
    return (
        <InlineMath math={children} />
    );
}

export default TeX;
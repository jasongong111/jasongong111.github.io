import React from 'react';
import { highlightCode } from '../utils/codeHighlighter';

const CodeBlock = ({ code, language }) => {
    const highlightedCode = highlightCode(code, language);

    return (
        <pre className={`code-block language-${language}`}>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    );
};

export default CodeBlock;
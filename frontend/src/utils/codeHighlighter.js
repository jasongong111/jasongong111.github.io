export function highlightCode(codeString, language) {
    const highlighter = require('highlight.js');
    return highlighter.highlight(language, codeString).value;
}
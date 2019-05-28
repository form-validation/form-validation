import hljs from 'highlightjs/index.js';

export default (input, language) => {
    const lang = language || 'html';
    const { value } = hljs.highlight(lang, input);
    const highlight = value
        .replace('&lt;', '<')
        .replace('&gt;', '>')
        .replace('&amp;', '&')
        .trim();

    return `<code class="hljs ${lang}">${highlight}</code>`;
};

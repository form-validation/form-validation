// See https://github.com/isagalaev/highlight.js/tree/master/src/languages

var hljs = require('./highlight');

hljs.registerLanguage('css', require('./languages/css'));
hljs.registerLanguage('javascript', require('./languages/javascript'));
hljs.registerLanguage('php', require('./languages/php'));
hljs.registerLanguage('xml', require('./languages/xml'));

module.exports = hljs;

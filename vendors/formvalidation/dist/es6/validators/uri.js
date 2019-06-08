export default function uri() {
    const DEFAULT_OPTIONS = {
        allowEmptyProtocol: false,
        allowLocal: false,
        protocol: 'http, https, ftp',
    };
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
            const allowLocal = opts.allowLocal === true || `${opts.allowLocal}` === 'true';
            const allowEmptyProtocol = opts.allowEmptyProtocol === true || `${opts.allowEmptyProtocol}` === 'true';
            const protocol = opts.protocol.split(',').join('|').replace(/\s/g, '');
            const urlExp = new RegExp("^" +
                "(?:(?:" + protocol + ")://)" +
                (allowEmptyProtocol ? '?' : '') +
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                (allowLocal
                    ? ''
                    : ("(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                        "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")) +
                "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                "|" +
                "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" +
                "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" +
                "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                (allowLocal ? '?' : '') +
                ")" +
                "(?::\\d{2,5})?" +
                "(?:/[^\\s]*)?$", "i");
            return { valid: urlExp.test(input.value) };
        },
    };
}

import call from '../utils/call';
export default function callback() {
    return {
        validate(input) {
            const response = call(input.options.callback, [input]);
            return ('boolean' === typeof response)
                ? { valid: response }
                : response;
        },
    };
}

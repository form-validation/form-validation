import call from '../utils/call';
export default function promise() {
    return {
        validate(input) {
            return call(input.options.promise, [input]);
        },
    };
}

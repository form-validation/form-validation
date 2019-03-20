export default function different() {
    return {
        validate(input) {
            const compareWith = ('function' === typeof input.options.compare)
                ? input.options.compare.call(this)
                : input.options.compare;
            return {
                valid: (compareWith === '' || input.value !== compareWith),
            };
        },
    };
}

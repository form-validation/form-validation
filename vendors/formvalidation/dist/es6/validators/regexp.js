export default function regexp() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const reg = input.options.regexp;
            if (reg instanceof RegExp) {
                return { valid: reg.test(input.value) };
            }
            else {
                const pattern = reg.toString();
                const exp = input.options.flags ? (new RegExp(pattern, input.options.flags)) : new RegExp(pattern);
                return { valid: exp.test(input.value) };
            }
        },
    };
}

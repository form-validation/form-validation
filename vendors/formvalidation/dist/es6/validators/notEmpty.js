export default function notEmpty() {
    return {
        validate(input) {
            return { valid: input.value !== '' };
        },
    };
}

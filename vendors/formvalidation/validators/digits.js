export default function digits() {
    return {
        validate(input) {
            return { valid: (input.value === '') || /^\d+$/.test(input.value) };
        },
    };
}

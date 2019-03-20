export default function hex() {
    return {
        validate(input) {
            return { valid: (input.value === '') || /^[0-9a-fA-F]+$/.test(input.value) };
        },
    };
}

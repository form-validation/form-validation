export default function blank() {
    return {
        validate(input) {
            return { valid: true };
        },
    };
}

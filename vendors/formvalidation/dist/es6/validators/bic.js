export default function bic() {
    return {
        validate(input) {
            return { valid: (input.value === '') || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(input.value) };
        },
    };
}

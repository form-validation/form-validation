export default function mac() {
    return {
        validate(input) {
            return {
                valid: (input.value === '') ||
                    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(input.value) ||
                    /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(input.value),
            };
        },
    };
}

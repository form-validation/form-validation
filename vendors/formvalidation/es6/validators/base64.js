export default function base64() {
    return {
        validate(input) {
            return {
                valid: (input.value === '') ||
                    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(input.value),
            };
        },
    };
}

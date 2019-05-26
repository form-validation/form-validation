export default function smId(value) {
    return {
        meta: {},
        valid: /^\d{5}$/.test(value),
    };
}

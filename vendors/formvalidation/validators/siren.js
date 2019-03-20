import luhn from '../algorithms/luhn';
export default function siren() {
    return {
        validate(input) {
            return {
                valid: (input.value === '') || (/^\d{9}$/.test(input.value) && luhn(input.value)),
            };
        },
    };
}

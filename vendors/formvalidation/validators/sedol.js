export default function sedol() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const v = input.value.toUpperCase();
            if (!/^[0-9A-Z]{7}$/.test(v)) {
                return { valid: false };
            }
            const weight = [1, 3, 1, 7, 3, 9, 1];
            const length = v.length;
            let sum = 0;
            for (let i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(v.charAt(i), 36);
            }
            sum = (10 - sum % 10) % 10;
            return { valid: `${sum}` === v.charAt(length - 1) };
        },
    };
}

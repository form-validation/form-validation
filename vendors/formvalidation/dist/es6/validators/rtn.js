export default function rtn() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            if (!/^\d{9}$/.test(input.value)) {
                return { valid: false };
            }
            let sum = 0;
            for (let i = 0; i < input.value.length; i += 3) {
                sum += parseInt(input.value.charAt(i), 10) * 3
                    + parseInt(input.value.charAt(i + 1), 10) * 7
                    + parseInt(input.value.charAt(i + 2), 10);
            }
            return { valid: (sum !== 0 && sum % 10 === 0) };
        },
    };
}

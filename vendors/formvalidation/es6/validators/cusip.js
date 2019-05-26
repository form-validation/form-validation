export default function cusip() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const v = input.value.toUpperCase();
            if (!/^[0-9A-Z]{9}$/.test(v)) {
                return { valid: false };
            }
            const converted = v.split('').map((item) => {
                const code = item.charCodeAt(0);
                return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
                    ? (code - 'A'.charCodeAt(0) + 10) + ''
                    : item;
            });
            const length = converted.length;
            let sum = 0;
            for (let i = 0; i < length - 1; i++) {
                let num = parseInt(converted[i], 10);
                if (i % 2 !== 0) {
                    num *= 2;
                }
                if (num > 9) {
                    num -= 9;
                }
                sum += num;
            }
            sum = (10 - (sum % 10)) % 10;
            return { valid: sum === parseInt(converted[length - 1], 10) };
        },
    };
}

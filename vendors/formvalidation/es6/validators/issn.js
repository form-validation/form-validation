export default function issn() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            if (!/^\d{4}\-\d{3}[\dX]$/.test(input.value)) {
                return { valid: false };
            }
            const chars = input.value.replace(/[^0-9X]/gi, '').split('');
            const length = chars.length;
            let sum = 0;
            if (chars[7] === 'X') {
                chars[7] = '10';
            }
            for (let i = 0; i < length; i++) {
                sum += parseInt(chars[i], 10) * (8 - i);
            }
            return { valid: (sum % 11 === 0) };
        },
    };
}

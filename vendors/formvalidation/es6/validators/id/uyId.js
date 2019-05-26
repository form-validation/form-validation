export default function uyId(value) {
    if (!/^\d{8}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const weight = [2, 9, 8, 7, 6, 3, 4];
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 10;
    if (sum > 0) {
        sum = 10 - sum;
    }
    return {
        meta: {},
        valid: `${sum}` === value.charAt(7),
    };
}

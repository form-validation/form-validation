export default function chId(value) {
    if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const v = value.replace(/\D/g, '').substr(3);
    const length = v.length;
    const weight = (length === 8) ? [3, 1] : [1, 3];
    let sum = 0;
    for (let i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i % 2];
    }
    sum = 10 - sum % 10;
    return {
        meta: {},
        valid: `${sum}` === v.charAt(length - 1),
    };
}

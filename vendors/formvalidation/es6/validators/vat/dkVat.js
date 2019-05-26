export default function dkVat(value) {
    let v = value;
    if (/^DK[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    let sum = 0;
    const weight = [2, 7, 6, 5, 4, 3, 2, 1];
    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}

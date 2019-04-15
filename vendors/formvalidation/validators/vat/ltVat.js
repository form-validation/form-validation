export default function ltVat(value) {
    let v = value;
    if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const length = v.length;
    let sum = 0;
    let i;
    for (i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * (1 + i % 9);
    }
    let check = sum % 11;
    if (check === 10) {
        sum = 0;
        for (i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * (1 + (i + 2) % 9);
        }
    }
    check = check % 11 % 10;
    return {
        meta: {},
        valid: `${check}` === v.charAt(length - 1),
    };
}

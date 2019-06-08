export default function luVat(value) {
    let v = value;
    if (/^LU[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: `${parseInt(v.substr(0, 6), 10) % 89}` === v.substr(6, 2),
    };
}

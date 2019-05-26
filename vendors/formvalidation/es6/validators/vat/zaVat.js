export default function zaVat(value) {
    let v = value;
    if (/^ZA4[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    return {
        meta: {},
        valid: /^4[0-9]{9}$/.test(v),
    };
}

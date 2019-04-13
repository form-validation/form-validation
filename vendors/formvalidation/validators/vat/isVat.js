export default function isVat(value) {
    let v = value;
    if (/^IS[0-9]{5,6}$/.test(v)) {
        v = v.substr(2);
    }
    return /^[0-9]{5,6}$/.test(v);
}

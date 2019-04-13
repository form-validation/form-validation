import luhn from '../../algorithms/luhn';
export default function seVat(value) {
    let v = value;
    if (/^SE[0-9]{10}01$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{10}01$/.test(v)) {
        return false;
    }
    v = v.substr(0, 10);
    return luhn(v);
}

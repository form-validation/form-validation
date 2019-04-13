export default function skVat(value) {
    let v = value;
    if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        return false;
    }
    return parseInt(v, 10) % 11 === 0;
}

import luhn from '../../algorithms/luhn';
export default function itVat(value) {
    let v = value;
    if (/^IT[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return false;
    }
    if (parseInt(v.substr(0, 7), 10) === 0) {
        return false;
    }
    const lastThree = parseInt(v.substr(7, 3), 10);
    if ((lastThree < 1) || (lastThree > 201) && lastThree !== 999 && lastThree !== 888) {
        return false;
    }
    return luhn(v);
}

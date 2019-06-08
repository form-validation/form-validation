export default function jmbg(value, countryCode) {
    if (!/^\d{13}$/.test(value)) {
        return false;
    }
    const day = parseInt(value.substr(0, 2), 10);
    const month = parseInt(value.substr(2, 2), 10);
    const rr = parseInt(value.substr(7, 2), 10);
    const k = parseInt(value.substr(12, 1), 10);
    if (day > 31 || month > 12) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
    }
    sum = 11 - sum % 11;
    if (sum === 10 || sum === 11) {
        sum = 0;
    }
    if (sum !== k) {
        return false;
    }
    switch (countryCode.toUpperCase()) {
        case 'BA': return (10 <= rr && rr <= 19);
        case 'MK': return (41 <= rr && rr <= 49);
        case 'ME': return (20 <= rr && rr <= 29);
        case 'RS': return (70 <= rr && rr <= 99);
        case 'SI': return (50 <= rr && rr <= 59);
        default: return true;
    }
}

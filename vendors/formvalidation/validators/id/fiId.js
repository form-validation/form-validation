import isValidDate from '../../utils/isValidDate';
export default function fiId(value) {
    if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
        return false;
    }
    const day = parseInt(value.substr(0, 2), 10);
    const month = parseInt(value.substr(2, 2), 10);
    let year = parseInt(value.substr(4, 2), 10);
    const centuries = {
        '+': 1800,
        '-': 1900,
        'A': 2000,
    };
    year = centuries[value.charAt(6)] + year;
    if (!isValidDate(year, month, day)) {
        return false;
    }
    const individual = parseInt(value.substr(7, 3), 10);
    if (individual < 2) {
        return false;
    }
    const n = parseInt(value.substr(0, 6) + value.substr(7, 3) + '', 10);
    return '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10);
}

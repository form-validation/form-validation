import isValidDate from '../../utils/isValidDate';
export default function roId(value) {
    if (!/^[0-9]{13}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const gender = parseInt(value.charAt(0), 10);
    if (gender === 0 || gender === 7 || gender === 8) {
        return {
            meta: {},
            valid: false,
        };
    }
    let year = parseInt(value.substr(1, 2), 10);
    const month = parseInt(value.substr(3, 2), 10);
    const day = parseInt(value.substr(5, 2), 10);
    const centuries = {
        1: 1900,
        2: 1900,
        3: 1800,
        4: 1800,
        5: 2000,
        6: 2000,
    };
    if (day > 31 && month > 12) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (gender !== 9) {
        year = centuries[gender + ''] + year;
        if (!isValidDate(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
    }
    let sum = 0;
    const weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
    const length = value.length;
    for (let i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum === 10) {
        sum = 1;
    }
    return {
        meta: {},
        valid: `${sum}` === value.charAt(length - 1),
    };
}

import luhn from '../../algorithms/luhn';
import isValidDate from '../../utils/isValidDate';
export default function zaId(value) {
    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    let year = parseInt(value.substr(0, 2), 10);
    const currentYear = new Date().getFullYear() % 100;
    const month = parseInt(value.substr(2, 2), 10);
    const day = parseInt(value.substr(4, 2), 10);
    year = (year >= currentYear) ? (year + 1900) : (year + 2000);
    if (!isValidDate(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: luhn(value),
    };
}

export default function ieVat(value) {
    let v = value;
    if (/^IE[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const getCheckDigit = (inp) => {
        let input = inp;
        while (input.length < 7) {
            input = `0${input}`;
        }
        const alphabet = 'WABCDEFGHIJKLMNOPQRSTUV';
        let sum = 0;
        for (let i = 0; i < 7; i++) {
            sum += parseInt(input.charAt(i), 10) * (8 - i);
        }
        sum += 9 * alphabet.indexOf(input.substr(7));
        return alphabet[sum % 23];
    };
    if (/^[0-9]+$/.test(v.substr(0, 7))) {
        return {
            meta: {},
            valid: v.charAt(7) === getCheckDigit(`${v.substr(0, 7)}${v.substr(8)}`),
        };
    }
    else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(v.charAt(1)) !== -1) {
        return {
            meta: {},
            valid: v.charAt(7) === getCheckDigit(`${v.substr(2, 5)}${v.substr(0, 1)}`),
        };
    }
    return {
        meta: {},
        valid: true,
    };
}

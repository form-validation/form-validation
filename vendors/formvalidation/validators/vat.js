import luhn from '../algorithms/luhn';
import mod11And10 from '../algorithms/mod11And10';
import format from '../utils/format';
import isValidDate from '../utils/isValidDate';
export default function vat() {
    const COUNTRY_CODES = [
        'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU',
        'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI', 'VE',
        'ZA',
    ];
    const validateVat = () => {
        return {
            at: (value) => {
                let v = value;
                if (/^ATU[0-9]{8}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^U[0-9]{8}$/.test(v)) {
                    return false;
                }
                v = v.substr(1);
                const weight = [1, 2, 1, 2, 1, 2, 1];
                let sum = 0;
                let temp = 0;
                for (let i = 0; i < 7; i++) {
                    temp = parseInt(v.charAt(i), 10) * weight[i];
                    if (temp > 9) {
                        temp = Math.floor(temp / 10) + temp % 10;
                    }
                    sum += temp;
                }
                sum = 10 - (sum + 4) % 10;
                if (sum === 10) {
                    sum = 0;
                }
                return `${sum}` === v.substr(7, 1);
            },
            be: (value) => {
                let v = value;
                if (/^BE[0]?[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0]?[0-9]{9}$/.test(v)) {
                    return false;
                }
                if (v.length === 9) {
                    v = `0${v}`;
                }
                if (v.substr(1, 1) === '0') {
                    return false;
                }
                const sum = parseInt(v.substr(0, 8), 10) + parseInt(v.substr(8, 2), 10);
                return sum % 97 === 0;
            },
            bg: (value) => {
                let v = value;
                if (/^BG[0-9]{9,10}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9,10}$/.test(v)) {
                    return false;
                }
                let sum = 0;
                let i = 0;
                if (v.length === 9) {
                    for (i = 0; i < 8; i++) {
                        sum += parseInt(v.charAt(i), 10) * (i + 1);
                    }
                    sum = sum % 11;
                    if (sum === 10) {
                        sum = 0;
                        for (i = 0; i < 8; i++) {
                            sum += parseInt(v.charAt(i), 10) * (i + 3);
                        }
                    }
                    sum = sum % 10;
                    return `${sum}` === v.substr(8);
                }
                else if (v.length === 10) {
                    const isEgn = (input) => {
                        let year = parseInt(input.substr(0, 2), 10) + 1900;
                        let month = parseInt(input.substr(2, 2), 10);
                        const day = parseInt(input.substr(4, 2), 10);
                        if (month > 40) {
                            year += 100;
                            month -= 40;
                        }
                        else if (month > 20) {
                            year -= 100;
                            month -= 20;
                        }
                        if (!isValidDate(year, month, day)) {
                            return false;
                        }
                        const weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                        let s = 0;
                        for (let j = 0; j < 9; j++) {
                            s += parseInt(input.charAt(j), 10) * weight[j];
                        }
                        s = (s % 11) % 10;
                        return `${s}` === input.substr(9, 1);
                    };
                    const isPnf = (input) => {
                        const weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
                        let s = 0;
                        for (let j = 0; j < 9; j++) {
                            s += parseInt(input.charAt(j), 10) * weight[j];
                        }
                        s = s % 10;
                        return `${s}` === input.substr(9, 1);
                    };
                    const isVat = (input) => {
                        const weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
                        let s = 0;
                        for (let j = 0; j < 9; j++) {
                            s += parseInt(input.charAt(j), 10) * weight[j];
                        }
                        s = 11 - s % 11;
                        if (s === 10) {
                            return false;
                        }
                        if (s === 11) {
                            s = 0;
                        }
                        return `${s}` === input.substr(9, 1);
                    };
                    return isEgn(v) || isPnf(v) || isVat(v);
                }
                return false;
            },
            br: (value) => {
                if (value === '') {
                    return true;
                }
                const cnpj = value.replace(/[^\d]+/g, '');
                if (cnpj === '' || cnpj.length !== 14) {
                    return false;
                }
                if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' ||
                    cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' ||
                    cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' ||
                    cnpj === '99999999999999') {
                    return false;
                }
                let length = cnpj.length - 2;
                let numbers = cnpj.substring(0, length);
                const digits = cnpj.substring(length);
                let sum = 0;
                let pos = length - 7;
                let i;
                for (i = length; i >= 1; i--) {
                    sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                    if (pos < 2) {
                        pos = 9;
                    }
                }
                let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
                if (result !== parseInt(digits.charAt(0), 10)) {
                    return false;
                }
                length = length + 1;
                numbers = cnpj.substring(0, length);
                sum = 0;
                pos = length - 7;
                for (i = length; i >= 1; i--) {
                    sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                    if (pos < 2) {
                        pos = 9;
                    }
                }
                result = sum % 11 < 2 ? 0 : 11 - sum % 11;
                return result === parseInt(digits.charAt(1), 10);
            },
            ch: (value) => {
                let v = value;
                if (/^CHE[0-9]{9}(MWST)?$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^E[0-9]{9}(MWST)?$/.test(v)) {
                    return false;
                }
                v = v.substr(1);
                const weight = [5, 4, 3, 2, 7, 6, 5, 4];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    return false;
                }
                if (sum === 11) {
                    sum = 0;
                }
                return `${sum}` === v.substr(8, 1);
            },
            cy: (value) => {
                let v = value;
                if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
                    return false;
                }
                if (v.substr(0, 2) === '12') {
                    return false;
                }
                let sum = 0;
                const translation = {
                    0: 1, 1: 0, 2: 5, 3: 7, 4: 9,
                    5: 13, 6: 15, 7: 17, 8: 19, 9: 21,
                };
                for (let i = 0; i < 8; i++) {
                    let temp = parseInt(v.charAt(i), 10);
                    if (i % 2 === 0) {
                        temp = translation[`${temp}`];
                    }
                    sum += temp;
                }
                return `${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26]}` === v.substr(8, 1);
            },
            cz: (value) => {
                let v = value;
                if (/^CZ[0-9]{8,10}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{8,10}$/.test(v)) {
                    return false;
                }
                let sum = 0;
                let i = 0;
                if (v.length === 8) {
                    if (`${v.charAt(0)}` === '9') {
                        return false;
                    }
                    sum = 0;
                    for (i = 0; i < 7; i++) {
                        sum += parseInt(v.charAt(i), 10) * (8 - i);
                    }
                    sum = 11 - sum % 11;
                    if (sum === 10) {
                        sum = 0;
                    }
                    if (sum === 11) {
                        sum = 1;
                    }
                    return `${sum}` === v.substr(7, 1);
                }
                else if (v.length === 9 && (`${v.charAt(0)}` === '6')) {
                    sum = 0;
                    for (i = 0; i < 7; i++) {
                        sum += parseInt(v.charAt(i + 1), 10) * (8 - i);
                    }
                    sum = 11 - sum % 11;
                    if (sum === 10) {
                        sum = 0;
                    }
                    if (sum === 11) {
                        sum = 1;
                    }
                    sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
                    return `${sum}` === v.substr(8, 1);
                }
                else if (v.length === 9 || v.length === 10) {
                    let year = 1900 + parseInt(v.substr(0, 2), 10);
                    const month = parseInt(v.substr(2, 2), 10) % 50 % 20;
                    const day = parseInt(v.substr(4, 2), 10);
                    if (v.length === 9) {
                        if (year >= 1980) {
                            year -= 100;
                        }
                        if (year > 1953) {
                            return false;
                        }
                    }
                    else if (year < 1954) {
                        year += 100;
                    }
                    if (!isValidDate(year, month, day)) {
                        return false;
                    }
                    if (v.length === 10) {
                        let check = parseInt(v.substr(0, 9), 10) % 11;
                        if (year < 1985) {
                            check = check % 10;
                        }
                        return `${check}` === v.substr(9, 1);
                    }
                    return true;
                }
                return false;
            },
            de: (value) => {
                let v = value;
                if (/^DE[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}$/.test(v)) {
                    return false;
                }
                return mod11And10(v);
            },
            dk: (value) => {
                let v = value;
                if (/^DK[0-9]{8}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{8}$/.test(v)) {
                    return false;
                }
                let sum = 0;
                const weight = [2, 7, 6, 5, 4, 3, 2, 1];
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                return sum % 11 === 0;
            },
            ee: (value) => {
                let v = value;
                if (/^EE[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}$/.test(v)) {
                    return false;
                }
                let sum = 0;
                const weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
                for (let i = 0; i < 9; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                return sum % 10 === 0;
            },
            es: (value) => {
                let v = value;
                if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
                    return {
                        meta: null,
                        valid: false,
                    };
                }
                const dni = (input) => {
                    const check = parseInt(input.substr(0, 8), 10);
                    return `${'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23]}` === input.substr(8, 1);
                };
                const nie = (input) => {
                    const check = ['XYZ'.indexOf(input.charAt(0)), input.substr(1)].join('');
                    const cd = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(check, 10) % 23];
                    return `${cd}` === input.substr(8, 1);
                };
                const cif = (input) => {
                    const firstChar = input.charAt(0);
                    let check;
                    if ('KLM'.indexOf(firstChar) !== -1) {
                        check = parseInt(input.substr(1, 8), 10);
                        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                        return `${check}` === input.substr(8, 1);
                    }
                    else if ('ABCDEFGHJNPQRSUVW'.indexOf(firstChar) !== -1) {
                        const weight = [2, 1, 2, 1, 2, 1, 2];
                        let sum = 0;
                        let temp = 0;
                        for (let i = 0; i < 7; i++) {
                            temp = parseInt(input.charAt(i + 1), 10) * weight[i];
                            if (temp > 9) {
                                temp = Math.floor(temp / 10) + temp % 10;
                            }
                            sum += temp;
                        }
                        sum = 10 - sum % 10;
                        if (sum === 10) {
                            sum = 0;
                        }
                        return `${sum}` === input.substr(8, 1) || 'JABCDEFGHI'[sum] === input.substr(8, 1);
                    }
                    return false;
                };
                const first = v.charAt(0);
                if (/^[0-9]$/.test(first)) {
                    return {
                        meta: {
                            type: 'DNI',
                        },
                        valid: dni(v),
                    };
                }
                else if (/^[XYZ]$/.test(first)) {
                    return {
                        meta: {
                            type: 'NIE',
                        },
                        valid: nie(v),
                    };
                }
                else {
                    return {
                        meta: {
                            type: 'CIF',
                        },
                        valid: cif(v),
                    };
                }
            },
            fi: (value) => {
                let v = value;
                if (/^FI[0-9]{8}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{8}$/.test(v)) {
                    return false;
                }
                const weight = [7, 9, 10, 5, 8, 4, 2, 1];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                return sum % 11 === 0;
            },
            fr: (value) => {
                let v = value;
                if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
                    return false;
                }
                if (!luhn(v.substr(2))) {
                    return false;
                }
                if (/^[0-9]{2}$/.test(v.substr(0, 2))) {
                    return v.substr(0, 2) === `${parseInt(v.substr(2) + '12', 10) % 97}`;
                }
                else {
                    const alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
                    let check;
                    if (/^[0-9]$/.test(v.charAt(0))) {
                        check = alphabet.indexOf(v.charAt(0)) * 24 + alphabet.indexOf(v.charAt(1)) - 10;
                    }
                    else {
                        check = alphabet.indexOf(v.charAt(0)) * 34 + alphabet.indexOf(v.charAt(1)) - 100;
                    }
                    return ((parseInt(v.substr(2), 10) + 1 + Math.floor(check / 11)) % 11) === (check % 11);
                }
            },
            gb: (value) => {
                let v = value;
                if (/^GB[0-9]{9}$/.test(v)
                    || /^GB[0-9]{12}$/.test(v)
                    || /^GBGD[0-9]{3}$/.test(v)
                    || /^GBHA[0-9]{3}$/.test(v)
                    || /^GB(GD|HA)8888[0-9]{5}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}$/.test(v)
                    && !/^[0-9]{12}$/.test(v)
                    && !/^GD[0-9]{3}$/.test(v)
                    && !/^HA[0-9]{3}$/.test(v)
                    && !/^(GD|HA)8888[0-9]{5}$/.test(v)) {
                    return false;
                }
                const length = v.length;
                if (length === 5) {
                    const firstTwo = v.substr(0, 2);
                    const lastThree = parseInt(v.substr(2), 10);
                    return ('GD' === firstTwo && lastThree < 500) || ('HA' === firstTwo && lastThree >= 500);
                }
                else if (length === 11 && ('GD8888' === v.substr(0, 6) || 'HA8888' === v.substr(0, 6))) {
                    if (('GD' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) >= 500)
                        || ('HA' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) < 500)) {
                        return false;
                    }
                    return parseInt(v.substr(6, 3), 10) % 97 === parseInt(v.substr(9, 2), 10);
                }
                else if (length === 9 || length === 12) {
                    const weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
                    let sum = 0;
                    for (let i = 0; i < 9; i++) {
                        sum += parseInt(v.charAt(i), 10) * weight[i];
                    }
                    sum = sum % 97;
                    if (parseInt(v.substr(0, 3), 10) >= 100) {
                        return sum === 0 || sum === 42 || sum === 55;
                    }
                    else {
                        return sum === 0;
                    }
                }
                return true;
            },
            gr: (value) => {
                let v = value;
                if (/^(GR|EL)[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}$/.test(v)) {
                    return false;
                }
                if (v.length === 8) {
                    v = `0${v}`;
                }
                const weight = [256, 128, 64, 32, 16, 8, 4, 2];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                sum = (sum % 11) % 10;
                return `${sum}` === v.substr(8, 1);
            },
            el: (value) => {
                return this.gr(value);
            },
            hu: (value) => {
                let v = value;
                if (/^HU[0-9]{8}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{8}$/.test(v)) {
                    return false;
                }
                const weight = [9, 7, 3, 1, 9, 7, 3, 1];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                return sum % 10 === 0;
            },
            hr: (value) => {
                let v = value;
                if (/^HR[0-9]{11}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{11}$/.test(v)) {
                    return false;
                }
                return mod11And10(v);
            },
            ie: (value) => {
                let v = value;
                if (/^IE[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
                    return false;
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
                    return v.charAt(7) === getCheckDigit(`${v.substr(0, 7)}${v.substr(8)}`);
                }
                else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(v.charAt(1)) !== -1) {
                    return v.charAt(7) === getCheckDigit(`${v.substr(2, 5)}${v.substr(0, 1)}`);
                }
                return true;
            },
            is: (value) => {
                let v = value;
                if (/^IS[0-9]{5,6}$/.test(v)) {
                    v = v.substr(2);
                }
                return /^[0-9]{5,6}$/.test(v);
            },
            it: (value) => {
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
            },
            lt: (value) => {
                let v = value;
                if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
                    return false;
                }
                const length = v.length;
                let sum = 0;
                let i;
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(v.charAt(i), 10) * (1 + i % 9);
                }
                let check = sum % 11;
                if (check === 10) {
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += parseInt(v.charAt(i), 10) * (1 + (i + 2) % 9);
                    }
                }
                check = check % 11 % 10;
                return `${check}` === v.charAt(length - 1);
            },
            lu: (value) => {
                let v = value;
                if (/^LU[0-9]{8}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{8}$/.test(v)) {
                    return false;
                }
                return `${parseInt(v.substr(0, 6), 10) % 89}` === v.substr(6, 2);
            },
            lv: (value) => {
                let v = value;
                if (/^LV[0-9]{11}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{11}$/.test(v)) {
                    return false;
                }
                const first = parseInt(v.charAt(0), 10);
                const length = v.length;
                let sum = 0;
                let weight = [];
                let i;
                if (first > 3) {
                    sum = 0;
                    weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
                    for (i = 0; i < length; i++) {
                        sum += parseInt(v.charAt(i), 10) * weight[i];
                    }
                    sum = sum % 11;
                    return sum === 3;
                }
                else {
                    const day = parseInt(v.substr(0, 2), 10);
                    const month = parseInt(v.substr(2, 2), 10);
                    let year = parseInt(v.substr(4, 2), 10);
                    year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
                    if (!isValidDate(year, month, day)) {
                        return false;
                    }
                    sum = 0;
                    weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
                    for (i = 0; i < length - 1; i++) {
                        sum += parseInt(v.charAt(i), 10) * weight[i];
                    }
                    sum = (sum + 1) % 11 % 10;
                    return `${sum}` === v.charAt(length - 1);
                }
            },
            mt: (value) => {
                let v = value;
                if (/^MT[0-9]{8}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{8}$/.test(v)) {
                    return false;
                }
                const weight = [3, 4, 6, 7, 8, 9, 10, 1];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                return sum % 37 === 0;
            },
            nl: (value) => {
                let v = value;
                if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
                    return false;
                }
                const weight = [9, 8, 7, 6, 5, 4, 3, 2];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                if (sum > 9) {
                    sum = 0;
                }
                return `${sum}` === v.substr(8, 1);
            },
            no: (value) => {
                let v = value;
                if (/^NO[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}$/.test(v)) {
                    return false;
                }
                const weight = [3, 2, 7, 6, 5, 4, 3, 2];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                sum = 11 - sum % 11;
                if (sum === 11) {
                    sum = 0;
                }
                return `${sum}` === v.substr(8, 1);
            },
            pl: (value) => {
                let v = value;
                if (/^PL[0-9]{10}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{10}$/.test(v)) {
                    return false;
                }
                const weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
                let sum = 0;
                for (let i = 0; i < 10; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                return sum % 11 === 0;
            },
            pt: (value) => {
                let v = value;
                if (/^PT[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}$/.test(v)) {
                    return false;
                }
                const weight = [9, 8, 7, 6, 5, 4, 3, 2];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                sum = 11 - sum % 11;
                if (sum > 9) {
                    sum = 0;
                }
                return `${sum}` === v.substr(8, 1);
            },
            ro: (value) => {
                let v = value;
                if (/^RO[1-9][0-9]{1,9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[1-9][0-9]{1,9}$/.test(v)) {
                    return false;
                }
                const length = v.length;
                const weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length);
                let sum = 0;
                for (let i = 0; i < length - 1; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                sum = (10 * sum) % 11 % 10;
                return `${sum}` === v.substr(length - 1, 1);
            },
            ru: (value) => {
                let v = value;
                if (/^RU([0-9]{10}|[0-9]{12})$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^([0-9]{10}|[0-9]{12})$/.test(v)) {
                    return false;
                }
                let i = 0;
                if (v.length === 10) {
                    const weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                    let sum = 0;
                    for (i = 0; i < 10; i++) {
                        sum += parseInt(v.charAt(i), 10) * weight[i];
                    }
                    sum = sum % 11;
                    if (sum > 9) {
                        sum = sum % 10;
                    }
                    return `${sum}` === v.substr(9, 1);
                }
                else if (v.length === 12) {
                    const weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                    const weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                    let sum1 = 0;
                    let sum2 = 0;
                    for (i = 0; i < 11; i++) {
                        sum1 += parseInt(v.charAt(i), 10) * weight1[i];
                        sum2 += parseInt(v.charAt(i), 10) * weight2[i];
                    }
                    sum1 = sum1 % 11;
                    if (sum1 > 9) {
                        sum1 = sum1 % 10;
                    }
                    sum2 = sum2 % 11;
                    if (sum2 > 9) {
                        sum2 = sum2 % 10;
                    }
                    return `${sum1}` === v.substr(10, 1) && `${sum2}` === v.substr(11, 1);
                }
                return false;
            },
            rs: (value) => {
                let v = value;
                if (/^RS[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{9}$/.test(v)) {
                    return false;
                }
                let sum = 10;
                let temp = 0;
                for (let i = 0; i < 8; i++) {
                    temp = (parseInt(v.charAt(i), 10) + sum) % 10;
                    if (temp === 0) {
                        temp = 10;
                    }
                    sum = (2 * temp) % 11;
                }
                return (sum + parseInt(v.substr(8, 1), 10)) % 10 === 1;
            },
            se: (value) => {
                let v = value;
                if (/^SE[0-9]{10}01$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[0-9]{10}01$/.test(v)) {
                    return false;
                }
                v = v.substr(0, 10);
                return luhn(v);
            },
            si: (value) => {
                const res = value.match(/^(SI)?([1-9][0-9]{7})$/);
                if (!res) {
                    return false;
                }
                const v = res[1] ? value.substr(2) : value;
                const weight = [8, 7, 6, 5, 4, 3, 2];
                let sum = 0;
                for (let i = 0; i < 7; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i];
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                return `${sum}` === v.substr(7, 1);
            },
            sk: (value) => {
                let v = value;
                if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
                    return false;
                }
                return parseInt(v, 10) % 11 === 0;
            },
            ve: (value) => {
                let v = value;
                if (/^VE[VEJPG][0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                if (!/^[VEJPG][0-9]{9}$/.test(v)) {
                    return false;
                }
                const types = {
                    E: 8,
                    G: 20,
                    J: 12,
                    P: 16,
                    V: 4,
                };
                const weight = [3, 2, 7, 6, 5, 4, 3, 2];
                let sum = types[v.charAt(0)];
                for (let i = 0; i < 8; i++) {
                    sum += parseInt(v.charAt(i + 1), 10) * weight[i];
                }
                sum = 11 - sum % 11;
                if (sum === 11 || sum === 10) {
                    sum = 0;
                }
                return `${sum}` === v.substr(9, 1);
            },
            za: (value) => {
                let v = value;
                if (/^ZA4[0-9]{9}$/.test(v)) {
                    v = v.substr(2);
                }
                return /^4[0-9]{9}$/.test(v);
            },
        };
    };
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, input.options);
            let country = input.value.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            }
            else {
                country = opts.country;
            }
            const result = validateVat()[country.toLowerCase()](input.value);
            const output = (result === true || result === false) ? { valid: result } : result;
            output.message = input.l10n
                ? format(opts.message || input.l10n.vat.country, input.l10n.vat.countries[country.toUpperCase()])
                : opts.message;
            return output;
        },
    };
}

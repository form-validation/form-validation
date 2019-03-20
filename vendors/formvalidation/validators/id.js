import luhn from '../algorithms/luhn';
import mod11And10 from '../algorithms/mod11And10';
import format from '../utils/format';
import isValidDate from '../utils/isValidDate';
export default function id() {
    const COUNTRY_CODES = [
        'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CZ', 'DK', 'EE', 'ES', 'FI', 'HR', 'IE', 'IS', 'LT', 'LV', 'ME', 'MK',
        'NL', 'PL', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'TH', 'TR', 'ZA',
    ];
    const validateJMBG = (value, countryCode) => {
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
    };
    const ba = (value) => {
        return validateJMBG(value, 'BA');
    };
    const me = (value) => {
        return validateJMBG(value, 'ME');
    };
    const mk = (value) => {
        return validateJMBG(value, 'MK');
    };
    const rs = (value) => {
        return validateJMBG(value, 'RS');
    };
    const si = (value) => {
        return validateJMBG(value, 'SI');
    };
    const bg = (value) => {
        if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
            return false;
        }
        const v = value.replace(/\s/g, '');
        let year = parseInt(v.substr(0, 2), 10) + 1900;
        let month = parseInt(v.substr(2, 2), 10);
        const day = parseInt(v.substr(4, 2), 10);
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
        let sum = 0;
        const weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        for (let i = 0; i < 9; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = (sum % 11) % 10;
        return `${sum}` === v.substr(9, 1);
    };
    const br = (value) => {
        const v = value.replace(/\D/g, '');
        if (!/^\d{11}$/.test(v) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(v)) {
            return false;
        }
        let d1 = 0;
        let i;
        for (i = 0; i < 9; i++) {
            d1 += (10 - i) * parseInt(v.charAt(i), 10);
        }
        d1 = 11 - d1 % 11;
        if (d1 === 10 || d1 === 11) {
            d1 = 0;
        }
        if (`${d1}` !== v.charAt(9)) {
            return false;
        }
        let d2 = 0;
        for (i = 0; i < 10; i++) {
            d2 += (11 - i) * parseInt(v.charAt(i), 10);
        }
        d2 = 11 - d2 % 11;
        if (d2 === 10 || d2 === 11) {
            d2 = 0;
        }
        return `${d2}` === v.charAt(10);
    };
    const ch = (value) => {
        if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
            return false;
        }
        const v = value.replace(/\D/g, '').substr(3);
        const length = v.length;
        const weight = (length === 8) ? [3, 1] : [1, 3];
        let sum = 0;
        for (let i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i % 2];
        }
        sum = 10 - sum % 10;
        return `${sum}` === v.charAt(length - 1);
    };
    const cl = (value) => {
        if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
            return false;
        }
        let v = value.replace(/\-/g, '');
        while (v.length < 9) {
            v = `0${v}`;
        }
        const weight = [3, 2, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 8; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = 11 - sum % 11;
        let cd = `${sum}`;
        if (sum === 11) {
            cd = '0';
        }
        else if (sum === 10) {
            cd = 'K';
        }
        return cd === v.charAt(8).toUpperCase();
    };
    const cn = (value) => {
        const v = value.trim();
        if (!/^\d{15}$/.test(v) && !/^\d{17}[\dXx]{1}$/.test(v)) {
            return false;
        }
        const adminDivisionCodes = {
            11: {
                0: [0],
                1: [[0, 9], [11, 17]],
                2: [0, 28, 29],
            },
            12: {
                0: [0],
                1: [[0, 16]],
                2: [0, 21, 23, 25],
            },
            13: {
                0: [0],
                1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
                2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
                3: [[0, 4], [21, 24]],
                4: [[0, 4], 6, 21, [23, 35], 81],
                5: [[0, 3], [21, 35], 81, 82],
                6: [[0, 4], [21, 38], [81, 84]],
                7: [[0, 3], 5, 6, [21, 33]],
                8: [[0, 4], [21, 28]],
                9: [[0, 3], [21, 30], [81, 84]],
                10: [[0, 3], [22, 26], 28, 81, 82],
                11: [[0, 2], [21, 28], 81, 82],
            },
            14: {
                0: [0],
                1: [0, 1, [5, 10], [21, 23], 81],
                2: [[0, 3], 11, 12, [21, 27]],
                3: [[0, 3], 11, 21, 22],
                4: [[0, 2], 11, 21, [23, 31], 81],
                5: [[0, 2], 21, 22, 24, 25, 81],
                6: [[0, 3], [21, 24]],
                7: [[0, 2], [21, 29], 81],
                8: [[0, 2], [21, 30], 81, 82],
                9: [[0, 2], [21, 32], 81],
                10: [[0, 2], [21, 34], 81, 82],
                11: [[0, 2], [21, 30], 81, 82],
                23: [[0, 3], 22, 23, [25, 30], 32, 33],
            },
            15: {
                0: [0],
                1: [[0, 5], [21, 25]],
                2: [[0, 7], [21, 23]],
                3: [[0, 4]],
                4: [[0, 4], [21, 26], [28, 30]],
                5: [[0, 2], [21, 26], 81],
                6: [[0, 2], [21, 27]],
                7: [[0, 3], [21, 27], [81, 85]],
                8: [[0, 2], [21, 26]],
                9: [[0, 2], [21, 29], 81],
                22: [[0, 2], [21, 24]],
                25: [[0, 2], [22, 31]],
                26: [[0, 2], [24, 27], [29, 32], 34],
                28: [0, 1, [22, 27]],
                29: [0, [21, 23]],
            },
            21: {
                0: [0],
                1: [[0, 6], [11, 14], [22, 24], 81],
                2: [[0, 4], [11, 13], 24, [81, 83]],
                3: [[0, 4], 11, 21, 23, 81],
                4: [[0, 4], 11, [21, 23]],
                5: [[0, 5], 21, 22],
                6: [[0, 4], 24, 81, 82],
                7: [[0, 3], 11, 26, 27, 81, 82],
                8: [[0, 4], 11, 81, 82],
                9: [[0, 5], 11, 21, 22],
                10: [[0, 5], 11, 21, 81],
                11: [[0, 3], 21, 22],
                12: [[0, 2], 4, 21, 23, 24, 81, 82],
                13: [[0, 3], 21, 22, 24, 81, 82],
                14: [[0, 4], 21, 22, 81],
            },
            22: {
                0: [0],
                1: [[0, 6], 12, 22, [81, 83]],
                2: [[0, 4], 11, 21, [81, 84]],
                3: [[0, 3], 22, 23, 81, 82],
                4: [[0, 3], 21, 22],
                5: [[0, 3], 21, 23, 24, 81, 82],
                6: [[0, 2], 4, 5, [21, 23], 25, 81],
                7: [[0, 2], [21, 24], 81],
                8: [[0, 2], 21, 22, 81, 82],
                24: [[0, 6], 24, 26],
            },
            23: {
                0: [0],
                1: [[0, 12], 21, [23, 29], [81, 84]],
                2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
                3: [[0, 7], 21, 81, 82],
                4: [[0, 7], 21, 22],
                5: [[0, 3], 5, 6, [21, 24]],
                6: [[0, 6], [21, 24]],
                7: [[0, 16], 22, 81],
                8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
                9: [[0, 4], 21],
                10: [[0, 5], 24, 25, 81, [83, 85]],
                11: [[0, 2], 21, 23, 24, 81, 82],
                12: [[0, 2], [21, 26], [81, 83]],
                27: [[0, 4], [21, 23]],
            },
            31: {
                0: [0],
                1: [0, 1, [3, 10], [12, 20]],
                2: [0, 30],
            },
            32: {
                0: [0],
                1: [[0, 7], 11, [13, 18], 24, 25],
                2: [[0, 6], 11, 81, 82],
                3: [[0, 5], 11, 12, [21, 24], 81, 82],
                4: [[0, 2], 4, 5, 11, 12, 81, 82],
                5: [[0, 9], [81, 85]],
                6: [[0, 2], 11, 12, 21, 23, [81, 84]],
                7: [0, 1, 3, 5, 6, [21, 24]],
                8: [[0, 4], 11, 26, [29, 31]],
                9: [[0, 3], [21, 25], 28, 81, 82],
                10: [[0, 3], 11, 12, 23, 81, 84, 88],
                11: [[0, 2], 11, 12, [81, 83]],
                12: [[0, 4], [81, 84]],
                13: [[0, 2], 11, [21, 24]],
            },
            33: {
                0: [0],
                1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
                2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
                3: [[0, 4], 22, 24, [26, 29], 81, 82],
                4: [[0, 2], 11, 21, 24, [81, 83]],
                5: [[0, 3], [21, 23]],
                6: [[0, 2], 21, 24, [81, 83]],
                7: [[0, 3], 23, 26, 27, [81, 84]],
                8: [[0, 3], 22, 24, 25, 81],
                9: [[0, 3], 21, 22],
                10: [[0, 4], [21, 24], 81, 82],
                11: [[0, 2], [21, 27], 81],
            },
            34: {
                0: [0],
                1: [[0, 4], 11, [21, 24], 81],
                2: [[0, 4], 7, 8, [21, 23], 25],
                3: [[0, 4], 11, [21, 23]],
                4: [[0, 6], 21],
                5: [[0, 4], 6, [21, 23]],
                6: [[0, 4], 21],
                7: [[0, 3], 11, 21],
                8: [[0, 3], 11, [22, 28], 81],
                10: [[0, 4], [21, 24]],
                11: [[0, 3], 22, [24, 26], 81, 82],
                12: [[0, 4], 21, 22, 25, 26, 82],
                13: [[0, 2], [21, 24]],
                14: [[0, 2], [21, 24]],
                15: [[0, 3], [21, 25]],
                16: [[0, 2], [21, 23]],
                17: [[0, 2], [21, 23]],
                18: [[0, 2], [21, 25], 81],
            },
            35: {
                0: [0],
                1: [[0, 5], 11, [21, 25], 28, 81, 82],
                2: [[0, 6], [11, 13]],
                3: [[0, 5], 22],
                4: [[0, 3], 21, [23, 30], 81],
                5: [[0, 5], 21, [24, 27], [81, 83]],
                6: [[0, 3], [22, 29], 81],
                7: [[0, 2], [21, 25], [81, 84]],
                8: [[0, 2], [21, 25], 81],
                9: [[0, 2], [21, 26], 81, 82],
            },
            36: {
                0: [0],
                1: [[0, 5], 11, [21, 24]],
                2: [[0, 3], 22, 81],
                3: [[0, 2], 13, [21, 23]],
                4: [[0, 3], 21, [23, 30], 81, 82],
                5: [[0, 2], 21],
                6: [[0, 2], 22, 81],
                7: [[0, 2], [21, 35], 81, 82],
                8: [[0, 3], [21, 30], 81],
                9: [[0, 2], [21, 26], [81, 83]],
                10: [[0, 2], [21, 30]],
                11: [[0, 2], [21, 30], 81],
            },
            37: {
                0: [0],
                1: [[0, 5], 12, 13, [24, 26], 81],
                2: [[0, 3], 5, [11, 14], [81, 85]],
                3: [[0, 6], [21, 23]],
                4: [[0, 6], 81],
                5: [[0, 3], [21, 23]],
                6: [[0, 2], [11, 13], 34, [81, 87]],
                7: [[0, 5], 24, 25, [81, 86]],
                8: [[0, 2], 11, [26, 32], [81, 83]],
                9: [[0, 3], 11, 21, 23, 82, 83],
                10: [[0, 2], [81, 83]],
                11: [[0, 3], 21, 22],
                12: [[0, 3]],
                13: [[0, 2], 11, 12, [21, 29]],
                14: [[0, 2], [21, 28], 81, 82],
                15: [[0, 2], [21, 26], 81],
                16: [[0, 2], [21, 26]],
                17: [[0, 2], [21, 28]],
            },
            41: {
                0: [0],
                1: [[0, 6], 8, 22, [81, 85]],
                2: [[0, 5], 11, [21, 25]],
                3: [[0, 7], 11, [22, 29], 81],
                4: [[0, 4], 11, [21, 23], 25, 81, 82],
                5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
                6: [[0, 3], 11, 21, 22],
                7: [[0, 4], 11, 21, [24, 28], 81, 82],
                8: [[0, 4], 11, [21, 23], 25, [81, 83]],
                9: [[0, 2], 22, 23, [26, 28]],
                10: [[0, 2], [23, 25], 81, 82],
                11: [[0, 4], [21, 23]],
                12: [[0, 2], 21, 22, 24, 81, 82],
                13: [[0, 3], [21, 30], 81],
                14: [[0, 3], [21, 26], 81],
                15: [[0, 3], [21, 28]],
                16: [[0, 2], [21, 28], 81],
                17: [[0, 2], [21, 29]],
                90: [0, 1],
            },
            42: {
                0: [0],
                1: [[0, 7], [11, 17]],
                2: [[0, 5], 22, 81],
                3: [[0, 3], [21, 25], 81],
                5: [[0, 6], [25, 29], [81, 83]],
                6: [[0, 2], 6, 7, [24, 26], [82, 84]],
                7: [[0, 4]],
                8: [[0, 2], 4, 21, 22, 81],
                9: [[0, 2], [21, 23], 81, 82, 84],
                10: [[0, 3], [22, 24], 81, 83, 87],
                11: [[0, 2], [21, 27], 81, 82],
                12: [[0, 2], [21, 24], 81],
                13: [[0, 3], 21, 81],
                28: [[0, 2], 22, 23, [25, 28]],
                90: [0, [4, 6], 21],
            },
            43: {
                0: [0],
                1: [[0, 5], 11, 12, 21, 22, 24, 81],
                2: [[0, 4], 11, 21, [23, 25], 81],
                3: [[0, 2], 4, 21, 81, 82],
                4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
                5: [[0, 3], 11, [21, 25], [27, 29], 81],
                6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
                7: [[0, 3], [21, 26], 81],
                8: [[0, 2], 11, 21, 22],
                9: [[0, 3], [21, 23], 81],
                10: [[0, 3], [21, 28], 81],
                11: [[0, 3], [21, 29]],
                12: [[0, 2], [21, 30], 81],
                13: [[0, 2], 21, 22, 81, 82],
                31: [0, 1, [22, 27], 30],
            },
            44: {
                0: [0],
                1: [[0, 7], [11, 16], 83, 84],
                2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
                3: [0, 1, [3, 8]],
                4: [[0, 4]],
                5: [0, 1, [6, 15], 23, 82, 83],
                6: [0, 1, [4, 8]],
                7: [0, 1, [3, 5], 81, [83, 85]],
                8: [[0, 4], 11, 23, 25, [81, 83]],
                9: [[0, 3], 23, [81, 83]],
                12: [[0, 3], [23, 26], 83, 84],
                13: [[0, 3], [22, 24], 81],
                14: [[0, 2], [21, 24], 26, 27, 81],
                15: [[0, 2], 21, 23, 81],
                16: [[0, 2], [21, 25]],
                17: [[0, 2], 21, 23, 81],
                18: [[0, 3], 21, 23, [25, 27], 81, 82],
                19: [0],
                20: [0],
                51: [[0, 3], 21, 22],
                52: [[0, 3], 21, 22, 24, 81],
                53: [[0, 2], [21, 23], 81],
            },
            45: {
                0: [0],
                1: [[0, 9], [21, 27]],
                2: [[0, 5], [21, 26]],
                3: [[0, 5], 11, 12, [21, 32]],
                4: [0, 1, [3, 6], 11, [21, 23], 81],
                5: [[0, 3], 12, 21],
                6: [[0, 3], 21, 81],
                7: [[0, 3], 21, 22],
                8: [[0, 4], 21, 81],
                9: [[0, 3], [21, 24], 81],
                10: [[0, 2], [21, 31]],
                11: [[0, 2], [21, 23]],
                12: [[0, 2], [21, 29], 81],
                13: [[0, 2], [21, 24], 81],
                14: [[0, 2], [21, 25], 81],
            },
            46: {
                0: [0],
                1: [0, 1, [5, 8]],
                2: [0, 1],
                3: [0, [21, 23]],
                90: [[0, 3], [5, 7], [21, 39]],
            },
            50: {
                0: [0],
                1: [[0, 19]],
                2: [0, [22, 38], [40, 43]],
                3: [0, [81, 84]],
            },
            51: {
                0: [0],
                1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
                3: [[0, 4], 11, 21, 22],
                4: [[0, 3], 11, 21, 22],
                5: [[0, 4], 21, 22, 24, 25],
                6: [0, 1, 3, 23, 26, [81, 83]],
                7: [0, 1, 3, 4, [22, 27], 81],
                8: [[0, 2], 11, 12, [21, 24]],
                9: [[0, 4], [21, 23]],
                10: [[0, 2], 11, 24, 25, 28],
                11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
                13: [[0, 4], [21, 25], 81],
                14: [[0, 2], [21, 25]],
                15: [[0, 3], [21, 29]],
                16: [[0, 3], [21, 23], 81],
                17: [[0, 3], [21, 25], 81],
                18: [[0, 3], [21, 27]],
                19: [[0, 3], [21, 23]],
                20: [[0, 2], 21, 22, 81],
                32: [0, [21, 33]],
                33: [0, [21, 38]],
                34: [0, 1, [22, 37]],
            },
            52: {
                0: [0],
                1: [[0, 3], [11, 15], [21, 23], 81],
                2: [0, 1, 3, 21, 22],
                3: [[0, 3], [21, 30], 81, 82],
                4: [[0, 2], [21, 25]],
                5: [[0, 2], [21, 27]],
                6: [[0, 3], [21, 28]],
                22: [0, 1, [22, 30]],
                23: [0, 1, [22, 28]],
                24: [0, 1, [22, 28]],
                26: [0, 1, [22, 36]],
                27: [[0, 2], 22, 23, [25, 32]],
            },
            53: {
                0: [0],
                1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
                3: [[0, 2], [21, 26], 28, 81],
                4: [[0, 2], [21, 28]],
                5: [[0, 2], [21, 24]],
                6: [[0, 2], [21, 30]],
                7: [[0, 2], [21, 24]],
                8: [[0, 2], [21, 29]],
                9: [[0, 2], [21, 27]],
                23: [0, 1, [22, 29], 31],
                25: [[0, 4], [22, 32]],
                26: [0, 1, [21, 28]],
                27: [0, 1, [22, 30]], 28: [0, 1, 22, 23],
                29: [0, 1, [22, 32]],
                31: [0, 2, 3, [22, 24]],
                34: [0, [21, 23]],
                33: [0, 21, [23, 25]],
                35: [0, [21, 28]],
            },
            54: {
                0: [0],
                1: [[0, 2], [21, 27]],
                21: [0, [21, 29], 32, 33],
                22: [0, [21, 29], [31, 33]],
                23: [0, 1, [22, 38]],
                24: [0, [21, 31]],
                25: [0, [21, 27]],
                26: [0, [21, 27]],
            },
            61: {
                0: [0],
                1: [[0, 4], [11, 16], 22, [24, 26]],
                2: [[0, 4], 22],
                3: [[0, 4], [21, 24], [26, 31]],
                4: [[0, 4], [22, 31], 81],
                5: [[0, 2], [21, 28], 81, 82],
                6: [[0, 2], [21, 32]],
                7: [[0, 2], [21, 30]],
                8: [[0, 2], [21, 31]],
                9: [[0, 2], [21, 29]],
                10: [[0, 2], [21, 26]],
            },
            62: {
                0: [0],
                1: [[0, 5], 11, [21, 23]],
                2: [0, 1],
                3: [[0, 2], 21],
                4: [[0, 3], [21, 23]],
                5: [[0, 3], [21, 25]],
                6: [[0, 2], [21, 23]],
                7: [[0, 2], [21, 25]],
                8: [[0, 2], [21, 26]],
                9: [[0, 2], [21, 24], 81, 82],
                10: [[0, 2], [21, 27]],
                11: [[0, 2], [21, 26]],
                12: [[0, 2], [21, 28]],
                24: [0, 21, [24, 29]],
                26: [0, 21, [23, 30]],
                29: [0, 1, [21, 27]],
                30: [0, 1, [21, 27]],
            },
            63: {
                0: [0],
                1: [[0, 5], [21, 23]],
                2: [0, 2, [21, 25]],
                21: [0, [21, 23], [26, 28]],
                22: [0, [21, 24]],
                23: [0, [21, 24]],
                25: [0, [21, 25]],
                26: [0, [21, 26]],
                27: [0, 1, [21, 26]],
                28: [[0, 2], [21, 23]],
            },
            64: {
                0: [0],
                1: [0, 1, [4, 6], 21, 22, 81],
                2: [[0, 3], 5, [21, 23]],
                3: [[0, 3], [21, 24], 81],
                4: [[0, 2], [21, 25]],
                5: [[0, 2], 21, 22],
            },
            65: {
                0: [0],
                1: [[0, 9], 21],
                2: [[0, 5]],
                21: [0, 1, 22, 23],
                22: [0, 1, 22, 23],
                23: [[0, 3], [23, 25], 27, 28],
                28: [0, 1, [22, 29]],
                29: [0, 1, [22, 29]],
                30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]],
                32: [0, 1, [21, 27]],
                40: [0, 2, 3, [21, 28]],
                42: [[0, 2], 21, [23, 26]],
                43: [0, 1, [21, 26]],
                90: [[0, 4]], 27: [[0, 2], 22, 23],
            },
            71: { 0: [0] },
            81: { 0: [0] },
            82: { 0: [0] },
        };
        const provincial = parseInt(v.substr(0, 2), 10);
        const prefectural = parseInt(v.substr(2, 2), 10);
        const county = parseInt(v.substr(4, 2), 10);
        if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
            return false;
        }
        let inRange = false;
        const rangeDef = adminDivisionCodes[provincial][prefectural];
        let i;
        for (i = 0; i < rangeDef.length; i++) {
            if ((Array.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1])
                || (!Array.isArray(rangeDef[i]) && county === rangeDef[i])) {
                inRange = true;
                break;
            }
        }
        if (!inRange) {
            return false;
        }
        let dob;
        if (v.length === 18) {
            dob = v.substr(6, 8);
        }
        else {
            dob = `19${v.substr(6, 6)}`;
        }
        const year = parseInt(dob.substr(0, 4), 10);
        const month = parseInt(dob.substr(4, 2), 10);
        const day = parseInt(dob.substr(6, 2), 10);
        if (!isValidDate(year, month, day)) {
            return false;
        }
        if (v.length === 18) {
            const weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let sum = 0;
            for (i = 0; i < 17; i++) {
                sum += parseInt(v.charAt(i), 10) * weight[i];
            }
            sum = (12 - (sum % 11)) % 11;
            const checksum = (v.charAt(17).toUpperCase() !== 'X') ? parseInt(v.charAt(17), 10) : 10;
            return checksum === sum;
        }
        return true;
    };
    const cz = (value) => {
        if (!/^\d{9,10}$/.test(value)) {
            return false;
        }
        let year = 1900 + parseInt(value.substr(0, 2), 10);
        const month = parseInt(value.substr(2, 2), 10) % 50 % 20;
        const day = parseInt(value.substr(4, 2), 10);
        if (value.length === 9) {
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
        if (value.length === 10) {
            let check = parseInt(value.substr(0, 9), 10) % 11;
            if (year < 1985) {
                check = check % 10;
            }
            return `${check}` === value.substr(9, 1);
        }
        return true;
    };
    const dk = (value) => {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
            return false;
        }
        const v = value.replace(/-/g, '');
        const day = parseInt(v.substr(0, 2), 10);
        const month = parseInt(v.substr(2, 2), 10);
        let year = parseInt(v.substr(4, 2), 10);
        switch (true) {
            case ('5678'.indexOf(v.charAt(6)) !== -1 && year >= 58):
                year += 1800;
                break;
            case ('0123'.indexOf(v.charAt(6)) !== -1):
            case ('49'.indexOf(v.charAt(6)) !== -1 && year >= 37):
                year += 1900;
                break;
            default:
                year += 2000;
                break;
        }
        return isValidDate(year, month, day);
    };
    const ee = (value) => {
        return lt(value);
    };
    const es = (value) => {
        const isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
        const isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
        const isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
        if (!isDNI && !isNIE && !isCIF) {
            return {
                meta: null,
                valid: false,
            };
        }
        let v = value.replace(/-/g, '');
        let check;
        let tpe;
        let isValid = true;
        if (isDNI || isNIE) {
            tpe = 'DNI';
            const index = 'XYZ'.indexOf(v.charAt(0));
            if (index !== -1) {
                v = index + v.substr(1) + '';
                tpe = 'NIE';
            }
            check = parseInt(v.substr(0, 8), 10);
            check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
            return {
                meta: {
                    type: tpe,
                },
                valid: (check === v.substr(8, 1)),
            };
        }
        else {
            check = v.substr(1, 7);
            tpe = 'CIF';
            const letter = v[0];
            const control = v.substr(-1);
            let sum = 0;
            for (let i = 0; i < check.length; i++) {
                if (i % 2 !== 0) {
                    sum += parseInt(check[i], 10);
                }
                else {
                    const tmp = '' + (parseInt(check[i], 10) * 2);
                    sum += parseInt(tmp[0], 10);
                    if (tmp.length === 2) {
                        sum += parseInt(tmp[1], 10);
                    }
                }
            }
            let lastDigit = sum - (Math.floor(sum / 10) * 10);
            if (lastDigit !== 0) {
                lastDigit = 10 - lastDigit;
            }
            if ('KQS'.indexOf(letter) !== -1) {
                isValid = (control === 'JABCDEFGHI'[lastDigit]);
            }
            else if ('ABEH'.indexOf(letter) !== -1) {
                isValid = (control === ('' + lastDigit));
            }
            else {
                isValid = (control === ('' + lastDigit) || control === 'JABCDEFGHI'[lastDigit]);
            }
            return {
                meta: {
                    type: tpe,
                },
                valid: isValid,
            };
        }
    };
    const fi = (value) => {
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
    };
    const hr = (value) => {
        return (/^[0-9]{11}$/.test(value) && mod11And10(value));
    };
    const ie = (value) => {
        if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
            return false;
        }
        const getCheckDigit = (v) => {
            let input = v;
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
        if (value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))) {
            return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
        }
        else {
            return value.charAt(7) === getCheckDigit(value.substr(0, 7));
        }
    };
    const is = (value) => {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
            return false;
        }
        const v = value.replace(/-/g, '');
        const day = parseInt(v.substr(0, 2), 10);
        const month = parseInt(v.substr(2, 2), 10);
        let year = parseInt(v.substr(4, 2), 10);
        const century = parseInt(v.charAt(9), 10);
        year = (century === 9) ? (1900 + year) : ((20 + century) * 100 + year);
        if (!isValidDate(year, month, day, true)) {
            return false;
        }
        const weight = [3, 2, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 8; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = 11 - sum % 11;
        return `${sum}` === v.charAt(8);
    };
    const lt = (value) => {
        if (!/^[0-9]{11}$/.test(value)) {
            return false;
        }
        const gender = parseInt(value.charAt(0), 10);
        let year = parseInt(value.substr(1, 2), 10);
        const month = parseInt(value.substr(3, 2), 10);
        const day = parseInt(value.substr(5, 2), 10);
        const century = (gender % 2 === 0) ? (17 + gender / 2) : (17 + (gender + 1) / 2);
        year = century * 100 + year;
        if (!isValidDate(year, month, day, true)) {
            return false;
        }
        let weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
        let sum = 0;
        let i;
        for (i = 0; i < 10; i++) {
            sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum !== 10) {
            return `${sum}` === value.charAt(10);
        }
        sum = 0;
        weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
        for (i = 0; i < 10; i++) {
            sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum === 10) {
            sum = 0;
        }
        return `${sum}` === value.charAt(10);
    };
    const lv = (value) => {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
            return false;
        }
        const v = value.replace(/\D/g, '');
        const day = parseInt(v.substr(0, 2), 10);
        const month = parseInt(v.substr(2, 2), 10);
        let year = parseInt(v.substr(4, 2), 10);
        year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
        if (!isValidDate(year, month, day, true)) {
            return false;
        }
        let sum = 0;
        const weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
        for (let i = 0; i < 10; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = (sum + 1) % 11 % 10;
        return `${sum}` === v.charAt(10);
    };
    const nl = (value) => {
        if (value.length < 8) {
            return false;
        }
        let v = value;
        if (v.length === 8) {
            v = `0${v}`;
        }
        if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
            return false;
        }
        v = v.replace(/\./g, '');
        if (parseInt(v, 10) === 0) {
            return false;
        }
        let sum = 0;
        const length = v.length;
        for (let i = 0; i < length - 1; i++) {
            sum += (9 - i) * parseInt(v.charAt(i), 10);
        }
        sum = sum % 11;
        if (sum === 10) {
            sum = 0;
        }
        return `${sum}` === v.charAt(length - 1);
    };
    const pl = (value) => {
        if (!/^[0-9]{11}$/.test(value)) {
            return false;
        }
        let sum = 0;
        const length = value.length;
        const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];
        for (let i = 0; i < length - 1; i++) {
            sum += weight[i] * parseInt(value.charAt(i), 10);
        }
        sum = sum % 10;
        if (sum === 0) {
            sum = 10;
        }
        sum = 10 - sum;
        return `${sum}` === value.charAt(length - 1);
    };
    const ro = (value) => {
        if (!/^[0-9]{13}$/.test(value)) {
            return false;
        }
        const gender = parseInt(value.charAt(0), 10);
        if (gender === 0 || gender === 7 || gender === 8) {
            return false;
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
            return false;
        }
        if (gender !== 9) {
            year = centuries[gender + ''] + year;
            if (!isValidDate(year, month, day)) {
                return false;
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
        return `${sum}` === value.charAt(length - 1);
    };
    const se = (value) => {
        if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
            return false;
        }
        const v = value.replace(/[^0-9]/g, '');
        const year = parseInt(v.substr(0, 2), 10) + 1900;
        const month = parseInt(v.substr(2, 2), 10);
        const day = parseInt(v.substr(4, 2), 10);
        if (!isValidDate(year, month, day)) {
            return false;
        }
        return luhn(v);
    };
    const sk = (value) => {
        return cz(value);
    };
    const sm = (value) => {
        return /^\d{5}$/.test(value);
    };
    const th = (value) => {
        if (value.length !== 13) {
            return false;
        }
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            sum += parseInt(value.charAt(i), 10) * (13 - i);
        }
        return (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10);
    };
    const tr = (value) => {
        if (value.length !== 11) {
            return false;
        }
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(value.charAt(i), 10);
        }
        return (sum % 10) === parseInt(value.charAt(10), 10);
    };
    const za = (value) => {
        if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
            return false;
        }
        let year = parseInt(value.substr(0, 2), 10);
        const currentYear = new Date().getFullYear() % 100;
        const month = parseInt(value.substr(2, 2), 10);
        const day = parseInt(value.substr(4, 2), 10);
        year = (year >= currentYear) ? (year + 1900) : (year + 2000);
        if (!isValidDate(year, month, day)) {
            return false;
        }
        return luhn(value);
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
            if (COUNTRY_CODES.indexOf(country) === -1) {
                return { valid: true };
            }
            let result = {
                meta: {},
                valid: true,
            };
            switch (country.toLowerCase()) {
                case 'ba':
                    result.valid = ba(input.value);
                    break;
                case 'bg':
                    result.valid = bg(input.value);
                    break;
                case 'br':
                    result.valid = br(input.value);
                    break;
                case 'ch':
                    result.valid = ch(input.value);
                    break;
                case 'cl':
                    result.valid = cl(input.value);
                    break;
                case 'cn':
                    result.valid = cn(input.value);
                    break;
                case 'cz':
                    result.valid = cz(input.value);
                    break;
                case 'dk':
                    result.valid = dk(input.value);
                    break;
                case 'ee':
                    result.valid = ee(input.value);
                    break;
                case 'es':
                    result = es(input.value);
                    break;
                case 'fi':
                    result.valid = fi(input.value);
                    break;
                case 'hr':
                    result.valid = hr(input.value);
                    break;
                case 'ie':
                    result.valid = ie(input.value);
                    break;
                case 'is':
                    result.valid = is(input.value);
                    break;
                case 'lt':
                    result.valid = lt(input.value);
                    break;
                case 'lv':
                    result.valid = lv(input.value);
                    break;
                case 'me':
                    result.valid = me(input.value);
                    break;
                case 'mk':
                    result.valid = mk(input.value);
                    break;
                case 'nl':
                    result.valid = nl(input.value);
                    break;
                case 'pl':
                    result.valid = pl(input.value);
                    break;
                case 'ro':
                    result.valid = ro(input.value);
                    break;
                case 'rs':
                    result.valid = rs(input.value);
                    break;
                case 'se':
                    result.valid = se(input.value);
                    break;
                case 'si':
                    result.valid = si(input.value);
                    break;
                case 'sk':
                    result.valid = sk(input.value);
                    break;
                case 'sm':
                    result.valid = sm(input.value);
                    break;
                case 'th':
                    result.valid = th(input.value);
                    break;
                case 'tr':
                    result.valid = tr(input.value);
                    break;
                case 'za':
                    result.valid = za(input.value);
                    break;
            }
            const message = input.l10n
                ? format(opts.message || input.l10n.id.country, input.l10n.id.countries[country.toUpperCase()])
                : opts.message;
            return Object.assign({}, { message }, result);
        },
    };
}

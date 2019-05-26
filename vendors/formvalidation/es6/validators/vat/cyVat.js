export default function cyVat(value) {
    let v = value;
    if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (v.substr(0, 2) === '12') {
        return {
            meta: {},
            valid: false,
        };
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
    return {
        meta: {},
        valid: `${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26]}` === v.substr(8, 1),
    };
}

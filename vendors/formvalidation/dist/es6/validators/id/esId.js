export default function esId(value) {
    const isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    const isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    const isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
    if (!isDNI && !isNIE && !isCIF) {
        return {
            meta: {},
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
}

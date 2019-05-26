import isValidDate from '../../utils/isValidDate';
export default function mxId(value) {
    const v = value.toUpperCase();
    if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const blacklistNames = [
        'BACA', 'BAKA', 'BUEI', 'BUEY', 'CACA', 'CACO', 'CAGA', 'CAGO', 'CAKA', 'CAKO', 'COGE', 'COGI', 'COJA',
        'COJE', 'COJI', 'COJO', 'COLA', 'CULO', 'FALO', 'FETO', 'GETA', 'GUEI', 'GUEY', 'JETA', 'JOTO', 'KACA',
        'KACO', 'KAGA', 'KAGO', 'KAKA', 'KAKO', 'KOGE', 'KOGI', 'KOJA', 'KOJE', 'KOJI', 'KOJO', 'KOLA', 'KULO',
        'LILO', 'LOCA', 'LOCO', 'LOKA', 'LOKO', 'MAME', 'MAMO', 'MEAR', 'MEAS', 'MEON', 'MIAR', 'MION', 'MOCO',
        'MOKO', 'MULA', 'MULO', 'NACA', 'NACO', 'PEDA', 'PEDO', 'PENE', 'PIPI', 'PITO', 'POPO', 'PUTA', 'PUTO',
        'QULO', 'RATA', 'ROBA', 'ROBE', 'ROBO', 'RUIN', 'SENO', 'TETA', 'VACA', 'VAGA', 'VAGO', 'VAKA', 'VUEI',
        'VUEY', 'WUEI', 'WUEY',
    ];
    const name = v.substr(0, 4);
    if (blacklistNames.indexOf(name) >= 0) {
        return {
            meta: {},
            valid: false,
        };
    }
    let year = parseInt(v.substr(4, 2), 10);
    const month = parseInt(v.substr(6, 2), 10);
    const day = parseInt(v.substr(6, 2), 10);
    if (/^[0-9]$/.test(v.charAt(16))) {
        year += 1900;
    }
    else {
        year += 2000;
    }
    if (!isValidDate(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const gender = v.charAt(10);
    if (gender !== 'H' && gender !== 'M') {
        return {
            meta: {},
            valid: false,
        };
    }
    const state = v.substr(11, 2);
    const states = [
        'AS', 'BC', 'BS', 'CC', 'CH', 'CL', 'CM', 'CS', 'DF', 'DG', 'GR', 'GT', 'HG', 'JC', 'MC', 'MN', 'MS',
        'NE', 'NL', 'NT', 'OC', 'PL', 'QR', 'QT', 'SL', 'SP', 'SR', 'TC', 'TL', 'TS', 'VZ', 'YN', 'ZS',
    ];
    if (states.indexOf(state) === -1) {
        return {
            meta: {},
            valid: false,
        };
    }
    const alphabet = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ';
    let sum = 0;
    const length = v.length;
    for (let i = 0; i < length - 1; i++) {
        sum += (18 - i) * alphabet.indexOf(v.charAt(i));
    }
    sum = (10 - sum % 10) % 10;
    return {
        meta: {},
        valid: `${sum}` === v.charAt(length - 1),
    };
}

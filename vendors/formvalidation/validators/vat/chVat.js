export default function chVat(value) {
    let v = value;
    if (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
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
}

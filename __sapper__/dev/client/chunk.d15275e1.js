function mod37And36(value, alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    const length = value.length;
    const modulus = alphabet.length;
    let check = Math.floor(modulus / 2);
    for (let i = 0; i < length; i++) {
        check = (((check || modulus) * 2) % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
    }
    return (check === 1);
}

function grid() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            let v = input.value.toUpperCase();
            if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(v)) {
                return { valid: false };
            }
            v = v.replace(/\s/g, '').replace(/-/g, '');
            if ('GRID:' === v.substr(0, 5)) {
                v = v.substr(5);
            }
            return { valid: mod37And36(v) };
        },
    };
}

export { grid as a };

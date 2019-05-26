export default function numeric() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, {
                decimalSeparator: '.',
                thousandsSeparator: '',
            }, input.options);
            let v = `${input.value}`;
            if (v.substr(0, 1) === opts.decimalSeparator) {
                v = `0${opts.decimalSeparator}${v.substr(1)}`;
            }
            else if (v.substr(0, 2) === `-${opts.decimalSeparator}`) {
                v = `-0${opts.decimalSeparator}${v.substr(2)}`;
            }
            const decimalSeparator = (opts.decimalSeparator === '.') ? '\\.' : opts.decimalSeparator;
            const thousandsSeparator = (opts.thousandsSeparator === '.') ? '\\.' : opts.thousandsSeparator;
            const testRegexp = new RegExp(`^-?[0-9]{1,3}(${thousandsSeparator}[0-9]{3})*(${decimalSeparator}[0-9]+)?$`);
            const thousandsReplacer = new RegExp(thousandsSeparator, 'g');
            if (!testRegexp.test(v)) {
                return { valid: false };
            }
            if (thousandsSeparator) {
                v = v.replace(thousandsReplacer, '');
            }
            if (decimalSeparator) {
                v = v.replace(decimalSeparator, '.');
            }
            const n = parseFloat(v);
            return { valid: !isNaN(n) && isFinite(n) };
        },
    };
}

import mod37And36 from '../algorithms/mod37And36';
export default function grid() {
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

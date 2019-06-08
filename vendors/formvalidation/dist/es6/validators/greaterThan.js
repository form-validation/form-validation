import format from '../utils/format';
export default function greaterThan() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { inclusive: true }, input.options);
            const minValue = parseFloat(`${opts.min}`.replace(',', '.'));
            return opts.inclusive
                ? {
                    message: input.l10n
                        ? format(opts.message || input.l10n.greaterThan.default, `${minValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) >= minValue,
                }
                : {
                    message: input.l10n
                        ? format(opts.message || input.l10n.greaterThan.notInclusive, `${minValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) > minValue,
                };
        },
    };
}

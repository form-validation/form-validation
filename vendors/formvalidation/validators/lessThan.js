import format from '../utils/format';
export default function lessThan() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { inclusive: true }, input.options);
            const maxValue = parseFloat(`${opts.max}`.replace(',', '.'));
            return opts.inclusive
                ? {
                    message: input.l10n
                        ? format(opts.message || input.l10n.lessThan.default, `${maxValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) <= maxValue,
                }
                : {
                    message: input.l10n
                        ? format(opts.message || input.l10n.lessThan.notInclusive, `${maxValue}`)
                        : opts.message,
                    valid: parseFloat(input.value) < maxValue,
                };
        },
    };
}

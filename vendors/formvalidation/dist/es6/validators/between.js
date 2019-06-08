import format from '../utils/format';
export default function between() {
    const formatValue = (value) => {
        return parseFloat(`${value}`.replace(',', '.'));
    };
    return {
        validate(input) {
            const value = input.value;
            if (value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { inclusive: true }, input.options);
            const minValue = formatValue(opts.min);
            const maxValue = formatValue(opts.max);
            return opts.inclusive
                ? {
                    message: input.l10n
                        ? format(opts.message || input.l10n.between.default, [`${minValue}`, `${maxValue}`])
                        : opts.message,
                    valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
                }
                : {
                    message: input.l10n
                        ? format(opts.message || input.l10n.between.notInclusive, [`${minValue}`, `${maxValue}`])
                        : opts.message,
                    valid: parseFloat(value) > minValue && parseFloat(value) < maxValue,
                };
        },
    };
}

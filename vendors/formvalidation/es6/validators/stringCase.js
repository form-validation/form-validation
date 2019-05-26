export default function stringCase() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, { case: 'lower' }, input.options);
            const caseOpt = (opts.case || 'lower').toLowerCase();
            return {
                message: opts.message || (input.l10n
                    ? (('upper' === caseOpt) ? input.l10n.stringCase.upper : input.l10n.stringCase.default)
                    : opts.message),
                valid: ('upper' === caseOpt)
                    ? input.value === input.value.toUpperCase()
                    : input.value === input.value.toLowerCase(),
            };
        },
    };
}

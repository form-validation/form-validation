import format from '../utils/format';
export default function uuid() {
    return {
        validate(input) {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, input.options);
            const patterns = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
            };
            const version = opts.version ? `${opts.version}` : 'all';
            return {
                message: opts.version
                    ? (input.l10n ? format(opts.message || input.l10n.uuid.version, opts.version) : opts.message)
                    : (input.l10n ? input.l10n.uuid.default : opts.message),
                valid: (null === patterns[version]) ? true : patterns[version].test(input.value),
            };
        },
    };
}

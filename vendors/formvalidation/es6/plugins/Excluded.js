import Plugin from '../core/Plugin';
export default class Excluded extends Plugin {
    static defaultIgnore(field, element, elements) {
        const isVisible = !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
        const disabled = element.getAttribute('disabled');
        return disabled === '' || disabled === 'disabled' || element.getAttribute('type') === 'hidden' || !isVisible;
    }
    constructor(opts) {
        super(opts);
        this.opts = Object.assign({}, { excluded: Excluded.defaultIgnore }, opts);
        this.ignoreValidationFilter = this.ignoreValidation.bind(this);
    }
    install() {
        this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
    }
    uninstall() {
        this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
    }
    ignoreValidation(field, element, elements) {
        return this.opts.excluded.apply(this, [field, element, elements]);
    }
}

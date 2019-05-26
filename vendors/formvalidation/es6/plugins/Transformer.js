import Plugin from '../core/Plugin';
export default class Transformer extends Plugin {
    constructor(opts) {
        super(opts);
        this.valueFilter = this.getElementValue.bind(this);
    }
    install() {
        this.core.registerFilter('field-value', this.valueFilter);
    }
    uninstall() {
        this.core.deregisterFilter('field-value', this.valueFilter);
    }
    getElementValue(defaultValue, field, element, validator) {
        if (this.opts[field] && this.opts[field][validator] && 'function' === typeof this.opts[field][validator]) {
            return this.opts[field][validator].apply(this, [field, element, validator]);
        }
        return defaultValue;
    }
}

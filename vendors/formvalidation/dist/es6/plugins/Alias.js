import Plugin from '../core/Plugin';
export default class Alias extends Plugin {
    constructor(opts) {
        super(opts);
        this.opts = opts || {};
        this.validatorNameFilter = this.getValidatorName.bind(this);
    }
    install() {
        this.core.registerFilter('validator-name', this.validatorNameFilter);
    }
    uninstall() {
        this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    }
    getValidatorName(alias, field) {
        return this.opts[alias] || alias;
    }
}

import Plugin from '../core/Plugin';
export default class Sequence extends Plugin {
    constructor(opts) {
        super(opts);
        this.invalidFields = new Map();
        this.opts = Object.assign({}, { enabled: true }, opts);
        this.validatorHandler = this.onValidatorValidated.bind(this);
        this.shouldValidateFilter = this.shouldValidate.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
    }
    install() {
        this.core
            .on('core.validator.validated', this.validatorHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('core.element.validating', this.elementValidatingHandler)
            .registerFilter('field-should-validate', this.shouldValidateFilter);
    }
    uninstall() {
        this.invalidFields.clear();
        this.core
            .off('core.validator.validated', this.validatorHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('core.element.validating', this.elementValidatingHandler)
            .deregisterFilter('field-should-validate', this.shouldValidateFilter);
    }
    shouldValidate(field, element, value, validator) {
        const stop = (this.opts.enabled === true || this.opts.enabled[field] === true)
            && this.invalidFields.has(element)
            && !!this.invalidFields.get(element).length
            && this.invalidFields.get(element).indexOf(validator) === -1;
        return !stop;
    }
    onValidatorValidated(e) {
        const validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
        const index = validators.indexOf(e.validator);
        if (e.result.valid && index >= 0) {
            validators.splice(index, 1);
        }
        else if (!e.result.valid && index === -1) {
            validators.push(e.validator);
        }
        this.invalidFields.set(e.element, validators);
    }
    onFieldAdded(e) {
        if (e.elements) {
            this.clearInvalidFields(e.elements);
        }
    }
    onElementNotValidated(e) {
        this.clearInvalidFields(e.elements);
    }
    onElementValidating(e) {
        this.clearInvalidFields(e.elements);
    }
    clearInvalidFields(elements) {
        elements.forEach((ele) => this.invalidFields.delete(ele));
    }
}

import Plugin from '../core/Plugin';
export default class AutoFocus extends Plugin {
    constructor(opts) {
        super(opts);
        this.invalidElements = [];
        this.opts = Object.assign({}, {
            onPrefocus: () => { },
        }, opts);
        this.invalidFormHandler = this.onFormInvalid.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
    }
    install() {
        this.core
            .on('core.form.invalid', this.invalidFormHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler);
    }
    uninstall() {
        this.invalidElements = [];
        this.core
            .off('core.form.invalid', this.invalidFormHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler);
    }
    onElementValidated(e) {
        const index = this.invalidElements.indexOf(e.element);
        if (e.valid && index >= 0) {
            this.invalidElements.splice(index, 1);
        }
        else if (!e.valid && index === -1) {
            this.invalidElements.push(e.element);
        }
    }
    onElementNotValidated(e) {
        this.invalidElements.splice(this.invalidElements.indexOf(e.element), 1);
    }
    onFormInvalid() {
        if (this.invalidElements.length) {
            const firstElement = this.invalidElements[0];
            const e = { firstElement };
            this.core.emit('plugins.autofocus.prefocus', e);
            this.opts.onPrefocus(e);
            firstElement.focus();
        }
    }
}

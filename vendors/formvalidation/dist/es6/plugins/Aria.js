import Plugin from '../core/Plugin';
export default class Aria extends Plugin {
    constructor() {
        super({});
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.fieldValidHandler = this.onFieldValid.bind(this);
        this.fieldInvalidHandler = this.onFieldInvalid.bind(this);
        this.messageDisplayedHandler = this.onMessageDisplayed.bind(this);
    }
    install() {
        this.core
            .on('core.field.valid', this.fieldValidHandler)
            .on('core.field.invalid', this.fieldInvalidHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('plugins.message.displayed', this.messageDisplayedHandler);
    }
    uninstall() {
        this.core
            .off('core.field.valid', this.fieldValidHandler)
            .off('core.field.invalid', this.fieldInvalidHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('plugins.message.displayed', this.messageDisplayedHandler);
    }
    onElementValidated(e) {
        if (e.valid) {
            e.element.setAttribute('aria-invalid', 'false');
            e.element.removeAttribute('aria-describedby');
        }
    }
    onFieldValid(field) {
        const elements = this.core.getElements(field);
        if (elements) {
            elements.forEach((ele) => {
                ele.setAttribute('aria-invalid', 'false');
                ele.removeAttribute('aria-describedby');
            });
        }
    }
    onFieldInvalid(field) {
        const elements = this.core.getElements(field);
        if (elements) {
            elements.forEach((ele) => ele.setAttribute('aria-invalid', 'true'));
        }
    }
    onMessageDisplayed(e) {
        e.messageElement.setAttribute('role', 'alert');
        e.messageElement.setAttribute('aria-hidden', 'false');
        const elements = this.core.getElements(e.field);
        const index = elements.indexOf(e.element);
        const id = `js-fv-${e.field}-${index}-${Date.now()}-message`;
        e.messageElement.setAttribute('id', id);
        e.element.setAttribute('aria-describedby', id);
        const type = e.element.getAttribute('type');
        if ('radio' === type || 'checkbox' === type) {
            elements.forEach((ele) => ele.setAttribute('aria-describedby', id));
        }
    }
}

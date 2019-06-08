import Plugin from '../core/Plugin';
export default class DefaultSubmit extends Plugin {
    constructor() {
        super({});
        this.onValidHandler = this.onFormValid.bind(this);
    }
    install() {
        const form = this.core.getFormElement();
        if (form.querySelectorAll('[type="submit"][name="submit"]').length) {
            throw new Error('Do not use `submit` for the name attribute of submit button');
        }
        this.core.on('core.form.valid', this.onValidHandler);
    }
    uninstall() {
        this.core.off('core.form.valid', this.onValidHandler);
    }
    onFormValid() {
        const form = this.core.getFormElement();
        if (form instanceof HTMLFormElement) {
            form.submit();
        }
    }
}

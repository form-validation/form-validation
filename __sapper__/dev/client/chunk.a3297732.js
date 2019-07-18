import { a as Plugin } from './chunk.b786f426.js';

class SubmitButton extends Plugin {
    constructor(opts) {
        super(opts);
        this.isFormValid = false;
        this.opts = Object.assign({}, {
            aspNetButton: false,
            selector: '[type="submit"]:not([formnovalidate])',
        }, opts);
        this.submitHandler = this.handleSubmitEvent.bind(this);
        this.buttonClickHandler = this.handleClickEvent.bind(this);
    }
    install() {
        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
            return;
        }
        const form = this.core.getFormElement();
        this.selectorButtons = [].slice.call(form.querySelectorAll(this.opts.selector));
        this.submitButtons = [].slice.call(form.querySelectorAll('[type="submit"]'));
        form.setAttribute('novalidate', 'novalidate');
        form.addEventListener('submit', this.submitHandler);
        this.submitButtons.forEach((button) => {
            button.addEventListener('click', this.buttonClickHandler);
        });
    }
    uninstall() {
        const form = this.core.getFormElement();
        if (form instanceof HTMLFormElement) {
            form.removeEventListener('submit', this.submitHandler);
        }
        this.submitButtons.forEach((button) => {
            button.removeEventListener('click', this.buttonClickHandler);
        });
    }
    handleSubmitEvent(e) {
        this.validateForm(e);
    }
    handleClickEvent(e) {
        const target = e.currentTarget;
        if ((target instanceof HTMLElement)
            && (this.selectorButtons.indexOf(target) !== -1)) {
            if (this.opts.aspNetButton && this.isFormValid === true) ;
            else {
                const form = this.core.getFormElement();
                form.removeEventListener('submit', this.submitHandler);
                this.clickedButton = e.target;
                this.validateForm(e);
            }
        }
    }
    validateForm(e) {
        e.preventDefault();
        this.core.validate().then((result) => {
            if (result === 'Valid' && this.opts.aspNetButton && !this.isFormValid && this.clickedButton) {
                this.isFormValid = true;
                this.clickedButton.removeEventListener('click', this.buttonClickHandler);
                this.clickedButton.click();
            }
        });
    }
}

export { SubmitButton as a };

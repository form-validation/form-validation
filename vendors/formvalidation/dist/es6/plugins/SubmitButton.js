import Plugin from '../core/Plugin';
export default class SubmitButton extends Plugin {
    constructor(opts) {
        super(opts);
        this.opts = Object.assign({}, {
            selector: '[type="submit"]:not([formnovalidate])',
        }, opts);
        this.submitHandler = this.submitHandle.bind(this);
    }
    install() {
        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
            return;
        }
        const form = this.core.getFormElement();
        form.setAttribute('novalidate', 'novalidate');
        form.addEventListener('submit', this.submitHandler);
        const hiddenButton = document.createElement('button');
        hiddenButton.setAttribute('type', 'submit');
        Object.assign(hiddenButton.style, {
            display: 'none',
            height: '0',
            width: '0',
        });
        form.appendChild(hiddenButton);
        const selectorButtons = [].slice.call(form.querySelectorAll(this.opts.selector));
        const submitButtons = [].slice.call(form.querySelectorAll('[type="submit"]'));
        submitButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const target = e.currentTarget;
                if (!e.defaultPrevented && (target instanceof HTMLElement)
                    && (selectorButtons.indexOf(target) === -1)
                    && target !== hiddenButton) {
                    form.removeEventListener('submit', this.submitHandler);
                    form.submit();
                    return false;
                }
            });
        });
    }
    uninstall() {
        const form = this.core.getFormElement();
        if (form instanceof HTMLFormElement) {
            form.removeEventListener('submit', this.submitHandler);
        }
    }
    submitHandle(e) {
        e.preventDefault();
        this.core.validate();
    }
}

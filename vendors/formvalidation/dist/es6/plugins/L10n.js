import Plugin from '../core/Plugin';
export default class L10n extends Plugin {
    constructor(opts) {
        super(opts);
        this.messageFilter = this.getMessage.bind(this);
    }
    install() {
        this.core.registerFilter('validator-message', this.messageFilter);
    }
    uninstall() {
        this.core.deregisterFilter('validator-message', this.messageFilter);
    }
    getMessage(locale, field, validator) {
        if (this.opts[field] && this.opts[field][validator]) {
            const message = this.opts[field][validator];
            const messageType = typeof message;
            if ('object' === messageType && message[locale]) {
                return message[locale];
            }
            else if ('function' === messageType) {
                const result = message.apply(this, [field, validator]);
                return (result && result[locale]) ? result[locale] : '';
            }
        }
        return '';
    }
}

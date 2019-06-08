import Plugin from '../core/Plugin';
import Alias from './Alias';
export default class Mailgun extends Plugin {
    constructor(opts) {
        super(opts);
        this.opts = Object.assign({}, { suggestion: false }, opts);
        this.messageDisplayedHandler = this.onMessageDisplayed.bind(this);
    }
    install() {
        if (this.opts.suggestion) {
            this.core.on('plugins.message.displayed', this.messageDisplayedHandler);
        }
        const aliasOpts = {
            mailgun: 'remote',
        };
        this.core
            .registerPlugin('___mailgunAlias', new Alias(aliasOpts))
            .addField(this.opts.field, {
            validators: {
                mailgun: {
                    crossDomain: true,
                    data: {
                        api_key: this.opts.apiKey,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    message: this.opts.message,
                    name: 'address',
                    url: 'https://api.mailgun.net/v3/address/validate',
                    validKey: 'is_valid',
                },
            },
        });
    }
    uninstall() {
        if (this.opts.suggestion) {
            this.core.off('plugins.message.displayed', this.messageDisplayedHandler);
        }
        this.core.removeField(this.opts.field);
    }
    onMessageDisplayed(e) {
        if (e.field === this.opts.field && 'mailgun' === e.validator && e.meta && e.meta.did_you_mean) {
            e.messageElement.innerHTML = `Did you mean ${e.meta.did_you_mean}?`;
        }
    }
}

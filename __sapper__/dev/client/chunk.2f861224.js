import { a as Plugin, g as fetch } from './chunk.b786f426.js';

class Recaptcha extends Plugin {
    constructor(opts) {
        super(opts);
        this.widgetIds = new Map();
        this.captchaStatus = 'NotValidated';
        this.opts = Object.assign({}, Recaptcha.DEFAULT_OPTIONS, opts);
        this.fieldResetHandler = this.onResetField.bind(this);
        this.preValidateFilter = this.preValidate.bind(this);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
    }
    install() {
        this.core
            .on('core.field.reset', this.fieldResetHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .registerFilter('validate-pre', this.preValidateFilter);
        const loadPrevCaptcha = (typeof window[Recaptcha.LOADED_CALLBACK] === 'undefined')
            ? () => { }
            : window[Recaptcha.LOADED_CALLBACK];
        window[Recaptcha.LOADED_CALLBACK] = () => {
            loadPrevCaptcha();
            const captchaOptions = {
                'badge': this.opts.badge,
                'callback': () => {
                    if (this.opts.backendVerificationUrl === '') {
                        this.captchaStatus = 'Valid';
                        this.core.updateFieldStatus(Recaptcha.CAPTCHA_FIELD, 'Valid');
                    }
                    else {
                        this.core.revalidateField(Recaptcha.CAPTCHA_FIELD);
                    }
                },
                'error-callback': () => {
                    this.captchaStatus = 'Invalid';
                    this.core.updateFieldStatus(Recaptcha.CAPTCHA_FIELD, 'Invalid');
                },
                'expired-callback': () => {
                    this.captchaStatus = 'NotValidated';
                    this.core.updateFieldStatus(Recaptcha.CAPTCHA_FIELD, 'NotValidated');
                },
                'sitekey': this.opts.siteKey,
                'size': this.opts.size,
            };
            const widgetId = window['grecaptcha'].render(this.opts.element, captchaOptions);
            this.widgetIds.set(this.opts.element, widgetId);
            this.core.addField(Recaptcha.CAPTCHA_FIELD, {
                validators: {
                    promise: {
                        message: this.opts.message,
                        promise: (input) => {
                            const value = this.widgetIds.has(this.opts.element)
                                ? window['grecaptcha'].getResponse(this.widgetIds.get(this.opts.element))
                                : input.value;
                            if (value === '') {
                                this.captchaStatus = 'Invalid';
                                return Promise.resolve({
                                    valid: false,
                                });
                            }
                            else if (this.opts.backendVerificationUrl === '') {
                                this.captchaStatus = 'Valid';
                                return Promise.resolve({
                                    valid: true,
                                });
                            }
                            else if (this.captchaStatus === 'Valid') {
                                return Promise.resolve({
                                    valid: true,
                                });
                            }
                            else {
                                return fetch(this.opts.backendVerificationUrl, {
                                    method: 'POST',
                                    params: {
                                        [Recaptcha.CAPTCHA_FIELD]: value,
                                    },
                                }).then((response) => {
                                    const isValid = `${response['success']}` === 'true';
                                    this.captchaStatus = isValid ? 'Valid' : 'Invalid';
                                    return Promise.resolve({
                                        meta: response,
                                        valid: isValid,
                                    });
                                }).catch((reason) => {
                                    this.captchaStatus = 'NotValidated';
                                    return Promise.reject({
                                        valid: false,
                                    });
                                });
                            }
                        },
                    },
                },
            });
        };
        const src = this.getScript();
        if (!document.body.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = src;
            document.body.appendChild(script);
        }
    }
    uninstall() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.core
            .off('core.field.reset', this.fieldResetHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .deregisterFilter('validate-pre', this.preValidateFilter);
        this.widgetIds.clear();
        const src = this.getScript();
        const scripts = [].slice.call(document.body.querySelectorAll(`script[src="${src}"]`));
        scripts.forEach((s) => s.parentNode.removeChild(s));
        this.core.removeField(Recaptcha.CAPTCHA_FIELD);
    }
    getScript() {
        const lang = this.opts.language ? `&hl=${this.opts.language}` : '';
        return `https://www.google.com/recaptcha/api.js?onload=${Recaptcha.LOADED_CALLBACK}&render=explicit${lang}`;
    }
    preValidate() {
        if (this.opts.size === 'invisible' && this.widgetIds.has(this.opts.element)) {
            const widgetId = this.widgetIds.get(this.opts.element);
            return this.captchaStatus === 'Valid'
                ? Promise.resolve()
                : new Promise((resolve, reject) => {
                    window['grecaptcha'].execute(widgetId).then(() => {
                        if (this.timer) {
                            clearTimeout(this.timer);
                        }
                        this.timer = window.setTimeout(resolve, 1 * 1000);
                    });
                });
        }
        else {
            return Promise.resolve();
        }
    }
    onResetField(e) {
        if (e.field === Recaptcha.CAPTCHA_FIELD && this.widgetIds.has(this.opts.element)) {
            const widgetId = this.widgetIds.get(this.opts.element);
            window['grecaptcha'].reset(widgetId);
        }
    }
    onIconPlaced(e) {
        if (e.field === Recaptcha.CAPTCHA_FIELD) {
            if (this.opts.size === 'invisible') {
                e.iconElement.style.display = 'none';
            }
            else {
                const captchaContainer = document.getElementById(this.opts.element);
                if (captchaContainer) {
                    captchaContainer.parentNode.insertBefore(e.iconElement, captchaContainer.nextSibling);
                }
            }
        }
    }
}
Recaptcha.CAPTCHA_FIELD = 'g-recaptcha-response';
Recaptcha.DEFAULT_OPTIONS = {
    backendVerificationUrl: '',
    badge: 'bottomright',
    size: 'normal',
    theme: 'light',
};
Recaptcha.LOADED_CALLBACK = '___reCaptchaLoaded___';

export { Recaptcha as a };

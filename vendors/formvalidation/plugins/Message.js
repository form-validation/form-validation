import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';
export default class Message extends Plugin {
    constructor(opts) {
        super(opts);
        this.messages = new Map();
        this.defaultContainer = document.createElement('div');
        this.opts = Object.assign({}, {
            container: (field, element) => this.defaultContainer,
        }, opts);
        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
        this.validatorValidatedHandler = this.onValidatorValidated.bind(this);
        this.validatorNotValidatedHandler = this.onValidatorNotValidated.bind(this);
    }
    static getClosestContainer(element, upper, pattern) {
        let ele = element;
        while (ele) {
            if (ele === upper) {
                break;
            }
            ele = ele.parentElement;
            if (pattern.test(ele.className)) {
                break;
            }
        }
        return ele;
    }
    install() {
        this.core.getFormElement().appendChild(this.defaultContainer);
        this.core
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler)
            .on('core.validator.validated', this.validatorValidatedHandler)
            .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
    }
    uninstall() {
        this.core.getFormElement().removeChild(this.defaultContainer);
        this.messages.forEach((message) => message.parentNode.removeChild(message));
        this.messages.clear();
        this.core
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler)
            .off('core.validator.validated', this.validatorValidatedHandler)
            .off('core.validator.notvalidated', this.validatorNotValidatedHandler);
    }
    onFieldAdded(e) {
        const elements = e.elements;
        if (elements) {
            elements.forEach((ele) => {
                const msg = this.messages.get(ele);
                if (msg) {
                    msg.parentNode.removeChild(msg);
                    this.messages.delete(ele);
                }
            });
            this.prepareFieldContainer(e.field, elements);
        }
    }
    onFieldRemoved(e) {
        if (!e.elements.length || !e.field) {
            return;
        }
        const type = e.elements[0].getAttribute('type');
        const elements = ('radio' === type || 'checkbox' === type) ? [e.elements[0]] : e.elements;
        elements.forEach((ele) => {
            if (this.messages.has(ele)) {
                const container = this.messages.get(ele);
                container.parentNode.removeChild(container);
                this.messages.delete(ele);
            }
        });
    }
    prepareFieldContainer(field, elements) {
        if (elements.length) {
            const type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementContainer(field, elements[0], elements);
            }
            else {
                elements.forEach((ele) => this.prepareElementContainer(field, ele, elements));
            }
        }
    }
    prepareElementContainer(field, element, elements) {
        let container;
        switch (true) {
            case ('string' === typeof this.opts.container):
                let selector = this.opts.container;
                selector = '#' === selector.charAt(0) ? `[id="${selector.substring(1)}"]` : selector;
                container = this.core.getFormElement().querySelector(selector);
                break;
            default:
                container = this.opts.container(field, element);
                break;
        }
        const message = document.createElement('div');
        container.appendChild(message);
        classSet(message, {
            'fv-plugins-message-container': true,
        });
        this.core.emit('plugins.message.placed', {
            element,
            elements,
            field,
            messageElement: message,
        });
        this.messages.set(element, message);
    }
    onValidatorValidated(e) {
        const elements = e.elements;
        const type = e.element.getAttribute('type');
        const element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
        if (this.messages.has(element)) {
            const container = this.messages.get(element);
            const messageEle = container.querySelector(`[data-field="${e.field}"][data-validator="${e.validator}"]`);
            if (!messageEle && !e.result.valid) {
                const ele = document.createElement('div');
                ele.innerHTML = e.result.message;
                ele.setAttribute('data-field', e.field);
                ele.setAttribute('data-validator', e.validator);
                if (this.opts.clazz) {
                    classSet(ele, {
                        [this.opts.clazz]: true,
                    });
                }
                container.appendChild(ele);
                this.core.emit('plugins.message.displayed', {
                    element: e.element,
                    field: e.field,
                    message: e.result.message,
                    messageElement: ele,
                    meta: e.result.meta,
                    validator: e.validator,
                });
            }
            else if (messageEle && !e.result.valid) {
                messageEle.innerHTML = e.result.message;
                this.core.emit('plugins.message.displayed', {
                    element: e.element,
                    field: e.field,
                    message: e.result.message,
                    messageElement: messageEle,
                    meta: e.result.meta,
                    validator: e.validator,
                });
            }
            else if (messageEle && e.result.valid) {
                container.removeChild(messageEle);
            }
        }
    }
    onValidatorNotValidated(e) {
        const elements = e.elements;
        const type = e.element.getAttribute('type');
        const element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
        if (this.messages.has(element)) {
            const container = this.messages.get(element);
            const messageEle = container.querySelector(`[data-field="${e.field}"][data-validator="${e.validator}"]`);
            if (messageEle) {
                container.removeChild(messageEle);
            }
        }
    }
    onElementIgnored(e) {
        const elements = e.elements;
        const type = e.element.getAttribute('type');
        const element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
        if (this.messages.has(element)) {
            const container = this.messages.get(element);
            container.querySelectorAll(`[data-field="${e.field}"]`).forEach((messageEle) => {
                container.removeChild(messageEle);
            });
        }
    }
}

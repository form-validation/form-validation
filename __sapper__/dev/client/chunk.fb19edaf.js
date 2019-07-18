import { a as Plugin } from './chunk.b786f426.js';

function addClass(element, classes) {
    classes.split(' ').forEach((clazz) => {
        if (element.classList) {
            element.classList.add(clazz);
        }
        else if (` ${element.className} `.indexOf(` ${clazz} `)) {
            element.className += ` ${clazz}`;
        }
    });
}
function removeClass(element, classes) {
    classes.split(' ').forEach((clazz) => {
        element.classList
            ? element.classList.remove(clazz)
            : (element.className = element.className.replace(clazz, ''));
    });
}
function classSet(element, classes) {
    const adding = [];
    const removing = [];
    Object.keys(classes).forEach((clazz) => {
        if (clazz) {
            classes[clazz] ? adding.push(clazz) : removing.push(clazz);
        }
    });
    removing.forEach((clazz) => removeClass(element, clazz));
    adding.forEach((clazz) => addClass(element, clazz));
}

class Trigger extends Plugin {
    constructor(opts) {
        super(opts);
        this.handlers = [];
        this.timers = new Map();
        this.ieVersion = (() => {
            let v = 3;
            let div = document.createElement('div');
            let a = div['all'] || [];
            while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><br><![endif]-->', a[0]) { }
            return v > 4 ? v : document['documentMode'];
        })();
        const ele = document.createElement('div');
        this.defaultEvent = (this.ieVersion === 9 || !('oninput' in ele)) ? 'keyup' : 'input';
        this.opts = Object.assign({}, {
            delay: 0,
            event: this.defaultEvent,
            threshold: 0,
        }, opts);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
    }
    install() {
        this.core
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);
    }
    uninstall() {
        this.handlers.forEach((item) => item.element.removeEventListener(item.event, item.handler));
        this.handlers = [];
        this.timers.forEach((t) => window.clearTimeout(t));
        this.timers.clear();
        this.core
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
    }
    prepareHandler(field, elements) {
        elements.forEach((ele) => {
            let events = [];
            switch (true) {
                case (!!this.opts.event && this.opts.event[field] === false):
                    events = [];
                    break;
                case (!!this.opts.event && !!this.opts.event[field]):
                    events = this.opts.event[field].split(' ');
                    break;
                case ('string' === typeof this.opts.event && this.opts.event !== this.defaultEvent):
                    events = this.opts.event.split(' ');
                    break;
                default:
                    const type = ele.getAttribute('type');
                    const tagName = ele.tagName.toLowerCase();
                    const event = ('radio' === type || 'checkbox' === type || 'file' === type || 'select' === tagName)
                        ? 'change'
                        : ((this.ieVersion >= 10 && ele.getAttribute('placeholder') ? 'keyup' : this.defaultEvent));
                    events = [event];
                    break;
            }
            events.forEach((evt) => {
                const evtHandler = (e) => this.handleEvent(e, field, ele);
                this.handlers.push({
                    element: ele,
                    event: evt,
                    field,
                    handler: evtHandler,
                });
                ele.addEventListener(evt, evtHandler);
            });
        });
    }
    handleEvent(e, field, ele) {
        if (this.exceedThreshold(field, ele)) {
            const handler = () => this.core.validateElement(field, ele).then((resolve) => {
                this.core.emit('plugins.trigger.executed', {
                    element: ele,
                    event: e,
                    field,
                });
            });
            const delay = this.opts.delay[field] || this.opts.delay;
            if (delay === 0) {
                handler();
            }
            else {
                const timer = this.timers.get(ele);
                if (timer) {
                    window.clearTimeout(timer);
                }
                this.timers.set(ele, window.setTimeout(handler, delay * 1000));
            }
        }
    }
    onFieldAdded(e) {
        this.handlers
            .filter((item) => item.field === e.field)
            .forEach((item) => item.element.removeEventListener(item.event, item.handler));
        this.prepareHandler(e.field, e.elements);
    }
    onFieldRemoved(e) {
        this.handlers
            .filter((item) => item.field === e.field && e.elements.indexOf(item.element) >= 0)
            .forEach((item) => item.element.removeEventListener(item.event, item.handler));
    }
    exceedThreshold(field, element) {
        const threshold = (this.opts.threshold[field] === 0 || this.opts.threshold === 0)
            ? false
            : (this.opts.threshold[field] || this.opts.threshold);
        if (!threshold) {
            return true;
        }
        const type = element.getAttribute('type');
        if (['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'].indexOf(type) !== -1) {
            return true;
        }
        const value = this.core.getElementValue(field, element);
        return value.length >= threshold;
    }
}

class Message extends Plugin {
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
            const messageElements = [].slice.call(container.querySelectorAll(`[data-field="${e.field}"]`));
            messageElements.forEach((messageEle) => {
                container.removeChild(messageEle);
            });
        }
    }
}

export { classSet as a, Message as b, Trigger as c };

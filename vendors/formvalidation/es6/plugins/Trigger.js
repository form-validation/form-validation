import Plugin from '../core/Plugin';
export default class Trigger extends Plugin {
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

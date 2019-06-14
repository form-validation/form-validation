import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';
export default class Icon extends Plugin {
    constructor(opts) {
        super(opts);
        this.icons = new Map();
        this.opts = Object.assign({}, {
            invalid: 'fv-plugins-icon--invalid',
            onPlaced: () => { },
            onSet: () => { },
            valid: 'fv-plugins-icon--valid',
            validating: 'fv-plugins-icon--validating',
        }, opts);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
    }
    install() {
        this.core
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.field.added', this.fieldAddedHandler);
    }
    uninstall() {
        this.icons.forEach((icon) => icon.parentNode.removeChild(icon));
        this.icons.clear();
        this.core
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.field.added', this.fieldAddedHandler);
    }
    onFieldAdded(e) {
        const elements = e.elements;
        if (elements) {
            elements.forEach((ele) => {
                const icon = this.icons.get(ele);
                if (icon) {
                    icon.parentNode.removeChild(icon);
                    this.icons.delete(ele);
                }
            });
            this.prepareFieldIcon(e.field, elements);
        }
    }
    prepareFieldIcon(field, elements) {
        if (elements.length) {
            const type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementIcon(field, elements[0]);
            }
            else {
                elements.forEach((ele) => this.prepareElementIcon(field, ele));
            }
        }
    }
    prepareElementIcon(field, ele) {
        const i = document.createElement('i');
        i.setAttribute('data-field', field);
        ele.parentNode.insertBefore(i, ele.nextSibling);
        classSet(i, {
            'fv-plugins-icon': true,
        });
        const e = {
            classes: {
                invalid: this.opts.invalid,
                valid: this.opts.valid,
                validating: this.opts.validating,
            },
            element: ele,
            field,
            iconElement: i,
        };
        this.core.emit('plugins.icon.placed', e);
        this.opts.onPlaced(e);
        this.icons.set(ele, i);
    }
    onElementValidating(e) {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: false,
            [this.opts.valid]: false,
            [this.opts.validating]: true,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: 'Validating',
        };
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }
    onElementValidated(e) {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: !e.valid,
            [this.opts.valid]: e.valid,
            [this.opts.validating]: false,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: e.valid ? 'Valid' : 'Invalid',
        };
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }
    onElementNotValidated(e) {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: false,
            [this.opts.valid]: false,
            [this.opts.validating]: false,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: 'NotValidated',
        };
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }
    onElementIgnored(e) {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: false,
            [this.opts.valid]: false,
            [this.opts.validating]: false,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: 'Ignored',
        };
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }
    setClasses(field, element, elements, classes) {
        const type = element.getAttribute('type');
        const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : element;
        if (this.icons.has(ele)) {
            const icon = this.icons.get(ele);
            classSet(icon, classes);
            return icon;
        }
        else {
            return null;
        }
    }
}

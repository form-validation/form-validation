import { a as Plugin } from './chunk.b786f426.js';
import { a as classSet, b as Message } from './chunk.fb19edaf.js';

class Icon extends Plugin {
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

function matches(element, selector) {
    const nativeMatches = element.matches || element.webkitMatchesSelector
        || element['mozMatchesSelector'] || element['msMatchesSelector'];
    if (nativeMatches) {
        return nativeMatches.call(element, selector);
    }
    const nodes = [].slice.call(element.parentElement.querySelectorAll(selector));
    return nodes.indexOf(element) >= 0;
}
function closest(element, selector) {
    let ele = element;
    while (ele) {
        if (matches(ele, selector)) {
            break;
        }
        ele = ele.parentElement;
    }
    return ele;
}

class Framework extends Plugin {
    constructor(opts) {
        super(opts);
        this.results = new Map();
        this.containers = new Map();
        this.opts = Object.assign({}, {
            defaultMessageContainer: true,
            eleInvalidClass: '',
            eleValidClass: '',
            rowClasses: '',
            rowValidatingClass: '',
        }, opts);
        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
    }
    install() {
        classSet(this.core.getFormElement(), {
            [this.opts.formClass]: true,
            'fv-plugins-framework': true,
        });
        this.core
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);
        if (this.opts.defaultMessageContainer) {
            this.core.registerPlugin('___frameworkMessage', new Message({
                clazz: this.opts.messageClass,
                container: (field, element) => {
                    const selector = ('string' === typeof this.opts.rowSelector)
                        ? this.opts.rowSelector
                        : this.opts.rowSelector(field, element);
                    const groupEle = closest(element, selector);
                    return Message.getClosestContainer(element, groupEle, this.opts.rowPattern);
                },
            }));
        }
    }
    uninstall() {
        this.results.clear();
        this.containers.clear();
        classSet(this.core.getFormElement(), {
            [this.opts.formClass]: false,
            'fv-plugins-framework': false,
        });
        this.core
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
    }
    onIconPlaced(e) { }
    onFieldAdded(e) {
        const elements = e.elements;
        if (elements) {
            elements.forEach((ele) => {
                const groupEle = this.containers.get(ele);
                if (groupEle) {
                    classSet(groupEle, {
                        [this.opts.rowInvalidClass]: false,
                        [this.opts.rowValidatingClass]: false,
                        [this.opts.rowValidClass]: false,
                        'fv-plugins-icon-container': false,
                    });
                    this.containers.delete(ele);
                }
            });
            this.prepareFieldContainer(e.field, elements);
        }
    }
    onFieldRemoved(e) {
        e.elements.forEach((ele) => {
            const groupEle = this.containers.get(ele);
            if (groupEle) {
                classSet(groupEle, {
                    [this.opts.rowInvalidClass]: false,
                    [this.opts.rowValidatingClass]: false,
                    [this.opts.rowValidClass]: false,
                });
            }
        });
    }
    prepareFieldContainer(field, elements) {
        if (elements.length) {
            const type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementContainer(field, elements[0]);
            }
            else {
                elements.forEach((ele) => this.prepareElementContainer(field, ele));
            }
        }
    }
    prepareElementContainer(field, element) {
        const selector = ('string' === typeof this.opts.rowSelector)
            ? this.opts.rowSelector
            : this.opts.rowSelector(field, element);
        const groupEle = closest(element, selector);
        if (groupEle !== element) {
            classSet(groupEle, {
                [this.opts.rowClasses]: true,
                'fv-plugins-icon-container': true,
            });
            this.containers.set(element, groupEle);
        }
    }
    onElementValidating(e) {
        const elements = e.elements;
        const type = e.element.getAttribute('type');
        const element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
        const groupEle = this.containers.get(element);
        if (groupEle) {
            classSet(groupEle, {
                [this.opts.rowInvalidClass]: false,
                [this.opts.rowValidatingClass]: true,
                [this.opts.rowValidClass]: false,
            });
        }
    }
    onElementNotValidated(e) {
        this.removeClasses(e.element, e.elements);
    }
    onElementIgnored(e) {
        this.removeClasses(e.element, e.elements);
    }
    removeClasses(element, elements) {
        const type = element.getAttribute('type');
        const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : element;
        classSet(ele, {
            [this.opts.eleValidClass]: false,
            [this.opts.eleInvalidClass]: false,
        });
        const groupEle = this.containers.get(ele);
        if (groupEle) {
            classSet(groupEle, {
                [this.opts.rowInvalidClass]: false,
                [this.opts.rowValidatingClass]: false,
                [this.opts.rowValidClass]: false,
            });
        }
    }
    onElementValidated(e) {
        const elements = e.elements;
        const type = e.element.getAttribute('type');
        const element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
        classSet(element, {
            [this.opts.eleValidClass]: e.valid,
            [this.opts.eleInvalidClass]: !e.valid,
        });
        const groupEle = this.containers.get(element);
        if (groupEle) {
            if (!e.valid) {
                this.results.set(element, false);
                classSet(groupEle, {
                    [this.opts.rowInvalidClass]: true,
                    [this.opts.rowValidatingClass]: false,
                    [this.opts.rowValidClass]: false,
                });
            }
            else {
                this.results.delete(element);
                let isValid = true;
                this.containers.forEach((value, key) => {
                    if (value === groupEle && this.results.get(key) === false) {
                        isValid = false;
                    }
                });
                if (isValid) {
                    classSet(groupEle, {
                        [this.opts.rowInvalidClass]: false,
                        [this.opts.rowValidatingClass]: false,
                        [this.opts.rowValidClass]: true,
                    });
                }
            }
        }
    }
}

export { Framework as a, Icon as b, closest as c };

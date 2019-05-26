import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';
import closest from '../utils/closest';
import Message from './Message';
export default class Framework extends Plugin {
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

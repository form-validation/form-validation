import Plugin from '../core/Plugin';
import Status from '../core/Status';
import classSet from '../utils/classSet';
export default class MandatoryIcon extends Plugin {
    constructor(opts) {
        super(opts);
        this.removedIcons = {
            [Status.Valid]: '',
            [Status.Invalid]: '',
            [Status.Validating]: '',
            [Status.NotValidated]: '',
        };
        this.icons = new Map();
        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
        this.iconSetHandler = this.onIconSet.bind(this);
    }
    install() {
        this.core
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('plugins.icon.set', this.iconSetHandler);
    }
    uninstall() {
        this.icons.clear();
        this.core
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('plugins.icon.set', this.iconSetHandler);
    }
    onIconPlaced(e) {
        const validators = this.core.getFields()[e.field].validators;
        const elements = this.core.getElements(e.field);
        if (validators && validators['notEmpty'] && validators['notEmpty'].enabled !== false && elements.length) {
            this.icons.set(e.element, e.iconElement);
            const type = elements[0].getAttribute('type').toLowerCase();
            const elementArray = ('checkbox' === type || 'radio' === type) ? [elements[0]] : elements;
            for (const ele of elementArray) {
                if (this.core.getElementValue(e.field, ele) === '') {
                    classSet(e.iconElement, {
                        [this.opts.icon]: true,
                    });
                }
            }
        }
        this.iconClasses = e.classes;
        const icons = this.opts.icon.split(' ');
        const feedbackIcons = {
            [Status.Valid]: this.iconClasses.valid ? this.iconClasses.valid.split(' ') : [],
            [Status.Invalid]: this.iconClasses.invalid ? this.iconClasses.invalid.split(' ') : [],
            [Status.Validating]: this.iconClasses.validating ? this.iconClasses.validating.split(' ') : [],
        };
        Object.keys(feedbackIcons).forEach((status) => {
            const classes = [];
            for (const clazz of icons) {
                if (feedbackIcons[status].indexOf(clazz) === -1) {
                    classes.push(clazz);
                }
            }
            this.removedIcons[status] = classes.join(' ');
        });
    }
    onElementValidating(e) {
        this.updateIconClasses(e.element, Status.Validating);
    }
    onElementValidated(e) {
        this.updateIconClasses(e.element, e.valid ? Status.Valid : Status.Invalid);
    }
    onElementNotValidated(e) {
        this.updateIconClasses(e.element, Status.NotValidated);
    }
    updateIconClasses(ele, status) {
        const icon = this.icons.get(ele);
        if (icon && this.iconClasses &&
            (this.iconClasses.valid || this.iconClasses.invalid || this.iconClasses.validating)) {
            classSet(icon, {
                [this.removedIcons[status]]: false,
                [this.opts.icon]: false,
            });
        }
    }
    onIconSet(e) {
        const icon = this.icons.get(e.element);
        if (icon && e.status === Status.NotValidated && this.core.getElementValue(e.field, e.element) === '') {
            classSet(icon, {
                [this.opts.icon]: true,
            });
        }
    }
}

import { a as Plugin } from './chunk.b786f426.js';

class FieldStatus extends Plugin {
    constructor(opts) {
        super(opts);
        this.statuses = new Map();
        this.opts = Object.assign({}, {
            onStatusChanged: () => { },
        }, opts);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
    }
    install() {
        this.core
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);
    }
    uninstall() {
        this.statuses.clear();
        this.core
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
    }
    areFieldsValid() {
        return Array.from(this.statuses.values()).every((value) => value === 'Valid');
    }
    getStatues() {
        return this.statuses;
    }
    onFieldAdded(e) {
        this.statuses.set(e.field, 'NotValidated');
    }
    onFieldRemoved(e) {
        if (this.statuses.has(e.field)) {
            this.statuses.delete(e.field);
        }
        this.opts.onStatusChanged(this.areFieldsValid());
    }
    onElementValidating(e) {
        this.statuses.set(e.field, 'Validating');
        this.opts.onStatusChanged(false);
    }
    onElementValidated(e) {
        this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');
        if (e.valid) {
            this.opts.onStatusChanged(this.areFieldsValid());
        }
        else {
            this.opts.onStatusChanged(false);
        }
    }
    onElementNotValidated(e) {
        this.statuses.set(e.field, 'NotValidated');
        this.opts.onStatusChanged(false);
    }
    onElementIgnored(e) {
        this.statuses.set(e.field, 'Ignored');
        this.opts.onStatusChanged(false);
    }
}

export { FieldStatus as a };

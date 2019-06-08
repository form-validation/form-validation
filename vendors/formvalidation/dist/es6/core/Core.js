import emitter from './emitter';
import filter from './filter';
import Status from './Status';
import getFieldValue from '../filters/getFieldValue';
import validators from '../validators/index';
class Core {
    constructor(form, fields) {
        this.elements = {};
        this.ee = emitter();
        this.filter = filter();
        this.plugins = {};
        this.results = new Map();
        this.validators = {};
        this.form = form;
        this.fields = fields;
    }
    on(event, func) {
        this.ee.on(event, func);
        return this;
    }
    off(event, func) {
        this.ee.off(event, func);
        return this;
    }
    emit(event, ...args) {
        this.ee.emit(event, ...args);
        return this;
    }
    registerPlugin(name, plugin) {
        if (this.plugins[name]) {
            throw new Error(`The plguin ${name} is registered`);
        }
        plugin.setCore(this);
        plugin.install();
        this.plugins[name] = plugin;
        return this;
    }
    deregisterPlugin(name) {
        const plugin = this.plugins[name];
        if (plugin) {
            plugin.uninstall();
        }
        delete this.plugins[name];
        return this;
    }
    registerValidator(name, func) {
        if (this.validators[name]) {
            throw new Error(`The validator ${name} is registered`);
        }
        this.validators[name] = func;
        return this;
    }
    registerFilter(name, func) {
        this.filter.add(name, func);
        return this;
    }
    deregisterFilter(name, func) {
        this.filter.remove(name, func);
        return this;
    }
    executeFilter(name, defaultValue, args) {
        return this.filter.execute(name, defaultValue, args);
    }
    addField(field, options) {
        const opts = Object.assign({}, {
            selector: '',
            validators: {},
        }, options);
        this.fields[field] = this.fields[field]
            ? {
                selector: opts.selector || this.fields[field].selector,
                validators: Object.assign({}, this.fields[field].validators, opts.validators),
            }
            : opts;
        this.elements[field] = this.queryElements(field);
        this.emit('core.field.added', {
            elements: this.elements[field],
            field,
            options: this.fields[field],
        });
        return this;
    }
    removeField(field) {
        if (!this.fields[field]) {
            throw new Error(`The field ${field} validators are not defined. Please ensure the field is added first`);
        }
        const elements = this.elements[field];
        const options = this.fields[field];
        delete this.elements[field];
        delete this.fields[field];
        this.emit('core.field.removed', {
            elements,
            field,
            options,
        });
        return this;
    }
    validate() {
        this.emit('core.form.validating');
        return this.filter
            .execute('validate-pre', Promise.resolve(), [])
            .then(() => {
            return Promise
                .all(Object.keys(this.fields).map((field) => this.validateField(field)))
                .then((results) => {
                switch (true) {
                    case (results.indexOf(Status.Invalid) !== -1):
                        this.emit('core.form.invalid');
                        return Promise.resolve(Status.Invalid);
                    case (results.indexOf(Status.NotValidated) !== -1):
                        this.emit('core.form.notvalidated');
                        return Promise.resolve(Status.NotValidated);
                    default:
                        this.emit('core.form.valid');
                        return Promise.resolve(Status.Valid);
                }
            });
        });
    }
    validateField(field) {
        const result = this.results.get(field);
        if (result === Status.Valid || result === Status.Invalid) {
            return Promise.resolve(result);
        }
        this.emit('core.field.validating', field);
        const elements = this.elements[field];
        if (elements.length === 0) {
            this.emit('core.field.valid', field);
            return Promise.resolve(Status.Valid);
        }
        const type = elements[0].getAttribute('type');
        if ('radio' === type || 'checkbox' === type || elements.length === 1) {
            return this.validateElement(field, elements[0]);
        }
        else {
            return Promise.all(elements.map((ele) => this.validateElement(field, ele))).then((results) => {
                switch (true) {
                    case (results.indexOf(Status.Invalid) !== -1):
                        this.emit('core.field.invalid', field);
                        this.results.set(field, Status.Invalid);
                        return Promise.resolve(Status.Invalid);
                    case (results.indexOf(Status.NotValidated) !== -1):
                        this.emit('core.field.notvalidated', field);
                        this.results.delete(field);
                        return Promise.resolve(Status.NotValidated);
                    default:
                        this.emit('core.field.valid', field);
                        this.results.set(field, Status.Valid);
                        return Promise.resolve(Status.Valid);
                }
            });
        }
    }
    validateElement(field, ele) {
        this.results.delete(field);
        const elements = this.elements[field];
        const ignored = this.filter.execute('element-ignored', false, [field, ele, elements]);
        if (ignored) {
            this.emit('core.element.ignored', {
                element: ele,
                elements,
                field,
            });
            return Promise.resolve(Status.Ignored);
        }
        const validatorList = this.fields[field].validators;
        this.emit('core.element.validating', {
            element: ele,
            elements,
            field,
        });
        const promises = Object.keys(validatorList).map((v) => {
            return () => this.executeValidator(field, ele, v, validatorList[v]);
        });
        return this.waterfall(promises).then((results) => {
            const isValid = results.indexOf(Status.Invalid) === -1;
            this.emit('core.element.validated', {
                element: ele,
                elements,
                field,
                valid: isValid,
            });
            const type = ele.getAttribute('type');
            if ('radio' === type || 'checkbox' === type || elements.length === 1) {
                this.emit(isValid ? 'core.field.valid' : 'core.field.invalid', field);
            }
            return Promise.resolve(isValid ? Status.Valid : Status.Invalid);
        }).catch((reason) => {
            this.emit('core.element.notvalidated', {
                element: ele,
                elements,
                field,
            });
            return Promise.resolve(reason);
        });
    }
    executeValidator(field, ele, v, opts) {
        const elements = this.elements[field];
        const name = this.filter.execute('validator-name', v, [v, field]);
        opts.message = this.filter.execute('validator-message', opts.message, [this.locale, field, name]);
        if (!this.validators[name] || opts.enabled === false) {
            this.emit('core.validator.validated', {
                element: ele,
                elements,
                field,
                result: this.normalizeResult(field, name, { valid: true }),
                validator: name,
            });
            return Promise.resolve(Status.Valid);
        }
        const validator = this.validators[name];
        const value = this.getElementValue(field, ele, name);
        const willValidate = this.filter.execute('field-should-validate', true, [field, ele, value, v]);
        if (!willValidate) {
            this.emit('core.validator.notvalidated', {
                element: ele,
                elements,
                field,
                validator: v,
            });
            return Promise.resolve(Status.NotValidated);
        }
        this.emit('core.validator.validating', {
            element: ele,
            elements,
            field,
            validator: v,
        });
        const result = validator().validate({
            element: ele,
            elements,
            field,
            l10n: this.localization,
            options: opts,
            value,
        });
        const isPromise = ('function' === typeof result['then']);
        if (isPromise) {
            return result.then((r) => {
                const data = this.normalizeResult(field, v, r);
                this.emit('core.validator.validated', {
                    element: ele,
                    elements,
                    field,
                    result: data,
                    validator: v,
                });
                return data.valid ? Status.Valid : Status.Invalid;
            });
        }
        else {
            const data = this.normalizeResult(field, v, result);
            this.emit('core.validator.validated', {
                element: ele,
                elements,
                field,
                result: data,
                validator: v,
            });
            return Promise.resolve(data.valid ? Status.Valid : Status.Invalid);
        }
    }
    getElementValue(field, ele, validator) {
        const defaultValue = getFieldValue(this.form, field, ele, this.elements[field]);
        return this.filter.execute('field-value', defaultValue, [defaultValue, field, ele, validator]);
    }
    getElements(field) { return this.elements[field]; }
    getFields() { return this.fields; }
    getFormElement() { return this.form; }
    getPlugin(name) {
        return this.plugins[name];
    }
    updateFieldStatus(field, status, validator) {
        const elements = this.elements[field];
        const type = elements[0].getAttribute('type');
        const list = ('radio' === type || 'checkbox' === type) ? [elements[0]] : elements;
        list.forEach((ele) => this.updateElementStatus(field, ele, status, validator));
        if (!validator) {
            switch (status) {
                case Status.NotValidated:
                    this.emit('core.field.notvalidated', field);
                    this.results.delete(field);
                    break;
                case Status.Validating:
                    this.emit('core.field.validating', field);
                    this.results.delete(field);
                    break;
                case Status.Valid:
                    this.emit('core.field.valid', field);
                    this.results.set(field, Status.Valid);
                    break;
                case Status.Invalid:
                    this.emit('core.field.invalid', field);
                    this.results.set(field, Status.Invalid);
                    break;
            }
        }
        return this;
    }
    updateElementStatus(field, ele, status, validator) {
        const elements = this.elements[field];
        const fieldValidators = this.fields[field].validators;
        const validatorArr = validator ? [validator] : Object.keys(fieldValidators);
        switch (status) {
            case Status.NotValidated:
                validatorArr.forEach((v) => this.emit('core.validator.notvalidated', {
                    element: ele,
                    elements,
                    field,
                    validator: v,
                }));
                this.emit('core.element.notvalidated', {
                    element: ele,
                    elements,
                    field,
                });
                break;
            case Status.Validating:
                validatorArr.forEach((v) => this.emit('core.validator.validating', {
                    element: ele,
                    elements,
                    field,
                    validator: v,
                }));
                this.emit('core.element.validating', {
                    element: ele,
                    elements,
                    field,
                });
                break;
            case Status.Valid:
                validatorArr.forEach((v) => this.emit('core.validator.validated', {
                    element: ele,
                    field,
                    result: {
                        message: fieldValidators[v].message,
                        valid: true,
                    },
                    validator: v,
                }));
                this.emit('core.element.validated', {
                    element: ele,
                    elements,
                    field,
                    valid: true,
                });
                break;
            case Status.Invalid:
                validatorArr.forEach((v) => this.emit('core.validator.validated', {
                    element: ele,
                    field,
                    result: {
                        message: fieldValidators[v].message,
                        valid: false,
                    },
                    validator: v,
                }));
                this.emit('core.element.validated', {
                    element: ele,
                    elements,
                    field,
                    valid: false,
                });
                break;
        }
        return this;
    }
    resetForm(reset) {
        Object.keys(this.fields).forEach((field) => this.resetField(field, reset));
        this.emit('core.form.reset', {
            reset,
        });
        return this;
    }
    resetField(field, reset) {
        if (reset) {
            const elements = this.elements[field];
            const type = elements[0].getAttribute('type');
            elements.forEach((ele) => {
                if ('radio' === type || 'checkbox' === type) {
                    ele.removeAttribute('selected');
                    ele.removeAttribute('checked');
                    ele.checked = false;
                }
                else {
                    ele.setAttribute('value', '');
                    if (ele instanceof HTMLInputElement || ele instanceof HTMLTextAreaElement) {
                        ele.value = '';
                    }
                }
            });
        }
        this.updateFieldStatus(field, Status.NotValidated);
        this.emit('core.field.reset', {
            field,
            reset,
        });
        return this;
    }
    revalidateField(field) {
        this.updateFieldStatus(field, Status.NotValidated);
        return this.validateField(field);
    }
    disableValidator(field, validator) {
        return this.toggleValidator(false, field, validator);
    }
    enableValidator(field, validator) {
        return this.toggleValidator(true, field, validator);
    }
    updateValidatorOption(field, validator, name, value) {
        if (this.fields[field] && this.fields[field].validators && this.fields[field].validators[validator]) {
            this.fields[field].validators[validator][name] = value;
        }
        return this;
    }
    destroy() {
        Object.keys(this.plugins).forEach((id) => this.plugins[id].uninstall());
        this.ee.clear();
        this.filter.clear();
        this.results.clear();
        this.plugins = {};
        return this;
    }
    setLocale(locale, localization) {
        this.locale = locale;
        this.localization = localization;
        return this;
    }
    waterfall(promises) {
        return promises.reduce((p, c, i, a) => {
            return p.then((res) => {
                return c().then((result) => {
                    res.push(result);
                    return res;
                });
            });
        }, Promise.resolve([]));
    }
    queryElements(field) {
        const selector = (this.fields[field].selector)
            ? ('#' === this.fields[field].selector.charAt(0)
                ? `[id="${this.fields[field].selector.substring(1)}"]`
                : this.fields[field].selector)
            : `[name="${field}"]`;
        return [].slice.call(this.form.querySelectorAll(selector));
    }
    normalizeResult(field, validator, result) {
        const opts = this.fields[field].validators[validator];
        return Object.assign({}, result, {
            message: result.message
                || opts.message
                || (this.localization && this.localization[validator] && this.localization[validator].default
                    ? this.localization[validator].default : '')
                || `The field ${field} is not valid`,
        });
    }
    toggleValidator(enabled, field, validator) {
        const validatorArr = this.fields[field].validators;
        if (validator && validatorArr && validatorArr[validator]) {
            this.fields[field].validators[validator].enabled = enabled;
        }
        else if (!validator) {
            Object.keys(validatorArr).forEach((v) => this.fields[field].validators[v].enabled = enabled);
        }
        return this.updateFieldStatus(field, Status.NotValidated, validator);
    }
}
export default function formValidation(form, options) {
    const opts = Object.assign({}, {
        fields: {},
        locale: 'en_US',
        plugins: {},
    }, options);
    const core = new Core(form, opts.fields);
    core.setLocale(opts.locale, opts.localization);
    Object.keys(opts.plugins).forEach((name) => core.registerPlugin(name, opts.plugins[name]));
    Object.keys(validators).forEach((name) => core.registerValidator(name, validators[name]));
    Object.keys(opts.fields).forEach((field) => core.addField(field, opts.fields[field]));
    return core;
}
export { Core, };

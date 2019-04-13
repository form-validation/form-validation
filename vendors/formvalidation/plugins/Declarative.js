import Plugin from '../core/Plugin';
export default class Declarative extends Plugin {
    constructor(opts) {
        super(opts);
        this.opts = Object.assign({}, {
            html5Input: false,
            pluginPrefix: 'data-fvp-',
            prefix: 'data-fv-',
        }, opts);
    }
    install() {
        this.parsePlugins();
        const opts = this.parseOptions();
        Object.keys(opts).forEach((field) => this.core.addField(field, opts[field]));
    }
    parseOptions() {
        const prefix = this.opts.prefix;
        const opts = {};
        const fields = this.core.getFields();
        const form = this.core.getFormElement();
        const elements = [].slice.call(form.querySelectorAll(`[name], [${prefix}field]`));
        elements.forEach((ele) => {
            const validators = this.parseElement(ele);
            if (!this.isEmptyOption(validators)) {
                const field = ele.getAttribute('name') || ele.getAttribute(`${prefix}field`);
                opts[field] = Object.assign({}, opts[field], validators);
            }
        });
        Object.keys(opts).forEach((field) => {
            Object.keys(opts[field].validators).forEach((v) => {
                opts[field].validators[v].enabled = opts[field].validators[v].enabled || false;
                if (fields[field] && fields[field].validators && fields[field].validators[v]) {
                    Object.assign(opts[field].validators[v], fields[field].validators[v]);
                }
            });
        });
        return Object.assign({}, fields, opts);
    }
    createPluginInstance(clazz, opts) {
        const arr = clazz.split('.');
        let fn = (window || this);
        for (let i = 0, len = arr.length; i < len; i++) {
            fn = fn[arr[i]];
        }
        if (typeof fn !== 'function') {
            throw new Error(`the plugin ${clazz} doesn't exist`);
        }
        return new fn(opts);
    }
    parsePlugins() {
        const form = this.core.getFormElement();
        const reg = new RegExp(`^${this.opts.pluginPrefix}([a-z0-9\-]+)(___)*([a-z0-9\-]+)*$`);
        const numAttributes = form.attributes.length;
        const plugins = {};
        for (let i = 0; i < numAttributes; i++) {
            const name = form.attributes[i].name;
            const value = form.attributes[i].value;
            const items = reg.exec(name);
            if (items && items.length === 4) {
                const pluginName = this.toCamelCase(items[1]);
                plugins[pluginName] = Object.assign({}, items[3]
                    ? { [this.toCamelCase(items[3])]: value }
                    : { enabled: ('' === value || 'true' === value) }, plugins[pluginName]);
            }
        }
        Object.keys(plugins).forEach((pluginName) => {
            const opts = plugins[pluginName];
            const enabled = opts['enabled'];
            const clazz = opts['class'];
            if (enabled && clazz) {
                delete opts['enabled'];
                delete opts['clazz'];
                const p = this.createPluginInstance(clazz, opts);
                this.core.registerPlugin(pluginName, p);
            }
        });
    }
    isEmptyOption(opts) {
        const validators = opts.validators;
        return Object.keys(validators).length === 0 && validators.constructor === Object;
    }
    parseElement(ele) {
        const reg = new RegExp(`^${this.opts.prefix}([a-z0-9\-]+)(___)*([a-z0-9\-]+)*$`);
        const numAttributes = ele.attributes.length;
        const opts = {};
        const type = ele.getAttribute('type');
        for (let i = 0; i < numAttributes; i++) {
            const name = ele.attributes[i].name;
            const value = ele.attributes[i].value;
            if (this.opts.html5Input) {
                switch (true) {
                    case ('minlength' === name):
                        opts['stringLength'] = Object.assign({}, {
                            enabled: true,
                            min: parseInt(value, 10),
                        }, opts['stringLength']);
                        break;
                    case ('maxlength' === name):
                        opts['stringLength'] = Object.assign({}, {
                            enabled: true,
                            max: parseInt(value, 10),
                        }, opts['stringLength']);
                        break;
                    case ('pattern' === name):
                        opts['regexp'] = Object.assign({}, {
                            enabled: true,
                            regexp: value,
                        }, opts['regexp']);
                        break;
                    case ('required' === name):
                        opts['notEmpty'] = Object.assign({}, {
                            enabled: true,
                        }, opts['notEmpty']);
                        break;
                    case ('type' === name && 'color' === value):
                        opts['color'] = Object.assign({}, {
                            enabled: true,
                            type: 'hex',
                        }, opts['color']);
                        break;
                    case ('type' === name && 'email' === value):
                        opts['emailAddress'] = Object.assign({}, {
                            enabled: true,
                        }, opts['emailAddress']);
                        break;
                    case ('type' === name && 'url' === value):
                        opts['uri'] = Object.assign({}, {
                            enabled: true,
                        }, opts['uri']);
                        break;
                    case ('type' === name && 'range' === value):
                        opts['between'] = Object.assign({}, {
                            enabled: true,
                            max: parseFloat(ele.getAttribute('max')),
                            min: parseFloat(ele.getAttribute('min')),
                        }, opts['between']);
                        break;
                    case ('min' === name && type !== 'date' && type !== 'range'):
                        opts['greaterThan'] = Object.assign({}, {
                            enabled: true,
                            min: parseFloat(value),
                        }, opts['greaterThan']);
                        break;
                    case ('max' === name && type !== 'date' && type !== 'range'):
                        opts['lessThan'] = Object.assign({}, {
                            enabled: true,
                            max: parseFloat(value),
                        }, opts['lessThan']);
                        break;
                    default:
                        break;
                }
            }
            const items = reg.exec(name);
            if (items && items.length === 4) {
                const v = this.toCamelCase(items[1]);
                opts[v] = Object.assign({}, items[3]
                    ? { [this.toCamelCase(items[3])]: value }
                    : { enabled: ('' === value || 'true' === value) }, opts[v]);
            }
        }
        return { validators: opts };
    }
    toUpperCase(input) {
        return input.charAt(1).toUpperCase();
    }
    toCamelCase(input) {
        return input.replace(/-./g, this.toUpperCase);
    }
}

import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';
export default class Tooltip extends Plugin {
    constructor(opts) {
        super(opts);
        this.messages = new Map();
        this.opts = Object.assign({}, {
            placement: 'top',
            trigger: 'click',
        }, opts);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
        this.validatorValidatedHandler = this.onValidatorValidated.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.documentClickHandler = this.onDocumentClicked.bind(this);
    }
    install() {
        this.tip = document.createElement('div');
        classSet(this.tip, {
            'fv-plugins-tooltip': true,
            [`fv-plugins-tooltip--${this.opts.placement}`]: true,
        });
        document.body.appendChild(this.tip);
        this.core
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('core.validator.validated', this.validatorValidatedHandler)
            .on('core.element.validated', this.elementValidatedHandler);
        if ('click' === this.opts.trigger) {
            document.addEventListener('click', this.documentClickHandler);
        }
    }
    uninstall() {
        this.messages.clear();
        document.body.removeChild(this.tip);
        this.core
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('core.validator.validated', this.validatorValidatedHandler)
            .off('core.element.validated', this.elementValidatedHandler);
        if ('click' === this.opts.trigger) {
            document.removeEventListener('click', this.documentClickHandler);
        }
    }
    onIconPlaced(e) {
        classSet(e.iconElement, {
            'fv-plugins-tooltip-icon': true,
        });
        switch (this.opts.trigger) {
            case 'hover':
                e.iconElement.addEventListener('mouseenter', (evt) => this.show(e.element, evt));
                e.iconElement.addEventListener('mouseleave', (evt) => this.hide());
                break;
            case 'click':
            default:
                e.iconElement.addEventListener('click', (evt) => this.show(e.element, evt));
                break;
        }
    }
    onValidatorValidated(e) {
        if (!e.result.valid) {
            const elements = e.elements;
            const type = e.element.getAttribute('type');
            const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
            this.messages.set(ele, e.result.message);
        }
    }
    onElementValidated(e) {
        if (e.valid) {
            const elements = e.elements;
            const type = e.element.getAttribute('type');
            const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
            this.messages.delete(ele);
        }
    }
    onDocumentClicked(e) {
        this.hide();
    }
    show(ele, e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.messages.has(ele)) {
            return;
        }
        classSet(this.tip, {
            'fv-plugins-tooltip--hide': false,
        });
        this.tip.innerHTML = `<span class="fv-plugins-tooltip__content">${this.messages.get(ele)}</span>`;
        const icon = e.target;
        const rect = icon.getBoundingClientRect();
        let top = 0;
        let left = 0;
        switch (this.opts.placement) {
            case 'top':
            default:
                top = rect.top - rect.height;
                left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
                break;
            case 'top-left':
                top = rect.top - rect.height;
                left = rect.left;
                break;
            case 'top-right':
                top = rect.top - rect.height;
                left = rect.left + rect.width - this.tip.clientWidth;
                break;
            case 'bottom':
                top = rect.top + rect.height;
                left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
                break;
            case 'bottom-left':
                top = rect.top + rect.height;
                left = rect.left;
                break;
            case 'bottom-right':
                top = rect.top + rect.height;
                left = rect.left + rect.width - this.tip.clientWidth;
                break;
            case 'left':
                top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
                left = rect.left - this.tip.clientWidth;
                break;
            case 'right':
                top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
                left = rect.left + rect.width;
                break;
        }
        top = top + document.body.scrollTop;
        left = left + document.body.scrollLeft;
        this.tip.setAttribute('style', `top: ${top}px; left: ${left}px`);
    }
    hide() {
        classSet(this.tip, {
            'fv-plugins-tooltip--hide': true,
        });
    }
}

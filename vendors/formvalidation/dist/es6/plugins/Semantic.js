import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework from './Framework';
export default class Semantic extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-semantic',
            messageClass: 'ui pointing red label',
            rowInvalidClass: 'error',
            rowPattern: /^.*(field|column).*$/,
            rowSelector: '.fields',
            rowValidClass: 'fv-has-success',
        }, opts));
        this.messagePlacedHandler = this.onMessagePlaced.bind(this);
    }
    install() {
        super.install();
        this.core.on('plugins.message.placed', this.messagePlacedHandler);
    }
    uninstall() {
        super.uninstall();
        this.core.off('plugins.message.placed', this.messagePlacedHandler);
    }
    onIconPlaced(e) {
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const parent = e.element.parentElement;
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        }
    }
    onMessagePlaced(e) {
        const type = e.element.getAttribute('type');
        const numElements = e.elements.length;
        if (('checkbox' === type || 'radio' === type) && numElements > 1) {
            const last = e.elements[numElements - 1];
            const parent = last.parentElement;
            if (hasClass(parent, type) && hasClass(parent, 'ui')) {
                parent.parentElement.insertBefore(e.messageElement, parent.nextSibling);
            }
        }
    }
}

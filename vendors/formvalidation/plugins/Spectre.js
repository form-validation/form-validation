import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework from './Framework';
export default class Spectre extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-spectre',
            messageClass: 'form-input-hint',
            rowInvalidClass: 'has-error',
            rowPattern: /^(.*)(col)(-(xs|sm|md|lg))*-[0-9]+(.*)$/,
            rowSelector: '.form-group',
            rowValidClass: 'has-success',
        }, opts));
    }
    onIconPlaced(e) {
        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            if (hasClass(parent, `form-${type}`)) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
        }
    }
}

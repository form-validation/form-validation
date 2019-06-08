import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework from './Framework';
export default class Bootstrap extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            eleInvalidClass: 'is-invalid',
            eleValidClass: 'is-valid',
            formClass: 'fv-plugins-bootstrap',
            messageClass: 'fv-help-block',
            rowInvalidClass: 'has-danger',
            rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
            rowSelector: '.form-group',
            rowValidClass: 'has-success',
        }, opts));
    }
    onIconPlaced(e) {
        const parent = e.element.parentElement;
        if (hasClass(parent, 'input-group')) {
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        }
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const grandParent = parent.parentElement;
            if (hasClass(parent, 'form-check')) {
                classSet(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
            else if (hasClass(parent.parentElement, 'form-check')) {
                classSet(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                grandParent.parentElement.insertBefore(e.iconElement, grandParent.nextSibling);
            }
        }
    }
}

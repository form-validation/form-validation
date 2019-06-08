import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework from './Framework';
export default class Bootstrap3 extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-bootstrap3',
            messageClass: 'help-block',
            rowClasses: 'has-feedback',
            rowInvalidClass: 'has-error',
            rowPattern: /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,
            rowSelector: '.form-group',
            rowValidClass: 'has-success',
        }, opts));
    }
    onIconPlaced(e) {
        classSet(e.iconElement, {
            'form-control-feedback': true,
        });
        const parent = e.element.parentElement;
        if (hasClass(parent, 'input-group')) {
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        }
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const grandParent = parent.parentElement;
            if (hasClass(parent, type)) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
            else if (hasClass(parent.parentElement, type)) {
                grandParent.parentElement.insertBefore(e.iconElement, grandParent.nextSibling);
            }
        }
    }
}

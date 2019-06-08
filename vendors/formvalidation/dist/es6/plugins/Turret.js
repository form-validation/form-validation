import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Turret extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-turret',
            messageClass: 'form-message',
            rowInvalidClass: 'fv-invalid-row',
            rowPattern: /^field$/,
            rowSelector: '.field',
            rowValidClass: 'fv-valid-row',
        }, opts));
    }
    onIconPlaced(e) {
        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
        }
    }
}

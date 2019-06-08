import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Mui extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-mui',
            messageClass: 'fv-help-block',
            rowInvalidClass: 'fv-invalid-row',
            rowPattern: /^(.*)mui-col-(xs|md|lg|xl)(-offset)*-[0-9]+(.*)$/,
            rowSelector: '.mui-row',
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

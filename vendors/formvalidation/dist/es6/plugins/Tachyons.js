import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Tachyons extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-tachyons',
            messageClass: 'small',
            rowInvalidClass: 'red',
            rowPattern: /^(.*)fl(.*)$/,
            rowSelector: '.fl',
            rowValidClass: 'green',
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

import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Materialize extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            eleInvalidClass: 'validate invalid',
            eleValidClass: 'validate valid',
            formClass: 'fv-plugins-materialize',
            messageClass: 'helper-text',
            rowInvalidClass: 'fv-invalid-row',
            rowPattern: /^(.*)col(\s+)s[0-9]+(.*)$/,
            rowSelector: '.row',
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

import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Pure extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-pure',
            messageClass: 'fv-help-block',
            rowInvalidClass: 'fv-has-error',
            rowPattern: /^.*pure-control-group.*$/,
            rowSelector: '.pure-control-group',
            rowValidClass: 'fv-has-success',
        }, opts));
    }
    onIconPlaced(e) {
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const parent = e.element.parentElement;
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            if ('LABEL' === parent.tagName) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
        }
    }
}

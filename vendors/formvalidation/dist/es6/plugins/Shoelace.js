import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Shoelace extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-shoelace',
            messageClass: 'fv-help-block',
            rowInvalidClass: 'input-invalid',
            rowPattern: /^(.*)(col|offset)-[0-9]+(.*)$/,
            rowSelector: '.input-field',
            rowValidClass: 'input-valid',
        }, opts));
    }
    onIconPlaced(e) {
        const parent = e.element.parentElement;
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            if ('LABEL' === parent.tagName) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
        }
    }
}

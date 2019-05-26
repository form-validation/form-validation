import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Uikit extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-uikit',
            messageClass: 'uk-text-danger',
            rowInvalidClass: 'uk-form-danger',
            rowPattern: /^.*(uk-form-controls|uk-width-[\d+]-[\d+]).*$/,
            rowSelector: '.uk-margin',
            rowValidClass: 'uk-form-success',
        }, opts));
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
}

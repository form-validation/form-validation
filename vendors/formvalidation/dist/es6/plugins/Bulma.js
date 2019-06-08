import classSet from '../utils/classSet';
import Framework from './Framework';
export default class Bulma extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-bulma',
            messageClass: 'help is-danger',
            rowInvalidClass: 'fv-has-error',
            rowPattern: /^.*field.*$/,
            rowSelector: '.field',
            rowValidClass: 'fv-has-success',
        }, opts));
    }
    onIconPlaced(e) {
        classSet(e.iconElement, {
            'fv-plugins-icon': false,
        });
        const span = document.createElement('span');
        span.setAttribute('class', 'icon is-small is-right');
        e.iconElement.parentNode.insertBefore(span, e.iconElement);
        span.appendChild(e.iconElement);
        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            classSet(parent.parentElement, {
                'has-icons-right': true,
            });
            classSet(span, {
                'fv-plugins-icon-check': true,
            });
            parent.parentElement.insertBefore(span, parent.nextSibling);
        }
        else {
            classSet(parent, {
                'has-icons-right': true,
            });
        }
    }
}

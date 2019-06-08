export default function getFieldValue(form, field, element, elements) {
    const type = (element.getAttribute('type') || '').toLowerCase();
    const tagName = element.tagName.toLowerCase();
    switch (tagName) {
        case 'textarea':
            return element.value;
        case 'select':
            const select = element;
            const index = select.selectedIndex;
            return (index >= 0) ? select.options.item(index).value : '';
        case 'input':
            if ('radio' === type || 'checkbox' === type) {
                const checked = elements.filter((ele) => ele.checked).length;
                return checked === 0 ? '' : checked + '';
            }
            else {
                return element.value;
            }
        default:
            return '';
    }
}

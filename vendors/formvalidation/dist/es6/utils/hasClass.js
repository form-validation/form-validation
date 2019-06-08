export default function hasClass(element, clazz) {
    return element.classList
        ? element.classList.contains(clazz)
        : new RegExp(`(^| )${clazz}( |$)`, 'gi').test(element.className);
}

function matches(element, selector) {
    const nativeMatches = element.matches || element.webkitMatchesSelector
        || element['mozMatchesSelector'] || element['msMatchesSelector'];
    if (nativeMatches) {
        return nativeMatches.call(element, selector);
    }
    const nodes = [].slice.call(element.parentElement.querySelectorAll(selector));
    return nodes.indexOf(element) >= 0;
}
export default function closest(element, selector) {
    let ele = element;
    while (ele) {
        if (matches(ele, selector)) {
            break;
        }
        ele = ele.parentElement;
    }
    return ele;
}

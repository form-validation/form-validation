function addClass(element, classes) {
    classes.split(' ').forEach((clazz) => {
        if (element.classList) {
            element.classList.add(clazz);
        }
        else if (` ${element.className} `.indexOf(` ${clazz} `)) {
            element.className += ` ${clazz}`;
        }
    });
}
function removeClass(element, classes) {
    classes.split(' ').forEach((clazz) => {
        element.classList
            ? element.classList.remove(clazz)
            : (element.className = element.className.replace(clazz, ''));
    });
}
export default function classSet(element, classes) {
    const adding = [];
    const removing = [];
    Object.keys(classes).forEach((clazz) => {
        if (clazz) {
            classes[clazz] ? adding.push(clazz) : removing.push(clazz);
        }
    });
    removing.forEach((clazz) => removeClass(element, clazz));
    adding.forEach((clazz) => addClass(element, clazz));
}

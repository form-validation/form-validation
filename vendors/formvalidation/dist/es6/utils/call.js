export default function call(functionName, args) {
    if ('function' === typeof functionName) {
        return functionName.apply(this, args);
    }
    else if ('string' === typeof functionName) {
        let name = functionName;
        if ('()' === name.substring(name.length - 2)) {
            name = name.substring(0, name.length - 2);
        }
        const ns = name.split('.');
        const func = ns.pop();
        let context = window;
        for (const t of ns) {
            context = context[t];
        }
        return (typeof context[func] === 'undefined') ? null : context[func].apply(this, args);
    }
}

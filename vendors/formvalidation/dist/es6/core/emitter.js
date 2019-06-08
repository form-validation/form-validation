export default function emitter() {
    return {
        fns: {},
        clear() {
            this.fns = {};
        },
        emit(event, ...args) {
            (this.fns[event] || []).map((handler) => handler.apply(handler, args));
        },
        off(event, func) {
            if (this.fns[event]) {
                const index = this.fns[event].indexOf(func);
                if (index >= 0) {
                    this.fns[event].splice(index, 1);
                }
            }
        },
        on(event, func) {
            (this.fns[event] = this.fns[event] || []).push(func);
        },
    };
}

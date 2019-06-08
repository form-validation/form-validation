export default function filter() {
    return {
        filters: {},
        add(name, func) {
            (this.filters[name] = this.filters[name] || []).push(func);
        },
        clear() {
            this.filters = {};
        },
        execute(name, defaultValue, args) {
            if (!this.filters[name] || !this.filters[name].length) {
                return defaultValue;
            }
            let result = defaultValue;
            const filters = this.filters[name];
            const count = filters.length;
            for (let i = 0; i < count; i++) {
                result = filters[i].apply(result, args);
            }
            return result;
        },
        remove(name, func) {
            if (this.filters[name]) {
                this.filters[name] = this.filters[name].filter((f) => f !== func);
            }
        },
    };
}

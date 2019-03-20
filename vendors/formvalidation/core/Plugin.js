export default class Plugin {
    constructor(opts) {
        this.opts = opts;
    }
    setCore(core) {
        this.core = core;
        return this;
    }
    install() { }
    uninstall() { }
}

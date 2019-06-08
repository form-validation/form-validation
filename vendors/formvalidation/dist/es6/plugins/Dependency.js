import Plugin from '../core/Plugin';
export default class Dependency extends Plugin {
    constructor(opts) {
        super(opts);
        this.opts = opts || {};
        this.triggerExecutedHandler = this.onTriggerExecuted.bind(this);
    }
    install() {
        this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
    }
    uninstall() {
        this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
    }
    onTriggerExecuted(e) {
        if (this.opts[e.field]) {
            const dependencies = this.opts[e.field].split(' ');
            for (const d of dependencies) {
                const dependentField = d.trim();
                if (this.opts[dependentField]) {
                    this.core.revalidateField(dependentField);
                }
            }
        }
    }
}

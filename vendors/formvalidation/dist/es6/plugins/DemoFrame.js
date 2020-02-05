import Plugin from '../core/Plugin';
export default class DemoFrame extends Plugin {
    constructor(opts) {
        super(opts);

        this.updateHeight = this.updateDemoHeight.bind(this);
    }
    install() {
        this.core
            .on('core.field.added', this.updateHeight)
            .on('core.field.removed', this.updateHeight)
            .on('core.field.validating', this.updateHeight)
            .on('core.field.valid', this.updateHeight)
            .on('core.field.invalid', this.updateHeight)
            .on('core.field.notvalidated', this.updateHeight);

        window.parent.postMessage({
            channel: 'SAMPLE_CODE',
            sender: this.opts.sender,
            data: this.opts.sampleCode,
        }, window.location.origin);

        this.updateDemoHeight();
    }
    uninstall() {
        this.core
            .off('core.field.added', this.updateHeight)
            .off('core.field.removed', this.updateHeight)
            .off('core.field.validating', this.updateHeight)
            .off('core.field.valid', this.updateHeight)
            .off('core.field.invalid', this.updateHeight)
            .off('core.field.notvalidated', this.updateHeight);
    }
    updateDemoHeight() {
        window.parent.postMessage({
            channel: 'DEMO_UPDATE_STATUS',
            sender: this.opts.sender,
            data: true,
        }, window.location.origin);
    }
}
import Plugin from '../core/Plugin';
export default class TypingAnimation extends Plugin {
    constructor(opts) {
        super(opts);
        this.opts = Object.assign({}, {
            autoPlay: true,
        }, opts);
    }
    install() {
        this.fields = Object.keys(this.core.getFields());
        if (this.opts.autoPlay) {
            this.play();
        }
    }
    play() {
        return this.animate(0);
    }
    animate(fieldIndex) {
        if (fieldIndex >= this.fields.length) {
            return Promise.resolve(fieldIndex);
        }
        const field = this.fields[fieldIndex];
        const ele = this.core.getElements(field)[0];
        const inputType = ele.getAttribute('type');
        const samples = this.opts.data[field];
        if ('checkbox' === inputType || 'radio' === inputType) {
            ele.checked = true;
            ele.setAttribute('checked', 'true');
            return this.core.revalidateField(field).then((status) => {
                return this.animate(fieldIndex + 1);
            });
        }
        else if (!samples) {
            return this.animate(fieldIndex + 1);
        }
        else {
            return new Promise((resolve) => {
                return new Typed(ele, {
                    attr: 'value',
                    autoInsertCss: true,
                    bindInputFocusEvents: true,
                    onComplete: () => {
                        resolve(fieldIndex + 1);
                    },
                    onStringTyped: (arrayPos, self) => {
                        ele.value = samples[arrayPos];
                        this.core.revalidateField(field);
                    },
                    strings: samples,
                    typeSpeed: 100,
                });
            }).then((nextFieldIndex) => {
                return this.animate(nextFieldIndex);
            });
        }
    }
}

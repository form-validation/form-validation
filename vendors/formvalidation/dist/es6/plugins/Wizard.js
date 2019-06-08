import Plugin from '../core/Plugin';
import Status from '../core/Status';
import classSet from '../utils/classSet';
import Excluded from './Excluded';
export default class Wizard extends Plugin {
    constructor(opts) {
        super(opts);
        this.currentStep = 0;
        this.numSteps = 0;
        this.opts = Object.assign({}, {
            activeStepClass: 'fv-plugins-wizard--active',
            onStepActive: () => { },
            onStepInvalid: () => { },
            onStepValid: () => { },
            onValid: () => { },
            stepClass: 'fv-plugins-wizard--step',
        }, opts);
        this.prevStepHandler = this.onClickPrev.bind(this);
        this.nextStepHandler = this.onClickNext.bind(this);
    }
    install() {
        this.core.registerPlugin(Wizard.EXCLUDED_PLUGIN, new Excluded());
        const form = this.core.getFormElement();
        this.steps = [...form.querySelectorAll(this.opts.stepSelector)];
        this.numSteps = this.steps.length;
        this.steps.forEach((s) => {
            classSet(s, {
                [this.opts.stepClass]: true,
            });
        });
        classSet(this.steps[0], {
            [this.opts.activeStepClass]: true,
        });
        this.prevButton = form.querySelector(this.opts.prevButton);
        this.nextButton = form.querySelector(this.opts.nextButton);
        this.prevButton.addEventListener('click', this.prevStepHandler);
        this.nextButton.addEventListener('click', this.nextStepHandler);
    }
    uninstall() {
        this.core.deregisterPlugin(Wizard.EXCLUDED_PLUGIN);
        this.prevButton.removeEventListener('click', this.prevStepHandler);
        this.nextButton.removeEventListener('click', this.nextStepHandler);
    }
    onClickPrev() {
        if (this.currentStep >= 1) {
            classSet(this.steps[this.currentStep], {
                [this.opts.activeStepClass]: false,
            });
            this.currentStep--;
            classSet(this.steps[this.currentStep], {
                [this.opts.activeStepClass]: true,
            });
            this.onStepActive();
        }
    }
    onClickNext() {
        this.core
            .validate()
            .then((status) => {
            if (status === Status.Valid) {
                const nextStep = this.currentStep + 1;
                if (nextStep >= this.numSteps) {
                    this.currentStep = this.numSteps - 1;
                }
                else {
                    classSet(this.steps[this.currentStep], {
                        [this.opts.activeStepClass]: false,
                    });
                    this.currentStep = nextStep;
                    classSet(this.steps[this.currentStep], {
                        [this.opts.activeStepClass]: true,
                    });
                }
                this.onStepActive();
                this.onStepValid();
                if (nextStep === this.numSteps) {
                    this.onValid();
                }
            }
            else if (status === Status.Invalid) {
                this.onStepInvalid();
            }
        });
    }
    onStepActive() {
        const e = {
            numSteps: this.numSteps,
            step: this.currentStep,
        };
        this.core.emit('plugins.wizard.step.active', e);
        this.opts.onStepActive(e);
    }
    onStepValid() {
        const e = {
            numSteps: this.numSteps,
            step: this.currentStep,
        };
        this.core.emit('plugins.wizard.step.valid', e);
        this.opts.onStepValid(e);
    }
    onStepInvalid() {
        const e = {
            numSteps: this.numSteps,
            step: this.currentStep,
        };
        this.core.emit('plugins.wizard.step.invalid', e);
        this.opts.onStepInvalid(e);
    }
    onValid() {
        const e = {
            numSteps: this.numSteps,
        };
        this.core.emit('plugins.wizard.valid', e);
        this.opts.onValid(e);
    }
}
Wizard.EXCLUDED_PLUGIN = '___wizardExcluded';

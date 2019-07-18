import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { a as Plugin, b as formValidation } from './chunk.b786f426.js';
import { a as classSet, c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as zipCode } from './chunk.b13bd860.js';
import { a as phone } from './chunk.560d829e.js';
import { a as Excluded } from './chunk.01929f61.js';

class Wizard extends Plugin {
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
        this.steps = [].slice.call(form.querySelectorAll(this.opts.stepSelector));
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
            if (status === 'Valid') {
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
            else if (status === 'Invalid') {
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

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="js-step">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Quantity</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="quantity" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Size</div>
                    <div class="fl w-50">
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="s" /> S</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="m" /> M</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="l" /> L</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Color</div>
                    <div class="fl w-50">
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="white" /> White</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="black" /> Black</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="red" /> Red</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="yellow" /> Yellow</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="green" /> Green</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="js-step">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Full name</div>
                    <div class="fl w-30 mr2">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="firstName" placeholder="First name" />
                    </div>
                    <div class="fl w-30">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="lastName" placeholder="Last name" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Phone number</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="cellPhone" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Street</div>
                    <div class="fl w-75">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="street" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">City</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="city" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Zipcode</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="zipCode" />
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="button" class="ba b--black-20 bg-blue white ph3 pv2 br2" id="prevButton">Prev</button>
                    <button type="button" class="ba b--black-20 bg-blue white ph3 pv2 br2" id="nextButton">Next</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<!-- 
You have to include the full version of FormValidation which contains all validators
including the phone and zipCode validators
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Wizard.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                fields: {
                    quantity: {
                        validators: {
                            notEmpty: {
                                message: 'The quantity is required'
                            },
                            greaterThan: {
                                min: 1,
                                message: 'The quantity must be greater than 0'
                            },
                            integer: {
                                message: 'The quantity must be a number'
                            }
                        }
                    },
                    'size[]': {
                        validators: {
                            notEmpty: {
                                message: 'The size is required'
                            }
                        }
                    },
                    'color[]': {
                        validators: {
                            notEmpty: {
                                message: 'The color is required'
                            }
                        }
                    },
                    firstName: {
                        validators: {
                            notEmpty: {
                                message: 'The first name is required'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z\s]+$/,
                                message: 'The first name can only consist of alphabetical and space'
                            }
                        }
                    },
                    lastName: {
                        validators: {
                            notEmpty: {
                                message: 'The last name is required'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z\s]+$/,
                                message: 'The last name can only consist of alphabetical and space'
                            }
                        }
                    },
                    cellPhone: {
                        validators: {
                            notEmpty: {
                                message: 'The phone number is required'
                            },
                            phone: {
                                country: 'US',
                                message: 'The value is not valid US phone number'
                            }
                        }
                    },
                    street: {
                        validators: {
                            notEmpty: {
                                message: 'The street is required'
                            }
                        }
                    },
                    city: {
                        validators: {
                            notEmpty: {
                                message: 'The city is required'
                            }
                        }
                    },
                    zipCode: {
                        validators: {
                            notEmpty: {
                                message: 'The zip code is required'
                            },
                            zipCode: {
                                country: 'US',
                                message: 'The value is not valid US zip code'
                            },
                        }
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    tachyons: new FormValidation.plugins.Tachyons(),
                    wizard: new FormValidation.plugins.Wizard({
                        stepSelector: '.js-step',
                        prevButton: '#prevButton',
                        nextButton: '#nextButton',
                    }),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    icon: new FormValidation.plugins.Icon({
                        valid: 'fa fa-check',
                        invalid: 'fa fa-times',
                        validating: 'fa fa-refresh',
                    }),
                },
            }
        )
        // Update the label of Next button
        .on('plugins.wizard.step.active', function(e) {
            document.getElementById('nextButton').innerHTML = (e.step === e.numSteps - 1) ? 'Purchase' : 'Next';
        })
        .on('plugins.wizard.valid', function(e) {
            document.getElementById('nextButton').innerHTML = 'Done';
        });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/wizard/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/wizard/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div21, div3, div2, div0, t0, t1, div1, input0, t2, div11, div10, div4, t3, t4, div9, div5, label0, input1, t5, t6, div6, label1, input2, t7, t8, div7, label2, input3, t9, t10, div8, label3, input4, t11, t12, div20, div19, div12, t13, t14, div18, div13, label4, input5, t15, t16, div14, label5, input6, t17, t18, div15, label6, input7, t19, t20, div16, label7, input8, t21, t22, div17, label8, input9, t23, t24, div43, div26, div25, div22, t25, t26, div23, input10, t27, div24, input11, t28, div30, div29, div27, t29, t30, div28, input12, t31, div34, div33, div31, t32, t33, div32, input13, t34, div38, div37, div35, t35, t36, div36, input14, t37, div42, div41, div39, t38, t39, div40, input15, t40, div47, div46, div44, t41, div45, button0, t42, t43, button1, t44;

	return {
		c: function create() {
			form = element("form");
			div21 = element("div");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Quantity");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div11 = element("div");
			div10 = element("div");
			div4 = element("div");
			t3 = text("Size");
			t4 = space();
			div9 = element("div");
			div5 = element("div");
			label0 = element("label");
			input1 = element("input");
			t5 = text(" S");
			t6 = space();
			div6 = element("div");
			label1 = element("label");
			input2 = element("input");
			t7 = text(" M");
			t8 = space();
			div7 = element("div");
			label2 = element("label");
			input3 = element("input");
			t9 = text(" L");
			t10 = space();
			div8 = element("div");
			label3 = element("label");
			input4 = element("input");
			t11 = text(" XL");
			t12 = space();
			div20 = element("div");
			div19 = element("div");
			div12 = element("div");
			t13 = text("Color");
			t14 = space();
			div18 = element("div");
			div13 = element("div");
			label4 = element("label");
			input5 = element("input");
			t15 = text(" White");
			t16 = space();
			div14 = element("div");
			label5 = element("label");
			input6 = element("input");
			t17 = text(" Black");
			t18 = space();
			div15 = element("div");
			label6 = element("label");
			input7 = element("input");
			t19 = text(" Red");
			t20 = space();
			div16 = element("div");
			label7 = element("label");
			input8 = element("input");
			t21 = text(" Yellow");
			t22 = space();
			div17 = element("div");
			label8 = element("label");
			input9 = element("input");
			t23 = text(" Green");
			t24 = space();
			div43 = element("div");
			div26 = element("div");
			div25 = element("div");
			div22 = element("div");
			t25 = text("Full name");
			t26 = space();
			div23 = element("div");
			input10 = element("input");
			t27 = space();
			div24 = element("div");
			input11 = element("input");
			t28 = space();
			div30 = element("div");
			div29 = element("div");
			div27 = element("div");
			t29 = text("Phone number");
			t30 = space();
			div28 = element("div");
			input12 = element("input");
			t31 = space();
			div34 = element("div");
			div33 = element("div");
			div31 = element("div");
			t32 = text("Street");
			t33 = space();
			div32 = element("div");
			input13 = element("input");
			t34 = space();
			div38 = element("div");
			div37 = element("div");
			div35 = element("div");
			t35 = text("City");
			t36 = space();
			div36 = element("div");
			input14 = element("input");
			t37 = space();
			div42 = element("div");
			div41 = element("div");
			div39 = element("div");
			t38 = text("Zipcode");
			t39 = space();
			div40 = element("div");
			input15 = element("input");
			t40 = space();
			div47 = element("div");
			div46 = element("div");
			div44 = element("div");
			t41 = space();
			div45 = element("div");
			button0 = element("button");
			t42 = text("Prev");
			t43 = space();
			button1 = element("button");
			t44 = text("Next");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div21 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div3 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Quantity");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(div21_nodes, "\n\n            ");

			div11 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div4 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Size");
			div4_nodes.forEach(detach);
			t4 = claim_text(div10_nodes, "\n                    ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div5 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label0 = claim_element(div5_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input1 = claim_element(label0_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t5 = claim_text(label0_nodes, " S");
			label0_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t6 = claim_text(div9_nodes, "\n                        ");

			div6 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label1 = claim_element(div6_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input2 = claim_element(label1_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t7 = claim_text(label1_nodes, " M");
			label1_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t8 = claim_text(div9_nodes, "\n                        ");

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label2 = claim_element(div7_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			input3 = claim_element(label2_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t9 = claim_text(label2_nodes, " L");
			label2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t10 = claim_text(div9_nodes, "\n                        ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label3 = claim_element(div8_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input4 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t11 = claim_text(label3_nodes, " XL");
			label3_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t12 = claim_text(div21_nodes, "\n\n            ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div12 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			t13 = claim_text(div12_nodes, "Color");
			div12_nodes.forEach(detach);
			t14 = claim_text(div19_nodes, "\n                    ");

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div13 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label4 = claim_element(div13_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input5 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(label4_nodes, " White");
			label4_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t16 = claim_text(div18_nodes, "\n                        ");

			div14 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			label5 = claim_element(div14_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input6 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t17 = claim_text(label5_nodes, " Black");
			label5_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t18 = claim_text(div18_nodes, "\n                        ");

			div15 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label6 = claim_element(div15_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input7 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t19 = claim_text(label6_nodes, " Red");
			label6_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t20 = claim_text(div18_nodes, "\n                        ");

			div16 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			label7 = claim_element(div16_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			input8 = claim_element(label7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			t21 = claim_text(label7_nodes, " Yellow");
			label7_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t22 = claim_text(div18_nodes, "\n                        ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			label8 = claim_element(div17_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input9 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t23 = claim_text(label8_nodes, " Green");
			label8_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t24 = claim_text(form_nodes, "\n\n        ");

			div43 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div43_nodes = children(div43);

			div26 = claim_element(div43_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div22 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			t25 = claim_text(div22_nodes, "Full name");
			div22_nodes.forEach(detach);
			t26 = claim_text(div25_nodes, "\n                    ");

			div23 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			input10 = claim_element(div23_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input10_nodes = children(input10);

			input10_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			t27 = claim_text(div25_nodes, "\n                    ");

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			input11 = claim_element(div24_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input11_nodes = children(input11);

			input11_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			t28 = claim_text(div43_nodes, "\n\n            ");

			div30 = claim_element(div43_nodes, "DIV", { class: true }, false);
			var div30_nodes = children(div30);

			div29 = claim_element(div30_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			div27 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			t29 = claim_text(div27_nodes, "Phone number");
			div27_nodes.forEach(detach);
			t30 = claim_text(div29_nodes, "\n                    ");

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			input12 = claim_element(div28_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input12_nodes = children(input12);

			input12_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			div30_nodes.forEach(detach);
			t31 = claim_text(div43_nodes, "\n\n            ");

			div34 = claim_element(div43_nodes, "DIV", { class: true }, false);
			var div34_nodes = children(div34);

			div33 = claim_element(div34_nodes, "DIV", { class: true }, false);
			var div33_nodes = children(div33);

			div31 = claim_element(div33_nodes, "DIV", { class: true }, false);
			var div31_nodes = children(div31);

			t32 = claim_text(div31_nodes, "Street");
			div31_nodes.forEach(detach);
			t33 = claim_text(div33_nodes, "\n                    ");

			div32 = claim_element(div33_nodes, "DIV", { class: true }, false);
			var div32_nodes = children(div32);

			input13 = claim_element(div32_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input13_nodes = children(input13);

			input13_nodes.forEach(detach);
			div32_nodes.forEach(detach);
			div33_nodes.forEach(detach);
			div34_nodes.forEach(detach);
			t34 = claim_text(div43_nodes, "\n\n            ");

			div38 = claim_element(div43_nodes, "DIV", { class: true }, false);
			var div38_nodes = children(div38);

			div37 = claim_element(div38_nodes, "DIV", { class: true }, false);
			var div37_nodes = children(div37);

			div35 = claim_element(div37_nodes, "DIV", { class: true }, false);
			var div35_nodes = children(div35);

			t35 = claim_text(div35_nodes, "City");
			div35_nodes.forEach(detach);
			t36 = claim_text(div37_nodes, "\n                    ");

			div36 = claim_element(div37_nodes, "DIV", { class: true }, false);
			var div36_nodes = children(div36);

			input14 = claim_element(div36_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input14_nodes = children(input14);

			input14_nodes.forEach(detach);
			div36_nodes.forEach(detach);
			div37_nodes.forEach(detach);
			div38_nodes.forEach(detach);
			t37 = claim_text(div43_nodes, "\n\n            ");

			div42 = claim_element(div43_nodes, "DIV", { class: true }, false);
			var div42_nodes = children(div42);

			div41 = claim_element(div42_nodes, "DIV", { class: true }, false);
			var div41_nodes = children(div41);

			div39 = claim_element(div41_nodes, "DIV", { class: true }, false);
			var div39_nodes = children(div39);

			t38 = claim_text(div39_nodes, "Zipcode");
			div39_nodes.forEach(detach);
			t39 = claim_text(div41_nodes, "\n                    ");

			div40 = claim_element(div41_nodes, "DIV", { class: true }, false);
			var div40_nodes = children(div40);

			input15 = claim_element(div40_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input15_nodes = children(input15);

			input15_nodes.forEach(detach);
			div40_nodes.forEach(detach);
			div41_nodes.forEach(detach);
			div42_nodes.forEach(detach);
			div43_nodes.forEach(detach);
			t40 = claim_text(form_nodes, "\n\n        ");

			div47 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div47_nodes = children(div47);

			div46 = claim_element(div47_nodes, "DIV", { class: true }, false);
			var div46_nodes = children(div46);

			div44 = claim_element(div46_nodes, "DIV", { class: true }, false);
			var div44_nodes = children(div44);

			div44_nodes.forEach(detach);
			t41 = claim_text(div46_nodes, "\n                ");

			div45 = claim_element(div46_nodes, "DIV", { class: true }, false);
			var div45_nodes = children(div45);

			button0 = claim_element(div45_nodes, "BUTTON", { type: true, class: true, id: true }, false);
			var button0_nodes = children(button0);

			t42 = claim_text(button0_nodes, "Prev");
			button0_nodes.forEach(detach);
			t43 = claim_text(div45_nodes, "\n                    ");

			button1 = claim_element(div45_nodes, "BUTTON", { type: true, class: true, id: true }, false);
			var button1_nodes = children(button1);

			t44 = claim_text(button1_nodes, "Next");
			button1_nodes.forEach(detach);
			div45_nodes.forEach(detach);
			div46_nodes.forEach(detach);
			div47_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 5, 20, 178);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "quantity";
			add_location(input0, file, 7, 24, 284);
			div1.className = "fl w-40";
			add_location(div1, file, 6, 20, 238);
			div2.className = "fl w-100";
			add_location(div2, file, 4, 16, 135);
			div3.className = "cf mb2";
			add_location(div3, file, 3, 12, 98);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 14, 20, 536);
			attr(input1, "type", "checkbox");
			input1.name = "size[]";
			input1.value = "s";
			add_location(input1, file, 17, 35, 691);
			add_location(label0, file, 17, 28, 684);
			div5.className = "mb2";
			add_location(div5, file, 16, 24, 638);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "m";
			add_location(input2, file, 20, 35, 859);
			add_location(label1, file, 20, 28, 852);
			div6.className = "mb2";
			add_location(div6, file, 19, 24, 806);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "l";
			add_location(input3, file, 23, 35, 1027);
			add_location(label2, file, 23, 28, 1020);
			div7.className = "mb2";
			add_location(div7, file, 22, 24, 974);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "xl";
			add_location(input4, file, 26, 35, 1195);
			add_location(label3, file, 26, 28, 1188);
			div8.className = "mb2";
			add_location(div8, file, 25, 24, 1142);
			div9.className = "fl w-50";
			add_location(div9, file, 15, 20, 592);
			div10.className = "fl w-100";
			add_location(div10, file, 13, 16, 493);
			div11.className = "cf mb2";
			add_location(div11, file, 12, 12, 456);
			div12.className = "fl w-25 pa2";
			add_location(div12, file, 34, 20, 1450);
			attr(input5, "type", "checkbox");
			input5.name = "color[]";
			input5.value = "white";
			add_location(input5, file, 37, 35, 1606);
			add_location(label4, file, 37, 28, 1599);
			div13.className = "mb2";
			add_location(div13, file, 36, 24, 1553);
			attr(input6, "type", "checkbox");
			input6.name = "color[]";
			input6.value = "black";
			add_location(input6, file, 40, 35, 1783);
			add_location(label5, file, 40, 28, 1776);
			div14.className = "mb2";
			add_location(div14, file, 39, 24, 1730);
			attr(input7, "type", "checkbox");
			input7.name = "color[]";
			input7.value = "red";
			add_location(input7, file, 43, 35, 1960);
			add_location(label6, file, 43, 28, 1953);
			div15.className = "mb2";
			add_location(div15, file, 42, 24, 1907);
			attr(input8, "type", "checkbox");
			input8.name = "color[]";
			input8.value = "yellow";
			add_location(input8, file, 46, 35, 2133);
			add_location(label7, file, 46, 28, 2126);
			div16.className = "mb2";
			add_location(div16, file, 45, 24, 2080);
			attr(input9, "type", "checkbox");
			input9.name = "color[]";
			input9.value = "green";
			add_location(input9, file, 49, 35, 2312);
			add_location(label8, file, 49, 28, 2305);
			div17.className = "mb2";
			add_location(div17, file, 48, 24, 2259);
			div18.className = "fl w-50";
			add_location(div18, file, 35, 20, 1507);
			div19.className = "fl w-100";
			add_location(div19, file, 33, 16, 1407);
			div20.className = "cf mb2";
			add_location(div20, file, 32, 12, 1370);
			div21.className = "js-step";
			add_location(div21, file, 2, 8, 64);
			div22.className = "fl w-25 pa2";
			add_location(div22, file, 59, 20, 2619);
			attr(input10, "type", "text");
			input10.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input10.name = "firstName";
			input10.placeholder = "First name";
			add_location(input10, file, 61, 24, 2730);
			div23.className = "fl w-30 mr2";
			add_location(div23, file, 60, 20, 2680);
			attr(input11, "type", "text");
			input11.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input11.name = "lastName";
			input11.placeholder = "Last name";
			add_location(input11, file, 64, 24, 2939);
			div24.className = "fl w-30";
			add_location(div24, file, 63, 20, 2893);
			div25.className = "fl w-100";
			add_location(div25, file, 58, 16, 2576);
			div26.className = "cf mb2";
			add_location(div26, file, 57, 12, 2539);
			div27.className = "fl w-25 pa2";
			add_location(div27, file, 71, 20, 3215);
			attr(input12, "type", "text");
			input12.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input12.name = "cellPhone";
			add_location(input12, file, 73, 24, 3325);
			div28.className = "fl w-40";
			add_location(div28, file, 72, 20, 3279);
			div29.className = "fl w-100";
			add_location(div29, file, 70, 16, 3172);
			div30.className = "cf mb2";
			add_location(div30, file, 69, 12, 3135);
			div31.className = "fl w-25 pa2";
			add_location(div31, file, 80, 20, 3578);
			attr(input13, "type", "text");
			input13.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input13.name = "street";
			add_location(input13, file, 82, 24, 3682);
			div32.className = "fl w-75";
			add_location(div32, file, 81, 20, 3636);
			div33.className = "fl w-100";
			add_location(div33, file, 79, 16, 3535);
			div34.className = "cf mb2";
			add_location(div34, file, 78, 12, 3498);
			div35.className = "fl w-25 pa2";
			add_location(div35, file, 89, 20, 3932);
			attr(input14, "type", "text");
			input14.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input14.name = "city";
			add_location(input14, file, 91, 24, 4034);
			div36.className = "fl w-40";
			add_location(div36, file, 90, 20, 3988);
			div37.className = "fl w-100";
			add_location(div37, file, 88, 16, 3889);
			div38.className = "cf mb2";
			add_location(div38, file, 87, 12, 3852);
			div39.className = "fl w-25 pa2";
			add_location(div39, file, 98, 20, 4282);
			attr(input15, "type", "text");
			input15.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input15.name = "zipCode";
			add_location(input15, file, 100, 24, 4387);
			div40.className = "fl w-40";
			add_location(div40, file, 99, 20, 4341);
			div41.className = "fl w-100";
			add_location(div41, file, 97, 16, 4239);
			div42.className = "cf mb2";
			add_location(div42, file, 96, 12, 4202);
			div43.className = "js-step";
			add_location(div43, file, 56, 8, 2505);
			div44.className = "fl w-25 pa2";
			add_location(div44, file, 108, 16, 4641);
			button0.type = "button";
			button0.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			button0.id = "prevButton";
			add_location(button0, file, 110, 20, 4731);
			button1.type = "button";
			button1.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			button1.id = "nextButton";
			add_location(button1, file, 111, 20, 4852);
			div45.className = "fl w-50";
			add_location(div45, file, 109, 16, 4689);
			div46.className = "fl w-100";
			add_location(div46, file, 107, 12, 4602);
			div47.className = "cf mb2";
			add_location(div47, file, 106, 8, 4569);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div21);
			append(div21, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(div21, t2);
			append(div21, div11);
			append(div11, div10);
			append(div10, div4);
			append(div4, t3);
			append(div10, t4);
			append(div10, div9);
			append(div9, div5);
			append(div5, label0);
			append(label0, input1);
			append(label0, t5);
			append(div9, t6);
			append(div9, div6);
			append(div6, label1);
			append(label1, input2);
			append(label1, t7);
			append(div9, t8);
			append(div9, div7);
			append(div7, label2);
			append(label2, input3);
			append(label2, t9);
			append(div9, t10);
			append(div9, div8);
			append(div8, label3);
			append(label3, input4);
			append(label3, t11);
			append(div21, t12);
			append(div21, div20);
			append(div20, div19);
			append(div19, div12);
			append(div12, t13);
			append(div19, t14);
			append(div19, div18);
			append(div18, div13);
			append(div13, label4);
			append(label4, input5);
			append(label4, t15);
			append(div18, t16);
			append(div18, div14);
			append(div14, label5);
			append(label5, input6);
			append(label5, t17);
			append(div18, t18);
			append(div18, div15);
			append(div15, label6);
			append(label6, input7);
			append(label6, t19);
			append(div18, t20);
			append(div18, div16);
			append(div16, label7);
			append(label7, input8);
			append(label7, t21);
			append(div18, t22);
			append(div18, div17);
			append(div17, label8);
			append(label8, input9);
			append(label8, t23);
			append(form, t24);
			append(form, div43);
			append(div43, div26);
			append(div26, div25);
			append(div25, div22);
			append(div22, t25);
			append(div25, t26);
			append(div25, div23);
			append(div23, input10);
			append(div25, t27);
			append(div25, div24);
			append(div24, input11);
			append(div43, t28);
			append(div43, div30);
			append(div30, div29);
			append(div29, div27);
			append(div27, t29);
			append(div29, t30);
			append(div29, div28);
			append(div28, input12);
			append(div43, t31);
			append(div43, div34);
			append(div34, div33);
			append(div33, div31);
			append(div31, t32);
			append(div33, t33);
			append(div33, div32);
			append(div32, input13);
			append(div43, t34);
			append(div43, div38);
			append(div38, div37);
			append(div37, div35);
			append(div35, t35);
			append(div37, t36);
			append(div37, div36);
			append(div36, input14);
			append(div43, t37);
			append(div43, div42);
			append(div42, div41);
			append(div41, div39);
			append(div39, t38);
			append(div41, t39);
			append(div41, div40);
			append(div40, input15);
			append(form, t40);
			append(form, div47);
			append(div47, div46);
			append(div46, div44);
			append(div46, t41);
			append(div46, div45);
			append(div45, button0);
			append(button0, t42);
			append(div45, t43);
			append(div45, button1);
			append(button1, t44);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self) {
	

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            quantity: {
                validators: {
                    notEmpty: {
                        message: 'The quantity is required'
                    },
                    greaterThan: {
                        min: 1,
                        message: 'The quantity must be greater than 0'
                    },
                    integer: {
                        message: 'The quantity must be a number'
                    }
                }
            },
            'size[]': {
                validators: {
                    notEmpty: {
                        message: 'The size is required'
                    }
                }
            },
            'color[]': {
                validators: {
                    notEmpty: {
                        message: 'The color is required'
                    }
                }
            },
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The first name can only consist of alphabetical and space'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The last name can only consist of alphabetical and space'
                    }
                }
            },
            cellPhone: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    phone: {
                        country: 'US',
                        message: 'The value is not valid US phone number'
                    }
                }
            },
            street: {
                validators: {
                    notEmpty: {
                        message: 'The street is required'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            },
            zipCode: {
                validators: {
                    notEmpty: {
                        message: 'The zip code is required'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'The value is not valid US zip code'
                    },
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            wizard: new Wizard({
                stepSelector: '.js-step',
                prevButton: '#prevButton',
                nextButton: '#nextButton',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/wizard/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('plugins.wizard.step.active', (e) => {
        document.getElementById('nextButton').innerHTML = (e.step === e.numSteps - 1) ? 'Purchase' : 'Next';
    })
    .on('plugins.wizard.valid', (e) => {
        document.getElementById('nextButton').innerHTML = 'Done';
    })
    .registerValidator('phone', phone)
    .registerValidator('zipCode', zipCode);

    return () => {
        fv.destroy();
    };
});

	return {};
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;

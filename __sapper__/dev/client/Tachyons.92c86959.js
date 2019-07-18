import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { a as Plugin, b as formValidation } from './chunk.b786f426.js';
import { a as classSet, c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

class MandatoryIcon extends Plugin {
    constructor(opts) {
        super(opts);
        this.removedIcons = {
            Invalid: '',
            NotValidated: '',
            Valid: '',
            Validating: '',
        };
        this.icons = new Map();
        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
        this.iconSetHandler = this.onIconSet.bind(this);
    }
    install() {
        this.core
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('plugins.icon.set', this.iconSetHandler);
    }
    uninstall() {
        this.icons.clear();
        this.core
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('plugins.icon.set', this.iconSetHandler);
    }
    onIconPlaced(e) {
        const validators = this.core.getFields()[e.field].validators;
        const elements = this.core.getElements(e.field);
        if (validators && validators['notEmpty'] && validators['notEmpty'].enabled !== false && elements.length) {
            this.icons.set(e.element, e.iconElement);
            const type = elements[0].getAttribute('type').toLowerCase();
            const elementArray = ('checkbox' === type || 'radio' === type) ? [elements[0]] : elements;
            for (const ele of elementArray) {
                if (this.core.getElementValue(e.field, ele) === '') {
                    classSet(e.iconElement, {
                        [this.opts.icon]: true,
                    });
                }
            }
        }
        this.iconClasses = e.classes;
        const icons = this.opts.icon.split(' ');
        const feedbackIcons = {
            Invalid: this.iconClasses.invalid ? this.iconClasses.invalid.split(' ') : [],
            Valid: this.iconClasses.valid ? this.iconClasses.valid.split(' ') : [],
            Validating: this.iconClasses.validating ? this.iconClasses.validating.split(' ') : [],
        };
        Object.keys(feedbackIcons).forEach((status) => {
            const classes = [];
            for (const clazz of icons) {
                if (feedbackIcons[status].indexOf(clazz) === -1) {
                    classes.push(clazz);
                }
            }
            this.removedIcons[status] = classes.join(' ');
        });
    }
    onElementValidating(e) {
        this.updateIconClasses(e.element, 'Validating');
    }
    onElementValidated(e) {
        this.updateIconClasses(e.element, e.valid ? 'Valid' : 'Invalid');
    }
    onElementNotValidated(e) {
        this.updateIconClasses(e.element, 'NotValidated');
    }
    updateIconClasses(ele, status) {
        const icon = this.icons.get(ele);
        if (icon && this.iconClasses &&
            (this.iconClasses.valid || this.iconClasses.invalid || this.iconClasses.validating)) {
            classSet(icon, {
                [this.removedIcons[status]]: false,
                [this.opts.icon]: false,
            });
        }
    }
    onIconSet(e) {
        const icon = this.icons.get(e.element);
        if (icon && e.status === 'NotValidated' && this.core.getElementValue(e.field, e.element) === '') {
            classSet(icon, {
                [this.opts.icon]: true,
            });
        }
    }
}

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Product name</div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Description</div>
                <div class="fl w-75">
                    <textarea rows="5" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="description"></textarea>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Price ($)</div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="price" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Size</div>
                <div class="fl w-75">
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
                <div class="fl w-25 pa2">Available in store</div>
                <div class="fl w-75">
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="yes" /> Yes</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="no" /> No</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Add product</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/MandatoryIcon.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The name must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The name can only consist of alphabetical, number and underscore'
                        }
                    }
                },
                description: {
                    validators: {
                        stringLength: {
                            max: 300,
                            message: 'The description must be less than 300 characters long'
                        }
                    }
                },
                price: {
                    validators: {
                        notEmpty: {
                            message: 'The price is required'
                        },
                        numeric: {
                            message: 'The price must be a number'
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
                availability: {
                    validators: {
                        notEmpty: {
                            message: 'The availability option is required'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                // We must register MandatoryIcon before Icon plugin
                mandatoryIcon: new FormValidation.plugins.MandatoryIcon({
                    icon: 'fa fa-asterisk'
                }),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/mandatory-icon/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/mandatory-icon/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, t4, div5, textarea, t5, div11, div10, div8, t6, t7, div9, input1, t8, div19, div18, div12, t9, t10, div17, div13, label0, input2, t11, t12, div14, label1, input3, t13, t14, div15, label2, input4, t15, t16, div16, label3, input5, t17, t18, div25, div24, div20, t19, t20, div23, div21, label4, input6, t21, t22, div22, label5, input7, t23, t24, div29, div28, div26, t25, div27, button, t26;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Product name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = text("Description");
			t4 = space();
			div5 = element("div");
			textarea = element("textarea");
			t5 = space();
			div11 = element("div");
			div10 = element("div");
			div8 = element("div");
			t6 = text("Price ($)");
			t7 = space();
			div9 = element("div");
			input1 = element("input");
			t8 = space();
			div19 = element("div");
			div18 = element("div");
			div12 = element("div");
			t9 = text("Size");
			t10 = space();
			div17 = element("div");
			div13 = element("div");
			label0 = element("label");
			input2 = element("input");
			t11 = text(" S");
			t12 = space();
			div14 = element("div");
			label1 = element("label");
			input3 = element("input");
			t13 = text(" M");
			t14 = space();
			div15 = element("div");
			label2 = element("label");
			input4 = element("input");
			t15 = text(" L");
			t16 = space();
			div16 = element("div");
			label3 = element("label");
			input5 = element("input");
			t17 = text(" XL");
			t18 = space();
			div25 = element("div");
			div24 = element("div");
			div20 = element("div");
			t19 = text("Available in store");
			t20 = space();
			div23 = element("div");
			div21 = element("div");
			label4 = element("label");
			input6 = element("input");
			t21 = text(" Yes");
			t22 = space();
			div22 = element("div");
			label5 = element("label");
			input7 = element("input");
			t23 = text(" No");
			t24 = space();
			div29 = element("div");
			div28 = element("div");
			div26 = element("div");
			t25 = space();
			div27 = element("div");
			button = element("button");
			t26 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Product name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Description");
			div4_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			textarea = claim_element(div5_nodes, "TEXTAREA", { rows: true, class: true, name: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			t6 = claim_text(div8_nodes, "Price ($)");
			div8_nodes.forEach(detach);
			t7 = claim_text(div10_nodes, "\n                ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input1 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n    \n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div12 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			t9 = claim_text(div12_nodes, "Size");
			div12_nodes.forEach(detach);
			t10 = claim_text(div18_nodes, "\n                ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div13 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label0 = claim_element(div13_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input2 = claim_element(label0_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t11 = claim_text(label0_nodes, " S");
			label0_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t12 = claim_text(div17_nodes, "\n                    ");

			div14 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			label1 = claim_element(div14_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input3 = claim_element(label1_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t13 = claim_text(label1_nodes, " M");
			label1_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t14 = claim_text(div17_nodes, "\n                    ");

			div15 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label2 = claim_element(div15_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			input4 = claim_element(label2_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t15 = claim_text(label2_nodes, " L");
			label2_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t16 = claim_text(div17_nodes, "\n                    ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			label3 = claim_element(div16_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input5 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(label3_nodes, " XL");
			label3_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t18 = claim_text(form_nodes, "\n    \n        ");

			div25 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div20 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			t19 = claim_text(div20_nodes, "Available in store");
			div20_nodes.forEach(detach);
			t20 = claim_text(div24_nodes, "\n                ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div21 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			label4 = claim_element(div21_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input6 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t21 = claim_text(label4_nodes, " Yes");
			label4_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t22 = claim_text(div23_nodes, "\n                    ");

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			label5 = claim_element(div22_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input7 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t23 = claim_text(label5_nodes, " No");
			label5_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			t24 = claim_text(form_nodes, "\n\n        ");

			div29 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			div26 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div26_nodes.forEach(detach);
			t25 = claim_text(div28_nodes, "\n                ");

			div27 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			button = claim_element(div27_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t26 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "name";
			add_location(input0, file, 6, 20, 238);
			div1.className = "fl w-30";
			add_location(div1, file, 5, 16, 196);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 462);
			textarea.rows = "5";
			textarea.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			textarea.name = "description";
			add_location(textarea, file, 15, 20, 563);
			div5.className = "fl w-75";
			add_location(div5, file, 14, 16, 521);
			div6.className = "fl w-100";
			add_location(div6, file, 12, 12, 423);
			div7.className = "cf mb2";
			add_location(div7, file, 11, 8, 390);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 22, 16, 807);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "price";
			add_location(input1, file, 24, 20, 906);
			div9.className = "fl w-30";
			add_location(div9, file, 23, 16, 864);
			div10.className = "fl w-100";
			add_location(div10, file, 21, 12, 768);
			div11.className = "cf mb2";
			add_location(div11, file, 20, 8, 735);
			div12.className = "fl w-25 pa2";
			add_location(div12, file, 31, 16, 1135);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 34, 31, 1278);
			add_location(label0, file, 34, 24, 1271);
			div13.className = "mb2";
			add_location(div13, file, 33, 20, 1229);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 37, 31, 1434);
			add_location(label1, file, 37, 24, 1427);
			div14.className = "mb2";
			add_location(div14, file, 36, 20, 1385);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 40, 31, 1590);
			add_location(label2, file, 40, 24, 1583);
			div15.className = "mb2";
			add_location(div15, file, 39, 20, 1541);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 43, 31, 1746);
			add_location(label3, file, 43, 24, 1739);
			div16.className = "mb2";
			add_location(div16, file, 42, 20, 1697);
			div17.className = "fl w-75";
			add_location(div17, file, 32, 16, 1187);
			div18.className = "fl w-100";
			add_location(div18, file, 30, 12, 1096);
			div19.className = "cf mb2";
			add_location(div19, file, 29, 8, 1063);
			div20.className = "fl w-25 pa2";
			add_location(div20, file, 51, 16, 1977);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 54, 31, 2134);
			add_location(label4, file, 54, 24, 2127);
			div21.className = "mb2";
			add_location(div21, file, 53, 20, 2085);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 57, 31, 2297);
			add_location(label5, file, 57, 24, 2290);
			div22.className = "mb2";
			add_location(div22, file, 56, 20, 2248);
			div23.className = "fl w-75";
			add_location(div23, file, 52, 16, 2043);
			div24.className = "fl w-100";
			add_location(div24, file, 50, 12, 1938);
			div25.className = "cf mb2";
			add_location(div25, file, 49, 8, 1905);
			div26.className = "fl w-25 pa2";
			add_location(div26, file, 65, 16, 2527);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 68, 20, 2708);
			div27.className = "fl w-50";
			add_location(div27, file, 66, 16, 2575);
			div28.className = "fl w-100";
			add_location(div28, file, 64, 12, 2488);
			div29.className = "cf mb2";
			add_location(div29, file, 63, 8, 2455);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, textarea);
			append(form, t5);
			append(form, div11);
			append(div11, div10);
			append(div10, div8);
			append(div8, t6);
			append(div10, t7);
			append(div10, div9);
			append(div9, input1);
			append(form, t8);
			append(form, div19);
			append(div19, div18);
			append(div18, div12);
			append(div12, t9);
			append(div18, t10);
			append(div18, div17);
			append(div17, div13);
			append(div13, label0);
			append(label0, input2);
			append(label0, t11);
			append(div17, t12);
			append(div17, div14);
			append(div14, label1);
			append(label1, input3);
			append(label1, t13);
			append(div17, t14);
			append(div17, div15);
			append(div15, label2);
			append(label2, input4);
			append(label2, t15);
			append(div17, t16);
			append(div17, div16);
			append(div16, label3);
			append(label3, input5);
			append(label3, t17);
			append(form, t18);
			append(form, div25);
			append(div25, div24);
			append(div24, div20);
			append(div20, t19);
			append(div24, t20);
			append(div24, div23);
			append(div23, div21);
			append(div21, label4);
			append(label4, input6);
			append(label4, t21);
			append(div23, t22);
			append(div23, div22);
			append(div22, label5);
			append(label5, input7);
			append(label5, t23);
			append(form, t24);
			append(form, div29);
			append(div29, div28);
			append(div28, div26);
			append(div28, t25);
			append(div28, div27);
			append(div27, button);
			append(button, t26);
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
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            },
            description: {
                validators: {
                    stringLength: {
                        max: 300,
                        message: 'The description must be less than 300 characters long'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required'
                    },
                    numeric: {
                        message: 'The price must be a number'
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
            availability: {
                validators: {
                    notEmpty: {
                        message: 'The availability option is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            // We must register `MandatoryIcon` before `Icon` plugin
            mandatoryIcon: new MandatoryIcon({
                icon: 'fa fa-asterisk'
            }),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/mandatory-icon/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

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

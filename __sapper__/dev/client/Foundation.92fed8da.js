import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, A as attr, n as add_location, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as FoundationLayout, b as Foundation } from './chunk.d81210b9.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="fv-stacked-form">
        <div class="grid-x grid-padding-x">
            <label>
                Product name
                <input type="text" name="name" />
            </label>
        </div>

        <div class="grid-x grid-padding-x">
            <label>Price
                <div class="input-group">
                    <span class="input-group-label">$</span>
                    <input class="input-group-field" type="text" name="price" />
                </div>
            </label>
        </div>

        <div class="grid-x grid-padding-x">
            <fieldset>
                <legend>Size</legend>
                <input type="checkbox" id="sCheckbox" name="size[]" value="s" /><label for="sCheckbox">S</label>
                <input type="checkbox" id="mCheckbox" name="size[]" value="m" /><label for="mCheckbox">M</label>
                <input type="checkbox" id="lCheckbox" name="size[]" value="l" /><label for="lCheckbox">L</label>
                <input type="checkbox" id="xlCheckbox" name="size[]" value="xl" /><label for="xlCheckbox">XL</label>
            </fieldset>
        </div>

        <div class="grid-x grid-padding-x">
            <fieldset>
                <legend>Available in store</legend>
                <input type="radio" id="yesRadio" name="availability" value="yes" /><label for="yesRadio">Yes</label>
                <input type="radio" id="noRadio" name="availability" value="no" /><label for="noRadio">No</label>
            </fieldset>
        </div>

        <div class="grid-x grid-padding-x">
            <button type="submit" class="button" name="signup" value="Sign up">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Foundation.min.js"></script-tag>

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
                foundation: new FormValidation.plugins.Foundation(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/foundation/stacked-form/Foundation.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/foundation/stacked-form/Foundation.svelte";

// (1:0) <FoundationLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div0, label0, t0, input0, t1, div2, label1, t2, div1, span, t3, t4, input1, t5, div3, fieldset0, legend0, t6, t7, input2, label2, t8, t9, input3, label3, t10, t11, input4, label4, t12, t13, input5, label5, t14, t15, div4, fieldset1, legend1, t16, t17, input6, label6, t18, t19, input7, label7, t20, t21, div5, button, t22;

	return {
		c: function create() {
			form = element("form");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Product name\n                ");
			input0 = element("input");
			t1 = space();
			div2 = element("div");
			label1 = element("label");
			t2 = text("Price\n                ");
			div1 = element("div");
			span = element("span");
			t3 = text("$");
			t4 = space();
			input1 = element("input");
			t5 = space();
			div3 = element("div");
			fieldset0 = element("fieldset");
			legend0 = element("legend");
			t6 = text("Size");
			t7 = space();
			input2 = element("input");
			label2 = element("label");
			t8 = text("S");
			t9 = space();
			input3 = element("input");
			label3 = element("label");
			t10 = text("M");
			t11 = space();
			input4 = element("input");
			label4 = element("label");
			t12 = text("L");
			t13 = space();
			input5 = element("input");
			label5 = element("label");
			t14 = text("XL");
			t15 = space();
			div4 = element("div");
			fieldset1 = element("fieldset");
			legend1 = element("legend");
			t16 = text("Available in store");
			t17 = space();
			input6 = element("input");
			label6 = element("label");
			t18 = text("Yes");
			t19 = space();
			input7 = element("input");
			label7 = element("label");
			t20 = text("No");
			t21 = space();
			div5 = element("div");
			button = element("button");
			t22 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, class: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name\n                ");

			input0 = claim_element(label0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(form_nodes, "\n\n        ");

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label1 = claim_element(div2_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t2 = claim_text(label1_nodes, "Price\n                ");

			div1 = claim_element(label1_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			span = claim_element(div1_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t3 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			t4 = claim_text(div1_nodes, "\n                    ");

			input1 = claim_element(div1_nodes, "INPUT", { class: true, type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			label1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			fieldset0 = claim_element(div3_nodes, "FIELDSET", {}, false);
			var fieldset0_nodes = children(fieldset0);

			legend0 = claim_element(fieldset0_nodes, "LEGEND", {}, false);
			var legend0_nodes = children(legend0);

			t6 = claim_text(legend0_nodes, "Size");
			legend0_nodes.forEach(detach);
			t7 = claim_text(fieldset0_nodes, "\n                ");

			input2 = claim_element(fieldset0_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);

			label2 = claim_element(fieldset0_nodes, "LABEL", { for: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "S");
			label2_nodes.forEach(detach);
			t9 = claim_text(fieldset0_nodes, "\n                ");

			input3 = claim_element(fieldset0_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);

			label3 = claim_element(fieldset0_nodes, "LABEL", { for: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "M");
			label3_nodes.forEach(detach);
			t11 = claim_text(fieldset0_nodes, "\n                ");

			input4 = claim_element(fieldset0_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);

			label4 = claim_element(fieldset0_nodes, "LABEL", { for: true }, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "L");
			label4_nodes.forEach(detach);
			t13 = claim_text(fieldset0_nodes, "\n                ");

			input5 = claim_element(fieldset0_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);

			label5 = claim_element(fieldset0_nodes, "LABEL", { for: true }, false);
			var label5_nodes = children(label5);

			t14 = claim_text(label5_nodes, "XL");
			label5_nodes.forEach(detach);
			fieldset0_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n    \n        ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			fieldset1 = claim_element(div4_nodes, "FIELDSET", {}, false);
			var fieldset1_nodes = children(fieldset1);

			legend1 = claim_element(fieldset1_nodes, "LEGEND", {}, false);
			var legend1_nodes = children(legend1);

			t16 = claim_text(legend1_nodes, "Available in store");
			legend1_nodes.forEach(detach);
			t17 = claim_text(fieldset1_nodes, "\n                ");

			input6 = claim_element(fieldset1_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);

			label6 = claim_element(fieldset1_nodes, "LABEL", { for: true }, false);
			var label6_nodes = children(label6);

			t18 = claim_text(label6_nodes, "Yes");
			label6_nodes.forEach(detach);
			t19 = claim_text(fieldset1_nodes, "\n                ");

			input7 = claim_element(fieldset1_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);

			label7 = claim_element(fieldset1_nodes, "LABEL", { for: true }, false);
			var label7_nodes = children(label7);

			t20 = claim_text(label7_nodes, "No");
			label7_nodes.forEach(detach);
			fieldset1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n\n        ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			button = claim_element(div5_nodes, "BUTTON", { type: true, class: true, name: true, value: true }, false);
			var button_nodes = children(button);

			t22 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 5, 16, 197);
			add_location(label0, file, 3, 12, 144);
			div0.className = "grid-x grid-padding-x";
			add_location(div0, file, 2, 8, 96);
			span.className = "input-group-label";
			add_location(span, file, 12, 20, 399);
			input1.className = "input-group-field";
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 13, 20, 460);
			div1.className = "input-group";
			add_location(div1, file, 11, 16, 353);
			add_location(label1, file, 10, 12, 324);
			div2.className = "grid-x grid-padding-x";
			add_location(div2, file, 9, 8, 276);
			add_location(legend0, file, 20, 16, 668);
			attr(input2, "type", "checkbox");
			input2.id = "sCheckbox";
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 21, 16, 706);
			label2.htmlFor = "sCheckbox";
			add_location(label2, file, 21, 80, 770);
			attr(input3, "type", "checkbox");
			input3.id = "mCheckbox";
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 22, 16, 819);
			label3.htmlFor = "mCheckbox";
			add_location(label3, file, 22, 80, 883);
			attr(input4, "type", "checkbox");
			input4.id = "lCheckbox";
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 23, 16, 932);
			label4.htmlFor = "lCheckbox";
			add_location(label4, file, 23, 80, 996);
			attr(input5, "type", "checkbox");
			input5.id = "xlCheckbox";
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 24, 16, 1045);
			label5.htmlFor = "xlCheckbox";
			add_location(label5, file, 24, 82, 1111);
			add_location(fieldset0, file, 19, 12, 641);
			div3.className = "grid-x grid-padding-x";
			add_location(div3, file, 18, 8, 593);
			add_location(legend1, file, 30, 16, 1273);
			attr(input6, "type", "radio");
			input6.id = "yesRadio";
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 31, 16, 1325);
			label6.htmlFor = "yesRadio";
			add_location(label6, file, 31, 84, 1393);
			attr(input7, "type", "radio");
			input7.id = "noRadio";
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 32, 16, 1443);
			label7.htmlFor = "noRadio";
			add_location(label7, file, 32, 82, 1509);
			add_location(fieldset1, file, 29, 12, 1246);
			div4.className = "grid-x grid-padding-x";
			add_location(div4, file, 28, 8, 1198);
			button.type = "submit";
			button.className = "button";
			button.name = "signup";
			button.value = "Sign up";
			add_location(button, file, 37, 12, 1637);
			div5.className = "grid-x grid-padding-x";
			add_location(div5, file, 36, 8, 1589);
			form.id = "demoForm";
			form.className = "fv-stacked-form";
			add_location(form, file, 1, 4, 43);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div0);
			append(div0, label0);
			append(label0, t0);
			append(label0, input0);
			append(form, t1);
			append(form, div2);
			append(div2, label1);
			append(label1, t2);
			append(label1, div1);
			append(div1, span);
			append(span, t3);
			append(div1, t4);
			append(div1, input1);
			append(form, t5);
			append(form, div3);
			append(div3, fieldset0);
			append(fieldset0, legend0);
			append(legend0, t6);
			append(fieldset0, t7);
			append(fieldset0, input2);
			append(fieldset0, label2);
			append(label2, t8);
			append(fieldset0, t9);
			append(fieldset0, input3);
			append(fieldset0, label3);
			append(label3, t10);
			append(fieldset0, t11);
			append(fieldset0, input4);
			append(fieldset0, label4);
			append(label4, t12);
			append(fieldset0, t13);
			append(fieldset0, input5);
			append(fieldset0, label5);
			append(label5, t14);
			append(form, t15);
			append(form, div4);
			append(div4, fieldset1);
			append(fieldset1, legend1);
			append(legend1, t16);
			append(fieldset1, t17);
			append(fieldset1, input6);
			append(fieldset1, label6);
			append(label6, t18);
			append(fieldset1, t19);
			append(fieldset1, input7);
			append(fieldset1, label7);
			append(label7, t20);
			append(form, t21);
			append(form, div5);
			append(div5, button);
			append(button, t22);
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

	var foundationlayout = new FoundationLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			foundationlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			foundationlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(foundationlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var foundationlayout_changes = {};
			if (changed.onLoaded) foundationlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) foundationlayout_changes.$$scope = { changed, ctx };
			foundationlayout.$set(foundationlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			foundationlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			foundationlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			foundationlayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
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
            foundation: new Foundation(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/foundation/stacked-form/foundation',
                sampleCode: sampleCode,
            }),
        },
    }));
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Foundation_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Foundation_1;

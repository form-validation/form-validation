import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
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
    <form id="demoForm" method="POST">
        <div class="grid-x grid-padding-x">
            <div class="small-3 cell">
                <label class="text-right middle">Product name</label>
            </div>
            <div class="small-4 cell">
                <input type="text" name="name" />
            </div>
        </div>

        <div class="grid-x grid-padding-x">
            <div class="small-3 cell">
                <label class="text-right middle">Price</label>
            </div>
            <div class="small-4 cell">
                <div class="input-group">
                    <span class="input-group-label">$</span>
                    <input class="input-group-field" type="text" name="price" />
                </div>
            </div>
        </div>

        <div class="grid-x grid-padding-x">
            <div class="small-3 cell">
                <label class="text-right">Size</label>
            </div>
            <div class="small-6 cell">
                <input type="checkbox" id="sCheckbox" name="size[]" value="s" /><label for="sCheckbox">S</label>
                <input type="checkbox" id="mCheckbox" name="size[]" value="m" /><label for="mCheckbox">M</label>
                <input type="checkbox" id="lCheckbox" name="size[]" value="l" /><label for="lCheckbox">L</label>
                <input type="checkbox" id="xlCheckbox" name="size[]" value="xl" /><label for="xlCheckbox">XL</label>
            </div>
        </div>

        <div class="grid-x grid-padding-x">
            <div class="small-3 cell">
                <label class="text-right">Available in store</label>
            </div>
            <div class="small-6 cell">
                <input type="radio" id="yesRadio" name="availability" value="yes" /><label for="yesRadio">Yes</label>
                <input type="radio" id="noRadio" name="availability" value="no" /><label for="noRadio">No</label>
            </div>
        </div>

        <div class="grid-x grid-padding-x">
            <div class="small-9 small-offset-3 cell">
                <button type="submit" class="button" name="signup" value="Sign up">Submit</button>
            </div>
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

/* src/routes/guide/plugins/foundation/horizontal-form/Foundation.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/foundation/horizontal-form/Foundation.svelte";

// (1:0) <FoundationLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, div0, label0, t0, t1, div1, input0, t2, div6, div3, label1, t3, t4, div5, div4, span, t5, t6, input1, t7, div9, div7, label2, t8, t9, div8, input2, label3, t10, t11, input3, label4, t12, t13, input4, label5, t14, t15, input5, label6, t16, t17, div12, div10, label7, t18, t19, div11, input6, label8, t20, t21, input7, label9, t22, t23, div14, div13, button, t24;

	return {
		c: function create() {
			form = element("form");
			div2 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Product name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div6 = element("div");
			div3 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div5 = element("div");
			div4 = element("div");
			span = element("span");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div9 = element("div");
			div7 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div8 = element("div");
			input2 = element("input");
			label3 = element("label");
			t10 = text("S");
			t11 = space();
			input3 = element("input");
			label4 = element("label");
			t12 = text("M");
			t13 = space();
			input4 = element("input");
			label5 = element("label");
			t14 = text("L");
			t15 = space();
			input5 = element("input");
			label6 = element("label");
			t16 = text("XL");
			t17 = space();
			div12 = element("div");
			div10 = element("div");
			label7 = element("label");
			t18 = text("Available in store");
			t19 = space();
			div11 = element("div");
			input6 = element("input");
			label8 = element("label");
			t20 = text("Yes");
			t21 = space();
			input7 = element("input");
			label9 = element("label");
			t22 = text("No");
			t23 = space();
			div14 = element("div");
			div13 = element("div");
			button = element("button");
			t24 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div3 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			span = claim_element(div4_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			t6 = claim_text(div4_nodes, "\n                    ");

			input1 = claim_element(div4_nodes, "INPUT", { class: true, type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label2 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t9 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input2 = claim_element(div8_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);

			label3 = claim_element(div8_nodes, "LABEL", { for: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "S");
			label3_nodes.forEach(detach);
			t11 = claim_text(div8_nodes, "\n                ");

			input3 = claim_element(div8_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);

			label4 = claim_element(div8_nodes, "LABEL", { for: true }, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "M");
			label4_nodes.forEach(detach);
			t13 = claim_text(div8_nodes, "\n                ");

			input4 = claim_element(div8_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);

			label5 = claim_element(div8_nodes, "LABEL", { for: true }, false);
			var label5_nodes = children(label5);

			t14 = claim_text(label5_nodes, "L");
			label5_nodes.forEach(detach);
			t15 = claim_text(div8_nodes, "\n                ");

			input5 = claim_element(div8_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);

			label6 = claim_element(div8_nodes, "LABEL", { for: true }, false);
			var label6_nodes = children(label6);

			t16 = claim_text(label6_nodes, "XL");
			label6_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n    \n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label7 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t18 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t19 = claim_text(div12_nodes, "\n            ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input6 = claim_element(div11_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);

			label8 = claim_element(div11_nodes, "LABEL", { for: true }, false);
			var label8_nodes = children(label8);

			t20 = claim_text(label8_nodes, "Yes");
			label8_nodes.forEach(detach);
			t21 = claim_text(div11_nodes, "\n                ");

			input7 = claim_element(div11_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);

			label9 = claim_element(div11_nodes, "LABEL", { for: true }, false);
			var label9_nodes = children(label9);

			t22 = claim_text(label9_nodes, "No");
			label9_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div14 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			button = claim_element(div13_nodes, "BUTTON", { type: true, class: true, name: true, value: true }, false);
			var button_nodes = children(button);

			t24 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "text-right middle";
			add_location(label0, file, 4, 16, 177);
			div0.className = "small-3 cell";
			add_location(div0, file, 3, 12, 134);
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 7, 16, 305);
			div1.className = "small-4 cell";
			add_location(div1, file, 6, 12, 262);
			div2.className = "grid-x grid-padding-x";
			add_location(div2, file, 2, 8, 86);
			label1.className = "text-right middle";
			add_location(label1, file, 13, 16, 473);
			div3.className = "small-3 cell";
			add_location(div3, file, 12, 12, 430);
			span.className = "input-group-label";
			add_location(span, file, 17, 20, 640);
			input1.className = "input-group-field";
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 18, 20, 701);
			div4.className = "input-group";
			add_location(div4, file, 16, 16, 594);
			div5.className = "small-4 cell";
			add_location(div5, file, 15, 12, 551);
			div6.className = "grid-x grid-padding-x";
			add_location(div6, file, 11, 8, 382);
			label2.className = "text-right";
			add_location(label2, file, 25, 16, 923);
			div7.className = "small-3 cell";
			add_location(div7, file, 24, 12, 880);
			attr(input2, "type", "checkbox");
			input2.id = "sCheckbox";
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 28, 16, 1036);
			label3.htmlFor = "sCheckbox";
			add_location(label3, file, 28, 80, 1100);
			attr(input3, "type", "checkbox");
			input3.id = "mCheckbox";
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 29, 16, 1149);
			label4.htmlFor = "mCheckbox";
			add_location(label4, file, 29, 80, 1213);
			attr(input4, "type", "checkbox");
			input4.id = "lCheckbox";
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 30, 16, 1262);
			label5.htmlFor = "lCheckbox";
			add_location(label5, file, 30, 80, 1326);
			attr(input5, "type", "checkbox");
			input5.id = "xlCheckbox";
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 31, 16, 1375);
			label6.htmlFor = "xlCheckbox";
			add_location(label6, file, 31, 82, 1441);
			div8.className = "small-6 cell";
			add_location(div8, file, 27, 12, 993);
			div9.className = "grid-x grid-padding-x";
			add_location(div9, file, 23, 8, 832);
			label7.className = "text-right";
			add_location(label7, file, 37, 16, 1614);
			div10.className = "small-3 cell";
			add_location(div10, file, 36, 12, 1571);
			attr(input6, "type", "radio");
			input6.id = "yesRadio";
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 40, 16, 1741);
			label8.htmlFor = "yesRadio";
			add_location(label8, file, 40, 84, 1809);
			attr(input7, "type", "radio");
			input7.id = "noRadio";
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 41, 16, 1859);
			label9.htmlFor = "noRadio";
			add_location(label9, file, 41, 82, 1925);
			div11.className = "small-6 cell";
			add_location(div11, file, 39, 12, 1698);
			div12.className = "grid-x grid-padding-x";
			add_location(div12, file, 35, 8, 1523);
			button.type = "submit";
			button.className = "button";
			button.name = "signup";
			button.value = "Sign up";
			add_location(button, file, 47, 16, 2106);
			div13.className = "small-9 small-offset-3 cell";
			add_location(div13, file, 46, 12, 2048);
			div14.className = "grid-x grid-padding-x";
			add_location(div14, file, 45, 8, 2000);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 43);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div2);
			append(div2, div0);
			append(div0, label0);
			append(label0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div6);
			append(div6, div3);
			append(div3, label1);
			append(label1, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, div4);
			append(div4, span);
			append(span, t5);
			append(div4, t6);
			append(div4, input1);
			append(form, t7);
			append(form, div9);
			append(div9, div7);
			append(div7, label2);
			append(label2, t8);
			append(div9, t9);
			append(div9, div8);
			append(div8, input2);
			append(div8, label3);
			append(label3, t10);
			append(div8, t11);
			append(div8, input3);
			append(div8, label4);
			append(label4, t12);
			append(div8, t13);
			append(div8, input4);
			append(div8, label5);
			append(label5, t14);
			append(div8, t15);
			append(div8, input5);
			append(div8, label6);
			append(label6, t16);
			append(form, t17);
			append(form, div12);
			append(div12, div10);
			append(div10, label7);
			append(label7, t18);
			append(div12, t19);
			append(div12, div11);
			append(div11, input6);
			append(div11, label8);
			append(label8, t20);
			append(div11, t21);
			append(div11, input7);
			append(div11, label9);
			append(label9, t22);
			append(form, t23);
			append(form, div14);
			append(div14, div13);
			append(div13, button);
			append(button, t24);
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
                sender: '/guide/plugins/foundation/horizontal-form/foundation',
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

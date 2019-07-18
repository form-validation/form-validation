import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as SpectreLayout, b as Spectre } from './chunk.371c6257.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre.min.css">
    <!-- To use with the Icon plugin -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre-icons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <label class="form-label">Product name</label>
            <div class="has-icon-right">
                <input type="text" class="form-input" name="name" />
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Price</label>
            <div class="input-group has-icon-right">
                <span class="input-group-addon">$</span>
                <input type="text" class="form-input" name="price" />
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Size</label>
            <div>
                <label class="form-checkbox">
                    <input type="checkbox" name="size[]" value="s" />
                    <i class="form-icon"></i> S
                </label>
            </div>
            <div>
                <label class="form-checkbox">
                    <input type="checkbox" name="size[]" value="m" />
                    <i class="form-icon"></i> M
                </label>
            </div>
            <div>
                <label class="form-checkbox">
                    <input type="checkbox" name="size[]" value="l" />
                    <i class="form-icon"></i> L
                </label>
            </div>
            <div>
                <label class="form-checkbox">
                    <input type="checkbox" name="size[]" value="xl" />
                    <i class="form-icon"></i> XL
                </label>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Available in store</label>
            <div>
                <label class="form-radio">
                    <input type="radio" name="availability" value="yes" />
                    <i class="form-icon"></i> Yes
                </label>
            </div>
            <div>
                <label class="form-radio">
                    <input type="radio" name="availability" value="no" />
                    <i class="form-icon"></i> No
                </label>
            </div>
        </div>

        <div class="form-group">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Spectre.min.js"></script-tag>

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
                spectre: new FormValidation.plugins.Spectre(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'form-icon icon icon-check',
                    invalid: 'form-icon icon icon-cross',
                    validating: 'form-icon loading',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/spectre/stacked-form/Spectre.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/spectre/stacked-form/Spectre.svelte";

// (1:0) <SpectreLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div3, label1, t3, t4, div2, span, t5, t6, input1, t7, div8, label2, t8, t9, div4, label3, input2, t10, i0, t11, t12, div5, label4, input3, t13, i1, t14, t15, div6, label5, input4, t16, i2, t17, t18, div7, label6, input5, t19, i3, t20, t21, div11, label7, t22, t23, div9, label8, input6, t24, i4, t25, t26, div10, label9, input7, t27, i5, t28, t29, div12, button, t30;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			t0 = text("Product name");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div2 = element("div");
			span = element("span");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div8 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div4 = element("div");
			label3 = element("label");
			input2 = element("input");
			t10 = space();
			i0 = element("i");
			t11 = text(" S");
			t12 = space();
			div5 = element("div");
			label4 = element("label");
			input3 = element("input");
			t13 = space();
			i1 = element("i");
			t14 = text(" M");
			t15 = space();
			div6 = element("div");
			label5 = element("label");
			input4 = element("input");
			t16 = space();
			i2 = element("i");
			t17 = text(" L");
			t18 = space();
			div7 = element("div");
			label6 = element("label");
			input5 = element("input");
			t19 = space();
			i3 = element("i");
			t20 = text(" XL");
			t21 = space();
			div11 = element("div");
			label7 = element("label");
			t22 = text("Available in store");
			t23 = space();
			div9 = element("div");
			label8 = element("label");
			input6 = element("input");
			t24 = space();
			i4 = element("i");
			t25 = text(" Yes");
			t26 = space();
			div10 = element("div");
			label9 = element("label");
			input7 = element("input");
			t27 = space();
			i5 = element("i");
			t28 = text(" No");
			t29 = space();
			div12 = element("div");
			button = element("button");
			t30 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n            ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			t4 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			span = claim_element(div2_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			t6 = claim_text(div2_nodes, "\n                ");

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label2 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t9 = claim_text(div8_nodes, "\n            ");

			div4 = claim_element(div8_nodes, "DIV", {}, false);
			var div4_nodes = children(div4);

			label3 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(label3_nodes, "\n                    ");

			i0 = claim_element(label3_nodes, "I", { class: true }, false);
			var i0_nodes = children(i0);

			i0_nodes.forEach(detach);
			t11 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t12 = claim_text(div8_nodes, "\n            ");

			div5 = claim_element(div8_nodes, "DIV", {}, false);
			var div5_nodes = children(div5);

			label4 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t13 = claim_text(label4_nodes, "\n                    ");

			i1 = claim_element(label4_nodes, "I", { class: true }, false);
			var i1_nodes = children(i1);

			i1_nodes.forEach(detach);
			t14 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t15 = claim_text(div8_nodes, "\n            ");

			div6 = claim_element(div8_nodes, "DIV", {}, false);
			var div6_nodes = children(div6);

			label5 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t16 = claim_text(label5_nodes, "\n                    ");

			i2 = claim_element(label5_nodes, "I", { class: true }, false);
			var i2_nodes = children(i2);

			i2_nodes.forEach(detach);
			t17 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t18 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", {}, false);
			var div7_nodes = children(div7);

			label6 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t19 = claim_text(label6_nodes, "\n                    ");

			i3 = claim_element(label6_nodes, "I", { class: true }, false);
			var i3_nodes = children(i3);

			i3_nodes.forEach(detach);
			t20 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label7 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t23 = claim_text(div11_nodes, "\n            ");

			div9 = claim_element(div11_nodes, "DIV", {}, false);
			var div9_nodes = children(div9);

			label8 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t24 = claim_text(label8_nodes, "\n                    ");

			i4 = claim_element(label8_nodes, "I", { class: true }, false);
			var i4_nodes = children(i4);

			i4_nodes.forEach(detach);
			t25 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t26 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", {}, false);
			var div10_nodes = children(div10);

			label9 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t27 = claim_text(label9_nodes, "\n                    ");

			i5 = claim_element(label9_nodes, "I", { class: true }, false);
			var i5_nodes = children(i5);

			i5_nodes.forEach(detach);
			t28 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n    \n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			button = claim_element(div12_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t30 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "form-label";
			add_location(label0, file, 3, 12, 120);
			attr(input0, "type", "text");
			input0.className = "form-input";
			input0.name = "name";
			add_location(input0, file, 5, 16, 224);
			div0.className = "has-icon-right";
			add_location(div0, file, 4, 12, 179);
			div1.className = "form-group";
			add_location(div1, file, 2, 8, 83);
			label1.className = "form-label";
			add_location(label1, file, 10, 12, 361);
			span.className = "input-group-addon";
			add_location(span, file, 12, 16, 470);
			attr(input1, "type", "text");
			input1.className = "form-input";
			input1.name = "price";
			add_location(input1, file, 13, 16, 527);
			div2.className = "input-group has-icon-right";
			add_location(div2, file, 11, 12, 413);
			div3.className = "form-group";
			add_location(div3, file, 9, 8, 324);
			label2.className = "form-label";
			add_location(label2, file, 18, 12, 665);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 21, 20, 788);
			i0.className = "form-icon";
			add_location(i0, file, 22, 20, 858);
			label3.className = "form-checkbox";
			add_location(label3, file, 20, 16, 738);
			add_location(div4, file, 19, 12, 716);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 27, 20, 1014);
			i1.className = "form-icon";
			add_location(i1, file, 28, 20, 1084);
			label4.className = "form-checkbox";
			add_location(label4, file, 26, 16, 964);
			add_location(div5, file, 25, 12, 942);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 33, 20, 1240);
			i2.className = "form-icon";
			add_location(i2, file, 34, 20, 1310);
			label5.className = "form-checkbox";
			add_location(label5, file, 32, 16, 1190);
			add_location(div6, file, 31, 12, 1168);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 39, 20, 1466);
			i3.className = "form-icon";
			add_location(i3, file, 40, 20, 1537);
			label6.className = "form-checkbox";
			add_location(label6, file, 38, 16, 1416);
			add_location(div7, file, 37, 12, 1394);
			div8.className = "form-group";
			add_location(div8, file, 17, 8, 628);
			label7.className = "form-label";
			add_location(label7, file, 46, 12, 1675);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 49, 20, 1809);
			i4.className = "form-icon";
			add_location(i4, file, 50, 20, 1884);
			label8.className = "form-radio";
			add_location(label8, file, 48, 16, 1762);
			add_location(div9, file, 47, 12, 1740);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 55, 20, 2039);
			i5.className = "form-icon";
			add_location(i5, file, 56, 20, 2113);
			label9.className = "form-radio";
			add_location(label9, file, 54, 16, 1992);
			add_location(div10, file, 53, 12, 1970);
			div11.className = "form-group";
			add_location(div11, file, 45, 8, 1638);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 63, 12, 2334);
			div12.className = "form-group";
			add_location(div12, file, 61, 8, 2214);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 40);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label0);
			append(label0, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, input0);
			append(form, t2);
			append(form, div3);
			append(div3, label1);
			append(label1, t3);
			append(div3, t4);
			append(div3, div2);
			append(div2, span);
			append(span, t5);
			append(div2, t6);
			append(div2, input1);
			append(form, t7);
			append(form, div8);
			append(div8, label2);
			append(label2, t8);
			append(div8, t9);
			append(div8, div4);
			append(div4, label3);
			append(label3, input2);
			append(label3, t10);
			append(label3, i0);
			append(label3, t11);
			append(div8, t12);
			append(div8, div5);
			append(div5, label4);
			append(label4, input3);
			append(label4, t13);
			append(label4, i1);
			append(label4, t14);
			append(div8, t15);
			append(div8, div6);
			append(div6, label5);
			append(label5, input4);
			append(label5, t16);
			append(label5, i2);
			append(label5, t17);
			append(div8, t18);
			append(div8, div7);
			append(div7, label6);
			append(label6, input5);
			append(label6, t19);
			append(label6, i3);
			append(label6, t20);
			append(form, t21);
			append(form, div11);
			append(div11, label7);
			append(label7, t22);
			append(div11, t23);
			append(div11, div9);
			append(div9, label8);
			append(label8, input6);
			append(label8, t24);
			append(label8, i4);
			append(label8, t25);
			append(div11, t26);
			append(div11, div10);
			append(div10, label9);
			append(label9, input7);
			append(label9, t27);
			append(label9, i5);
			append(label9, t28);
			append(form, t29);
			append(form, div12);
			append(div12, button);
			append(button, t30);
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

	var spectrelayout = new SpectreLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			spectrelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			spectrelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(spectrelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var spectrelayout_changes = {};
			if (changed.onLoaded) spectrelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) spectrelayout_changes.$$scope = { changed, ctx };
			spectrelayout.$set(spectrelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			spectrelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			spectrelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			spectrelayout.$destroy(detaching);
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
            spectre: new Spectre(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'form-icon icon icon-check',
                invalid: 'form-icon icon icon-cross',
                validating: 'form-icon loading',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/spectre/stacked-form/spectre',
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

class Spectre_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Spectre_1;

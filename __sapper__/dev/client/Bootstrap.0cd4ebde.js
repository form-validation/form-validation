import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Product name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Price</label>
            <div class="col-sm-5">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" name="price" />
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Size</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="s" />
                    <label class="form-check-label">S</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="m" />
                    <label class="form-check-label">M</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="l" />
                    <label class="form-check-label">L</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="xl" />
                    <label class="form-check-label">XL</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Available in store</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="availability" value="yes" />
                    <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="availability" value="no" />
                    <label class="form-check-label">No</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Add product</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

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
                bootstrap: new FormValidation.plugins.Bootstrap(),
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

/* src/routes/guide/plugins/bootstrap/horizontal-form/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bootstrap/horizontal-form/Bootstrap.svelte";

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div5, label1, t3, t4, div4, div3, div2, span, t5, t6, input1, t7, div11, label2, t8, t9, div10, div6, input2, t10, label3, t11, t12, div7, input3, t13, label4, t14, t15, div8, input4, t16, label5, t17, t18, div9, input5, t19, label6, t20, t21, div15, label7, t22, t23, div14, div12, input6, t24, label8, t25, t26, div13, input7, t27, label9, t28, t29, div17, div16, button, t30;

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
			div5 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			span = element("span");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div11 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div10 = element("div");
			div6 = element("div");
			input2 = element("input");
			t10 = space();
			label3 = element("label");
			t11 = text("S");
			t12 = space();
			div7 = element("div");
			input3 = element("input");
			t13 = space();
			label4 = element("label");
			t14 = text("M");
			t15 = space();
			div8 = element("div");
			input4 = element("input");
			t16 = space();
			label5 = element("label");
			t17 = text("L");
			t18 = space();
			div9 = element("div");
			input5 = element("input");
			t19 = space();
			label6 = element("label");
			t20 = text("XL");
			t21 = space();
			div15 = element("div");
			label7 = element("label");
			t22 = text("Available in store");
			t23 = space();
			div14 = element("div");
			div12 = element("div");
			input6 = element("input");
			t24 = space();
			label8 = element("label");
			t25 = text("Yes");
			t26 = space();
			div13 = element("div");
			input7 = element("input");
			t27 = space();
			label9 = element("label");
			t28 = text("No");
			t29 = space();
			div17 = element("div");
			div16 = element("div");
			button = element("button");
			t30 = text("Add product");
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

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label1 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			t4 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			span = claim_element(div2_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t6 = claim_text(div3_nodes, "\n                    ");

			input1 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label2 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t9 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div6 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input2 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(div6_nodes, "\n                    ");

			label3 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t11 = claim_text(label3_nodes, "S");
			label3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t12 = claim_text(div10_nodes, "\n                ");

			div7 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input3 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t13 = claim_text(div7_nodes, "\n                    ");

			label4 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t14 = claim_text(label4_nodes, "M");
			label4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t15 = claim_text(div10_nodes, "\n                ");

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input4 = claim_element(div8_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t16 = claim_text(div8_nodes, "\n                    ");

			label5 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t17 = claim_text(label5_nodes, "L");
			label5_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t18 = claim_text(div10_nodes, "\n                ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input5 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t19 = claim_text(div9_nodes, "\n                    ");

			label6 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t20 = claim_text(label6_nodes, "XL");
			label6_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label7 = claim_element(div15_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t23 = claim_text(div15_nodes, "\n            ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			input6 = claim_element(div12_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t24 = claim_text(div12_nodes, "\n                    ");

			label8 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			t25 = claim_text(label8_nodes, "Yes");
			label8_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t26 = claim_text(div14_nodes, "\n                ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			input7 = claim_element(div13_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t27 = claim_text(div13_nodes, "\n                    ");

			label9 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			t28 = claim_text(label9_nodes, "No");
			label9_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n    \n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			button = claim_element(div16_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t30 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-3 col-form-label";
			add_location(label0, file, 3, 12, 126);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "name";
			add_location(input0, file, 5, 16, 237);
			div0.className = "col-sm-4";
			add_location(div0, file, 4, 12, 198);
			div1.className = "form-group row";
			add_location(div1, file, 2, 8, 85);
			label1.className = "col-sm-3 col-form-label";
			add_location(label1, file, 10, 12, 380);
			span.className = "input-group-text";
			add_location(span, file, 14, 24, 588);
			div2.className = "input-group-prepend";
			add_location(div2, file, 13, 20, 530);
			attr(input1, "type", "text");
			input1.className = "form-control";
			input1.name = "price";
			add_location(input1, file, 16, 20, 675);
			div3.className = "input-group";
			add_location(div3, file, 12, 16, 484);
			div4.className = "col-sm-5";
			add_location(div4, file, 11, 12, 445);
			div5.className = "form-group row";
			add_location(div5, file, 9, 8, 339);
			label2.className = "col-sm-3 col-form-label";
			add_location(label2, file, 22, 12, 842);
			attr(input2, "type", "checkbox");
			input2.className = "form-check-input";
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 25, 20, 1008);
			label3.className = "form-check-label";
			add_location(label3, file, 26, 20, 1103);
			div6.className = "form-check form-check-inline";
			add_location(div6, file, 24, 16, 945);
			attr(input3, "type", "checkbox");
			input3.className = "form-check-input";
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 29, 20, 1247);
			label4.className = "form-check-label";
			add_location(label4, file, 30, 20, 1342);
			div7.className = "form-check form-check-inline";
			add_location(div7, file, 28, 16, 1184);
			attr(input4, "type", "checkbox");
			input4.className = "form-check-input";
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 33, 20, 1486);
			label5.className = "form-check-label";
			add_location(label5, file, 34, 20, 1581);
			div8.className = "form-check form-check-inline";
			add_location(div8, file, 32, 16, 1423);
			attr(input5, "type", "checkbox");
			input5.className = "form-check-input";
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 37, 20, 1725);
			label6.className = "form-check-label";
			add_location(label6, file, 38, 20, 1821);
			div9.className = "form-check form-check-inline";
			add_location(div9, file, 36, 16, 1662);
			div10.className = "col-sm-6";
			add_location(div10, file, 23, 12, 906);
			div11.className = "form-group row";
			add_location(div11, file, 21, 8, 801);
			label7.className = "col-sm-3 col-form-label";
			add_location(label7, file, 44, 12, 1975);
			attr(input6, "type", "radio");
			input6.className = "form-check-input";
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 47, 20, 2155);
			label8.className = "form-check-label";
			add_location(label8, file, 48, 20, 2255);
			div12.className = "form-check form-check-inline";
			add_location(div12, file, 46, 16, 2092);
			attr(input7, "type", "radio");
			input7.className = "form-check-input";
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 51, 20, 2401);
			label9.className = "form-check-label";
			add_location(label9, file, 52, 20, 2500);
			div13.className = "form-check form-check-inline";
			add_location(div13, file, 50, 16, 2338);
			div14.className = "col-sm-6";
			add_location(div14, file, 45, 12, 2053);
			div15.className = "form-group row";
			add_location(div15, file, 43, 8, 1934);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 60, 16, 2792);
			div16.className = "col-sm-9 offset-sm-3";
			add_location(div16, file, 58, 12, 2654);
			div17.className = "form-group row";
			add_location(div17, file, 57, 8, 2613);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 42);
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
			append(form, div5);
			append(div5, label1);
			append(label1, t3);
			append(div5, t4);
			append(div5, div4);
			append(div4, div3);
			append(div3, div2);
			append(div2, span);
			append(span, t5);
			append(div3, t6);
			append(div3, input1);
			append(form, t7);
			append(form, div11);
			append(div11, label2);
			append(label2, t8);
			append(div11, t9);
			append(div11, div10);
			append(div10, div6);
			append(div6, input2);
			append(div6, t10);
			append(div6, label3);
			append(label3, t11);
			append(div10, t12);
			append(div10, div7);
			append(div7, input3);
			append(div7, t13);
			append(div7, label4);
			append(label4, t14);
			append(div10, t15);
			append(div10, div8);
			append(div8, input4);
			append(div8, t16);
			append(div8, label5);
			append(label5, t17);
			append(div10, t18);
			append(div10, div9);
			append(div9, input5);
			append(div9, t19);
			append(div9, label6);
			append(label6, t20);
			append(form, t21);
			append(form, div15);
			append(div15, label7);
			append(label7, t22);
			append(div15, t23);
			append(div15, div14);
			append(div14, div12);
			append(div12, input6);
			append(div12, t24);
			append(div12, label8);
			append(label8, t25);
			append(div14, t26);
			append(div14, div13);
			append(div13, input7);
			append(div13, t27);
			append(div13, label9);
			append(label9, t28);
			append(form, t29);
			append(form, div17);
			append(div17, div16);
			append(div16, button);
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

	var bootstraplayout = new BootstrapLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstraplayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstraplayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstraplayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstraplayout_changes = {};
			if (changed.onLoaded) bootstraplayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bootstraplayout_changes.$$scope = { changed, ctx };
			bootstraplayout.$set(bootstraplayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstraplayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstraplayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstraplayout.$destroy(detaching);
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
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap/horizontal-form/bootstrap',
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

class Bootstrap_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap_1;

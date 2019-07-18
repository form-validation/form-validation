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
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Product name</label>
            </div>
            <div class="col-5">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="name" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Price</label>
            </div>
            <div class="col-5">
                <div class="input-group has-icon-right">
                    <span class="input-group-addon">$</span>
                    <input type="text" class="form-input" name="price" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Size</label>
            </div>
            <div class="col-6">
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
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Available in store</label>
            </div>
            <div class="col-6">
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
        </div>
    
        <div class="form-group">
            <div class="col-3"></div>
            <div class="col-9">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
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

/* src/routes/guide/plugins/spectre/horizontal-form/Spectre.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/spectre/horizontal-form/Spectre.svelte";

// (1:0) <SpectreLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div3, div0, label0, t0, t1, div2, div1, input0, t2, div7, div4, label1, t3, t4, div6, div5, span, t5, t6, input1, t7, div14, div8, label2, t8, t9, div13, div9, label3, input2, t10, i0, t11, t12, div10, label4, input3, t13, i1, t14, t15, div11, label5, input4, t16, i2, t17, t18, div12, label6, input5, t19, i3, t20, t21, div19, div15, label7, t22, t23, div18, div16, label8, input6, t24, i4, t25, t26, div17, label9, input7, t27, i5, t28, t29, div22, div20, t30, div21, button, t31;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Product name");
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div4 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div6 = element("div");
			div5 = element("div");
			span = element("span");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div14 = element("div");
			div8 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div13 = element("div");
			div9 = element("div");
			label3 = element("label");
			input2 = element("input");
			t10 = space();
			i0 = element("i");
			t11 = text(" S");
			t12 = space();
			div10 = element("div");
			label4 = element("label");
			input3 = element("input");
			t13 = space();
			i1 = element("i");
			t14 = text(" M");
			t15 = space();
			div11 = element("div");
			label5 = element("label");
			input4 = element("input");
			t16 = space();
			i2 = element("i");
			t17 = text(" L");
			t18 = space();
			div12 = element("div");
			label6 = element("label");
			input5 = element("input");
			t19 = space();
			i3 = element("i");
			t20 = text(" XL");
			t21 = space();
			div19 = element("div");
			div15 = element("div");
			label7 = element("label");
			t22 = text("Available in store");
			t23 = space();
			div18 = element("div");
			div16 = element("div");
			label8 = element("label");
			input6 = element("input");
			t24 = space();
			i4 = element("i");
			t25 = text(" Yes");
			t26 = space();
			div17 = element("div");
			label9 = element("label");
			input7 = element("input");
			t27 = space();
			i5 = element("i");
			t28 = text(" No");
			t29 = space();
			div22 = element("div");
			div20 = element("div");
			t30 = space();
			div21 = element("div");
			button = element("button");
			t31 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div4 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t4 = claim_text(div7_nodes, "\n            ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			span = claim_element(div5_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			t6 = claim_text(div5_nodes, "\n                    ");

			input1 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div14 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div8 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label2 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t9 = claim_text(div14_nodes, "\n            ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div9 = claim_element(div13_nodes, "DIV", {}, false);
			var div9_nodes = children(div9);

			label3 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(label3_nodes, "\n                        ");

			i0 = claim_element(label3_nodes, "I", { class: true }, false);
			var i0_nodes = children(i0);

			i0_nodes.forEach(detach);
			t11 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t12 = claim_text(div13_nodes, "\n                ");

			div10 = claim_element(div13_nodes, "DIV", {}, false);
			var div10_nodes = children(div10);

			label4 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t13 = claim_text(label4_nodes, "\n                        ");

			i1 = claim_element(label4_nodes, "I", { class: true }, false);
			var i1_nodes = children(i1);

			i1_nodes.forEach(detach);
			t14 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t15 = claim_text(div13_nodes, "\n                ");

			div11 = claim_element(div13_nodes, "DIV", {}, false);
			var div11_nodes = children(div11);

			label5 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t16 = claim_text(label5_nodes, "\n                        ");

			i2 = claim_element(label5_nodes, "I", { class: true }, false);
			var i2_nodes = children(i2);

			i2_nodes.forEach(detach);
			t17 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t18 = claim_text(div13_nodes, "\n                ");

			div12 = claim_element(div13_nodes, "DIV", {}, false);
			var div12_nodes = children(div12);

			label6 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t19 = claim_text(label6_nodes, "\n                        ");

			i3 = claim_element(label6_nodes, "I", { class: true }, false);
			var i3_nodes = children(i3);

			i3_nodes.forEach(detach);
			t20 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div15 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label7 = claim_element(div15_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t23 = claim_text(div19_nodes, "\n            ");

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div16 = claim_element(div18_nodes, "DIV", {}, false);
			var div16_nodes = children(div16);

			label8 = claim_element(div16_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t24 = claim_text(label8_nodes, "\n                        ");

			i4 = claim_element(label8_nodes, "I", { class: true }, false);
			var i4_nodes = children(i4);

			i4_nodes.forEach(detach);
			t25 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t26 = claim_text(div18_nodes, "\n                ");

			div17 = claim_element(div18_nodes, "DIV", {}, false);
			var div17_nodes = children(div17);

			label9 = claim_element(div17_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t27 = claim_text(label9_nodes, "\n                        ");

			i5 = claim_element(label9_nodes, "I", { class: true }, false);
			var i5_nodes = children(i5);

			i5_nodes.forEach(detach);
			t28 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n    \n        ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div20 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div20_nodes.forEach(detach);
			t30 = claim_text(div22_nodes, "\n            ");

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			button = claim_element(div21_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t31 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "form-label";
			add_location(label0, file, 4, 16, 180);
			div0.className = "col-3";
			add_location(div0, file, 3, 12, 144);
			attr(input0, "type", "text");
			input0.className = "form-input";
			input0.name = "name";
			add_location(input0, file, 8, 20, 343);
			div1.className = "has-icon-right";
			add_location(div1, file, 7, 16, 294);
			div2.className = "col-5";
			add_location(div2, file, 6, 12, 258);
			div3.className = "form-group";
			add_location(div3, file, 2, 8, 107);
			label1.className = "form-label";
			add_location(label1, file, 15, 16, 539);
			div4.className = "col-3";
			add_location(div4, file, 14, 12, 503);
			span.className = "input-group-addon";
			add_location(span, file, 19, 20, 707);
			attr(input1, "type", "text");
			input1.className = "form-input";
			input1.name = "price";
			add_location(input1, file, 20, 20, 768);
			div5.className = "input-group has-icon-right";
			add_location(div5, file, 18, 16, 646);
			div6.className = "col-5";
			add_location(div6, file, 17, 12, 610);
			div7.className = "form-group";
			add_location(div7, file, 13, 8, 466);
			label2.className = "form-label";
			add_location(label2, file, 27, 16, 965);
			div8.className = "col-3";
			add_location(div8, file, 26, 12, 929);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 32, 24, 1151);
			i0.className = "form-icon";
			add_location(i0, file, 33, 24, 1225);
			label3.className = "form-checkbox";
			add_location(label3, file, 31, 20, 1097);
			add_location(div9, file, 30, 16, 1071);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 38, 24, 1401);
			i1.className = "form-icon";
			add_location(i1, file, 39, 24, 1475);
			label4.className = "form-checkbox";
			add_location(label4, file, 37, 20, 1347);
			add_location(div10, file, 36, 16, 1321);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 44, 24, 1651);
			i2.className = "form-icon";
			add_location(i2, file, 45, 24, 1725);
			label5.className = "form-checkbox";
			add_location(label5, file, 43, 20, 1597);
			add_location(div11, file, 42, 16, 1571);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 50, 24, 1901);
			i3.className = "form-icon";
			add_location(i3, file, 51, 24, 1976);
			label6.className = "form-checkbox";
			add_location(label6, file, 49, 20, 1847);
			add_location(div12, file, 48, 16, 1821);
			div13.className = "col-6";
			add_location(div13, file, 29, 12, 1035);
			div14.className = "form-group";
			add_location(div14, file, 25, 8, 892);
			label7.className = "form-label";
			add_location(label7, file, 59, 16, 2177);
			div15.className = "col-3";
			add_location(div15, file, 58, 12, 2141);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 64, 24, 2374);
			i4.className = "form-icon";
			add_location(i4, file, 65, 24, 2453);
			label8.className = "form-radio";
			add_location(label8, file, 63, 20, 2323);
			add_location(div16, file, 62, 16, 2297);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 70, 24, 2628);
			i5.className = "form-icon";
			add_location(i5, file, 71, 24, 2706);
			label9.className = "form-radio";
			add_location(label9, file, 69, 20, 2577);
			add_location(div17, file, 68, 16, 2551);
			div18.className = "col-6";
			add_location(div18, file, 61, 12, 2261);
			div19.className = "form-group";
			add_location(div19, file, 57, 8, 2104);
			div20.className = "col-3";
			add_location(div20, file, 78, 12, 2871);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 81, 16, 3032);
			div21.className = "col-9";
			add_location(div21, file, 79, 12, 2909);
			div22.className = "form-group";
			add_location(div22, file, 77, 8, 2834);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "form-horizontal";
			add_location(form, file, 1, 4, 40);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div0);
			append(div0, label0);
			append(label0, t0);
			append(div3, t1);
			append(div3, div2);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div7);
			append(div7, div4);
			append(div4, label1);
			append(label1, t3);
			append(div7, t4);
			append(div7, div6);
			append(div6, div5);
			append(div5, span);
			append(span, t5);
			append(div5, t6);
			append(div5, input1);
			append(form, t7);
			append(form, div14);
			append(div14, div8);
			append(div8, label2);
			append(label2, t8);
			append(div14, t9);
			append(div14, div13);
			append(div13, div9);
			append(div9, label3);
			append(label3, input2);
			append(label3, t10);
			append(label3, i0);
			append(label3, t11);
			append(div13, t12);
			append(div13, div10);
			append(div10, label4);
			append(label4, input3);
			append(label4, t13);
			append(label4, i1);
			append(label4, t14);
			append(div13, t15);
			append(div13, div11);
			append(div11, label5);
			append(label5, input4);
			append(label5, t16);
			append(label5, i2);
			append(label5, t17);
			append(div13, t18);
			append(div13, div12);
			append(div12, label6);
			append(label6, input5);
			append(label6, t19);
			append(label6, i3);
			append(label6, t20);
			append(form, t21);
			append(form, div19);
			append(div19, div15);
			append(div15, label7);
			append(label7, t22);
			append(div19, t23);
			append(div19, div18);
			append(div18, div16);
			append(div16, label8);
			append(label8, input6);
			append(label8, t24);
			append(label8, i4);
			append(label8, t25);
			append(div18, t26);
			append(div18, div17);
			append(div17, label9);
			append(label9, input7);
			append(label9, t27);
			append(label9, i5);
			append(label9, t28);
			append(form, t29);
			append(form, div22);
			append(div22, div20);
			append(div22, t30);
			append(div22, div21);
			append(div21, button);
			append(button, t31);
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
                sender: '/guide/plugins/spectre/horizontal-form/spectre',
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

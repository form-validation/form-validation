import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as SemanticLayout, b as Semantic } from './chunk.0df549dd.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="ui form">
        <div class="fields">
            <label class="four wide field">Product name</label>
            <div class="six wide field">
                <!--
                When using feedback icon, the input must place inside 'ui input icon' element
                <div class="ui input icon">
                    <input type="text" />
                </div>
                See http://semantic-ui.com/elements/input.html#icon
                -->
                <div class="ui input icon">
                    <input type="text" name="name" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field">Price</label>
            <div class="six wide field">
                <div class="ui labeled input icon">
                    <div class="ui label">$</div>
                    <input type="text" name="price" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field">Size</label>
            <div class="six wide field">
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="s" />
                        <label>S</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="m" />
                        <label>M</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="l" />
                        <label>L</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="xl" />
                        <label>XL</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field">Available in store</label>
            <div class="six wide field">
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="availability" value="yes" />
                        <label>Yes</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="availability" value="no" />
                        <label>No</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field"></label>
            <div class="six wide field">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="ui primary button">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Semantic.min.js"></script-tag>

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
                semantic: new FormValidation.plugins.Semantic(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'checkmark icon',
                    invalid: 'remove icon',
                    validating: 'refresh icon',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/semantic/horizontal-form/Semantic.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/semantic/horizontal-form/Semantic.svelte";

// (13:0) <SemanticLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, label0, t0, t1, div1, div0, input0, t2, div6, label1, t3, t4, div5, div4, div3, t5, t6, input1, t7, div16, label2, t8, t9, div15, div8, div7, input2, t10, label3, t11, t12, div10, div9, input3, t13, label4, t14, t15, div12, div11, input4, t16, label5, t17, t18, div14, div13, input5, t19, label6, t20, t21, div22, label7, t22, t23, div21, div18, div17, input6, t24, label8, t25, t26, div20, div19, input7, t27, label9, t28, t29, div24, label10, t30, div23, button, t31;

	return {
		c: function create() {
			form = element("form");
			div2 = element("div");
			label0 = element("label");
			t0 = text("Product name");
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div6 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div16 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div15 = element("div");
			div8 = element("div");
			div7 = element("div");
			input2 = element("input");
			t10 = space();
			label3 = element("label");
			t11 = text("S");
			t12 = space();
			div10 = element("div");
			div9 = element("div");
			input3 = element("input");
			t13 = space();
			label4 = element("label");
			t14 = text("M");
			t15 = space();
			div12 = element("div");
			div11 = element("div");
			input4 = element("input");
			t16 = space();
			label5 = element("label");
			t17 = text("L");
			t18 = space();
			div14 = element("div");
			div13 = element("div");
			input5 = element("input");
			t19 = space();
			label6 = element("label");
			t20 = text("XL");
			t21 = space();
			div22 = element("div");
			label7 = element("label");
			t22 = text("Available in store");
			t23 = space();
			div21 = element("div");
			div18 = element("div");
			div17 = element("div");
			input6 = element("input");
			t24 = space();
			label8 = element("label");
			t25 = text("Yes");
			t26 = space();
			div20 = element("div");
			div19 = element("div");
			input7 = element("input");
			t27 = space();
			label9 = element("label");
			t28 = text("No");
			t29 = space();
			div24 = element("div");
			label10 = element("label");
			t30 = space();
			div23 = element("div");
			button = element("button");
			t31 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label0 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label1 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			t5 = claim_text(div3_nodes, "$");
			div3_nodes.forEach(detach);
			t6 = claim_text(div4_nodes, "\n                    ");

			input1 = claim_element(div4_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			label2 = claim_element(div16_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t9 = claim_text(div16_nodes, "\n            ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div8 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input2 = claim_element(div7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(div7_nodes, "\n                        ");

			label3 = claim_element(div7_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t11 = claim_text(label3_nodes, "S");
			label3_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t12 = claim_text(div15_nodes, "\n                ");

			div10 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input3 = claim_element(div9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t13 = claim_text(div9_nodes, "\n                        ");

			label4 = claim_element(div9_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t14 = claim_text(label4_nodes, "M");
			label4_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t15 = claim_text(div15_nodes, "\n                ");

			div12 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input4 = claim_element(div11_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t16 = claim_text(div11_nodes, "\n                        ");

			label5 = claim_element(div11_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			t17 = claim_text(label5_nodes, "L");
			label5_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t18 = claim_text(div15_nodes, "\n                ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			input5 = claim_element(div13_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t19 = claim_text(div13_nodes, "\n                        ");

			label6 = claim_element(div13_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			t20 = claim_text(label6_nodes, "XL");
			label6_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			label7 = claim_element(div22_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t23 = claim_text(div22_nodes, "\n            ");

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div18 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			input6 = claim_element(div17_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t24 = claim_text(div17_nodes, "\n                        ");

			label8 = claim_element(div17_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			t25 = claim_text(label8_nodes, "Yes");
			label8_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t26 = claim_text(div21_nodes, "\n                ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			input7 = claim_element(div19_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t27 = claim_text(div19_nodes, "\n                        ");

			label9 = claim_element(div19_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			t28 = claim_text(label9_nodes, "No");
			label9_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n    \n        ");

			div24 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			label10 = claim_element(div24_nodes, "LABEL", { class: true }, false);
			var label10_nodes = children(label10);

			label10_nodes.forEach(detach);
			t30 = claim_text(div24_nodes, "\n            ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			button = claim_element(div23_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t31 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "four wide field";
			add_location(label0, file, 15, 12, 425);
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 25, 20, 894);
			div0.className = "ui input icon";
			add_location(div0, file, 24, 16, 846);
			div1.className = "six wide field";
			add_location(div1, file, 16, 12, 489);
			div2.className = "fields";
			add_location(div2, file, 14, 8, 392);
			label1.className = "four wide field";
			add_location(label1, file, 31, 12, 1031);
			div3.className = "ui label";
			add_location(div3, file, 34, 20, 1189);
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 35, 20, 1239);
			div4.className = "ui labeled input icon";
			add_location(div4, file, 33, 16, 1133);
			div5.className = "six wide field";
			add_location(div5, file, 32, 12, 1088);
			div6.className = "fields";
			add_location(div6, file, 30, 8, 998);
			label2.className = "four wide field";
			add_location(label2, file, 41, 12, 1377);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 45, 24, 1568);
			add_location(label3, file, 46, 24, 1642);
			div7.className = "ui checkbox";
			add_location(div7, file, 44, 20, 1518);
			div8.className = "field";
			add_location(div8, file, 43, 16, 1478);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 51, 24, 1815);
			add_location(label4, file, 52, 24, 1889);
			div9.className = "ui checkbox";
			add_location(div9, file, 50, 20, 1765);
			div10.className = "field";
			add_location(div10, file, 49, 16, 1725);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 57, 24, 2062);
			add_location(label5, file, 58, 24, 2136);
			div11.className = "ui checkbox";
			add_location(div11, file, 56, 20, 2012);
			div12.className = "field";
			add_location(div12, file, 55, 16, 1972);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 63, 24, 2309);
			add_location(label6, file, 64, 24, 2384);
			div13.className = "ui checkbox";
			add_location(div13, file, 62, 20, 2259);
			div14.className = "field";
			add_location(div14, file, 61, 16, 2219);
			div15.className = "six wide field";
			add_location(div15, file, 42, 12, 1433);
			div16.className = "fields";
			add_location(div16, file, 40, 8, 1344);
			label7.className = "four wide field";
			add_location(label7, file, 71, 12, 2532);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 75, 24, 2743);
			add_location(label8, file, 76, 24, 2822);
			div17.className = "ui radio checkbox";
			add_location(div17, file, 74, 20, 2687);
			div18.className = "field";
			add_location(div18, file, 73, 16, 2647);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 81, 24, 3003);
			add_location(label9, file, 82, 24, 3081);
			div19.className = "ui radio checkbox";
			add_location(div19, file, 80, 20, 2947);
			div20.className = "field";
			add_location(div20, file, 79, 16, 2907);
			div21.className = "six wide field";
			add_location(div21, file, 72, 12, 2602);
			div22.className = "fields";
			add_location(div22, file, 70, 8, 2499);
			label10.className = "four wide field";
			add_location(label10, file, 89, 12, 3229);
			button.type = "submit";
			button.className = "ui primary button";
			add_location(button, file, 92, 16, 3413);
			div23.className = "six wide field";
			add_location(div23, file, 90, 12, 3281);
			div24.className = "fields";
			add_location(div24, file, 88, 8, 3196);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "ui form";
			add_location(form, file, 13, 4, 333);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div2);
			append(div2, label0);
			append(label0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, div0);
			append(div0, input0);
			append(form, t2);
			append(form, div6);
			append(div6, label1);
			append(label1, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, div4);
			append(div4, div3);
			append(div3, t5);
			append(div4, t6);
			append(div4, input1);
			append(form, t7);
			append(form, div16);
			append(div16, label2);
			append(label2, t8);
			append(div16, t9);
			append(div16, div15);
			append(div15, div8);
			append(div8, div7);
			append(div7, input2);
			append(div7, t10);
			append(div7, label3);
			append(label3, t11);
			append(div15, t12);
			append(div15, div10);
			append(div10, div9);
			append(div9, input3);
			append(div9, t13);
			append(div9, label4);
			append(label4, t14);
			append(div15, t15);
			append(div15, div12);
			append(div12, div11);
			append(div11, input4);
			append(div11, t16);
			append(div11, label5);
			append(label5, t17);
			append(div15, t18);
			append(div15, div14);
			append(div14, div13);
			append(div13, input5);
			append(div13, t19);
			append(div13, label6);
			append(label6, t20);
			append(form, t21);
			append(form, div22);
			append(div22, label7);
			append(label7, t22);
			append(div22, t23);
			append(div22, div21);
			append(div21, div18);
			append(div18, div17);
			append(div17, input6);
			append(div17, t24);
			append(div17, label8);
			append(label8, t25);
			append(div21, t26);
			append(div21, div20);
			append(div20, div19);
			append(div19, input7);
			append(div19, t27);
			append(div19, label9);
			append(label9, t28);
			append(form, t29);
			append(form, div24);
			append(div24, label10);
			append(div24, t30);
			append(div24, div23);
			append(div23, button);
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

	var semanticlayout = new SemanticLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			semanticlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			semanticlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(semanticlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var semanticlayout_changes = {};
			if (changed.onLoaded) semanticlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) semanticlayout_changes.$$scope = { changed, ctx };
			semanticlayout.$set(semanticlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			semanticlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			semanticlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			semanticlayout.$destroy(detaching);
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
            semantic: new Semantic(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/semantic/horizontal-form/semantic',
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

class Semantic_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Semantic_1;

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as BulmaLayout, b as Bulma } from './chunk.acdfecb4.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Product name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="name" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Price</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <div class="control">
                        <span class="button is-static">$</span>
                    </div>
                    <div class="control">
                        <input type="text" class="input" name="price" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Size</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="s" /> S
                        </label>
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="m" /> M
                        </label>
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="l" /> L
                        </label>
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="xl" /> XL
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Available in store</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input name="availability" type="radio" value="yes" /> Yes
                        </label>
                        <label class="radio">
                            <input name="availability" type="radio" value="no" /> No
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bulma.min.js"></script-tag>

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
                bulma: new FormValidation.plugins.Bulma(),
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

/* src/routes/guide/plugins/bulma/horizontal-form/Bulma.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bulma/horizontal-form/Bulma.svelte";

// (20:0) <BulmaLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div4, div0, label0, t0, t1, div3, div2, div1, input0, t2, div10, div5, label1, t3, t4, div9, div8, div6, span, t5, t6, div7, input1, t7, div15, div11, label2, t8, t9, div14, div13, div12, label3, input2, t10, t11, label4, input3, t12, t13, label5, input4, t14, t15, label6, input5, t16, t17, div20, div16, label7, t18, t19, div19, div18, div17, label8, input6, t20, t21, label9, input7, t22, t23, div25, div21, t24, div24, div23, div22, button, t25;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Product name");
			t1 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div10 = element("div");
			div5 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div9 = element("div");
			div8 = element("div");
			div6 = element("div");
			span = element("span");
			t5 = text("$");
			t6 = space();
			div7 = element("div");
			input1 = element("input");
			t7 = space();
			div15 = element("div");
			div11 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div14 = element("div");
			div13 = element("div");
			div12 = element("div");
			label3 = element("label");
			input2 = element("input");
			t10 = text(" S");
			t11 = space();
			label4 = element("label");
			input3 = element("input");
			t12 = text(" M");
			t13 = space();
			label5 = element("label");
			input4 = element("input");
			t14 = text(" L");
			t15 = space();
			label6 = element("label");
			input5 = element("input");
			t16 = text(" XL");
			t17 = space();
			div20 = element("div");
			div16 = element("div");
			label7 = element("label");
			t18 = text("Available in store");
			t19 = space();
			div19 = element("div");
			div18 = element("div");
			div17 = element("div");
			label8 = element("label");
			input6 = element("input");
			t20 = text(" Yes");
			t21 = space();
			label9 = element("label");
			input7 = element("input");
			t22 = text(" No");
			t23 = space();
			div25 = element("div");
			div21 = element("div");
			t24 = space();
			div24 = element("div");
			div23 = element("div");
			div22 = element("div");
			button = element("button");
			t25 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div0 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div4_nodes, "\n            ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

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
			div4_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div5 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label1 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t4 = claim_text(div10_nodes, "\n            ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			span = claim_element(div6_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(div8_nodes, "\n                    ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input1 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div11 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label2 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t9 = claim_text(div15_nodes, "\n            ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label3 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			t11 = claim_text(div12_nodes, "\n                        ");

			label4 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t12 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			t13 = claim_text(div12_nodes, "\n                        ");

			label5 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			t15 = claim_text(div12_nodes, "\n                        ");

			label6 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t16 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n    \n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div16 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			label7 = claim_element(div16_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t18 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t19 = claim_text(div20_nodes, "\n            ");

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			label8 = claim_element(div17_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t20 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			t21 = claim_text(div17_nodes, "\n                        ");

			label9 = claim_element(div17_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t22 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div25 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div21 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div21_nodes.forEach(detach);
			t24 = claim_text(div25_nodes, "\n            ");

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			button = claim_element(div22_nodes, "BUTTON", { class: true, type: true }, false);
			var button_nodes = children(button);

			t25 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "label";
			add_location(label0, file, 23, 16, 473);
			div0.className = "field-label";
			add_location(div0, file, 22, 12, 431);
			attr(input0, "type", "text");
			input0.className = "input";
			input0.name = "name";
			add_location(input0, file, 28, 24, 673);
			div1.className = "control";
			add_location(div1, file, 27, 20, 627);
			div2.className = "field";
			add_location(div2, file, 26, 16, 587);
			div3.className = "field-body";
			add_location(div3, file, 25, 12, 546);
			div4.className = "field is-horizontal";
			add_location(div4, file, 21, 8, 385);
			label1.className = "label";
			add_location(label1, file, 36, 16, 906);
			div5.className = "field-label";
			add_location(div5, file, 35, 12, 864);
			span.className = "button is-static";
			add_location(span, file, 41, 24, 1110);
			div6.className = "control";
			add_location(div6, file, 40, 20, 1064);
			attr(input1, "type", "text");
			input1.className = "input";
			input1.name = "price";
			add_location(input1, file, 44, 24, 1243);
			div7.className = "control";
			add_location(div7, file, 43, 20, 1197);
			div8.className = "field has-addons";
			add_location(div8, file, 39, 16, 1013);
			div9.className = "field-body";
			add_location(div9, file, 38, 12, 972);
			div10.className = "field is-horizontal";
			add_location(div10, file, 34, 8, 818);
			label2.className = "label";
			add_location(label2, file, 52, 16, 1477);
			div11.className = "field-label";
			add_location(div11, file, 51, 12, 1435);
			input2.name = "size[]";
			attr(input2, "type", "checkbox");
			input2.value = "s";
			add_location(input2, file, 57, 48, 1693);
			label3.className = "checkbox";
			add_location(label3, file, 57, 24, 1669);
			input3.name = "size[]";
			attr(input3, "type", "checkbox");
			input3.value = "m";
			add_location(input3, file, 58, 48, 1801);
			label4.className = "checkbox";
			add_location(label4, file, 58, 24, 1777);
			input4.name = "size[]";
			attr(input4, "type", "checkbox");
			input4.value = "l";
			add_location(input4, file, 59, 48, 1909);
			label5.className = "checkbox";
			add_location(label5, file, 59, 24, 1885);
			input5.name = "size[]";
			attr(input5, "type", "checkbox");
			input5.value = "xl";
			add_location(input5, file, 60, 48, 2017);
			label6.className = "checkbox";
			add_location(label6, file, 60, 24, 1993);
			div12.className = "control";
			add_location(div12, file, 56, 20, 1623);
			div13.className = "field";
			add_location(div13, file, 55, 16, 1583);
			div14.className = "field-body";
			add_location(div14, file, 54, 12, 1542);
			div15.className = "field is-horizontal";
			add_location(div15, file, 50, 8, 1389);
			label7.className = "label";
			add_location(label7, file, 68, 16, 2264);
			div16.className = "field-label";
			add_location(div16, file, 67, 12, 2222);
			input6.name = "availability";
			attr(input6, "type", "radio");
			input6.value = "yes";
			add_location(input6, file, 73, 45, 2491);
			label8.className = "radio";
			add_location(label8, file, 73, 24, 2470);
			input7.name = "availability";
			attr(input7, "type", "radio");
			input7.value = "no";
			add_location(input7, file, 74, 45, 2603);
			label9.className = "radio";
			add_location(label9, file, 74, 24, 2582);
			div17.className = "control";
			add_location(div17, file, 72, 20, 2424);
			div18.className = "field";
			add_location(div18, file, 71, 16, 2384);
			div19.className = "field-body";
			add_location(div19, file, 70, 12, 2343);
			div20.className = "field is-horizontal";
			add_location(div20, file, 66, 8, 2176);
			div21.className = "field-label";
			add_location(div21, file, 81, 12, 2807);
			button.className = "button is-primary";
			button.type = "submit";
			add_location(button, file, 85, 24, 2978);
			div22.className = "control";
			add_location(div22, file, 84, 20, 2932);
			div23.className = "field";
			add_location(div23, file, 83, 16, 2892);
			div24.className = "field-body";
			add_location(div24, file, 82, 12, 2851);
			div25.className = "field is-horizontal";
			add_location(div25, file, 80, 8, 2761);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 20, 4, 342);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div4);
			append(div4, div0);
			append(div0, label0);
			append(label0, t0);
			append(div4, t1);
			append(div4, div3);
			append(div3, div2);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div10);
			append(div10, div5);
			append(div5, label1);
			append(label1, t3);
			append(div10, t4);
			append(div10, div9);
			append(div9, div8);
			append(div8, div6);
			append(div6, span);
			append(span, t5);
			append(div8, t6);
			append(div8, div7);
			append(div7, input1);
			append(form, t7);
			append(form, div15);
			append(div15, div11);
			append(div11, label2);
			append(label2, t8);
			append(div15, t9);
			append(div15, div14);
			append(div14, div13);
			append(div13, div12);
			append(div12, label3);
			append(label3, input2);
			append(label3, t10);
			append(div12, t11);
			append(div12, label4);
			append(label4, input3);
			append(label4, t12);
			append(div12, t13);
			append(div12, label5);
			append(label5, input4);
			append(label5, t14);
			append(div12, t15);
			append(div12, label6);
			append(label6, input5);
			append(label6, t16);
			append(form, t17);
			append(form, div20);
			append(div20, div16);
			append(div16, label7);
			append(label7, t18);
			append(div20, t19);
			append(div20, div19);
			append(div19, div18);
			append(div18, div17);
			append(div17, label8);
			append(label8, input6);
			append(label8, t20);
			append(div17, t21);
			append(div17, label9);
			append(label9, input7);
			append(label9, t22);
			append(form, t23);
			append(form, div25);
			append(div25, div21);
			append(div25, t24);
			append(div25, div24);
			append(div24, div23);
			append(div23, div22);
			append(div22, button);
			append(button, t25);
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

	var bulmalayout = new BulmaLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bulmalayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bulmalayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bulmalayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bulmalayout_changes = {};
			if (changed.onLoaded) bulmalayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bulmalayout_changes.$$scope = { changed, ctx };
			bulmalayout.$set(bulmalayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bulmalayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bulmalayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bulmalayout.$destroy(detaching);
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
            bulma: new Bulma(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bulma/horizontal-form/bulma',
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

class Bulma_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bulma_1;

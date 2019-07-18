import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger, b as Message } from './chunk.fb19edaf.js';
import { b as Icon, c as closest } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

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
                <div class="fl w-40 pa2 messageContainer"></div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Price ($)</div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="price" />
                </div>
                <div class="fl w-40 pa2 messageContainer"></div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Size</div>
                <div class="fl w-30">
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
                <div class="fl w-40 pa2 messageContainer"></div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Available in store</div>
                <div class="fl w-30">
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="yes" /> Yes</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="no" /> No</label>
                    </div>
                </div>
                <div class="fl w-40 pa2 messageContainer"></div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Add product</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>        
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

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
                tachyons: new FormValidation.plugins.Tachyons({
                    defaultMessageContainer: false,
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                message: new FormValidation.plugins.Message({
                    clazz: 'red lh-copy',
                    container: function(field, ele) {
                        // Look at the markup
                        // <div class="fl w-25 pa2">Label</div>
                        // <div class="fl w-30">Form field</div>
                        // <div class="fl w-40 messageContainer"></div>
                        return FormValidation.utils.closest(ele, '.fl').nextElementSibling;
                    },
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/showing-messages-in-custom-area/callback/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/showing-messages-in-custom-area/callback/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div1, input0, t2, div2, t3, div9, div8, div5, t4, t5, div6, input1, t6, div7, t7, div18, div17, div10, t8, t9, div15, div11, label0, input2, t10, t11, div12, label1, input3, t12, t13, div13, label2, input4, t14, t15, div14, label3, input5, t16, t17, div16, t18, div25, div24, div19, t19, t20, div22, div20, label4, input6, t21, t22, div21, label5, input7, t23, t24, div23, t25, div29, div28, div26, t26, div27, button, t27;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			t0 = text("Product name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			t3 = space();
			div9 = element("div");
			div8 = element("div");
			div5 = element("div");
			t4 = text("Price ($)");
			t5 = space();
			div6 = element("div");
			input1 = element("input");
			t6 = space();
			div7 = element("div");
			t7 = space();
			div18 = element("div");
			div17 = element("div");
			div10 = element("div");
			t8 = text("Size");
			t9 = space();
			div15 = element("div");
			div11 = element("div");
			label0 = element("label");
			input2 = element("input");
			t10 = text(" S");
			t11 = space();
			div12 = element("div");
			label1 = element("label");
			input3 = element("input");
			t12 = text(" M");
			t13 = space();
			div13 = element("div");
			label2 = element("label");
			input4 = element("input");
			t14 = text(" L");
			t15 = space();
			div14 = element("div");
			label3 = element("label");
			input5 = element("input");
			t16 = text(" XL");
			t17 = space();
			div16 = element("div");
			t18 = space();
			div25 = element("div");
			div24 = element("div");
			div19 = element("div");
			t19 = text("Available in store");
			t20 = space();
			div22 = element("div");
			div20 = element("div");
			label4 = element("label");
			input6 = element("input");
			t21 = text(" Yes");
			t22 = space();
			div21 = element("div");
			label5 = element("label");
			input7 = element("input");
			t23 = text(" No");
			t24 = space();
			div23 = element("div");
			t25 = space();
			div29 = element("div");
			div28 = element("div");
			div26 = element("div");
			t26 = space();
			div27 = element("div");
			button = element("button");
			t27 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Product name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n    \n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div5 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			t4 = claim_text(div5_nodes, "Price ($)");
			div5_nodes.forEach(detach);
			t5 = claim_text(div8_nodes, "\n                ");

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input1 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(div8_nodes, "\n                ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div10 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			t8 = claim_text(div10_nodes, "Size");
			div10_nodes.forEach(detach);
			t9 = claim_text(div17_nodes, "\n                ");

			div15 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div11 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label0 = claim_element(div11_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input2 = claim_element(label0_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(label0_nodes, " S");
			label0_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t11 = claim_text(div15_nodes, "\n                    ");

			div12 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label1 = claim_element(div12_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input3 = claim_element(label1_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t12 = claim_text(label1_nodes, " M");
			label1_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t13 = claim_text(div15_nodes, "\n                    ");

			div13 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label2 = claim_element(div13_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			input4 = claim_element(label2_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(label2_nodes, " L");
			label2_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t15 = claim_text(div15_nodes, "\n                    ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			label3 = claim_element(div14_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input5 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t16 = claim_text(label3_nodes, " XL");
			label3_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t17 = claim_text(div17_nodes, "\n                ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t18 = claim_text(form_nodes, "\n    \n        ");

			div25 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div19 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			t19 = claim_text(div19_nodes, "Available in store");
			div19_nodes.forEach(detach);
			t20 = claim_text(div24_nodes, "\n                ");

			div22 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div20 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			label4 = claim_element(div20_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input6 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t21 = claim_text(label4_nodes, " Yes");
			label4_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t22 = claim_text(div22_nodes, "\n                    ");

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			label5 = claim_element(div21_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input7 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t23 = claim_text(label5_nodes, " No");
			label5_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			t24 = claim_text(div24_nodes, "\n                ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n        ");

			div29 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			div26 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div26_nodes.forEach(detach);
			t26 = claim_text(div28_nodes, "\n                ");

			div27 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			button = claim_element(div27_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t27 = claim_text(button_nodes, "Add product");
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
			div2.className = "fl w-40 pa2 messageContainer";
			add_location(div2, file, 8, 16, 363);
			div3.className = "fl w-100";
			add_location(div3, file, 3, 12, 97);
			div4.className = "cf mb2";
			add_location(div4, file, 2, 8, 64);
			div5.className = "fl w-25 pa2";
			add_location(div5, file, 14, 16, 531);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "price";
			add_location(input1, file, 16, 20, 630);
			div6.className = "fl w-30";
			add_location(div6, file, 15, 16, 588);
			div7.className = "fl w-40 pa2 messageContainer";
			add_location(div7, file, 18, 16, 756);
			div8.className = "fl w-100";
			add_location(div8, file, 13, 12, 492);
			div9.className = "cf mb2";
			add_location(div9, file, 12, 8, 459);
			div10.className = "fl w-25 pa2";
			add_location(div10, file, 24, 16, 924);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 27, 31, 1067);
			add_location(label0, file, 27, 24, 1060);
			div11.className = "mb2";
			add_location(div11, file, 26, 20, 1018);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 30, 31, 1223);
			add_location(label1, file, 30, 24, 1216);
			div12.className = "mb2";
			add_location(div12, file, 29, 20, 1174);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 33, 31, 1379);
			add_location(label2, file, 33, 24, 1372);
			div13.className = "mb2";
			add_location(div13, file, 32, 20, 1330);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 36, 31, 1535);
			add_location(label3, file, 36, 24, 1528);
			div14.className = "mb2";
			add_location(div14, file, 35, 20, 1486);
			div15.className = "fl w-30";
			add_location(div15, file, 25, 16, 976);
			div16.className = "fl w-40 pa2 messageContainer";
			add_location(div16, file, 39, 16, 1663);
			div17.className = "fl w-100";
			add_location(div17, file, 23, 12, 885);
			div18.className = "cf mb2";
			add_location(div18, file, 22, 8, 852);
			div19.className = "fl w-25 pa2";
			add_location(div19, file, 45, 16, 1831);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 48, 31, 1988);
			add_location(label4, file, 48, 24, 1981);
			div20.className = "mb2";
			add_location(div20, file, 47, 20, 1939);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 51, 31, 2151);
			add_location(label5, file, 51, 24, 2144);
			div21.className = "mb2";
			add_location(div21, file, 50, 20, 2102);
			div22.className = "fl w-30";
			add_location(div22, file, 46, 16, 1897);
			div23.className = "fl w-40 pa2 messageContainer";
			add_location(div23, file, 54, 16, 2282);
			div24.className = "fl w-100";
			add_location(div24, file, 44, 12, 1792);
			div25.className = "cf mb2";
			add_location(div25, file, 43, 8, 1759);
			div26.className = "fl w-25 pa2";
			add_location(div26, file, 60, 16, 2446);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 62, 20, 2536);
			div27.className = "fl w-50";
			add_location(div27, file, 61, 16, 2494);
			div28.className = "fl w-100";
			add_location(div28, file, 59, 12, 2407);
			div29.className = "cf mb2";
			add_location(div29, file, 58, 8, 2374);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div4);
			append(div4, div3);
			append(div3, div0);
			append(div0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(form, t3);
			append(form, div9);
			append(div9, div8);
			append(div8, div5);
			append(div5, t4);
			append(div8, t5);
			append(div8, div6);
			append(div6, input1);
			append(div8, t6);
			append(div8, div7);
			append(form, t7);
			append(form, div18);
			append(div18, div17);
			append(div17, div10);
			append(div10, t8);
			append(div17, t9);
			append(div17, div15);
			append(div15, div11);
			append(div11, label0);
			append(label0, input2);
			append(label0, t10);
			append(div15, t11);
			append(div15, div12);
			append(div12, label1);
			append(label1, input3);
			append(label1, t12);
			append(div15, t13);
			append(div15, div13);
			append(div13, label2);
			append(label2, input4);
			append(label2, t14);
			append(div15, t15);
			append(div15, div14);
			append(div14, label3);
			append(label3, input5);
			append(label3, t16);
			append(div17, t17);
			append(div17, div16);
			append(form, t18);
			append(form, div25);
			append(div25, div24);
			append(div24, div19);
			append(div19, t19);
			append(div24, t20);
			append(div24, div22);
			append(div22, div20);
			append(div20, label4);
			append(label4, input6);
			append(label4, t21);
			append(div22, t22);
			append(div22, div21);
			append(div21, label5);
			append(label5, input7);
			append(label5, t23);
			append(div24, t24);
			append(div24, div23);
			append(form, t25);
			append(form, div29);
			append(div29, div28);
			append(div28, div26);
			append(div28, t26);
			append(div28, div27);
			append(div27, button);
			append(button, t27);
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
            tachyons: new Tachyons({
                defaultMessageContainer: false,
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            message: new Message({
                clazz: 'red lh-copy',
                container: (field, ele) => {
                    // Look at the markup
                    // <div class="fl w-25 pa2">Label</div>
                    // <div class="fl w-30">Form field</div>
                    // <div class="fl w-40 messageContainer"></div>
                    return closest(ele, '.fl').nextElementSibling;
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/showing-messages-in-custom-area/callback/tachyons',
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

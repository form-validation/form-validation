import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
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
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Product name</div>
                <div class="fl w-40">
                    <input type="text" name="productName" value="T-Shirt" readonly="readonly" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10" />
                </div>
                <div class="fl w-20 pa2">(readonly)</div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Price ($)</div>
                <div class="fl w-40">
                    <input type="text" name="price" value="25" readonly="readonly" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10" />
                </div>
                <div class="fl w-20 pa2">(readonly)</div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Your full name</div>
                <div class="fl w-50 mr2">
                    <input type="text" name="fullName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card number</div>
                <div class="fl w-40 mr2">
                    <input type="text" data-stripe="number" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Expiration</div>
                <div class="fl w-20">
                    <input type="text" placeholder="Month" data-stripe="exp-month" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
                <div class="fl w-20">
                    <input type="text" placeholder="Year" data-stripe="exp-year" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">CVV</div>
                <div class="fl w-20">
                    <input type="text" data-stripe="cvc" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Purchase</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const currentYear = new Date().getFullYear();
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required'
                        }
                    }
                },
                ccNumber: {
                    selector: '[data-stripe="number"]',
                    validators: {
                        notEmpty: {
                            message: 'The credit card number is required'
                        },
                        creditCard: {
                            message: 'The credit card number is not valid'
                        },
                    },
                },
                expMonth: {
                    selector: '[data-stripe="exp-month"]',
                    validators: {
                        notEmpty: {
                            message: 'The expiration month is required'
                        },
                        digits: {
                            message: 'The expiration month can contain digits only'
                        },
                        between: {
                            min: 1,
                            max: 12,
                            message: 'The expiration month must be between 1 and 12',
                        },
                    },
                },
                expYear: {
                    selector: '[data-stripe="exp-year"]',
                    validators: {
                        notEmpty: {
                            message: 'The expiration year is required'
                        },
                        digits: {
                            message: 'The expiration year can contain digits only'
                        },
                        between: {
                            min: currentYear,
                            // A simple rule to limit the range of expiration year
                            max: currentYear + 20,
                            message: 'The expiration year is not valid',
                        },
                    },
                },
                cvvNumber: {
                    selector: '[data-stripe="cvc"]',
                    validators: {
                        notEmpty: {
                            message: 'The CVV number is required'
                        },
                        stringLength: {
                            min: 3,
                            max: 3,
                            message: 'The CVV number is not valid',
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
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

/* src/routes/guide/getting-started/field-selector/stripe/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/getting-started/field-selector/stripe/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div1, input0, t2, div2, t3, t4, div9, div8, div5, t5, t6, div6, input1, t7, div7, t8, t9, div13, div12, div10, t10, t11, div11, input2, t12, div17, div16, div14, t13, t14, div15, input3, t15, div22, div21, div18, t16, t17, div19, input4, t18, div20, input5, t19, div26, div25, div23, t20, t21, div24, input6, t22, div30, div29, div27, t23, div28, button, t24;

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
			t3 = text("(readonly)");
			t4 = space();
			div9 = element("div");
			div8 = element("div");
			div5 = element("div");
			t5 = text("Price ($)");
			t6 = space();
			div6 = element("div");
			input1 = element("input");
			t7 = space();
			div7 = element("div");
			t8 = text("(readonly)");
			t9 = space();
			div13 = element("div");
			div12 = element("div");
			div10 = element("div");
			t10 = text("Your full name");
			t11 = space();
			div11 = element("div");
			input2 = element("input");
			t12 = space();
			div17 = element("div");
			div16 = element("div");
			div14 = element("div");
			t13 = text("Credit card number");
			t14 = space();
			div15 = element("div");
			input3 = element("input");
			t15 = space();
			div22 = element("div");
			div21 = element("div");
			div18 = element("div");
			t16 = text("Expiration");
			t17 = space();
			div19 = element("div");
			input4 = element("input");
			t18 = space();
			div20 = element("div");
			input5 = element("input");
			t19 = space();
			div26 = element("div");
			div25 = element("div");
			div23 = element("div");
			t20 = text("CVV");
			t21 = space();
			div24 = element("div");
			input6 = element("input");
			t22 = space();
			div30 = element("div");
			div29 = element("div");
			div27 = element("div");
			t23 = space();
			div28 = element("div");
			button = element("button");
			t24 = text("Purchase");
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

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true, value: true, readonly: true, class: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			t3 = claim_text(div2_nodes, "(readonly)");
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t4 = claim_text(form_nodes, "\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div5 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			t5 = claim_text(div5_nodes, "Price ($)");
			div5_nodes.forEach(detach);
			t6 = claim_text(div8_nodes, "\n                ");

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input1 = claim_element(div6_nodes, "INPUT", { type: true, name: true, value: true, readonly: true, class: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t7 = claim_text(div8_nodes, "\n                ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			t8 = claim_text(div7_nodes, "(readonly)");
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			t10 = claim_text(div10_nodes, "Your full name");
			div10_nodes.forEach(detach);
			t11 = claim_text(div12_nodes, "\n                ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input2 = claim_element(div11_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			t13 = claim_text(div14_nodes, "Credit card number");
			div14_nodes.forEach(detach);
			t14 = claim_text(div16_nodes, "\n                ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			input3 = claim_element(div15_nodes, "INPUT", { type: true, "data-stripe": true, autocomplete: true, class: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n        ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div18 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			t16 = claim_text(div18_nodes, "Expiration");
			div18_nodes.forEach(detach);
			t17 = claim_text(div21_nodes, "\n                ");

			div19 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			input4 = claim_element(div19_nodes, "INPUT", { type: true, placeholder: true, "data-stripe": true, autocomplete: true, class: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t18 = claim_text(div21_nodes, "\n                ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			input5 = claim_element(div20_nodes, "INPUT", { type: true, placeholder: true, "data-stripe": true, autocomplete: true, class: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			t19 = claim_text(form_nodes, "\n        ");

			div26 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div23 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			t20 = claim_text(div23_nodes, "CVV");
			div23_nodes.forEach(detach);
			t21 = claim_text(div25_nodes, "\n                ");

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			input6 = claim_element(div24_nodes, "INPUT", { type: true, "data-stripe": true, autocomplete: true, class: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n        ");

			div30 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div30_nodes = children(div30);

			div29 = claim_element(div30_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			div27 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			div27_nodes.forEach(detach);
			t23 = claim_text(div29_nodes, "\n                ");

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			button = claim_element(div28_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t24 = claim_text(button_nodes, "Purchase");
			button_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			div30_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.name = "productName";
			input0.value = "T-Shirt";
			input0.readOnly = "readonly";
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10";
			add_location(input0, file, 6, 20, 238);
			div1.className = "fl w-40";
			add_location(div1, file, 5, 16, 196);
			div2.className = "fl w-20 pa2";
			add_location(div2, file, 8, 16, 418);
			div3.className = "fl w-100";
			add_location(div3, file, 3, 12, 97);
			div4.className = "cf mb2";
			add_location(div4, file, 2, 8, 64);
			div5.className = "fl w-25 pa2";
			add_location(div5, file, 13, 16, 574);
			attr(input1, "type", "text");
			input1.name = "price";
			input1.value = "25";
			input1.readOnly = "readonly";
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10";
			add_location(input1, file, 15, 20, 673);
			div6.className = "fl w-40";
			add_location(div6, file, 14, 16, 631);
			div7.className = "fl w-20 pa2";
			add_location(div7, file, 17, 16, 842);
			div8.className = "fl w-100";
			add_location(div8, file, 12, 12, 535);
			div9.className = "cf mb2";
			add_location(div9, file, 11, 8, 502);
			div10.className = "fl w-25 pa2";
			add_location(div10, file, 22, 16, 998);
			attr(input2, "type", "text");
			input2.name = "fullName";
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input2, file, 24, 20, 1106);
			div11.className = "fl w-50 mr2";
			add_location(div11, file, 23, 16, 1060);
			div12.className = "fl w-100";
			add_location(div12, file, 21, 12, 959);
			div13.className = "cf mb2";
			add_location(div13, file, 20, 8, 926);
			div14.className = "fl w-25 pa2";
			add_location(div14, file, 30, 16, 1333);
			attr(input3, "type", "text");
			input3.dataset.stripe = "number";
			input3.autocomplete = "off";
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input3, file, 32, 20, 1445);
			div15.className = "fl w-40 mr2";
			add_location(div15, file, 31, 16, 1399);
			div16.className = "fl w-100";
			add_location(div16, file, 29, 12, 1294);
			div17.className = "cf mb2";
			add_location(div17, file, 28, 8, 1261);
			div18.className = "fl w-25 pa2";
			add_location(div18, file, 38, 16, 1696);
			attr(input4, "type", "text");
			input4.placeholder = "Month";
			input4.dataset.stripe = "exp-month";
			input4.autocomplete = "off";
			input4.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input4, file, 40, 20, 1796);
			div19.className = "fl w-20";
			add_location(div19, file, 39, 16, 1754);
			attr(input5, "type", "text");
			input5.placeholder = "Year";
			input5.dataset.stripe = "exp-year";
			input5.autocomplete = "off";
			input5.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input5, file, 43, 20, 2014);
			div20.className = "fl w-20";
			add_location(div20, file, 42, 16, 1972);
			div21.className = "fl w-100";
			add_location(div21, file, 37, 12, 1657);
			div22.className = "cf mb2";
			add_location(div22, file, 36, 8, 1624);
			div23.className = "fl w-25 pa2";
			add_location(div23, file, 49, 16, 2286);
			attr(input6, "type", "text");
			input6.dataset.stripe = "cvc";
			input6.autocomplete = "off";
			input6.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input6, file, 51, 20, 2379);
			div24.className = "fl w-20";
			add_location(div24, file, 50, 16, 2337);
			div25.className = "fl w-100";
			add_location(div25, file, 48, 12, 2247);
			div26.className = "cf mb2";
			add_location(div26, file, 47, 8, 2214);
			div27.className = "fl w-25 pa2";
			add_location(div27, file, 57, 16, 2627);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 59, 20, 2717);
			div28.className = "fl w-50";
			add_location(div28, file, 58, 16, 2675);
			div29.className = "fl w-100";
			add_location(div29, file, 56, 12, 2588);
			div30.className = "cf mb2";
			add_location(div30, file, 55, 8, 2555);
			form.id = "demoForm";
			form.method = "post";
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
			append(div2, t3);
			append(form, t4);
			append(form, div9);
			append(div9, div8);
			append(div8, div5);
			append(div5, t5);
			append(div8, t6);
			append(div8, div6);
			append(div6, input1);
			append(div8, t7);
			append(div8, div7);
			append(div7, t8);
			append(form, t9);
			append(form, div13);
			append(div13, div12);
			append(div12, div10);
			append(div10, t10);
			append(div12, t11);
			append(div12, div11);
			append(div11, input2);
			append(form, t12);
			append(form, div17);
			append(div17, div16);
			append(div16, div14);
			append(div14, t13);
			append(div16, t14);
			append(div16, div15);
			append(div15, input3);
			append(form, t15);
			append(form, div22);
			append(div22, div21);
			append(div21, div18);
			append(div18, t16);
			append(div21, t17);
			append(div21, div19);
			append(div19, input4);
			append(div21, t18);
			append(div21, div20);
			append(div20, input5);
			append(form, t19);
			append(form, div26);
			append(div26, div25);
			append(div25, div23);
			append(div23, t20);
			append(div25, t21);
			append(div25, div24);
			append(div24, input6);
			append(form, t22);
			append(form, div30);
			append(div30, div29);
			append(div29, div27);
			append(div29, t23);
			append(div29, div28);
			append(div28, button);
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
    const currentYear = new Date().getFullYear();
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            ccNumber: {
                selector: '[data-stripe="number"]',
                validators: {
                    notEmpty: {
                        message: 'The credit card number is required'
                    },
                    creditCard: {
                        message: 'The credit card number is not valid'
                    },
                },
            },
            expMonth: {
                selector: '[data-stripe="exp-month"]',
                validators: {
                    notEmpty: {
                        message: 'The expiration month is required'
                    },
                    digits: {
                        message: 'The expiration month can contain digits only'
                    },
                    between: {
                        min: 1,
                        max: 12,
                        message: 'The expiration month must be between 1 and 12',
                    },
                },
            },
            expYear: {
                selector: '[data-stripe="exp-year"]',
                validators: {
                    notEmpty: {
                        message: 'The expiration year is required'
                    },
                    digits: {
                        message: 'The expiration year can contain digits only'
                    },
                    between: {
                        min: currentYear,
                        // A simple rule to limit the range of expiration year
                        max: currentYear + 20,
                        message: 'The expiration year is not valid',
                    },
                },
            },
            cvvNumber: {
                selector: '[data-stripe="cvc"]',
                validators: {
                    notEmpty: {
                        message: 'The CVV number is required'
                    },
                    stringLength: {
                        min: 3,
                        max: 3,
                        message: 'The CVV number is not valid',
                    },
                },
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/field-selector/stripe/tachyons',
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

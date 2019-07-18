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
        <div class="ten wide field">
            <label>Product name</label>
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

        <div class="ten wide field">
            <label>Price</label>
            <div class="ui labeled input icon">
                <div class="ui label">$</div>
                <input type="text" name="price" />
            </div>
        </div>

        <div class="ten wide field">
            <label>Size</label>
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

        <div class="ten wide field">
            <label>Available in store</label>
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

        <div class="field">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="ui primary button">Submit</button>
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
                semantic: new FormValidation.plugins.Semantic({
                    rowSelector: '.field',
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new Icon({
                    valid: 'checkmark icon',
                    invalid: 'remove icon',
                    validating: 'refresh icon'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/semantic/stacked-form/Semantic.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/semantic/stacked-form/Semantic.svelte";

// (1:0) <SemanticLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div4, label1, t3, t4, div3, div2, t5, t6, input1, t7, div13, label2, t8, t9, div6, div5, input2, t10, label3, t11, t12, div8, div7, input3, t13, label4, t14, t15, div10, div9, input4, t16, label5, t17, t18, div12, div11, input5, t19, label6, t20, t21, div18, label7, t22, t23, div15, div14, input6, t24, label8, t25, t26, div17, div16, input7, t27, label9, t28, t29, div19, button, t30;

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
			div4 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div3 = element("div");
			div2 = element("div");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div13 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div6 = element("div");
			div5 = element("div");
			input2 = element("input");
			t10 = space();
			label3 = element("label");
			t11 = text("S");
			t12 = space();
			div8 = element("div");
			div7 = element("div");
			input3 = element("input");
			t13 = space();
			label4 = element("label");
			t14 = text("M");
			t15 = space();
			div10 = element("div");
			div9 = element("div");
			input4 = element("input");
			t16 = space();
			label5 = element("label");
			t17 = text("L");
			t18 = space();
			div12 = element("div");
			div11 = element("div");
			input5 = element("input");
			t19 = space();
			label6 = element("label");
			t20 = text("XL");
			t21 = space();
			div18 = element("div");
			label7 = element("label");
			t22 = text("Available in store");
			t23 = space();
			div15 = element("div");
			div14 = element("div");
			input6 = element("input");
			t24 = space();
			label8 = element("label");
			t25 = text("Yes");
			t26 = space();
			div17 = element("div");
			div16 = element("div");
			input7 = element("input");
			t27 = space();
			label9 = element("label");
			t28 = text("No");
			t29 = space();
			div19 = element("div");
			button = element("button");
			t30 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n            \n            ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			t4 = claim_text(div4_nodes, "\n            ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			t5 = claim_text(div2_nodes, "$");
			div2_nodes.forEach(detach);
			t6 = claim_text(div3_nodes, "\n                ");

			input1 = claim_element(div3_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label2 = claim_element(div13_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t9 = claim_text(div13_nodes, "\n            ");

			div6 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(div5_nodes, "\n                    ");

			label3 = claim_element(div5_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t11 = claim_text(label3_nodes, "S");
			label3_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t12 = claim_text(div13_nodes, "\n            ");

			div8 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input3 = claim_element(div7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t13 = claim_text(div7_nodes, "\n                    ");

			label4 = claim_element(div7_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t14 = claim_text(label4_nodes, "M");
			label4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t15 = claim_text(div13_nodes, "\n            ");

			div10 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input4 = claim_element(div9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t16 = claim_text(div9_nodes, "\n                    ");

			label5 = claim_element(div9_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			t17 = claim_text(label5_nodes, "L");
			label5_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t18 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input5 = claim_element(div11_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t19 = claim_text(div11_nodes, "\n                    ");

			label6 = claim_element(div11_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			t20 = claim_text(label6_nodes, "XL");
			label6_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			label7 = claim_element(div18_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t23 = claim_text(div18_nodes, "\n            ");

			div15 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			input6 = claim_element(div14_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t24 = claim_text(div14_nodes, "\n                    ");

			label8 = claim_element(div14_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			t25 = claim_text(label8_nodes, "Yes");
			label8_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t26 = claim_text(div18_nodes, "\n            ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			input7 = claim_element(div16_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t27 = claim_text(div16_nodes, "\n                    ");

			label9 = claim_element(div16_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			t28 = claim_text(label9_nodes, "No");
			label9_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n    \n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			button = claim_element(div19_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t30 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 3, 12, 141);
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 12, 16, 509);
			div0.className = "ui input icon";
			add_location(div0, file, 11, 12, 465);
			div1.className = "ten wide field";
			add_location(div1, file, 2, 8, 100);
			add_location(label1, file, 17, 12, 631);
			div2.className = "ui label";
			add_location(div2, file, 19, 16, 716);
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 20, 16, 762);
			div3.className = "ui labeled input icon";
			add_location(div3, file, 18, 12, 664);
			div4.className = "ten wide field";
			add_location(div4, file, 16, 8, 590);
			add_location(label2, file, 25, 12, 885);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 28, 20, 999);
			add_location(label3, file, 29, 20, 1069);
			div5.className = "ui checkbox";
			add_location(div5, file, 27, 16, 953);
			div6.className = "field";
			add_location(div6, file, 26, 12, 917);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 34, 20, 1222);
			add_location(label4, file, 35, 20, 1292);
			div7.className = "ui checkbox";
			add_location(div7, file, 33, 16, 1176);
			div8.className = "field";
			add_location(div8, file, 32, 12, 1140);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 40, 20, 1445);
			add_location(label5, file, 41, 20, 1515);
			div9.className = "ui checkbox";
			add_location(div9, file, 39, 16, 1399);
			div10.className = "field";
			add_location(div10, file, 38, 12, 1363);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 46, 20, 1668);
			add_location(label6, file, 47, 20, 1739);
			div11.className = "ui checkbox";
			add_location(div11, file, 45, 16, 1622);
			div12.className = "field";
			add_location(div12, file, 44, 12, 1586);
			div13.className = "ten wide field";
			add_location(div13, file, 24, 8, 844);
			add_location(label7, file, 53, 12, 1868);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 56, 20, 2002);
			add_location(label8, file, 57, 20, 2077);
			div14.className = "ui radio checkbox";
			add_location(div14, file, 55, 16, 1950);
			div15.className = "field";
			add_location(div15, file, 54, 12, 1914);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 62, 20, 2238);
			add_location(label9, file, 63, 20, 2312);
			div16.className = "ui radio checkbox";
			add_location(div16, file, 61, 16, 2186);
			div17.className = "field";
			add_location(div17, file, 60, 12, 2150);
			div18.className = "ten wide field";
			add_location(div18, file, 52, 8, 1827);
			button.type = "submit";
			button.className = "ui primary button";
			add_location(button, file, 70, 12, 2515);
			div19.className = "field";
			add_location(div19, file, 68, 8, 2400);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "ui form";
			add_location(form, file, 1, 4, 41);
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
			append(form, div4);
			append(div4, label1);
			append(label1, t3);
			append(div4, t4);
			append(div4, div3);
			append(div3, div2);
			append(div2, t5);
			append(div3, t6);
			append(div3, input1);
			append(form, t7);
			append(form, div13);
			append(div13, label2);
			append(label2, t8);
			append(div13, t9);
			append(div13, div6);
			append(div6, div5);
			append(div5, input2);
			append(div5, t10);
			append(div5, label3);
			append(label3, t11);
			append(div13, t12);
			append(div13, div8);
			append(div8, div7);
			append(div7, input3);
			append(div7, t13);
			append(div7, label4);
			append(label4, t14);
			append(div13, t15);
			append(div13, div10);
			append(div10, div9);
			append(div9, input4);
			append(div9, t16);
			append(div9, label5);
			append(label5, t17);
			append(div13, t18);
			append(div13, div12);
			append(div12, div11);
			append(div11, input5);
			append(div11, t19);
			append(div11, label6);
			append(label6, t20);
			append(form, t21);
			append(form, div18);
			append(div18, label7);
			append(label7, t22);
			append(div18, t23);
			append(div18, div15);
			append(div15, div14);
			append(div14, input6);
			append(div14, t24);
			append(div14, label8);
			append(label8, t25);
			append(div18, t26);
			append(div18, div17);
			append(div17, div16);
			append(div16, input7);
			append(div16, t27);
			append(div16, label9);
			append(label9, t28);
			append(form, t29);
			append(form, div19);
			append(div19, button);
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
            semantic: new Semantic({
                rowSelector: '.field',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/semantic/stacked-form/semantic',
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

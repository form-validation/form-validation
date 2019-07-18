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

    <style>
    .fv-plugins-icon {
        cursor: pointer;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Product name</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Price ($)</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="price" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Size</div>
                <div class="fl w-60">
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
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Available in store</div>
                <div class="fl w-60">
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="yes" /> Yes</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="no" /> No</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
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
    const fv = FormValidation.formValidation(
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
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                    onPlaced: function(e) {
                        e.iconElement.addEventListener('click', function() {
                            fv.resetField(e.field);
                        });
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

/* src/routes/guide/examples/clearing-field-when-clicking-the-icon/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/clearing-field-when-clicking-the-icon/Tachyons.svelte";

// (7:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, t4, div5, input1, t5, div15, div14, div8, t6, t7, div13, div9, label0, input2, t8, t9, div10, label1, input3, t10, t11, div11, label2, input4, t12, t13, div12, label3, input5, t14, t15, div21, div20, div16, t16, t17, div19, div17, label4, input6, t18, t19, div18, label5, input7, t20, t21, div25, div24, div22, t22, div23, button, t23;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Product name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = text("Price ($)");
			t4 = space();
			div5 = element("div");
			input1 = element("input");
			t5 = space();
			div15 = element("div");
			div14 = element("div");
			div8 = element("div");
			t6 = text("Size");
			t7 = space();
			div13 = element("div");
			div9 = element("div");
			label0 = element("label");
			input2 = element("input");
			t8 = text(" S");
			t9 = space();
			div10 = element("div");
			label1 = element("label");
			input3 = element("input");
			t10 = text(" M");
			t11 = space();
			div11 = element("div");
			label2 = element("label");
			input4 = element("input");
			t12 = text(" L");
			t13 = space();
			div12 = element("div");
			label3 = element("label");
			input5 = element("input");
			t14 = text(" XL");
			t15 = space();
			div21 = element("div");
			div20 = element("div");
			div16 = element("div");
			t16 = text("Available in store");
			t17 = space();
			div19 = element("div");
			div17 = element("div");
			label4 = element("label");
			input6 = element("input");
			t18 = text(" Yes");
			t19 = space();
			div18 = element("div");
			label5 = element("label");
			input7 = element("input");
			t20 = text(" No");
			t21 = space();
			div25 = element("div");
			div24 = element("div");
			div22 = element("div");
			t22 = space();
			div23 = element("div");
			button = element("button");
			t23 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Product name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

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

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Price ($)");
			div4_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input1 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div8 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			t6 = claim_text(div8_nodes, "Size");
			div8_nodes.forEach(detach);
			t7 = claim_text(div14_nodes, "\n                ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div9 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label0 = claim_element(div9_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input2 = claim_element(label0_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label0_nodes, " S");
			label0_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t9 = claim_text(div13_nodes, "\n                    ");

			div10 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label1 = claim_element(div10_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input3 = claim_element(label1_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t10 = claim_text(label1_nodes, " M");
			label1_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t11 = claim_text(div13_nodes, "\n                    ");

			div11 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label2 = claim_element(div11_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			input4 = claim_element(label2_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(label2_nodes, " L");
			label2_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t13 = claim_text(div13_nodes, "\n                    ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label3 = claim_element(div12_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input5 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t14 = claim_text(label3_nodes, " XL");
			label3_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n    \n        ");

			div21 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div16 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			t16 = claim_text(div16_nodes, "Available in store");
			div16_nodes.forEach(detach);
			t17 = claim_text(div20_nodes, "\n                ");

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div17 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			label4 = claim_element(div17_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input6 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(label4_nodes, " Yes");
			label4_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t19 = claim_text(div19_nodes, "\n                    ");

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			label5 = claim_element(div18_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input7 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t20 = claim_text(label5_nodes, " No");
			label5_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n\n        ");

			div25 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div22 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div22_nodes.forEach(detach);
			t22 = claim_text(div24_nodes, "\n                ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			button = claim_element(div23_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t23 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 10, 16, 205);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "name";
			add_location(input0, file, 12, 20, 307);
			div1.className = "fl w-40";
			add_location(div1, file, 11, 16, 265);
			div2.className = "fl w-100";
			add_location(div2, file, 9, 12, 166);
			div3.className = "cf mb2";
			add_location(div3, file, 8, 8, 133);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 19, 16, 535);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "price";
			add_location(input1, file, 21, 20, 634);
			div5.className = "fl w-40";
			add_location(div5, file, 20, 16, 592);
			div6.className = "fl w-100";
			add_location(div6, file, 18, 12, 496);
			div7.className = "cf mb2";
			add_location(div7, file, 17, 8, 463);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 28, 16, 863);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 31, 31, 1006);
			add_location(label0, file, 31, 24, 999);
			div9.className = "mb2";
			add_location(div9, file, 30, 20, 957);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 34, 31, 1162);
			add_location(label1, file, 34, 24, 1155);
			div10.className = "mb2";
			add_location(div10, file, 33, 20, 1113);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 37, 31, 1318);
			add_location(label2, file, 37, 24, 1311);
			div11.className = "mb2";
			add_location(div11, file, 36, 20, 1269);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 40, 31, 1474);
			add_location(label3, file, 40, 24, 1467);
			div12.className = "mb2";
			add_location(div12, file, 39, 20, 1425);
			div13.className = "fl w-60";
			add_location(div13, file, 29, 16, 915);
			div14.className = "fl w-100";
			add_location(div14, file, 27, 12, 824);
			div15.className = "cf mb2";
			add_location(div15, file, 26, 8, 791);
			div16.className = "fl w-25 pa2";
			add_location(div16, file, 48, 16, 1705);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 51, 31, 1862);
			add_location(label4, file, 51, 24, 1855);
			div17.className = "mb2";
			add_location(div17, file, 50, 20, 1813);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 54, 31, 2025);
			add_location(label5, file, 54, 24, 2018);
			div18.className = "mb2";
			add_location(div18, file, 53, 20, 1976);
			div19.className = "fl w-60";
			add_location(div19, file, 49, 16, 1771);
			div20.className = "fl w-100";
			add_location(div20, file, 47, 12, 1666);
			div21.className = "cf mb2";
			add_location(div21, file, 46, 8, 1633);
			div22.className = "fl w-25 pa2";
			add_location(div22, file, 62, 16, 2255);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 65, 20, 2436);
			div23.className = "fl w-50";
			add_location(div23, file, 63, 16, 2303);
			div24.className = "fl w-100";
			add_location(div24, file, 61, 12, 2216);
			div25.className = "cf mb2";
			add_location(div25, file, 60, 8, 2183);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 7, 4, 90);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, input1);
			append(form, t5);
			append(form, div15);
			append(div15, div14);
			append(div14, div8);
			append(div8, t6);
			append(div14, t7);
			append(div14, div13);
			append(div13, div9);
			append(div9, label0);
			append(label0, input2);
			append(label0, t8);
			append(div13, t9);
			append(div13, div10);
			append(div10, label1);
			append(label1, input3);
			append(label1, t10);
			append(div13, t11);
			append(div13, div11);
			append(div11, label2);
			append(label2, input4);
			append(label2, t12);
			append(div13, t13);
			append(div13, div12);
			append(div12, label3);
			append(label3, input5);
			append(label3, t14);
			append(form, t15);
			append(form, div21);
			append(div21, div20);
			append(div20, div16);
			append(div16, t16);
			append(div20, t17);
			append(div20, div19);
			append(div19, div17);
			append(div17, label4);
			append(label4, input6);
			append(label4, t18);
			append(div19, t19);
			append(div19, div18);
			append(div18, label5);
			append(label5, input7);
			append(label5, t20);
			append(form, t21);
			append(form, div25);
			append(div25, div24);
			append(div24, div22);
			append(div24, t22);
			append(div24, div23);
			append(div23, button);
			append(button, t23);
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
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
                onPlaced: (e) => {
                    e.iconElement.addEventListener('click', () => {
                        fv.resetField(e.field);
                    });
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/clearing-field-when-clicking-the-icon/tachyons',
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

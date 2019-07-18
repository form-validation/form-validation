import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MilligramLayout, b as Milligram } from './chunk.1ebb077a.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="column column-25">
                <label>Product name</label>
            </div>
            <div class="column column-40">
                <input type="text" name="name" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Price ($)</label>
            </div>
            <div class="column column-40">
                <input type="text" name="price" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Size</label>
            </div>
            <div class="column column-40">
                <div>
                    <input type="checkbox" name="size[]" value="s" id="sizeS" />
                    <label class="label-inline" for="sizeS">S</label>
                </div>
                <div>
                    <input type="checkbox" name="size[]" value="m" id="sizeM" />
                    <label class="label-inline" for="sizeM">M</label>
                </div>
                <div>
                    <input type="checkbox" name="size[]" value="l" id="sizeL" />
                    <label class="label-inline" for="sizeL">L</label>
                </div>
                <div>
                    <input type="checkbox" name="size[]" value="xl" id="sizeXL" />
                    <label class="label-inline" for="sizeXL">XL</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Available in store</label>
            </div>
            <div class="column column-40">
                <div>
                    <input type="radio" name="availability" value="yes" id="yesAvailable" />
                    <label class="label-inline" for="yesAvailable">Yes</label>
                </div>
                <div>
                    <input type="radio" name="availability" value="no" id="noAvailable" />
                    <label class="label-inline" for="noAvailable">No</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25"></div>
            <div class="column column-75">
                <button type="submit" class="button-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Milligram.min.js"></script-tag>

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
                milligram: new FormValidation.plugins.Milligram(),
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

/* src/routes/guide/plugins/milligram/horizontal-form/Milligram.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/milligram/horizontal-form/Milligram.svelte";

// (1:0) <MilligramLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, div0, label0, t0, t1, div1, input0, t2, div5, div3, label1, t3, t4, div4, input1, t5, div12, div6, label2, t6, t7, div11, div7, input2, t8, label3, t9, t10, div8, input3, t11, label4, t12, t13, div9, input4, t14, label5, t15, t16, div10, input5, t17, label6, t18, t19, div17, div13, label7, t20, t21, div16, div14, input6, t22, label8, t23, t24, div15, input7, t25, label9, t26, t27, div20, div18, t28, div19, button, t29;

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
			div5 = element("div");
			div3 = element("div");
			label1 = element("label");
			t3 = text("Price ($)");
			t4 = space();
			div4 = element("div");
			input1 = element("input");
			t5 = space();
			div12 = element("div");
			div6 = element("div");
			label2 = element("label");
			t6 = text("Size");
			t7 = space();
			div11 = element("div");
			div7 = element("div");
			input2 = element("input");
			t8 = space();
			label3 = element("label");
			t9 = text("S");
			t10 = space();
			div8 = element("div");
			input3 = element("input");
			t11 = space();
			label4 = element("label");
			t12 = text("M");
			t13 = space();
			div9 = element("div");
			input4 = element("input");
			t14 = space();
			label5 = element("label");
			t15 = text("L");
			t16 = space();
			div10 = element("div");
			input5 = element("input");
			t17 = space();
			label6 = element("label");
			t18 = text("XL");
			t19 = space();
			div17 = element("div");
			div13 = element("div");
			label7 = element("label");
			t20 = text("Available in store");
			t21 = space();
			div16 = element("div");
			div14 = element("div");
			input6 = element("input");
			t22 = space();
			label8 = element("label");
			t23 = text("Yes");
			t24 = space();
			div15 = element("div");
			input7 = element("input");
			t25 = space();
			label9 = element("label");
			t26 = text("No");
			t27 = space();
			div20 = element("div");
			div18 = element("div");
			t28 = space();
			div19 = element("div");
			button = element("button");
			t29 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
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

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div3 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price ($)");
			label1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t4 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input1 = claim_element(div4_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div6 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label2 = claim_element(div6_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t7 = claim_text(div12_nodes, "\n            ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div7 = claim_element(div11_nodes, "DIV", {}, false);
			var div7_nodes = children(div7);

			input2 = claim_element(div7_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(div7_nodes, "\n                    ");

			label3 = claim_element(div7_nodes, "LABEL", { class: true, for: true }, false);
			var label3_nodes = children(label3);

			t9 = claim_text(label3_nodes, "S");
			label3_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t10 = claim_text(div11_nodes, "\n                ");

			div8 = claim_element(div11_nodes, "DIV", {}, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t11 = claim_text(div8_nodes, "\n                    ");

			label4 = claim_element(div8_nodes, "LABEL", { class: true, for: true }, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "M");
			label4_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t13 = claim_text(div11_nodes, "\n                ");

			div9 = claim_element(div11_nodes, "DIV", {}, false);
			var div9_nodes = children(div9);

			input4 = claim_element(div9_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(div9_nodes, "\n                    ");

			label5 = claim_element(div9_nodes, "LABEL", { class: true, for: true }, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "L");
			label5_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t16 = claim_text(div11_nodes, "\n                ");

			div10 = claim_element(div11_nodes, "DIV", {}, false);
			var div10_nodes = children(div10);

			input5 = claim_element(div10_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(div10_nodes, "\n                    ");

			label6 = claim_element(div10_nodes, "LABEL", { class: true, for: true }, false);
			var label6_nodes = children(label6);

			t18 = claim_text(label6_nodes, "XL");
			label6_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t19 = claim_text(form_nodes, "\n\n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div13 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label7 = claim_element(div13_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t20 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t21 = claim_text(div17_nodes, "\n            ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", {}, false);
			var div14_nodes = children(div14);

			input6 = claim_element(div14_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t22 = claim_text(div14_nodes, "\n                    ");

			label8 = claim_element(div14_nodes, "LABEL", { class: true, for: true }, false);
			var label8_nodes = children(label8);

			t23 = claim_text(label8_nodes, "Yes");
			label8_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t24 = claim_text(div16_nodes, "\n                ");

			div15 = claim_element(div16_nodes, "DIV", {}, false);
			var div15_nodes = children(div15);

			input7 = claim_element(div15_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t25 = claim_text(div15_nodes, "\n                    ");

			label9 = claim_element(div15_nodes, "LABEL", { class: true, for: true }, false);
			var label9_nodes = children(label9);

			t26 = claim_text(label9_nodes, "No");
			label9_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t27 = claim_text(form_nodes, "\n\n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div18 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div18_nodes.forEach(detach);
			t28 = claim_text(div20_nodes, "\n            ");

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			button = claim_element(div19_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t29 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 4, 16, 162);
			div0.className = "column column-25";
			add_location(div0, file, 3, 12, 115);
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 7, 16, 268);
			div1.className = "column column-40";
			add_location(div1, file, 6, 12, 221);
			div2.className = "row";
			add_location(div2, file, 2, 8, 85);
			add_location(label1, file, 13, 16, 422);
			div3.className = "column column-25";
			add_location(div3, file, 12, 12, 375);
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 16, 16, 525);
			div4.className = "column column-40";
			add_location(div4, file, 15, 12, 478);
			div5.className = "row";
			add_location(div5, file, 11, 8, 345);
			add_location(label2, file, 22, 16, 680);
			div6.className = "column column-25";
			add_location(div6, file, 21, 12, 633);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			input2.id = "sizeS";
			add_location(input2, file, 26, 20, 804);
			label3.className = "label-inline";
			label3.htmlFor = "sizeS";
			add_location(label3, file, 27, 20, 885);
			add_location(div7, file, 25, 16, 778);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			input3.id = "sizeM";
			add_location(input3, file, 30, 20, 1000);
			label4.className = "label-inline";
			label4.htmlFor = "sizeM";
			add_location(label4, file, 31, 20, 1081);
			add_location(div8, file, 29, 16, 974);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			input4.id = "sizeL";
			add_location(input4, file, 34, 20, 1196);
			label5.className = "label-inline";
			label5.htmlFor = "sizeL";
			add_location(label5, file, 35, 20, 1277);
			add_location(div9, file, 33, 16, 1170);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			input5.id = "sizeXL";
			add_location(input5, file, 38, 20, 1392);
			label6.className = "label-inline";
			label6.htmlFor = "sizeXL";
			add_location(label6, file, 39, 20, 1475);
			add_location(div10, file, 37, 16, 1366);
			div11.className = "column column-40";
			add_location(div11, file, 24, 12, 731);
			div12.className = "row";
			add_location(div12, file, 20, 8, 603);
			add_location(label7, file, 46, 16, 1670);
			div13.className = "column column-25";
			add_location(div13, file, 45, 12, 1623);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			input6.id = "yesAvailable";
			add_location(input6, file, 50, 20, 1808);
			label8.className = "label-inline";
			label8.htmlFor = "yesAvailable";
			add_location(label8, file, 51, 20, 1901);
			add_location(div14, file, 49, 16, 1782);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			input7.id = "noAvailable";
			add_location(input7, file, 54, 20, 2025);
			label9.className = "label-inline";
			label9.htmlFor = "noAvailable";
			add_location(label9, file, 55, 20, 2116);
			add_location(div15, file, 53, 16, 1999);
			div16.className = "column column-40";
			add_location(div16, file, 48, 12, 1735);
			div17.className = "row";
			add_location(div17, file, 44, 8, 1593);
			div18.className = "column column-25";
			add_location(div18, file, 61, 12, 2269);
			button.type = "submit";
			button.className = "button-primary";
			add_location(button, file, 63, 16, 2365);
			div19.className = "column column-75";
			add_location(div19, file, 62, 12, 2318);
			div20.className = "row";
			add_location(div20, file, 60, 8, 2239);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 42);
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
			append(form, div5);
			append(div5, div3);
			append(div3, label1);
			append(label1, t3);
			append(div5, t4);
			append(div5, div4);
			append(div4, input1);
			append(form, t5);
			append(form, div12);
			append(div12, div6);
			append(div6, label2);
			append(label2, t6);
			append(div12, t7);
			append(div12, div11);
			append(div11, div7);
			append(div7, input2);
			append(div7, t8);
			append(div7, label3);
			append(label3, t9);
			append(div11, t10);
			append(div11, div8);
			append(div8, input3);
			append(div8, t11);
			append(div8, label4);
			append(label4, t12);
			append(div11, t13);
			append(div11, div9);
			append(div9, input4);
			append(div9, t14);
			append(div9, label5);
			append(label5, t15);
			append(div11, t16);
			append(div11, div10);
			append(div10, input5);
			append(div10, t17);
			append(div10, label6);
			append(label6, t18);
			append(form, t19);
			append(form, div17);
			append(div17, div13);
			append(div13, label7);
			append(label7, t20);
			append(div17, t21);
			append(div17, div16);
			append(div16, div14);
			append(div14, input6);
			append(div14, t22);
			append(div14, label8);
			append(label8, t23);
			append(div16, t24);
			append(div16, div15);
			append(div15, input7);
			append(div15, t25);
			append(div15, label9);
			append(label9, t26);
			append(form, t27);
			append(form, div20);
			append(div20, div18);
			append(div20, t28);
			append(div20, div19);
			append(div19, button);
			append(button, t29);
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

	var milligramlayout = new MilligramLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			milligramlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			milligramlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(milligramlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var milligramlayout_changes = {};
			if (changed.onLoaded) milligramlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) milligramlayout_changes.$$scope = { changed, ctx };
			milligramlayout.$set(milligramlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			milligramlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			milligramlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			milligramlayout.$destroy(detaching);
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
            milligram: new Milligram(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/milligram/horizontal-form/milligram',
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

class Milligram_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Milligram_1;

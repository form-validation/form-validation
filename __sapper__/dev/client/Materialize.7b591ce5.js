import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, g as space, i as text, k as claim_element, l as children, m as detach, j as claim_text, A as attr, n as add_location, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as MaterializeLayout, b as Materialize } from './chunk.4446dc66.js';
import './chunk.17752e4f.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="name" />
                <label>Product name</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="price" />
                <label>Price ($)</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <label>Size</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="s" />
                        <span>S</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="m" />
                        <span>M</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="l" />
                        <span>L</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="xl" />
                        <span>XL</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <label>Available in store</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="radio" name="availability" value="yes" />
                        <span>Yes</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="availability" value="no" />
                        <span>No</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <button type="submit" class="btn waves-effect waves-light">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Materialize.min.js"></script-tag>

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
                materialize: new FormValidation.plugins.Materialize(),
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

/* src/routes/guide/plugins/materialize/stacked-form/Materialize.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/materialize/stacked-form/Materialize.svelte";

// (1:0) <MaterializeLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, div0, input0, t0, label0, t1, t2, div3, div2, input1, t3, label1, t4, t5, div5, div4, label2, t6, t7, div11, div10, div6, label3, input2, t8, span0, t9, t10, div7, label4, input3, t11, span1, t12, t13, div8, label5, input4, t14, span2, t15, t16, div9, label6, input5, t17, span3, t18, t19, div13, div12, label7, t20, t21, div17, div16, div14, label8, input6, t22, span4, t23, t24, div15, label9, input7, t25, span5, t26, t27, div19, div18, button, t28;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			div0 = element("div");
			input0 = element("input");
			t0 = space();
			label0 = element("label");
			t1 = text("Product name");
			t2 = space();
			div3 = element("div");
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			label1 = element("label");
			t4 = text("Price ($)");
			t5 = space();
			div5 = element("div");
			div4 = element("div");
			label2 = element("label");
			t6 = text("Size");
			t7 = space();
			div11 = element("div");
			div10 = element("div");
			div6 = element("div");
			label3 = element("label");
			input2 = element("input");
			t8 = space();
			span0 = element("span");
			t9 = text("S");
			t10 = space();
			div7 = element("div");
			label4 = element("label");
			input3 = element("input");
			t11 = space();
			span1 = element("span");
			t12 = text("M");
			t13 = space();
			div8 = element("div");
			label5 = element("label");
			input4 = element("input");
			t14 = space();
			span2 = element("span");
			t15 = text("L");
			t16 = space();
			div9 = element("div");
			label6 = element("label");
			input5 = element("input");
			t17 = space();
			span3 = element("span");
			t18 = text("XL");
			t19 = space();
			div13 = element("div");
			div12 = element("div");
			label7 = element("label");
			t20 = text("Available in store");
			t21 = space();
			div17 = element("div");
			div16 = element("div");
			div14 = element("div");
			label8 = element("label");
			input6 = element("input");
			t22 = space();
			span4 = element("span");
			t23 = text("Yes");
			t24 = space();
			div15 = element("div");
			label9 = element("label");
			input7 = element("input");
			t25 = space();
			span5 = element("span");
			t26 = text("No");
			t27 = space();
			div19 = element("div");
			div18 = element("div");
			button = element("button");
			t28 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t0 = claim_text(div0_nodes, "\n                ");

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t1 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t3 = claim_text(div2_nodes, "\n                ");

			label1 = claim_element(div2_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Price ($)");
			label1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label2 = claim_element(div4_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div6 = claim_element(div10_nodes, "DIV", {}, false);
			var div6_nodes = children(div6);

			label3 = claim_element(div6_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label3_nodes, "\n                        ");

			span0 = claim_element(label3_nodes, "SPAN", {}, false);
			var span0_nodes = children(span0);

			t9 = claim_text(span0_nodes, "S");
			span0_nodes.forEach(detach);
			label3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t10 = claim_text(div10_nodes, "\n                ");

			div7 = claim_element(div10_nodes, "DIV", {}, false);
			var div7_nodes = children(div7);

			label4 = claim_element(div7_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t11 = claim_text(label4_nodes, "\n                        ");

			span1 = claim_element(label4_nodes, "SPAN", {}, false);
			var span1_nodes = children(span1);

			t12 = claim_text(span1_nodes, "M");
			span1_nodes.forEach(detach);
			label4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t13 = claim_text(div10_nodes, "\n                ");

			div8 = claim_element(div10_nodes, "DIV", {}, false);
			var div8_nodes = children(div8);

			label5 = claim_element(div8_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(label5_nodes, "\n                        ");

			span2 = claim_element(label5_nodes, "SPAN", {}, false);
			var span2_nodes = children(span2);

			t15 = claim_text(span2_nodes, "L");
			span2_nodes.forEach(detach);
			label5_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t16 = claim_text(div10_nodes, "\n                ");

			div9 = claim_element(div10_nodes, "DIV", {}, false);
			var div9_nodes = children(div9);

			label6 = claim_element(div9_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(label6_nodes, "\n                        ");

			span3 = claim_element(label6_nodes, "SPAN", {}, false);
			var span3_nodes = children(span3);

			t18 = claim_text(span3_nodes, "XL");
			span3_nodes.forEach(detach);
			label6_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t19 = claim_text(form_nodes, "\n\n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label7 = claim_element(div12_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t20 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n\n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", {}, false);
			var div14_nodes = children(div14);

			label8 = claim_element(div14_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t22 = claim_text(label8_nodes, "\n                        ");

			span4 = claim_element(label8_nodes, "SPAN", {}, false);
			var span4_nodes = children(span4);

			t23 = claim_text(span4_nodes, "Yes");
			span4_nodes.forEach(detach);
			label8_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t24 = claim_text(div16_nodes, "\n                ");

			div15 = claim_element(div16_nodes, "DIV", {}, false);
			var div15_nodes = children(div15);

			label9 = claim_element(div15_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t25 = claim_text(label9_nodes, "\n                        ");

			span5 = claim_element(label9_nodes, "SPAN", {}, false);
			var span5_nodes = children(span5);

			t26 = claim_text(span5_nodes, "No");
			span5_nodes.forEach(detach);
			label9_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t27 = claim_text(form_nodes, "\n\n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			button = claim_element(div18_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t28 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 4, 16, 167);
			add_location(label0, file, 5, 16, 217);
			div0.className = "input-field col s12";
			add_location(div0, file, 3, 12, 117);
			div1.className = "row";
			add_location(div1, file, 2, 8, 87);
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 11, 16, 368);
			add_location(label1, file, 12, 16, 419);
			div2.className = "input-field col s12";
			add_location(div2, file, 10, 12, 318);
			div3.className = "row";
			add_location(div3, file, 9, 8, 288);
			add_location(label2, file, 18, 16, 567);
			div4.className = "input-field col s12";
			add_location(div4, file, 17, 12, 517);
			div5.className = "row";
			add_location(div5, file, 16, 8, 487);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 26, 24, 768);
			add_location(span0, file, 27, 24, 842);
			add_location(label3, file, 25, 20, 736);
			add_location(div6, file, 24, 16, 710);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 32, 24, 983);
			add_location(span1, file, 33, 24, 1057);
			add_location(label4, file, 31, 20, 951);
			add_location(div7, file, 30, 16, 925);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 38, 24, 1198);
			add_location(span2, file, 39, 24, 1272);
			add_location(label5, file, 37, 20, 1166);
			add_location(div8, file, 36, 16, 1140);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 44, 24, 1413);
			add_location(span3, file, 45, 24, 1488);
			add_location(label6, file, 43, 20, 1381);
			add_location(div9, file, 42, 16, 1355);
			div10.className = "input-field col s12";
			add_location(div10, file, 23, 12, 660);
			div11.className = "row";
			add_location(div11, file, 22, 8, 630);
			add_location(label7, file, 53, 16, 1679);
			div12.className = "input-field col s12";
			add_location(div12, file, 52, 12, 1629);
			div13.className = "row";
			add_location(div13, file, 51, 8, 1599);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 61, 24, 1894);
			add_location(span4, file, 62, 24, 1973);
			add_location(label8, file, 60, 20, 1862);
			add_location(div14, file, 59, 16, 1836);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 67, 24, 2116);
			add_location(span5, file, 68, 24, 2194);
			add_location(label9, file, 66, 20, 2084);
			add_location(div15, file, 65, 16, 2058);
			div16.className = "input-field col s12";
			add_location(div16, file, 58, 12, 1786);
			div17.className = "row";
			add_location(div17, file, 57, 8, 1756);
			button.type = "submit";
			button.className = "btn waves-effect waves-light";
			add_location(button, file, 76, 16, 2373);
			div18.className = "col s12";
			add_location(div18, file, 75, 12, 2335);
			div19.className = "row";
			add_location(div19, file, 74, 8, 2305);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 44);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, div0);
			append(div0, input0);
			append(div0, t0);
			append(div0, label0);
			append(label0, t1);
			append(form, t2);
			append(form, div3);
			append(div3, div2);
			append(div2, input1);
			append(div2, t3);
			append(div2, label1);
			append(label1, t4);
			append(form, t5);
			append(form, div5);
			append(div5, div4);
			append(div4, label2);
			append(label2, t6);
			append(form, t7);
			append(form, div11);
			append(div11, div10);
			append(div10, div6);
			append(div6, label3);
			append(label3, input2);
			append(label3, t8);
			append(label3, span0);
			append(span0, t9);
			append(div10, t10);
			append(div10, div7);
			append(div7, label4);
			append(label4, input3);
			append(label4, t11);
			append(label4, span1);
			append(span1, t12);
			append(div10, t13);
			append(div10, div8);
			append(div8, label5);
			append(label5, input4);
			append(label5, t14);
			append(label5, span2);
			append(span2, t15);
			append(div10, t16);
			append(div10, div9);
			append(div9, label6);
			append(label6, input5);
			append(label6, t17);
			append(label6, span3);
			append(span3, t18);
			append(form, t19);
			append(form, div13);
			append(div13, div12);
			append(div12, label7);
			append(label7, t20);
			append(form, t21);
			append(form, div17);
			append(div17, div16);
			append(div16, div14);
			append(div14, label8);
			append(label8, input6);
			append(label8, t22);
			append(label8, span4);
			append(span4, t23);
			append(div16, t24);
			append(div16, div15);
			append(div15, label9);
			append(label9, input7);
			append(label9, t25);
			append(label9, span5);
			append(span5, t26);
			append(form, t27);
			append(form, div19);
			append(div19, div18);
			append(div18, button);
			append(button, t28);
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

	var materializelayout = new MaterializeLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			materializelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			materializelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(materializelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var materializelayout_changes = {};
			if (changed.onLoaded) materializelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) materializelayout_changes.$$scope = { changed, ctx };
			materializelayout.$set(materializelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			materializelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			materializelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			materializelayout.$destroy(detaching);
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
            materialize: new Materialize(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/materialize/stacked-form/materialize',
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

class Materialize_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Materialize_1;

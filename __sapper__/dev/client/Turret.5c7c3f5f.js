import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as TurretLayout, b as Turret } from './chunk.efe31d6e.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/5.1.3/turretcss.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="field">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>

        <div class="field">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>            

        <div class="field">
            <label>Size</label>
            <div>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="s" />
                    <span class="control-indicator"></span>
                    <span class="control-label">S</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="m" />
                    <span class="control-indicator"></span>
                    <span class="control-label">M</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="l" />
                    <span class="control-indicator"></span>
                    <span class="control-label">L</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="xl" />
                    <span class="control-indicator"></span>
                    <span class="control-label">XL</span>
                </label>
            </div>
        </div>

        <div class="field">
            <label>Available in store</label>
            <div>
                <label class="control radio">
                    <input type="radio" name="availability" value="yes" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Yes</span>
                </label>
                <label class="control radio">
                    <input type="radio" name="availability" value="no" />
                    <span class="control-indicator"></span>
                    <span class="control-label">No</span>
                </label>
            </div>
        </div>

        <div class="field">
            <button type="submit" class="button button-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Turret.min.js"></script-tag>

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
                turret: new FormValidation.plugins.Turret(),
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

/* src/routes/guide/plugins/turret/stacked-form/Turret.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/turret/stacked-form/Turret.svelte";

// (1:0) <TurretLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div0, label0, t0, t1, input0, t2, div1, label1, t3, t4, input1, t5, div3, label2, t6, t7, div2, label3, input2, t8, span0, t9, span1, t10, t11, label4, input3, t12, span2, t13, span3, t14, t15, label5, input4, t16, span4, t17, span5, t18, t19, label6, input5, t20, span6, t21, span7, t22, t23, div5, label7, t24, t25, div4, label8, input6, t26, span8, t27, span9, t28, t29, label9, input7, t30, span10, t31, span11, t32, t33, div6, button, t34;

	return {
		c: function create() {
			form = element("form");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Product name");
			t1 = space();
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			label1 = element("label");
			t3 = text("Price ($)");
			t4 = space();
			input1 = element("input");
			t5 = space();
			div3 = element("div");
			label2 = element("label");
			t6 = text("Size");
			t7 = space();
			div2 = element("div");
			label3 = element("label");
			input2 = element("input");
			t8 = space();
			span0 = element("span");
			t9 = space();
			span1 = element("span");
			t10 = text("S");
			t11 = space();
			label4 = element("label");
			input3 = element("input");
			t12 = space();
			span2 = element("span");
			t13 = space();
			span3 = element("span");
			t14 = text("M");
			t15 = space();
			label5 = element("label");
			input4 = element("input");
			t16 = space();
			span4 = element("span");
			t17 = space();
			span5 = element("span");
			t18 = text("L");
			t19 = space();
			label6 = element("label");
			input5 = element("input");
			t20 = space();
			span6 = element("span");
			t21 = space();
			span7 = element("span");
			t22 = text("XL");
			t23 = space();
			div5 = element("div");
			label7 = element("label");
			t24 = text("Available in store");
			t25 = space();
			div4 = element("div");
			label8 = element("label");
			input6 = element("input");
			t26 = space();
			span8 = element("span");
			t27 = space();
			span9 = element("span");
			t28 = text("Yes");
			t29 = space();
			label9 = element("label");
			input7 = element("input");
			t30 = space();
			span10 = element("span");
			t31 = space();
			span11 = element("span");
			t32 = text("No");
			t33 = space();
			div6 = element("div");
			button = element("button");
			t34 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n            ");

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label1 = claim_element(div1_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price ($)");
			label1_nodes.forEach(detach);
			t4 = claim_text(div1_nodes, "\n            ");

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n            \n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label2 = claim_element(div3_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t7 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", {}, false);
			var div2_nodes = children(div2);

			label3 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label3_nodes, "\n                    ");

			span0 = claim_element(label3_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			span0_nodes.forEach(detach);
			t9 = claim_text(label3_nodes, "\n                    ");

			span1 = claim_element(label3_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t10 = claim_text(span1_nodes, "S");
			span1_nodes.forEach(detach);
			label3_nodes.forEach(detach);
			t11 = claim_text(div2_nodes, "\n                ");

			label4 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t12 = claim_text(label4_nodes, "\n                    ");

			span2 = claim_element(label4_nodes, "SPAN", { class: true }, false);
			var span2_nodes = children(span2);

			span2_nodes.forEach(detach);
			t13 = claim_text(label4_nodes, "\n                    ");

			span3 = claim_element(label4_nodes, "SPAN", { class: true }, false);
			var span3_nodes = children(span3);

			t14 = claim_text(span3_nodes, "M");
			span3_nodes.forEach(detach);
			label4_nodes.forEach(detach);
			t15 = claim_text(div2_nodes, "\n                ");

			label5 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t16 = claim_text(label5_nodes, "\n                    ");

			span4 = claim_element(label5_nodes, "SPAN", { class: true }, false);
			var span4_nodes = children(span4);

			span4_nodes.forEach(detach);
			t17 = claim_text(label5_nodes, "\n                    ");

			span5 = claim_element(label5_nodes, "SPAN", { class: true }, false);
			var span5_nodes = children(span5);

			t18 = claim_text(span5_nodes, "L");
			span5_nodes.forEach(detach);
			label5_nodes.forEach(detach);
			t19 = claim_text(div2_nodes, "\n                ");

			label6 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t20 = claim_text(label6_nodes, "\n                    ");

			span6 = claim_element(label6_nodes, "SPAN", { class: true }, false);
			var span6_nodes = children(span6);

			span6_nodes.forEach(detach);
			t21 = claim_text(label6_nodes, "\n                    ");

			span7 = claim_element(label6_nodes, "SPAN", { class: true }, false);
			var span7_nodes = children(span7);

			t22 = claim_text(span7_nodes, "XL");
			span7_nodes.forEach(detach);
			label6_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label7 = claim_element(div5_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t24 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t25 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", {}, false);
			var div4_nodes = children(div4);

			label8 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t26 = claim_text(label8_nodes, "\n                    ");

			span8 = claim_element(label8_nodes, "SPAN", { class: true }, false);
			var span8_nodes = children(span8);

			span8_nodes.forEach(detach);
			t27 = claim_text(label8_nodes, "\n                    ");

			span9 = claim_element(label8_nodes, "SPAN", { class: true }, false);
			var span9_nodes = children(span9);

			t28 = claim_text(span9_nodes, "Yes");
			span9_nodes.forEach(detach);
			label8_nodes.forEach(detach);
			t29 = claim_text(div4_nodes, "\n                ");

			label9 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t30 = claim_text(label9_nodes, "\n                    ");

			span10 = claim_element(label9_nodes, "SPAN", { class: true }, false);
			var span10_nodes = children(span10);

			span10_nodes.forEach(detach);
			t31 = claim_text(label9_nodes, "\n                    ");

			span11 = claim_element(label9_nodes, "SPAN", { class: true }, false);
			var span11_nodes = children(span11);

			t32 = claim_text(span11_nodes, "No");
			span11_nodes.forEach(detach);
			label9_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t33 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			button = claim_element(div6_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t34 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 3, 12, 138);
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 4, 12, 178);
			div0.className = "field";
			add_location(div0, file, 2, 8, 106);
			add_location(label1, file, 8, 12, 268);
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 9, 12, 305);
			div1.className = "field";
			add_location(div1, file, 7, 8, 236);
			add_location(label2, file, 13, 12, 408);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 16, 20, 515);
			span0.className = "control-indicator";
			add_location(span0, file, 17, 20, 585);
			span1.className = "control-label";
			add_location(span1, file, 18, 20, 645);
			label3.className = "control checkbox";
			add_location(label3, file, 15, 16, 462);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 21, 20, 776);
			span2.className = "control-indicator";
			add_location(span2, file, 22, 20, 846);
			span3.className = "control-label";
			add_location(span3, file, 23, 20, 906);
			label4.className = "control checkbox";
			add_location(label4, file, 20, 16, 723);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 26, 20, 1037);
			span4.className = "control-indicator";
			add_location(span4, file, 27, 20, 1107);
			span5.className = "control-label";
			add_location(span5, file, 28, 20, 1167);
			label5.className = "control checkbox";
			add_location(label5, file, 25, 16, 984);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 31, 20, 1298);
			span6.className = "control-indicator";
			add_location(span6, file, 32, 20, 1369);
			span7.className = "control-label";
			add_location(span7, file, 33, 20, 1429);
			label6.className = "control checkbox";
			add_location(label6, file, 30, 16, 1245);
			add_location(div2, file, 14, 12, 440);
			div3.className = "field";
			add_location(div3, file, 12, 8, 376);
			add_location(label7, file, 39, 12, 1567);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 42, 20, 1685);
			span8.className = "control-indicator";
			add_location(span8, file, 43, 20, 1760);
			span9.className = "control-label";
			add_location(span9, file, 44, 20, 1820);
			label8.className = "control radio";
			add_location(label8, file, 41, 16, 1635);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 47, 20, 1950);
			span10.className = "control-indicator";
			add_location(span10, file, 48, 20, 2024);
			span11.className = "control-label";
			add_location(span11, file, 49, 20, 2084);
			label9.className = "control radio";
			add_location(label9, file, 46, 16, 1900);
			add_location(div4, file, 40, 12, 1613);
			div5.className = "field";
			add_location(div5, file, 38, 8, 1535);
			button.type = "submit";
			button.className = "button button-primary";
			add_location(button, file, 55, 12, 2222);
			div6.className = "field";
			add_location(div6, file, 54, 8, 2190);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "fv-stacked-form";
			add_location(form, file, 1, 4, 39);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div0);
			append(div0, label0);
			append(label0, t0);
			append(div0, t1);
			append(div0, input0);
			append(form, t2);
			append(form, div1);
			append(div1, label1);
			append(label1, t3);
			append(div1, t4);
			append(div1, input1);
			append(form, t5);
			append(form, div3);
			append(div3, label2);
			append(label2, t6);
			append(div3, t7);
			append(div3, div2);
			append(div2, label3);
			append(label3, input2);
			append(label3, t8);
			append(label3, span0);
			append(label3, t9);
			append(label3, span1);
			append(span1, t10);
			append(div2, t11);
			append(div2, label4);
			append(label4, input3);
			append(label4, t12);
			append(label4, span2);
			append(label4, t13);
			append(label4, span3);
			append(span3, t14);
			append(div2, t15);
			append(div2, label5);
			append(label5, input4);
			append(label5, t16);
			append(label5, span4);
			append(label5, t17);
			append(label5, span5);
			append(span5, t18);
			append(div2, t19);
			append(div2, label6);
			append(label6, input5);
			append(label6, t20);
			append(label6, span6);
			append(label6, t21);
			append(label6, span7);
			append(span7, t22);
			append(form, t23);
			append(form, div5);
			append(div5, label7);
			append(label7, t24);
			append(div5, t25);
			append(div5, div4);
			append(div4, label8);
			append(label8, input6);
			append(label8, t26);
			append(label8, span8);
			append(label8, t27);
			append(label8, span9);
			append(span9, t28);
			append(div4, t29);
			append(div4, label9);
			append(label9, input7);
			append(label9, t30);
			append(label9, span10);
			append(label9, t31);
			append(label9, span11);
			append(span11, t32);
			append(form, t33);
			append(form, div6);
			append(div6, button);
			append(button, t34);
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

	var turretlayout = new TurretLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			turretlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			turretlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(turretlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var turretlayout_changes = {};
			if (changed.onLoaded) turretlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) turretlayout_changes.$$scope = { changed, ctx };
			turretlayout.$set(turretlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			turretlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			turretlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			turretlayout.$destroy(detaching);
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
            turret: new Turret(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/turret/stacked-form/turret',
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

class Turret_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Turret_1;

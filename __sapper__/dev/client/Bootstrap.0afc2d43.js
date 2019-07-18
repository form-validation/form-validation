import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <label>Product name</label>
            <input type="text" class="form-control" name="name" />
        </div>

        <div class="form-group">
            <label>Price</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input type="text" class="form-control" name="price" />
            </div>
        </div>

        <div class="form-group">
            <label>Size</label>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="s" />
                <label class="form-check-label">S</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="m" />
                <label class="form-check-label">M</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="l" />
                <label class="form-check-label">L</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="xl" />
                <label class="form-check-label">XL</label>
            </div>
        </div>

        <div class="form-group">
            <label>Available in store</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="availability" value="yes" />
                <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="availability" value="no" />
                <label class="form-check-label">No</label>
            </div>
        </div>

        <div class="form-group">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="btn btn-primary">Add product</button>
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
                bootstrap: new FormValidation.plugins.Bootstrap(),
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

/* src/routes/guide/plugins/bootstrap/stacked-form/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bootstrap/stacked-form/Bootstrap.svelte";

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div0, label0, t0, t1, input0, t2, div3, label1, t3, t4, div2, div1, span, t5, t6, input1, t7, div8, label2, t8, t9, div4, input2, t10, label3, t11, t12, div5, input3, t13, label4, t14, t15, div6, input4, t16, label5, t17, t18, div7, input5, t19, label6, t20, t21, div11, label7, t22, t23, div9, input6, t24, label8, t25, t26, div10, input7, t27, label9, t28, t29, div12, button, t30;

	return {
		c: function create() {
			form = element("form");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Product name");
			t1 = space();
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div2 = element("div");
			div1 = element("div");
			span = element("span");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div8 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div4 = element("div");
			input2 = element("input");
			t10 = space();
			label3 = element("label");
			t11 = text("S");
			t12 = space();
			div5 = element("div");
			input3 = element("input");
			t13 = space();
			label4 = element("label");
			t14 = text("M");
			t15 = space();
			div6 = element("div");
			input4 = element("input");
			t16 = space();
			label5 = element("label");
			t17 = text("L");
			t18 = space();
			div7 = element("div");
			input5 = element("input");
			t19 = space();
			label6 = element("label");
			t20 = text("XL");
			t21 = space();
			div11 = element("div");
			label7 = element("label");
			t22 = text("Available in store");
			t23 = space();
			div9 = element("div");
			input6 = element("input");
			t24 = space();
			label8 = element("label");
			t25 = text("Yes");
			t26 = space();
			div10 = element("div");
			input7 = element("input");
			t27 = space();
			label9 = element("label");
			t28 = text("No");
			t29 = space();
			div12 = element("div");
			button = element("button");
			t30 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n            ");

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			t4 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			span = claim_element(div1_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t6 = claim_text(div2_nodes, "\n                ");

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label2 = claim_element(div8_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t9 = claim_text(div8_nodes, "\n            ");

			div4 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input2 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(div4_nodes, "\n                ");

			label3 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t11 = claim_text(label3_nodes, "S");
			label3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t12 = claim_text(div8_nodes, "\n            ");

			div5 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input3 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t13 = claim_text(div5_nodes, "\n                ");

			label4 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t14 = claim_text(label4_nodes, "M");
			label4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t15 = claim_text(div8_nodes, "\n            ");

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input4 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t16 = claim_text(div6_nodes, "\n                ");

			label5 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t17 = claim_text(label5_nodes, "L");
			label5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t18 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input5 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t19 = claim_text(div7_nodes, "\n                ");

			label6 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t20 = claim_text(label6_nodes, "XL");
			label6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label7 = claim_element(div11_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t23 = claim_text(div11_nodes, "\n            ");

			div9 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input6 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t24 = claim_text(div9_nodes, "\n                ");

			label8 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			t25 = claim_text(label8_nodes, "Yes");
			label8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t26 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			input7 = claim_element(div10_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t27 = claim_text(div10_nodes, "\n                ");

			label9 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			t28 = claim_text(label9_nodes, "No");
			label9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n    \n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			button = claim_element(div12_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t30 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 3, 12, 122);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "name";
			add_location(input0, file, 4, 12, 162);
			div0.className = "form-group";
			add_location(div0, file, 2, 8, 85);
			add_location(label1, file, 8, 12, 282);
			span.className = "input-group-text";
			add_location(span, file, 11, 20, 411);
			div1.className = "input-group-prepend";
			add_location(div1, file, 10, 16, 357);
			attr(input1, "type", "text");
			input1.className = "form-control";
			input1.name = "price";
			add_location(input1, file, 13, 16, 490);
			div2.className = "input-group";
			add_location(div2, file, 9, 12, 315);
			div3.className = "form-group";
			add_location(div3, file, 7, 8, 245);
			add_location(label2, file, 18, 12, 630);
			attr(input2, "type", "checkbox");
			input2.className = "form-check-input";
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 20, 16, 703);
			label3.className = "form-check-label";
			add_location(label3, file, 21, 16, 794);
			div4.className = "form-check";
			add_location(div4, file, 19, 12, 662);
			attr(input3, "type", "checkbox");
			input3.className = "form-check-input";
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 24, 16, 908);
			label4.className = "form-check-label";
			add_location(label4, file, 25, 16, 999);
			div5.className = "form-check";
			add_location(div5, file, 23, 12, 867);
			attr(input4, "type", "checkbox");
			input4.className = "form-check-input";
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 28, 16, 1113);
			label5.className = "form-check-label";
			add_location(label5, file, 29, 16, 1204);
			div6.className = "form-check";
			add_location(div6, file, 27, 12, 1072);
			attr(input5, "type", "checkbox");
			input5.className = "form-check-input";
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 32, 16, 1318);
			label6.className = "form-check-label";
			add_location(label6, file, 33, 16, 1410);
			div7.className = "form-check";
			add_location(div7, file, 31, 12, 1277);
			div8.className = "form-group";
			add_location(div8, file, 17, 8, 593);
			add_location(label7, file, 38, 12, 1537);
			attr(input6, "type", "radio");
			input6.className = "form-check-input";
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 40, 16, 1624);
			label8.className = "form-check-label";
			add_location(label8, file, 41, 16, 1720);
			div9.className = "form-check";
			add_location(div9, file, 39, 12, 1583);
			attr(input7, "type", "radio");
			input7.className = "form-check-input";
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 44, 16, 1836);
			label9.className = "form-check-label";
			add_location(label9, file, 45, 16, 1931);
			div10.className = "form-check";
			add_location(div10, file, 43, 12, 1795);
			div11.className = "form-group";
			add_location(div11, file, 37, 8, 1500);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 51, 12, 2141);
			div12.className = "form-group";
			add_location(div12, file, 49, 8, 2021);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 42);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div0);
			append(div0, label0);
			append(label0, t0);
			append(div0, t1);
			append(div0, input0);
			append(form, t2);
			append(form, div3);
			append(div3, label1);
			append(label1, t3);
			append(div3, t4);
			append(div3, div2);
			append(div2, div1);
			append(div1, span);
			append(span, t5);
			append(div2, t6);
			append(div2, input1);
			append(form, t7);
			append(form, div8);
			append(div8, label2);
			append(label2, t8);
			append(div8, t9);
			append(div8, div4);
			append(div4, input2);
			append(div4, t10);
			append(div4, label3);
			append(label3, t11);
			append(div8, t12);
			append(div8, div5);
			append(div5, input3);
			append(div5, t13);
			append(div5, label4);
			append(label4, t14);
			append(div8, t15);
			append(div8, div6);
			append(div6, input4);
			append(div6, t16);
			append(div6, label5);
			append(label5, t17);
			append(div8, t18);
			append(div8, div7);
			append(div7, input5);
			append(div7, t19);
			append(div7, label6);
			append(label6, t20);
			append(form, t21);
			append(form, div11);
			append(div11, label7);
			append(label7, t22);
			append(div11, t23);
			append(div11, div9);
			append(div9, input6);
			append(div9, t24);
			append(div9, label8);
			append(label8, t25);
			append(div11, t26);
			append(div11, div10);
			append(div10, input7);
			append(div10, t27);
			append(div10, label9);
			append(label9, t28);
			append(form, t29);
			append(form, div12);
			append(div12, button);
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

	var bootstraplayout = new BootstrapLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstraplayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstraplayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstraplayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstraplayout_changes = {};
			if (changed.onLoaded) bootstraplayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bootstraplayout_changes.$$scope = { changed, ctx };
			bootstraplayout.$set(bootstraplayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstraplayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstraplayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstraplayout.$destroy(detaching);
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
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap/stacked-form/bootstrap',
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

class Bootstrap_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap_1;

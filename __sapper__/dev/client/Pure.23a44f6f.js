import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as PureLayout, b as Pure } from './chunk.18bdfd3f.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/1.0.0/pure-min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="pure-form pure-form-stacked">
        <div class="pure-control-group">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>

        <div class="pure-control-group">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>

        <div class="pure-control-group">
            <label>Size</label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="s" /> S
            </label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="m" /> M
            </label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="l" /> L
            </label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="xl" /> XL
            </label>
        </div>

        <div class="pure-control-group">
            <label>Available in store</label>
            <label class="pure-radio">
                <input type="radio" name="availability" value="yes" /> Yes
            </label>
            <label class="pure-radio">
                <input type="radio" name="availability" value="no" /> No
            </label>
        </div>

        <div class="pure-control-group">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="pure-button pure-button-primary">Add product</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Pure.min.js"></script-tag>

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
                pure: new FormValidation.plugins.Pure(),
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

/* src/routes/guide/plugins/pure/stacked-form/Pure.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/pure/stacked-form/Pure.svelte";

// (1:0) <PureLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div0, label0, t0, t1, input0, t2, div1, label1, t3, t4, input1, t5, div2, label2, t6, t7, label3, input2, t8, t9, label4, input3, t10, t11, label5, input4, t12, t13, label6, input5, t14, t15, div3, label7, t16, t17, label8, input6, t18, t19, label9, input7, t20, t21, div4, button, t22;

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
			div2 = element("div");
			label2 = element("label");
			t6 = text("Size");
			t7 = space();
			label3 = element("label");
			input2 = element("input");
			t8 = text(" S");
			t9 = space();
			label4 = element("label");
			input3 = element("input");
			t10 = text(" M");
			t11 = space();
			label5 = element("label");
			input4 = element("input");
			t12 = text(" L");
			t13 = space();
			label6 = element("label");
			input5 = element("input");
			t14 = text(" XL");
			t15 = space();
			div3 = element("div");
			label7 = element("label");
			t16 = text("Available in store");
			t17 = space();
			label8 = element("label");
			input6 = element("input");
			t18 = text(" Yes");
			t19 = space();
			label9 = element("label");
			input7 = element("input");
			t20 = text(" No");
			t21 = space();
			div4 = element("div");
			button = element("button");
			t22 = text("Add product");
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
			t2 = claim_text(form_nodes, "\n    \n        ");

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
			t5 = claim_text(form_nodes, "\n    \n        ");

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label2 = claim_element(div2_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t7 = claim_text(div2_nodes, "\n            ");

			label3 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			t9 = claim_text(div2_nodes, "\n            ");

			label4 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t10 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			t11 = claim_text(div2_nodes, "\n            ");

			label5 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			t13 = claim_text(div2_nodes, "\n            ");

			label6 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t14 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n    \n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label7 = claim_element(div3_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t16 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t17 = claim_text(div3_nodes, "\n            ");

			label8 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			t19 = claim_text(div3_nodes, "\n            ");

			label9 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t20 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			button = claim_element(div4_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t22 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 3, 12, 161);
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 4, 12, 201);
			div0.className = "pure-control-group";
			add_location(div0, file, 2, 8, 116);
			add_location(label1, file, 8, 12, 308);
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 9, 12, 345);
			div1.className = "pure-control-group";
			add_location(div1, file, 7, 8, 263);
			add_location(label2, file, 13, 12, 453);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 15, 16, 531);
			label3.className = "pure-checkbox";
			add_location(label3, file, 14, 12, 485);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 18, 16, 662);
			label4.className = "pure-checkbox";
			add_location(label4, file, 17, 12, 616);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 21, 16, 793);
			label5.className = "pure-checkbox";
			add_location(label5, file, 20, 12, 747);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 24, 16, 924);
			label6.className = "pure-checkbox";
			add_location(label6, file, 23, 12, 878);
			div2.className = "pure-control-group";
			add_location(div2, file, 12, 8, 408);
			add_location(label7, file, 29, 12, 1072);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 31, 16, 1161);
			label8.className = "pure-radio";
			add_location(label8, file, 30, 12, 1118);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 34, 16, 1296);
			label9.className = "pure-radio";
			add_location(label9, file, 33, 12, 1253);
			div3.className = "pure-control-group";
			add_location(div3, file, 28, 8, 1027);
			button.type = "submit";
			button.className = "pure-button pure-button-primary";
			add_location(button, file, 40, 12, 1530);
			div4.className = "pure-control-group";
			add_location(div4, file, 38, 8, 1402);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "pure-form pure-form-stacked";
			add_location(form, file, 1, 4, 37);
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
			append(form, div2);
			append(div2, label2);
			append(label2, t6);
			append(div2, t7);
			append(div2, label3);
			append(label3, input2);
			append(label3, t8);
			append(div2, t9);
			append(div2, label4);
			append(label4, input3);
			append(label4, t10);
			append(div2, t11);
			append(div2, label5);
			append(label5, input4);
			append(label5, t12);
			append(div2, t13);
			append(div2, label6);
			append(label6, input5);
			append(label6, t14);
			append(form, t15);
			append(form, div3);
			append(div3, label7);
			append(label7, t16);
			append(div3, t17);
			append(div3, label8);
			append(label8, input6);
			append(label8, t18);
			append(div3, t19);
			append(div3, label9);
			append(label9, input7);
			append(label9, t20);
			append(form, t21);
			append(form, div4);
			append(div4, button);
			append(button, t22);
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

	var purelayout = new PureLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			purelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			purelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(purelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var purelayout_changes = {};
			if (changed.onLoaded) purelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) purelayout_changes.$$scope = { changed, ctx };
			purelayout.$set(purelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			purelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			purelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			purelayout.$destroy(detaching);
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
            pure: new Pure(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/pure/stacked-form/pure',
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

class Pure_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Pure_1;

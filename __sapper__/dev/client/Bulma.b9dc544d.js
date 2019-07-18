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
        <div class="field">
            <label class="label">Product name</label>
            <div class="control">
                <input type="text" class="input" name="name" />
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="field has-addons">
                <div class="control">
                    <span class="button is-static">$</span>
                </div>
                <div class="control">
                    <input type="text" class="input" name="price" />
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Size</label>
            <div class="control">
                <label class="checkbox"><input name="size[]" type="checkbox" value="s" /> S</label>
                <label class="checkbox"><input name="size[]" type="checkbox" value="m" /> M</label>
                <label class="checkbox"><input name="size[]" type="checkbox" value="l" /> L</label>
                <label class="checkbox"><input name="size[]" type="checkbox" value="xl" /> XL</label>
            </div>
        </div>

        <div class="field">
            <label class="label">Available in store</label>
            <div class="control">
                <label class="radio"><input name="availability" type="radio" value="yes" /> Yes</label>
                <label class="radio"><input name="availability" type="radio" value="no" /> No</label>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-primary" type="submit">Submit</button>
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

/* src/routes/guide/plugins/bulma/stacked-form/Bulma.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bulma/stacked-form/Bulma.svelte";

// (1:0) <BulmaLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div5, label1, t3, t4, div4, div2, span, t5, t6, div3, input1, t7, div7, label2, t8, t9, div6, label3, input2, t10, t11, label4, input3, t12, t13, label5, input4, t14, t15, label6, input5, t16, t17, div9, label7, t18, t19, div8, label8, input6, t20, t21, label9, input7, t22, t23, div11, div10, button, t24;

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
			div5 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div4 = element("div");
			div2 = element("div");
			span = element("span");
			t5 = text("$");
			t6 = space();
			div3 = element("div");
			input1 = element("input");
			t7 = space();
			div7 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div6 = element("div");
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
			div9 = element("div");
			label7 = element("label");
			t18 = text("Available in store");
			t19 = space();
			div8 = element("div");
			label8 = element("label");
			input6 = element("input");
			t20 = text(" Yes");
			t21 = space();
			label9 = element("label");
			input7 = element("input");
			t22 = text(" No");
			t23 = space();
			div11 = element("div");
			div10 = element("div");
			button = element("button");
			t24 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n            ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label1 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			t4 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div2 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			span = claim_element(div2_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, "$");
			span_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t6 = claim_text(div4_nodes, "\n                ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input1 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label2 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t9 = claim_text(div7_nodes, "\n            ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label3 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			t11 = claim_text(div6_nodes, "\n                ");

			label4 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t12 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			t13 = claim_text(div6_nodes, "\n                ");

			label5 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			t15 = claim_text(div6_nodes, "\n                ");

			label6 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t16 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n    \n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label7 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t18 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t19 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label8 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t20 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			t21 = claim_text(div8_nodes, "\n                ");

			label9 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t22 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			button = claim_element(div10_nodes, "BUTTON", { class: true, type: true }, false);
			var button_nodes = children(button);

			t24 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "label";
			add_location(label0, file, 3, 12, 113);
			attr(input0, "type", "text");
			input0.className = "input";
			input0.name = "name";
			add_location(input0, file, 5, 16, 205);
			div0.className = "control";
			add_location(div0, file, 4, 12, 167);
			div1.className = "field";
			add_location(div1, file, 2, 8, 81);
			label1.className = "label";
			add_location(label1, file, 10, 12, 332);
			span.className = "button is-static";
			add_location(span, file, 13, 20, 468);
			div2.className = "control";
			add_location(div2, file, 12, 16, 426);
			attr(input1, "type", "text");
			input1.className = "input";
			input1.name = "price";
			add_location(input1, file, 16, 20, 589);
			div3.className = "control";
			add_location(div3, file, 15, 16, 547);
			div4.className = "field has-addons";
			add_location(div4, file, 11, 12, 379);
			div5.className = "field";
			add_location(div5, file, 9, 8, 300);
			label2.className = "label";
			add_location(label2, file, 22, 12, 740);
			input2.name = "size[]";
			attr(input2, "type", "checkbox");
			input2.value = "s";
			add_location(input2, file, 24, 40, 848);
			label3.className = "checkbox";
			add_location(label3, file, 24, 16, 824);
			input3.name = "size[]";
			attr(input3, "type", "checkbox");
			input3.value = "m";
			add_location(input3, file, 25, 40, 948);
			label4.className = "checkbox";
			add_location(label4, file, 25, 16, 924);
			input4.name = "size[]";
			attr(input4, "type", "checkbox");
			input4.value = "l";
			add_location(input4, file, 26, 40, 1048);
			label5.className = "checkbox";
			add_location(label5, file, 26, 16, 1024);
			input5.name = "size[]";
			attr(input5, "type", "checkbox");
			input5.value = "xl";
			add_location(input5, file, 27, 40, 1148);
			label6.className = "checkbox";
			add_location(label6, file, 27, 16, 1124);
			div6.className = "control";
			add_location(div6, file, 23, 12, 786);
			div7.className = "field";
			add_location(div7, file, 21, 8, 708);
			label7.className = "label";
			add_location(label7, file, 32, 12, 1289);
			input6.name = "availability";
			attr(input6, "type", "radio");
			input6.value = "yes";
			add_location(input6, file, 34, 37, 1408);
			label8.className = "radio";
			add_location(label8, file, 34, 16, 1387);
			input7.name = "availability";
			attr(input7, "type", "radio");
			input7.value = "no";
			add_location(input7, file, 35, 37, 1512);
			label9.className = "radio";
			add_location(label9, file, 35, 16, 1491);
			div8.className = "control";
			add_location(div8, file, 33, 12, 1349);
			div9.className = "field";
			add_location(div9, file, 31, 8, 1257);
			button.className = "button is-primary";
			button.type = "submit";
			add_location(button, file, 41, 16, 1690);
			div10.className = "control";
			add_location(div10, file, 40, 12, 1652);
			div11.className = "field";
			add_location(div11, file, 39, 8, 1620);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 38);
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
			append(form, div5);
			append(div5, label1);
			append(label1, t3);
			append(div5, t4);
			append(div5, div4);
			append(div4, div2);
			append(div2, span);
			append(span, t5);
			append(div4, t6);
			append(div4, div3);
			append(div3, input1);
			append(form, t7);
			append(form, div7);
			append(div7, label2);
			append(label2, t8);
			append(div7, t9);
			append(div7, div6);
			append(div6, label3);
			append(label3, input2);
			append(label3, t10);
			append(div6, t11);
			append(div6, label4);
			append(label4, input3);
			append(label4, t12);
			append(div6, t13);
			append(div6, label5);
			append(label5, input4);
			append(label5, t14);
			append(div6, t15);
			append(div6, label6);
			append(label6, input5);
			append(label6, t16);
			append(form, t17);
			append(form, div9);
			append(div9, label7);
			append(label7, t18);
			append(div9, t19);
			append(div9, div8);
			append(div8, label8);
			append(label8, input6);
			append(label8, t20);
			append(div8, t21);
			append(div8, label9);
			append(label9, input7);
			append(label9, t22);
			append(form, t23);
			append(form, div11);
			append(div11, div10);
			append(div10, button);
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
                sender: '/guide/plugins/bulma/stacked-form/bulma',
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

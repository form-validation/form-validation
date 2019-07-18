import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as Bootstrap3Layout, b as Bootstrap3 } from './chunk.d41a5e4c.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <label class="col-xs-3 control-label">Product name</label>
            <div class="col-xs-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>

        <div class="form-group">
            <label class="col-xs-3 control-label">Price</label>
            <div class="col-xs-5">
                <div class="input-group">
                    <div class="input-group-addon">$</div>
                    <input type="text" class="form-control" name="price" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="col-xs-3 control-label">Size</label>
            <div class="col-xs-6">
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="s" /> S</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="m" /> M</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="l" /> L</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="col-xs-3 control-label">Available in store</label>
            <div class="col-xs-6">
                <div class="radio">
                    <label><input type="radio" name="availability" value="yes" /> Yes</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="availability" value="no" /> No</label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-xs-9 col-xs-offset-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Add product</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap3.min.js"></script-tag>

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
                bootstrap3: new FormValidation.plugins.Bootstrap3(),
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

/* src/routes/guide/plugins/bootstrap3/horizontal-form/Bootstrap3.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bootstrap3/horizontal-form/Bootstrap3.svelte";

// (1:0) <Bootstrap3Layout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div5, label1, t3, t4, div4, div3, div2, t5, t6, input1, t7, div11, label2, t8, t9, div10, div6, label3, input2, t10, t11, div7, label4, input3, t12, t13, div8, label5, input4, t14, t15, div9, label6, input5, t16, t17, div15, label7, t18, t19, div14, div12, label8, input6, t20, t21, div13, label9, input7, t22, t23, div17, div16, button, t24;

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
			div3 = element("div");
			div2 = element("div");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div11 = element("div");
			label2 = element("label");
			t8 = text("Size");
			t9 = space();
			div10 = element("div");
			div6 = element("div");
			label3 = element("label");
			input2 = element("input");
			t10 = text(" S");
			t11 = space();
			div7 = element("div");
			label4 = element("label");
			input3 = element("input");
			t12 = text(" M");
			t13 = space();
			div8 = element("div");
			label5 = element("label");
			input4 = element("input");
			t14 = text(" L");
			t15 = space();
			div9 = element("div");
			label6 = element("label");
			input5 = element("input");
			t16 = text(" XL");
			t17 = space();
			div15 = element("div");
			label7 = element("label");
			t18 = text("Available in store");
			t19 = space();
			div14 = element("div");
			div12 = element("div");
			label8 = element("label");
			input6 = element("input");
			t20 = text(" Yes");
			t21 = space();
			div13 = element("div");
			label9 = element("label");
			input7 = element("input");
			t22 = text(" No");
			t23 = space();
			div17 = element("div");
			div16 = element("div");
			button = element("button");
			t24 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
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

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			t5 = claim_text(div2_nodes, "$");
			div2_nodes.forEach(detach);
			t6 = claim_text(div3_nodes, "\n                    ");

			input1 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n    \n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label2 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t8 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t9 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div6 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label3 = claim_element(div6_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t11 = claim_text(div10_nodes, "\n                ");

			div7 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label4 = claim_element(div7_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t12 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t13 = claim_text(div10_nodes, "\n                ");

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label5 = claim_element(div8_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t15 = claim_text(div10_nodes, "\n                ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label6 = claim_element(div9_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t16 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n    \n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label7 = claim_element(div15_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t18 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t19 = claim_text(div15_nodes, "\n            ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label8 = claim_element(div12_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t20 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t21 = claim_text(div14_nodes, "\n                ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label9 = claim_element(div13_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t22 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n    \n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			button = claim_element(div16_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t24 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-xs-3 control-label";
			add_location(label0, file, 3, 12, 147);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "name";
			add_location(input0, file, 5, 16, 257);
			div0.className = "col-xs-4";
			add_location(div0, file, 4, 12, 218);
			div1.className = "form-group";
			add_location(div1, file, 2, 8, 110);
			label1.className = "col-xs-3 control-label";
			add_location(label1, file, 10, 12, 396);
			div2.className = "input-group-addon";
			add_location(div2, file, 13, 20, 545);
			attr(input1, "type", "text");
			input1.className = "form-control";
			input1.name = "price";
			add_location(input1, file, 14, 20, 604);
			div3.className = "input-group";
			add_location(div3, file, 12, 16, 499);
			div4.className = "col-xs-5";
			add_location(div4, file, 11, 12, 460);
			div5.className = "form-group";
			add_location(div5, file, 9, 8, 359);
			label2.className = "col-xs-3 control-label";
			add_location(label2, file, 20, 12, 767);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 23, 27, 919);
			add_location(label3, file, 23, 20, 912);
			div6.className = "checkbox";
			add_location(div6, file, 22, 16, 869);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 26, 27, 1068);
			add_location(label4, file, 26, 20, 1061);
			div7.className = "checkbox";
			add_location(div7, file, 25, 16, 1018);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 29, 27, 1217);
			add_location(label5, file, 29, 20, 1210);
			div8.className = "checkbox";
			add_location(div8, file, 28, 16, 1167);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 32, 27, 1366);
			add_location(label6, file, 32, 20, 1359);
			div9.className = "checkbox";
			add_location(div9, file, 31, 16, 1316);
			div10.className = "col-xs-6";
			add_location(div10, file, 21, 12, 830);
			div11.className = "form-group";
			add_location(div11, file, 19, 8, 730);
			label7.className = "col-xs-3 control-label";
			add_location(label7, file, 38, 12, 1535);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 41, 27, 1698);
			add_location(label8, file, 41, 20, 1691);
			div12.className = "radio";
			add_location(div12, file, 40, 16, 1651);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 44, 27, 1851);
			add_location(label9, file, 44, 20, 1844);
			div13.className = "radio";
			add_location(div13, file, 43, 16, 1804);
			div14.className = "col-xs-6";
			add_location(div14, file, 39, 12, 1612);
			div15.className = "form-group";
			add_location(div15, file, 37, 8, 1498);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 52, 16, 2165);
			div16.className = "col-xs-9 col-xs-offset-3";
			add_location(div16, file, 50, 12, 2023);
			div17.className = "form-group";
			add_location(div17, file, 49, 8, 1986);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "form-horizontal";
			add_location(form, file, 1, 4, 43);
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
			append(div4, div3);
			append(div3, div2);
			append(div2, t5);
			append(div3, t6);
			append(div3, input1);
			append(form, t7);
			append(form, div11);
			append(div11, label2);
			append(label2, t8);
			append(div11, t9);
			append(div11, div10);
			append(div10, div6);
			append(div6, label3);
			append(label3, input2);
			append(label3, t10);
			append(div10, t11);
			append(div10, div7);
			append(div7, label4);
			append(label4, input3);
			append(label4, t12);
			append(div10, t13);
			append(div10, div8);
			append(div8, label5);
			append(label5, input4);
			append(label5, t14);
			append(div10, t15);
			append(div10, div9);
			append(div9, label6);
			append(label6, input5);
			append(label6, t16);
			append(form, t17);
			append(form, div15);
			append(div15, label7);
			append(label7, t18);
			append(div15, t19);
			append(div15, div14);
			append(div14, div12);
			append(div12, label8);
			append(label8, input6);
			append(label8, t20);
			append(div14, t21);
			append(div14, div13);
			append(div13, label9);
			append(label9, input7);
			append(label9, t22);
			append(form, t23);
			append(form, div17);
			append(div17, div16);
			append(div16, button);
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

	var bootstrap3layout = new Bootstrap3Layout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstrap3layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstrap3layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstrap3layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstrap3layout_changes = {};
			if (changed.onLoaded) bootstrap3layout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bootstrap3layout_changes.$$scope = { changed, ctx };
			bootstrap3layout.$set(bootstrap3layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstrap3layout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstrap3layout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstrap3layout.$destroy(detaching);
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
            bootstrap3: new Bootstrap3(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap3/horizontal-form/bootstrap3',
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

class Bootstrap3_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap3_1;

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

    <style>
    // Customize the icon's position
    .fv-plugins-bootstrap .form-group.inputGroupContainer .fv-plugins-icon,
    .fv-plugins-bootstrap .form-group.selectContainer .fv-plugins-icon {
        right: -20px;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Product name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>

        <div class="form-group row inputGroupContainer">
            <label class="col-sm-3 col-form-label">Price</label>
            <div class="col-sm-5">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" name="price" />
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group row selectContainer">
            <label class="col-sm-3 col-form-label">Size</label>
            <div class="col-sm-5">
                <select class="form-control" name="size">
                    <option value="">Choose a size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Add Product</button>
            </div>
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
                size: {
                    validators: {
                        notEmpty: {
                            message: 'The size is required'
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

/* src/routes/guide/examples/adjusting-icon-position/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/adjusting-icon-position/Bootstrap.svelte";

// (8:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div6, label1, t3, t4, div5, div4, div2, span0, t5, t6, input1, t7, div3, span1, t8, t9, div8, label2, t10, t11, div7, select, option0, t12, option1, t13, option2, t14, option3, t15, option4, t16, t17, div10, div9, button, t18;

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
			div6 = element("div");
			label1 = element("label");
			t3 = text("Price");
			t4 = space();
			div5 = element("div");
			div4 = element("div");
			div2 = element("div");
			span0 = element("span");
			t5 = text("$");
			t6 = space();
			input1 = element("input");
			t7 = space();
			div3 = element("div");
			span1 = element("span");
			t8 = text(".00");
			t9 = space();
			div8 = element("div");
			label2 = element("label");
			t10 = text("Size");
			t11 = space();
			div7 = element("div");
			select = element("select");
			option0 = element("option");
			t12 = text("Choose a size");
			option1 = element("option");
			t13 = text("S");
			option2 = element("option");
			t14 = text("M");
			option3 = element("option");
			t15 = text("L");
			option4 = element("option");
			t16 = text("XL");
			t17 = space();
			div10 = element("div");
			div9 = element("div");
			button = element("button");
			t18 = text("Add Product");
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
			t2 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label1 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price");
			label1_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div2 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			span0 = claim_element(div2_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			t5 = claim_text(span0_nodes, "$");
			span0_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t6 = claim_text(div4_nodes, "\n                    ");

			input1 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t7 = claim_text(div4_nodes, "\n                    ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			span1 = claim_element(div3_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t8 = claim_text(span1_nodes, ".00");
			span1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label2 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t10 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t11 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			select = claim_element(div7_nodes, "SELECT", { class: true, name: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t12 = claim_text(option0_nodes, "Choose a size");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t13 = claim_text(option1_nodes, "S");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t14 = claim_text(option2_nodes, "M");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t15 = claim_text(option3_nodes, "L");
			option3_nodes.forEach(detach);

			option4 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option4_nodes = children(option4);

			t16 = claim_text(option4_nodes, "XL");
			option4_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n    \n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			button = claim_element(div9_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t18 = claim_text(button_nodes, "Add Product");
			button_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-3 col-form-label";
			add_location(label0, file, 10, 12, 327);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "name";
			add_location(input0, file, 12, 16, 438);
			div0.className = "col-sm-4";
			add_location(div0, file, 11, 12, 399);
			div1.className = "form-group row";
			add_location(div1, file, 9, 8, 286);
			label1.className = "col-sm-3 col-form-label";
			add_location(label1, file, 17, 12, 597);
			span0.className = "input-group-text";
			add_location(span0, file, 21, 24, 805);
			div2.className = "input-group-prepend";
			add_location(div2, file, 20, 20, 747);
			attr(input1, "type", "text");
			input1.className = "form-control";
			input1.name = "price";
			add_location(input1, file, 23, 20, 892);
			span1.className = "input-group-text";
			add_location(span1, file, 25, 24, 1025);
			div3.className = "input-group-append";
			add_location(div3, file, 24, 20, 968);
			div4.className = "input-group";
			add_location(div4, file, 19, 16, 701);
			div5.className = "col-sm-5";
			add_location(div5, file, 18, 12, 662);
			div6.className = "form-group row inputGroupContainer";
			add_location(div6, file, 16, 8, 536);
			label2.className = "col-sm-3 col-form-label";
			add_location(label2, file, 32, 12, 1217);
			option0.__value = "";
			option0.value = option0.__value;
			add_location(option0, file, 35, 20, 1382);
			option1.__value = "S";
			option1.value = option1.__value;
			add_location(option1, file, 36, 20, 1442);
			option2.__value = "M";
			option2.value = option2.__value;
			add_location(option2, file, 37, 20, 1491);
			option3.__value = "L";
			option3.value = option3.__value;
			add_location(option3, file, 38, 20, 1540);
			option4.__value = "XL";
			option4.value = option4.__value;
			add_location(option4, file, 39, 20, 1589);
			select.className = "form-control";
			select.name = "size";
			add_location(select, file, 34, 16, 1320);
			div7.className = "col-sm-5";
			add_location(div7, file, 33, 12, 1281);
			div8.className = "form-group row selectContainer";
			add_location(div8, file, 31, 8, 1160);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 46, 16, 1785);
			div9.className = "col-sm-9 offset-sm-3";
			add_location(div9, file, 45, 12, 1734);
			div10.className = "form-group row";
			add_location(div10, file, 44, 8, 1693);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 8, 4, 243);
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
			append(form, div6);
			append(div6, label1);
			append(label1, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, div4);
			append(div4, div2);
			append(div2, span0);
			append(span0, t5);
			append(div4, t6);
			append(div4, input1);
			append(div4, t7);
			append(div4, div3);
			append(div3, span1);
			append(span1, t8);
			append(form, t9);
			append(form, div8);
			append(div8, label2);
			append(label2, t10);
			append(div8, t11);
			append(div8, div7);
			append(div7, select);
			append(select, option0);
			append(option0, t12);
			append(select, option1);
			append(option1, t13);
			append(select, option2);
			append(option2, t14);
			append(select, option3);
			append(option3, t15);
			append(select, option4);
			append(option4, t16);
			append(form, t17);
			append(form, div10);
			append(div10, div9);
			append(div9, button);
			append(button, t18);
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
            size: {
                validators: {
                    notEmpty: {
                        message: 'The size is required'
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
                sender: '/guide/examples/adjusting-icon-position/bootstrap',
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

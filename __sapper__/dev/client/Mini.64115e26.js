import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MiniLayout, b as Mini } from './chunk.143e3fe1.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="col-sm-3">
                <label>Product name</label>
            </div>
            <div class="col-sm-6">
                <input type="text" name="name" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Price ($)</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="price" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Size</label>
            </div>
            <div class="col-sm-9">
                <div><input type="checkbox" name="size[]" value="s" /> S</div>
                <div><input type="checkbox" name="size[]" value="m" /> M</div>
                <div><input type="checkbox" name="size[]" value="l" /> L</div>
                <div><input type="checkbox" name="size[]" value="xl" /> XL</div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Available in store</label>
            </div>
            <div class="col-sm-9">
                <div><input type="radio" name="availability" value="yes" /> Yes</div>
                <div><input type="radio" name="availability" value="no" /> No</div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mini.min.js"></script-tag>

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
                mini: new FormValidation.plugins.Mini(),
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

/* src/routes/guide/plugins/mini/horizontal-form/Mini.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/mini/horizontal-form/Mini.svelte";

// (1:0) <MiniLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, div0, label0, t0, t1, div1, input0, t2, div5, div3, label1, t3, t4, div4, input1, t5, div12, div6, label2, t6, t7, div11, div7, input2, t8, t9, div8, input3, t10, t11, div9, input4, t12, t13, div10, input5, t14, t15, div17, div13, label3, t16, t17, div16, div14, input6, t18, t19, div15, input7, t20, t21, div19, div18, button, t22;

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
			t8 = text(" S");
			t9 = space();
			div8 = element("div");
			input3 = element("input");
			t10 = text(" M");
			t11 = space();
			div9 = element("div");
			input4 = element("input");
			t12 = text(" L");
			t13 = space();
			div10 = element("div");
			input5 = element("input");
			t14 = text(" XL");
			t15 = space();
			div17 = element("div");
			div13 = element("div");
			label3 = element("label");
			t16 = text("Available in store");
			t17 = space();
			div16 = element("div");
			div14 = element("div");
			input6 = element("input");
			t18 = text(" Yes");
			t19 = space();
			div15 = element("div");
			input7 = element("input");
			t20 = text(" No");
			t21 = space();
			div19 = element("div");
			div18 = element("div");
			button = element("button");
			t22 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
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

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true, style: true }, false);
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

			input1 = claim_element(div4_nodes, "INPUT", { type: true, name: true, style: true }, false);
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

			input2 = claim_element(div7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(div7_nodes, " S");
			div7_nodes.forEach(detach);
			t9 = claim_text(div11_nodes, "\n                ");

			div8 = claim_element(div11_nodes, "DIV", {}, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t10 = claim_text(div8_nodes, " M");
			div8_nodes.forEach(detach);
			t11 = claim_text(div11_nodes, "\n                ");

			div9 = claim_element(div11_nodes, "DIV", {}, false);
			var div9_nodes = children(div9);

			input4 = claim_element(div9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(div9_nodes, " L");
			div9_nodes.forEach(detach);
			t13 = claim_text(div11_nodes, "\n                ");

			div10 = claim_element(div11_nodes, "DIV", {}, false);
			var div10_nodes = children(div10);

			input5 = claim_element(div10_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t14 = claim_text(div10_nodes, " XL");
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n\n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div13 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label3 = claim_element(div13_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t16 = claim_text(label3_nodes, "Available in store");
			label3_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t17 = claim_text(div17_nodes, "\n            ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", {}, false);
			var div14_nodes = children(div14);

			input6 = claim_element(div14_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(div14_nodes, " Yes");
			div14_nodes.forEach(detach);
			t19 = claim_text(div16_nodes, "\n                ");

			div15 = claim_element(div16_nodes, "DIV", {}, false);
			var div15_nodes = children(div15);

			input7 = claim_element(div15_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t20 = claim_text(div15_nodes, " No");
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n\n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			button = claim_element(div18_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t22 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 4, 16, 212);
			div0.className = "col-sm-3";
			add_location(div0, file, 3, 12, 173);
			attr(input0, "type", "text");
			input0.name = "name";
			set_style(input0, "width", "100%");
			add_location(input0, file, 7, 16, 310);
			div1.className = "col-sm-6";
			add_location(div1, file, 6, 12, 271);
			div2.className = "row";
			add_location(div2, file, 2, 8, 143);
			add_location(label1, file, 13, 16, 476);
			div3.className = "col-sm-3";
			add_location(div3, file, 12, 12, 437);
			attr(input1, "type", "text");
			input1.name = "price";
			set_style(input1, "width", "100%");
			add_location(input1, file, 16, 16, 571);
			div4.className = "col-sm-4";
			add_location(div4, file, 15, 12, 532);
			div5.className = "row";
			add_location(div5, file, 11, 8, 407);
			add_location(label2, file, 22, 16, 738);
			div6.className = "col-sm-3";
			add_location(div6, file, 21, 12, 699);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 25, 21, 833);
			add_location(div7, file, 25, 16, 828);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 26, 21, 912);
			add_location(div8, file, 26, 16, 907);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 27, 21, 991);
			add_location(div9, file, 27, 16, 986);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 28, 21, 1070);
			add_location(div10, file, 28, 16, 1065);
			div11.className = "col-sm-9";
			add_location(div11, file, 24, 12, 789);
			div12.className = "row";
			add_location(div12, file, 20, 8, 669);
			add_location(label3, file, 34, 16, 1242);
			div13.className = "col-sm-3";
			add_location(div13, file, 33, 12, 1203);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 37, 21, 1351);
			add_location(div14, file, 37, 16, 1346);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 38, 21, 1437);
			add_location(div15, file, 38, 16, 1432);
			div16.className = "col-sm-9";
			add_location(div16, file, 36, 12, 1307);
			div17.className = "row";
			add_location(div17, file, 32, 8, 1173);
			button.type = "submit";
			button.className = "primary";
			add_location(button, file, 44, 16, 1628);
			div18.className = "col-sm-9 col-sm-offset-3";
			add_location(div18, file, 43, 12, 1573);
			div19.className = "row";
			add_location(div19, file, 42, 8, 1543);
			form.id = "demoForm";
			form.method = "POST";
			set_style(form, "background", "#FFF");
			set_style(form, "border", "none");
			set_style(form, "margin", "0");
			set_style(form, "padding", "0");
			add_location(form, file, 1, 4, 37);
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
			append(div11, t9);
			append(div11, div8);
			append(div8, input3);
			append(div8, t10);
			append(div11, t11);
			append(div11, div9);
			append(div9, input4);
			append(div9, t12);
			append(div11, t13);
			append(div11, div10);
			append(div10, input5);
			append(div10, t14);
			append(form, t15);
			append(form, div17);
			append(div17, div13);
			append(div13, label3);
			append(label3, t16);
			append(div17, t17);
			append(div17, div16);
			append(div16, div14);
			append(div14, input6);
			append(div14, t18);
			append(div16, t19);
			append(div16, div15);
			append(div15, input7);
			append(div15, t20);
			append(form, t21);
			append(form, div19);
			append(div19, div18);
			append(div18, button);
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

	var minilayout = new MiniLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			minilayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			minilayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(minilayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var minilayout_changes = {};
			if (changed.onLoaded) minilayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) minilayout_changes.$$scope = { changed, ctx };
			minilayout.$set(minilayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			minilayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			minilayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			minilayout.$destroy(detaching);
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
            mini: new Mini(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/mini/horizontal-form/mini',
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

class Mini_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Mini_1;

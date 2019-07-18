import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, g as space, i as text, k as claim_element, l as children, m as detach, j as claim_text, A as attr, n as add_location, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MuiLayout, b as Mui } from './chunk.7ec0a65e.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="mui-container-fluid">
        <form id="demoForm" method="POST">
            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="name" />
                    <label>Product name</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="price" />
                    <label>Price ($)</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <label>Size</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="s" /> S
                        </label>
                    </div>
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="m" /> M
                        </label>
                    </div>
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="l" /> L
                        </label>
                    </div>
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="xl" /> XL
                        </label>
                    </div>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <label>Available in store</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <div class="mui-radio">
                        <label>
                            <input type="radio" name="availability" value="yes" /> Yes
                        </label>
                    </div>
                    <div class="mui-radio">
                        <label>
                            <input type="radio" name="availability" value="no" /> No
                        </label>
                    </div>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
                </div>
            </div>
        </form>
    </div>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/js/mui.min.js"></script>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mui.min.js"></script-tag>

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
                mui: new FormValidation.plugins.Mui(),
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

/* src/routes/guide/plugins/mui/stacked-form/Mui.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/mui/stacked-form/Mui.svelte";

// (1:0) <MuiLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var div20, form, div1, div0, input0, t0, label0, t1, t2, div3, div2, input1, t3, label1, t4, t5, div5, div4, label2, t6, t7, div11, div10, div6, label3, input2, t8, t9, div7, label4, input3, t10, t11, div8, label5, input4, t12, t13, div9, label6, input5, t14, t15, div13, div12, label7, t16, t17, div17, div16, div14, label8, input6, t18, t19, div15, label9, input7, t20, t21, div19, div18, button, t22;

	return {
		c: function create() {
			div20 = element("div");
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
			t8 = text(" S");
			t9 = space();
			div7 = element("div");
			label4 = element("label");
			input3 = element("input");
			t10 = text(" M");
			t11 = space();
			div8 = element("div");
			label5 = element("label");
			input4 = element("input");
			t12 = text(" L");
			t13 = space();
			div9 = element("div");
			label6 = element("label");
			input5 = element("input");
			t14 = text(" XL");
			t15 = space();
			div13 = element("div");
			div12 = element("div");
			label7 = element("label");
			t16 = text("Available in store");
			t17 = space();
			div17 = element("div");
			div16 = element("div");
			div14 = element("div");
			label8 = element("label");
			input6 = element("input");
			t18 = text(" Yes");
			t19 = space();
			div15 = element("div");
			label9 = element("label");
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
			div20 = claim_element(nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			form = claim_element(div20_nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t0 = claim_text(div0_nodes, "\n                    ");

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t1 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n            ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t3 = claim_text(div2_nodes, "\n                    ");

			label1 = claim_element(div2_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Price ($)");
			label1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n            ");

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
			t7 = claim_text(form_nodes, "\n\n            ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div6 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label3 = claim_element(div6_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t9 = claim_text(div10_nodes, "\n                    ");

			div7 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label4 = claim_element(div7_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t10 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t11 = claim_text(div10_nodes, "\n                    ");

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label5 = claim_element(div8_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t13 = claim_text(div10_nodes, "\n                    ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label6 = claim_element(div9_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t14 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n\n            ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label7 = claim_element(div12_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t16 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n\n            ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			label8 = claim_element(div14_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t19 = claim_text(div16_nodes, "\n                    ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label9 = claim_element(div15_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t20 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n\n            ");

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
			div20_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(input0, "type", "text");
			input0.name = "name";
			add_location(input0, file, 5, 20, 225);
			add_location(label0, file, 6, 20, 279);
			div0.className = "mui-col-md-12 mui-textfield";
			add_location(div0, file, 4, 16, 163);
			div1.className = "mui-row";
			add_location(div1, file, 3, 12, 125);
			attr(input1, "type", "text");
			input1.name = "price";
			add_location(input1, file, 12, 20, 462);
			add_location(label1, file, 13, 20, 517);
			div2.className = "mui-col-md-12 mui-textfield";
			add_location(div2, file, 11, 16, 400);
			div3.className = "mui-row";
			add_location(div3, file, 10, 12, 362);
			add_location(label2, file, 19, 20, 683);
			div4.className = "mui-col-md-12";
			add_location(div4, file, 18, 16, 635);
			div5.className = "mui-row";
			add_location(div5, file, 17, 12, 597);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 27, 28, 931);
			add_location(label3, file, 26, 24, 895);
			div6.className = "mui-checkbox";
			add_location(div6, file, 25, 20, 844);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 32, 28, 1150);
			add_location(label4, file, 31, 24, 1114);
			div7.className = "mui-checkbox";
			add_location(div7, file, 30, 20, 1063);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 37, 28, 1369);
			add_location(label5, file, 36, 24, 1333);
			div8.className = "mui-checkbox";
			add_location(div8, file, 35, 20, 1282);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 42, 28, 1588);
			add_location(label6, file, 41, 24, 1552);
			div9.className = "mui-checkbox";
			add_location(div9, file, 40, 20, 1501);
			div10.className = "mui-col-md-12";
			add_location(div10, file, 24, 16, 796);
			div11.className = "mui-row";
			add_location(div11, file, 23, 12, 758);
			add_location(label7, file, 50, 20, 1843);
			div12.className = "mui-col-md-12";
			add_location(div12, file, 49, 16, 1795);
			div13.className = "mui-row";
			add_location(div13, file, 48, 12, 1757);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 58, 28, 2102);
			add_location(label8, file, 57, 24, 2066);
			div14.className = "mui-radio";
			add_location(div14, file, 56, 20, 2018);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 63, 28, 2325);
			add_location(label9, file, 62, 24, 2289);
			div15.className = "mui-radio";
			add_location(div15, file, 61, 20, 2241);
			div16.className = "mui-col-md-12";
			add_location(div16, file, 55, 16, 1970);
			div17.className = "mui-row";
			add_location(div17, file, 54, 12, 1932);
			button.type = "submit";
			button.className = "mui-btn mui-btn--primary";
			add_location(button, file, 71, 20, 2583);
			div18.className = "mui-col-md-12";
			add_location(div18, file, 70, 16, 2535);
			div19.className = "mui-row";
			add_location(div19, file, 69, 12, 2497);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 2, 8, 78);
			div20.className = "mui-container-fluid";
			add_location(div20, file, 1, 4, 36);
		},

		m: function mount(target, anchor) {
			insert(target, div20, anchor);
			append(div20, form);
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
			append(div10, t9);
			append(div10, div7);
			append(div7, label4);
			append(label4, input3);
			append(label4, t10);
			append(div10, t11);
			append(div10, div8);
			append(div8, label5);
			append(label5, input4);
			append(label5, t12);
			append(div10, t13);
			append(div10, div9);
			append(div9, label6);
			append(label6, input5);
			append(label6, t14);
			append(form, t15);
			append(form, div13);
			append(div13, div12);
			append(div12, label7);
			append(label7, t16);
			append(form, t17);
			append(form, div17);
			append(div17, div16);
			append(div16, div14);
			append(div14, label8);
			append(label8, input6);
			append(label8, t18);
			append(div16, t19);
			append(div16, div15);
			append(div15, label9);
			append(label9, input7);
			append(label9, t20);
			append(form, t21);
			append(form, div19);
			append(div19, div18);
			append(div18, button);
			append(button, t22);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div20);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var muilayout = new MuiLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			muilayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			muilayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(muilayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var muilayout_changes = {};
			if (changed.onLoaded) muilayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) muilayout_changes.$$scope = { changed, ctx };
			muilayout.$set(muilayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			muilayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			muilayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			muilayout.$destroy(detaching);
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
            mui: new Mui(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/mui/stacked-form/mui',
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

class Mui_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Mui_1;

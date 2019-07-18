import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="row mb2">
            <label class="db pv2">Product name</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
        </div>

        <div class="row mb2">
            <label class="db pv2">Price ($)</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="price" />
        </div>

        <div class="row mb2">
            <label class="db pv2">Size</label>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="s" /> S</label>
            </div>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="m" /> M</label>
            </div>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="l" /> L</label>
            </div>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
            </div>
        </div>

        <div class="row mb2">
            <label class="db pv2">Available in store</label>
            <div class="mb2">
                <label><input type="radio" name="availability" value="yes" /> Yes</label>
            </div>
            <div class="mb2">
                <label><input type="radio" name="availability" value="no" /> No</label>
            </div>
        </div>

        <div class="row mb2">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Add product</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

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
                tachyons: new FormValidation.plugins.Tachyons({
                    rowSelector: '.row',
                }),
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

/* src/routes/guide/plugins/tachyons/stacked-form/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/tachyons/stacked-form/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div0, label0, t0, t1, input0, t2, div1, label1, t3, t4, input1, t5, div6, label2, t6, t7, div2, label3, input2, t8, t9, div3, label4, input3, t10, t11, div4, label5, input4, t12, t13, div5, label6, input5, t14, t15, div9, label7, t16, t17, div7, label8, input6, t18, t19, div8, label9, input7, t20, t21, div10, button, t22;

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
			div6 = element("div");
			label2 = element("label");
			t6 = text("Size");
			t7 = space();
			div2 = element("div");
			label3 = element("label");
			input2 = element("input");
			t8 = text(" S");
			t9 = space();
			div3 = element("div");
			label4 = element("label");
			input3 = element("input");
			t10 = text(" M");
			t11 = space();
			div4 = element("div");
			label5 = element("label");
			input4 = element("input");
			t12 = text(" L");
			t13 = space();
			div5 = element("div");
			label6 = element("label");
			input5 = element("input");
			t14 = text(" XL");
			t15 = space();
			div9 = element("div");
			label7 = element("label");
			t16 = text("Available in store");
			t17 = space();
			div7 = element("div");
			label8 = element("label");
			input6 = element("input");
			t18 = text(" Yes");
			t19 = space();
			div8 = element("div");
			label9 = element("label");
			input7 = element("input");
			t20 = text(" No");
			t21 = space();
			div10 = element("div");
			button = element("button");
			t22 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Product name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n            ");

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label1 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price ($)");
			label1_nodes.forEach(detach);
			t4 = claim_text(div1_nodes, "\n            ");

			input1 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label2 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t7 = claim_text(div6_nodes, "\n            ");

			div2 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label3 = claim_element(div2_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t9 = claim_text(div6_nodes, "\n            ");

			div3 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label4 = claim_element(div3_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t10 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t11 = claim_text(div6_nodes, "\n            ");

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label5 = claim_element(div4_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t13 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label6 = claim_element(div5_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t14 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n    \n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label7 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t16 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t17 = claim_text(div9_nodes, "\n            ");

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label8 = claim_element(div7_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t19 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label9 = claim_element(div8_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t20 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n\n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			button = claim_element(div10_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t22 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "db pv2";
			add_location(label0, file, 3, 12, 122);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "name";
			add_location(input0, file, 4, 12, 177);
			div0.className = "row mb2";
			add_location(div0, file, 2, 8, 88);
			label1.className = "db pv2";
			add_location(label1, file, 8, 12, 325);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "price";
			add_location(input1, file, 9, 12, 377);
			div1.className = "row mb2";
			add_location(div1, file, 7, 8, 291);
			label2.className = "db pv2";
			add_location(label2, file, 13, 12, 526);
			attr(input2, "type", "checkbox");
			input2.name = "size[]";
			input2.value = "s";
			add_location(input2, file, 15, 23, 614);
			add_location(label3, file, 15, 16, 607);
			div2.className = "mb2";
			add_location(div2, file, 14, 12, 573);
			attr(input3, "type", "checkbox");
			input3.name = "size[]";
			input3.value = "m";
			add_location(input3, file, 18, 23, 746);
			add_location(label4, file, 18, 16, 739);
			div3.className = "mb2";
			add_location(div3, file, 17, 12, 705);
			attr(input4, "type", "checkbox");
			input4.name = "size[]";
			input4.value = "l";
			add_location(input4, file, 21, 23, 878);
			add_location(label5, file, 21, 16, 871);
			div4.className = "mb2";
			add_location(div4, file, 20, 12, 837);
			attr(input5, "type", "checkbox");
			input5.name = "size[]";
			input5.value = "xl";
			add_location(input5, file, 24, 23, 1010);
			add_location(label6, file, 24, 16, 1003);
			div5.className = "mb2";
			add_location(div5, file, 23, 12, 969);
			div6.className = "row mb2";
			add_location(div6, file, 12, 8, 492);
			label7.className = "db pv2";
			add_location(label7, file, 29, 12, 1153);
			attr(input6, "type", "radio");
			input6.name = "availability";
			input6.value = "yes";
			add_location(input6, file, 31, 23, 1255);
			add_location(label8, file, 31, 16, 1248);
			div7.className = "mb2";
			add_location(div7, file, 30, 12, 1214);
			attr(input7, "type", "radio");
			input7.name = "availability";
			input7.value = "no";
			add_location(input7, file, 34, 23, 1394);
			add_location(label9, file, 34, 16, 1387);
			div8.className = "mb2";
			add_location(div8, file, 33, 12, 1353);
			div9.className = "row mb2";
			add_location(div9, file, 28, 8, 1119);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 40, 12, 1619);
			div10.className = "row mb2";
			add_location(div10, file, 38, 8, 1502);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "fv-stacked-form";
			add_location(form, file, 1, 4, 21);
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
			append(form, div6);
			append(div6, label2);
			append(label2, t6);
			append(div6, t7);
			append(div6, div2);
			append(div2, label3);
			append(label3, input2);
			append(label3, t8);
			append(div6, t9);
			append(div6, div3);
			append(div3, label4);
			append(label4, input3);
			append(label4, t10);
			append(div6, t11);
			append(div6, div4);
			append(div4, label5);
			append(label5, input4);
			append(label5, t12);
			append(div6, t13);
			append(div6, div5);
			append(div5, label6);
			append(label6, input5);
			append(label6, t14);
			append(form, t15);
			append(form, div9);
			append(div9, label7);
			append(label7, t16);
			append(div9, t17);
			append(div9, div7);
			append(div7, label8);
			append(label8, input6);
			append(label8, t18);
			append(div9, t19);
			append(div9, div8);
			append(div8, label9);
			append(label9, input7);
			append(label9, t20);
			append(form, t21);
			append(form, div10);
			append(div10, button);
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

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self) {
	

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
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
            tachyons: new Tachyons({
                rowSelector: '.row',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/tachyons/stacked-form/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});

	return {};
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;

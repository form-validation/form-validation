import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as UikitLayout, b as Uikit } from './chunk.37517d92.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="uk-form-horizontal">
        <div class="uk-margin">
            <label class="uk-form-label">Product name</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input" name="name" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Price ($)</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input" name="price" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Size</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="s" /> S</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="m" /> M</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="l" /> L</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="xl" /> XL</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Available in store</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input class="uk-radio" name="availability" type="radio" value="yes" /> Yes</label>
                <label><input class="uk-radio" name="availability" type="radio" value="no" /> No</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="uk-button uk-button-primary">Add product</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Uikit.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation
        .formValidation(document.getElementById('demoForm'), {
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
                uikit: new FormValidation.plugins.Uikit(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon(),
            },
        }
    )
    .on('plugins.icon.set', function(e) {
        if (e.iconElement) {
            switch (e.status) {
                case 'Validating':
                    e.iconElement.innerHTML = '...';
                    break;

                case 'Invalid':
                    e.iconElement.innerHTML = '...';
                    break;

                case 'Valid':
                    e.iconElement.innerHTML = '...';
                    break;

                default:
                    e.iconElement.innerHTML = '';
                    break;
            }
        }
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/using-svg-icons/svg/Uikit.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/using-svg-icons/svg/Uikit.svelte";

// (13:0) <UikitLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div3, label1, t3, t4, div2, input1, t5, div5, label2, t6, t7, div4, label3, input2, t8, t9, label4, input3, t10, t11, label5, input4, t12, t13, label6, input5, t14, t15, div7, label7, t16, t17, div6, label8, input6, t18, t19, label9, input7, t20, t21, div9, label10, t22, div8, button, t23;

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
			div3 = element("div");
			label1 = element("label");
			t3 = text("Price ($)");
			t4 = space();
			div2 = element("div");
			input1 = element("input");
			t5 = space();
			div5 = element("div");
			label2 = element("label");
			t6 = text("Size");
			t7 = space();
			div4 = element("div");
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
			div7 = element("div");
			label7 = element("label");
			t16 = text("Available in store");
			t17 = space();
			div6 = element("div");
			label8 = element("label");
			input6 = element("input");
			t18 = text(" Yes");
			t19 = space();
			label9 = element("label");
			input7 = element("input");
			t20 = text(" No");
			t21 = space();
			div9 = element("div");
			label10 = element("label");
			t22 = space();
			div8 = element("div");
			button = element("button");
			t23 = text("Add product");
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

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Price ($)");
			label1_nodes.forEach(detach);
			t4 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label2 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Size");
			label2_nodes.forEach(detach);
			t7 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label3 = claim_element(div4_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input2 = claim_element(label3_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label3_nodes, " S");
			label3_nodes.forEach(detach);
			t9 = claim_text(div4_nodes, "\n                ");

			label4 = claim_element(div4_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input3 = claim_element(label4_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t10 = claim_text(label4_nodes, " M");
			label4_nodes.forEach(detach);
			t11 = claim_text(div4_nodes, "\n                ");

			label5 = claim_element(div4_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input4 = claim_element(label5_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(label5_nodes, " L");
			label5_nodes.forEach(detach);
			t13 = claim_text(div4_nodes, "\n                ");

			label6 = claim_element(div4_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t14 = claim_text(label6_nodes, " XL");
			label6_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n    \n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label7 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t16 = claim_text(label7_nodes, "Available in store");
			label7_nodes.forEach(detach);
			t17 = claim_text(div7_nodes, "\n            ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label8 = claim_element(div6_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input6 = claim_element(label8_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(label8_nodes, " Yes");
			label8_nodes.forEach(detach);
			t19 = claim_text(div6_nodes, "\n                ");

			label9 = claim_element(div6_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input7 = claim_element(label9_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t20 = claim_text(label9_nodes, " No");
			label9_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n    \n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label10 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label10_nodes = children(label10);

			label10_nodes.forEach(detach);
			t22 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			button = claim_element(div8_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t23 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "uk-form-label";
			add_location(label0, file, 15, 12, 342);
			attr(input0, "type", "text");
			input0.className = "uk-input";
			input0.name = "name";
			add_location(input0, file, 17, 16, 451);
			div0.className = "uk-form-controls";
			add_location(div0, file, 16, 12, 404);
			div1.className = "uk-margin";
			add_location(div1, file, 14, 8, 306);
			label1.className = "uk-form-label";
			add_location(label1, file, 22, 12, 585);
			attr(input1, "type", "text");
			input1.className = "uk-input";
			input1.name = "price";
			add_location(input1, file, 24, 16, 691);
			div2.className = "uk-form-controls";
			add_location(div2, file, 23, 12, 644);
			div3.className = "uk-margin";
			add_location(div3, file, 21, 8, 549);
			label2.className = "uk-form-label";
			add_location(label2, file, 29, 12, 826);
			input2.className = "uk-checkbox";
			input2.name = "size[]";
			attr(input2, "type", "checkbox");
			input2.value = "s";
			add_location(input2, file, 31, 23, 956);
			add_location(label3, file, 31, 16, 949);
			input3.className = "uk-checkbox";
			input3.name = "size[]";
			attr(input3, "type", "checkbox");
			input3.value = "m";
			add_location(input3, file, 32, 23, 1059);
			add_location(label4, file, 32, 16, 1052);
			input4.className = "uk-checkbox";
			input4.name = "size[]";
			attr(input4, "type", "checkbox");
			input4.value = "l";
			add_location(input4, file, 33, 23, 1162);
			add_location(label5, file, 33, 16, 1155);
			input5.className = "uk-checkbox";
			input5.name = "size[]";
			attr(input5, "type", "checkbox");
			input5.value = "xl";
			add_location(input5, file, 34, 23, 1265);
			add_location(label6, file, 34, 16, 1258);
			div4.className = "uk-form-controls uk-form-controls-text";
			add_location(div4, file, 30, 12, 880);
			div5.className = "uk-margin";
			add_location(div5, file, 28, 8, 790);
			label7.className = "uk-form-label";
			add_location(label7, file, 39, 12, 1430);
			input6.className = "uk-radio";
			input6.name = "availability";
			attr(input6, "type", "radio");
			input6.value = "yes";
			add_location(input6, file, 41, 23, 1574);
			add_location(label8, file, 41, 16, 1567);
			input7.className = "uk-radio";
			input7.name = "availability";
			attr(input7, "type", "radio");
			input7.value = "no";
			add_location(input7, file, 42, 23, 1681);
			add_location(label9, file, 42, 16, 1674);
			div6.className = "uk-form-controls uk-form-controls-text";
			add_location(div6, file, 40, 12, 1498);
			div7.className = "uk-margin";
			add_location(div7, file, 38, 8, 1394);
			label10.className = "uk-form-label";
			add_location(label10, file, 47, 12, 1846);
			button.type = "submit";
			button.className = "uk-button uk-button-primary";
			add_location(button, file, 50, 16, 2030);
			div8.className = "uk-form-controls";
			add_location(div8, file, 48, 12, 1896);
			div9.className = "uk-margin";
			add_location(div9, file, 46, 8, 1810);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "uk-form-horizontal";
			add_location(form, file, 13, 4, 236);
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
			append(form, div3);
			append(div3, label1);
			append(label1, t3);
			append(div3, t4);
			append(div3, div2);
			append(div2, input1);
			append(form, t5);
			append(form, div5);
			append(div5, label2);
			append(label2, t6);
			append(div5, t7);
			append(div5, div4);
			append(div4, label3);
			append(label3, input2);
			append(label3, t8);
			append(div4, t9);
			append(div4, label4);
			append(label4, input3);
			append(label4, t10);
			append(div4, t11);
			append(div4, label5);
			append(label5, input4);
			append(label5, t12);
			append(div4, t13);
			append(div4, label6);
			append(label6, input5);
			append(label6, t14);
			append(form, t15);
			append(form, div7);
			append(div7, label7);
			append(label7, t16);
			append(div7, t17);
			append(div7, div6);
			append(div6, label8);
			append(label8, input6);
			append(label8, t18);
			append(div6, t19);
			append(div6, label9);
			append(label9, input7);
			append(label9, t20);
			append(form, t21);
			append(form, div9);
			append(div9, label10);
			append(div9, t22);
			append(div9, div8);
			append(div8, button);
			append(button, t23);
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

	var uikitlayout = new UikitLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			uikitlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			uikitlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(uikitlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var uikitlayout_changes = {};
			if (changed.onLoaded) uikitlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) uikitlayout_changes.$$scope = { changed, ctx };
			uikitlayout.$set(uikitlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			uikitlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			uikitlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			uikitlayout.$destroy(detaching);
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
            uikit: new Uikit(),
            submitButton: new SubmitButton(),
            icon: new Icon(),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/using-svg-icons/svg/uikit',
                sampleCode: sampleCode,
            }),
        },
    }).on('plugins.icon.set', (e) => {
        if (e.iconElement) {
            switch (e.status) {
                case 'Validating':
                    e.iconElement.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#000" stroke-width="1.1"
                            d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5">
                        </path>
                        <polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"></polyline>
                    </svg>`;
                    break;

                case 'Invalid':
                    e.iconElement.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                    </svg>`;
                    break;

                case 'Valid':
                    e.iconElement.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"></polyline>
                    </svg>`;
                    break;

                default:
                    e.iconElement.innerHTML = '';
                    break;
            }
        }
    }));
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Uikit_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Uikit_1;

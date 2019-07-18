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
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="uk-form-horizontal">
        <div class="uk-margin uk-grid">
            <div class="uk-width-1-5">Full name</div>
            <div class="uk-width-2-5">
                <input type="text" class="uk-input" name="firstName" placeholder="First name" />
            </div>
            <div class="uk-width-2-5">
                <input type="text" class="uk-input" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="uk-margin uk-grid">
            <label class="uk-width-1-5">Address</label>
            <div class="uk-width-1-5">
                <input type="text" class="uk-input" name="city" placeholder="City" />
            </div>
            <div class="uk-width-1-5">
                <input type="text" class="uk-input" name="state" placeholder="State" />
            </div>
            <div class="uk-width-1-5">
                <input type="text" class="uk-input" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>

        <div class="uk-margin uk-grid">
            <label class="uk-width-1-5"></label>
            <div class="uk-width-4-5">
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
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z\s]+$/,
                            message: 'The first name can only consist of alphabetical and space'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z\s]+$/,
                            message: 'The last name can only consist of alphabetical and space'
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: 'The city is required'
                        }
                    }
                },
                state: {
                    validators: {
                        notEmpty: {
                            message: 'The state is required'
                        }
                    }
                },
                zipcode: {
                    validators: {
                        notEmpty: {
                            message: 'The zipcode is required'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                uikit: new FormValidation.plugins.Uikit({
                    rowSelector: function(field, ele) {
                        // field is the field name
                        // ele is the field element
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.uk-width-2-5';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.uk-width-1-5';
                            
                            default:
                                return '.uk-margin';
                        }
                    }
                }),
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

/* src/routes/guide/plugins/uikit/multiple-fields/Uikit.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/uikit/multiple-fields/Uikit.svelte";

// (13:0) <UikitLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div3, div0, t0, t1, div1, input0, t2, div2, input1, t3, div7, label0, t4, t5, div4, input2, t6, div5, input3, t7, div6, input4, t8, div9, label1, t9, div8, button, t10;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div0 = element("div");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div7 = element("div");
			label0 = element("label");
			t4 = text("Address");
			t5 = space();
			div4 = element("div");
			input2 = element("input");
			t6 = space();
			div5 = element("div");
			input3 = element("input");
			t7 = space();
			div6 = element("div");
			input4 = element("input");
			t8 = space();
			div9 = element("div");
			label1 = element("label");
			t9 = space();
			div8 = element("div");
			button = element("button");
			t10 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Full name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n            ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n    \n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label0 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t4 = claim_text(label0_nodes, "Address");
			label0_nodes.forEach(detach);
			t5 = claim_text(div7_nodes, "\n            ");

			div4 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input2 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t6 = claim_text(div7_nodes, "\n            ");

			div5 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input3 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t7 = claim_text(div7_nodes, "\n            ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input4 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n    \n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label1 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			label1_nodes.forEach(detach);
			t9 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			button = claim_element(div8_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t10 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "uk-width-1-5";
			add_location(div0, file, 15, 12, 350);
			attr(input0, "type", "text");
			input0.className = "uk-input";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 17, 16, 447);
			div1.className = "uk-width-2-5";
			add_location(div1, file, 16, 12, 404);
			attr(input1, "type", "text");
			input1.className = "uk-input";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 20, 16, 602);
			div2.className = "uk-width-2-5";
			add_location(div2, file, 19, 12, 559);
			div3.className = "uk-margin uk-grid";
			add_location(div3, file, 14, 8, 306);
			label0.className = "uk-width-1-5";
			add_location(label0, file, 25, 12, 772);
			attr(input2, "type", "text");
			input2.className = "uk-input";
			input2.name = "city";
			input2.placeholder = "City";
			add_location(input2, file, 27, 16, 871);
			div4.className = "uk-width-1-5";
			add_location(div4, file, 26, 12, 828);
			attr(input3, "type", "text");
			input3.className = "uk-input";
			input3.name = "state";
			input3.placeholder = "State";
			add_location(input3, file, 30, 16, 1015);
			div5.className = "uk-width-1-5";
			add_location(div5, file, 29, 12, 972);
			attr(input4, "type", "text");
			input4.className = "uk-input";
			input4.name = "zipcode";
			input4.placeholder = "Zipcode";
			add_location(input4, file, 33, 16, 1161);
			div6.className = "uk-width-1-5";
			add_location(div6, file, 32, 12, 1118);
			div7.className = "uk-margin uk-grid";
			add_location(div7, file, 24, 8, 728);
			label1.className = "uk-width-1-5";
			add_location(label1, file, 38, 12, 1328);
			button.type = "submit";
			button.className = "uk-button uk-button-primary";
			add_location(button, file, 41, 16, 1507);
			div8.className = "uk-width-4-5";
			add_location(div8, file, 39, 12, 1377);
			div9.className = "uk-margin uk-grid";
			add_location(div9, file, 37, 8, 1284);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "uk-form-horizontal";
			add_location(form, file, 13, 4, 236);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div0);
			append(div0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div7);
			append(div7, label0);
			append(label0, t4);
			append(div7, t5);
			append(div7, div4);
			append(div4, input2);
			append(div7, t6);
			append(div7, div5);
			append(div5, input3);
			append(div7, t7);
			append(div7, div6);
			append(div6, input4);
			append(form, t8);
			append(form, div9);
			append(div9, label1);
			append(div9, t9);
			append(div9, div8);
			append(div8, button);
			append(button, t10);
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
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The first name can only consist of alphabetical and space'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The last name can only consist of alphabetical and space'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'The state is required'
                    }
                }
            },
            zipcode: {
                validators: {
                    notEmpty: {
                        message: 'The zipcode is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            uikit: new Uikit({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.uk-width-2-5';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.uk-width-1-5';
                        
                        default:
                            return '.uk-margin';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/uikit/multiple-fields/uikit',
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

class Uikit_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Uikit_1;

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as SpectreLayout, b as Spectre } from './chunk.371c6257.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre.min.css">
    <!-- To use with the Icon plugin -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre-icons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Full name</label>
            </div>
            <div class="column col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="firstName" placeholder="First name" />
                </div>
            </div>
            <div class="column col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Address</label>
            </div>
            <div class="column col-3">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="city" placeholder="City" />
                </div>
            </div>
            <div class="column col-3">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="state" placeholder="State" />
                </div>
            </div>
            <div class="column col-3">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="zipcode" placeholder="Zipcode" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3"></div>
            <div class="column col-9">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Spectre.min.js"></script-tag>

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
                spectre: new FormValidation.plugins.Spectre({
                    rowSelector: function(field, ele) {
                        // field is the field name
                        // ele is the field element
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.col-4';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.col-3';
                            
                            default:
                                return '.form-group';
                        }
                    }
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'form-icon icon icon-check',
                    invalid: 'form-icon icon icon-cross',
                    validating: 'form-icon loading',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/spectre/multiple-fields/Spectre.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/spectre/multiple-fields/Spectre.svelte";

// (1:0) <SpectreLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div5, div0, label0, t0, t1, div2, div1, input0, t2, div4, div3, input1, t3, div13, div6, label1, t4, t5, div8, div7, input2, t6, div10, div9, input3, t7, div12, div11, input4, t8, div16, div14, t9, div15, button, t10;

	return {
		c: function create() {
			form = element("form");
			div5 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			input1 = element("input");
			t3 = space();
			div13 = element("div");
			div6 = element("div");
			label1 = element("label");
			t4 = text("Address");
			t5 = space();
			div8 = element("div");
			div7 = element("div");
			input2 = element("input");
			t6 = space();
			div10 = element("div");
			div9 = element("div");
			input3 = element("input");
			t7 = space();
			div12 = element("div");
			div11 = element("div");
			input4 = element("input");
			t8 = space();
			div16 = element("div");
			div14 = element("div");
			t9 = space();
			div15 = element("div");
			button = element("button");
			t10 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div0 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div5_nodes, "\n            ");

			div2 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input1 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n    \n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div6 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label1 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Address");
			label1_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t5 = claim_text(div13_nodes, "\n            ");

			div8 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input2 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t6 = claim_text(div13_nodes, "\n            ");

			div10 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input3 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t7 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input4 = claim_element(div11_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n    \n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div14_nodes.forEach(detach);
			t9 = claim_text(div16_nodes, "\n            ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			button = claim_element(div15_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t10 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "form-label";
			add_location(label0, file, 4, 16, 180);
			div0.className = "col-3";
			add_location(div0, file, 3, 12, 144);
			attr(input0, "type", "text");
			input0.className = "form-input";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 8, 20, 347);
			div1.className = "has-icon-right";
			add_location(div1, file, 7, 16, 298);
			div2.className = "column col-4";
			add_location(div2, file, 6, 12, 255);
			attr(input1, "type", "text");
			input1.className = "form-input";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 13, 20, 576);
			div3.className = "has-icon-right";
			add_location(div3, file, 12, 16, 527);
			div4.className = "column col-4";
			add_location(div4, file, 11, 12, 484);
			div5.className = "form-group";
			add_location(div5, file, 2, 8, 107);
			label1.className = "form-label";
			add_location(label1, file, 20, 16, 800);
			div6.className = "col-3";
			add_location(div6, file, 19, 12, 764);
			attr(input2, "type", "text");
			input2.className = "form-input";
			input2.name = "city";
			input2.placeholder = "City";
			add_location(input2, file, 24, 20, 965);
			div7.className = "has-icon-right";
			add_location(div7, file, 23, 16, 916);
			div8.className = "column col-3";
			add_location(div8, file, 22, 12, 873);
			attr(input3, "type", "text");
			input3.className = "form-input";
			input3.name = "state";
			input3.placeholder = "State";
			add_location(input3, file, 29, 20, 1183);
			div9.className = "has-icon-right";
			add_location(div9, file, 28, 16, 1134);
			div10.className = "column col-3";
			add_location(div10, file, 27, 12, 1091);
			attr(input4, "type", "text");
			input4.className = "form-input";
			input4.name = "zipcode";
			input4.placeholder = "Zipcode";
			add_location(input4, file, 34, 20, 1403);
			div11.className = "has-icon-right";
			add_location(div11, file, 33, 16, 1354);
			div12.className = "column col-3";
			add_location(div12, file, 32, 12, 1311);
			div13.className = "form-group";
			add_location(div13, file, 18, 8, 727);
			div14.className = "col-3";
			add_location(div14, file, 40, 12, 1588);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 43, 16, 1756);
			div15.className = "column col-9";
			add_location(div15, file, 41, 12, 1626);
			div16.className = "form-group";
			add_location(div16, file, 39, 8, 1551);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "form-horizontal";
			add_location(form, file, 1, 4, 40);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div5);
			append(div5, div0);
			append(div0, label0);
			append(label0, t0);
			append(div5, t1);
			append(div5, div2);
			append(div2, div1);
			append(div1, input0);
			append(div5, t2);
			append(div5, div4);
			append(div4, div3);
			append(div3, input1);
			append(form, t3);
			append(form, div13);
			append(div13, div6);
			append(div6, label1);
			append(label1, t4);
			append(div13, t5);
			append(div13, div8);
			append(div8, div7);
			append(div7, input2);
			append(div13, t6);
			append(div13, div10);
			append(div10, div9);
			append(div9, input3);
			append(div13, t7);
			append(div13, div12);
			append(div12, div11);
			append(div11, input4);
			append(form, t8);
			append(form, div16);
			append(div16, div14);
			append(div16, t9);
			append(div16, div15);
			append(div15, button);
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

	var spectrelayout = new SpectreLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			spectrelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			spectrelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(spectrelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var spectrelayout_changes = {};
			if (changed.onLoaded) spectrelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) spectrelayout_changes.$$scope = { changed, ctx };
			spectrelayout.$set(spectrelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			spectrelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			spectrelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			spectrelayout.$destroy(detaching);
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
            spectre: new Spectre({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.col-4';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.col-3';
                        
                        default:
                            return '.form-group';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'form-icon icon icon-check',
                invalid: 'form-icon icon icon-cross',
                validating: 'form-icon loading',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/spectre/multiple-fields/spectre',
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

class Spectre_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Spectre_1;

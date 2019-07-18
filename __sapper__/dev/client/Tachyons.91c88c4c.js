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
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name</div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="firstName" placeholder="First name" />
                </div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Address</div>
                <div class="fl w-20 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="city" placeholder="City" />
                </div>
                <div class="fl w-20 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="state" placeholder="State" />
                </div>
                <div class="fl w-20 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="zipcode" placeholder="Zipcode" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Add product</button>
                </div>
            </div>
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
                tachyons: new FormValidation.plugins.Tachyons({
                    rowSelector: function(field, ele) {
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.w-30';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.w-20';
                            
                            default:
                                return '.fl';
                        }
                    }
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

/* src/routes/guide/plugins/tachyons/multiple-fields/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/tachyons/multiple-fields/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div1, input0, t2, div2, input1, t3, div10, div9, div5, t4, t5, div6, input2, t6, div7, input3, t7, div8, input4, t8, div14, div13, div11, t9, div12, button, t10;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
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
			div10 = element("div");
			div9 = element("div");
			div5 = element("div");
			t4 = text("Address");
			t5 = space();
			div6 = element("div");
			input2 = element("input");
			t6 = space();
			div7 = element("div");
			input3 = element("input");
			t7 = space();
			div8 = element("div");
			input4 = element("input");
			t8 = space();
			div14 = element("div");
			div13 = element("div");
			div11 = element("div");
			t9 = space();
			div12 = element("div");
			button = element("button");
			t10 = text("Add product");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Full name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n    \n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div5 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			t4 = claim_text(div5_nodes, "Address");
			div5_nodes.forEach(detach);
			t5 = claim_text(div9_nodes, "\n                ");

			div6 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input2 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(div9_nodes, "\n                ");

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input3 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t7 = claim_text(div9_nodes, "\n                ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input4 = claim_element(div8_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n    \n        ");

			div14 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div11 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div11_nodes.forEach(detach);
			t9 = claim_text(div13_nodes, "\n                ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			button = claim_element(div12_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t10 = claim_text(button_nodes, "Add product");
			button_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 6, 20, 239);
			div1.className = "fl w-30 mr2";
			add_location(div1, file, 5, 16, 193);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 9, 20, 436);
			div2.className = "fl w-30";
			add_location(div2, file, 8, 16, 394);
			div3.className = "fl w-100";
			add_location(div3, file, 3, 12, 97);
			div4.className = "cf mb2";
			add_location(div4, file, 2, 8, 64);
			div5.className = "fl w-25 pa2";
			add_location(div5, file, 16, 16, 692);
			attr(input2, "type", "text");
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input2.name = "city";
			input2.placeholder = "City";
			add_location(input2, file, 18, 20, 793);
			div6.className = "fl w-20 mr2";
			add_location(div6, file, 17, 16, 747);
			attr(input3, "type", "text");
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input3.name = "state";
			input3.placeholder = "State";
			add_location(input3, file, 21, 20, 983);
			div7.className = "fl w-20 mr2";
			add_location(div7, file, 20, 16, 937);
			attr(input4, "type", "text");
			input4.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input4.name = "zipcode";
			input4.placeholder = "Zipcode";
			add_location(input4, file, 24, 20, 1175);
			div8.className = "fl w-20 mr2";
			add_location(div8, file, 23, 16, 1129);
			div9.className = "fl w-100";
			add_location(div9, file, 15, 12, 653);
			div10.className = "cf mb2";
			add_location(div10, file, 14, 8, 620);
			div11.className = "fl w-25 pa2";
			add_location(div11, file, 31, 16, 1428);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 34, 20, 1609);
			div12.className = "fl w-50";
			add_location(div12, file, 32, 16, 1476);
			div13.className = "fl w-100";
			add_location(div13, file, 30, 12, 1389);
			div14.className = "cf mb2";
			add_location(div14, file, 29, 8, 1356);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div4);
			append(div4, div3);
			append(div3, div0);
			append(div0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div10);
			append(div10, div9);
			append(div9, div5);
			append(div5, t4);
			append(div9, t5);
			append(div9, div6);
			append(div6, input2);
			append(div9, t6);
			append(div9, div7);
			append(div7, input3);
			append(div9, t7);
			append(div9, div8);
			append(div8, input4);
			append(form, t8);
			append(form, div14);
			append(div14, div13);
			append(div13, div11);
			append(div13, t9);
			append(div13, div12);
			append(div12, button);
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
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/tachyons/multiple-fields/tachyons',
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

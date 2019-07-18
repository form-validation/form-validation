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
                <div class="fl w-25 pa2">Message</div>
                <div class="fl w-75">
                    <textarea rows="5" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="message" placeholder="Message"></textarea>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const checkPlaceholder = function() {
        return {
            validate: function(input) {
                // input.element presents the field element
                // input.elements presents all field elements
                // input.field is the field name
                // input.value is the field value
    
                // Has to return an object containing valid key
                return {
                    valid: input.value != input.element.getAttribute('placeholder'),
                };
            },
        };
    };

    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                fields: {
                    firstName: {
                        validators: {
                            notEmpty: {
                                message: 'The first name is required'
                            },
                            placeholder: {
                                message: 'The value cannot be the same as placeholder'
                            },
                        }
                    },
                    lastName: {
                        validators: {
                            notEmpty: {
                                message: 'The last name is required'
                            },
                            placeholder: {
                                message: 'The value cannot be the same as placeholder'
                            },
                        }
                    },
                    message: {
                        validators: {
                            notEmpty: {
                                message: 'The message is required'
                            },
                            stringLength: {
                                max: 700,
                                message: 'The message must be less than 700 characters long'
                            },
                            placeholder: {
                                message: 'The value cannot be the same as placeholder'
                            },
                        }
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    tachyons: new FormValidation.plugins.Tachyons(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    icon: new FormValidation.plugins.Icon({
                        valid: 'fa fa-check',
                        invalid: 'fa fa-times',
                        validating: 'fa fa-refresh',
                    }),
                },
            }
        )
        .registerValidator('placeholder', checkPlaceholder);
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/preventing-user-to-have-same-value-as-the-placeholder/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/preventing-user-to-have-same-value-as-the-placeholder/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div1, input0, t2, div2, input1, t3, div8, div7, div5, t4, t5, div6, textarea, t6, div12, div11, div9, t7, div10, button, t8;

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
			div8 = element("div");
			div7 = element("div");
			div5 = element("div");
			t4 = text("Message");
			t5 = space();
			div6 = element("div");
			textarea = element("textarea");
			t6 = space();
			div12 = element("div");
			div11 = element("div");
			div9 = element("div");
			t7 = space();
			div10 = element("div");
			button = element("button");
			t8 = text("Submit");
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

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div5 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			t4 = claim_text(div5_nodes, "Message");
			div5_nodes.forEach(detach);
			t5 = claim_text(div7_nodes, "\n                ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			textarea = claim_element(div6_nodes, "TEXTAREA", { rows: true, class: true, name: true, placeholder: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div9 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div9_nodes.forEach(detach);
			t7 = claim_text(div11_nodes, "\n                ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			button = claim_element(div10_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t8 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
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
			textarea.rows = "5";
			textarea.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			textarea.name = "message";
			textarea.placeholder = "Message";
			add_location(textarea, file, 18, 20, 789);
			div6.className = "fl w-75";
			add_location(div6, file, 17, 16, 747);
			div7.className = "fl w-100";
			add_location(div7, file, 15, 12, 653);
			div8.className = "cf mb2";
			add_location(div8, file, 14, 8, 620);
			div9.className = "fl w-25 pa2";
			add_location(div9, file, 25, 16, 1047);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 27, 20, 1137);
			div10.className = "fl w-50";
			add_location(div10, file, 26, 16, 1095);
			div11.className = "fl w-100";
			add_location(div11, file, 24, 12, 1008);
			div12.className = "cf mb2";
			add_location(div12, file, 23, 8, 975);
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
			append(form, div8);
			append(div8, div7);
			append(div7, div5);
			append(div5, t4);
			append(div7, t5);
			append(div7, div6);
			append(div6, textarea);
			append(form, t6);
			append(form, div12);
			append(div12, div11);
			append(div11, div9);
			append(div11, t7);
			append(div11, div10);
			append(div10, button);
			append(button, t8);
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
    const checkPlaceholder = () => {
        return {
            validate: input => {
                return {
                    valid: input.value != input.element.getAttribute('placeholder'),
                };
            },
        };
    };

    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    },
                    placeholder: {
                        message: 'The value cannot be the same as placeholder'
                    },
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    },
                    placeholder: {
                        message: 'The value cannot be the same as placeholder'
                    },
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'The message is required'
                    },
                    stringLength: {
                        max: 700,
                        message: 'The message must be less than 700 characters long'
                    },
                    placeholder: {
                        message: 'The value cannot be the same as placeholder'
                    },
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
                sender: '/guide/examples/preventing-user-to-have-same-value-as-the-placeholder/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('placeholder', checkPlaceholder);

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

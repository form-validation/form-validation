import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, C as listen, o as insert, p as append, r as noop } from './chunk.989912da.js';
import { b as formValidation, f as creditCard } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card type</div>
                <div class="fl w-50">
                    <select name="cardType" class="input-reset ba b--black-20 pa2 mb2 db w-100">
                        <option value="">Select a type</option>
                        <option value="Ae">American Express</option>
                        <option value="Master">Master</option>
                        <option value="Visa">Visa</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card number</div>
                <div class="fl w-50">
                    <input type="text" name="cc" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                cardType: {
                    validators: {
                        notEmpty: {
                            message: 'The type is required'
                        }
                    }
                },
                cc: {
                    validators: {
                        notEmpty: {
                            message: 'The credit card number is required'
                        },
                        callback: {
                            message: 'The credit card number is not valid',
                            callback: function(input) {
                                const value = input.value;
                                if (value === '') {
                                    return true;
                                }    
    
                                // Check if the input is valid credit card number
                                const result = FormValidation.validators.creditCard().validate({
                                    value: value,
                                });
                                if (!result.valid) {
                                    return false;
                                } else {
                                    let currentType = null;
                                    // result.meta.type can be one of
                                    // AMERICAN_EXPRESS, DINERS_CLUB, DINERS_CLUB_US, DISCOVER, JCB, LASER,
                                    // MAESTRO, MASTERCARD, SOLO, UNIONPAY, VISA
                                    switch (result.meta.type) {
                                        case 'AMERICAN_EXPRESS':
                                            // Ae is the value of American Express card in the select box
                                            currentType = 'Ae';
                                            break;
    
                                        case 'MASTERCARD':
                                        case 'DINERS_CLUB_US':
                                            // Master is the value of Master card in the select box
                                            currentType = 'Master';
                                            break;
    
                                        case 'VISA':
                                            // Visa is the value of Visa card in the select box
                                            currentType = 'Visa';
                                            break;
    
                                        default:
                                            currentType = null;
                                            break;
                                    }
    
                                    // Get the selected type
                                    const selectedType = form.querySelector('[name="cardType"]').value;
                                    if (currentType == null || currentType !== selectedType) {
                                        return {
                                            valid: false,
                                            message: 'The credit card number does not match with selected type'
                                        }
                                    }
                                }
    
                                return true;
                            }
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
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );

    form.querySelector('[name="cardType"]').addEventListener('change', function() {
        // Whenever user changes the card type,
        // we need to revalidate the credit card number
        fv.revalidateField('cc');
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/asking-credit-card-number-to-match-with-selected-type/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/asking-credit-card-number-to-match-with-selected-type/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, select, option0, t2, option1, t3, option2, t4, option3, t5, t6, div7, div6, div4, t7, t8, div5, input, dispose;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Credit card type");
			t1 = space();
			div1 = element("div");
			select = element("select");
			option0 = element("option");
			t2 = text("Select a type");
			option1 = element("option");
			t3 = text("American Express");
			option2 = element("option");
			t4 = text("Master");
			option3 = element("option");
			t5 = text("Visa");
			t6 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t7 = text("Credit card number");
			t8 = space();
			div5 = element("div");
			input = element("input");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Credit card type");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			select = claim_element(div1_nodes, "SELECT", { name: true, class: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t2 = claim_text(option0_nodes, "Select a type");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t3 = claim_text(option1_nodes, "American Express");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t4 = claim_text(option2_nodes, "Master");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t5 = claim_text(option3_nodes, "Visa");
			option3_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t7 = claim_text(div4_nodes, "Credit card number");
			div4_nodes.forEach(detach);
			t8 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input = claim_element(div5_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			option0.__value = "";
			option0.value = option0.__value;
			add_location(option0, file, 7, 24, 366);
			option1.__value = "Ae";
			option1.value = option1.__value;
			add_location(option1, file, 8, 24, 430);
			option2.__value = "Master";
			option2.value = option2.__value;
			add_location(option2, file, 9, 24, 499);
			option3.__value = "Visa";
			option3.value = option3.__value;
			add_location(option3, file, 10, 24, 562);
			select.name = "cardType";
			select.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(select, file, 6, 20, 242);
			div1.className = "fl w-50";
			add_location(div1, file, 5, 16, 200);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 18, 16, 765);
			attr(input, "type", "text");
			input.name = "cc";
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input, file, 20, 20, 873);
			div5.className = "fl w-50";
			add_location(div5, file, 19, 16, 831);
			div6.className = "fl w-100";
			add_location(div6, file, 17, 12, 726);
			div7.className = "cf mb2";
			add_location(div7, file, 16, 8, 693);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 21);
			dispose = listen(select, "change", ctx.changeType);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, select);
			append(select, option0);
			append(option0, t2);
			append(select, option1);
			append(option1, t3);
			append(select, option2);
			append(option2, t4);
			append(select, option3);
			append(option3, t5);
			append(form, t6);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t7);
			append(div6, t8);
			append(div6, div5);
			append(div5, input);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}

			dispose();
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

function instance($$self, $$props, $$invalidate) {
	

let fv;
onMount(() => {
    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(form, {
        fields: {
            cardType: {
                validators: {
                    notEmpty: {
                        message: 'The type is required'
                    }
                }
            },
            cc: {
                validators: {
                    notEmpty: {
                        message: 'The credit card number is required'
                    },
                    callback: {
                        message: 'The credit card number is not valid',
                        callback: (input) => {
                            const value = input.value;
                            if (value === '') {
                                return true;
                            }    

                            // Check if the input is valid credit card number
                            const result = creditCard().validate({ value });
                            if (!result.valid) {
                                return false;
                            } else {
                                let currentType = null;
                                // result.meta.type can be one of
                                // AMERICAN_EXPRESS, DINERS_CLUB, DINERS_CLUB_US, DISCOVER, JCB, LASER,
                                // MAESTRO, MASTERCARD, SOLO, UNIONPAY, VISA
                                switch (result.meta.type) {
                                    case 'AMERICAN_EXPRESS':
                                        currentType = 'Ae';     // Ae is the value of American Express card in the select box
                                        break;

                                    case 'MASTERCARD':
                                    case 'DINERS_CLUB_US':
                                        currentType = 'Master'; // Master is the value of Master card in the select box
                                        break;

                                    case 'VISA':
                                        currentType = 'Visa';   // Visa is the value of Visa card in the select box
                                        break;

                                    default:
                                        currentType = null;
                                        break;
                                }

                                // Get the selected type
                                const selectedType = form.querySelector('[name="cardType"]').value;
                                if (currentType == null || currentType !== selectedType) {
                                    return {
                                        valid: false,
                                        message: 'The credit card number does not match with selected type'
                                    }
                                }
                            }

                            return true;
                        }
                    },
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/asking-credit-card-number-to-match-with-selected-type/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }));

    return () => {
        fv.destroy();
    };
});

const changeType = () => {
    // Whenever user changes the card type,
    // we need to revalidate the credit card number
    fv.revalidateField('cc');
};

	return { changeType };
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;

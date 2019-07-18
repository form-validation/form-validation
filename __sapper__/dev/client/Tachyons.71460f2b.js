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
                <div class="fl w-25 pa2">Expiration</div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Month" name="expMonth" />
                </div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Year" name="expYear" />
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
                expMonth: {
                    validators: {
                        notEmpty: {
                            message: 'The expiration month is required'
                        },
                        digits: {
                            message: 'The expiration month can contain digits only'
                        },
                        callback: {
                            message: 'Expired',
                            callback: function(input) {
                                const value = parseInt(input.value, 10);
                                const year  = form.querySelector('[name="expYear"]').value;
                                const currentMonth = new Date().getMonth() + 1;
                                const currentYear  = new Date().getFullYear();
                                if (value < 0 || value > 12) {
                                    return false;
                                }
                                if (year === '') {
                                    return true;
                                }
                                const expYear = parseInt(year, 10);
                                if (expYear > currentYear || (expYear === currentYear && value >= currentMonth)) {
                                    fv.updateFieldStatus('expYear', 'Valid');
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                        },
                    },
                },
                expYear: {
                    validators: {
                        notEmpty: {
                            message: 'The expiration year is required'
                        },
                        digits: {
                            message: 'The expiration year can contain digits only'
                        },
                        callback: {
                            message: 'Expired',
                            callback: function(input) {
                                const value = parseInt(input.value, 10);
                                const month = form.querySelector('[name="expMonth"]').value;
                                const currentMonth = new Date().getMonth() + 1;
                                const currentYear  = new Date().getFullYear();
                                if (value < currentYear || value > currentYear + 10) {
                                    return false;
                                }
                                if (month == '') {
                                    return false;
                                }
                                const expMonth = parseInt(month, 10);
                                if (value > currentYear || (value == currentYear && expMonth >= currentMonth)) {
                                    fv.updateFieldStatus('expMonth', 'Valid');
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                        },
                    },
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
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/validating-credit-card-expiration-date/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/validating-credit-card-expiration-date/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div1, input0, t2, div2, input1, t3, div8, div7, div5, t4, div6, button, t5;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			t0 = text("Expiration");
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
			t4 = space();
			div6 = element("div");
			button = element("button");
			t5 = text("Submit");
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

			t0 = claim_text(div0_nodes, "Expiration");
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, placeholder: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, placeholder: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div5 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div5_nodes.forEach(detach);
			t4 = claim_text(div7_nodes, "\n                ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			button = claim_element(div6_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t5 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.placeholder = "Month";
			input0.name = "expMonth";
			add_location(input0, file, 6, 20, 240);
			div1.className = "fl w-30 mr2";
			add_location(div1, file, 5, 16, 194);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.placeholder = "Year";
			input1.name = "expYear";
			add_location(input1, file, 9, 20, 431);
			div2.className = "fl w-30";
			add_location(div2, file, 8, 16, 389);
			div3.className = "fl w-100";
			add_location(div3, file, 3, 12, 97);
			div4.className = "cf mb2";
			add_location(div4, file, 2, 8, 64);
			div5.className = "fl w-25 pa2";
			add_location(div5, file, 16, 16, 677);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 18, 20, 767);
			div6.className = "fl w-50";
			add_location(div6, file, 17, 16, 725);
			div7.className = "fl w-100";
			add_location(div7, file, 15, 12, 638);
			div8.className = "cf mb2";
			add_location(div8, file, 14, 8, 605);
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
			append(div7, t4);
			append(div7, div6);
			append(div6, button);
			append(button, t5);
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
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
        fields: {
            expMonth: {
                validators: {
                    notEmpty: {
                        message: 'The expiration month is required'
                    },
                    digits: {
                        message: 'The expiration month can contain digits only'
                    },
                    callback: {
                        message: 'Expired',
                        callback: (input) => {
                            const value = parseInt(input.value, 10);
                            const year  = form.querySelector('[name="expYear"]').value;
                            const currentMonth = new Date().getMonth() + 1;
                            const currentYear  = new Date().getFullYear();
                            if (value < 0 || value > 12) {
                                return false;
                            }
                            if (year === '') {
                                return true;
                            }
                            const expYear = parseInt(year, 10);
                            if (expYear > currentYear || (expYear === currentYear && value >= currentMonth)) {
                                fv.updateFieldStatus('expYear', 'Valid');
                                return true;
                            } else {
                                return false;
                            }
                        },
                    },
                },
            },
            expYear: {
                validators: {
                    notEmpty: {
                        message: 'The expiration year is required'
                    },
                    digits: {
                        message: 'The expiration year can contain digits only'
                    },
                    callback: {
                        message: 'Expired',
                        callback: (input) => {
                            const value = parseInt(input.value, 10);
                            const month = form.querySelector('[name="expMonth"]').value;
                            const currentMonth = new Date().getMonth() + 1;
                            const currentYear  = new Date().getFullYear();
                            if (value < currentYear || value > currentYear + 10) {
                                return false;
                            }
                            if (month == '') {
                                return false;
                            }
                            const expMonth = parseInt(month, 10);
                            if (value > currentYear || (value == currentYear && expMonth >= currentMonth)) {
                                fv.updateFieldStatus('expMonth', 'Valid');
                                return true;
                            } else {
                                return false;
                            }
                        },
                    },
                },
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
                sender: '/guide/examples/validating-credit-card-expiration-date/tachyons',
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

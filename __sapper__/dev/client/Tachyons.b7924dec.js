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
                <div class="fl w-25 pa2">Emails</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
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
                'email[]': {
                    validators: {
                        emailAddress: {
                            message: 'The value is not a valid email address'
                        },
                        callback: {
                            callback: function(input) {
                                const emailElements    = fv.getElements('email[]');
                                let notEmptyCount      = 0;
                                const obj              = {};
                                const duplicateRemoved = [];

                                for (const i in emailElements) {
                                    const v = emailElements[i].value;
                                    if (v !== '') {
                                        obj[v] = 0;
                                        notEmptyCount++;
                                    }
                                }

                                for (const i in obj) {
                                    duplicateRemoved.push(obj[i]);
                                }

                                if (duplicateRemoved.length === 0) {
                                    return {
                                        valid: false,
                                        message: 'You must fill at least one email address',
                                    };
                                } else if (duplicateRemoved.length !== notEmptyCount) {
                                    return {
                                        valid: false,
                                        message: 'The email address must be unique',
                                    };
                                }

                                fv.updateFieldStatus('email[]', 'Valid', 'callback');
                                return {
                                    valid: true,
                                };
                            }
                        },
                    }
                }
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

/* src/routes/guide/examples/asking-fields-to-be-unique/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/asking-fields-to-be-unique/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, div5, input1, t4, div11, div10, div8, t5, div9, input2, t6, div15, div14, div12, t7, div13, input3, t8, div19, div18, div16, t9, div17, input4, t10, div23, div22, div20, t11, div21, button, t12;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Emails");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = space();
			div5 = element("div");
			input1 = element("input");
			t4 = space();
			div11 = element("div");
			div10 = element("div");
			div8 = element("div");
			t5 = space();
			div9 = element("div");
			input2 = element("input");
			t6 = space();
			div15 = element("div");
			div14 = element("div");
			div12 = element("div");
			t7 = space();
			div13 = element("div");
			input3 = element("input");
			t8 = space();
			div19 = element("div");
			div18 = element("div");
			div16 = element("div");
			t9 = space();
			div17 = element("div");
			input4 = element("input");
			t10 = space();
			div23 = element("div");
			div22 = element("div");
			div20 = element("div");
			t11 = space();
			div21 = element("div");
			button = element("button");
			t12 = text("Submit");
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

			t0 = claim_text(div0_nodes, "Emails");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div4_nodes.forEach(detach);
			t3 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input1 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t4 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div8_nodes.forEach(detach);
			t5 = claim_text(div10_nodes, "\n                ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input2 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div12_nodes.forEach(detach);
			t7 = claim_text(div14_nodes, "\n                ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			input3 = claim_element(div13_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div16 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div16_nodes.forEach(detach);
			t9 = claim_text(div18_nodes, "\n                ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			input4 = claim_element(div17_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t10 = claim_text(form_nodes, "\n\n        ");

			div23 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div20 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div20_nodes.forEach(detach);
			t11 = claim_text(div22_nodes, "\n                ");

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			button = claim_element(div21_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t12 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "email[]";
			add_location(input0, file, 6, 20, 232);
			div1.className = "fl w-50";
			add_location(div1, file, 5, 16, 190);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 459);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "email[]";
			add_location(input1, file, 15, 20, 549);
			div5.className = "fl w-50";
			add_location(div5, file, 14, 16, 507);
			div6.className = "fl w-100";
			add_location(div6, file, 12, 12, 420);
			div7.className = "cf mb2";
			add_location(div7, file, 11, 8, 387);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 22, 16, 776);
			attr(input2, "type", "text");
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input2.name = "email[]";
			add_location(input2, file, 24, 20, 866);
			div9.className = "fl w-50";
			add_location(div9, file, 23, 16, 824);
			div10.className = "fl w-100";
			add_location(div10, file, 21, 12, 737);
			div11.className = "cf mb2";
			add_location(div11, file, 20, 8, 704);
			div12.className = "fl w-25 pa2";
			add_location(div12, file, 31, 16, 1093);
			attr(input3, "type", "text");
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input3.name = "email[]";
			add_location(input3, file, 33, 20, 1183);
			div13.className = "fl w-50";
			add_location(div13, file, 32, 16, 1141);
			div14.className = "fl w-100";
			add_location(div14, file, 30, 12, 1054);
			div15.className = "cf mb2";
			add_location(div15, file, 29, 8, 1021);
			div16.className = "fl w-25 pa2";
			add_location(div16, file, 40, 16, 1410);
			attr(input4, "type", "text");
			input4.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input4.name = "email[]";
			add_location(input4, file, 42, 20, 1500);
			div17.className = "fl w-50";
			add_location(div17, file, 41, 16, 1458);
			div18.className = "fl w-100";
			add_location(div18, file, 39, 12, 1371);
			div19.className = "cf mb2";
			add_location(div19, file, 38, 8, 1338);
			div20.className = "fl w-25 pa2";
			add_location(div20, file, 49, 16, 1727);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 51, 20, 1817);
			div21.className = "fl w-50";
			add_location(div21, file, 50, 16, 1775);
			div22.className = "fl w-100";
			add_location(div22, file, 48, 12, 1688);
			div23.className = "cf mb2";
			add_location(div23, file, 47, 8, 1655);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div6, t3);
			append(div6, div5);
			append(div5, input1);
			append(form, t4);
			append(form, div11);
			append(div11, div10);
			append(div10, div8);
			append(div10, t5);
			append(div10, div9);
			append(div9, input2);
			append(form, t6);
			append(form, div15);
			append(div15, div14);
			append(div14, div12);
			append(div14, t7);
			append(div14, div13);
			append(div13, input3);
			append(form, t8);
			append(form, div19);
			append(div19, div18);
			append(div18, div16);
			append(div18, t9);
			append(div18, div17);
			append(div17, input4);
			append(form, t10);
			append(form, div23);
			append(div23, div22);
			append(div22, div20);
			append(div22, t11);
			append(div22, div21);
			append(div21, button);
			append(button, t12);
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
            'email[]': {
                validators: {
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                    callback: {
                        callback: (input) => {
                            const emailElements    = fv.getElements('email[]');
                            let notEmptyCount      = 0;
                            const obj              = {};
                            const duplicateRemoved = [];

                            for (const i in emailElements) {
                                const v = emailElements[i].value;
                                if (v !== '') {
                                    obj[v] = 0;
                                    notEmptyCount++;
                                }
                            }

                            for (const i in obj) {
                                duplicateRemoved.push(obj[i]);
                            }

                            if (duplicateRemoved.length === 0) {
                                return {
                                    valid: false,
                                    message: 'You must fill at least one email address',
                                };
                            } else if (duplicateRemoved.length !== notEmptyCount) {
                                return {
                                    valid: false,
                                    message: 'The email address must be unique',
                                };
                            }

                            fv.updateFieldStatus('email[]', 'Valid', 'callback');
                            return {
                                valid: true,
                            };
                        }
                    },
                }
            }
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
                sender: '/guide/examples/asking-fields-to-be-unique/basic/tachyons',
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

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as phone } from './chunk.560d829e.js';

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
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="fullName" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Phone</div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="phoneNumber" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Gender</div>
                <div class="fl w-75">
                    <div class="mb2">
                        <label><input type="radio" name="gender" value="male" /> Male</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="gender" value="female" /> Female</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="gender" value="other" /> Other</label>
                    </div>
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
<!-- 
You have to include the full version of FormValidation which contains all validators
including the phone validator
-->    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required'
                        }
                    }
                },
                phoneNumber: {
                    validators: {
                        notEmpty: {
                            message: 'The phone number is required'
                        },
                        phone: {
                            message: 'The phone number is not valid',
                            country: 'US'
                        },
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {
                            message: 'The summary is required'
                        }
                    }
                },
            },
            plugins: {
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                trigger: new FormValidation.plugins.Trigger({
                    threshold: {
                        fullName: 10,
                        phoneNumber: 5,
                    },
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, t4, div5, input1, t5, div14, div13, div8, t6, t7, div12, div9, label0, input2, t8, t9, div10, label1, input3, t10, t11, div11, label2, input4, t12, t13, div18, div17, div15, t14, div16, button, t15;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = text("Phone");
			t4 = space();
			div5 = element("div");
			input1 = element("input");
			t5 = space();
			div14 = element("div");
			div13 = element("div");
			div8 = element("div");
			t6 = text("Gender");
			t7 = space();
			div12 = element("div");
			div9 = element("div");
			label0 = element("label");
			input2 = element("input");
			t8 = text(" Male");
			t9 = space();
			div10 = element("div");
			label1 = element("label");
			input3 = element("input");
			t10 = text(" Female");
			t11 = space();
			div11 = element("div");
			label2 = element("label");
			input4 = element("input");
			t12 = text(" Other");
			t13 = space();
			div18 = element("div");
			div17 = element("div");
			div15 = element("div");
			t14 = space();
			div16 = element("div");
			button = element("button");
			t15 = text("Submit");
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

			t0 = claim_text(div0_nodes, "Full name");
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
			t2 = claim_text(form_nodes, "\n    \n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Phone");
			div4_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input1 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div14 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div8 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			t6 = claim_text(div8_nodes, "Gender");
			div8_nodes.forEach(detach);
			t7 = claim_text(div13_nodes, "\n                ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div9 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label0 = claim_element(div9_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input2 = claim_element(label0_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(label0_nodes, " Male");
			label0_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t9 = claim_text(div12_nodes, "\n                    ");

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label1 = claim_element(div10_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input3 = claim_element(label1_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t10 = claim_text(label1_nodes, " Female");
			label1_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t11 = claim_text(div12_nodes, "\n                    ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label2 = claim_element(div11_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			input4 = claim_element(label2_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(label2_nodes, " Other");
			label2_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t13 = claim_text(form_nodes, "\n\n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div15 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div15_nodes.forEach(detach);
			t14 = claim_text(div17_nodes, "\n                ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			button = claim_element(div16_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t15 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "fullName";
			add_location(input0, file, 6, 20, 235);
			div1.className = "fl w-40";
			add_location(div1, file, 5, 16, 193);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 467);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "phoneNumber";
			add_location(input1, file, 15, 20, 562);
			div5.className = "fl w-30";
			add_location(div5, file, 14, 16, 520);
			div6.className = "fl w-100";
			add_location(div6, file, 12, 12, 428);
			div7.className = "cf mb2";
			add_location(div7, file, 11, 8, 395);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 22, 16, 797);
			attr(input2, "type", "radio");
			input2.name = "gender";
			input2.value = "male";
			add_location(input2, file, 25, 31, 942);
			add_location(label0, file, 25, 24, 935);
			div9.className = "mb2";
			add_location(div9, file, 24, 20, 893);
			attr(input3, "type", "radio");
			input3.name = "gender";
			input3.value = "female";
			add_location(input3, file, 28, 31, 1101);
			add_location(label1, file, 28, 24, 1094);
			div10.className = "mb2";
			add_location(div10, file, 27, 20, 1052);
			attr(input4, "type", "radio");
			input4.name = "gender";
			input4.value = "other";
			add_location(input4, file, 31, 31, 1264);
			add_location(label2, file, 31, 24, 1257);
			div11.className = "mb2";
			add_location(div11, file, 30, 20, 1215);
			div12.className = "fl w-75";
			add_location(div12, file, 23, 16, 851);
			div13.className = "fl w-100";
			add_location(div13, file, 21, 12, 758);
			div14.className = "cf mb2";
			add_location(div14, file, 20, 8, 725);
			div15.className = "fl w-25 pa2";
			add_location(div15, file, 39, 16, 1494);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 41, 20, 1584);
			div16.className = "fl w-50";
			add_location(div16, file, 40, 16, 1542);
			div17.className = "fl w-100";
			add_location(div17, file, 38, 12, 1455);
			div18.className = "cf mb2";
			add_location(div18, file, 37, 8, 1422);
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
			append(div4, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, input1);
			append(form, t5);
			append(form, div14);
			append(div14, div13);
			append(div13, div8);
			append(div8, t6);
			append(div13, t7);
			append(div13, div12);
			append(div12, div9);
			append(div9, label0);
			append(label0, input2);
			append(label0, t8);
			append(div12, t9);
			append(div12, div10);
			append(div10, label1);
			append(label1, input3);
			append(label1, t10);
			append(div12, t11);
			append(div12, div11);
			append(div11, label2);
			append(label2, input4);
			append(label2, t12);
			append(form, t13);
			append(form, div18);
			append(div18, div17);
			append(div17, div15);
			append(div17, t14);
			append(div17, div16);
			append(div16, button);
			append(button, t15);
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
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            phoneNumber: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    phone: {
                        message: 'The phone number is not valid',
                        country: 'US'
                    },
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The summary is required'
                    }
                }
            },
        },
        plugins: {
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            trigger: new Trigger({
                threshold: {
                    fullName: 10,
                    phoneNumber: 5,
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('phone', phone);

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

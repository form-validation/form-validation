import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, C as listen, o as insert, p as append, r as noop } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as ReceiveMessage } from './chunk.75c83501.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as zipCode } from './chunk.b13bd860.js';

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
                <div class="fl w-25 pa2">Country</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country">
                        <option value="US">United States</option>
                        <option value="AT">Austria</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="FR">French</option>
                        <option value="DE">Germany</option>
                        <option value="IN">India</option>
                        <option value="IT">Italy</option>
                        <option value="IE">Ireland</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="GB">United Kingdom</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Postal code</div>
                <div class="fl w-50">
                    <input type="text" name="postalCode" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
including the zipCode validator
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                postalCode: {
                    validators: {
                        zipCode: {
                            country: function() {
                                return form.querySelector('[name="country"]').value;
                            },
                            message: 'The value is not a valid postal code'
                        }
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

    form.querySelector('[name="country"]').addEventListener('change', function() {
        // Revalidate the postal code field whenever user changes the country
        fv.revalidateField('postalCode');
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/validators/zip-code/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/zip-code/basic/Tachyons.svelte";

// (2:4) <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/zip-code/basic" on:received={receive}>
function create_default_slot_1(ctx) {
	var form, div3, div2, div0, t0, t1, div1, select, option0, t2, option1, t3, option2, t4, option3, t5, option4, t6, option5, t7, option6, t8, option7, t9, option8, t10, option9, t11, option10, t12, option11, t13, option12, t14, option13, t15, option14, t16, option15, t17, option16, t18, option17, t19, option18, t20, option19, t21, option20, t22, option21, t23, option22, t24, option23, t25, t26, div7, div6, div4, t27, t28, div5, input, dispose;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Country");
			t1 = space();
			div1 = element("div");
			select = element("select");
			option0 = element("option");
			t2 = text("United States");
			option1 = element("option");
			t3 = text("Austria");
			option2 = element("option");
			t4 = text("Bulgaria");
			option3 = element("option");
			t5 = text("Brazil");
			option4 = element("option");
			t6 = text("Canada");
			option5 = element("option");
			t7 = text("Czech Republic");
			option6 = element("option");
			t8 = text("Denmark");
			option7 = element("option");
			t9 = text("French");
			option8 = element("option");
			t10 = text("Germany");
			option9 = element("option");
			t11 = text("India");
			option10 = element("option");
			t12 = text("Italy");
			option11 = element("option");
			t13 = text("Ireland");
			option12 = element("option");
			t14 = text("Morocco");
			option13 = element("option");
			t15 = text("Netherlands");
			option14 = element("option");
			t16 = text("Poland");
			option15 = element("option");
			t17 = text("Portugal");
			option16 = element("option");
			t18 = text("Romania");
			option17 = element("option");
			t19 = text("Russia");
			option18 = element("option");
			t20 = text("Singapore");
			option19 = element("option");
			t21 = text("Slovakia");
			option20 = element("option");
			t22 = text("Spain");
			option21 = element("option");
			t23 = text("Sweden");
			option22 = element("option");
			t24 = text("Switzerland");
			option23 = element("option");
			t25 = text("United Kingdom");
			t26 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t27 = text("Postal code");
			t28 = space();
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

			t0 = claim_text(div0_nodes, "Country");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			select = claim_element(div1_nodes, "SELECT", { class: true, name: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t2 = claim_text(option0_nodes, "United States");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t3 = claim_text(option1_nodes, "Austria");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t4 = claim_text(option2_nodes, "Bulgaria");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t5 = claim_text(option3_nodes, "Brazil");
			option3_nodes.forEach(detach);

			option4 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option4_nodes = children(option4);

			t6 = claim_text(option4_nodes, "Canada");
			option4_nodes.forEach(detach);

			option5 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option5_nodes = children(option5);

			t7 = claim_text(option5_nodes, "Czech Republic");
			option5_nodes.forEach(detach);

			option6 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option6_nodes = children(option6);

			t8 = claim_text(option6_nodes, "Denmark");
			option6_nodes.forEach(detach);

			option7 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option7_nodes = children(option7);

			t9 = claim_text(option7_nodes, "French");
			option7_nodes.forEach(detach);

			option8 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option8_nodes = children(option8);

			t10 = claim_text(option8_nodes, "Germany");
			option8_nodes.forEach(detach);

			option9 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option9_nodes = children(option9);

			t11 = claim_text(option9_nodes, "India");
			option9_nodes.forEach(detach);

			option10 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option10_nodes = children(option10);

			t12 = claim_text(option10_nodes, "Italy");
			option10_nodes.forEach(detach);

			option11 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option11_nodes = children(option11);

			t13 = claim_text(option11_nodes, "Ireland");
			option11_nodes.forEach(detach);

			option12 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option12_nodes = children(option12);

			t14 = claim_text(option12_nodes, "Morocco");
			option12_nodes.forEach(detach);

			option13 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option13_nodes = children(option13);

			t15 = claim_text(option13_nodes, "Netherlands");
			option13_nodes.forEach(detach);

			option14 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option14_nodes = children(option14);

			t16 = claim_text(option14_nodes, "Poland");
			option14_nodes.forEach(detach);

			option15 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option15_nodes = children(option15);

			t17 = claim_text(option15_nodes, "Portugal");
			option15_nodes.forEach(detach);

			option16 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option16_nodes = children(option16);

			t18 = claim_text(option16_nodes, "Romania");
			option16_nodes.forEach(detach);

			option17 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option17_nodes = children(option17);

			t19 = claim_text(option17_nodes, "Russia");
			option17_nodes.forEach(detach);

			option18 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option18_nodes = children(option18);

			t20 = claim_text(option18_nodes, "Singapore");
			option18_nodes.forEach(detach);

			option19 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option19_nodes = children(option19);

			t21 = claim_text(option19_nodes, "Slovakia");
			option19_nodes.forEach(detach);

			option20 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option20_nodes = children(option20);

			t22 = claim_text(option20_nodes, "Spain");
			option20_nodes.forEach(detach);

			option21 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option21_nodes = children(option21);

			t23 = claim_text(option21_nodes, "Sweden");
			option21_nodes.forEach(detach);

			option22 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option22_nodes = children(option22);

			t24 = claim_text(option22_nodes, "Switzerland");
			option22_nodes.forEach(detach);

			option23 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option23_nodes = children(option23);

			t25 = claim_text(option23_nodes, "United Kingdom");
			option23_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t26 = claim_text(form_nodes, "\n\n            ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t27 = claim_text(div4_nodes, "Postal code");
			div4_nodes.forEach(detach);
			t28 = claim_text(div6_nodes, "\n                    ");

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
			add_location(div0, file, 5, 20, 266);
			option0.__value = "US";
			option0.value = option0.__value;
			add_location(option0, file, 8, 28, 501);
			option1.__value = "AT";
			option1.value = option1.__value;
			add_location(option1, file, 9, 28, 571);
			option2.__value = "BG";
			option2.value = option2.__value;
			add_location(option2, file, 10, 28, 635);
			option3.__value = "BR";
			option3.value = option3.__value;
			add_location(option3, file, 11, 28, 700);
			option4.__value = "CA";
			option4.value = option4.__value;
			add_location(option4, file, 12, 28, 763);
			option5.__value = "CZ";
			option5.value = option5.__value;
			add_location(option5, file, 13, 28, 826);
			option6.__value = "DK";
			option6.value = option6.__value;
			add_location(option6, file, 14, 28, 897);
			option7.__value = "FR";
			option7.value = option7.__value;
			add_location(option7, file, 15, 28, 961);
			option8.__value = "DE";
			option8.value = option8.__value;
			add_location(option8, file, 16, 28, 1024);
			option9.__value = "IN";
			option9.value = option9.__value;
			add_location(option9, file, 17, 28, 1088);
			option10.__value = "IT";
			option10.value = option10.__value;
			add_location(option10, file, 18, 28, 1150);
			option11.__value = "IE";
			option11.value = option11.__value;
			add_location(option11, file, 19, 28, 1212);
			option12.__value = "MA";
			option12.value = option12.__value;
			add_location(option12, file, 20, 28, 1276);
			option13.__value = "NL";
			option13.value = option13.__value;
			add_location(option13, file, 21, 28, 1340);
			option14.__value = "PL";
			option14.value = option14.__value;
			add_location(option14, file, 22, 28, 1408);
			option15.__value = "PT";
			option15.value = option15.__value;
			add_location(option15, file, 23, 28, 1471);
			option16.__value = "RO";
			option16.value = option16.__value;
			add_location(option16, file, 24, 28, 1536);
			option17.__value = "RU";
			option17.value = option17.__value;
			add_location(option17, file, 25, 28, 1600);
			option18.__value = "SG";
			option18.value = option18.__value;
			add_location(option18, file, 26, 28, 1663);
			option19.__value = "SK";
			option19.value = option19.__value;
			add_location(option19, file, 27, 28, 1729);
			option20.__value = "ES";
			option20.value = option20.__value;
			add_location(option20, file, 28, 28, 1794);
			option21.__value = "SE";
			option21.value = option21.__value;
			add_location(option21, file, 29, 28, 1856);
			option22.__value = "CH";
			option22.value = option22.__value;
			add_location(option22, file, 30, 28, 1919);
			option23.__value = "GB";
			option23.value = option23.__value;
			add_location(option23, file, 31, 28, 1987);
			select.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			select.name = "country";
			add_location(select, file, 7, 24, 371);
			div1.className = "fl w-50";
			add_location(div1, file, 6, 20, 325);
			div2.className = "fl w-100";
			add_location(div2, file, 4, 16, 223);
			div3.className = "cf mb2";
			add_location(div3, file, 3, 12, 186);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 39, 20, 2226);
			attr(input, "type", "text");
			input.name = "postalCode";
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input, file, 41, 24, 2335);
			div5.className = "fl w-50";
			add_location(div5, file, 40, 20, 2289);
			div6.className = "fl w-100";
			add_location(div6, file, 38, 16, 2183);
			div7.className = "cf mb2";
			add_location(div7, file, 37, 12, 2146);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 2, 8, 139);
			dispose = listen(select, "change", ctx.changeCountry);
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
			append(select, option4);
			append(option4, t6);
			append(select, option5);
			append(option5, t7);
			append(select, option6);
			append(option6, t8);
			append(select, option7);
			append(option7, t9);
			append(select, option8);
			append(option8, t10);
			append(select, option9);
			append(option9, t11);
			append(select, option10);
			append(option10, t12);
			append(select, option11);
			append(option11, t13);
			append(select, option12);
			append(option12, t14);
			append(select, option13);
			append(option13, t15);
			append(select, option14);
			append(option14, t16);
			append(select, option15);
			append(option15, t17);
			append(select, option16);
			append(option16, t18);
			append(select, option17);
			append(option17, t19);
			append(select, option18);
			append(option18, t20);
			append(select, option19);
			append(option19, t21);
			append(select, option20);
			append(option20, t22);
			append(select, option21);
			append(option21, t23);
			append(select, option22);
			append(option22, t24);
			append(select, option23);
			append(option23, t25);
			append(form, t26);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t27);
			append(div6, t28);
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

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var current;

	var receivemessage = new ReceiveMessage({
		props: {
		channel: "SAMPLE_FIELD_VALUE",
		sender: "/guide/validators/zip-code/basic",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});
	receivemessage.$on("received", ctx.receive);

	return {
		c: function create() {
			receivemessage.$$.fragment.c();
		},

		l: function claim(nodes) {
			receivemessage.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(receivemessage, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var receivemessage_changes = {};
			if (changed.$$scope) receivemessage_changes.$$scope = { changed, ctx };
			receivemessage.$set(receivemessage_changes);
		},

		i: function intro(local) {
			if (current) return;
			receivemessage.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			receivemessage.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			receivemessage.$destroy(detaching);
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

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="country"]').value = v.country;
    form.querySelector('[name="postalCode"]').value = v.sample;

    if (fv) {
        fv.revalidateField('postalCode').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/zip-code/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const changeCountry = () => {
    if (fv) {
        fv.revalidateField('postalCode');
    }
};

onMount(() => {
    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(form, {
        fields: {
            postalCode: {
                validators: {
                    zipCode: {
                        country: () => {
                            return form.querySelector('[name="country"]').value;
                        },
                        message: 'The value is not a valid postal code'
                    }
                }
            },
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
                sender: '/guide/validators/zip-code/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('zipCode', zipCode));

    return () => {
        fv.destroy();
    };
});

	return { receive, changeCountry };
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;

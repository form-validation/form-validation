import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger, b as Message } from './chunk.fb19edaf.js';
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
                <div class="fl w-25 pa2">Event name</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Alert on</div>
                <div class="fl w-75">
                    <div class="w-100 js-alert-field-container">
                        <div class="fl w-50">
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="0" /> On event day</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="1" /> 1 day before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="2" /> 2 days before</label>
                            </div>
                        </div>
                        <div class="fl w-50">
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="3" /> 3 days before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="7" /> 1 week before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="14" /> 2 weeks before</label>
                            </div>
                        </div>
                        <div id="alertDayIcon"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-75">
                    <!-- The container to place the error of checkboxes -->
                    <div id="alertDayMessage"></div>
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
    FormValidation.formValidation(
        form,
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The event name is required'
                        }
                    }
                },
                alertDay: {
                    validators: {
                        notEmpty: {
                            message: 'Please choose at least one checkbox'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons({
                    defaultMessageContainer: false,
                    rowSelector: function(field, ele) {
                        return field === 'alertDay' ? '.js-alert-field-container' : '.fl';
                    },
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                    onPlaced: function(e) {
                        if (e.field === 'alertDay') {
                            document.getElementById('alertDayIcon').appendChild(e.iconElement);
                        }
                    },
                }),
                message: new FormValidation.plugins.Message({
                    clazz: 'red lh-copy',
                    container: function(field, ele) {
                        return field === 'alertDay'
                                ? document.getElementById('alertDayMessage')
                                : FormValidation.plugins.Message.getClosestContainer(ele, form, /^(.*)fl(.*)$/);
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

/* src/routes/guide/examples/validating-checkbox-list-placed-in-multiple-columns/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/validating-checkbox-list-placed-in-multiple-columns/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div17, div16, div4, t3, t4, div15, div14, div8, div5, label0, input1, t5, t6, div6, label1, input2, t7, t8, div7, label2, input3, t9, t10, div12, div9, label3, input4, t11, t12, div10, label4, input5, t13, t14, div11, label5, input6, t15, t16, div13, t17, div22, div21, div18, t18, div20, div19, t19, div26, div25, div23, t20, div24, button, t21;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Event name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div17 = element("div");
			div16 = element("div");
			div4 = element("div");
			t3 = text("Alert on");
			t4 = space();
			div15 = element("div");
			div14 = element("div");
			div8 = element("div");
			div5 = element("div");
			label0 = element("label");
			input1 = element("input");
			t5 = text(" On event day");
			t6 = space();
			div6 = element("div");
			label1 = element("label");
			input2 = element("input");
			t7 = text(" 1 day before");
			t8 = space();
			div7 = element("div");
			label2 = element("label");
			input3 = element("input");
			t9 = text(" 2 days before");
			t10 = space();
			div12 = element("div");
			div9 = element("div");
			label3 = element("label");
			input4 = element("input");
			t11 = text(" 3 days before");
			t12 = space();
			div10 = element("div");
			label4 = element("label");
			input5 = element("input");
			t13 = text(" 1 week before");
			t14 = space();
			div11 = element("div");
			label5 = element("label");
			input6 = element("input");
			t15 = text(" 2 weeks before");
			t16 = space();
			div13 = element("div");
			t17 = space();
			div22 = element("div");
			div21 = element("div");
			div18 = element("div");
			t18 = space();
			div20 = element("div");
			div19 = element("div");
			t19 = space();
			div26 = element("div");
			div25 = element("div");
			div23 = element("div");
			t20 = space();
			div24 = element("div");
			button = element("button");
			t21 = text("Submit");
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

			t0 = claim_text(div0_nodes, "Event name");
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

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div4 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Alert on");
			div4_nodes.forEach(detach);
			t4 = claim_text(div16_nodes, "\n                ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div8 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div5 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label0 = claim_element(div5_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input1 = claim_element(label0_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t5 = claim_text(label0_nodes, " On event day");
			label0_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t6 = claim_text(div8_nodes, "\n                            ");

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label1 = claim_element(div6_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input2 = claim_element(label1_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t7 = claim_text(label1_nodes, " 1 day before");
			label1_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t8 = claim_text(div8_nodes, "\n                            ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label2 = claim_element(div7_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			input3 = claim_element(label2_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t9 = claim_text(label2_nodes, " 2 days before");
			label2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t10 = claim_text(div14_nodes, "\n                        ");

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div9 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label3 = claim_element(div9_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input4 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t11 = claim_text(label3_nodes, " 3 days before");
			label3_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t12 = claim_text(div12_nodes, "\n                            ");

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label4 = claim_element(div10_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input5 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t13 = claim_text(label4_nodes, " 1 week before");
			label4_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t14 = claim_text(div12_nodes, "\n                            ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label5 = claim_element(div11_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input6 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t15 = claim_text(label5_nodes, " 2 weeks before");
			label5_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t16 = claim_text(div14_nodes, "\n                        ");

			div13 = claim_element(div14_nodes, "DIV", { id: true }, false);
			var div13_nodes = children(div13);

			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n\n        ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div18 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div18_nodes.forEach(detach);
			t18 = claim_text(div21_nodes, "\n                ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { id: true }, false);
			var div19_nodes = children(div19);

			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			t19 = claim_text(form_nodes, "\n\n        ");

			div26 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div23 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div23_nodes.forEach(detach);
			t20 = claim_text(div25_nodes, "\n                ");

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			button = claim_element(div24_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t21 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "name";
			add_location(input0, file, 6, 20, 236);
			div1.className = "fl w-50";
			add_location(div1, file, 5, 16, 194);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 464);
			attr(input1, "type", "checkbox");
			input1.name = "alertDay";
			input1.value = "0";
			add_location(input1, file, 18, 39, 738);
			add_location(label0, file, 18, 32, 731);
			div5.className = "mb2";
			add_location(div5, file, 17, 28, 681);
			attr(input2, "type", "checkbox");
			input2.name = "alertDay";
			input2.value = "1";
			add_location(input2, file, 21, 39, 931);
			add_location(label1, file, 21, 32, 924);
			div6.className = "mb2";
			add_location(div6, file, 20, 28, 874);
			attr(input3, "type", "checkbox");
			input3.name = "alertDay";
			input3.value = "2";
			add_location(input3, file, 24, 39, 1124);
			add_location(label2, file, 24, 32, 1117);
			div7.className = "mb2";
			add_location(div7, file, 23, 28, 1067);
			div8.className = "fl w-50";
			add_location(div8, file, 16, 24, 631);
			attr(input4, "type", "checkbox");
			input4.name = "alertDay";
			input4.value = "3";
			add_location(input4, file, 29, 39, 1395);
			add_location(label3, file, 29, 32, 1388);
			div9.className = "mb2";
			add_location(div9, file, 28, 28, 1338);
			attr(input5, "type", "checkbox");
			input5.name = "alertDay";
			input5.value = "7";
			add_location(input5, file, 32, 39, 1589);
			add_location(label4, file, 32, 32, 1582);
			div10.className = "mb2";
			add_location(div10, file, 31, 28, 1532);
			attr(input6, "type", "checkbox");
			input6.name = "alertDay";
			input6.value = "14";
			add_location(input6, file, 35, 39, 1783);
			add_location(label5, file, 35, 32, 1776);
			div11.className = "mb2";
			add_location(div11, file, 34, 28, 1726);
			div12.className = "fl w-50";
			add_location(div12, file, 27, 24, 1288);
			div13.id = "alertDayIcon";
			add_location(div13, file, 38, 24, 1949);
			div14.className = "w-100 js-alert-field-container";
			add_location(div14, file, 15, 20, 562);
			div15.className = "fl w-75";
			add_location(div15, file, 14, 16, 520);
			div16.className = "fl w-100";
			add_location(div16, file, 12, 12, 425);
			div17.className = "cf mb2";
			add_location(div17, file, 11, 8, 392);
			div18.className = "fl w-25 pa2";
			add_location(div18, file, 46, 16, 2144);
			div19.id = "alertDayMessage";
			add_location(div19, file, 49, 20, 2310);
			div20.className = "fl w-75";
			add_location(div20, file, 47, 16, 2192);
			div21.className = "fl w-100";
			add_location(div21, file, 45, 12, 2105);
			div22.className = "cf mb2";
			add_location(div22, file, 44, 8, 2072);
			div23.className = "fl w-25 pa2";
			add_location(div23, file, 56, 16, 2481);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 58, 20, 2571);
			div24.className = "fl w-50";
			add_location(div24, file, 57, 16, 2529);
			div25.className = "fl w-100";
			add_location(div25, file, 55, 12, 2442);
			div26.className = "cf mb2";
			add_location(div26, file, 54, 8, 2409);
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
			append(form, div17);
			append(div17, div16);
			append(div16, div4);
			append(div4, t3);
			append(div16, t4);
			append(div16, div15);
			append(div15, div14);
			append(div14, div8);
			append(div8, div5);
			append(div5, label0);
			append(label0, input1);
			append(label0, t5);
			append(div8, t6);
			append(div8, div6);
			append(div6, label1);
			append(label1, input2);
			append(label1, t7);
			append(div8, t8);
			append(div8, div7);
			append(div7, label2);
			append(label2, input3);
			append(label2, t9);
			append(div14, t10);
			append(div14, div12);
			append(div12, div9);
			append(div9, label3);
			append(label3, input4);
			append(label3, t11);
			append(div12, t12);
			append(div12, div10);
			append(div10, label4);
			append(label4, input5);
			append(label4, t13);
			append(div12, t14);
			append(div12, div11);
			append(div11, label5);
			append(label5, input6);
			append(label5, t15);
			append(div14, t16);
			append(div14, div13);
			append(form, t17);
			append(form, div22);
			append(div22, div21);
			append(div21, div18);
			append(div21, t18);
			append(div21, div20);
			append(div20, div19);
			append(form, t19);
			append(form, div26);
			append(div26, div25);
			append(div25, div23);
			append(div25, t20);
			append(div25, div24);
			append(div24, button);
			append(button, t21);
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
            name: {
                validators: {
                    notEmpty: {
                        message: 'The event name is required'
                    }
                }
            },
            alertDay: {
                validators: {
                    notEmpty: {
                        message: 'Please choose at least one checkbox'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons({
                defaultMessageContainer: false,
                rowSelector: (field, ele) => {
                    return field === 'alertDay' ? '.js-alert-field-container' : '.fl';
                },
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
                onPlaced: (e) => {
                    if (e.field === 'alertDay') {
                        document.getElementById('alertDayIcon').appendChild(e.iconElement);
                    }
                },
            }),
            message: new Message({
                clazz: 'red lh-copy',
                container: (field, ele) => {
                    return field === 'alertDay' ? document.getElementById('alertDayMessage') : Message.getClosestContainer(ele, form, /^(.*)fl(.*)$/);
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/validating-checkbox-list-placed-in-multiple-columns/tachyons',
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

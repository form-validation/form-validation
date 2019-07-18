import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger, b as Message } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Event name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Alert on</label>
            <div class="col-sm-9">
                <div class="row js-alert-field-container">
                    <div class="col-sm-6">
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="0" />
                            <label class="form-check-label">On event day</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="1" />
                            <label class="form-check-label">1 day before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="2" />
                            <label class="form-check-label">2 days before</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="3" />
                            <label class="form-check-label">3 days before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="7" />
                            <label class="form-check-label">1 week before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="14" />
                            <label class="form-check-label">2 weeks before</label>
                        </div>
                    </div>
                    <div id="alertDayIcon"></div>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <!-- The container to place the error of checkboxes -->
                <div id="alertDayMessage"></div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

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
                bootstrap: new FormValidation.plugins.Bootstrap({
                    defaultMessageContainer: false,
                    rowSelector: function(field, ele) {
                        return field === 'alertDay' ? '.js-alert-field-container' : '.form-group';
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
                    clazz: 'fv-help-block',
                    container: function(field, ele) {
                        return field === 'alertDay'
                                ? document.getElementById('alertDayMessage')
                                : FormValidation.plugins.Message.getClosestContainer(ele, form, /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/);
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

/* src/routes/guide/examples/validating-checkbox-list-placed-in-multiple-columns/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/validating-checkbox-list-placed-in-multiple-columns/Bootstrap.svelte";

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div13, label1, t3, t4, div12, div11, div5, div2, input1, t5, label2, t6, t7, div3, input2, t8, label3, t9, t10, div4, input3, t11, label4, t12, t13, div9, div6, input4, t14, label5, t15, t16, div7, input5, t17, label6, t18, t19, div8, input6, t20, label7, t21, t22, div10, t23, div16, div15, div14, t24, div18, div17, button, t25;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			t0 = text("Event name");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div13 = element("div");
			label1 = element("label");
			t3 = text("Alert on");
			t4 = space();
			div12 = element("div");
			div11 = element("div");
			div5 = element("div");
			div2 = element("div");
			input1 = element("input");
			t5 = space();
			label2 = element("label");
			t6 = text("On event day");
			t7 = space();
			div3 = element("div");
			input2 = element("input");
			t8 = space();
			label3 = element("label");
			t9 = text("1 day before");
			t10 = space();
			div4 = element("div");
			input3 = element("input");
			t11 = space();
			label4 = element("label");
			t12 = text("2 days before");
			t13 = space();
			div9 = element("div");
			div6 = element("div");
			input4 = element("input");
			t14 = space();
			label5 = element("label");
			t15 = text("3 days before");
			t16 = space();
			div7 = element("div");
			input5 = element("input");
			t17 = space();
			label6 = element("label");
			t18 = text("1 week before");
			t19 = space();
			div8 = element("div");
			input6 = element("input");
			t20 = space();
			label7 = element("label");
			t21 = text("2 weeks before");
			t22 = space();
			div10 = element("div");
			t23 = space();
			div16 = element("div");
			div15 = element("div");
			div14 = element("div");
			t24 = space();
			div18 = element("div");
			div17 = element("div");
			button = element("button");
			t25 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Event name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n            ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label1 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Alert on");
			label1_nodes.forEach(detach);
			t4 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div5 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div2 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t5 = claim_text(div2_nodes, "\n                            ");

			label2 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "On event day");
			label2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t7 = claim_text(div5_nodes, "\n                        ");

			div3 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(div3_nodes, "\n                            ");

			label3 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t9 = claim_text(label3_nodes, "1 day before");
			label3_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t10 = claim_text(div5_nodes, "\n                        ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input3 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t11 = claim_text(div4_nodes, "\n                            ");

			label4 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "2 days before");
			label4_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t13 = claim_text(div11_nodes, "\n                    ");

			div9 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div6 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input4 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(div6_nodes, "\n                            ");

			label5 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "3 days before");
			label5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t16 = claim_text(div9_nodes, "\n                        ");

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input5 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(div7_nodes, "\n                            ");

			label6 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t18 = claim_text(label6_nodes, "1 week before");
			label6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t19 = claim_text(div9_nodes, "\n                        ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input6 = claim_element(div8_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t20 = claim_text(div8_nodes, "\n                            ");

			label7 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t21 = claim_text(label7_nodes, "2 weeks before");
			label7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t22 = claim_text(div11_nodes, "\n                    ");

			div10 = claim_element(div11_nodes, "DIV", { id: true }, false);
			var div10_nodes = children(div10);

			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { id: true }, false);
			var div14_nodes = children(div14);

			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t24 = claim_text(form_nodes, "\n    \n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			button = claim_element(div17_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t25 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-3 col-form-label";
			add_location(label0, file, 3, 12, 126);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "name";
			add_location(input0, file, 5, 16, 235);
			div0.className = "col-sm-4";
			add_location(div0, file, 4, 12, 196);
			div1.className = "form-group row";
			add_location(div1, file, 2, 8, 85);
			label1.className = "col-sm-3 col-form-label";
			add_location(label1, file, 10, 12, 378);
			attr(input1, "type", "checkbox");
			input1.className = "form-check-input";
			input1.name = "alertDay";
			input1.value = "0";
			add_location(input1, file, 15, 28, 666);
			label2.className = "form-check-label";
			add_location(label2, file, 16, 28, 771);
			div2.className = "form-check form-check-inline";
			add_location(div2, file, 14, 24, 595);
			attr(input2, "type", "checkbox");
			input2.className = "form-check-input";
			input2.name = "alertDay";
			input2.value = "1";
			add_location(input2, file, 19, 28, 950);
			label3.className = "form-check-label";
			add_location(label3, file, 20, 28, 1055);
			div3.className = "form-check form-check-inline";
			add_location(div3, file, 18, 24, 879);
			attr(input3, "type", "checkbox");
			input3.className = "form-check-input";
			input3.name = "alertDay";
			input3.value = "2";
			add_location(input3, file, 23, 28, 1234);
			label4.className = "form-check-label";
			add_location(label4, file, 24, 28, 1339);
			div4.className = "form-check form-check-inline";
			add_location(div4, file, 22, 24, 1163);
			div5.className = "col-sm-6";
			add_location(div5, file, 13, 20, 548);
			attr(input4, "type", "checkbox");
			input4.className = "form-check-input";
			input4.name = "alertDay";
			input4.value = "3";
			add_location(input4, file, 29, 28, 1589);
			label5.className = "form-check-label";
			add_location(label5, file, 30, 28, 1694);
			div6.className = "form-check form-check-inline";
			add_location(div6, file, 28, 24, 1518);
			attr(input5, "type", "checkbox");
			input5.className = "form-check-input";
			input5.name = "alertDay";
			input5.value = "7";
			add_location(input5, file, 33, 28, 1874);
			label6.className = "form-check-label";
			add_location(label6, file, 34, 28, 1979);
			div7.className = "form-check form-check-inline";
			add_location(div7, file, 32, 24, 1803);
			attr(input6, "type", "checkbox");
			input6.className = "form-check-input";
			input6.name = "alertDay";
			input6.value = "14";
			add_location(input6, file, 37, 28, 2159);
			label7.className = "form-check-label";
			add_location(label7, file, 38, 28, 2265);
			div8.className = "form-check form-check-inline";
			add_location(div8, file, 36, 24, 2088);
			div9.className = "col-sm-6";
			add_location(div9, file, 27, 20, 1471);
			div10.id = "alertDayIcon";
			add_location(div10, file, 41, 20, 2398);
			div11.className = "row js-alert-field-container";
			add_location(div11, file, 12, 16, 485);
			div12.className = "col-sm-9";
			add_location(div12, file, 11, 12, 446);
			div13.className = "form-group row";
			add_location(div13, file, 9, 8, 337);
			div14.id = "alertDayMessage";
			add_location(div14, file, 49, 16, 2658);
			div15.className = "col-sm-9 offset-sm-3";
			add_location(div15, file, 47, 12, 2535);
			div16.className = "form-group row";
			add_location(div16, file, 46, 8, 2494);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 55, 16, 2830);
			div17.className = "col-sm-9 offset-sm-3";
			add_location(div17, file, 54, 12, 2779);
			div18.className = "form-group row";
			add_location(div18, file, 53, 8, 2738);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 42);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label0);
			append(label0, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, input0);
			append(form, t2);
			append(form, div13);
			append(div13, label1);
			append(label1, t3);
			append(div13, t4);
			append(div13, div12);
			append(div12, div11);
			append(div11, div5);
			append(div5, div2);
			append(div2, input1);
			append(div2, t5);
			append(div2, label2);
			append(label2, t6);
			append(div5, t7);
			append(div5, div3);
			append(div3, input2);
			append(div3, t8);
			append(div3, label3);
			append(label3, t9);
			append(div5, t10);
			append(div5, div4);
			append(div4, input3);
			append(div4, t11);
			append(div4, label4);
			append(label4, t12);
			append(div11, t13);
			append(div11, div9);
			append(div9, div6);
			append(div6, input4);
			append(div6, t14);
			append(div6, label5);
			append(label5, t15);
			append(div9, t16);
			append(div9, div7);
			append(div7, input5);
			append(div7, t17);
			append(div7, label6);
			append(label6, t18);
			append(div9, t19);
			append(div9, div8);
			append(div8, input6);
			append(div8, t20);
			append(div8, label7);
			append(label7, t21);
			append(div11, t22);
			append(div11, div10);
			append(form, t23);
			append(form, div16);
			append(div16, div15);
			append(div15, div14);
			append(form, t24);
			append(form, div18);
			append(div18, div17);
			append(div17, button);
			append(button, t25);
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

	var bootstraplayout = new BootstrapLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstraplayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstraplayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstraplayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstraplayout_changes = {};
			if (changed.onLoaded) bootstraplayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bootstraplayout_changes.$$scope = { changed, ctx };
			bootstraplayout.$set(bootstraplayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstraplayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstraplayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstraplayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(form, {
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
            bootstrap: new Bootstrap({
                defaultMessageContainer: false,
                rowSelector: (field, ele) => {
                    return field === 'alertDay' ? '.js-alert-field-container' : '.form-group';
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
                clazz: 'fv-help-block',
                container: (field, ele) => {
                    return field === 'alertDay' ? document.getElementById('alertDayMessage') : Message.getClosestContainer(ele, form, /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/);
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/validating-checkbox-list-placed-in-multiple-columns/bootstrap',
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

class Bootstrap_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap_1;

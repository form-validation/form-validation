import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger, a as classSet } from './chunk.fb19edaf.js';
import { b as Icon, c as closest } from './chunk.79c24606.js';
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
            <label class="col-sm-3 col-form-label">Proposal title</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="title" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Abstract</label>
            <div class="col-sm-9">
                <textarea class="form-control" name="abstract" style="height: 400px;"></textarea>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Topics</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="angular" />
                    <label class="form-check-label">Angular</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="ember" />
                    <label class="form-check-label">Ember</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="react" />
                    <label class="form-check-label">React</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="vue" />
                    <label class="form-check-label">Vue</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Session type</label>
            <div class="col-sm-6">
                <select class="form-control" name="sessionType" style="width: 250px;">
                    <option value="">Choose the session type</option>
                    <option value="presentation">Presentation</option>
                    <option value="panel">Panel</option>
                    <option value="workshop">Workshop</option>
                </select>
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
    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                fields: {
                    title: {
                        validators: {
                            notEmpty: {
                                message: 'The title is required'
                            }
                        }
                    },
                    abstract: {
                        validators: {
                            notEmpty: {
                                message: 'The abstract is required'
                            },
                            stringLength: {
                                max: 400,
                                message: 'The abstract must be less than 400 characters'
                            }
                        }
                    },
                    'topics[]': {
                        validators: {
                            notEmpty: {
                                message: 'The topic is required'
                            },
                            choice: {
                                min: 2,
                                max: 3,
                                message: 'Please choose 2 - 3 topics'
                            }
                        }
                    },
                    sessionType: {
                        validators: {
                            notEmpty: {
                                message: 'The session type is required'
                            }
                        }
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    icon: new FormValidation.plugins.Icon({
                        valid: 'fa fa-check',
                        invalid: 'fa fa-times',
                        validating: 'fa fa-refresh',
                    }),
                },
            }
        )
        .on('core.element.validated', function(e) {
            // e.element presents the field element
            // e.valid indicates the field is valid or not
            if (e.valid) {
                // Remove has-success from the container
                const groupEle = FormValidation.utils.closest(e.element, '.form-group');
                if (groupEle) {
                    FormValidation.utils.classSet(groupEle, {
                        'has-success': false,
                    });
                }

                // Remove is-valid from the element
                FormValidation.utils.classSet(e.element, {
                    'is-valid': false,
                });
            }
        });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/hiding-success-class/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/hiding-success-class/Bootstrap.svelte";

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div3, label1, t3, t4, div2, textarea, t5, div9, label2, t6, t7, div8, div4, input1, t8, label3, t9, t10, div5, input2, t11, label4, t12, t13, div6, input3, t14, label5, t15, t16, div7, input4, t17, label6, t18, t19, div11, label7, t20, t21, div10, select, option0, t22, option1, t23, option2, t24, option3, t25, t26, div13, div12, button, t27;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			t0 = text("Proposal title");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			label1 = element("label");
			t3 = text("Abstract");
			t4 = space();
			div2 = element("div");
			textarea = element("textarea");
			t5 = space();
			div9 = element("div");
			label2 = element("label");
			t6 = text("Topics");
			t7 = space();
			div8 = element("div");
			div4 = element("div");
			input1 = element("input");
			t8 = space();
			label3 = element("label");
			t9 = text("Angular");
			t10 = space();
			div5 = element("div");
			input2 = element("input");
			t11 = space();
			label4 = element("label");
			t12 = text("Ember");
			t13 = space();
			div6 = element("div");
			input3 = element("input");
			t14 = space();
			label5 = element("label");
			t15 = text("React");
			t16 = space();
			div7 = element("div");
			input4 = element("input");
			t17 = space();
			label6 = element("label");
			t18 = text("Vue");
			t19 = space();
			div11 = element("div");
			label7 = element("label");
			t20 = text("Session type");
			t21 = space();
			div10 = element("div");
			select = element("select");
			option0 = element("option");
			t22 = text("Choose the session type");
			option1 = element("option");
			t23 = text("Presentation");
			option2 = element("option");
			t24 = text("Panel");
			option3 = element("option");
			t25 = text("Workshop");
			t26 = space();
			div13 = element("div");
			div12 = element("div");
			button = element("button");
			t27 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Proposal title");
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

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Abstract");
			label1_nodes.forEach(detach);
			t4 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			textarea = claim_element(div2_nodes, "TEXTAREA", { class: true, name: true, style: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label2 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Topics");
			label2_nodes.forEach(detach);
			t7 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div4 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input1 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t8 = claim_text(div4_nodes, "\n                    ");

			label3 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t9 = claim_text(label3_nodes, "Angular");
			label3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t10 = claim_text(div8_nodes, "\n                ");

			div5 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t11 = claim_text(div5_nodes, "\n                    ");

			label4 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "Ember");
			label4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t13 = claim_text(div8_nodes, "\n                ");

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input3 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t14 = claim_text(div6_nodes, "\n                    ");

			label5 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "React");
			label5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t16 = claim_text(div8_nodes, "\n                ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input4 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t17 = claim_text(div7_nodes, "\n                    ");

			label6 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t18 = claim_text(label6_nodes, "Vue");
			label6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t19 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label7 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t20 = claim_text(label7_nodes, "Session type");
			label7_nodes.forEach(detach);
			t21 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			select = claim_element(div10_nodes, "SELECT", { class: true, name: true, style: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t22 = claim_text(option0_nodes, "Choose the session type");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t23 = claim_text(option1_nodes, "Presentation");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t24 = claim_text(option2_nodes, "Panel");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t25 = claim_text(option3_nodes, "Workshop");
			option3_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t26 = claim_text(form_nodes, "\n    \n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			button = claim_element(div12_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t27 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-3 col-form-label";
			add_location(label0, file, 3, 12, 126);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "title";
			add_location(input0, file, 5, 16, 239);
			div0.className = "col-sm-5";
			add_location(div0, file, 4, 12, 200);
			div1.className = "form-group row";
			add_location(div1, file, 2, 8, 85);
			label1.className = "col-sm-3 col-form-label";
			add_location(label1, file, 10, 12, 383);
			textarea.className = "form-control";
			textarea.name = "abstract";
			set_style(textarea, "height", "400px");
			add_location(textarea, file, 12, 16, 490);
			div2.className = "col-sm-9";
			add_location(div2, file, 11, 12, 451);
			div3.className = "form-group row";
			add_location(div3, file, 9, 8, 342);
			label2.className = "col-sm-3 col-form-label";
			add_location(label2, file, 17, 12, 656);
			attr(input1, "type", "checkbox");
			input1.className = "form-check-input";
			input1.name = "topics[]";
			input1.value = "angular";
			add_location(input1, file, 20, 20, 824);
			label3.className = "form-check-label";
			add_location(label3, file, 21, 20, 927);
			div4.className = "form-check form-check-inline";
			add_location(div4, file, 19, 16, 761);
			attr(input2, "type", "checkbox");
			input2.className = "form-check-input";
			input2.name = "topics[]";
			input2.value = "ember";
			add_location(input2, file, 24, 20, 1077);
			label4.className = "form-check-label";
			add_location(label4, file, 25, 20, 1178);
			div5.className = "form-check form-check-inline";
			add_location(div5, file, 23, 16, 1014);
			attr(input3, "type", "checkbox");
			input3.className = "form-check-input";
			input3.name = "topics[]";
			input3.value = "react";
			add_location(input3, file, 28, 20, 1326);
			label5.className = "form-check-label";
			add_location(label5, file, 29, 20, 1427);
			div6.className = "form-check form-check-inline";
			add_location(div6, file, 27, 16, 1263);
			attr(input4, "type", "checkbox");
			input4.className = "form-check-input";
			input4.name = "topics[]";
			input4.value = "vue";
			add_location(input4, file, 32, 20, 1575);
			label6.className = "form-check-label";
			add_location(label6, file, 33, 20, 1674);
			div7.className = "form-check form-check-inline";
			add_location(div7, file, 31, 16, 1512);
			div8.className = "col-sm-6";
			add_location(div8, file, 18, 12, 722);
			div9.className = "form-group row";
			add_location(div9, file, 16, 8, 615);
			label7.className = "col-sm-3 col-form-label";
			add_location(label7, file, 39, 12, 1825);
			option0.__value = "";
			option0.value = option0.__value;
			add_location(option0, file, 42, 20, 2027);
			option1.__value = "presentation";
			option1.value = option1.__value;
			add_location(option1, file, 43, 20, 2097);
			option2.__value = "panel";
			option2.value = option2.__value;
			add_location(option2, file, 44, 20, 2168);
			option3.__value = "workshop";
			option3.value = option3.__value;
			add_location(option3, file, 45, 20, 2225);
			select.className = "form-control";
			select.name = "sessionType";
			set_style(select, "width", "250px");
			add_location(select, file, 41, 16, 1936);
			div10.className = "col-sm-6";
			add_location(div10, file, 40, 12, 1897);
			div11.className = "form-group row";
			add_location(div11, file, 38, 8, 1784);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 52, 16, 2433);
			div12.className = "col-sm-9 offset-sm-3";
			add_location(div12, file, 51, 12, 2382);
			div13.className = "form-group row";
			add_location(div13, file, 50, 8, 2341);
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
			append(form, div3);
			append(div3, label1);
			append(label1, t3);
			append(div3, t4);
			append(div3, div2);
			append(div2, textarea);
			append(form, t5);
			append(form, div9);
			append(div9, label2);
			append(label2, t6);
			append(div9, t7);
			append(div9, div8);
			append(div8, div4);
			append(div4, input1);
			append(div4, t8);
			append(div4, label3);
			append(label3, t9);
			append(div8, t10);
			append(div8, div5);
			append(div5, input2);
			append(div5, t11);
			append(div5, label4);
			append(label4, t12);
			append(div8, t13);
			append(div8, div6);
			append(div6, input3);
			append(div6, t14);
			append(div6, label5);
			append(label5, t15);
			append(div8, t16);
			append(div8, div7);
			append(div7, input4);
			append(div7, t17);
			append(div7, label6);
			append(label6, t18);
			append(form, t19);
			append(form, div11);
			append(div11, label7);
			append(label7, t20);
			append(div11, t21);
			append(div11, div10);
			append(div10, select);
			append(select, option0);
			append(option0, t22);
			append(select, option1);
			append(option1, t23);
			append(select, option2);
			append(option2, t24);
			append(select, option3);
			append(option3, t25);
			append(form, t26);
			append(form, div13);
			append(div13, div12);
			append(div12, button);
			append(button, t27);
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
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            title: {
                validators: {
                    notEmpty: {
                        message: 'The title is required'
                    }
                }
            },
            abstract: {
                validators: {
                    notEmpty: {
                        message: 'The abstract is required'
                    },
                    stringLength: {
                        max: 400,
                        message: 'The abstract must be less than 400 characters'
                    }
                }
            },
            'topics[]': {
                validators: {
                    notEmpty: {
                        message: 'The topic is required'
                    },
                    choice: {
                        min: 2,
                        max: 3,
                        message: 'Please choose 2 - 3 topics'
                    }
                }
            },
            sessionType: {
                validators: {
                    notEmpty: {
                        message: 'The session type is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/hiding-success-class/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('core.element.validated', (e) => {
        // e.element presents the field element
        // e.valid indicates the field is valid or not
        if (e.valid) {
            const groupEle = closest(e.element, '.form-group');
            if (groupEle) {
                classSet(groupEle, {
                    'has-success': false,
                });
            }

            classSet(e.element, {
                'is-valid': false,
            });
        }
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

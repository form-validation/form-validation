import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, g as space, i as text, k as claim_element, l as children, m as detach, j as claim_text, A as attr, n as add_location, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MuiLayout, b as Mui } from './chunk.7ec0a65e.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="mui-container-fluid">
        <form id="demoForm" method="POST">
            <div class="mui-row">
                <div class="mui-col-md-6 mui-textfield">
                    <input type="text" name="firstName" />
                    <label>First name</label>
                </div>
                <div class="mui-col-md-6 mui-textfield">
                    <input type="text" name="lastName" />
                    <label>Last name</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-4 mui-textfield">
                    <input type="text" name="city" />
                    <label>City</label>
                </div>
                <div class="mui-col-md-4 mui-textfield">
                    <input type="text" name="state" />
                    <label>State</label>
                </div>
                <div class="mui-col-md-4 mui-textfield">
                    <input type="text" name="zipcode" />
                    <label>Zipcode</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
                </div>
            </div>
        </form>
    </div>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/js/mui.min.js"></script>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Materialize.min.js"></script-tag>

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
                mui: new FormValidation.plugins.Mui({
                    rowSelector: function(field, ele) {
                        // field is the field name
                        // ele is the field element
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.mui-col-md-6';

                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.mui-col-md-4';
                            
                            default:
                                return '.mui-row';
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

/* src/routes/guide/plugins/mui/multiple-fields/Mui.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/mui/multiple-fields/Mui.svelte";

// (13:0) <MuiLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var div9, form, div2, div0, input0, t0, label0, t1, t2, div1, input1, t3, label1, t4, t5, div6, div3, input2, t6, label2, t7, t8, div4, input3, t9, label3, t10, t11, div5, input4, t12, label4, t13, t14, div8, div7, button, t15;

	return {
		c: function create() {
			div9 = element("div");
			form = element("form");
			div2 = element("div");
			div0 = element("div");
			input0 = element("input");
			t0 = space();
			label0 = element("label");
			t1 = text("First name");
			t2 = space();
			div1 = element("div");
			input1 = element("input");
			t3 = space();
			label1 = element("label");
			t4 = text("Last name");
			t5 = space();
			div6 = element("div");
			div3 = element("div");
			input2 = element("input");
			t6 = space();
			label2 = element("label");
			t7 = text("City");
			t8 = space();
			div4 = element("div");
			input3 = element("input");
			t9 = space();
			label3 = element("label");
			t10 = text("State");
			t11 = space();
			div5 = element("div");
			input4 = element("input");
			t12 = space();
			label4 = element("label");
			t13 = text("Zipcode");
			t14 = space();
			div8 = element("div");
			div7 = element("div");
			button = element("button");
			t15 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			div9 = claim_element(nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			form = claim_element(div9_nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t0 = claim_text(div0_nodes, "\n                    ");

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t1 = claim_text(label0_nodes, "First name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t3 = claim_text(div1_nodes, "\n                    ");

			label1 = claim_element(div1_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Last name");
			label1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n            ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div3 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t6 = claim_text(div3_nodes, "\n                    ");

			label2 = claim_element(div3_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "City");
			label2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t8 = claim_text(div6_nodes, "\n                ");

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input3 = claim_element(div4_nodes, "INPUT", { type: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t9 = claim_text(div4_nodes, "\n                    ");

			label3 = claim_element(div4_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "State");
			label3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t11 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input4 = claim_element(div5_nodes, "INPUT", { type: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(div5_nodes, "\n                    ");

			label4 = claim_element(div5_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Zipcode");
			label4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t14 = claim_text(form_nodes, "\n        \n            ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			button = claim_element(div7_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t15 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			form_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(input0, "type", "text");
			input0.name = "firstName";
			add_location(input0, file, 17, 20, 369);
			add_location(label0, file, 18, 20, 428);
			div0.className = "mui-col-md-6 mui-textfield";
			add_location(div0, file, 16, 16, 308);
			attr(input1, "type", "text");
			input1.name = "lastName";
			add_location(input1, file, 21, 20, 554);
			add_location(label1, file, 22, 20, 612);
			div1.className = "mui-col-md-6 mui-textfield";
			add_location(div1, file, 20, 16, 493);
			div2.className = "mui-row";
			add_location(div2, file, 15, 12, 270);
			attr(input2, "type", "text");
			input2.name = "city";
			add_location(input2, file, 28, 20, 791);
			add_location(label2, file, 29, 20, 845);
			div3.className = "mui-col-md-4 mui-textfield";
			add_location(div3, file, 27, 16, 730);
			attr(input3, "type", "text");
			input3.name = "state";
			add_location(input3, file, 32, 20, 965);
			add_location(label3, file, 33, 20, 1020);
			div4.className = "mui-col-md-4 mui-textfield";
			add_location(div4, file, 31, 16, 904);
			attr(input4, "type", "text");
			input4.name = "zipcode";
			add_location(input4, file, 36, 20, 1141);
			add_location(label4, file, 37, 20, 1198);
			div5.className = "mui-col-md-4 mui-textfield";
			add_location(div5, file, 35, 16, 1080);
			div6.className = "mui-row";
			add_location(div6, file, 26, 12, 692);
			button.type = "submit";
			button.className = "mui-btn mui-btn--primary";
			add_location(button, file, 43, 20, 1370);
			div7.className = "mui-col-md-12";
			add_location(div7, file, 42, 16, 1322);
			div8.className = "mui-row";
			add_location(div8, file, 41, 12, 1284);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 14, 8, 223);
			div9.className = "mui-container-fluid";
			add_location(div9, file, 13, 4, 181);
		},

		m: function mount(target, anchor) {
			insert(target, div9, anchor);
			append(div9, form);
			append(form, div2);
			append(div2, div0);
			append(div0, input0);
			append(div0, t0);
			append(div0, label0);
			append(label0, t1);
			append(div2, t2);
			append(div2, div1);
			append(div1, input1);
			append(div1, t3);
			append(div1, label1);
			append(label1, t4);
			append(form, t5);
			append(form, div6);
			append(div6, div3);
			append(div3, input2);
			append(div3, t6);
			append(div3, label2);
			append(label2, t7);
			append(div6, t8);
			append(div6, div4);
			append(div4, input3);
			append(div4, t9);
			append(div4, label3);
			append(label3, t10);
			append(div6, t11);
			append(div6, div5);
			append(div5, input4);
			append(div5, t12);
			append(div5, label4);
			append(label4, t13);
			append(form, t14);
			append(form, div8);
			append(div8, div7);
			append(div7, button);
			append(button, t15);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div9);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var muilayout = new MuiLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			muilayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			muilayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(muilayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var muilayout_changes = {};
			if (changed.onLoaded) muilayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) muilayout_changes.$$scope = { changed, ctx };
			muilayout.$set(muilayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			muilayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			muilayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			muilayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
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
            mui: new Mui({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.mui-col-md-6';

                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.mui-col-md-4';
                        
                        default:
                            return '.mui-row';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/mui/multiple-fields/mui',
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

class Mui_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Mui_1;

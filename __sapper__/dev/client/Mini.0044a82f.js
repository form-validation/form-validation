import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MiniLayout, b as Mini } from './chunk.143e3fe1.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="col-sm-3">
                <label>Full name</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="firstName" style="width: 100%" placeholder="First name" />
            </div>
            <div class="col-sm-4">
                <input type="text" name="lastName" style="width: 100%" placeholder="Last name" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Address</label>
            </div>
            <div class="col-sm-3">
                <input type="text" name="city" style="width: 100%" placeholder="City" />
            </div>
            <div class="col-sm-3">
                <input type="text" name="state" style="width: 100%" placeholder="State" />
            </div>
            <div class="col-sm-3">
                <input type="text" name="zipcode" style="width: 100%" placeholder="Zipcode" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mini.min.js"></script-tag>

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
                mini: new FormValidation.plugins.Mini({
                    rowSelector: function(field, ele) {
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.col-sm-4';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.col-sm-3';
                            
                            default:
                                return '.row';
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

/* src/routes/guide/plugins/mini/multiple-fields/Mini.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/mini/multiple-fields/Mini.svelte";

// (1:0) <MiniLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div3, div0, label0, t0, t1, div1, input0, t2, div2, input1, t3, div8, div4, label1, t4, t5, div5, input2, t6, div6, input3, t7, div7, input4, t8, div10, div9, button, t9;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div8 = element("div");
			div4 = element("div");
			label1 = element("label");
			t4 = text("Address");
			t5 = space();
			div5 = element("div");
			input2 = element("input");
			t6 = space();
			div6 = element("div");
			input3 = element("input");
			t7 = space();
			div7 = element("div");
			input4 = element("input");
			t8 = space();
			div10 = element("div");
			div9 = element("div");
			button = element("button");
			t9 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n            ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true, style: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true, style: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div4 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Address");
			label1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t5 = claim_text(div8_nodes, "\n            ");

			div5 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, name: true, style: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t6 = claim_text(div8_nodes, "\n            ");

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input3 = claim_element(div6_nodes, "INPUT", { type: true, name: true, style: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t7 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input4 = claim_element(div7_nodes, "INPUT", { type: true, name: true, style: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			button = claim_element(div9_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t9 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 4, 16, 217);
			div0.className = "col-sm-3";
			add_location(div0, file, 3, 12, 178);
			attr(input0, "type", "text");
			input0.name = "firstName";
			set_style(input0, "width", "100%");
			input0.placeholder = "First name";
			add_location(input0, file, 7, 16, 312);
			div1.className = "col-sm-4";
			add_location(div1, file, 6, 12, 273);
			attr(input1, "type", "text");
			input1.name = "lastName";
			set_style(input1, "width", "100%");
			input1.placeholder = "Last name";
			add_location(input1, file, 10, 16, 466);
			div2.className = "col-sm-4";
			add_location(div2, file, 9, 12, 427);
			div3.className = "row";
			add_location(div3, file, 2, 8, 148);
			add_location(label1, file, 16, 16, 660);
			div4.className = "col-sm-3";
			add_location(div4, file, 15, 12, 621);
			attr(input2, "type", "text");
			input2.name = "city";
			set_style(input2, "width", "100%");
			input2.placeholder = "City";
			add_location(input2, file, 19, 16, 753);
			div5.className = "col-sm-3";
			add_location(div5, file, 18, 12, 714);
			attr(input3, "type", "text");
			input3.name = "state";
			set_style(input3, "width", "100%");
			input3.placeholder = "State";
			add_location(input3, file, 22, 16, 896);
			div6.className = "col-sm-3";
			add_location(div6, file, 21, 12, 857);
			attr(input4, "type", "text");
			input4.name = "zipcode";
			set_style(input4, "width", "100%");
			input4.placeholder = "Zipcode";
			add_location(input4, file, 25, 16, 1041);
			div7.className = "col-sm-3";
			add_location(div7, file, 24, 12, 1002);
			div8.className = "row";
			add_location(div8, file, 14, 8, 591);
			button.type = "submit";
			button.className = "primary";
			add_location(button, file, 31, 16, 1248);
			div9.className = "col-sm-9 col-sm-offset-3";
			add_location(div9, file, 30, 12, 1193);
			div10.className = "row";
			add_location(div10, file, 29, 8, 1163);
			form.id = "demoForm";
			form.method = "POST";
			set_style(form, "background", "#FFF");
			set_style(form, "border", "none");
			set_style(form, "margin", "0");
			set_style(form, "padding", "0 10px");
			add_location(form, file, 1, 4, 37);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div0);
			append(div0, label0);
			append(label0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div8);
			append(div8, div4);
			append(div4, label1);
			append(label1, t4);
			append(div8, t5);
			append(div8, div5);
			append(div5, input2);
			append(div8, t6);
			append(div8, div6);
			append(div6, input3);
			append(div8, t7);
			append(div8, div7);
			append(div7, input4);
			append(form, t8);
			append(form, div10);
			append(div10, div9);
			append(div9, button);
			append(button, t9);
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

	var minilayout = new MiniLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			minilayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			minilayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(minilayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var minilayout_changes = {};
			if (changed.onLoaded) minilayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) minilayout_changes.$$scope = { changed, ctx };
			minilayout.$set(minilayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			minilayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			minilayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			minilayout.$destroy(detaching);
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
            mini: new Mini({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.col-sm-4';
                        
                        case 'city': 
                        case 'state':
                        case 'zipcode':
                            return '.col-sm-3';
                        
                        default:
                            return '.row';
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
                sender: '/guide/plugins/mini/multiple-fields/mini',
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

class Mini_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Mini_1;

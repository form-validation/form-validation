import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as Bootstrap3Layout, b as Bootstrap3 } from './chunk.d41a5e4c.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <label class="col-xs-3 control-label">Full name</label>
            <div class="col-xs-4">
                <input type="text" class="form-control" name="firstName" placeholder="First name" />
            </div>
            <div class="col-xs-4">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="form-group">
            <label class="col-xs-3 control-label">Address</label>
            <div class="col-xs-3">
                <input type="text" class="form-control" name="city" placeholder="City" />
            </div>
            <div class="col-xs-3">
                <input type="text" class="form-control" name="state" placeholder="State" />
            </div>
            <div class="col-xs-3">
                <input type="text" class="form-control" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>

        <div class="form-group">
            <div class="col-xs-9 col-xs-offset-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap3.min.js"></script-tag>

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
                bootstrap3: new Bootstrap3({
                    rowSelector: function(field, ele) {
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.col-xs-4';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.col-xs-3';
                            
                            default:
                                return '.form-group';
                        }
                    }
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/bootstrap3/multiple-fields/Bootstrap3.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bootstrap3/multiple-fields/Bootstrap3.svelte";

// (1:0) <Bootstrap3Layout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, label0, t0, t1, div0, input0, t2, div1, input1, t3, div6, label1, t4, t5, div3, input2, t6, div4, input3, t7, div5, input4, t8, div8, div7, button, t9;

	return {
		c: function create() {
			form = element("form");
			div2 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			input1 = element("input");
			t3 = space();
			div6 = element("div");
			label1 = element("label");
			t4 = text("Address");
			t5 = space();
			div3 = element("div");
			input2 = element("input");
			t6 = space();
			div4 = element("div");
			input3 = element("input");
			t7 = space();
			div5 = element("div");
			input4 = element("input");
			t8 = space();
			div8 = element("div");
			div7 = element("div");
			button = element("button");
			t9 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label0 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n            ");

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label1 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Address");
			label1_nodes.forEach(detach);
			t5 = claim_text(div6_nodes, "\n            ");

			div3 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t6 = claim_text(div6_nodes, "\n            ");

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input3 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t7 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input4 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n    \n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			button = claim_element(div7_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t9 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-xs-3 control-label";
			add_location(label0, file, 3, 12, 147);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 5, 16, 254);
			div0.className = "col-xs-4";
			add_location(div0, file, 4, 12, 215);
			attr(input1, "type", "text");
			input1.className = "form-control";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 8, 16, 409);
			div1.className = "col-xs-4";
			add_location(div1, file, 7, 12, 370);
			div2.className = "form-group";
			add_location(div2, file, 2, 8, 110);
			label1.className = "col-xs-3 control-label";
			add_location(label1, file, 13, 12, 572);
			attr(input2, "type", "text");
			input2.className = "form-control";
			input2.name = "city";
			input2.placeholder = "City";
			add_location(input2, file, 15, 16, 677);
			div3.className = "col-xs-3";
			add_location(div3, file, 14, 12, 638);
			attr(input3, "type", "text");
			input3.className = "form-control";
			input3.name = "state";
			input3.placeholder = "State";
			add_location(input3, file, 18, 16, 821);
			div4.className = "col-xs-3";
			add_location(div4, file, 17, 12, 782);
			attr(input4, "type", "text");
			input4.className = "form-control";
			input4.name = "zipcode";
			input4.placeholder = "Zipcode";
			add_location(input4, file, 21, 16, 967);
			div5.className = "col-xs-3";
			add_location(div5, file, 20, 12, 928);
			div6.className = "form-group";
			add_location(div6, file, 12, 8, 535);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 28, 16, 1273);
			div7.className = "col-xs-9 col-xs-offset-3";
			add_location(div7, file, 26, 12, 1131);
			div8.className = "form-group";
			add_location(div8, file, 25, 8, 1094);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "form-horizontal";
			add_location(form, file, 1, 4, 43);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div2);
			append(div2, label0);
			append(label0, t0);
			append(div2, t1);
			append(div2, div0);
			append(div0, input0);
			append(div2, t2);
			append(div2, div1);
			append(div1, input1);
			append(form, t3);
			append(form, div6);
			append(div6, label1);
			append(label1, t4);
			append(div6, t5);
			append(div6, div3);
			append(div3, input2);
			append(div6, t6);
			append(div6, div4);
			append(div4, input3);
			append(div6, t7);
			append(div6, div5);
			append(div5, input4);
			append(form, t8);
			append(form, div8);
			append(div8, div7);
			append(div7, button);
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

	var bootstrap3layout = new Bootstrap3Layout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstrap3layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstrap3layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstrap3layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstrap3layout_changes = {};
			if (changed.onLoaded) bootstrap3layout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bootstrap3layout_changes.$$scope = { changed, ctx };
			bootstrap3layout.$set(bootstrap3layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstrap3layout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstrap3layout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstrap3layout.$destroy(detaching);
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
            bootstrap3: new Bootstrap3({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.col-xs-4';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.col-xs-3';
                        
                        default:
                            return '.form-group';
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
                sender: '/guide/plugins/bootstrap3/multiple-fields/bootstrap3',
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

class Bootstrap3_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap3_1;

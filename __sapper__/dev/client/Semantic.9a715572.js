import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as SemanticLayout, b as Semantic } from './chunk.0df549dd.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="ui form">
        <div class="fields">
            <label class="four wide field">Full name</label>
            <div class="five wide field">
                <!--
                When using feedback icon, the input must place inside 'ui input icon' element
                <div class="ui input icon">
                    <input type="text" />
                </div>
                See http://semantic-ui.com/elements/input.html#icon
                -->
                <div class="ui input icon">
                    <input type="text" name="firstName" placeholder="First name" />
                </div>
            </div>
            <div class="five wide field">
                <div class="ui input icon">
                    <input type="text" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field">Address</label>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="city" placeholder="City" />
                </div>
            </div>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="state" placeholder="State" />
                </div>
            </div>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="zipcode" placeholder="Zipcode" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field"></label>
            <div class="four wide field">
                <button type="submit" class="ui primary button">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The name must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The name can only consist of alphabetical, number and underscore'
                        }
                    }
                },
                price: {
                    validators: {
                        notEmpty: {
                            message: 'The price is required'
                        },
                        numeric: {
                            message: 'The price must be a number'
                        }
                    }
                },
                'size[]': {
                    validators: {
                        notEmpty: {
                            message: 'The size is required'
                        }
                    }
                },
                availability: {
                    validators: {
                        notEmpty: {
                            message: 'The availability option is required'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                semantic: new FormValidation.plugins.Semantic({
                    rowSelector: function(field, ele) {
                        // field is the field name
                        // ele is the field element
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.five.field';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.four.field';
                            
                            default:
                                return '.fields';
                        }
                    }
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new Icon({
                    valid: 'checkmark icon',
                    invalid: 'remove icon',
                    validating: 'refresh icon'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/semantic/multiple-fields/Semantic.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/semantic/multiple-fields/Semantic.svelte";

// (13:0) <SemanticLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div4, label0, t0, t1, div1, div0, input0, t2, div3, div2, input1, t3, div11, label1, t4, t5, div6, div5, input2, t6, div8, div7, input3, t7, div10, div9, input4, t8, div13, label2, t9, div12, button, t10;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div11 = element("div");
			label1 = element("label");
			t4 = text("Address");
			t5 = space();
			div6 = element("div");
			div5 = element("div");
			input2 = element("input");
			t6 = space();
			div8 = element("div");
			div7 = element("div");
			input3 = element("input");
			t7 = space();
			div10 = element("div");
			div9 = element("div");
			input4 = element("input");
			t8 = space();
			div13 = element("div");
			label2 = element("label");
			t9 = space();
			div12 = element("div");
			button = element("button");
			t10 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label0 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div4_nodes, "\n            ");

			div1 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div4_nodes, "\n            ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n    \n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label1 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Address");
			label1_nodes.forEach(detach);
			t5 = claim_text(div11_nodes, "\n            ");

			div6 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(div11_nodes, "\n            ");

			div8 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input3 = claim_element(div7_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t7 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input4 = claim_element(div9_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n    \n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label2 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			label2_nodes.forEach(detach);
			t9 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			button = claim_element(div12_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t10 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "four wide field";
			add_location(label0, file, 15, 12, 427);
			attr(input0, "type", "text");
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 25, 20, 894);
			div0.className = "ui input icon";
			add_location(div0, file, 24, 16, 846);
			div1.className = "five wide field";
			add_location(div1, file, 16, 12, 488);
			attr(input1, "type", "text");
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 30, 20, 1106);
			div2.className = "ui input icon";
			add_location(div2, file, 29, 16, 1058);
			div3.className = "five wide field";
			add_location(div3, file, 28, 12, 1012);
			div4.className = "fields";
			add_location(div4, file, 14, 8, 394);
			label1.className = "four wide field";
			add_location(label1, file, 36, 12, 1271);
			attr(input2, "type", "text");
			input2.name = "city";
			input2.placeholder = "City";
			add_location(input2, file, 39, 20, 1424);
			div5.className = "ui input icon";
			add_location(div5, file, 38, 16, 1376);
			div6.className = "four wide field";
			add_location(div6, file, 37, 12, 1330);
			attr(input3, "type", "text");
			input3.name = "state";
			input3.placeholder = "State";
			add_location(input3, file, 44, 20, 1625);
			div7.className = "ui input icon";
			add_location(div7, file, 43, 16, 1577);
			div8.className = "four wide field";
			add_location(div8, file, 42, 12, 1531);
			attr(input4, "type", "text");
			input4.name = "zipcode";
			input4.placeholder = "Zipcode";
			add_location(input4, file, 49, 20, 1828);
			div9.className = "ui input icon";
			add_location(div9, file, 48, 16, 1780);
			div10.className = "four wide field";
			add_location(div10, file, 47, 12, 1734);
			div11.className = "fields";
			add_location(div11, file, 35, 8, 1238);
			label2.className = "four wide field";
			add_location(label2, file, 55, 12, 1990);
			button.type = "submit";
			button.className = "ui primary button";
			add_location(button, file, 57, 16, 2088);
			div12.className = "four wide field";
			add_location(div12, file, 56, 12, 2042);
			div13.className = "fields";
			add_location(div13, file, 54, 8, 1957);
			form.id = "demoForm";
			form.method = "POST";
			form.className = "ui form";
			add_location(form, file, 13, 4, 335);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div4);
			append(div4, label0);
			append(label0, t0);
			append(div4, t1);
			append(div4, div1);
			append(div1, div0);
			append(div0, input0);
			append(div4, t2);
			append(div4, div3);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div11);
			append(div11, label1);
			append(label1, t4);
			append(div11, t5);
			append(div11, div6);
			append(div6, div5);
			append(div5, input2);
			append(div11, t6);
			append(div11, div8);
			append(div8, div7);
			append(div7, input3);
			append(div11, t7);
			append(div11, div10);
			append(div10, div9);
			append(div9, input4);
			append(form, t8);
			append(form, div13);
			append(div13, label2);
			append(div13, t9);
			append(div13, div12);
			append(div12, button);
			append(button, t10);
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

	var semanticlayout = new SemanticLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			semanticlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			semanticlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(semanticlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var semanticlayout_changes = {};
			if (changed.onLoaded) semanticlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) semanticlayout_changes.$$scope = { changed, ctx };
			semanticlayout.$set(semanticlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			semanticlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			semanticlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			semanticlayout.$destroy(detaching);
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
            semantic: new Semantic({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.five.field';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.four.field';
                        
                        default:
                            return '.fields';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/semantic/multiple-fields/semantic',
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

class Semantic_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Semantic_1;

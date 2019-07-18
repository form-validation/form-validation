import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as BulmaLayout, b as Bulma } from './chunk.acdfecb4.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Product name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="name" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Price</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <div class="control">
                        <span class="button is-static">$</span>
                    </div>
                    <div class="control">
                        <input type="text" class="input" name="price" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Size</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="s" /> S
                        </label>
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="m" /> M
                        </label>
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="l" /> L
                        </label>
                        <label class="checkbox">
                            <input name="size[]" type="checkbox" value="xl" /> XL
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Available in store</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input name="availability" type="radio" value="yes" /> Yes
                        </label>
                        <label class="radio">
                            <input name="availability" type="radio" value="no" /> No
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bulma.min.js"></script-tag>

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
                bulma: new FormValidation.plugins.Bulma(),
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

/* src/routes/guide/plugins/bulma/multiple-fields/Bulma.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bulma/multiple-fields/Bulma.svelte";

// (20:0) <BulmaLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div6, div0, label0, t0, t1, div5, div2, div1, input0, t2, div4, div3, input1, t3, div15, div7, label1, t4, t5, div14, div9, div8, input2, t6, div11, div10, input3, t7, div13, div12, input4, t8, div20, div16, t9, div19, div18, div17, button, t10;

	return {
		c: function create() {
			form = element("form");
			div6 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div5 = element("div");
			div2 = element("div");
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			input1 = element("input");
			t3 = space();
			div15 = element("div");
			div7 = element("div");
			label1 = element("label");
			t4 = text("Address");
			t5 = space();
			div14 = element("div");
			div9 = element("div");
			div8 = element("div");
			input2 = element("input");
			t6 = space();
			div11 = element("div");
			div10 = element("div");
			input3 = element("input");
			t7 = space();
			div13 = element("div");
			div12 = element("div");
			input4 = element("input");
			t8 = space();
			div20 = element("div");
			div16 = element("div");
			t9 = space();
			div19 = element("div");
			div18 = element("div");
			div17 = element("div");
			button = element("button");
			t10 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div0 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div2 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_text(div5_nodes, "\n                ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input1 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n    \n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div7 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label1 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Address");
			label1_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(div15_nodes, "\n            ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div9 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input2 = claim_element(div8_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t6 = claim_text(div14_nodes, "\n                ");

			div11 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			input3 = claim_element(div10_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t7 = claim_text(div14_nodes, "\n                ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			input4 = claim_element(div12_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div16 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div16_nodes.forEach(detach);
			t9 = claim_text(div20_nodes, "\n            ");

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			button = claim_element(div17_nodes, "BUTTON", { class: true, type: true }, false);
			var button_nodes = children(button);

			t10 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "label";
			add_location(label0, file, 23, 16, 473);
			div0.className = "field-label";
			add_location(div0, file, 22, 12, 431);
			attr(input0, "type", "text");
			input0.className = "input";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 28, 24, 670);
			div1.className = "control";
			add_location(div1, file, 27, 20, 624);
			div2.className = "field";
			add_location(div2, file, 26, 16, 584);
			attr(input1, "type", "text");
			input1.className = "input";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 33, 24, 900);
			div3.className = "control";
			add_location(div3, file, 32, 20, 854);
			div4.className = "field";
			add_location(div4, file, 31, 16, 814);
			div5.className = "field-body";
			add_location(div5, file, 25, 12, 543);
			div6.className = "field is-horizontal";
			add_location(div6, file, 21, 8, 385);
			label1.className = "label";
			add_location(label1, file, 41, 16, 1161);
			div7.className = "field-label";
			add_location(div7, file, 40, 12, 1119);
			attr(input2, "type", "text");
			input2.className = "input";
			input2.name = "city";
			input2.placeholder = "City";
			add_location(input2, file, 46, 24, 1356);
			div8.className = "control";
			add_location(div8, file, 45, 20, 1310);
			div9.className = "field";
			add_location(div9, file, 44, 16, 1270);
			attr(input3, "type", "text");
			input3.className = "input";
			input3.name = "state";
			input3.placeholder = "State";
			add_location(input3, file, 51, 24, 1575);
			div10.className = "control";
			add_location(div10, file, 50, 20, 1529);
			div11.className = "field";
			add_location(div11, file, 49, 16, 1489);
			attr(input4, "type", "text");
			input4.className = "input";
			input4.name = "zipcode";
			input4.placeholder = "Zipcode";
			add_location(input4, file, 56, 24, 1796);
			div12.className = "control";
			add_location(div12, file, 55, 20, 1750);
			div13.className = "field";
			add_location(div13, file, 54, 16, 1710);
			div14.className = "field-body";
			add_location(div14, file, 43, 12, 1229);
			div15.className = "field is-horizontal";
			add_location(div15, file, 39, 8, 1073);
			div16.className = "field-label";
			add_location(div16, file, 63, 12, 2008);
			button.className = "button is-primary";
			button.type = "submit";
			add_location(button, file, 67, 24, 2179);
			div17.className = "control";
			add_location(div17, file, 66, 20, 2133);
			div18.className = "field";
			add_location(div18, file, 65, 16, 2093);
			div19.className = "field-body";
			add_location(div19, file, 64, 12, 2052);
			div20.className = "field is-horizontal";
			add_location(div20, file, 62, 8, 1962);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 20, 4, 342);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div6);
			append(div6, div0);
			append(div0, label0);
			append(label0, t0);
			append(div6, t1);
			append(div6, div5);
			append(div5, div2);
			append(div2, div1);
			append(div1, input0);
			append(div5, t2);
			append(div5, div4);
			append(div4, div3);
			append(div3, input1);
			append(form, t3);
			append(form, div15);
			append(div15, div7);
			append(div7, label1);
			append(label1, t4);
			append(div15, t5);
			append(div15, div14);
			append(div14, div9);
			append(div9, div8);
			append(div8, input2);
			append(div14, t6);
			append(div14, div11);
			append(div11, div10);
			append(div10, input3);
			append(div14, t7);
			append(div14, div13);
			append(div13, div12);
			append(div12, input4);
			append(form, t8);
			append(form, div20);
			append(div20, div16);
			append(div20, t9);
			append(div20, div19);
			append(div19, div18);
			append(div18, div17);
			append(div17, button);
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

	var bulmalayout = new BulmaLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bulmalayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bulmalayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bulmalayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bulmalayout_changes = {};
			if (changed.onLoaded) bulmalayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bulmalayout_changes.$$scope = { changed, ctx };
			bulmalayout.$set(bulmalayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bulmalayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bulmalayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bulmalayout.$destroy(detaching);
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
            bulma: new Bulma(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bulma/multiple-fields/bulma',
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

class Bulma_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bulma_1;

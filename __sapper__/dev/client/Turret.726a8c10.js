import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as TurretLayout, b as Turret } from './chunk.efe31d6e.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/5.1.3/turretcss.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post" class="fv-stacked-form">
        <div class="field">
            <label>Username</label>
            <input type="text" name="username" />
        </div>

        <div class="field">
            <label>Password</label>
            <input type="password" name="password" />
        </div>

        <div class="field">
            <button type="submit" class="button button-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Turret.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long',
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore',
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters',
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                turret: new FormValidation.plugins.Turret(),
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

/* src/routes/guide/getting-started/usage/frameworks/Turret.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/getting-started/usage/frameworks/Turret.svelte";

// (1:0) <TurretLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div0, label0, t0, t1, input0, t2, div1, label1, t3, t4, input1, t5, div2, button, t6;

	return {
		c: function create() {
			form = element("form");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Username");
			t1 = space();
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			label1 = element("label");
			t3 = text("Password");
			t4 = space();
			input1 = element("input");
			t5 = space();
			div2 = element("div");
			button = element("button");
			t6 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Username");
			label0_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n            ");

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label1 = claim_element(div1_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Password");
			label1_nodes.forEach(detach);
			t4 = claim_text(div1_nodes, "\n            ");

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			button = claim_element(div2_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t6 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 3, 12, 138);
			attr(input0, "type", "text");
			input0.name = "username";
			add_location(input0, file, 4, 12, 174);
			div0.className = "field";
			add_location(div0, file, 2, 8, 106);
			add_location(label1, file, 8, 12, 268);
			attr(input1, "type", "password");
			input1.name = "password";
			add_location(input1, file, 9, 12, 304);
			div1.className = "field";
			add_location(div1, file, 7, 8, 236);
			button.type = "submit";
			button.className = "button button-primary";
			add_location(button, file, 13, 12, 402);
			div2.className = "field";
			add_location(div2, file, 12, 8, 370);
			form.id = "demoForm";
			form.method = "post";
			form.className = "fv-stacked-form";
			add_location(form, file, 1, 4, 39);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div0);
			append(div0, label0);
			append(label0, t0);
			append(div0, t1);
			append(div0, input0);
			append(form, t2);
			append(form, div1);
			append(div1, label1);
			append(label1, t3);
			append(div1, t4);
			append(div1, input1);
			append(form, t5);
			append(form, div2);
			append(div2, button);
			append(button, t6);
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

	var turretlayout = new TurretLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			turretlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			turretlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(turretlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var turretlayout_changes = {};
			if (changed.onLoaded) turretlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) turretlayout_changes.$$scope = { changed, ctx };
			turretlayout.$set(turretlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			turretlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			turretlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			turretlayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            turret: new Turret(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/turret',
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

class Turret_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Turret_1;
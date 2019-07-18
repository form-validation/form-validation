import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as ResourceLoader } from './chunk.17752e4f.js';
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
            <label class="col-sm-3 col-form-label">New password</label>
            <div class="col-sm-6">
                <input type="password" class="form-control" name="pwd" autocomplete="off" />
                
                <!-- The progress bar is hidden initially -->
                <div class="progress mt-2" id="progressBar" style="opacity: 0;">
                    <div class="progress-bar progress-bar-striped progress-bar-animate" style="width: 100%"></div>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const strongPassword = function {
        return {
            validate: function(input) {
                // input.value is the field value
                // input.options are the validator options

                const value = input.value;
                if (value === '') {
                    return {
                        valid: true,
                    };
                }

                const result = zxcvbn(value);
                const score = result.score;
                const message = result.feedback.warning || 'The password is weak';

                // By default, the password is treat as invalid if the score is smaller than 3
                // We allow user to change this number via options.minimalScore
                const minimalScore = input.options && input.options.minimalScore
                                    ? input.options.minimalScore
                                    : 3;

                if (score < minimalScore) {
                    return {
                        valid: false,
                        // Yeah, this will be set as error message
                        message: message,
                        meta: {
                            // This meta data will be used later
                            score: score,
                        },
                    }
                }
            },
        };
    };

    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                fields: {
                    pwd: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            checkPassword: {
                                message: 'The password is too weak',
                                minimalScore: 3,
                            },
                        }
                    }
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
        .registerValidator('checkPassword', strongPassword)
        .on('core.validator.validating', function(e) {
            if (e.field === 'pwd' && e.validator === 'checkPassword') {
                document.getElementById('progressBar').style.opacity = '1';
            }
        })
        .on('core.validator.validated', function(e) {
            if (e.field === 'pwd' && e.validator === 'checkPassword') {
                const progressBar = document.getElementById('progressBar');

                if (e.result.meta) {
                    // Get the score which is a number between 0 and 4
                    const score = e.result.meta.score;
                    
                    // Update the width of progress bar
                    const width = (score == 0) ? '1%' : score * 25 + '%';
                    progressBar.style.opacity = 1;
                    progressBar.style.width = width;
                } else {
                    progressBar.style.opacity = 0;
                    progressBar.style.width = '0%';
                }
            }
        });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/creating-a-custom-validator/meta-data/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/creating-a-custom-validator/meta-data/Bootstrap.svelte";

// (2:4) <ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js']} onLoaded={onLoaded}>
function create_default_slot_1(ctx) {
	var form, div3, label, t0, t1, div2, input, t2, div1, div0;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			label = element("label");
			t0 = text("New password");
			t1 = space();
			div2 = element("div");
			input = element("input");
			t2 = space();
			div1 = element("div");
			div0 = element("div");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label_nodes = children(label);

			t0 = claim_text(label_nodes, "New password");
			label_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, autocomplete: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n                    \n                    \n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true, id: true, style: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true, style: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label.className = "col-sm-3 col-form-label";
			add_location(label, file, 4, 16, 254);
			attr(input, "type", "password");
			input.className = "form-control";
			input.name = "pwd";
			input.autocomplete = "off";
			add_location(input, file, 6, 20, 373);
			div0.className = "progress-bar progress-bar-striped progress-bar-animate";
			set_style(div0, "width", "100%");
			add_location(div0, file, 10, 24, 646);
			div1.className = "progress mt-2";
			div1.id = "progressBar";
			set_style(div1, "opacity", "0");
			add_location(div1, file, 9, 20, 557);
			div2.className = "col-sm-6";
			add_location(div2, file, 5, 16, 330);
			div3.className = "form-group row";
			add_location(div3, file, 3, 12, 209);
			form.id = "demoForm";
			form.method = "POST";
			set_style(form, "height", "85px");
			add_location(form, file, 2, 8, 140);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, label);
			append(label, t0);
			append(div3, t1);
			append(div3, div2);
			append(div2, input);
			append(div2, t2);
			append(div2, div1);
			append(div1, div0);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}
		}
	};
}

// (1:0) <BootstrapLayout>
function create_default_slot(ctx) {
	var current;

	var resourceloader = new ResourceLoader({
		props: {
		urls: ['https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js'],
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			resourceloader.$$.fragment.c();
		},

		l: function claim(nodes) {
			resourceloader.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(resourceloader, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var resourceloader_changes = {};
			if (changed.onLoaded) resourceloader_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) resourceloader_changes.$$scope = { changed, ctx };
			resourceloader.$set(resourceloader_changes);
		},

		i: function intro(local) {
			if (current) return;
			resourceloader.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			resourceloader.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			resourceloader.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var bootstraplayout = new BootstrapLayout({
		props: {
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
    const strongPassword = () => {
        return {
            validate: (input) => {
                // input.value is the field value
                // input.options are the validator options

                const value = input.value;
                if (value === '') {
                    return {
                        valid: true,
                    };
                }

                const result = zxcvbn(value);
                const score = result.score;
                const message = result.feedback.warning || 'The password is weak';

                // By default, the password is treat as invalid if the score is smaller than 3
                // We allow user to change this number via options.minimalScore
                const minimalScore = input.options && input.options.minimalScore
                                    ? input.options.minimalScore
                                    : 3;

                if (score < minimalScore) {
                    return {
                        valid: false,
                        // Yeah, this will be set as error message
                        message: message,
                        meta: {
                            // This meta data will be used later
                            score: score,
                        },
                    }
                }
            },
        };
    };

    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    checkPassword: {
                        message: 'The password is too weak',
                        minimalScore: 3,
                    },
                }
            }
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
                sender: '/guide/examples/creating-a-custom-validator/meta-data/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    })
    .registerValidator('checkPassword', strongPassword)
    .on('core.validator.validating', function(e) {
        if (e.field === 'pwd' && e.validator === 'checkPassword') {
            document.getElementById('progressBar').style.opacity = '1';
        }
    })
    .on('core.validator.validated', (e) => {
        if (e.field === 'pwd' && e.validator === 'checkPassword') {
            const progressBar = document.getElementById('progressBar');

            if (e.result.meta) {
                // Get the score which is a number between 0 and 4
                const score = e.result.meta.score;
                
                // Update the width of progress bar
                const width = (score == 0) ? '1%' : `${score * 25}%`;
                progressBar.style.opacity = 1;
                progressBar.style.width = width;
            } else {
                progressBar.style.opacity = 0;
                progressBar.style.width = '0%';
            }
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

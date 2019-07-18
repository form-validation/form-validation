import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

    <style>
    .preview {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: 1px solid rgba(0,0,0,.2);
        margin: 8px 0;
        width: 300px;
        height: 300px;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Avatar</label>
            <div class="col-sm-5">
                <input type="file" class="form-control" name="avatar" />
                <div id="avatarPreview" class="preview"></div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-8 offset-sm-4">
                <button type="submit" class="btn btn-primary">Submit</button>
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
                avatar: {
                    validators: {
                        notEmpty: {
                            message: 'The avatar is required'
                        },
                        promise: {
                            promise: function (input) {
                                return new Promise(function(resolve, reject) {
                                    const files = input.element.files
                                    if (!files.length || typeof FileReader === 'undefined') {
                                        resolve({
                                            valid: true
                                        });
                                    }
    
                                    const img = new Image();
                                    img.addEventListener('load', function() {
                                        const w = this.width;
                                        const h = this.height;
    
                                        resolve({
                                            valid: (w <= 300 && h <= 300),
                                            message: 'The avatar width and height must be less than 300 px',
                                            meta: {
                                                source: img.src,    // We will use it later to show the preview
                                                width: w,
                                                height: h,
                                            },
                                        });
                                    });
                                    img.addEventListener('error', function() {
                                        reject({
                                            valid: false,
                                            message: 'Please choose an image',
                                        });
                                    });
    
                                    const reader = new FileReader();
                                    reader.readAsDataURL(files[0]);
                                    reader.addEventListener('loadend', function(e) {
                                        img.src = e.target.result;
                                    });
                                });
                            }
                        },
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
                    validating: 'fa fa-refresh'
                }),
            },
        }
    ).on('core.validator.validated', function(e) {
        if (e.field === 'avatar' && e.validator === 'promise') {
            const preview = document.getElementById('avatarPreview');
            if (e.result.valid && e.result.meta && e.result.meta.source) {
                // Preview the avatar
                const img = document.createElement('img');
                img.setAttribute('src', e.result.meta.source);
                img.setAttribute('style', 'max-width: 100%; height: auto;');

                preview.innerHTML = '';
                preview.appendChild(img);
            } else if (!e.result.valid) {
                preview.innerHTML = 'Preview';
            }
        }
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/validators/promise/basic/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/promise/basic/Bootstrap.svelte";

// (14:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, label, t0, t1, div1, input, t2, div0;

	return {
		c: function create() {
			form = element("form");
			div2 = element("div");
			label = element("label");
			t0 = text("Avatar");
			t1 = space();
			div1 = element("div");
			input = element("input");
			t2 = space();
			div0 = element("div");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label_nodes = children(label);

			t0 = claim_text(label_nodes, "Avatar");
			label_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			t2 = claim_text(div1_nodes, "\n                ");

			div0 = claim_element(div1_nodes, "DIV", { id: true, class: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label.className = "col-sm-3 col-form-label";
			add_location(label, file, 16, 12, 348);
			attr(input, "type", "file");
			input.className = "form-control";
			input.name = "avatar";
			add_location(input, file, 18, 16, 453);
			div0.id = "avatarPreview";
			div0.className = "preview svelte-19glnt1";
			add_location(div0, file, 19, 16, 526);
			div1.className = "col-sm-5";
			add_location(div1, file, 17, 12, 414);
			div2.className = "form-group row";
			add_location(div2, file, 15, 8, 307);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 14, 4, 264);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div2);
			append(div2, label);
			append(label, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input);
			append(div1, t2);
			append(div1, div0);
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
            avatar: {
                validators: {
                    notEmpty: {
                        message: 'The avatar is required'
                    },
                    promise: {
                        promise: function (input) {
                            return new Promise((resolve, reject) => {
                                const files = input.element.files;
                                if (!files.length || typeof FileReader === 'undefined') {
                                    resolve({
                                        valid: true
                                    });
                                }

                                const img = new Image();
                                img.addEventListener('load', function() {
                                    const w = this.width;
                                    const h = this.height;

                                    resolve({
                                        valid: (w <= 300 && h <= 300),
                                        message: 'The avatar width and height must be less than 300 px',
                                        meta: {
                                            source: img.src,    // We will use it later to show the preview
                                            width: w,
                                            height: h,
                                        },
                                    });
                                });
                                img.addEventListener('error', function() {
                                    reject({
                                        valid: false,
                                        message: 'Please choose an image',
                                    });
                                });

                                const reader = new FileReader();
                                reader.readAsDataURL(files[0]);
                                reader.addEventListener('loadend', function(e) {
                                    img.src = e.target.result;
                                });
                            });
                        }
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/promise/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).on('core.validator.validated', (e) => {
        if (e.field === 'avatar' && e.validator === 'promise') {
            const preview = document.getElementById('avatarPreview');
            if (e.result.valid && e.result.meta && e.result.meta.source) {
                // Preview the avatar
                const img = document.createElement('img');
                img.setAttribute('src', e.result.meta.source);
                img.setAttribute('style', 'max-width: 100%; height: auto;');

                preview.innerHTML = '';
                preview.appendChild(img);
            } else if (!e.result.valid) {
                preview.innerHTML = 'Preview';
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

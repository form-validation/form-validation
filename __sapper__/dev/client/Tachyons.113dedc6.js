import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Avatar</div>
                <div class="fl w-50">
                    <input type="file" name="avatar" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    <div id="avatarPreview" class="flex items-center justify-center br2 ba b--black-20 mb2" style="width: 300px; height: 300px;">
                        Preview
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

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
                                            valid: true,
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
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    )
    .on('core.validator.validated', function(e) {
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

/* src/routes/guide/validators/promise/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/promise/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div2, input, t2, div1, t3;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			t0 = text("Avatar");
			t1 = space();
			div2 = element("div");
			input = element("input");
			t2 = space();
			div1 = element("div");
			t3 = text("Preview");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Avatar");
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { id: true, class: true, style: true }, false);
			var div1_nodes = children(div1);

			t3 = claim_text(div1_nodes, "Preview");
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input, "type", "file");
			input.name = "avatar";
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input, file, 6, 20, 232);
			div1.id = "avatarPreview";
			div1.className = "flex items-center justify-center br2 ba b--black-20 mb2";
			set_style(div1, "width", "300px");
			set_style(div1, "height", "300px");
			add_location(div1, file, 7, 20, 340);
			div2.className = "fl w-50";
			add_location(div2, file, 5, 16, 190);
			div3.className = "fl w-100";
			add_location(div3, file, 3, 12, 97);
			div4.className = "cf mb2";
			add_location(div4, file, 2, 8, 64);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div4);
			append(div4, div3);
			append(div3, div0);
			append(div0, t0);
			append(div3, t1);
			append(div3, div2);
			append(div2, input);
			append(div2, t2);
			append(div2, div1);
			append(div1, t3);
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

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self) {
	

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            avatar: {
                validators: {
                    notEmpty: {
                        message: 'The avatar is required'
                    },
                    promise: {
                        promise: (input) => {
                            return new Promise((resolve, reject) => {
                                const files = input.element.files;
                                if (!files.length || typeof FileReader === 'undefined') {
                                    resolve({
                                        valid: true,
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
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/promise/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('core.validator.validated', (e) => {
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

    return () => {
        fv.destroy();
    };
});

	return {};
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { a as Plugin, g as fetch, b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

class Recaptcha3 extends Plugin {
    constructor(opts) {
        super(opts);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
    }
    install() {
        this.core.on('plugins.icon.placed', this.iconPlacedHandler);
        const loadPrevCaptcha = (typeof window[Recaptcha3.LOADED_CALLBACK] === 'undefined')
            ? () => { }
            : window[Recaptcha3.LOADED_CALLBACK];
        window[Recaptcha3.LOADED_CALLBACK] = () => {
            loadPrevCaptcha();
            const tokenField = document.createElement('input');
            tokenField.setAttribute('type', 'hidden');
            tokenField.setAttribute('name', Recaptcha3.CAPTCHA_FIELD);
            document.getElementById(this.opts.element).appendChild(tokenField);
            this.core.addField(Recaptcha3.CAPTCHA_FIELD, {
                validators: {
                    promise: {
                        message: this.opts.message,
                        promise: (input) => {
                            return new Promise((resolve, reject) => {
                                window['grecaptcha']
                                    .execute(this.opts.siteKey, { action: this.opts.action })
                                    .then((token) => {
                                    fetch(this.opts.backendVerificationUrl, {
                                        method: 'POST',
                                        params: {
                                            [Recaptcha3.CAPTCHA_FIELD]: token,
                                        },
                                    }).then((response) => {
                                        const isValid = `${response['success']}` === 'true';
                                        resolve({
                                            meta: response,
                                            valid: isValid,
                                        });
                                    }).catch((reason) => {
                                        reject({
                                            valid: false,
                                        });
                                    });
                                });
                            });
                        },
                    },
                },
            });
        };
        const src = this.getScript();
        if (!document.body.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = src;
            document.body.appendChild(script);
        }
    }
    uninstall() {
        this.core.off('plugins.icon.placed', this.iconPlacedHandler);
        const src = this.getScript();
        const scripts = [].slice.call(document.body.querySelectorAll(`script[src="${src}"]`));
        scripts.forEach((s) => s.parentNode.removeChild(s));
        this.core.removeField(Recaptcha3.CAPTCHA_FIELD);
    }
    getScript() {
        const lang = this.opts.language ? `&hl=${this.opts.language}` : '';
        return 'https://www.google.com/recaptcha/api.js?' +
            `onload=${Recaptcha3.LOADED_CALLBACK}&render=${this.opts.siteKey}${lang}`;
    }
    onIconPlaced(e) {
        if (e.field === Recaptcha3.CAPTCHA_FIELD) {
            e.iconElement.style.display = 'none';
        }
    }
}
Recaptcha3.CAPTCHA_FIELD = '___g-recaptcha-token___';
Recaptcha3.LOADED_CALLBACK = '___reCaptcha3Loaded___';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Username</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="username" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email address</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <input type="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="password" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <!-- The captcha container -->
                    <div id="captchaContainer"></div>
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
<script-tag src="/vendors/formvalidation/dist/js/plugins/Recaptcha3.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

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
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'The username can only consist of alphabetical, number, dot and underscore'
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        },
                    },
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        different: {
                            field: 'username',
                            message: 'The password cannot be the same as username'
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                recaptcha3: new FormValidation.plugins.Recaptcha3({
                    action: 'contact',
                    // Replace with your verification back-end URL
                    backendVerificationUrl: '...',
                    element: 'captchaContainer',
                    message: 'The captcha is not valid or expired',
                    // Replace with the site key provided by Google
                    siteKey: '...',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/recaptcha3/invisible/tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/recaptcha3/invisible/tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, t4, div5, input1, t5, div11, div10, div8, t6, t7, div9, input2, t8, div16, div15, div12, t9, div14, div13, t10, div20, div19, div17, t11, div18, button, t12;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Username");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = text("Email address");
			t4 = space();
			div5 = element("div");
			input1 = element("input");
			t5 = space();
			div11 = element("div");
			div10 = element("div");
			div8 = element("div");
			t6 = text("Password");
			t7 = space();
			div9 = element("div");
			input2 = element("input");
			t8 = space();
			div16 = element("div");
			div15 = element("div");
			div12 = element("div");
			t9 = space();
			div14 = element("div");
			div13 = element("div");
			t10 = space();
			div20 = element("div");
			div19 = element("div");
			div17 = element("div");
			t11 = space();
			div18 = element("div");
			button = element("button");
			t12 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Username");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Email address");
			div4_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input1 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			t6 = claim_text(div8_nodes, "Password");
			div8_nodes.forEach(detach);
			t7 = claim_text(div10_nodes, "\n                ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input2 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div12 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div12_nodes.forEach(detach);
			t9 = claim_text(div15_nodes, "\n                ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { id: true }, false);
			var div13_nodes = children(div13);

			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t10 = claim_text(form_nodes, "\n\n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div17 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div17_nodes.forEach(detach);
			t11 = claim_text(div19_nodes, "\n                ");

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			button = claim_element(div18_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t12 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "username";
			add_location(input0, file, 6, 20, 234);
			div1.className = "fl w-50";
			add_location(div1, file, 5, 16, 192);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 462);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "email";
			add_location(input1, file, 15, 20, 565);
			div5.className = "fl w-50";
			add_location(div5, file, 14, 16, 523);
			div6.className = "fl w-100";
			add_location(div6, file, 12, 12, 423);
			div7.className = "cf mb2";
			add_location(div7, file, 11, 8, 390);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 22, 16, 790);
			attr(input2, "type", "password");
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input2.name = "password";
			add_location(input2, file, 24, 20, 888);
			div9.className = "fl w-50";
			add_location(div9, file, 23, 16, 846);
			div10.className = "fl w-100";
			add_location(div10, file, 21, 12, 751);
			div11.className = "cf mb2";
			add_location(div11, file, 20, 8, 718);
			div12.className = "fl w-25 pa2";
			add_location(div12, file, 31, 16, 1120);
			div13.id = "captchaContainer";
			add_location(div13, file, 34, 20, 1261);
			div14.className = "fl w-50";
			add_location(div14, file, 32, 16, 1168);
			div15.className = "fl w-100";
			add_location(div15, file, 30, 12, 1081);
			div16.className = "cf mb2";
			add_location(div16, file, 29, 8, 1048);
			div17.className = "fl w-25 pa2";
			add_location(div17, file, 41, 16, 1433);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 43, 20, 1523);
			div18.className = "fl w-50";
			add_location(div18, file, 42, 16, 1481);
			div19.className = "fl w-100";
			add_location(div19, file, 40, 12, 1394);
			div20.className = "cf mb2";
			add_location(div20, file, 39, 8, 1361);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, input1);
			append(form, t5);
			append(form, div11);
			append(div11, div10);
			append(div10, div8);
			append(div8, t6);
			append(div10, t7);
			append(div10, div9);
			append(div9, input2);
			append(form, t8);
			append(form, div16);
			append(div16, div15);
			append(div15, div12);
			append(div15, t9);
			append(div15, div14);
			append(div14, div13);
			append(form, t10);
			append(form, div20);
			append(div20, div19);
			append(div19, div17);
			append(div19, t11);
			append(div19, div18);
			append(div18, button);
			append(button, t12);
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
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    },
                },
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    },
                },
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    },
                },
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            recaptcha3: new Recaptcha3({
                element: 'captchaContainer',
                message: 'The captcha is not valid or expired',
                siteKey: '6Ldao6oUAAAAAPEuLEbUQnE66Nl8dJAOfRl0lb_Y',
                backendVerificationUrl: '/fake-api/recaptcha3-response.json',
                action: 'contact',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/recaptcha3/invisible/tachyons',
                sampleCode: sampleCode,
            }),
        },
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

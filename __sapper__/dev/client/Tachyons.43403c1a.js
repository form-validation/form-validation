import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { a as Plugin, b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

class Sequence extends Plugin {
    constructor(opts) {
        super(opts);
        this.invalidFields = new Map();
        this.opts = Object.assign({}, { enabled: true }, opts);
        this.validatorHandler = this.onValidatorValidated.bind(this);
        this.shouldValidateFilter = this.shouldValidate.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
    }
    install() {
        this.core
            .on('core.validator.validated', this.validatorHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('core.element.validating', this.elementValidatingHandler)
            .registerFilter('field-should-validate', this.shouldValidateFilter);
    }
    uninstall() {
        this.invalidFields.clear();
        this.core
            .off('core.validator.validated', this.validatorHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('core.element.validating', this.elementValidatingHandler)
            .deregisterFilter('field-should-validate', this.shouldValidateFilter);
    }
    shouldValidate(field, element, value, validator) {
        const stop = (this.opts.enabled === true || this.opts.enabled[field] === true)
            && this.invalidFields.has(element)
            && !!this.invalidFields.get(element).length
            && this.invalidFields.get(element).indexOf(validator) === -1;
        return !stop;
    }
    onValidatorValidated(e) {
        const validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
        const index = validators.indexOf(e.validator);
        if (e.result.valid && index >= 0) {
            validators.splice(index, 1);
        }
        else if (!e.result.valid && index === -1) {
            validators.push(e.validator);
        }
        this.invalidFields.set(e.element, validators);
    }
    onFieldAdded(e) {
        if (e.elements) {
            this.clearInvalidFields(e.elements);
        }
    }
    onElementNotValidated(e) {
        this.clearInvalidFields(e.elements);
    }
    onElementValidating(e) {
        this.clearInvalidFields(e.elements);
    }
    clearInvalidFields(elements) {
        elements.forEach((ele) => this.invalidFields.delete(ele));
    }
}

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
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        callback: {
                            message: 'This username is not allowed',
                            callback: function(input) {
                                return !input.value.startsWith('admin');
                            },
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore'
                        },
                        remote: {
                            message: 'The username is already taken',
                            method: 'POST',
                            url: '/path/to/your/back-end/',
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
                sequence: new FormValidation.plugins.Sequence(),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/sequence/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/sequence/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Username");
			t1 = space();
			div1 = element("div");
			input = element("input");
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

			input = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input, "type", "text");
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input.name = "username";
			add_location(input, file, 6, 20, 234);
			div1.className = "fl w-50";
			add_location(div1, file, 5, 16, 192);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
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
			append(div1, input);
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
                    callback: {
                        message: 'This username is not allowed',
                        callback: (input) => !input.value.startsWith('admin'),
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    },
                    remote: {
                        message: 'The username is already taken',
                        method: 'GET',
                        url: 'http://www.mocky.io/v2/5b40b1902f0000810079e0de',
                    },
                },
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            sequence: new Sequence(),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/sequence/basic/tachyons',
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

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, o as insert, p as append, r as noop, g as space, A as attr, I as destroy_each } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger, a as classSet } from './chunk.fb19edaf.js';
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
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <div>
                        <input type="password" name="pwd" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>

                    <!-- The message container -->
                    <ul id="messageContainer" class="red pa0 ma3"></ul>
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
    // The rules that a secure password need to follow
    const PASSWORD_RULES = [
        {
            name: 'length',
            message: 'It must be more than 8 characters long',
            check: function(value) {
                return value.length >= 8;
            }
        },
        {
            name: 'upperCase',
            message: 'It must contain at least one upper case character',
            check: function(value) {
                return value !== value.toLowerCase();
            }
        },
        {
            name: 'lowerCase',
            message: 'It must contain at least one lower case character',
            check: function(value) {
                return value !== value.toUpperCase();
            }
        },
        {
            name: 'digit',
            message: 'It must contain at least one digit',
            check: function(value) {
                return value.search(/[0-9]/) >= 0;
            }
        }
    ];

    // Populate the message to given container
    // The container will contain the message for each rule as following
    //  <ul id="messageContainer">
    //      <li data-rule="rule name">... message ...</li>
    //  </ul>
    for (const rule in PASSWORD_RULES) {
        const ele = document.createElement('li');
        ele.setAttribute('data-rule', rule.name);
        ele.innerHTML = rule.message;

        document.getElementById('messageContainer').appendChild(ele);
    }

    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                pwd: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        callback: {
                            message: 'The password is not valid',
                            callback: function(input) {
                                const value = input.value;
                                if (value === '') {
                                    return true;
                                }

                                const passedRules = [];

                                // Loop over the rules
                                for (let i = 0; i < PASSWORD_RULES.length; i++) {
                                    if (PASSWORD_RULES[i].check(value)) {
                                        passedRules.push(PASSWORD_RULES[i].name);
                                    }
                                }

                                if (passedRules.length < PASSWORD_RULES.length) {
                                    return {
                                        valid: false,
                                        meta: {
                                            passedRules: passedRules,
                                        },
                                    }
                                }

                                return true;
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
    .on('plugins.message.displayed', function(e) {
        if (e.field === 'pwd' && e.validator === 'callback') {
            // Hide the default message
            FormValidation.utils.classSet(e.messageElement, {
                'dn': true,
            });
        }
    })
    .on('core.validator.validated', function(e) {
        if (e.field === 'pwd' && e.validator === 'callback') {
            const result = e.result;
            const container = document.getElementById('messageContainer');

            if (result.valid) {
                // The password passes all checks
                // Hide all error messages
                Array.from(container.querySelectorAll('[data-rule]')).forEach(function(ele) {
                    ele.setAttribute('class', 'dn');
                });
            } else {
                const passedRules = result.meta.passedRules;
                PASSWORD_RULES.forEach(function(r) {
                    const ele = container.querySelector('[data-rule="' + r.name + '"]');
                    ele.setAttribute('class', passedRules.indexOf(r.name) === -1 ? '' : 'dn');
                });
            }
        }
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/showing-all-messages/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/showing-all-messages/Tachyons.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.rule = list[i];
	return child_ctx;
}

// (13:24) {#each _rules as rule}
function create_each_block(ctx) {
	var li, t_value = ctx.rule.message, t, li_data_rule_value;

	return {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { "data-rule": true }, false);
			var li_nodes = children(li);

			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			li.dataset.rule = li_data_rule_value = ctx.rule.name;
			add_location(li, file, 13, 24, 570);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			append(li, t);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}
		}
	};
}

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div2, div1, input, t2, ul;

	var each_value = ctx._rules;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			t0 = text("Password");
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			input = element("input");
			t2 = space();
			ul = element("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
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

			t0 = claim_text(div0_nodes, "Password");
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", {}, false);
			var div1_nodes = children(div1);

			input = claim_element(div1_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n\n                    \n                    ");

			ul = claim_element(div2_nodes, "UL", { id: true, class: true }, false);
			var ul_nodes = children(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input, "type", "password");
			input.name = "pwd";
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input, file, 7, 24, 264);
			add_location(div1, file, 6, 20, 234);
			ul.id = "messageContainer";
			ul.className = "red pa0 ma3";
			add_location(ul, file, 11, 20, 452);
			div2.className = "fl w-50";
			add_location(div2, file, 5, 16, 192);
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
			append(div2, div1);
			append(div1, input);
			append(div2, t2);
			append(div2, ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed._rules) {
				each_value = ctx._rules;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}

			destroy_each(each_blocks, detaching);
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
	

// The rules that a secure password need to follow
const PASSWORD_RULES = [
    {
        name: 'length',
        message: 'It must be more than 8 characters long',
        check: function(value) {
            return value.length >= 8;
        }
    },
    {
        name: 'upperCase',
        message: 'It must contain at least one upper case character',
        check: function(value) {
            return value !== value.toLowerCase();
        }
    },
    {
        name: 'lowerCase',
        message: 'It must contain at least one lower case character',
        check: function(value) {
            return value !== value.toUpperCase();
        }
    },
    {
        name: 'digit',
        message: 'It must contain at least one digit',
        check: function(value) {
            return value.search(/[0-9]/) >= 0;
        }
    }
];

const _rules = PASSWORD_RULES;

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    callback: {
                        message: 'The password is not valid',
                        callback: (input) => {
                            const value = input.value;
                            if (value === '') {
                                return true;
                            }

                            const passedRules = [];

                            // Loop over the rules
                            for (let i = 0; i < PASSWORD_RULES.length; i++) {
                                if (PASSWORD_RULES[i].check(value)) {
                                    passedRules.push(PASSWORD_RULES[i].name);
                                }
                            }

                            if (passedRules.length < PASSWORD_RULES.length) {
                                return {
                                    valid: false,
                                    meta: {
                                        passedRules: passedRules,
                                    },
                                }
                            }

                            return true;
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
                sender: '/guide/examples/showing-all-messages/tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('plugins.message.displayed', (e) => {
        if (e.field === 'pwd' && e.validator === 'callback') {
            // Hide the default message
            classSet(e.messageElement, {
                'dn': true,
            });
        }
    })
    .on('core.validator.validated', (e) => {
        if (e.field === 'pwd' && e.validator === 'callback') {
            const result = e.result;
            const container = document.getElementById('messageContainer');

            if (result.valid) {
                // The password passes all checks
                // Hide all error messages
                container.querySelectorAll('[data-rule]').forEach((ele) => {
                    ele.setAttribute('class', 'dn');
                });
            } else {
                const passedRules = result.meta.passedRules;
                PASSWORD_RULES.forEach(r => {
                    const ele = container.querySelector(`[data-rule="${r.name}"]`);
                    ele.setAttribute('class', passedRules.indexOf(r.name) === -1 ? '' : 'dn');
                });
            }
        }
    });

    return () => {
        fv.destroy();
    };
});

	return { _rules };
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger, b as Message } from './chunk.fb19edaf.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div>
            <label>Full name</label>
            <div>
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
            </div>
        </div>

        <div>
            <label>Username</label>
            <input type="text" name="username" />
        </div>

        <div>
            <label>Email</label>
            <input type="text" name="email" />
        </div>

        <div>
            <label>Password</label>
            <input type="password" name="password" />
        </div>

        <div>
            <label>Gender</label>
            <div>
                <label for="genderMale"><input type="radio" name="gender" id="genderMale" value="male" /> Male</label>
            </div>
            <div>
                <label for="genderFemale"><input type="radio" name="gender" id="genderFemale" value="female" /> Female</label>
            </div>
            <div>
                <label for="genderOther"><input type="radio" name="gender" id="genderOther" value="other" /> Other</label>
            </div>
        </div>

        <div>
            <label id="captchaOperation"></label>
            <input type="text" name="captcha" />
        </div>

        <div>
            <label><input type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions</label>
        </div>

        <button type="submit">Submit</button>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // Generate a simple captcha
    const randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
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
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
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
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: function() {
                            return form.querySelector('[name="username"]').value;
                        }
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(input) {
                            const items = document.getElementById('captchaOperation').innerHTML.split(' ');
                            const sum = parseInt(items[0]) + parseInt(items[2]);
                            return input.value == sum;
                        }
                    }
                }
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            message: new FormValidation.plugins.Message(),
        }
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Native.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Native.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, input1, t3, div2, label1, t4, t5, input2, t6, div3, label2, t7, t8, input3, t9, div4, label3, t10, t11, input4, t12, div8, label4, t13, t14, div5, label5, input5, t15, t16, div6, label6, input6, t17, t18, div7, label7, input7, t19, t20, div9, label8, t21, input8, t22, div10, label9, input9, t23, t24, button, t25;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			div2 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			input2 = element("input");
			t6 = space();
			div3 = element("div");
			label2 = element("label");
			t7 = text("Email");
			t8 = space();
			input3 = element("input");
			t9 = space();
			div4 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			input4 = element("input");
			t12 = space();
			div8 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div5 = element("div");
			label5 = element("label");
			input5 = element("input");
			t15 = text(" Male");
			t16 = space();
			div6 = element("div");
			label6 = element("label");
			input6 = element("input");
			t17 = text(" Female");
			t18 = space();
			div7 = element("div");
			label7 = element("label");
			input7 = element("input");
			t19 = text(" Other");
			t20 = space();
			div9 = element("div");
			label8 = element("label");
			t21 = space();
			input8 = element("input");
			t22 = space();
			div10 = element("div");
			label9 = element("label");
			input9 = element("input");
			t23 = text(" Agree with the terms and conditions");
			t24 = space();
			button = element("button");
			t25 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n            ");

			div0 = claim_element(div1_nodes, "DIV", {}, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t2 = claim_text(div0_nodes, "\n                ");

			input1 = claim_element(div0_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label1 = claim_element(div2_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			t5 = claim_text(div2_nodes, "\n            ");

			input2 = claim_element(div2_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label2 = claim_element(div3_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email");
			label2_nodes.forEach(detach);
			t8 = claim_text(div3_nodes, "\n            ");

			input3 = claim_element(div3_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n        ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label3 = claim_element(div4_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			t11 = claim_text(div4_nodes, "\n            ");

			input4 = claim_element(div4_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label4 = claim_element(div8_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			t14 = claim_text(div8_nodes, "\n            ");

			div5 = claim_element(div8_nodes, "DIV", {}, false);
			var div5_nodes = children(div5);

			label5 = claim_element(div5_nodes, "LABEL", { for: true }, false);
			var label5_nodes = children(label5);

			input5 = claim_element(label5_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(label5_nodes, " Male");
			label5_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t16 = claim_text(div8_nodes, "\n            ");

			div6 = claim_element(div8_nodes, "DIV", {}, false);
			var div6_nodes = children(div6);

			label6 = claim_element(div6_nodes, "LABEL", { for: true }, false);
			var label6_nodes = children(label6);

			input6 = claim_element(label6_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t17 = claim_text(label6_nodes, " Female");
			label6_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t18 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", {}, false);
			var div7_nodes = children(div7);

			label7 = claim_element(div7_nodes, "LABEL", { for: true }, false);
			var label7_nodes = children(label7);

			input7 = claim_element(label7_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t19 = claim_text(label7_nodes, " Other");
			label7_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t20 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label8 = claim_element(div9_nodes, "LABEL", { id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			t21 = claim_text(div9_nodes, "\n            ");

			input8 = claim_element(div9_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n        \n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label9 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input9 = claim_element(label9_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t23 = claim_text(label9_nodes, " Agree with the terms and conditions");
			label9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t24 = claim_text(form_nodes, "\n\n        ");

			button = claim_element(form_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t25 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 3, 12, 94);
			attr(input0, "type", "text");
			input0.name = "firstName";
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-30";
			add_location(input0, file, 5, 16, 153);
			attr(input1, "type", "text");
			input1.name = "lastName";
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-30";
			add_location(input1, file, 6, 16, 259);
			add_location(div0, file, 4, 12, 131);
			div1.className = "mb2";
			add_location(div1, file, 2, 8, 64);
			add_location(label1, file, 11, 12, 421);
			attr(input2, "type", "text");
			input2.name = "username";
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-30";
			add_location(input2, file, 12, 12, 457);
			div2.className = "mb2";
			add_location(div2, file, 10, 8, 391);
			add_location(label2, file, 16, 12, 600);
			attr(input3, "type", "text");
			input3.name = "email";
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-30";
			add_location(input3, file, 17, 12, 633);
			div3.className = "mb2";
			add_location(div3, file, 15, 8, 570);
			add_location(label3, file, 21, 12, 773);
			attr(input4, "type", "password");
			input4.name = "password";
			input4.className = "input-reset ba b--black-20 pa2 mb2 db w-30";
			add_location(input4, file, 22, 12, 809);
			div4.className = "mb2";
			add_location(div4, file, 20, 8, 743);
			add_location(label4, file, 26, 12, 956);
			input5.className = "mr2";
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.id = "genderMale";
			input5.value = "male";
			add_location(input5, file, 27, 41, 1019);
			label5.htmlFor = "genderMale";
			add_location(label5, file, 27, 17, 995);
			add_location(div5, file, 27, 12, 990);
			input6.className = "mr2";
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.id = "genderFemale";
			input6.value = "female";
			add_location(input6, file, 28, 43, 1159);
			label6.htmlFor = "genderFemale";
			add_location(label6, file, 28, 17, 1133);
			add_location(div6, file, 28, 12, 1128);
			input7.className = "mr2";
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.id = "genderOther";
			input7.value = "other";
			add_location(input7, file, 29, 42, 1304);
			label7.htmlFor = "genderOther";
			add_location(label7, file, 29, 17, 1279);
			add_location(div7, file, 29, 12, 1274);
			div8.className = "mb2";
			add_location(div8, file, 25, 8, 926);
			label8.id = "captchaOperation";
			add_location(label8, file, 33, 12, 1458);
			attr(input8, "type", "text");
			input8.name = "captcha";
			input8.className = "input-reset ba b--black-20 pa2 mb2 db w-30";
			add_location(input8, file, 34, 12, 1508);
			div9.className = "mb2";
			add_location(div9, file, 32, 8, 1428);
			input9.className = "mr2";
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 38, 35, 1681);
			label9.className = "lh-copy";
			add_location(label9, file, 38, 12, 1658);
			div10.className = "mb2";
			add_location(div10, file, 37, 8, 1628);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 41, 8, 1814);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label0);
			append(label0, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, input0);
			append(div0, t2);
			append(div0, input1);
			append(form, t3);
			append(form, div2);
			append(div2, label1);
			append(label1, t4);
			append(div2, t5);
			append(div2, input2);
			append(form, t6);
			append(form, div3);
			append(div3, label2);
			append(label2, t7);
			append(div3, t8);
			append(div3, input3);
			append(form, t9);
			append(form, div4);
			append(div4, label3);
			append(label3, t10);
			append(div4, t11);
			append(div4, input4);
			append(form, t12);
			append(form, div8);
			append(div8, label4);
			append(label4, t13);
			append(div8, t14);
			append(div8, div5);
			append(div5, label5);
			append(label5, input5);
			append(label5, t15);
			append(div8, t16);
			append(div8, div6);
			append(div6, label6);
			append(label6, input6);
			append(label6, t17);
			append(div8, t18);
			append(div8, div7);
			append(div7, label7);
			append(label7, input7);
			append(label7, t19);
			append(form, t20);
			append(form, div9);
			append(div9, label8);
			append(div9, t21);
			append(div9, input8);
			append(form, t22);
			append(form, div10);
			append(div10, label9);
			append(label9, input9);
			append(label9, t23);
			append(form, t24);
			append(form, button);
			append(button, t25);
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
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
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
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
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
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: () => {
                            return form.querySelector('[name="username"]').value;
                        }
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: (input) => {
                            const items = document.getElementById('captchaOperation').innerHTML.split(' ');
                            const sum = parseInt(items[0]) + parseInt(items[2]);
                            return input.value == sum;
                        }
                    }
                }
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            submitButton: new SubmitButton(),
            message: new Message({
                clazz: 'dark-red lh-copy'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/native',
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

class Native extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Native;

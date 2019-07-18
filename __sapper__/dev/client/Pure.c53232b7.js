import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as PureLayout, b as Pure } from './chunk.18bdfd3f.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/1.0.0/pure-min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="pure-g">
        <div class="pure-u-1">
            <form id="demoForm" class="pure-form pure-form-aligned" method="POST">
                <div class="pure-control-group">
                    <label>Full name</label>
                    <input name="firstName" type="text" placeholder="First name" />
                </div>

                <div class="pure-control-group">
                    <label></label>
                    <input name="lastName" type="text" placeholder="Last name" />
                </div>

                <div class="pure-control-group">
                    <label>Username</label>
                    <input name="username" type="text" placeholder="Username" />
                </div>

                <div class="pure-control-group">
                    <label>Email address</label>
                    <input name="email" type="text" placeholder="Email address" />
                </div>

                <div class="pure-control-group">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" />
                </div>

                <div class="pure-control-group">
                    <label>Gender</label>
                    <input name="gender" type="radio" value="male" /> Male<br/>
                    <label></label>
                    <input name="gender" type="radio" value="female" /> Female<br/>
                    <label></label>
                    <input name="gender" type="radio" value="other" /> Other<br/>
                </div>

                <div class="pure-control-group">
                    <label id="captchaOperation"></label>
                    <input type="text" name="captcha" />
                </div>

                <div class="pure-control-group">
                    <label></label>
                    <input name="agree" id="agreeCheckbox" type="checkbox" /> Agree with the terms and conditions
                </div>

                <div class="pure-control-group">
                    <label></label>
                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Pure.min.js"></script-tag>

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
            pure: new FormValidation.plugins.Pure(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        }
    });  
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Pure.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Pure.svelte";

// (1:0) <PureLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var div10, div9, form, div0, label0, t0, t1, input0, t2, div1, label1, t3, input1, t4, div2, label2, t5, t6, input2, t7, div3, label3, t8, t9, input3, t10, div4, label4, t11, t12, input4, t13, div5, label5, t14, t15, input5, t16, br0, t17, label6, t18, input6, t19, br1, t20, label7, t21, input7, t22, br2, t23, div6, label8, t24, input8, t25, div7, label9, t26, input9, t27, t28, div8, label10, t29, button, t30;

	return {
		c: function create() {
			div10 = element("div");
			div9 = element("div");
			form = element("form");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			label1 = element("label");
			t3 = space();
			input1 = element("input");
			t4 = space();
			div2 = element("div");
			label2 = element("label");
			t5 = text("Username");
			t6 = space();
			input2 = element("input");
			t7 = space();
			div3 = element("div");
			label3 = element("label");
			t8 = text("Email address");
			t9 = space();
			input3 = element("input");
			t10 = space();
			div4 = element("div");
			label4 = element("label");
			t11 = text("Password");
			t12 = space();
			input4 = element("input");
			t13 = space();
			div5 = element("div");
			label5 = element("label");
			t14 = text("Gender");
			t15 = space();
			input5 = element("input");
			t16 = text(" Male");
			br0 = element("br");
			t17 = space();
			label6 = element("label");
			t18 = space();
			input6 = element("input");
			t19 = text(" Female");
			br1 = element("br");
			t20 = space();
			label7 = element("label");
			t21 = space();
			input7 = element("input");
			t22 = text(" Other");
			br2 = element("br");
			t23 = space();
			div6 = element("div");
			label8 = element("label");
			t24 = space();
			input8 = element("input");
			t25 = space();
			div7 = element("div");
			label9 = element("label");
			t26 = space();
			input9 = element("input");
			t27 = text(" Agree with the terms and conditions");
			t28 = space();
			div8 = element("div");
			label10 = element("label");
			t29 = space();
			button = element("button");
			t30 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			div10 = claim_element(nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			form = claim_element(div9_nodes, "FORM", { id: true, class: true, method: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n                    ");

			input0 = claim_element(div0_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n                ");

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label1 = claim_element(div1_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			label1_nodes.forEach(detach);
			t3 = claim_text(div1_nodes, "\n                    ");

			input1 = claim_element(div1_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t4 = claim_text(form_nodes, "\n\n                ");

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label2 = claim_element(div2_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t5 = claim_text(label2_nodes, "Username");
			label2_nodes.forEach(detach);
			t6 = claim_text(div2_nodes, "\n                    ");

			input2 = claim_element(div2_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n\n                ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label3 = claim_element(div3_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t8 = claim_text(label3_nodes, "Email address");
			label3_nodes.forEach(detach);
			t9 = claim_text(div3_nodes, "\n                    ");

			input3 = claim_element(div3_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t10 = claim_text(form_nodes, "\n\n                ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label4 = claim_element(div4_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t11 = claim_text(label4_nodes, "Password");
			label4_nodes.forEach(detach);
			t12 = claim_text(div4_nodes, "\n                    ");

			input4 = claim_element(div4_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t13 = claim_text(form_nodes, "\n\n                ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label5 = claim_element(div5_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			t14 = claim_text(label5_nodes, "Gender");
			label5_nodes.forEach(detach);
			t15 = claim_text(div5_nodes, "\n                    ");

			input5 = claim_element(div5_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t16 = claim_text(div5_nodes, " Male");

			br0 = claim_element(div5_nodes, "BR", {}, false);
			var br0_nodes = children(br0);

			br0_nodes.forEach(detach);
			t17 = claim_text(div5_nodes, "\n                    ");

			label6 = claim_element(div5_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			label6_nodes.forEach(detach);
			t18 = claim_text(div5_nodes, "\n                    ");

			input6 = claim_element(div5_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t19 = claim_text(div5_nodes, " Female");

			br1 = claim_element(div5_nodes, "BR", {}, false);
			var br1_nodes = children(br1);

			br1_nodes.forEach(detach);
			t20 = claim_text(div5_nodes, "\n                    ");

			label7 = claim_element(div5_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			label7_nodes.forEach(detach);
			t21 = claim_text(div5_nodes, "\n                    ");

			input7 = claim_element(div5_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t22 = claim_text(div5_nodes, " Other");

			br2 = claim_element(div5_nodes, "BR", {}, false);
			var br2_nodes = children(br2);

			br2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n                ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label8 = claim_element(div6_nodes, "LABEL", { id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			t24 = claim_text(div6_nodes, "\n                    ");

			input8 = claim_element(div6_nodes, "INPUT", { type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n                ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label9 = claim_element(div7_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			label9_nodes.forEach(detach);
			t26 = claim_text(div7_nodes, "\n                    ");

			input9 = claim_element(div7_nodes, "INPUT", { name: true, id: true, type: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t27 = claim_text(div7_nodes, " Agree with the terms and conditions");
			div7_nodes.forEach(detach);
			t28 = claim_text(form_nodes, "\n\n                ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label10 = claim_element(div8_nodes, "LABEL", {}, false);
			var label10_nodes = children(label10);

			label10_nodes.forEach(detach);
			t29 = claim_text(div8_nodes, "\n                    ");

			button = claim_element(div8_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t30 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			form_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 5, 20, 241);
			input0.name = "firstName";
			attr(input0, "type", "text");
			input0.placeholder = "First name";
			add_location(input0, file, 6, 20, 286);
			div0.className = "pure-control-group";
			add_location(div0, file, 4, 16, 188);
			add_location(label1, file, 10, 20, 443);
			input1.name = "lastName";
			attr(input1, "type", "text");
			input1.placeholder = "Last name";
			add_location(input1, file, 11, 20, 479);
			div1.className = "pure-control-group";
			add_location(div1, file, 9, 16, 390);
			add_location(label2, file, 15, 20, 634);
			input2.name = "username";
			attr(input2, "type", "text");
			input2.placeholder = "Username";
			add_location(input2, file, 16, 20, 678);
			div2.className = "pure-control-group";
			add_location(div2, file, 14, 16, 581);
			add_location(label3, file, 20, 20, 832);
			input3.name = "email";
			attr(input3, "type", "text");
			input3.placeholder = "Email address";
			add_location(input3, file, 21, 20, 881);
			div3.className = "pure-control-group";
			add_location(div3, file, 19, 16, 779);
			add_location(label4, file, 25, 20, 1037);
			input4.name = "password";
			attr(input4, "type", "password");
			input4.placeholder = "Password";
			add_location(input4, file, 26, 20, 1081);
			div4.className = "pure-control-group";
			add_location(div4, file, 24, 16, 984);
			add_location(label5, file, 30, 20, 1239);
			input5.name = "gender";
			attr(input5, "type", "radio");
			input5.value = "male";
			add_location(input5, file, 31, 20, 1281);
			add_location(br0, file, 31, 74, 1335);
			add_location(label6, file, 32, 20, 1361);
			input6.name = "gender";
			attr(input6, "type", "radio");
			input6.value = "female";
			add_location(input6, file, 33, 20, 1397);
			add_location(br1, file, 33, 78, 1455);
			add_location(label7, file, 34, 20, 1481);
			input7.name = "gender";
			attr(input7, "type", "radio");
			input7.value = "other";
			add_location(input7, file, 35, 20, 1517);
			add_location(br2, file, 35, 76, 1573);
			div5.className = "pure-control-group";
			add_location(div5, file, 29, 16, 1186);
			label8.id = "captchaOperation";
			add_location(label8, file, 39, 20, 1672);
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 40, 20, 1730);
			div6.className = "pure-control-group";
			add_location(div6, file, 38, 16, 1619);
			add_location(label9, file, 44, 20, 1860);
			input9.name = "agree";
			input9.id = "agreeCheckbox";
			attr(input9, "type", "checkbox");
			add_location(input9, file, 45, 20, 1896);
			div7.className = "pure-control-group";
			add_location(div7, file, 43, 16, 1807);
			add_location(label10, file, 49, 20, 2083);
			button.type = "submit";
			button.className = "pure-button pure-button-primary";
			add_location(button, file, 50, 20, 2119);
			div8.className = "pure-control-group";
			add_location(div8, file, 48, 16, 2030);
			form.id = "demoForm";
			form.className = "pure-form pure-form-aligned";
			form.method = "POST";
			add_location(form, file, 3, 12, 101);
			div9.className = "pure-u-1";
			add_location(div9, file, 2, 8, 66);
			div10.className = "pure-g";
			add_location(div10, file, 1, 4, 37);
		},

		m: function mount(target, anchor) {
			insert(target, div10, anchor);
			append(div10, div9);
			append(div9, form);
			append(form, div0);
			append(div0, label0);
			append(label0, t0);
			append(div0, t1);
			append(div0, input0);
			append(form, t2);
			append(form, div1);
			append(div1, label1);
			append(div1, t3);
			append(div1, input1);
			append(form, t4);
			append(form, div2);
			append(div2, label2);
			append(label2, t5);
			append(div2, t6);
			append(div2, input2);
			append(form, t7);
			append(form, div3);
			append(div3, label3);
			append(label3, t8);
			append(div3, t9);
			append(div3, input3);
			append(form, t10);
			append(form, div4);
			append(div4, label4);
			append(label4, t11);
			append(div4, t12);
			append(div4, input4);
			append(form, t13);
			append(form, div5);
			append(div5, label5);
			append(label5, t14);
			append(div5, t15);
			append(div5, input5);
			append(div5, t16);
			append(div5, br0);
			append(div5, t17);
			append(div5, label6);
			append(div5, t18);
			append(div5, input6);
			append(div5, t19);
			append(div5, br1);
			append(div5, t20);
			append(div5, label7);
			append(div5, t21);
			append(div5, input7);
			append(div5, t22);
			append(div5, br2);
			append(form, t23);
			append(form, div6);
			append(div6, label8);
			append(div6, t24);
			append(div6, input8);
			append(form, t25);
			append(form, div7);
			append(div7, label9);
			append(div7, t26);
			append(div7, input9);
			append(div7, t27);
			append(form, t28);
			append(form, div8);
			append(div8, label10);
			append(div8, t29);
			append(div8, button);
			append(button, t30);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div10);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var purelayout = new PureLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			purelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			purelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(purelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var purelayout_changes = {};
			if (changed.onLoaded) purelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) purelayout_changes.$$scope = { changed, ctx };
			purelayout.$set(purelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			purelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			purelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			purelayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(form, {
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
            pure: new Pure(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/pure',
                sampleCode: sampleCode,
            }),
        }
    }));
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Pure_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Pure_1;

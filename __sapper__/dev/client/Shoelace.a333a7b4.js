import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as ShoelaceLayout, b as Shoelace } from './chunk.33aa4dba.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/shoelace-css/1.0.0-beta24/shoelace.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="form-horizontal" method="POST">
        <div class="row input-field">
            <label class="col-3">Full name</label>
            <div class="col-3">
                <input type="text" name="firstName" placeholder="First name" />
            </div>
            <div class="col-3">
                <input type="text" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Username</label>
            <div class="col-5">
                <input type="text" name="username" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Email address</label>
            <div class="col-5">
                <input type="text" name="email" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Password</label>
            <div class="col-5">
                <input type="password" name="password" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Gender</label>
            <div class="col-6">
                <label>
                    <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" /> Other
                </label>
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label" id="captchaOperation"></label>
            <div class="col-4">
                <input type="text" name="captcha" />
            </div>
        </div>

        <div class="row input-field">
            <div class="col-6 offset-3">
                <label>
                    <input type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions
                </label>
            </div>
        </div>

        <div class="row input-field">
            <div class="col-9 offset-3">
                <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Shoelace.min.js"></script-tag>

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
            shoelace: new FormValidation.plugins.Shoelace(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    });  
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Shoelace.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Shoelace.svelte";

// (1:0) <ShoelaceLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, label0, t0, t1, div0, input0, t2, div1, input1, t3, div4, label1, t4, t5, div3, input2, t6, div6, label2, t7, t8, div5, input3, t9, div8, label3, t10, t11, div7, input4, t12, div10, label4, t13, t14, div9, label5, input5, t15, t16, label6, input6, t17, t18, label7, input7, t19, t20, div12, label8, t21, div11, input8, t22, div14, div13, label9, input9, t23, t24, div16, div15, button, t25;

	return {
		c: function create() {
			form = element("form");
			div2 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			input1 = element("input");
			t3 = space();
			div4 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			div3 = element("div");
			input2 = element("input");
			t6 = space();
			div6 = element("div");
			label2 = element("label");
			t7 = text("Email address");
			t8 = space();
			div5 = element("div");
			input3 = element("input");
			t9 = space();
			div8 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			div7 = element("div");
			input4 = element("input");
			t12 = space();
			div10 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div9 = element("div");
			label5 = element("label");
			input5 = element("input");
			t15 = text(" Male");
			t16 = space();
			label6 = element("label");
			input6 = element("input");
			t17 = text(" Female");
			t18 = space();
			label7 = element("label");
			input7 = element("input");
			t19 = text(" Other");
			t20 = space();
			div12 = element("div");
			label8 = element("label");
			t21 = space();
			div11 = element("div");
			input8 = element("input");
			t22 = space();
			div14 = element("div");
			div13 = element("div");
			label9 = element("label");
			input9 = element("input");
			t23 = text(" Agree with the terms and conditions");
			t24 = space();
			div16 = element("div");
			div15 = element("div");
			button = element("button");
			t25 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, class: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label0 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n            ");

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n    \n        ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			t5 = claim_text(div4_nodes, "\n            ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n    \n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label2 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email address");
			label2_nodes.forEach(detach);
			t8 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input3 = claim_element(div5_nodes, "INPUT", { type: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n    \n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label3 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			t11 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input4 = claim_element(div7_nodes, "INPUT", { type: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n    \n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label4 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			t14 = claim_text(div10_nodes, "\n            ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label5 = claim_element(div9_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input5 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(label5_nodes, " Male");
			label5_nodes.forEach(detach);
			t16 = claim_text(div9_nodes, "\n                ");

			label6 = claim_element(div9_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input6 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t17 = claim_text(label6_nodes, " Female");
			label6_nodes.forEach(detach);
			t18 = claim_text(div9_nodes, "\n                ");

			label7 = claim_element(div9_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			input7 = claim_element(label7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t19 = claim_text(label7_nodes, " Other");
			label7_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t20 = claim_text(form_nodes, "\n    \n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label8 = claim_element(div12_nodes, "LABEL", { class: true, id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			t21 = claim_text(div12_nodes, "\n            ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input8 = claim_element(div11_nodes, "INPUT", { type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n    \n        ");

			div14 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label9 = claim_element(div13_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input9 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t23 = claim_text(label9_nodes, " Agree with the terms and conditions");
			label9_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t24 = claim_text(form_nodes, "\n    \n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			button = claim_element(div15_nodes, "BUTTON", { type: true, class: true, name: true, value: true }, false);
			var button_nodes = children(button);

			t25 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-3";
			add_location(label0, file, 3, 12, 150);
			attr(input0, "type", "text");
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 5, 16, 237);
			div0.className = "col-3";
			add_location(div0, file, 4, 12, 201);
			attr(input1, "type", "text");
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 8, 16, 368);
			div1.className = "col-3";
			add_location(div1, file, 7, 12, 332);
			div2.className = "row input-field";
			add_location(div2, file, 2, 8, 108);
			label1.className = "col-3 control-label";
			add_location(label1, file, 13, 12, 519);
			attr(input2, "type", "text");
			input2.name = "username";
			add_location(input2, file, 15, 16, 619);
			div3.className = "col-5";
			add_location(div3, file, 14, 12, 583);
			div4.className = "row input-field";
			add_location(div4, file, 12, 8, 477);
			label2.className = "col-3 control-label";
			add_location(label2, file, 20, 12, 746);
			attr(input3, "type", "text");
			input3.name = "email";
			add_location(input3, file, 22, 16, 851);
			div5.className = "col-5";
			add_location(div5, file, 21, 12, 815);
			div6.className = "row input-field";
			add_location(div6, file, 19, 8, 704);
			label3.className = "col-3 control-label";
			add_location(label3, file, 27, 12, 975);
			attr(input4, "type", "password");
			input4.name = "password";
			add_location(input4, file, 29, 16, 1075);
			div7.className = "col-5";
			add_location(div7, file, 28, 12, 1039);
			div8.className = "row input-field";
			add_location(div8, file, 26, 8, 933);
			label4.className = "col-3 control-label";
			add_location(label4, file, 34, 12, 1206);
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 37, 20, 1332);
			add_location(label5, file, 36, 16, 1304);
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 40, 20, 1456);
			add_location(label6, file, 39, 16, 1428);
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 43, 20, 1584);
			add_location(label7, file, 42, 16, 1556);
			div9.className = "col-6";
			add_location(div9, file, 35, 12, 1268);
			div10.className = "row input-field";
			add_location(div10, file, 33, 8, 1164);
			label8.className = "col-3 control-label";
			label8.id = "captchaOperation";
			add_location(label8, file, 49, 12, 1755);
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 51, 16, 1869);
			div11.className = "col-4";
			add_location(div11, file, 50, 12, 1833);
			div12.className = "row input-field";
			add_location(div12, file, 48, 8, 1713);
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 58, 20, 2068);
			add_location(label9, file, 57, 16, 2040);
			div13.className = "col-6 offset-3";
			add_location(div13, file, 56, 12, 1995);
			div14.className = "row input-field";
			add_location(div14, file, 55, 8, 1953);
			button.type = "submit";
			button.className = "btn btn-primary";
			button.name = "signup";
			button.value = "Sign up";
			add_location(button, file, 65, 16, 2316);
			div15.className = "col-9 offset-3";
			add_location(div15, file, 64, 12, 2271);
			div16.className = "row input-field";
			add_location(div16, file, 63, 8, 2229);
			form.id = "demoForm";
			form.className = "form-horizontal";
			form.method = "POST";
			add_location(form, file, 1, 4, 41);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div2);
			append(div2, label0);
			append(label0, t0);
			append(div2, t1);
			append(div2, div0);
			append(div0, input0);
			append(div2, t2);
			append(div2, div1);
			append(div1, input1);
			append(form, t3);
			append(form, div4);
			append(div4, label1);
			append(label1, t4);
			append(div4, t5);
			append(div4, div3);
			append(div3, input2);
			append(form, t6);
			append(form, div6);
			append(div6, label2);
			append(label2, t7);
			append(div6, t8);
			append(div6, div5);
			append(div5, input3);
			append(form, t9);
			append(form, div8);
			append(div8, label3);
			append(label3, t10);
			append(div8, t11);
			append(div8, div7);
			append(div7, input4);
			append(form, t12);
			append(form, div10);
			append(div10, label4);
			append(label4, t13);
			append(div10, t14);
			append(div10, div9);
			append(div9, label5);
			append(label5, input5);
			append(label5, t15);
			append(div9, t16);
			append(div9, label6);
			append(label6, input6);
			append(label6, t17);
			append(div9, t18);
			append(div9, label7);
			append(label7, input7);
			append(label7, t19);
			append(form, t20);
			append(form, div12);
			append(div12, label8);
			append(div12, t21);
			append(div12, div11);
			append(div11, input8);
			append(form, t22);
			append(form, div14);
			append(div14, div13);
			append(div13, label9);
			append(label9, input9);
			append(label9, t23);
			append(form, t24);
			append(form, div16);
			append(div16, div15);
			append(div15, button);
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

	var shoelacelayout = new ShoelaceLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			shoelacelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			shoelacelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(shoelacelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var shoelacelayout_changes = {};
			if (changed.onLoaded) shoelacelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) shoelacelayout_changes.$$scope = { changed, ctx };
			shoelacelayout.$set(shoelacelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			shoelacelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			shoelacelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			shoelacelayout.$destroy(detaching);
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
            shoelace: new Shoelace(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/shoelace',
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

class Shoelace_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Shoelace_1;

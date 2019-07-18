import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
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
            <label class="col-md-3 col-form-label">Full name</label>
            <div class="col-md-4">
                <input type="text" class="form-control" name="firstName" placeholder="First name" />
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-3 col-form-label">Username</label>
            <div class="col-md-5">
                <input type="text" class="form-control" name="username" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-3 col-form-label">Email address</label>
            <div class="col-md-5">
                <input type="text" class="form-control" name="email" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-3 col-form-label">Password</label>
            <div class="col-md-5">
                <input type="password" class="form-control" name="password" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-3 col-form-label">Gender</label>
            <div class="col-md-6">
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="male" />
                    <label class="form-check-label">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="female" />
                    <label class="form-check-label">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="other" />
                    <label class="form-check-label">Other</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-3 col-form-label" id="captchaOperation"></label>
            <div class="col-md-4">
                <input type="text" class="form-control" name="captcha" />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-6 offset-md-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="agree" value="agree" />
                    <label class="form-check-label">Agree with the terms and conditions</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-9 offset-md-3">
                <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

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
            },
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
    });  
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Bootstrap.svelte";

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, label0, t0, t1, div0, input0, t2, div1, input1, t3, div4, label1, t4, t5, div3, input2, t6, div6, label2, t7, t8, div5, input3, t9, div8, label3, t10, t11, div7, input4, t12, div13, label4, t13, t14, div12, div9, input5, t15, label5, t16, t17, div10, input6, t18, label6, t19, t20, div11, input7, t21, label7, t22, t23, div15, label8, t24, div14, input8, t25, div18, div17, div16, input9, t26, label9, t27, t28, div20, div19, button, t29;

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
			div13 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div12 = element("div");
			div9 = element("div");
			input5 = element("input");
			t15 = space();
			label5 = element("label");
			t16 = text("Male");
			t17 = space();
			div10 = element("div");
			input6 = element("input");
			t18 = space();
			label6 = element("label");
			t19 = text("Female");
			t20 = space();
			div11 = element("div");
			input7 = element("input");
			t21 = space();
			label7 = element("label");
			t22 = text("Other");
			t23 = space();
			div15 = element("div");
			label8 = element("label");
			t24 = space();
			div14 = element("div");
			input8 = element("input");
			t25 = space();
			div18 = element("div");
			div17 = element("div");
			div16 = element("div");
			input9 = element("input");
			t26 = space();
			label9 = element("label");
			t27 = text("Agree with the terms and conditions");
			t28 = space();
			div20 = element("div");
			div19 = element("div");
			button = element("button");
			t29 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
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

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
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

			input2 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true }, false);
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

			input3 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true }, false);
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

			input4 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n    \n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label4 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			t14 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div9 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input5 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(div9_nodes, "\n                    ");

			label5 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t16 = claim_text(label5_nodes, "Male");
			label5_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t17 = claim_text(div12_nodes, "\n                ");

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			input6 = claim_element(div10_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(div10_nodes, "\n                    ");

			label6 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t19 = claim_text(label6_nodes, "Female");
			label6_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t20 = claim_text(div12_nodes, "\n                ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input7 = claim_element(div11_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t21 = claim_text(div11_nodes, "\n                    ");

			label7 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Other");
			label7_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n    \n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label8 = claim_element(div15_nodes, "LABEL", { class: true, id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			t24 = claim_text(div15_nodes, "\n            ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			input8 = claim_element(div14_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n    \n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			input9 = claim_element(div16_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t26 = claim_text(div16_nodes, "\n                    ");

			label9 = claim_element(div16_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			t27 = claim_text(label9_nodes, "Agree with the terms and conditions");
			label9_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t28 = claim_text(form_nodes, "\n    \n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			button = claim_element(div19_nodes, "BUTTON", { type: true, class: true, name: true, value: true }, false);
			var button_nodes = children(button);

			t29 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-md-3 col-form-label";
			add_location(label0, file, 3, 12, 126);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 5, 16, 234);
			div0.className = "col-md-4";
			add_location(div0, file, 4, 12, 195);
			attr(input1, "type", "text");
			input1.className = "form-control";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 8, 16, 389);
			div1.className = "col-md-4";
			add_location(div1, file, 7, 12, 350);
			div2.className = "form-group row";
			add_location(div2, file, 2, 8, 85);
			label1.className = "col-md-3 col-form-label";
			add_location(label1, file, 13, 12, 560);
			attr(input2, "type", "text");
			input2.className = "form-control";
			input2.name = "username";
			add_location(input2, file, 15, 16, 667);
			div3.className = "col-md-5";
			add_location(div3, file, 14, 12, 628);
			div4.className = "form-group row";
			add_location(div4, file, 12, 8, 519);
			label2.className = "col-md-3 col-form-label";
			add_location(label2, file, 20, 12, 814);
			attr(input3, "type", "text");
			input3.className = "form-control";
			input3.name = "email";
			add_location(input3, file, 22, 16, 926);
			div5.className = "col-md-5";
			add_location(div5, file, 21, 12, 887);
			div6.className = "form-group row";
			add_location(div6, file, 19, 8, 773);
			label3.className = "col-md-3 col-form-label";
			add_location(label3, file, 27, 12, 1070);
			attr(input4, "type", "password");
			input4.className = "form-control";
			input4.name = "password";
			add_location(input4, file, 29, 16, 1177);
			div7.className = "col-md-5";
			add_location(div7, file, 28, 12, 1138);
			div8.className = "form-group row";
			add_location(div8, file, 26, 8, 1029);
			label4.className = "col-md-3 col-form-label";
			add_location(label4, file, 34, 12, 1328);
			attr(input5, "type", "radio");
			input5.className = "form-check-input";
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 37, 20, 1496);
			label5.className = "form-check-label";
			add_location(label5, file, 38, 20, 1591);
			div9.className = "form-check form-check-inline";
			add_location(div9, file, 36, 16, 1433);
			attr(input6, "type", "radio");
			input6.className = "form-check-input";
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 41, 20, 1738);
			label6.className = "form-check-label";
			add_location(label6, file, 42, 20, 1835);
			div10.className = "form-check form-check-inline";
			add_location(div10, file, 40, 16, 1675);
			attr(input7, "type", "radio");
			input7.className = "form-check-input";
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 45, 20, 1984);
			label7.className = "form-check-label";
			add_location(label7, file, 46, 20, 2080);
			div11.className = "form-check form-check-inline";
			add_location(div11, file, 44, 16, 1921);
			div12.className = "col-md-6";
			add_location(div12, file, 35, 12, 1394);
			div13.className = "form-group row";
			add_location(div13, file, 33, 8, 1287);
			label8.className = "col-md-3 col-form-label";
			label8.id = "captchaOperation";
			add_location(label8, file, 52, 12, 2237);
			attr(input8, "type", "text");
			input8.className = "form-control";
			input8.name = "captcha";
			add_location(input8, file, 54, 16, 2358);
			div14.className = "col-md-4";
			add_location(div14, file, 53, 12, 2319);
			div15.className = "form-group row";
			add_location(div15, file, 51, 8, 2196);
			attr(input9, "type", "checkbox");
			input9.className = "form-check-input";
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 61, 20, 2600);
			label9.className = "form-check-label";
			add_location(label9, file, 62, 20, 2698);
			div16.className = "form-check";
			add_location(div16, file, 60, 16, 2555);
			div17.className = "col-md-6 offset-md-3";
			add_location(div17, file, 59, 12, 2504);
			div18.className = "form-group row";
			add_location(div18, file, 58, 8, 2463);
			button.type = "submit";
			button.className = "btn btn-primary";
			button.name = "signup";
			button.value = "Sign up";
			add_location(button, file, 69, 16, 2936);
			div19.className = "col-md-9 offset-md-3";
			add_location(div19, file, 68, 12, 2885);
			div20.className = "form-group row";
			add_location(div20, file, 67, 8, 2844);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 42);
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
			append(form, div13);
			append(div13, label4);
			append(label4, t13);
			append(div13, t14);
			append(div13, div12);
			append(div12, div9);
			append(div9, input5);
			append(div9, t15);
			append(div9, label5);
			append(label5, t16);
			append(div12, t17);
			append(div12, div10);
			append(div10, input6);
			append(div10, t18);
			append(div10, label6);
			append(label6, t19);
			append(div12, t20);
			append(div12, div11);
			append(div11, input7);
			append(div11, t21);
			append(div11, label7);
			append(label7, t22);
			append(form, t23);
			append(form, div15);
			append(div15, label8);
			append(div15, t24);
			append(div15, div14);
			append(div14, input8);
			append(form, t25);
			append(form, div18);
			append(div18, div17);
			append(div17, div16);
			append(div16, input9);
			append(div16, t26);
			append(div16, label9);
			append(label9, t27);
			append(form, t28);
			append(form, div20);
			append(div20, div19);
			append(div19, button);
			append(button, t29);
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
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/bootstrap',
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

class Bootstrap_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap_1;

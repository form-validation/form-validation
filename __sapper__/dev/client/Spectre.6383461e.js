import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as SpectreLayout, b as Spectre } from './chunk.371c6257.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre-icons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="form-horizontal" method="POST">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Full name</label>
            </div>
            <div class="col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="firstName" placeholder="First name" />
                </div>
            </div>
            <div class="col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Username</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="username" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Email address</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="email" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Password</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="password" class="form-input" name="password" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Gender</label>
            </div>
            <div class="col-9">
                <label class="form-radio">
                    <input type="radio" name="gender" value="male" />
                    <i class="form-icon"></i>
                    Male
                </label>
                <label class="form-radio">
                    <input type="radio" name="gender" value="female" />
                    <i class="form-icon"></i>
                    Female
                </label>
                <label class="form-radio">
                    <input type="radio" name="gender" value="other" />
                    <i class="form-icon"></i>
                    Other
                </label>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label" id="captchaOperation"></label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="captcha" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-9 col-ml-auto">
                <label class="form-checkbox">
                    <input type="checkbox" name="agree" value="agree" />
                    <i class="form-icon"></i>
                    Agree with the terms and conditions
                </label>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3"></div>
            <div class="col-9">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Spectre.min.js"></script-tag>

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
            spectre: new FormValidation.plugins.Spectre(),
            icon: new FormValidation.plugins.Icon({
                valid: 'form-icon icon icon-check',
                invalid: 'form-icon icon icon-cross',
                validating: 'form-icon loading',
            }),
        },
    });  
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Spectre.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Spectre.svelte";

// (1:0) <SpectreLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div5, div0, label0, t0, t1, div2, div1, input0, t2, div4, div3, input1, t3, div9, div6, label1, t4, t5, div8, div7, input2, t6, div13, div10, label2, t7, t8, div12, div11, input3, t9, div17, div14, label3, t10, t11, div16, div15, input4, t12, div20, div18, label4, t13, t14, div19, label5, input5, t15, i0, t16, t17, label6, input6, t18, i1, t19, t20, label7, input7, t21, i2, t22, t23, div24, div21, label8, t24, div23, div22, input8, t25, div26, div25, label9, input9, t26, i3, t27, t28, div29, div27, t29, div28, button, t30;

	return {
		c: function create() {
			form = element("form");
			div5 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			input1 = element("input");
			t3 = space();
			div9 = element("div");
			div6 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			div8 = element("div");
			div7 = element("div");
			input2 = element("input");
			t6 = space();
			div13 = element("div");
			div10 = element("div");
			label2 = element("label");
			t7 = text("Email address");
			t8 = space();
			div12 = element("div");
			div11 = element("div");
			input3 = element("input");
			t9 = space();
			div17 = element("div");
			div14 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			div16 = element("div");
			div15 = element("div");
			input4 = element("input");
			t12 = space();
			div20 = element("div");
			div18 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div19 = element("div");
			label5 = element("label");
			input5 = element("input");
			t15 = space();
			i0 = element("i");
			t16 = text("\n                    Male");
			t17 = space();
			label6 = element("label");
			input6 = element("input");
			t18 = space();
			i1 = element("i");
			t19 = text("\n                    Female");
			t20 = space();
			label7 = element("label");
			input7 = element("input");
			t21 = space();
			i2 = element("i");
			t22 = text("\n                    Other");
			t23 = space();
			div24 = element("div");
			div21 = element("div");
			label8 = element("label");
			t24 = space();
			div23 = element("div");
			div22 = element("div");
			input8 = element("input");
			t25 = space();
			div26 = element("div");
			div25 = element("div");
			label9 = element("label");
			input9 = element("input");
			t26 = space();
			i3 = element("i");
			t27 = text("\n                    Agree with the terms and conditions");
			t28 = space();
			div29 = element("div");
			div27 = element("div");
			t29 = space();
			div28 = element("div");
			button = element("button");
			t30 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, class: true, method: true }, false);
			var form_nodes = children(form);

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div0 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div5_nodes, "\n            ");

			div2 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input1 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div6 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label1 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t5 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input2 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div10 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label2 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email address");
			label2_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t8 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input3 = claim_element(div11_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div14 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			label3 = claim_element(div14_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t11 = claim_text(div17_nodes, "\n            ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			input4 = claim_element(div15_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n\n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div18 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			label4 = claim_element(div18_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t14 = claim_text(div20_nodes, "\n            ");

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			label5 = claim_element(div19_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input5 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(label5_nodes, "\n                    ");

			i0 = claim_element(label5_nodes, "I", { class: true }, false);
			var i0_nodes = children(i0);

			i0_nodes.forEach(detach);
			t16 = claim_text(label5_nodes, "\n                    Male");
			label5_nodes.forEach(detach);
			t17 = claim_text(div19_nodes, "\n                ");

			label6 = claim_element(div19_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input6 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(label6_nodes, "\n                    ");

			i1 = claim_element(label6_nodes, "I", { class: true }, false);
			var i1_nodes = children(i1);

			i1_nodes.forEach(detach);
			t19 = claim_text(label6_nodes, "\n                    Female");
			label6_nodes.forEach(detach);
			t20 = claim_text(div19_nodes, "\n                ");

			label7 = claim_element(div19_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			input7 = claim_element(label7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t21 = claim_text(label7_nodes, "\n                    ");

			i2 = claim_element(label7_nodes, "I", { class: true }, false);
			var i2_nodes = children(i2);

			i2_nodes.forEach(detach);
			t22 = claim_text(label7_nodes, "\n                    Other");
			label7_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div24 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div21 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			label8 = claim_element(div21_nodes, "LABEL", { class: true, id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t24 = claim_text(div24_nodes, "\n            ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			input8 = claim_element(div22_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n        ");

			div26 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			label9 = claim_element(div25_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input9 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t26 = claim_text(label9_nodes, "\n                    ");

			i3 = claim_element(label9_nodes, "I", { class: true }, false);
			var i3_nodes = children(i3);

			i3_nodes.forEach(detach);
			t27 = claim_text(label9_nodes, "\n                    Agree with the terms and conditions");
			label9_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			t28 = claim_text(form_nodes, "\n\n        ");

			div29 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			div27 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			div27_nodes.forEach(detach);
			t29 = claim_text(div29_nodes, "\n            ");

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			button = claim_element(div28_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t30 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "form-label";
			add_location(label0, file, 4, 16, 180);
			div0.className = "col-3";
			add_location(div0, file, 3, 12, 144);
			attr(input0, "type", "text");
			input0.className = "form-input";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 8, 20, 340);
			div1.className = "has-icon-right";
			add_location(div1, file, 7, 16, 291);
			div2.className = "col-4";
			add_location(div2, file, 6, 12, 255);
			attr(input1, "type", "text");
			input1.className = "form-input";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 13, 20, 562);
			div3.className = "has-icon-right";
			add_location(div3, file, 12, 16, 513);
			div4.className = "col-4";
			add_location(div4, file, 11, 12, 477);
			div5.className = "form-group";
			add_location(div5, file, 2, 8, 107);
			label1.className = "form-label";
			add_location(label1, file, 20, 16, 782);
			div6.className = "col-3";
			add_location(div6, file, 19, 12, 746);
			attr(input2, "type", "text");
			input2.className = "form-input";
			input2.name = "username";
			add_location(input2, file, 24, 20, 941);
			div7.className = "has-icon-right";
			add_location(div7, file, 23, 16, 892);
			div8.className = "col-9";
			add_location(div8, file, 22, 12, 856);
			div9.className = "form-group";
			add_location(div9, file, 18, 8, 709);
			label2.className = "form-label";
			add_location(label2, file, 31, 16, 1137);
			div10.className = "col-3";
			add_location(div10, file, 30, 12, 1101);
			attr(input3, "type", "text");
			input3.className = "form-input";
			input3.name = "email";
			add_location(input3, file, 35, 20, 1301);
			div11.className = "has-icon-right";
			add_location(div11, file, 34, 16, 1252);
			div12.className = "col-9";
			add_location(div12, file, 33, 12, 1216);
			div13.className = "form-group";
			add_location(div13, file, 29, 8, 1064);
			label3.className = "form-label";
			add_location(label3, file, 42, 16, 1494);
			div14.className = "col-3";
			add_location(div14, file, 41, 12, 1458);
			attr(input4, "type", "password");
			input4.className = "form-input";
			input4.name = "password";
			add_location(input4, file, 46, 20, 1653);
			div15.className = "has-icon-right";
			add_location(div15, file, 45, 16, 1604);
			div16.className = "col-9";
			add_location(div16, file, 44, 12, 1568);
			div17.className = "form-group";
			add_location(div17, file, 40, 8, 1421);
			label4.className = "form-label";
			add_location(label4, file, 53, 16, 1853);
			div18.className = "col-3";
			add_location(div18, file, 52, 12, 1817);
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 57, 20, 2008);
			i0.className = "form-icon";
			add_location(i0, file, 58, 20, 2078);
			label5.className = "form-radio";
			add_location(label5, file, 56, 16, 1961);
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 62, 20, 2217);
			i1.className = "form-icon";
			add_location(i1, file, 63, 20, 2289);
			label6.className = "form-radio";
			add_location(label6, file, 61, 16, 2170);
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 67, 20, 2430);
			i2.className = "form-icon";
			add_location(i2, file, 68, 20, 2501);
			label7.className = "form-radio";
			add_location(label7, file, 66, 16, 2383);
			div19.className = "col-9";
			add_location(div19, file, 55, 12, 1925);
			div20.className = "form-group";
			add_location(div20, file, 51, 8, 1780);
			label8.className = "form-label";
			label8.id = "captchaOperation";
			add_location(label8, file, 76, 16, 2694);
			div21.className = "col-3";
			add_location(div21, file, 75, 12, 2658);
			attr(input8, "type", "text");
			input8.className = "form-input";
			input8.name = "captcha";
			add_location(input8, file, 80, 20, 2867);
			div22.className = "has-icon-right";
			add_location(div22, file, 79, 16, 2818);
			div23.className = "col-9";
			add_location(div23, file, 78, 12, 2782);
			div24.className = "form-group";
			add_location(div24, file, 74, 8, 2621);
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 88, 20, 3124);
			i3.className = "form-icon";
			add_location(i3, file, 89, 20, 3197);
			label9.className = "form-checkbox";
			add_location(label9, file, 87, 16, 3074);
			div25.className = "col-9 col-ml-auto";
			add_location(div25, file, 86, 12, 3026);
			div26.className = "form-group";
			add_location(div26, file, 85, 8, 2989);
			div27.className = "col-3";
			add_location(div27, file, 96, 12, 3384);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 98, 16, 3458);
			div28.className = "col-9";
			add_location(div28, file, 97, 12, 3422);
			div29.className = "form-group";
			add_location(div29, file, 95, 8, 3347);
			form.id = "demoForm";
			form.className = "form-horizontal";
			form.method = "POST";
			add_location(form, file, 1, 4, 40);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div5);
			append(div5, div0);
			append(div0, label0);
			append(label0, t0);
			append(div5, t1);
			append(div5, div2);
			append(div2, div1);
			append(div1, input0);
			append(div5, t2);
			append(div5, div4);
			append(div4, div3);
			append(div3, input1);
			append(form, t3);
			append(form, div9);
			append(div9, div6);
			append(div6, label1);
			append(label1, t4);
			append(div9, t5);
			append(div9, div8);
			append(div8, div7);
			append(div7, input2);
			append(form, t6);
			append(form, div13);
			append(div13, div10);
			append(div10, label2);
			append(label2, t7);
			append(div13, t8);
			append(div13, div12);
			append(div12, div11);
			append(div11, input3);
			append(form, t9);
			append(form, div17);
			append(div17, div14);
			append(div14, label3);
			append(label3, t10);
			append(div17, t11);
			append(div17, div16);
			append(div16, div15);
			append(div15, input4);
			append(form, t12);
			append(form, div20);
			append(div20, div18);
			append(div18, label4);
			append(label4, t13);
			append(div20, t14);
			append(div20, div19);
			append(div19, label5);
			append(label5, input5);
			append(label5, t15);
			append(label5, i0);
			append(label5, t16);
			append(div19, t17);
			append(div19, label6);
			append(label6, input6);
			append(label6, t18);
			append(label6, i1);
			append(label6, t19);
			append(div19, t20);
			append(div19, label7);
			append(label7, input7);
			append(label7, t21);
			append(label7, i2);
			append(label7, t22);
			append(form, t23);
			append(form, div24);
			append(div24, div21);
			append(div21, label8);
			append(div24, t24);
			append(div24, div23);
			append(div23, div22);
			append(div22, input8);
			append(form, t25);
			append(form, div26);
			append(div26, div25);
			append(div25, label9);
			append(label9, input9);
			append(label9, t26);
			append(label9, i3);
			append(label9, t27);
			append(form, t28);
			append(form, div29);
			append(div29, div27);
			append(div29, t29);
			append(div29, div28);
			append(div28, button);
			append(button, t30);
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

	var spectrelayout = new SpectreLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			spectrelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			spectrelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(spectrelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var spectrelayout_changes = {};
			if (changed.onLoaded) spectrelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) spectrelayout_changes.$$scope = { changed, ctx };
			spectrelayout.$set(spectrelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			spectrelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			spectrelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			spectrelayout.$destroy(detaching);
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
            spectre: new Spectre(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'form-icon icon icon-check',
                invalid: 'form-icon icon icon-cross',
                validating: 'form-icon loading',
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/spectre',
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

class Spectre_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Spectre_1;

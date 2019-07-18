import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as FoundationLayout, b as Foundation } from './chunk.d81210b9.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Full name</label>
                </div>
                <div class="small-4 cell">
                    <input type="text" name="firstName" placeholder="First name" />
                </div>
                <div class="small-4 cell">
                    <input type="text" name="lastName" placeholder="Last name" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Username</label>
                </div>
                <div class="small-6 cell">
                    <input type="text" name="username" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Email address</label>
                </div>
                <div class="small-6 cell">
                    <input type="text" name="email" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Password</label>
                </div>
                <div class="small-6 cell">
                    <input type="password" name="password" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right">Gender</label>
                </div>
                <div class="small-6 cell">
                    <input type="radio" id="maleRadio" name="gender" value="male" /><label for="maleRadio">Male</label>
                    <input type="radio" id="femaleRadio" name="gender" value="female" /><label for="femaleRadio">Female</label>
                    <input type="radio" id="otherRadio" name="gender" value="other" /><label for="otherRadio">Other</label>
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle" id="captchaOperation"></label>
                </div>
                <div class="small-3 cell">
                    <input type="text" name="captcha" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-6 small-offset-3 cell">
                    <input type="checkbox" id="agreeCheckbox" name="agree" value="agree" />
                    <label for="agreeCheckbox">Agree with the terms and conditions</label>
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-9 small-offset-3 cell">
                    <button type="submit" class="button" name="signup" value="Sign up">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Foundation.min.js"></script-tag>

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
            foundation: new FormValidation.plugins.Foundation(),
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

/* src/routes/download/register/Foundation.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Foundation.svelte";

// (1:0) <FoundationLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div23, div3, div0, label0, t0, t1, div1, input0, t2, div2, input1, t3, div6, div4, label1, t4, t5, div5, input2, t6, div9, div7, label2, t7, t8, div8, input3, t9, div12, div10, label3, t10, t11, div11, input4, t12, div15, div13, label4, t13, t14, div14, input5, label5, t15, t16, input6, label6, t17, t18, input7, label7, t19, t20, div18, div16, label8, t21, div17, input8, t22, div20, div19, input9, t23, label9, t24, t25, div22, div21, button, t26;

	return {
		c: function create() {
			form = element("form");
			div23 = element("div");
			div3 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div6 = element("div");
			div4 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			div5 = element("div");
			input2 = element("input");
			t6 = space();
			div9 = element("div");
			div7 = element("div");
			label2 = element("label");
			t7 = text("Email address");
			t8 = space();
			div8 = element("div");
			input3 = element("input");
			t9 = space();
			div12 = element("div");
			div10 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			div11 = element("div");
			input4 = element("input");
			t12 = space();
			div15 = element("div");
			div13 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div14 = element("div");
			input5 = element("input");
			label5 = element("label");
			t15 = text("Male");
			t16 = space();
			input6 = element("input");
			label6 = element("label");
			t17 = text("Female");
			t18 = space();
			input7 = element("input");
			label7 = element("label");
			t19 = text("Other");
			t20 = space();
			div18 = element("div");
			div16 = element("div");
			label8 = element("label");
			t21 = space();
			div17 = element("div");
			input8 = element("input");
			t22 = space();
			div20 = element("div");
			div19 = element("div");
			input9 = element("input");
			t23 = space();
			label9 = element("label");
			t24 = text("Agree with the terms and conditions");
			t25 = space();
			div22 = element("div");
			div21 = element("div");
			button = element("button");
			t26 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true }, false);
			var form_nodes = children(form);

			div23 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div3 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t3 = claim_text(div23_nodes, "\n\n            ");

			div6 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t5 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(div23_nodes, "\n\n            ");

			div9 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label2 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email address");
			label2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t8 = claim_text(div9_nodes, "\n                ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { type: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t9 = claim_text(div23_nodes, "\n\n            ");

			div12 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label3 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t11 = claim_text(div12_nodes, "\n                ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input4 = claim_element(div11_nodes, "INPUT", { type: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t12 = claim_text(div23_nodes, "\n\n            ");

			div15 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div13 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label4 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t14 = claim_text(div15_nodes, "\n                ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			input5 = claim_element(div14_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);

			label5 = claim_element(div14_nodes, "LABEL", { for: true }, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "Male");
			label5_nodes.forEach(detach);
			t16 = claim_text(div14_nodes, "\n                    ");

			input6 = claim_element(div14_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);

			label6 = claim_element(div14_nodes, "LABEL", { for: true }, false);
			var label6_nodes = children(label6);

			t17 = claim_text(label6_nodes, "Female");
			label6_nodes.forEach(detach);
			t18 = claim_text(div14_nodes, "\n                    ");

			input7 = claim_element(div14_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);

			label7 = claim_element(div14_nodes, "LABEL", { for: true }, false);
			var label7_nodes = children(label7);

			t19 = claim_text(label7_nodes, "Other");
			label7_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t20 = claim_text(div23_nodes, "\n\n            ");

			div18 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div16 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			label8 = claim_element(div16_nodes, "LABEL", { class: true, id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t21 = claim_text(div18_nodes, "\n                ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			input8 = claim_element(div17_nodes, "INPUT", { type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t22 = claim_text(div23_nodes, "\n\n            ");

			div20 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			input9 = claim_element(div19_nodes, "INPUT", { type: true, id: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t23 = claim_text(div19_nodes, "\n                    ");

			label9 = claim_element(div19_nodes, "LABEL", { for: true }, false);
			var label9_nodes = children(label9);

			t24 = claim_text(label9_nodes, "Agree with the terms and conditions");
			label9_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t25 = claim_text(div23_nodes, "\n\n            ");

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			button = claim_element(div21_nodes, "BUTTON", { type: true, class: true, name: true, value: true }, false);
			var button_nodes = children(button);

			t26 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "text-right middle";
			add_location(label0, file, 5, 20, 212);
			div0.className = "small-3 cell";
			add_location(div0, file, 4, 16, 165);
			attr(input0, "type", "text");
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 8, 20, 349);
			div1.className = "small-4 cell";
			add_location(div1, file, 7, 16, 302);
			attr(input1, "type", "text");
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 11, 20, 499);
			div2.className = "small-4 cell";
			add_location(div2, file, 10, 16, 452);
			div3.className = "grid-x grid-padding-x";
			add_location(div3, file, 3, 12, 113);
			label1.className = "text-right middle";
			add_location(label1, file, 17, 20, 715);
			div4.className = "small-3 cell";
			add_location(div4, file, 16, 16, 668);
			attr(input2, "type", "text");
			input2.name = "username";
			add_location(input2, file, 20, 20, 851);
			div5.className = "small-6 cell";
			add_location(div5, file, 19, 16, 804);
			div6.className = "grid-x grid-padding-x";
			add_location(div6, file, 15, 12, 616);
			label2.className = "text-right middle";
			add_location(label2, file, 26, 20, 1043);
			div7.className = "small-3 cell";
			add_location(div7, file, 25, 16, 996);
			attr(input3, "type", "text");
			input3.name = "email";
			add_location(input3, file, 29, 20, 1184);
			div8.className = "small-6 cell";
			add_location(div8, file, 28, 16, 1137);
			div9.className = "grid-x grid-padding-x";
			add_location(div9, file, 24, 12, 944);
			label3.className = "text-right middle";
			add_location(label3, file, 35, 20, 1373);
			div10.className = "small-3 cell";
			add_location(div10, file, 34, 16, 1326);
			attr(input4, "type", "password");
			input4.name = "password";
			add_location(input4, file, 38, 20, 1509);
			div11.className = "small-6 cell";
			add_location(div11, file, 37, 16, 1462);
			div12.className = "grid-x grid-padding-x";
			add_location(div12, file, 33, 12, 1274);
			label4.className = "text-right";
			add_location(label4, file, 44, 20, 1705);
			div13.className = "small-3 cell";
			add_location(div13, file, 43, 16, 1658);
			attr(input5, "type", "radio");
			input5.id = "maleRadio";
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 47, 20, 1832);
			label5.htmlFor = "maleRadio";
			add_location(label5, file, 47, 84, 1896);
			attr(input6, "type", "radio");
			input6.id = "femaleRadio";
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 48, 20, 1952);
			label6.htmlFor = "femaleRadio";
			add_location(label6, file, 48, 88, 2020);
			attr(input7, "type", "radio");
			input7.id = "otherRadio";
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 49, 20, 2080);
			label7.htmlFor = "otherRadio";
			add_location(label7, file, 49, 86, 2146);
			div14.className = "small-6 cell";
			add_location(div14, file, 46, 16, 1785);
			div15.className = "grid-x grid-padding-x";
			add_location(div15, file, 42, 12, 1606);
			label8.className = "text-right middle";
			label8.id = "captchaOperation";
			add_location(label8, file, 55, 20, 2338);
			div16.className = "small-3 cell";
			add_location(div16, file, 54, 16, 2291);
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 58, 20, 2488);
			div17.className = "small-3 cell";
			add_location(div17, file, 57, 16, 2441);
			div18.className = "grid-x grid-padding-x";
			add_location(div18, file, 53, 12, 2239);
			attr(input9, "type", "checkbox");
			input9.id = "agreeCheckbox";
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 64, 20, 2694);
			label9.htmlFor = "agreeCheckbox";
			add_location(label9, file, 65, 20, 2786);
			div19.className = "small-6 small-offset-3 cell";
			add_location(div19, file, 63, 16, 2632);
			div20.className = "grid-x grid-padding-x";
			add_location(div20, file, 62, 12, 2580);
			button.type = "submit";
			button.className = "button";
			button.name = "signup";
			button.value = "Sign up";
			add_location(button, file, 71, 20, 3026);
			div21.className = "small-9 small-offset-3 cell";
			add_location(div21, file, 70, 16, 2964);
			div22.className = "grid-x grid-padding-x";
			add_location(div22, file, 69, 12, 2912);
			div23.className = "grid-container";
			add_location(div23, file, 2, 8, 72);
			form.id = "demoForm";
			add_location(form, file, 1, 4, 43);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div23);
			append(div23, div3);
			append(div3, div0);
			append(div0, label0);
			append(label0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(div23, t3);
			append(div23, div6);
			append(div6, div4);
			append(div4, label1);
			append(label1, t4);
			append(div6, t5);
			append(div6, div5);
			append(div5, input2);
			append(div23, t6);
			append(div23, div9);
			append(div9, div7);
			append(div7, label2);
			append(label2, t7);
			append(div9, t8);
			append(div9, div8);
			append(div8, input3);
			append(div23, t9);
			append(div23, div12);
			append(div12, div10);
			append(div10, label3);
			append(label3, t10);
			append(div12, t11);
			append(div12, div11);
			append(div11, input4);
			append(div23, t12);
			append(div23, div15);
			append(div15, div13);
			append(div13, label4);
			append(label4, t13);
			append(div15, t14);
			append(div15, div14);
			append(div14, input5);
			append(div14, label5);
			append(label5, t15);
			append(div14, t16);
			append(div14, input6);
			append(div14, label6);
			append(label6, t17);
			append(div14, t18);
			append(div14, input7);
			append(div14, label7);
			append(label7, t19);
			append(div23, t20);
			append(div23, div18);
			append(div18, div16);
			append(div16, label8);
			append(div18, t21);
			append(div18, div17);
			append(div17, input8);
			append(div23, t22);
			append(div23, div20);
			append(div20, div19);
			append(div19, input9);
			append(div19, t23);
			append(div19, label9);
			append(label9, t24);
			append(div23, t25);
			append(div23, div22);
			append(div22, div21);
			append(div21, button);
			append(button, t26);
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

	var foundationlayout = new FoundationLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			foundationlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			foundationlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(foundationlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var foundationlayout_changes = {};
			if (changed.onLoaded) foundationlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) foundationlayout_changes.$$scope = { changed, ctx };
			foundationlayout.$set(foundationlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			foundationlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			foundationlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			foundationlayout.$destroy(detaching);
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
            foundation: new Foundation(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/foundation',
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

class Foundation_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Foundation_1;

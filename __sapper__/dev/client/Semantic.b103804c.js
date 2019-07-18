import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as SemanticLayout, b as Semantic } from './chunk.0df549dd.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="ui grid">
        <div class="sixteen wide column">
            <form id="demoForm" class="ui form" method="POST">
                <div class="fields">
                    <label class="four wide field">Full name</label>
                    <div class="six wide field">
                        <!--
                        When using feedback icon, the input must place inside 'ui input icon' element
                        <div class="ui input icon">
                            <input type="text" />
                        </div>
                        See http://semantic-ui.com/elements/input.html#icon
                        -->
                        <div class="ui input icon">
                            <input name="firstName" type="text" placeholder="First name" />
                        </div>
                    </div>
                    <div class="six wide field">
                        <div class="ui input icon">
                            <input name="lastName" type="text" placeholder="Last name" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Username</label>
                    <div class="eight wide field">
                        <div class="ui input icon">
                            <input name="username" type="text" placeholder="Username" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Email address</label>
                    <div class="eight wide field">
                        <div class="ui input icon">
                            <input name="email" type="text" placeholder="Email address" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Password</label>
                    <div class="eight wide field">
                        <div class="ui input icon">
                            <input name="password" type="password" placeholder="Password" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Gender</label>
                    <div class="ten wide field">
                        <div class="field">
                            <div class="ui radio">
                                <input name="gender" type="radio" value="male" />
                                <label>Male</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio">
                                <input name="gender" type="radio" value="female" />
                                <label>Female</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio">
                                <input name="gender" type="radio" value="other" />
                                <label>Other</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">
                        <span class="right" id="captchaOperation"></span>
                    </label>
                    <div class="four wide field">
                        <div class="ui input icon">
                            <input type="text" name="captcha" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field"></label>
                    <div class="ten wide field">
                        <div class="ui checkbox">
                            <input name="agree" type="checkbox" /> <label>Agree with the terms and conditions</label>
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field"></label>
                    <div class="eight wide field">
                        <button type="submit" class="ui primary button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Semantic.min.js"></script-tag>

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
            semantic: new FormValidation.plugins.Semantic(),
            icon: new FormValidation.plugins.Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
        }
    });  
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Semantic.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Semantic.svelte";

// (1:0) <SemanticLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div4, label0, t0, t1, div1, div0, input0, t2, div3, div2, input1, t3, div7, label1, t4, t5, div6, div5, input2, t6, div10, label2, t7, t8, div9, div8, input3, t9, div13, label3, t10, t11, div12, div11, input4, t12, div21, label4, t13, t14, div20, div15, div14, input5, t15, label5, t16, t17, div17, div16, input6, t18, label6, t19, t20, div19, div18, input7, t21, label7, t22, t23, div24, label8, span, t24, div23, div22, input8, t25, div27, label9, t26, div26, div25, input9, t27, label10, t28, t29, div29, label11, t30, div28, button, t31;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div7 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			div6 = element("div");
			div5 = element("div");
			input2 = element("input");
			t6 = space();
			div10 = element("div");
			label2 = element("label");
			t7 = text("Email address");
			t8 = space();
			div9 = element("div");
			div8 = element("div");
			input3 = element("input");
			t9 = space();
			div13 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			div12 = element("div");
			div11 = element("div");
			input4 = element("input");
			t12 = space();
			div21 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div20 = element("div");
			div15 = element("div");
			div14 = element("div");
			input5 = element("input");
			t15 = space();
			label5 = element("label");
			t16 = text("Male");
			t17 = space();
			div17 = element("div");
			div16 = element("div");
			input6 = element("input");
			t18 = space();
			label6 = element("label");
			t19 = text("Female");
			t20 = space();
			div19 = element("div");
			div18 = element("div");
			input7 = element("input");
			t21 = space();
			label7 = element("label");
			t22 = text("Other");
			t23 = space();
			div24 = element("div");
			label8 = element("label");
			span = element("span");
			t24 = space();
			div23 = element("div");
			div22 = element("div");
			input8 = element("input");
			t25 = space();
			div27 = element("div");
			label9 = element("label");
			t26 = space();
			div26 = element("div");
			div25 = element("div");
			input9 = element("input");
			t27 = space();
			label10 = element("label");
			t28 = text("Agree with the terms and conditions");
			t29 = space();
			div29 = element("div");
			label11 = element("label");
			t30 = space();
			div28 = element("div");
			button = element("button");
			t31 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, class: true, method: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label0 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div4_nodes, "\n            ");

			div1 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div4_nodes, "\n            ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label1 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			t5 = claim_text(div7_nodes, "\n            ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label2 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email address");
			label2_nodes.forEach(detach);
			t8 = claim_text(div10_nodes, "\n            ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label3 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			t11 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input4 = claim_element(div11_nodes, "INPUT", { name: true, type: true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n\n        ");

			div21 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			label4 = claim_element(div21_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			t14 = claim_text(div21_nodes, "\n            ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div15 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			input5 = claim_element(div14_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(div14_nodes, "\n                        ");

			label5 = claim_element(div14_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			t16 = claim_text(label5_nodes, "Male");
			label5_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t17 = claim_text(div20_nodes, "\n                ");

			div17 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			input6 = claim_element(div16_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(div16_nodes, "\n                        ");

			label6 = claim_element(div16_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			t19 = claim_text(label6_nodes, "Female");
			label6_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t20 = claim_text(div20_nodes, "\n                ");

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			input7 = claim_element(div18_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t21 = claim_text(div18_nodes, "\n                        ");

			label7 = claim_element(div18_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Other");
			label7_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div24 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			label8 = claim_element(div24_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			span = claim_element(label8_nodes, "SPAN", { class: true, id: true }, false);
			var span_nodes = children(span);

			span_nodes.forEach(detach);
			label8_nodes.forEach(detach);
			t24 = claim_text(div24_nodes, "\n            ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			input8 = claim_element(div22_nodes, "INPUT", { type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n        ");

			div27 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			label9 = claim_element(div27_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			label9_nodes.forEach(detach);
			t26 = claim_text(div27_nodes, "\n            ");

			div26 = claim_element(div27_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			input9 = claim_element(div25_nodes, "INPUT", { name: true, type: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t27 = claim_text(div25_nodes, " ");

			label10 = claim_element(div25_nodes, "LABEL", {}, false);
			var label10_nodes = children(label10);

			t28 = claim_text(label10_nodes, "Agree with the terms and conditions");
			label10_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n\n        ");

			div29 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			label11 = claim_element(div29_nodes, "LABEL", { class: true }, false);
			var label11_nodes = children(label11);

			label11_nodes.forEach(detach);
			t30 = claim_text(div29_nodes, "\n            ");

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			button = claim_element(div28_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t31 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "four wide field";
			add_location(label0, file, 3, 12, 133);
			input0.name = "firstName";
			attr(input0, "type", "text");
			input0.placeholder = "First name";
			add_location(input0, file, 13, 20, 599);
			div0.className = "ui input icon";
			add_location(div0, file, 12, 16, 551);
			div1.className = "six wide field";
			add_location(div1, file, 4, 12, 194);
			input1.name = "lastName";
			attr(input1, "type", "text");
			input1.placeholder = "Last name";
			add_location(input1, file, 18, 20, 810);
			div2.className = "ui input icon";
			add_location(div2, file, 17, 16, 762);
			div3.className = "six wide field";
			add_location(div3, file, 16, 12, 717);
			div4.className = "fields";
			add_location(div4, file, 2, 8, 100);
			label1.className = "four wide field";
			add_location(label1, file, 24, 12, 971);
			input2.name = "username";
			attr(input2, "type", "text");
			input2.placeholder = "Username";
			add_location(input2, file, 27, 20, 1126);
			div5.className = "ui input icon";
			add_location(div5, file, 26, 16, 1078);
			div6.className = "eight wide field";
			add_location(div6, file, 25, 12, 1031);
			div7.className = "fields";
			add_location(div7, file, 23, 8, 938);
			label2.className = "four wide field";
			add_location(label2, file, 33, 12, 1286);
			input3.name = "email";
			attr(input3, "type", "text");
			input3.placeholder = "Email address";
			add_location(input3, file, 36, 20, 1446);
			div8.className = "ui input icon";
			add_location(div8, file, 35, 16, 1398);
			div9.className = "eight wide field";
			add_location(div9, file, 34, 12, 1351);
			div10.className = "fields";
			add_location(div10, file, 32, 8, 1253);
			label3.className = "four wide field";
			add_location(label3, file, 42, 12, 1608);
			input4.name = "password";
			attr(input4, "type", "password");
			input4.placeholder = "Password";
			add_location(input4, file, 45, 20, 1763);
			div11.className = "ui input icon";
			add_location(div11, file, 44, 16, 1715);
			div12.className = "eight wide field";
			add_location(div12, file, 43, 12, 1668);
			div13.className = "fields";
			add_location(div13, file, 41, 8, 1575);
			label4.className = "four wide field";
			add_location(label4, file, 51, 12, 1927);
			input5.name = "gender";
			attr(input5, "type", "radio");
			input5.value = "male";
			add_location(input5, file, 55, 24, 2117);
			add_location(label5, file, 56, 24, 2191);
			div14.className = "ui radio";
			add_location(div14, file, 54, 20, 2070);
			div15.className = "field";
			add_location(div15, file, 53, 16, 2030);
			input6.name = "gender";
			attr(input6, "type", "radio");
			input6.value = "female";
			add_location(input6, file, 61, 24, 2364);
			add_location(label6, file, 62, 24, 2440);
			div16.className = "ui radio";
			add_location(div16, file, 60, 20, 2317);
			div17.className = "field";
			add_location(div17, file, 59, 16, 2277);
			input7.name = "gender";
			attr(input7, "type", "radio");
			input7.value = "other";
			add_location(input7, file, 67, 24, 2615);
			add_location(label7, file, 68, 24, 2690);
			div18.className = "ui radio";
			add_location(div18, file, 66, 20, 2568);
			div19.className = "field";
			add_location(div19, file, 65, 16, 2528);
			div20.className = "ten wide field";
			add_location(div20, file, 52, 12, 1985);
			div21.className = "fields";
			add_location(div21, file, 50, 8, 1894);
			span.className = "right";
			span.id = "captchaOperation";
			add_location(span, file, 76, 16, 2885);
			label8.className = "four wide field";
			add_location(label8, file, 75, 12, 2837);
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 80, 20, 3062);
			div22.className = "ui input icon";
			add_location(div22, file, 79, 16, 3014);
			div23.className = "four wide field";
			add_location(div23, file, 78, 12, 2968);
			div24.className = "fields";
			add_location(div24, file, 74, 8, 2804);
			label9.className = "four wide field";
			add_location(label9, file, 86, 12, 3198);
			input9.name = "agree";
			attr(input9, "type", "checkbox");
			add_location(input9, file, 89, 20, 3341);
			add_location(label10, file, 89, 59, 3380);
			div25.className = "ui checkbox";
			add_location(div25, file, 88, 16, 3295);
			div26.className = "ten wide field";
			add_location(div26, file, 87, 12, 3250);
			div27.className = "fields";
			add_location(div27, file, 85, 8, 3165);
			label11.className = "four wide field";
			add_location(label11, file, 95, 12, 3530);
			button.type = "submit";
			button.className = "ui primary button";
			add_location(button, file, 97, 16, 3629);
			div28.className = "eight wide field";
			add_location(div28, file, 96, 12, 3582);
			div29.className = "fields";
			add_location(div29, file, 94, 8, 3497);
			form.id = "demoForm";
			form.className = "ui form";
			form.method = "POST";
			add_location(form, file, 1, 4, 41);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div4);
			append(div4, label0);
			append(label0, t0);
			append(div4, t1);
			append(div4, div1);
			append(div1, div0);
			append(div0, input0);
			append(div4, t2);
			append(div4, div3);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div7);
			append(div7, label1);
			append(label1, t4);
			append(div7, t5);
			append(div7, div6);
			append(div6, div5);
			append(div5, input2);
			append(form, t6);
			append(form, div10);
			append(div10, label2);
			append(label2, t7);
			append(div10, t8);
			append(div10, div9);
			append(div9, div8);
			append(div8, input3);
			append(form, t9);
			append(form, div13);
			append(div13, label3);
			append(label3, t10);
			append(div13, t11);
			append(div13, div12);
			append(div12, div11);
			append(div11, input4);
			append(form, t12);
			append(form, div21);
			append(div21, label4);
			append(label4, t13);
			append(div21, t14);
			append(div21, div20);
			append(div20, div15);
			append(div15, div14);
			append(div14, input5);
			append(div14, t15);
			append(div14, label5);
			append(label5, t16);
			append(div20, t17);
			append(div20, div17);
			append(div17, div16);
			append(div16, input6);
			append(div16, t18);
			append(div16, label6);
			append(label6, t19);
			append(div20, t20);
			append(div20, div19);
			append(div19, div18);
			append(div18, input7);
			append(div18, t21);
			append(div18, label7);
			append(label7, t22);
			append(form, t23);
			append(form, div24);
			append(div24, label8);
			append(label8, span);
			append(div24, t24);
			append(div24, div23);
			append(div23, div22);
			append(div22, input8);
			append(form, t25);
			append(form, div27);
			append(div27, label9);
			append(div27, t26);
			append(div27, div26);
			append(div26, div25);
			append(div25, input9);
			append(div25, t27);
			append(div25, label10);
			append(label10, t28);
			append(form, t29);
			append(form, div29);
			append(div29, label11);
			append(div29, t30);
			append(div29, div28);
			append(div28, button);
			append(button, t31);
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

	var semanticlayout = new SemanticLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			semanticlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			semanticlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(semanticlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var semanticlayout_changes = {};
			if (changed.onLoaded) semanticlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) semanticlayout_changes.$$scope = { changed, ctx };
			semanticlayout.$set(semanticlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			semanticlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			semanticlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			semanticlayout.$destroy(detaching);
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
            semantic: new Semantic(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/semantic',
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

class Semantic_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Semantic_1;

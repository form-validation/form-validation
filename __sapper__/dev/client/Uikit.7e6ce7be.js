import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as UikitLayout, b as Uikit } from './chunk.37517d92.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="uk-form-horizontal" method="post">
        <div class="uk-margin">
            <label class="uk-form-label">Full name</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="firstName" type="text" placeholder="First name" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <input class="uk-input" name="lastName" type="text" placeholder="Last name" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Username</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="username" type="text" placeholder="Username" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Email address</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="email" type="text" placeholder="Email address" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Password</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="password" type="password" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Gender</label>
            <div class="uk-form-controls">
                <label><input class="uk-radio" name="gender" type="radio" value="male" /> Male</label>
                <label><input class="uk-radio" name="gender" type="radio" value="female" /> Female</label>
                <label><input class="uk-radio" name="gender" type="radio" value="other" /> Other</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" id="captchaOperation"></label>
            <div class="uk-form-controls">
                <input class="uk-input" type="text" name="captcha" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <label><input class="uk-checkbox" name="agree" type="checkbox" /> Agree with the terms and conditions</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <button type="submit" class="uk-button uk-button-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Uikit.min.js"></script-tag>

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
            uikit: new FormValidation.plugins.Uikit(),
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

/* src/routes/download/register/Uikit.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Uikit.svelte";

// (1:0) <UikitLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div3, label1, t3, div2, input1, t4, div5, label2, t5, t6, div4, input2, t7, div7, label3, t8, t9, div6, input3, t10, div9, label4, t11, t12, div8, input4, t13, div11, label5, t14, t15, div10, label6, input5, t16, t17, label7, input6, t18, t19, label8, input7, t20, t21, div13, label9, t22, div12, input8, t23, div15, label10, t24, div14, label11, input9, t25, t26, div17, label12, t27, div16, button, t28;

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
			div3 = element("div");
			label1 = element("label");
			t3 = space();
			div2 = element("div");
			input1 = element("input");
			t4 = space();
			div5 = element("div");
			label2 = element("label");
			t5 = text("Username");
			t6 = space();
			div4 = element("div");
			input2 = element("input");
			t7 = space();
			div7 = element("div");
			label3 = element("label");
			t8 = text("Email address");
			t9 = space();
			div6 = element("div");
			input3 = element("input");
			t10 = space();
			div9 = element("div");
			label4 = element("label");
			t11 = text("Password");
			t12 = space();
			div8 = element("div");
			input4 = element("input");
			t13 = space();
			div11 = element("div");
			label5 = element("label");
			t14 = text("Gender");
			t15 = space();
			div10 = element("div");
			label6 = element("label");
			input5 = element("input");
			t16 = text(" Male");
			t17 = space();
			label7 = element("label");
			input6 = element("input");
			t18 = text(" Female");
			t19 = space();
			label8 = element("label");
			input7 = element("input");
			t20 = text(" Other");
			t21 = space();
			div13 = element("div");
			label9 = element("label");
			t22 = space();
			div12 = element("div");
			input8 = element("input");
			t23 = space();
			div15 = element("div");
			label10 = element("label");
			t24 = space();
			div14 = element("div");
			label11 = element("label");
			input9 = element("input");
			t25 = text(" Agree with the terms and conditions");
			t26 = space();
			div17 = element("div");
			label12 = element("label");
			t27 = space();
			div16 = element("div");
			button = element("button");
			t28 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, class: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n            ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			label1_nodes.forEach(detach);
			t3 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t4 = claim_text(form_nodes, "\n\n        ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			label2 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t5 = claim_text(label2_nodes, "Username");
			label2_nodes.forEach(detach);
			t6 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input2 = claim_element(div4_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t7 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label3 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t8 = claim_text(label3_nodes, "Email address");
			label3_nodes.forEach(detach);
			t9 = claim_text(div7_nodes, "\n            ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input3 = claim_element(div6_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t10 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label4 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t11 = claim_text(label4_nodes, "Password");
			label4_nodes.forEach(detach);
			t12 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input4 = claim_element(div8_nodes, "INPUT", { class: true, name: true, type: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t13 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label5 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t14 = claim_text(label5_nodes, "Gender");
			label5_nodes.forEach(detach);
			t15 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label6 = claim_element(div10_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t16 = claim_text(label6_nodes, " Male");
			label6_nodes.forEach(detach);
			t17 = claim_text(div10_nodes, "\n                ");

			label7 = claim_element(div10_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			input6 = claim_element(label7_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(label7_nodes, " Female");
			label7_nodes.forEach(detach);
			t19 = claim_text(div10_nodes, "\n                ");

			label8 = claim_element(div10_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input7 = claim_element(label8_nodes, "INPUT", { class: true, name: true, type: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t20 = claim_text(label8_nodes, " Other");
			label8_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t21 = claim_text(form_nodes, "\n\n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label9 = claim_element(div13_nodes, "LABEL", { class: true, id: true }, false);
			var label9_nodes = children(label9);

			label9_nodes.forEach(detach);
			t22 = claim_text(div13_nodes, "\n            ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			input8 = claim_element(div12_nodes, "INPUT", { class: true, type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			label10 = claim_element(div15_nodes, "LABEL", { class: true }, false);
			var label10_nodes = children(label10);

			label10_nodes.forEach(detach);
			t24 = claim_text(div15_nodes, "\n            ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			label11 = claim_element(div14_nodes, "LABEL", {}, false);
			var label11_nodes = children(label11);

			input9 = claim_element(label11_nodes, "INPUT", { class: true, name: true, type: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t25 = claim_text(label11_nodes, " Agree with the terms and conditions");
			label11_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t26 = claim_text(form_nodes, "\n\n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			label12 = claim_element(div17_nodes, "LABEL", { class: true }, false);
			var label12_nodes = children(label12);

			label12_nodes.forEach(detach);
			t27 = claim_text(div17_nodes, "\n            ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			button = claim_element(div16_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t28 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "uk-form-label";
			add_location(label0, file, 3, 12, 144);
			input0.className = "uk-input";
			input0.name = "firstName";
			attr(input0, "type", "text");
			input0.placeholder = "First name";
			add_location(input0, file, 5, 16, 250);
			div0.className = "uk-form-controls";
			add_location(div0, file, 4, 12, 203);
			div1.className = "uk-margin";
			add_location(div1, file, 2, 8, 108);
			label1.className = "uk-form-label";
			add_location(label1, file, 10, 12, 410);
			input1.className = "uk-input";
			input1.name = "lastName";
			attr(input1, "type", "text");
			input1.placeholder = "Last name";
			add_location(input1, file, 12, 16, 507);
			div2.className = "uk-form-controls";
			add_location(div2, file, 11, 12, 460);
			div3.className = "uk-margin";
			add_location(div3, file, 9, 8, 374);
			label2.className = "uk-form-label";
			add_location(label2, file, 17, 12, 665);
			input2.className = "uk-input";
			input2.name = "username";
			attr(input2, "type", "text");
			input2.placeholder = "Username";
			add_location(input2, file, 19, 16, 770);
			div4.className = "uk-form-controls";
			add_location(div4, file, 18, 12, 723);
			div5.className = "uk-margin";
			add_location(div5, file, 16, 8, 629);
			label3.className = "uk-form-label";
			add_location(label3, file, 24, 12, 927);
			input3.className = "uk-input";
			input3.name = "email";
			attr(input3, "type", "text");
			input3.placeholder = "Email address";
			add_location(input3, file, 26, 16, 1037);
			div6.className = "uk-form-controls";
			add_location(div6, file, 25, 12, 990);
			div7.className = "uk-margin";
			add_location(div7, file, 23, 8, 891);
			label4.className = "uk-form-label";
			add_location(label4, file, 31, 12, 1196);
			input4.className = "uk-input";
			input4.name = "password";
			attr(input4, "type", "password");
			add_location(input4, file, 33, 16, 1301);
			div8.className = "uk-form-controls";
			add_location(div8, file, 32, 12, 1254);
			div9.className = "uk-margin";
			add_location(div9, file, 30, 8, 1160);
			label5.className = "uk-form-label";
			add_location(label5, file, 38, 12, 1439);
			input5.className = "uk-radio";
			input5.name = "gender";
			attr(input5, "type", "radio");
			input5.value = "male";
			add_location(input5, file, 40, 23, 1549);
			add_location(label6, file, 40, 16, 1542);
			input6.className = "uk-radio";
			input6.name = "gender";
			attr(input6, "type", "radio");
			input6.value = "female";
			add_location(input6, file, 41, 23, 1652);
			add_location(label7, file, 41, 16, 1645);
			input7.className = "uk-radio";
			input7.name = "gender";
			attr(input7, "type", "radio");
			input7.value = "other";
			add_location(input7, file, 42, 23, 1759);
			add_location(label8, file, 42, 16, 1752);
			div10.className = "uk-form-controls";
			add_location(div10, file, 39, 12, 1495);
			div11.className = "uk-margin";
			add_location(div11, file, 37, 8, 1403);
			label9.className = "uk-form-label";
			label9.id = "captchaOperation";
			add_location(label9, file, 47, 12, 1920);
			input8.className = "uk-input";
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 49, 16, 2039);
			div12.className = "uk-form-controls";
			add_location(div12, file, 48, 12, 1992);
			div13.className = "uk-margin";
			add_location(div13, file, 46, 8, 1884);
			label10.className = "uk-form-label";
			add_location(label10, file, 54, 12, 2172);
			input9.className = "uk-checkbox";
			input9.name = "agree";
			attr(input9, "type", "checkbox");
			add_location(input9, file, 56, 23, 2276);
			add_location(label11, file, 56, 16, 2269);
			div14.className = "uk-form-controls";
			add_location(div14, file, 55, 12, 2222);
			div15.className = "uk-margin";
			add_location(div15, file, 53, 8, 2136);
			label12.className = "uk-form-label";
			add_location(label12, file, 61, 12, 2458);
			button.type = "submit";
			button.className = "uk-button uk-button-primary";
			add_location(button, file, 63, 16, 2555);
			div16.className = "uk-form-controls";
			add_location(div16, file, 62, 12, 2508);
			div17.className = "uk-margin";
			add_location(div17, file, 60, 8, 2422);
			form.id = "demoForm";
			form.className = "uk-form-horizontal";
			form.method = "post";
			add_location(form, file, 1, 4, 38);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label0);
			append(label0, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, input0);
			append(form, t2);
			append(form, div3);
			append(div3, label1);
			append(div3, t3);
			append(div3, div2);
			append(div2, input1);
			append(form, t4);
			append(form, div5);
			append(div5, label2);
			append(label2, t5);
			append(div5, t6);
			append(div5, div4);
			append(div4, input2);
			append(form, t7);
			append(form, div7);
			append(div7, label3);
			append(label3, t8);
			append(div7, t9);
			append(div7, div6);
			append(div6, input3);
			append(form, t10);
			append(form, div9);
			append(div9, label4);
			append(label4, t11);
			append(div9, t12);
			append(div9, div8);
			append(div8, input4);
			append(form, t13);
			append(form, div11);
			append(div11, label5);
			append(label5, t14);
			append(div11, t15);
			append(div11, div10);
			append(div10, label6);
			append(label6, input5);
			append(label6, t16);
			append(div10, t17);
			append(div10, label7);
			append(label7, input6);
			append(label7, t18);
			append(div10, t19);
			append(div10, label8);
			append(label8, input7);
			append(label8, t20);
			append(form, t21);
			append(form, div13);
			append(div13, label9);
			append(div13, t22);
			append(div13, div12);
			append(div12, input8);
			append(form, t23);
			append(form, div15);
			append(div15, label10);
			append(div15, t24);
			append(div15, div14);
			append(div14, label11);
			append(label11, input9);
			append(label11, t25);
			append(form, t26);
			append(form, div17);
			append(div17, label12);
			append(div17, t27);
			append(div17, div16);
			append(div16, button);
			append(button, t28);
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

	var uikitlayout = new UikitLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			uikitlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			uikitlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(uikitlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var uikitlayout_changes = {};
			if (changed.onLoaded) uikitlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) uikitlayout_changes.$$scope = { changed, ctx };
			uikitlayout.$set(uikitlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			uikitlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			uikitlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			uikitlayout.$destroy(detaching);
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
            submitButton: new SubmitButton(),
            uikit: new Uikit(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/uikit',
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

class Uikit_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Uikit_1;

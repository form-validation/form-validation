import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, g as space, i as text, k as claim_element, l as children, m as detach, j as claim_text, A as attr, n as add_location, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MuiLayout, b as Mui } from './chunk.7ec0a65e.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="mui-container-fluid">
        <form id="demoForm" method="post">
            <div class="mui-row">
                <div class="mui-col-md-6 mui-textfield">
                    <input type="text" name="firstName" />
                    <label>First name</label>
                </div>
                <div class="mui-col-md-6 mui-textfield">
                    <input type="text" name="lastName" />
                    <label>Last name</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="username" />
                    <label>Username</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="email" />
                    <label>Email</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="password" name="password" />
                    <label>Password</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <label>Gender</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <div class="mui-radio">
                        <label>
                            <input type="radio" name="gender" value="male" /> Male
                        </label>
                    </div>
                    <div class="mui-radio">
                        <label>
                            <input type="radio" name="gender" value="female" /> Female
                        </label>
                    </div>
                    <div class="mui-radio">
                        <label>
                            <input type="radio" name="gender" value="other" /> Other
                        </label>
                    </div>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="captcha" />
                    <label id="captchaOperation"></label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions
                        </label>
                    </div>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
                </div>
            </div>
        </form>
    </div>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/js/mui.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mui.min.js"></script-tag>

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
            mui: new FormValidation.plugins.Mui({
                rowSelector: function(field, ele) {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.mui-col-md-6';
                        default:
                            return '.mui-row';
                    }
                }
            }),
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

/* src/routes/download/register/Mui.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Mui.svelte";

// (1:0) <MuiLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var div23, form, div2, div0, input0, t0, label0, t1, t2, div1, input1, t3, label1, t4, t5, div4, div3, input2, t6, label2, t7, t8, div6, div5, input3, t9, label3, t10, t11, div8, div7, input4, t12, label4, t13, t14, div10, div9, label5, t15, t16, div15, div14, div11, label6, input5, t17, t18, div12, label7, input6, t19, t20, div13, label8, input7, t21, t22, div17, div16, input8, t23, label9, t24, div20, div19, div18, label10, input9, t25, t26, div22, div21, button, t27;

	return {
		c: function create() {
			div23 = element("div");
			form = element("form");
			div2 = element("div");
			div0 = element("div");
			input0 = element("input");
			t0 = space();
			label0 = element("label");
			t1 = text("First name");
			t2 = space();
			div1 = element("div");
			input1 = element("input");
			t3 = space();
			label1 = element("label");
			t4 = text("Last name");
			t5 = space();
			div4 = element("div");
			div3 = element("div");
			input2 = element("input");
			t6 = space();
			label2 = element("label");
			t7 = text("Username");
			t8 = space();
			div6 = element("div");
			div5 = element("div");
			input3 = element("input");
			t9 = space();
			label3 = element("label");
			t10 = text("Email");
			t11 = space();
			div8 = element("div");
			div7 = element("div");
			input4 = element("input");
			t12 = space();
			label4 = element("label");
			t13 = text("Password");
			t14 = space();
			div10 = element("div");
			div9 = element("div");
			label5 = element("label");
			t15 = text("Gender");
			t16 = space();
			div15 = element("div");
			div14 = element("div");
			div11 = element("div");
			label6 = element("label");
			input5 = element("input");
			t17 = text(" Male");
			t18 = space();
			div12 = element("div");
			label7 = element("label");
			input6 = element("input");
			t19 = text(" Female");
			t20 = space();
			div13 = element("div");
			label8 = element("label");
			input7 = element("input");
			t21 = text(" Other");
			t22 = space();
			div17 = element("div");
			div16 = element("div");
			input8 = element("input");
			t23 = space();
			label9 = element("label");
			t24 = space();
			div20 = element("div");
			div19 = element("div");
			div18 = element("div");
			label10 = element("label");
			input9 = element("input");
			t25 = text(" Agree with the terms and conditions");
			t26 = space();
			div22 = element("div");
			div21 = element("div");
			button = element("button");
			t27 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			div23 = claim_element(nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			form = claim_element(div23_nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t0 = claim_text(div0_nodes, "\n                    ");

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t1 = claim_text(label0_nodes, "First name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t3 = claim_text(div1_nodes, "\n                    ");

			label1 = claim_element(div1_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Last name");
			label1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n            ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t6 = claim_text(div3_nodes, "\n                    ");

			label2 = claim_element(div3_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Username");
			label2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n            ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input3 = claim_element(div5_nodes, "INPUT", { type: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t9 = claim_text(div5_nodes, "\n                    ");

			label3 = claim_element(div5_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Email");
			label3_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t11 = claim_text(form_nodes, "\n\n            ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input4 = claim_element(div7_nodes, "INPUT", { type: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(div7_nodes, "\n                    ");

			label4 = claim_element(div7_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Password");
			label4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t14 = claim_text(form_nodes, "\n\n            ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label5 = claim_element(div9_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "Gender");
			label5_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t16 = claim_text(form_nodes, "\n\n            ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div11 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label6 = claim_element(div11_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(label6_nodes, " Male");
			label6_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t18 = claim_text(div14_nodes, "\n                    ");

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label7 = claim_element(div12_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			input6 = claim_element(label7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t19 = claim_text(label7_nodes, " Female");
			label7_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t20 = claim_text(div14_nodes, "\n                    ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label8 = claim_element(div13_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input7 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t21 = claim_text(label8_nodes, " Other");
			label8_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n\n            ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			input8 = claim_element(div16_nodes, "INPUT", { type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			t23 = claim_text(div16_nodes, "\n                    ");

			label9 = claim_element(div16_nodes, "LABEL", { id: true }, false);
			var label9_nodes = children(label9);

			label9_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t24 = claim_text(form_nodes, "\n\n            ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			label10 = claim_element(div18_nodes, "LABEL", {}, false);
			var label10_nodes = children(label10);

			input9 = claim_element(label10_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t25 = claim_text(label10_nodes, " Agree with the terms and conditions");
			label10_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t26 = claim_text(form_nodes, "\n\n            ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			button = claim_element(div21_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t27 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			form_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(input0, "type", "text");
			input0.name = "firstName";
			add_location(input0, file, 5, 20, 224);
			add_location(label0, file, 6, 20, 283);
			div0.className = "mui-col-md-6 mui-textfield";
			add_location(div0, file, 4, 16, 163);
			attr(input1, "type", "text");
			input1.name = "lastName";
			add_location(input1, file, 9, 20, 409);
			add_location(label1, file, 10, 20, 467);
			div1.className = "mui-col-md-6 mui-textfield";
			add_location(div1, file, 8, 16, 348);
			div2.className = "mui-row";
			add_location(div2, file, 3, 12, 125);
			attr(input2, "type", "text");
			input2.name = "username";
			add_location(input2, file, 16, 20, 647);
			add_location(label2, file, 17, 20, 705);
			div3.className = "mui-col-md-12 mui-textfield";
			add_location(div3, file, 15, 16, 585);
			div4.className = "mui-row";
			add_location(div4, file, 14, 12, 547);
			attr(input3, "type", "text");
			input3.name = "email";
			add_location(input3, file, 23, 20, 884);
			add_location(label3, file, 24, 20, 939);
			div5.className = "mui-col-md-12 mui-textfield";
			add_location(div5, file, 22, 16, 822);
			div6.className = "mui-row";
			add_location(div6, file, 21, 12, 784);
			attr(input4, "type", "password");
			input4.name = "password";
			add_location(input4, file, 30, 20, 1115);
			add_location(label4, file, 31, 20, 1177);
			div7.className = "mui-col-md-12 mui-textfield";
			add_location(div7, file, 29, 16, 1053);
			div8.className = "mui-row";
			add_location(div8, file, 28, 12, 1015);
			add_location(label5, file, 37, 20, 1356);
			div9.className = "mui-col-md-12 mui-textfield";
			add_location(div9, file, 36, 16, 1294);
			div10.className = "mui-row";
			add_location(div10, file, 35, 12, 1256);
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 45, 28, 1603);
			add_location(label6, file, 44, 24, 1567);
			div11.className = "mui-radio";
			add_location(div11, file, 43, 20, 1519);
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 50, 28, 1822);
			add_location(label7, file, 49, 24, 1786);
			div12.className = "mui-radio";
			add_location(div12, file, 48, 20, 1738);
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 55, 28, 2045);
			add_location(label8, file, 54, 24, 2009);
			div13.className = "mui-radio";
			add_location(div13, file, 53, 20, 1961);
			div14.className = "mui-col-md-12";
			add_location(div14, file, 42, 16, 1471);
			div15.className = "mui-row";
			add_location(div15, file, 41, 12, 1433);
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 63, 20, 2317);
			label9.id = "captchaOperation";
			add_location(label9, file, 64, 20, 2374);
			div16.className = "mui-col-md-12 mui-textfield";
			add_location(div16, file, 62, 16, 2255);
			div17.className = "mui-row";
			add_location(div17, file, 61, 12, 2217);
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 72, 28, 2640);
			add_location(label10, file, 71, 24, 2604);
			div18.className = "mui-checkbox";
			add_location(div18, file, 70, 20, 2553);
			div19.className = "mui-col-md-12";
			add_location(div19, file, 69, 16, 2505);
			div20.className = "mui-row";
			add_location(div20, file, 68, 12, 2467);
			button.type = "submit";
			button.className = "mui-btn mui-btn--primary";
			add_location(button, file, 80, 20, 2930);
			div21.className = "mui-col-md-12";
			add_location(div21, file, 79, 16, 2882);
			div22.className = "mui-row";
			add_location(div22, file, 78, 12, 2844);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 2, 8, 78);
			div23.className = "mui-container-fluid";
			add_location(div23, file, 1, 4, 36);
		},

		m: function mount(target, anchor) {
			insert(target, div23, anchor);
			append(div23, form);
			append(form, div2);
			append(div2, div0);
			append(div0, input0);
			append(div0, t0);
			append(div0, label0);
			append(label0, t1);
			append(div2, t2);
			append(div2, div1);
			append(div1, input1);
			append(div1, t3);
			append(div1, label1);
			append(label1, t4);
			append(form, t5);
			append(form, div4);
			append(div4, div3);
			append(div3, input2);
			append(div3, t6);
			append(div3, label2);
			append(label2, t7);
			append(form, t8);
			append(form, div6);
			append(div6, div5);
			append(div5, input3);
			append(div5, t9);
			append(div5, label3);
			append(label3, t10);
			append(form, t11);
			append(form, div8);
			append(div8, div7);
			append(div7, input4);
			append(div7, t12);
			append(div7, label4);
			append(label4, t13);
			append(form, t14);
			append(form, div10);
			append(div10, div9);
			append(div9, label5);
			append(label5, t15);
			append(form, t16);
			append(form, div15);
			append(div15, div14);
			append(div14, div11);
			append(div11, label6);
			append(label6, input5);
			append(label6, t17);
			append(div14, t18);
			append(div14, div12);
			append(div12, label7);
			append(label7, input6);
			append(label7, t19);
			append(div14, t20);
			append(div14, div13);
			append(div13, label8);
			append(label8, input7);
			append(label8, t21);
			append(form, t22);
			append(form, div17);
			append(div17, div16);
			append(div16, input8);
			append(div16, t23);
			append(div16, label9);
			append(form, t24);
			append(form, div20);
			append(div20, div19);
			append(div19, div18);
			append(div18, label10);
			append(label10, input9);
			append(label10, t25);
			append(form, t26);
			append(form, div22);
			append(div22, div21);
			append(div21, button);
			append(button, t27);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div23);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var muilayout = new MuiLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			muilayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			muilayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(muilayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var muilayout_changes = {};
			if (changed.onLoaded) muilayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) muilayout_changes.$$scope = { changed, ctx };
			muilayout.$set(muilayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			muilayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			muilayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			muilayout.$destroy(detaching);
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
            mui: new Mui({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.mui-col-md-6';
                        default:
                            return '.mui-row';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/mui',
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

class Mui_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Mui_1;

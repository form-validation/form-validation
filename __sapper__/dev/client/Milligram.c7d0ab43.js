import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MilligramLayout, b as Milligram } from './chunk.1ebb077a.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="row">
            <div class="column column-25">
                <label>Full name</label>
            </div>
            <div class="column column-25">
                <input type="text" name="firstName" />
            </div>
            <div class="column column-25">
                <input type="text" name="lastName" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Username</label>
            </div>
            <div class="column column-40">
                <input type="text" name="username" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Email</label>
            </div>
            <div class="column column-40">
                <input type="text" name="email" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Password</label>
            </div>
            <div class="column column-40">
                <input type="password" name="password" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Gender</label>
            </div>
            <div class="column column-40">
                <div>
                    <input type="radio" name="gender" value="male" id="genderMale" />
                    <label class="label-inline" for="genderMale">Male</label>
                </div>
                <div>
                    <input type="radio" name="gender" value="female" id="genderFemale" />
                    <label class="label-inline" for="genderFemale">Female</label>
                </div>
                <div>
                    <input type="radio" name="gender" value="other" id="genderOther" />
                    <label class="label-inline" for="genderOther">Other</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label id="captchaOperation"></label>
            </div>
            <div class="column column-40">
                <input type="text" name="captcha" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label></label>
            </div>
            <div class="column column-50">
                <div>
                    <input type="checkbox" name="agree" value="agree" />
                    <label class="label-inline">Agree with the terms and conditions</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25"></div>
            <div class="column column-75">
                <button type="submit" class="button-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Milligram.min.js"></script-tag>

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
            milligram: new FormValidation.plugins.Milligram({
                rowSelector: function(field, ele) {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.column';
                        default:
                            return '.row';
                    }
                }
            }),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
        }
    });  
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Milligram.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Milligram.svelte";

// (1:0) <MilligramLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div3, div0, label0, t0, t1, div1, input0, t2, div2, input1, t3, div6, div4, label1, t4, t5, div5, input2, t6, div9, div7, label2, t7, t8, div8, input3, t9, div12, div10, label3, t10, t11, div11, input4, t12, div18, div13, label4, t13, t14, div17, div14, input5, t15, label5, t16, t17, div15, input6, t18, label6, t19, t20, div16, input7, t21, label7, t22, t23, div21, div19, label8, t24, div20, input8, t25, div25, div22, label9, t26, div24, div23, input9, t27, label10, t28, t29, div28, div26, t30, div27, button, t31;

	return {
		c: function create() {
			form = element("form");
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
			t7 = text("Email");
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
			div18 = element("div");
			div13 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div17 = element("div");
			div14 = element("div");
			input5 = element("input");
			t15 = space();
			label5 = element("label");
			t16 = text("Male");
			t17 = space();
			div15 = element("div");
			input6 = element("input");
			t18 = space();
			label6 = element("label");
			t19 = text("Female");
			t20 = space();
			div16 = element("div");
			input7 = element("input");
			t21 = space();
			label7 = element("label");
			t22 = text("Other");
			t23 = space();
			div21 = element("div");
			div19 = element("div");
			label8 = element("label");
			t24 = space();
			div20 = element("div");
			input8 = element("input");
			t25 = space();
			div25 = element("div");
			div22 = element("div");
			label9 = element("label");
			t26 = space();
			div24 = element("div");
			div23 = element("div");
			input9 = element("input");
			t27 = space();
			label10 = element("label");
			t28 = text("Agree with the terms and conditions");
			t29 = space();
			div28 = element("div");
			div26 = element("div");
			t30 = space();
			div27 = element("div");
			button = element("button");
			t31 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n            ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t5 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label2 = claim_element(div7_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email");
			label2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t8 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { type: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label3 = claim_element(div10_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t11 = claim_text(div12_nodes, "\n            ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input4 = claim_element(div11_nodes, "INPUT", { type: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n\n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div13 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label4 = claim_element(div13_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t14 = claim_text(div18_nodes, "\n            ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div14 = claim_element(div17_nodes, "DIV", {}, false);
			var div14_nodes = children(div14);

			input5 = claim_element(div14_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(div14_nodes, "\n                    ");

			label5 = claim_element(div14_nodes, "LABEL", { class: true, for: true }, false);
			var label5_nodes = children(label5);

			t16 = claim_text(label5_nodes, "Male");
			label5_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t17 = claim_text(div17_nodes, "\n                ");

			div15 = claim_element(div17_nodes, "DIV", {}, false);
			var div15_nodes = children(div15);

			input6 = claim_element(div15_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(div15_nodes, "\n                    ");

			label6 = claim_element(div15_nodes, "LABEL", { class: true, for: true }, false);
			var label6_nodes = children(label6);

			t19 = claim_text(label6_nodes, "Female");
			label6_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t20 = claim_text(div17_nodes, "\n                ");

			div16 = claim_element(div17_nodes, "DIV", {}, false);
			var div16_nodes = children(div16);

			input7 = claim_element(div16_nodes, "INPUT", { type: true, name: true, value: true, id: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t21 = claim_text(div16_nodes, "\n                    ");

			label7 = claim_element(div16_nodes, "LABEL", { class: true, for: true }, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Other");
			label7_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t23 = claim_text(form_nodes, "\n\n        ");

			div21 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div19 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			label8 = claim_element(div19_nodes, "LABEL", { id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t24 = claim_text(div21_nodes, "\n            ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			input8 = claim_element(div20_nodes, "INPUT", { type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n        ");

			div25 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div22 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			label9 = claim_element(div22_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			label9_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			t26 = claim_text(div25_nodes, "\n            ");

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div23 = claim_element(div24_nodes, "DIV", {}, false);
			var div23_nodes = children(div23);

			input9 = claim_element(div23_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t27 = claim_text(div23_nodes, "\n                    ");

			label10 = claim_element(div23_nodes, "LABEL", { class: true }, false);
			var label10_nodes = children(label10);

			t28 = claim_text(label10_nodes, "Agree with the terms and conditions");
			label10_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n\n        ");

			div28 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			div26 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div26_nodes.forEach(detach);
			t30 = claim_text(div28_nodes, "\n            ");

			div27 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			button = claim_element(div27_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t31 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 4, 16, 162);
			div0.className = "column column-25";
			add_location(div0, file, 3, 12, 115);
			attr(input0, "type", "text");
			input0.name = "firstName";
			add_location(input0, file, 7, 16, 265);
			div1.className = "column column-25";
			add_location(div1, file, 6, 12, 218);
			attr(input1, "type", "text");
			input1.name = "lastName";
			add_location(input1, file, 10, 16, 382);
			div2.className = "column column-25";
			add_location(div2, file, 9, 12, 335);
			div3.className = "row";
			add_location(div3, file, 2, 8, 85);
			add_location(label1, file, 16, 16, 540);
			div4.className = "column column-25";
			add_location(div4, file, 15, 12, 493);
			attr(input2, "type", "text");
			input2.name = "username";
			add_location(input2, file, 19, 16, 642);
			div5.className = "column column-40";
			add_location(div5, file, 18, 12, 595);
			div6.className = "row";
			add_location(div6, file, 14, 8, 463);
			add_location(label2, file, 25, 16, 800);
			div7.className = "column column-25";
			add_location(div7, file, 24, 12, 753);
			attr(input3, "type", "text");
			input3.name = "email";
			add_location(input3, file, 28, 16, 899);
			div8.className = "column column-40";
			add_location(div8, file, 27, 12, 852);
			div9.className = "row";
			add_location(div9, file, 23, 8, 723);
			add_location(label3, file, 34, 16, 1054);
			div10.className = "column column-25";
			add_location(div10, file, 33, 12, 1007);
			attr(input4, "type", "password");
			input4.name = "password";
			add_location(input4, file, 37, 16, 1156);
			div11.className = "column column-40";
			add_location(div11, file, 36, 12, 1109);
			div12.className = "row";
			add_location(div12, file, 32, 8, 977);
			add_location(label4, file, 43, 16, 1318);
			div13.className = "column column-25";
			add_location(div13, file, 42, 12, 1271);
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.value = "male";
			input5.id = "genderMale";
			add_location(input5, file, 47, 20, 1444);
			label5.className = "label-inline";
			label5.htmlFor = "genderMale";
			add_location(label5, file, 48, 20, 1530);
			add_location(div14, file, 46, 16, 1418);
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.value = "female";
			input6.id = "genderFemale";
			add_location(input6, file, 51, 20, 1653);
			label6.className = "label-inline";
			label6.htmlFor = "genderFemale";
			add_location(label6, file, 52, 20, 1743);
			add_location(div15, file, 50, 16, 1627);
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.value = "other";
			input7.id = "genderOther";
			add_location(input7, file, 55, 20, 1870);
			label7.className = "label-inline";
			label7.htmlFor = "genderOther";
			add_location(label7, file, 56, 20, 1958);
			add_location(div16, file, 54, 16, 1844);
			div17.className = "column column-40";
			add_location(div17, file, 45, 12, 1371);
			div18.className = "row";
			add_location(div18, file, 41, 8, 1241);
			label8.id = "captchaOperation";
			add_location(label8, file, 63, 16, 2161);
			div19.className = "column column-25";
			add_location(div19, file, 62, 12, 2114);
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 66, 16, 2277);
			div20.className = "column column-40";
			add_location(div20, file, 65, 12, 2230);
			div21.className = "row";
			add_location(div21, file, 61, 8, 2084);
			add_location(label9, file, 72, 16, 2434);
			div22.className = "column column-25";
			add_location(div22, file, 71, 12, 2387);
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 76, 20, 2554);
			label10.className = "label-inline";
			add_location(label10, file, 77, 20, 2627);
			add_location(div23, file, 75, 16, 2528);
			div24.className = "column column-50";
			add_location(div24, file, 74, 12, 2481);
			div25.className = "row";
			add_location(div25, file, 70, 8, 2357);
			div26.className = "column column-25";
			add_location(div26, file, 83, 12, 2795);
			button.type = "submit";
			button.className = "button-primary";
			add_location(button, file, 85, 16, 2891);
			div27.className = "column column-75";
			add_location(div27, file, 84, 12, 2844);
			div28.className = "row";
			add_location(div28, file, 82, 8, 2765);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 42);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div0);
			append(div0, label0);
			append(label0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div6);
			append(div6, div4);
			append(div4, label1);
			append(label1, t4);
			append(div6, t5);
			append(div6, div5);
			append(div5, input2);
			append(form, t6);
			append(form, div9);
			append(div9, div7);
			append(div7, label2);
			append(label2, t7);
			append(div9, t8);
			append(div9, div8);
			append(div8, input3);
			append(form, t9);
			append(form, div12);
			append(div12, div10);
			append(div10, label3);
			append(label3, t10);
			append(div12, t11);
			append(div12, div11);
			append(div11, input4);
			append(form, t12);
			append(form, div18);
			append(div18, div13);
			append(div13, label4);
			append(label4, t13);
			append(div18, t14);
			append(div18, div17);
			append(div17, div14);
			append(div14, input5);
			append(div14, t15);
			append(div14, label5);
			append(label5, t16);
			append(div17, t17);
			append(div17, div15);
			append(div15, input6);
			append(div15, t18);
			append(div15, label6);
			append(label6, t19);
			append(div17, t20);
			append(div17, div16);
			append(div16, input7);
			append(div16, t21);
			append(div16, label7);
			append(label7, t22);
			append(form, t23);
			append(form, div21);
			append(div21, div19);
			append(div19, label8);
			append(div21, t24);
			append(div21, div20);
			append(div20, input8);
			append(form, t25);
			append(form, div25);
			append(div25, div22);
			append(div22, label9);
			append(div25, t26);
			append(div25, div24);
			append(div24, div23);
			append(div23, input9);
			append(div23, t27);
			append(div23, label10);
			append(label10, t28);
			append(form, t29);
			append(form, div28);
			append(div28, div26);
			append(div28, t30);
			append(div28, div27);
			append(div27, button);
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

	var milligramlayout = new MilligramLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			milligramlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			milligramlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(milligramlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var milligramlayout_changes = {};
			if (changed.onLoaded) milligramlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) milligramlayout_changes.$$scope = { changed, ctx };
			milligramlayout.$set(milligramlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			milligramlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			milligramlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			milligramlayout.$destroy(detaching);
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
            milligram: new Milligram({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.column';
                        default:
                            return '.row';
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
                sender: '/download/register/milligram',
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

class Milligram_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Milligram_1;

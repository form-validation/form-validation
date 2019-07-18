import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, g as space, i as text, k as claim_element, l as children, m as detach, j as claim_text, A as attr, n as add_location, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as MaterializeLayout, b as Materialize } from './chunk.4446dc66.js';
import './chunk.17752e4f.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="row">
            <div class="input-field col s6">
                <input type="text" name="firstName" />
                <label>First name</label>
            </div>
            <div class="input-field col s6">
                <input type="text" name="lastName" />
                <label>Last name</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="username" />
                <label>Username</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="email" />
                <label>Email</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input type="password" name="password" />
                <label>Password</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <label>Gender</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="radio" name="gender" value="male" />
                        <span>Male</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="gender" value="female" />
                        <span>Female</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="gender" value="other" />
                        <span>Other</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="captcha" />
                <label id="captchaOperation"></label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="checkbox" name="agree" value="agree" />
                        <span>Agree with the terms and conditions</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <button type="submit" class="btn waves-effect waves-light">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Materialize.min.js"></script-tag>

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
            materialize: new FormValidation.plugins.Materialize(),
            submitButton: new FormValidation.plugins.SubmitButton(),
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

/* src/routes/download/register/Materialize.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Materialize.svelte";

// (1:0) <MaterializeLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, div0, input0, t0, label0, t1, t2, div1, input1, t3, label1, t4, t5, div4, div3, input2, t6, label2, t7, t8, div6, div5, input3, t9, label3, t10, t11, div8, div7, input4, t12, label4, t13, t14, div10, div9, label5, t15, t16, div15, div14, div11, label6, input5, t17, span0, t18, t19, div12, label7, input6, t20, span1, t21, t22, div13, label8, input7, t23, span2, t24, t25, div18, div17, div16, label9, input8, t26, span3, t27, t28, div20, div19, input9, t29, label10, t30, div22, div21, button, t31;

	return {
		c: function create() {
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
			t17 = space();
			span0 = element("span");
			t18 = text("Male");
			t19 = space();
			div12 = element("div");
			label7 = element("label");
			input6 = element("input");
			t20 = space();
			span1 = element("span");
			t21 = text("Female");
			t22 = space();
			div13 = element("div");
			label8 = element("label");
			input7 = element("input");
			t23 = space();
			span2 = element("span");
			t24 = text("Other");
			t25 = space();
			div18 = element("div");
			div17 = element("div");
			div16 = element("div");
			label9 = element("label");
			input8 = element("input");
			t26 = space();
			span3 = element("span");
			t27 = text("Agree with the terms and conditions");
			t28 = space();
			div20 = element("div");
			div19 = element("div");
			input9 = element("input");
			t29 = space();
			label10 = element("label");
			t30 = space();
			div22 = element("div");
			div21 = element("div");
			button = element("button");
			t31 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t0 = claim_text(div0_nodes, "\n                ");

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t1 = claim_text(label0_nodes, "First name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t3 = claim_text(div1_nodes, "\n                ");

			label1 = claim_element(div1_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Last name");
			label1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t6 = claim_text(div3_nodes, "\n                ");

			label2 = claim_element(div3_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Username");
			label2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input3 = claim_element(div5_nodes, "INPUT", { type: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t9 = claim_text(div5_nodes, "\n                ");

			label3 = claim_element(div5_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Email");
			label3_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t11 = claim_text(form_nodes, "\n\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input4 = claim_element(div7_nodes, "INPUT", { type: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t12 = claim_text(div7_nodes, "\n                ");

			label4 = claim_element(div7_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Password");
			label4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t14 = claim_text(form_nodes, "\n\n        ");

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
			t16 = claim_text(form_nodes, "\n\n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div11 = claim_element(div14_nodes, "DIV", {}, false);
			var div11_nodes = children(div11);

			label6 = claim_element(div11_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(label6_nodes, "\n                        ");

			span0 = claim_element(label6_nodes, "SPAN", {}, false);
			var span0_nodes = children(span0);

			t18 = claim_text(span0_nodes, "Male");
			span0_nodes.forEach(detach);
			label6_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t19 = claim_text(div14_nodes, "\n                ");

			div12 = claim_element(div14_nodes, "DIV", {}, false);
			var div12_nodes = children(div12);

			label7 = claim_element(div12_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			input6 = claim_element(label7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t20 = claim_text(label7_nodes, "\n                        ");

			span1 = claim_element(label7_nodes, "SPAN", {}, false);
			var span1_nodes = children(span1);

			t21 = claim_text(span1_nodes, "Female");
			span1_nodes.forEach(detach);
			label7_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t22 = claim_text(div14_nodes, "\n                ");

			div13 = claim_element(div14_nodes, "DIV", {}, false);
			var div13_nodes = children(div13);

			label8 = claim_element(div13_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input7 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t23 = claim_text(label8_nodes, "\n                        ");

			span2 = claim_element(label8_nodes, "SPAN", {}, false);
			var span2_nodes = children(span2);

			t24 = claim_text(span2_nodes, "Other");
			span2_nodes.forEach(detach);
			label8_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", {}, false);
			var div16_nodes = children(div16);

			label9 = claim_element(div16_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input8 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			t26 = claim_text(label9_nodes, "\n                        ");

			span3 = claim_element(label9_nodes, "SPAN", {}, false);
			var span3_nodes = children(span3);

			t27 = claim_text(span3_nodes, "Agree with the terms and conditions");
			span3_nodes.forEach(detach);
			label9_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t28 = claim_text(form_nodes, "\n\n        ");

			div20 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			input9 = claim_element(div19_nodes, "INPUT", { type: true, name: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t29 = claim_text(div19_nodes, "\n                ");

			label10 = claim_element(div19_nodes, "LABEL", { id: true }, false);
			var label10_nodes = children(label10);

			label10_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t30 = claim_text(form_nodes, "\n\n        ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			button = claim_element(div21_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t31 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(input0, "type", "text");
			input0.name = "firstName";
			add_location(input0, file, 4, 16, 166);
			add_location(label0, file, 5, 16, 221);
			div0.className = "input-field col s6";
			add_location(div0, file, 3, 12, 117);
			attr(input1, "type", "text");
			input1.name = "lastName";
			add_location(input1, file, 8, 16, 327);
			add_location(label1, file, 9, 16, 381);
			div1.className = "input-field col s6";
			add_location(div1, file, 7, 12, 278);
			div2.className = "row";
			add_location(div2, file, 2, 8, 87);
			attr(input2, "type", "text");
			input2.name = "username";
			add_location(input2, file, 15, 16, 529);
			add_location(label2, file, 16, 16, 583);
			div3.className = "input-field col s12";
			add_location(div3, file, 14, 12, 479);
			div4.className = "row";
			add_location(div4, file, 13, 8, 449);
			attr(input3, "type", "text");
			input3.name = "email";
			add_location(input3, file, 22, 16, 730);
			add_location(label3, file, 23, 16, 781);
			div5.className = "input-field col s12";
			add_location(div5, file, 21, 12, 680);
			div6.className = "row";
			add_location(div6, file, 20, 8, 650);
			attr(input4, "type", "password");
			input4.name = "password";
			add_location(input4, file, 29, 16, 925);
			add_location(label4, file, 30, 16, 983);
			div7.className = "input-field col s12";
			add_location(div7, file, 28, 12, 875);
			div8.className = "row";
			add_location(div8, file, 27, 8, 845);
			add_location(label5, file, 36, 16, 1130);
			div9.className = "input-field col s12";
			add_location(div9, file, 35, 12, 1080);
			div10.className = "row";
			add_location(div10, file, 34, 8, 1050);
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 44, 24, 1333);
			add_location(span0, file, 45, 24, 1407);
			add_location(label6, file, 43, 20, 1301);
			add_location(div11, file, 42, 16, 1275);
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 50, 24, 1551);
			add_location(span1, file, 51, 24, 1627);
			add_location(label7, file, 49, 20, 1519);
			add_location(div12, file, 48, 16, 1493);
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 56, 24, 1773);
			add_location(span2, file, 57, 24, 1848);
			add_location(label8, file, 55, 20, 1741);
			add_location(div13, file, 54, 16, 1715);
			div14.className = "input-field col s12";
			add_location(div14, file, 41, 12, 1225);
			div15.className = "row";
			add_location(div15, file, 40, 8, 1195);
			attr(input8, "type", "checkbox");
			input8.name = "agree";
			input8.value = "agree";
			add_location(input8, file, 67, 24, 2100);
			add_location(span3, file, 68, 24, 2177);
			add_location(label9, file, 66, 20, 2068);
			add_location(div16, file, 65, 16, 2042);
			div17.className = "input-field col s12";
			add_location(div17, file, 64, 12, 1992);
			div18.className = "row";
			add_location(div18, file, 63, 8, 1962);
			attr(input9, "type", "text");
			input9.name = "captcha";
			add_location(input9, file, 76, 16, 2401);
			label10.id = "captchaOperation";
			add_location(label10, file, 77, 16, 2454);
			div19.className = "input-field col s12";
			add_location(div19, file, 75, 12, 2351);
			div20.className = "row";
			add_location(div20, file, 74, 8, 2321);
			button.type = "submit";
			button.className = "btn waves-effect waves-light";
			add_location(button, file, 83, 16, 2603);
			div21.className = "col s12";
			add_location(div21, file, 82, 12, 2565);
			div22.className = "row";
			add_location(div22, file, 81, 8, 2535);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 44);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
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
			append(label6, span0);
			append(span0, t18);
			append(div14, t19);
			append(div14, div12);
			append(div12, label7);
			append(label7, input6);
			append(label7, t20);
			append(label7, span1);
			append(span1, t21);
			append(div14, t22);
			append(div14, div13);
			append(div13, label8);
			append(label8, input7);
			append(label8, t23);
			append(label8, span2);
			append(span2, t24);
			append(form, t25);
			append(form, div18);
			append(div18, div17);
			append(div17, div16);
			append(div16, label9);
			append(label9, input8);
			append(label9, t26);
			append(label9, span3);
			append(span3, t27);
			append(form, t28);
			append(form, div20);
			append(div20, div19);
			append(div19, input9);
			append(div19, t29);
			append(div19, label10);
			append(form, t30);
			append(form, div22);
			append(div22, div21);
			append(div21, button);
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

	var materializelayout = new MaterializeLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			materializelayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			materializelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(materializelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var materializelayout_changes = {};
			if (changed.onLoaded) materializelayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) materializelayout_changes.$$scope = { changed, ctx };
			materializelayout.$set(materializelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			materializelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			materializelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			materializelayout.$destroy(detaching);
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
            materialize: new Materialize(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/materialize',
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

class Materialize_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Materialize_1;

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as BulmaLayout, b as Bulma } from './chunk.acdfecb4.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Full name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" name="firstName" type="text" placeholder="First name" />
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" name="lastName" type="text" placeholder="Last name" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Username</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" name="username" type="text" placeholder="Username" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Email address</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" name="email" type="text" placeholder="Email address" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Password</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" name="password" type="password" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Gender</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="radio"><input name="gender" type="radio" value="male" /> Male</label>
                        <label class="radio"><input name="gender" type="radio" value="female" /> Female</label>
                        <label class="radio"><input name="gender" type="radio" value="other" /> Other</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" id="captchaOperation"></label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" name="captcha" type="text" />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="radio"><input name="agree" type="checkbox" /> Agree with the terms and conditions</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bulma.min.js"></script-tag>

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
            bulma: new FormValidation.plugins.Bulma(),
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

/* src/routes/download/register/Bulma.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Bulma.svelte";

// (1:0) <BulmaLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div6, div0, label0, t0, t1, div5, div2, div1, input0, t2, div4, div3, input1, t3, div11, div7, label1, t4, t5, div10, div9, div8, input2, t6, div16, div12, label2, t7, t8, div15, div14, div13, input3, t9, div21, div17, label3, t10, t11, div20, div19, div18, input4, t12, div26, div22, label4, t13, t14, div25, div24, div23, label5, input5, t15, t16, label6, input6, t17, t18, label7, input7, t19, t20, div31, div27, label8, t21, div30, div29, div28, input8, t22, div36, div32, t23, div35, div34, div33, label9, input9, t24, t25, div41, div37, t26, div40, div39, div38, button, t27;

	return {
		c: function create() {
			form = element("form");
			div6 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div5 = element("div");
			div2 = element("div");
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			input1 = element("input");
			t3 = space();
			div11 = element("div");
			div7 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			div10 = element("div");
			div9 = element("div");
			div8 = element("div");
			input2 = element("input");
			t6 = space();
			div16 = element("div");
			div12 = element("div");
			label2 = element("label");
			t7 = text("Email address");
			t8 = space();
			div15 = element("div");
			div14 = element("div");
			div13 = element("div");
			input3 = element("input");
			t9 = space();
			div21 = element("div");
			div17 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			div20 = element("div");
			div19 = element("div");
			div18 = element("div");
			input4 = element("input");
			t12 = space();
			div26 = element("div");
			div22 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div25 = element("div");
			div24 = element("div");
			div23 = element("div");
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
			div31 = element("div");
			div27 = element("div");
			label8 = element("label");
			t21 = space();
			div30 = element("div");
			div29 = element("div");
			div28 = element("div");
			input8 = element("input");
			t22 = space();
			div36 = element("div");
			div32 = element("div");
			t23 = space();
			div35 = element("div");
			div34 = element("div");
			div33 = element("div");
			label9 = element("label");
			input9 = element("input");
			t24 = text(" Agree with the terms and conditions");
			t25 = space();
			div41 = element("div");
			div37 = element("div");
			t26 = space();
			div40 = element("div");
			div39 = element("div");
			div38 = element("div");
			button = element("button");
			t27 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div0 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div2 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_text(div5_nodes, "\n                ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input1 = claim_element(div3_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div7 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label1 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(div11_nodes, "\n            ");

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input2 = claim_element(div8_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div12 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label2 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email address");
			label2_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t8 = claim_text(div16_nodes, "\n            ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			input3 = claim_element(div13_nodes, "INPUT", { class: true, name: true, type: true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n        ");

			div21 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div17 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			label3 = claim_element(div17_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t11 = claim_text(div21_nodes, "\n            ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			div19 = claim_element(div20_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			input4 = claim_element(div18_nodes, "INPUT", { class: true, name: true, type: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n\n        ");

			div26 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div22 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			label4 = claim_element(div22_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			t14 = claim_text(div26_nodes, "\n            ");

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			label5 = claim_element(div23_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input5 = claim_element(label5_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(label5_nodes, " Male");
			label5_nodes.forEach(detach);
			t16 = claim_text(div23_nodes, "\n                        ");

			label6 = claim_element(div23_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input6 = claim_element(label6_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t17 = claim_text(label6_nodes, " Female");
			label6_nodes.forEach(detach);
			t18 = claim_text(div23_nodes, "\n                        ");

			label7 = claim_element(div23_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			input7 = claim_element(label7_nodes, "INPUT", { name: true, type: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t19 = claim_text(label7_nodes, " Other");
			label7_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			t20 = claim_text(form_nodes, "\n\n        ");

			div31 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div31_nodes = children(div31);

			div27 = claim_element(div31_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			label8 = claim_element(div27_nodes, "LABEL", { class: true, id: true }, false);
			var label8_nodes = children(label8);

			label8_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			t21 = claim_text(div31_nodes, "\n            ");

			div30 = claim_element(div31_nodes, "DIV", { class: true }, false);
			var div30_nodes = children(div30);

			div29 = claim_element(div30_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			input8 = claim_element(div28_nodes, "INPUT", { class: true, name: true, type: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			div30_nodes.forEach(detach);
			div31_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n\n        ");

			div36 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div36_nodes = children(div36);

			div32 = claim_element(div36_nodes, "DIV", { class: true }, false);
			var div32_nodes = children(div32);

			div32_nodes.forEach(detach);
			t23 = claim_text(div36_nodes, "\n            ");

			div35 = claim_element(div36_nodes, "DIV", { class: true }, false);
			var div35_nodes = children(div35);

			div34 = claim_element(div35_nodes, "DIV", { class: true }, false);
			var div34_nodes = children(div34);

			div33 = claim_element(div34_nodes, "DIV", { class: true }, false);
			var div33_nodes = children(div33);

			label9 = claim_element(div33_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			input9 = claim_element(label9_nodes, "INPUT", { name: true, type: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t24 = claim_text(label9_nodes, " Agree with the terms and conditions");
			label9_nodes.forEach(detach);
			div33_nodes.forEach(detach);
			div34_nodes.forEach(detach);
			div35_nodes.forEach(detach);
			div36_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n        ");

			div41 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div41_nodes = children(div41);

			div37 = claim_element(div41_nodes, "DIV", { class: true }, false);
			var div37_nodes = children(div37);

			div37_nodes.forEach(detach);
			t26 = claim_text(div41_nodes, "\n            ");

			div40 = claim_element(div41_nodes, "DIV", { class: true }, false);
			var div40_nodes = children(div40);

			div39 = claim_element(div40_nodes, "DIV", { class: true }, false);
			var div39_nodes = children(div39);

			div38 = claim_element(div39_nodes, "DIV", { class: true }, false);
			var div38_nodes = children(div38);

			button = claim_element(div38_nodes, "BUTTON", { class: true }, false);
			var button_nodes = children(button);

			t27 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div38_nodes.forEach(detach);
			div39_nodes.forEach(detach);
			div40_nodes.forEach(detach);
			div41_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "label";
			add_location(label0, file, 4, 16, 169);
			div0.className = "field-label";
			add_location(div0, file, 3, 12, 127);
			input0.className = "input";
			input0.name = "firstName";
			attr(input0, "type", "text");
			input0.placeholder = "First name";
			add_location(input0, file, 9, 24, 366);
			div1.className = "control";
			add_location(div1, file, 8, 20, 320);
			div2.className = "field";
			add_location(div2, file, 7, 16, 280);
			input1.className = "input";
			input1.name = "lastName";
			attr(input1, "type", "text");
			input1.placeholder = "Last name";
			add_location(input1, file, 14, 24, 596);
			div3.className = "control";
			add_location(div3, file, 13, 20, 550);
			div4.className = "field";
			add_location(div4, file, 12, 16, 510);
			div5.className = "field-body";
			add_location(div5, file, 6, 12, 239);
			div6.className = "field is-horizontal";
			add_location(div6, file, 2, 8, 81);
			label1.className = "label";
			add_location(label1, file, 22, 16, 853);
			div7.className = "field-label";
			add_location(div7, file, 21, 12, 811);
			input2.className = "input";
			input2.name = "username";
			attr(input2, "type", "text");
			input2.placeholder = "Username";
			add_location(input2, file, 27, 24, 1049);
			div8.className = "control";
			add_location(div8, file, 26, 20, 1003);
			div9.className = "field";
			add_location(div9, file, 25, 16, 963);
			div10.className = "field-body";
			add_location(div10, file, 24, 12, 922);
			div11.className = "field is-horizontal";
			add_location(div11, file, 20, 8, 765);
			label2.className = "label";
			add_location(label2, file, 35, 16, 1305);
			div12.className = "field-label";
			add_location(div12, file, 34, 12, 1263);
			input3.className = "input";
			input3.name = "email";
			attr(input3, "type", "text");
			input3.placeholder = "Email address";
			add_location(input3, file, 40, 24, 1506);
			div13.className = "control";
			add_location(div13, file, 39, 20, 1460);
			div14.className = "field";
			add_location(div14, file, 38, 16, 1420);
			div15.className = "field-body";
			add_location(div15, file, 37, 12, 1379);
			div16.className = "field is-horizontal";
			add_location(div16, file, 33, 8, 1217);
			label3.className = "label";
			add_location(label3, file, 48, 16, 1764);
			div17.className = "field-label";
			add_location(div17, file, 47, 12, 1722);
			input4.className = "input";
			input4.name = "password";
			attr(input4, "type", "password");
			add_location(input4, file, 53, 24, 1960);
			div18.className = "control";
			add_location(div18, file, 52, 20, 1914);
			div19.className = "field";
			add_location(div19, file, 51, 16, 1874);
			div20.className = "field-body";
			add_location(div20, file, 50, 12, 1833);
			div21.className = "field is-horizontal";
			add_location(div21, file, 46, 8, 1676);
			label4.className = "label";
			add_location(label4, file, 61, 16, 2197);
			div22.className = "field-label";
			add_location(div22, file, 60, 12, 2155);
			input5.name = "gender";
			attr(input5, "type", "radio");
			input5.value = "male";
			add_location(input5, file, 66, 45, 2412);
			label5.className = "radio";
			add_location(label5, file, 66, 24, 2391);
			input6.name = "gender";
			attr(input6, "type", "radio");
			input6.value = "female";
			add_location(input6, file, 67, 45, 2520);
			label6.className = "radio";
			add_location(label6, file, 67, 24, 2499);
			input7.name = "gender";
			attr(input7, "type", "radio");
			input7.value = "other";
			add_location(input7, file, 68, 45, 2632);
			label7.className = "radio";
			add_location(label7, file, 68, 24, 2611);
			div23.className = "control";
			add_location(div23, file, 65, 20, 2345);
			div24.className = "field";
			add_location(div24, file, 64, 16, 2305);
			div25.className = "field-body";
			add_location(div25, file, 63, 12, 2264);
			div26.className = "field is-horizontal";
			add_location(div26, file, 59, 8, 2109);
			label8.className = "label";
			label8.id = "captchaOperation";
			add_location(label8, file, 76, 16, 2878);
			div27.className = "field-label";
			add_location(div27, file, 75, 12, 2836);
			input8.className = "input";
			input8.name = "captcha";
			attr(input8, "type", "text");
			add_location(input8, file, 81, 24, 3088);
			div28.className = "control";
			add_location(div28, file, 80, 20, 3042);
			div29.className = "field";
			add_location(div29, file, 79, 16, 3002);
			div30.className = "field-body";
			add_location(div30, file, 78, 12, 2961);
			div31.className = "field is-horizontal";
			add_location(div31, file, 74, 8, 2790);
			div32.className = "field-label";
			add_location(div32, file, 88, 12, 3278);
			input9.name = "agree";
			attr(input9, "type", "checkbox");
			add_location(input9, file, 92, 45, 3470);
			label9.className = "radio";
			add_location(label9, file, 92, 24, 3449);
			div33.className = "control";
			add_location(div33, file, 91, 20, 3403);
			div34.className = "field";
			add_location(div34, file, 90, 16, 3363);
			div35.className = "field-body";
			add_location(div35, file, 89, 12, 3322);
			div36.className = "field is-horizontal";
			add_location(div36, file, 87, 8, 3232);
			div37.className = "field-label";
			add_location(div37, file, 99, 12, 3692);
			button.className = "button is-primary";
			add_location(button, file, 103, 24, 3863);
			div38.className = "control";
			add_location(div38, file, 102, 20, 3817);
			div39.className = "field";
			add_location(div39, file, 101, 16, 3777);
			div40.className = "field-body";
			add_location(div40, file, 100, 12, 3736);
			div41.className = "field is-horizontal";
			add_location(div41, file, 98, 8, 3646);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 38);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div6);
			append(div6, div0);
			append(div0, label0);
			append(label0, t0);
			append(div6, t1);
			append(div6, div5);
			append(div5, div2);
			append(div2, div1);
			append(div1, input0);
			append(div5, t2);
			append(div5, div4);
			append(div4, div3);
			append(div3, input1);
			append(form, t3);
			append(form, div11);
			append(div11, div7);
			append(div7, label1);
			append(label1, t4);
			append(div11, t5);
			append(div11, div10);
			append(div10, div9);
			append(div9, div8);
			append(div8, input2);
			append(form, t6);
			append(form, div16);
			append(div16, div12);
			append(div12, label2);
			append(label2, t7);
			append(div16, t8);
			append(div16, div15);
			append(div15, div14);
			append(div14, div13);
			append(div13, input3);
			append(form, t9);
			append(form, div21);
			append(div21, div17);
			append(div17, label3);
			append(label3, t10);
			append(div21, t11);
			append(div21, div20);
			append(div20, div19);
			append(div19, div18);
			append(div18, input4);
			append(form, t12);
			append(form, div26);
			append(div26, div22);
			append(div22, label4);
			append(label4, t13);
			append(div26, t14);
			append(div26, div25);
			append(div25, div24);
			append(div24, div23);
			append(div23, label5);
			append(label5, input5);
			append(label5, t15);
			append(div23, t16);
			append(div23, label6);
			append(label6, input6);
			append(label6, t17);
			append(div23, t18);
			append(div23, label7);
			append(label7, input7);
			append(label7, t19);
			append(form, t20);
			append(form, div31);
			append(div31, div27);
			append(div27, label8);
			append(div31, t21);
			append(div31, div30);
			append(div30, div29);
			append(div29, div28);
			append(div28, input8);
			append(form, t22);
			append(form, div36);
			append(div36, div32);
			append(div36, t23);
			append(div36, div35);
			append(div35, div34);
			append(div34, div33);
			append(div33, label9);
			append(label9, input9);
			append(label9, t24);
			append(form, t25);
			append(form, div41);
			append(div41, div37);
			append(div41, t26);
			append(div41, div40);
			append(div40, div39);
			append(div39, div38);
			append(div38, button);
			append(button, t27);
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

	var bulmalayout = new BulmaLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bulmalayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bulmalayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bulmalayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bulmalayout_changes = {};
			if (changed.onLoaded) bulmalayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) bulmalayout_changes.$$scope = { changed, ctx };
			bulmalayout.$set(bulmalayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bulmalayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bulmalayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bulmalayout.$destroy(detaching);
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
            bulma: new Bulma(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/bulma',
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

class Bulma_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bulma_1;

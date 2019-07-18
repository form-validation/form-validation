import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name</div>
                <div class="fl w-75">
                    <div class="fl w-100">
                        <div class="fl w-50">
                            <input type="text" name="firstName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                        </div>
                        <div class="fl w-50">
                            <input type="text" name="lastName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Username</div>
                <div class="fl w-50">
                    <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email</div>
                <div class="fl w-50">
                    <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <input type="password" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Gender</div>
                <div class="fl w-50">
                    <label for="genderMale" class="lh-copy mr4">
                        <input class="mr2" type="radio" name="gender" id="genderMale" value="male" /> Male
                    </label>
                    <label for="genderFemale" class="lh-copy mr4">
                        <input class="mr2" type="radio" name="gender" id="genderFemale" value="female" /> Female
                    </label>
                    <label for="genderOther" class="lh-copy">
                        <input class="mr2" type="radio" name="gender" id="genderOther" value="other" /> Other
                    </label>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"><div id="captchaOperation"></div></div>
                <div class="fl w-50">
                    <input type="text" name="captcha" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <label class="lh-copy">
                        <input class="mr2" type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions
                    </label>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

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
            tachyons: new FormValidation.plugins.Tachyons(),
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

/* src/routes/download/register/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div6, div5, div0, t0, t1, div4, div3, div1, input0, t2, div2, input1, t3, div10, div9, div7, t4, t5, div8, input2, t6, div14, div13, div11, t7, t8, div12, input3, t9, div18, div17, div15, t10, t11, div16, input4, t12, div22, div21, div19, t13, t14, div20, label0, input5, t15, t16, label1, input6, t17, t18, label2, input7, t19, t20, div27, div26, div24, div23, t21, div25, input8, t22, div31, div30, div28, t23, div29, label3, input9, t24, t25, div35, div34, div32, t26, div33, button, t27;

	return {
		c: function create() {
			form = element("form");
			div6 = element("div");
			div5 = element("div");
			div0 = element("div");
			t0 = text("Full name");
			t1 = space();
			div4 = element("div");
			div3 = element("div");
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div10 = element("div");
			div9 = element("div");
			div7 = element("div");
			t4 = text("Username");
			t5 = space();
			div8 = element("div");
			input2 = element("input");
			t6 = space();
			div14 = element("div");
			div13 = element("div");
			div11 = element("div");
			t7 = text("Email");
			t8 = space();
			div12 = element("div");
			input3 = element("input");
			t9 = space();
			div18 = element("div");
			div17 = element("div");
			div15 = element("div");
			t10 = text("Password");
			t11 = space();
			div16 = element("div");
			input4 = element("input");
			t12 = space();
			div22 = element("div");
			div21 = element("div");
			div19 = element("div");
			t13 = text("Gender");
			t14 = space();
			div20 = element("div");
			label0 = element("label");
			input5 = element("input");
			t15 = text(" Male");
			t16 = space();
			label1 = element("label");
			input6 = element("input");
			t17 = text(" Female");
			t18 = space();
			label2 = element("label");
			input7 = element("input");
			t19 = text(" Other");
			t20 = space();
			div27 = element("div");
			div26 = element("div");
			div24 = element("div");
			div23 = element("div");
			t21 = space();
			div25 = element("div");
			input8 = element("input");
			t22 = space();
			div31 = element("div");
			div30 = element("div");
			div28 = element("div");
			t23 = space();
			div29 = element("div");
			label3 = element("label");
			input9 = element("input");
			t24 = text(" Agree with the terms and conditions");
			t25 = space();
			div35 = element("div");
			div34 = element("div");
			div32 = element("div");
			t26 = space();
			div33 = element("div");
			button = element("button");
			t27 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div0 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Full name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div5_nodes, "\n                ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n                        ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			t4 = claim_text(div7_nodes, "Username");
			div7_nodes.forEach(detach);
			t5 = claim_text(div9_nodes, "\n                ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input2 = claim_element(div8_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n        ");

			div14 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div11 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			t7 = claim_text(div11_nodes, "Email");
			div11_nodes.forEach(detach);
			t8 = claim_text(div13_nodes, "\n                ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			input3 = claim_element(div12_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div15 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			t10 = claim_text(div15_nodes, "Password");
			div15_nodes.forEach(detach);
			t11 = claim_text(div17_nodes, "\n                ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			input4 = claim_element(div16_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n        ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div19 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			t13 = claim_text(div19_nodes, "Gender");
			div19_nodes.forEach(detach);
			t14 = claim_text(div21_nodes, "\n                ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			label0 = claim_element(div20_nodes, "LABEL", { for: true, class: true }, false);
			var label0_nodes = children(label0);

			input5 = claim_element(label0_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(label0_nodes, " Male");
			label0_nodes.forEach(detach);
			t16 = claim_text(div20_nodes, "\n                    ");

			label1 = claim_element(div20_nodes, "LABEL", { for: true, class: true }, false);
			var label1_nodes = children(label1);

			input6 = claim_element(label1_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t17 = claim_text(label1_nodes, " Female");
			label1_nodes.forEach(detach);
			t18 = claim_text(div20_nodes, "\n                    ");

			label2 = claim_element(div20_nodes, "LABEL", { for: true, class: true }, false);
			var label2_nodes = children(label2);

			input7 = claim_element(label2_nodes, "INPUT", { class: true, type: true, name: true, id: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t19 = claim_text(label2_nodes, " Other");
			label2_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			t20 = claim_text(form_nodes, "\n        ");

			div27 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			div26 = claim_element(div27_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div24 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div23 = claim_element(div24_nodes, "DIV", { id: true }, false);
			var div23_nodes = children(div23);

			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			t21 = claim_text(div26_nodes, "\n                ");

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			input8 = claim_element(div25_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n        ");

			div31 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div31_nodes = children(div31);

			div30 = claim_element(div31_nodes, "DIV", { class: true }, false);
			var div30_nodes = children(div30);

			div28 = claim_element(div30_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			div28_nodes.forEach(detach);
			t23 = claim_text(div30_nodes, "\n                ");

			div29 = claim_element(div30_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			label3 = claim_element(div29_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input9 = claim_element(label3_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t24 = claim_text(label3_nodes, " Agree with the terms and conditions");
			label3_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			div30_nodes.forEach(detach);
			div31_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n        ");

			div35 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div35_nodes = children(div35);

			div34 = claim_element(div35_nodes, "DIV", { class: true }, false);
			var div34_nodes = children(div34);

			div32 = claim_element(div34_nodes, "DIV", { class: true }, false);
			var div32_nodes = children(div32);

			div32_nodes.forEach(detach);
			t26 = claim_text(div34_nodes, "\n                ");

			div33 = claim_element(div34_nodes, "DIV", { class: true }, false);
			var div33_nodes = children(div33);

			button = claim_element(div33_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t27 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div33_nodes.forEach(detach);
			div34_nodes.forEach(detach);
			div35_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.name = "firstName";
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input0, file, 8, 28, 332);
			div1.className = "fl w-50";
			add_location(div1, file, 7, 24, 282);
			attr(input1, "type", "text");
			input1.name = "lastName";
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input1, file, 11, 28, 528);
			div2.className = "fl w-50";
			add_location(div2, file, 10, 24, 478);
			div3.className = "fl w-100";
			add_location(div3, file, 6, 20, 235);
			div4.className = "fl w-75";
			add_location(div4, file, 5, 16, 193);
			div5.className = "fl w-100";
			add_location(div5, file, 3, 12, 97);
			div6.className = "cf mb2";
			add_location(div6, file, 2, 8, 64);
			div7.className = "fl w-25 pa2";
			add_location(div7, file, 19, 16, 813);
			attr(input2, "type", "text");
			input2.name = "username";
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input2, file, 21, 20, 911);
			div8.className = "fl w-50";
			add_location(div8, file, 20, 16, 869);
			div9.className = "fl w-100";
			add_location(div9, file, 18, 12, 774);
			div10.className = "cf mb2";
			add_location(div10, file, 17, 8, 741);
			div11.className = "fl w-25 pa2";
			add_location(div11, file, 27, 16, 1138);
			attr(input3, "type", "text");
			input3.name = "email";
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input3, file, 29, 20, 1233);
			div12.className = "fl w-50";
			add_location(div12, file, 28, 16, 1191);
			div13.className = "fl w-100";
			add_location(div13, file, 26, 12, 1099);
			div14.className = "cf mb2";
			add_location(div14, file, 25, 8, 1066);
			div15.className = "fl w-25 pa2";
			add_location(div15, file, 35, 16, 1457);
			attr(input4, "type", "password");
			input4.name = "password";
			input4.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input4, file, 37, 20, 1555);
			div16.className = "fl w-50";
			add_location(div16, file, 36, 16, 1513);
			div17.className = "fl w-100";
			add_location(div17, file, 34, 12, 1418);
			div18.className = "cf mb2";
			add_location(div18, file, 33, 8, 1385);
			div19.className = "fl w-25 pa2";
			add_location(div19, file, 43, 16, 1786);
			input5.className = "mr2";
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.id = "genderMale";
			input5.value = "male";
			add_location(input5, file, 45, 64, 1926);
			label0.htmlFor = "genderMale";
			label0.className = "lh-copy mr4";
			add_location(label0, file, 45, 20, 1882);
			input6.className = "mr2";
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.id = "genderFemale";
			input6.value = "female";
			add_location(input6, file, 46, 66, 2083);
			label1.htmlFor = "genderFemale";
			label1.className = "lh-copy mr4";
			add_location(label1, file, 46, 20, 2037);
			input7.className = "mr2";
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.id = "genderOther";
			input7.value = "other";
			add_location(input7, file, 47, 61, 2241);
			label2.htmlFor = "genderOther";
			label2.className = "lh-copy";
			add_location(label2, file, 47, 20, 2200);
			div20.className = "fl w-50";
			add_location(div20, file, 44, 16, 1840);
			div21.className = "fl w-100";
			add_location(div21, file, 42, 12, 1747);
			div22.className = "cf mb2";
			add_location(div22, file, 41, 8, 1714);
			div23.id = "captchaOperation";
			add_location(div23, file, 53, 41, 2497);
			div24.className = "fl w-25 pa2";
			add_location(div24, file, 53, 16, 2472);
			attr(input8, "type", "text");
			input8.name = "captcha";
			input8.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input8, file, 55, 20, 2595);
			div25.className = "fl w-50";
			add_location(div25, file, 54, 16, 2553);
			div26.className = "fl w-100";
			add_location(div26, file, 52, 12, 2433);
			div27.className = "cf mb2";
			add_location(div27, file, 51, 8, 2400);
			div28.className = "fl w-25 pa2";
			add_location(div28, file, 61, 16, 2821);
			input9.className = "mr2";
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 63, 43, 2934);
			label3.className = "lh-copy";
			add_location(label3, file, 63, 20, 2911);
			div29.className = "fl w-50";
			add_location(div29, file, 62, 16, 2869);
			div30.className = "fl w-100";
			add_location(div30, file, 60, 12, 2782);
			div31.className = "cf mb2";
			add_location(div31, file, 59, 8, 2749);
			div32.className = "fl w-25 pa2";
			add_location(div32, file, 69, 16, 3180);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 71, 20, 3270);
			div33.className = "fl w-50";
			add_location(div33, file, 70, 16, 3228);
			div34.className = "fl w-100";
			add_location(div34, file, 68, 12, 3141);
			div35.className = "cf mb2";
			add_location(div35, file, 67, 8, 3108);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div6);
			append(div6, div5);
			append(div5, div0);
			append(div0, t0);
			append(div5, t1);
			append(div5, div4);
			append(div4, div3);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div10);
			append(div10, div9);
			append(div9, div7);
			append(div7, t4);
			append(div9, t5);
			append(div9, div8);
			append(div8, input2);
			append(form, t6);
			append(form, div14);
			append(div14, div13);
			append(div13, div11);
			append(div11, t7);
			append(div13, t8);
			append(div13, div12);
			append(div12, input3);
			append(form, t9);
			append(form, div18);
			append(div18, div17);
			append(div17, div15);
			append(div15, t10);
			append(div17, t11);
			append(div17, div16);
			append(div16, input4);
			append(form, t12);
			append(form, div22);
			append(div22, div21);
			append(div21, div19);
			append(div19, t13);
			append(div21, t14);
			append(div21, div20);
			append(div20, label0);
			append(label0, input5);
			append(label0, t15);
			append(div20, t16);
			append(div20, label1);
			append(label1, input6);
			append(label1, t17);
			append(div20, t18);
			append(div20, label2);
			append(label2, input7);
			append(label2, t19);
			append(form, t20);
			append(form, div27);
			append(div27, div26);
			append(div26, div24);
			append(div24, div23);
			append(div26, t21);
			append(div26, div25);
			append(div25, input8);
			append(form, t22);
			append(form, div31);
			append(div31, div30);
			append(div30, div28);
			append(div30, t23);
			append(div30, div29);
			append(div29, label3);
			append(label3, input9);
			append(label3, t24);
			append(form, t25);
			append(form, div35);
			append(div35, div34);
			append(div34, div32);
			append(div34, t26);
			append(div34, div33);
			append(div33, button);
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

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self) {
	

onMount(() => {
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
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
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/tachyons',
                sampleCode: sampleCode,
            }),
        }
    });
});

	return {};
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;

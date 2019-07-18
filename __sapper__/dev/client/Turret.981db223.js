import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as TurretLayout, b as Turret } from './chunk.efe31d6e.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/5.1.3/turretcss.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post" class="fv-stacked-form">
        <div class="field">
            <label>First name</label>
            <input type="text" name="firstName" />
        </div>

        <div class="field">
            <label>Last name</label>
            <input type="text" name="lastName" />
        </div>

        <div class="field">
            <label>Username</label>
            <input type="text" name="username" />
        </div>

        <div class="field">
            <label>Email</label>
            <input type="text" name="email" />
        </div>

        <div class="field">
            <label>Password</label>
            <input type="password" name="password" />
        </div>

        <div class="field">
            <label>Gender</label>
            <div>
                <label class="control radio">
                    <input type="radio" name="gender" value="male" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Male</span>
                </label>
                <label class="control radio">
                    <input type="radio" name="gender" value="female" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Female</span>
                </label>
                <label class="control radio">
                    <input type="radio" name="gender" value="other" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Other</span>
                </label>
            </div>
        </div>

        <div class="field">
            <label id="captchaOperation"></label>
            <input type="text" name="captcha" />
        </div>

        <div class="field">
            <label class="control checkbox">
                <input type="checkbox" name="agree" value="agree" />
                <span class="control-indicator"></span>
                <span class="control-label">Agree with the terms and conditions</span>
            </label>
        </div>

        <div class="field">
            <button type="submit" class="button button-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Turret.min.js"></script-tag>

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
            turret: new FormValidation.plugins.Turret(),
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

/* src/routes/download/register/Turret.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Turret.svelte";

// (1:0) <TurretLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div0, label0, t0, t1, input0, t2, div1, label1, t3, t4, input1, t5, div2, label2, t6, t7, input2, t8, div3, label3, t9, t10, input3, t11, div4, label4, t12, t13, input4, t14, div6, label5, t15, t16, div5, label6, input5, t17, span0, t18, span1, t19, t20, label7, input6, t21, span2, t22, span3, t23, t24, label8, input7, t25, span4, t26, span5, t27, t28, div7, label9, t29, input8, t30, div8, label10, input9, t31, span6, t32, span7, t33, t34, div9, button, t35;

	return {
		c: function create() {
			form = element("form");
			div0 = element("div");
			label0 = element("label");
			t0 = text("First name");
			t1 = space();
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			label1 = element("label");
			t3 = text("Last name");
			t4 = space();
			input1 = element("input");
			t5 = space();
			div2 = element("div");
			label2 = element("label");
			t6 = text("Username");
			t7 = space();
			input2 = element("input");
			t8 = space();
			div3 = element("div");
			label3 = element("label");
			t9 = text("Email");
			t10 = space();
			input3 = element("input");
			t11 = space();
			div4 = element("div");
			label4 = element("label");
			t12 = text("Password");
			t13 = space();
			input4 = element("input");
			t14 = space();
			div6 = element("div");
			label5 = element("label");
			t15 = text("Gender");
			t16 = space();
			div5 = element("div");
			label6 = element("label");
			input5 = element("input");
			t17 = space();
			span0 = element("span");
			t18 = space();
			span1 = element("span");
			t19 = text("Male");
			t20 = space();
			label7 = element("label");
			input6 = element("input");
			t21 = space();
			span2 = element("span");
			t22 = space();
			span3 = element("span");
			t23 = text("Female");
			t24 = space();
			label8 = element("label");
			input7 = element("input");
			t25 = space();
			span4 = element("span");
			t26 = space();
			span5 = element("span");
			t27 = text("Other");
			t28 = space();
			div7 = element("div");
			label9 = element("label");
			t29 = space();
			input8 = element("input");
			t30 = space();
			div8 = element("div");
			label10 = element("label");
			input9 = element("input");
			t31 = space();
			span6 = element("span");
			t32 = space();
			span7 = element("span");
			t33 = text("Agree with the terms and conditions");
			t34 = space();
			div9 = element("div");
			button = element("button");
			t35 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, class: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "First name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n            ");

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label1 = claim_element(div1_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Last name");
			label1_nodes.forEach(detach);
			t4 = claim_text(div1_nodes, "\n            ");

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label2 = claim_element(div2_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Username");
			label2_nodes.forEach(detach);
			t7 = claim_text(div2_nodes, "\n            ");

			input2 = claim_element(div2_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label3 = claim_element(div3_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t9 = claim_text(label3_nodes, "Email");
			label3_nodes.forEach(detach);
			t10 = claim_text(div3_nodes, "\n            ");

			input3 = claim_element(div3_nodes, "INPUT", { type: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t11 = claim_text(form_nodes, "\n\n        ");

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label4 = claim_element(div4_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "Password");
			label4_nodes.forEach(detach);
			t13 = claim_text(div4_nodes, "\n            ");

			input4 = claim_element(div4_nodes, "INPUT", { type: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t14 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label5 = claim_element(div6_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "Gender");
			label5_nodes.forEach(detach);
			t16 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", {}, false);
			var div5_nodes = children(div5);

			label6 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input5 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(label6_nodes, "\n                    ");

			span0 = claim_element(label6_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			span0_nodes.forEach(detach);
			t18 = claim_text(label6_nodes, "\n                    ");

			span1 = claim_element(label6_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t19 = claim_text(span1_nodes, "Male");
			span1_nodes.forEach(detach);
			label6_nodes.forEach(detach);
			t20 = claim_text(div5_nodes, "\n                ");

			label7 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			input6 = claim_element(label7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t21 = claim_text(label7_nodes, "\n                    ");

			span2 = claim_element(label7_nodes, "SPAN", { class: true }, false);
			var span2_nodes = children(span2);

			span2_nodes.forEach(detach);
			t22 = claim_text(label7_nodes, "\n                    ");

			span3 = claim_element(label7_nodes, "SPAN", { class: true }, false);
			var span3_nodes = children(span3);

			t23 = claim_text(span3_nodes, "Female");
			span3_nodes.forEach(detach);
			label7_nodes.forEach(detach);
			t24 = claim_text(div5_nodes, "\n                ");

			label8 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			input7 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t25 = claim_text(label8_nodes, "\n                    ");

			span4 = claim_element(label8_nodes, "SPAN", { class: true }, false);
			var span4_nodes = children(span4);

			span4_nodes.forEach(detach);
			t26 = claim_text(label8_nodes, "\n                    ");

			span5 = claim_element(label8_nodes, "SPAN", { class: true }, false);
			var span5_nodes = children(span5);

			t27 = claim_text(span5_nodes, "Other");
			span5_nodes.forEach(detach);
			label8_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t28 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label9 = claim_element(div7_nodes, "LABEL", { id: true }, false);
			var label9_nodes = children(label9);

			label9_nodes.forEach(detach);
			t29 = claim_text(div7_nodes, "\n            ");

			input8 = claim_element(div7_nodes, "INPUT", { type: true, name: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t30 = claim_text(form_nodes, "\n\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label10 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label10_nodes = children(label10);

			input9 = claim_element(label10_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t31 = claim_text(label10_nodes, "\n                ");

			span6 = claim_element(label10_nodes, "SPAN", { class: true }, false);
			var span6_nodes = children(span6);

			span6_nodes.forEach(detach);
			t32 = claim_text(label10_nodes, "\n                ");

			span7 = claim_element(label10_nodes, "SPAN", { class: true }, false);
			var span7_nodes = children(span7);

			t33 = claim_text(span7_nodes, "Agree with the terms and conditions");
			span7_nodes.forEach(detach);
			label10_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t34 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			button = claim_element(div9_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t35 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 3, 12, 138);
			attr(input0, "type", "text");
			input0.name = "firstName";
			add_location(input0, file, 4, 12, 176);
			div0.className = "field";
			add_location(div0, file, 2, 8, 106);
			add_location(label1, file, 8, 12, 271);
			attr(input1, "type", "text");
			input1.name = "lastName";
			add_location(input1, file, 9, 12, 308);
			div1.className = "field";
			add_location(div1, file, 7, 8, 239);
			add_location(label2, file, 13, 12, 402);
			attr(input2, "type", "text");
			input2.name = "username";
			add_location(input2, file, 14, 12, 438);
			div2.className = "field";
			add_location(div2, file, 12, 8, 370);
			add_location(label3, file, 18, 12, 532);
			attr(input3, "type", "text");
			input3.name = "email";
			add_location(input3, file, 19, 12, 565);
			div3.className = "field";
			add_location(div3, file, 17, 8, 500);
			add_location(label4, file, 23, 12, 656);
			attr(input4, "type", "password");
			input4.name = "password";
			add_location(input4, file, 24, 12, 692);
			div4.className = "field";
			add_location(div4, file, 22, 8, 624);
			add_location(label5, file, 28, 12, 790);
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 31, 20, 896);
			span0.className = "control-indicator";
			add_location(span0, file, 32, 20, 966);
			span1.className = "control-label";
			add_location(span1, file, 33, 20, 1026);
			label6.className = "control radio";
			add_location(label6, file, 30, 16, 846);
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 36, 20, 1157);
			span2.className = "control-indicator";
			add_location(span2, file, 37, 20, 1229);
			span3.className = "control-label";
			add_location(span3, file, 38, 20, 1289);
			label7.className = "control radio";
			add_location(label7, file, 35, 16, 1107);
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 41, 20, 1422);
			span4.className = "control-indicator";
			add_location(span4, file, 42, 20, 1493);
			span5.className = "control-label";
			add_location(span5, file, 43, 20, 1553);
			label8.className = "control radio";
			add_location(label8, file, 40, 16, 1372);
			add_location(div5, file, 29, 12, 824);
			div6.className = "field";
			add_location(div6, file, 27, 8, 758);
			label9.id = "captchaOperation";
			add_location(label9, file, 49, 12, 1694);
			attr(input8, "type", "text");
			input8.name = "captcha";
			add_location(input8, file, 50, 12, 1744);
			div7.className = "field";
			add_location(div7, file, 48, 8, 1662);
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 55, 16, 1886);
			span6.className = "control-indicator";
			add_location(span6, file, 56, 16, 1955);
			span7.className = "control-label";
			add_location(span7, file, 57, 16, 2011);
			label10.className = "control checkbox";
			add_location(label10, file, 54, 12, 1837);
			div8.className = "field";
			add_location(div8, file, 53, 8, 1805);
			button.type = "submit";
			button.className = "button button-primary";
			add_location(button, file, 62, 12, 2159);
			div9.className = "field";
			add_location(div9, file, 61, 8, 2127);
			form.id = "demoForm";
			form.method = "post";
			form.className = "fv-stacked-form";
			add_location(form, file, 1, 4, 39);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div0);
			append(div0, label0);
			append(label0, t0);
			append(div0, t1);
			append(div0, input0);
			append(form, t2);
			append(form, div1);
			append(div1, label1);
			append(label1, t3);
			append(div1, t4);
			append(div1, input1);
			append(form, t5);
			append(form, div2);
			append(div2, label2);
			append(label2, t6);
			append(div2, t7);
			append(div2, input2);
			append(form, t8);
			append(form, div3);
			append(div3, label3);
			append(label3, t9);
			append(div3, t10);
			append(div3, input3);
			append(form, t11);
			append(form, div4);
			append(div4, label4);
			append(label4, t12);
			append(div4, t13);
			append(div4, input4);
			append(form, t14);
			append(form, div6);
			append(div6, label5);
			append(label5, t15);
			append(div6, t16);
			append(div6, div5);
			append(div5, label6);
			append(label6, input5);
			append(label6, t17);
			append(label6, span0);
			append(label6, t18);
			append(label6, span1);
			append(span1, t19);
			append(div5, t20);
			append(div5, label7);
			append(label7, input6);
			append(label7, t21);
			append(label7, span2);
			append(label7, t22);
			append(label7, span3);
			append(span3, t23);
			append(div5, t24);
			append(div5, label8);
			append(label8, input7);
			append(label8, t25);
			append(label8, span4);
			append(label8, t26);
			append(label8, span5);
			append(span5, t27);
			append(form, t28);
			append(form, div7);
			append(div7, label9);
			append(div7, t29);
			append(div7, input8);
			append(form, t30);
			append(form, div8);
			append(div8, label10);
			append(label10, input9);
			append(label10, t31);
			append(label10, span6);
			append(label10, t32);
			append(label10, span7);
			append(span7, t33);
			append(form, t34);
			append(form, div9);
			append(div9, button);
			append(button, t35);
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

	var turretlayout = new TurretLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			turretlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			turretlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(turretlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var turretlayout_changes = {};
			if (changed.onLoaded) turretlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) turretlayout_changes.$$scope = { changed, ctx };
			turretlayout.$set(turretlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			turretlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			turretlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			turretlayout.$destroy(detaching);
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
            turret: new Turret(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/turret',
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

class Turret_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Turret_1;

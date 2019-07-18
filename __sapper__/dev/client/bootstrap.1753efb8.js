import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as ResourceLoader } from './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Full name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="firstName" placeholder="First name" />
            </div>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="username" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Email address</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="email" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-5">
                <input type="password" class="form-control" name="password" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Gender</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="male" />
                    <label class="form-check-label">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="female" />
                    <label class="form-check-label">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="other" />
                    <label class="form-check-label">Other</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#termsModal">Agree with the terms and conditions</button>
                <input type="hidden" name="agree" value="no" />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Submit</button>
            </div>
        </div>
    </form>

    <!-- Terms and conditions modal -->
    <div class="modal fade" id="termsModal" tabindex="-1" role="dialog" aria-labelledby="Terms and conditions" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Terms and conditions</h3>
                </div>

                <div class="modal-body" style="max-height: 200px;">
                    <p>Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.</p>
                    <p>Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.</p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="agreeButton" data-dismiss="modal">Agree</button>
                    <button type="button" class="btn btn-default" id="disagreeButton" data-dismiss="modal">Disagree</button>
                </div>
            </div>
        </div>
    </div>

<!-- For Bootstrap modal -->
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script-tag>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const demoForm = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(demoForm, {
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
            agree: {
                validators: {
                    callback: {
                        message: 'You must agree with the terms and conditions',
                        callback: function(input) {
                            return input.value === 'yes';
                        }
                    }
                }
            },
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    });

    // Update the value of "agree" input when clicking the Agree/Disagree button
    const agreeInput = demoForm.querySelector('[name="agree"]');
    document.getElementById('agreeButton').addEventListener('click', () => {
        agreeInput.value = 'yes';
        fv.revalidateField('agree');
    });

    document.getElementById('disagreeButton').addEventListener('click', () => {
        agreeInput.value = 'no';
        fv.revalidateField('agree');
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/terms-and-conditions-agreement-validation/modal/bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/terms-and-conditions-agreement-validation/modal/bootstrap.svelte";

// (2:4) <ResourceLoader urls={[         'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',         'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js',         'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js',     ]} onLoaded={onLoaded}>
function create_default_slot_1(ctx) {
	var form_1, div2, label0, t0, t1, div0, input0, t2, div1, input1, t3, div4, label1, t4, t5, div3, input2, t6, div6, label2, t7, t8, div5, input3, t9, div8, label3, t10, t11, div7, input4, t12, div13, label4, t13, t14, div12, div9, input5, t15, label5, t16, t17, div10, input6, t18, label6, t19, t20, div11, input7, t21, label7, t22, t23, div15, div14, button0, t24, t25, input8, t26, div17, div16, button1, t27, t28, div23, div22, div21, div18, h3, t29, t30, div19, p0, t31, t32, p1, t33, t34, div20, button2, t35, t36, button3, t37;

	return {
		c: function create() {
			form_1 = element("form");
			div2 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			input1 = element("input");
			t3 = space();
			div4 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			div3 = element("div");
			input2 = element("input");
			t6 = space();
			div6 = element("div");
			label2 = element("label");
			t7 = text("Email address");
			t8 = space();
			div5 = element("div");
			input3 = element("input");
			t9 = space();
			div8 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			div7 = element("div");
			input4 = element("input");
			t12 = space();
			div13 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div12 = element("div");
			div9 = element("div");
			input5 = element("input");
			t15 = space();
			label5 = element("label");
			t16 = text("Male");
			t17 = space();
			div10 = element("div");
			input6 = element("input");
			t18 = space();
			label6 = element("label");
			t19 = text("Female");
			t20 = space();
			div11 = element("div");
			input7 = element("input");
			t21 = space();
			label7 = element("label");
			t22 = text("Other");
			t23 = space();
			div15 = element("div");
			div14 = element("div");
			button0 = element("button");
			t24 = text("Agree with the terms and conditions");
			t25 = space();
			input8 = element("input");
			t26 = space();
			div17 = element("div");
			div16 = element("div");
			button1 = element("button");
			t27 = text("Submit");
			t28 = space();
			div23 = element("div");
			div22 = element("div");
			div21 = element("div");
			div18 = element("div");
			h3 = element("h3");
			t29 = text("Terms and conditions");
			t30 = space();
			div19 = element("div");
			p0 = element("p");
			t31 = text("Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.");
			t32 = space();
			p1 = element("p");
			t33 = text("Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.");
			t34 = space();
			div20 = element("div");
			button2 = element("button");
			t35 = text("Agree");
			t36 = space();
			button3 = element("button");
			t37 = text("Disagree");
			this.h();
		},

		l: function claim(nodes) {
			form_1 = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_1_nodes = children(form_1);

			div2 = claim_element(form_1_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label0 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t3 = claim_text(form_1_nodes, "\n        \n            ");

			div4 = claim_element(form_1_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			t5 = claim_text(div4_nodes, "\n                ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t6 = claim_text(form_1_nodes, "\n        \n            ");

			div6 = claim_element(form_1_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			label2 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email address");
			label2_nodes.forEach(detach);
			t8 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input3 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t9 = claim_text(form_1_nodes, "\n        \n            ");

			div8 = claim_element(form_1_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label3 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			t11 = claim_text(div8_nodes, "\n                ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input4 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t12 = claim_text(form_1_nodes, "\n        \n            ");

			div13 = claim_element(form_1_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label4 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			t14 = claim_text(div13_nodes, "\n                ");

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div9 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input5 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(div9_nodes, "\n                        ");

			label5 = claim_element(div9_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t16 = claim_text(label5_nodes, "Male");
			label5_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t17 = claim_text(div12_nodes, "\n                    ");

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			input6 = claim_element(div10_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t18 = claim_text(div10_nodes, "\n                        ");

			label6 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t19 = claim_text(label6_nodes, "Female");
			label6_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t20 = claim_text(div12_nodes, "\n                    ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input7 = claim_element(div11_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t21 = claim_text(div11_nodes, "\n                        ");

			label7 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t22 = claim_text(label7_nodes, "Other");
			label7_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t23 = claim_text(form_1_nodes, "\n        \n            ");

			div15 = claim_element(form_1_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			button0 = claim_element(div14_nodes, "BUTTON", { type: true, class: true, "data-toggle": true, "data-target": true }, false);
			var button0_nodes = children(button0);

			t24 = claim_text(button0_nodes, "Agree with the terms and conditions");
			button0_nodes.forEach(detach);
			t25 = claim_text(div14_nodes, "\n                    ");

			input8 = claim_element(div14_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t26 = claim_text(form_1_nodes, "\n        \n            ");

			div17 = claim_element(form_1_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			button1 = claim_element(div16_nodes, "BUTTON", { type: true, class: true, name: true, value: true }, false);
			var button1_nodes = children(button1);

			t27 = claim_text(button1_nodes, "Submit");
			button1_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			form_1_nodes.forEach(detach);
			t28 = claim_text(nodes, "\n\n        \n        ");

			div23 = claim_element(nodes, "DIV", { class: true, id: true, tabindex: true, role: true, "aria-labelledby": true, "aria-hidden": true }, false);
			var div23_nodes = children(div23);

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div18 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			h3 = claim_element(div18_nodes, "H3", { class: true }, false);
			var h3_nodes = children(h3);

			t29 = claim_text(h3_nodes, "Terms and conditions");
			h3_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t30 = claim_text(div21_nodes, "\n\n                    ");

			div19 = claim_element(div21_nodes, "DIV", { class: true, style: true }, false);
			var div19_nodes = children(div19);

			p0 = claim_element(div19_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t31 = claim_text(p0_nodes, "Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.");
			p0_nodes.forEach(detach);
			t32 = claim_text(div19_nodes, "\n                        ");

			p1 = claim_element(div19_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t33 = claim_text(p1_nodes, "Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.");
			p1_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t34 = claim_text(div21_nodes, "\n\n                    ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			button2 = claim_element(div20_nodes, "BUTTON", { type: true, class: true, id: true, "data-dismiss": true }, false);
			var button2_nodes = children(button2);

			t35 = claim_text(button2_nodes, "Agree");
			button2_nodes.forEach(detach);
			t36 = claim_text(div20_nodes, "\n                        ");

			button3 = claim_element(div20_nodes, "BUTTON", { type: true, class: true, id: true, "data-dismiss": true }, false);
			var button3_nodes = children(button3);

			t37 = claim_text(button3_nodes, "Disagree");
			button3_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-3 col-form-label";
			add_location(label0, file, 8, 16, 430);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 10, 20, 546);
			div0.className = "col-sm-4";
			add_location(div0, file, 9, 16, 503);
			attr(input1, "type", "text");
			input1.className = "form-control";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 13, 20, 713);
			div1.className = "col-sm-4";
			add_location(div1, file, 12, 16, 670);
			div2.className = "form-group row";
			add_location(div2, file, 7, 12, 385);
			label1.className = "col-sm-3 col-form-label";
			add_location(label1, file, 18, 16, 904);
			attr(input2, "type", "text");
			input2.className = "form-control";
			input2.name = "username";
			add_location(input2, file, 20, 20, 1019);
			div3.className = "col-sm-5";
			add_location(div3, file, 19, 16, 976);
			div4.className = "form-group row";
			add_location(div4, file, 17, 12, 859);
			label2.className = "col-sm-3 col-form-label";
			add_location(label2, file, 25, 16, 1186);
			attr(input3, "type", "text");
			input3.className = "form-control";
			input3.name = "email";
			add_location(input3, file, 27, 20, 1306);
			div5.className = "col-sm-5";
			add_location(div5, file, 26, 16, 1263);
			div6.className = "form-group row";
			add_location(div6, file, 24, 12, 1141);
			label3.className = "col-sm-3 col-form-label";
			add_location(label3, file, 32, 16, 1470);
			attr(input4, "type", "password");
			input4.className = "form-control";
			input4.name = "password";
			add_location(input4, file, 34, 20, 1585);
			div7.className = "col-sm-5";
			add_location(div7, file, 33, 16, 1542);
			div8.className = "form-group row";
			add_location(div8, file, 31, 12, 1425);
			label4.className = "col-sm-3 col-form-label";
			add_location(label4, file, 39, 16, 1756);
			attr(input5, "type", "radio");
			input5.className = "form-check-input";
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 42, 24, 1936);
			label5.className = "form-check-label";
			add_location(label5, file, 43, 24, 2035);
			div9.className = "form-check form-check-inline";
			add_location(div9, file, 41, 20, 1869);
			attr(input6, "type", "radio");
			input6.className = "form-check-input";
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 46, 24, 2194);
			label6.className = "form-check-label";
			add_location(label6, file, 47, 24, 2295);
			div10.className = "form-check form-check-inline";
			add_location(div10, file, 45, 20, 2127);
			attr(input7, "type", "radio");
			input7.className = "form-check-input";
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 50, 24, 2456);
			label7.className = "form-check-label";
			add_location(label7, file, 51, 24, 2556);
			div11.className = "form-check form-check-inline";
			add_location(div11, file, 49, 20, 2389);
			div12.className = "col-sm-6";
			add_location(div12, file, 40, 16, 1826);
			div13.className = "form-group row";
			add_location(div13, file, 38, 12, 1711);
			button0.type = "button";
			button0.className = "btn btn-secondary";
			button0.dataset.toggle = "modal";
			button0.dataset.target = "#termsModal";
			add_location(button0, file, 58, 20, 2792);
			attr(input8, "type", "hidden");
			input8.name = "agree";
			input8.value = "no";
			add_location(input8, file, 59, 20, 2951);
			div14.className = "col-sm-9 offset-sm-3";
			add_location(div14, file, 57, 16, 2737);
			div15.className = "form-group row";
			add_location(div15, file, 56, 12, 2692);
			button1.type = "submit";
			button1.className = "btn btn-primary";
			button1.name = "signup";
			button1.value = "Sign up";
			add_location(button1, file, 65, 20, 3162);
			div16.className = "col-sm-9 offset-sm-3";
			add_location(div16, file, 64, 16, 3107);
			div17.className = "form-group row";
			add_location(div17, file, 63, 12, 3062);
			form_1.id = "demoForm";
			form_1.method = "POST";
			add_location(form_1, file, 6, 8, 338);
			h3.className = "modal-title";
			add_location(h3, file, 75, 24, 3670);
			div18.className = "modal-header";
			add_location(div18, file, 74, 20, 3619);
			add_location(p0, file, 79, 24, 3844);
			add_location(p1, file, 80, 24, 4211);
			div19.className = "modal-body";
			set_style(div19, "max-height", "200px");
			add_location(div19, file, 78, 20, 3768);
			button2.type = "button";
			button2.className = "btn btn-primary";
			button2.id = "agreeButton";
			button2.dataset.dismiss = "modal";
			add_location(button2, file, 84, 24, 4604);
			button3.type = "button";
			button3.className = "btn btn-default";
			button3.id = "disagreeButton";
			button3.dataset.dismiss = "modal";
			add_location(button3, file, 85, 24, 4727);
			div20.className = "modal-footer";
			add_location(div20, file, 83, 20, 4553);
			div21.className = "modal-content";
			add_location(div21, file, 73, 16, 3571);
			div22.className = "modal-dialog modal-dialog-scrollable";
			add_location(div22, file, 72, 12, 3504);
			div23.className = "modal fade";
			div23.id = "termsModal";
			div23.tabIndex = "-1";
			attr(div23, "role", "dialog");
			attr(div23, "aria-labelledby", "Terms and conditions");
			attr(div23, "aria-hidden", "true");
			add_location(div23, file, 71, 8, 3365);
		},

		m: function mount(target, anchor) {
			insert(target, form_1, anchor);
			append(form_1, div2);
			append(div2, label0);
			append(label0, t0);
			append(div2, t1);
			append(div2, div0);
			append(div0, input0);
			append(div2, t2);
			append(div2, div1);
			append(div1, input1);
			append(form_1, t3);
			append(form_1, div4);
			append(div4, label1);
			append(label1, t4);
			append(div4, t5);
			append(div4, div3);
			append(div3, input2);
			append(form_1, t6);
			append(form_1, div6);
			append(div6, label2);
			append(label2, t7);
			append(div6, t8);
			append(div6, div5);
			append(div5, input3);
			append(form_1, t9);
			append(form_1, div8);
			append(div8, label3);
			append(label3, t10);
			append(div8, t11);
			append(div8, div7);
			append(div7, input4);
			append(form_1, t12);
			append(form_1, div13);
			append(div13, label4);
			append(label4, t13);
			append(div13, t14);
			append(div13, div12);
			append(div12, div9);
			append(div9, input5);
			append(div9, t15);
			append(div9, label5);
			append(label5, t16);
			append(div12, t17);
			append(div12, div10);
			append(div10, input6);
			append(div10, t18);
			append(div10, label6);
			append(label6, t19);
			append(div12, t20);
			append(div12, div11);
			append(div11, input7);
			append(div11, t21);
			append(div11, label7);
			append(label7, t22);
			append(form_1, t23);
			append(form_1, div15);
			append(div15, div14);
			append(div14, button0);
			append(button0, t24);
			append(div14, t25);
			append(div14, input8);
			append(form_1, t26);
			append(form_1, div17);
			append(div17, div16);
			append(div16, button1);
			append(button1, t27);
			insert(target, t28, anchor);
			insert(target, div23, anchor);
			append(div23, div22);
			append(div22, div21);
			append(div21, div18);
			append(div18, h3);
			append(h3, t29);
			append(div21, t30);
			append(div21, div19);
			append(div19, p0);
			append(p0, t31);
			append(div19, t32);
			append(div19, p1);
			append(p1, t33);
			append(div21, t34);
			append(div21, div20);
			append(div20, button2);
			append(button2, t35);
			append(div20, t36);
			append(div20, button3);
			append(button3, t37);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form_1);
				detach(t28);
				detach(div23);
			}
		}
	};
}

// (1:0) <BootstrapLayout>
function create_default_slot(ctx) {
	var current;

	var resourceloader = new ResourceLoader({
		props: {
		urls: [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js',
    ],
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			resourceloader.$$.fragment.c();
		},

		l: function claim(nodes) {
			resourceloader.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(resourceloader, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var resourceloader_changes = {};
			if (changed.onLoaded) resourceloader_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) resourceloader_changes.$$scope = { changed, ctx };
			resourceloader.$set(resourceloader_changes);
		},

		i: function intro(local) {
			if (current) return;
			resourceloader.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			resourceloader.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			resourceloader.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var bootstraplayout = new BootstrapLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstraplayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstraplayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstraplayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstraplayout_changes = {};
			if (changed.$$scope) bootstraplayout_changes.$$scope = { changed, ctx };
			bootstraplayout.$set(bootstraplayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstraplayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstraplayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstraplayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    const demoForm = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(demoForm, {
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
            agree: {
                validators: {
                    callback: {
                        message: 'You must agree with the terms and conditions',
                        callback: function(input) {
                            return input.value === 'yes';
                        }
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/terms-and-conditions-agreement-validation/modal/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }));

    // Update the value of "agree" input when clicking the Agree/Disagree button
    const agreeInput = demoForm.querySelector('[name="agree"]');
    document.getElementById('agreeButton').addEventListener('click', () => {
        agreeInput.value = 'yes';
        fv.revalidateField('agree');
    });

    document.getElementById('disagreeButton').addEventListener('click', () => {
        agreeInput.value = 'no';
        fv.revalidateField('agree');
    });
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Bootstrap_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap_1;

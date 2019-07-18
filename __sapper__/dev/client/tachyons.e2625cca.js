import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
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
    <form id="demoForm" method="POST">
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
                    <label for="genderMale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderMale" value="male" /> Male</label>
                    <label for="genderFemale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderFemale" value="female" /> Female</label>
                    <label for="genderOther" class="lh-copy"><input class="mr2" type="radio" name="gender" id="genderOther" value="other" /> Other</label>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Terms of use</div>
                <div class="fl w-75">
                    <div class="ba b--black-20 br2 ph3" style="height: 200px; overflow-y: scroll;">
                        <p class="lh-copy">Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.</p>
                        <p class="lh-copy">Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.</p>
                        <p class="lh-copy">Mea ea nonumy labores lobortis, duo quaestio antiopam inimicus et. Ea natum solet iisque quo, prodesset mnesarchum ne vim. Sonet detraxit temporibus no has. Omnium blandit in vim, mea at omnium oblique.</p>
                        <p class="lh-copy">Eum ea quidam oportere imperdiet, facer oportere vituperatoribus eu vix, mea ei iisque legendos hendrerit. Blandit comprehensam eu his, ad eros veniam ridens eum. Id odio lobortis elaboraret pro. Vix te fabulas partiendo.</p>
                        <p class="lh-copy">Natum oportere et qui, vis graeco tincidunt instructior an, autem elitr noster per et. Mea eu mundi qualisque. Quo nemore nusquam vituperata et, mea ut abhorreant deseruisse, cu nostrud postulant dissentias qui. Postea tincidunt vel eu.</p>
                        <p class="lh-copy">Ad eos alia inermis nominavi, eum nibh docendi definitionem no. Ius eu stet mucius nonumes, no mea facilis philosophia necessitatibus. Te eam vidit iisque legendos, vero meliore deserunt ius ea. An qui inimicus inciderint.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-75">
                    <label class="lh-copy"><input class="mr2" type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions</label>
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
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            },
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
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

/* src/routes/guide/examples/terms-and-conditions-agreement-validation/basic/tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/terms-and-conditions-agreement-validation/basic/tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div6, div5, div0, t0, t1, div4, div3, div1, input0, t2, div2, input1, t3, div10, div9, div7, t4, t5, div8, input2, t6, div14, div13, div11, t7, t8, div12, input3, t9, div18, div17, div15, t10, t11, div16, input4, t12, div22, div21, div19, t13, t14, div20, label0, input5, t15, t16, label1, input6, t17, t18, label2, input7, t19, t20, div27, div26, div23, t21, t22, div25, div24, p0, t23, t24, p1, t25, t26, p2, t27, t28, p3, t29, t30, p4, t31, t32, p5, t33, t34, div31, div30, div28, t35, div29, label3, input8, t36, t37, div35, div34, div32, t38, div33, button, t39;

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
			div23 = element("div");
			t21 = text("Terms of use");
			t22 = space();
			div25 = element("div");
			div24 = element("div");
			p0 = element("p");
			t23 = text("Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.");
			t24 = space();
			p1 = element("p");
			t25 = text("Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.");
			t26 = space();
			p2 = element("p");
			t27 = text("Mea ea nonumy labores lobortis, duo quaestio antiopam inimicus et. Ea natum solet iisque quo, prodesset mnesarchum ne vim. Sonet detraxit temporibus no has. Omnium blandit in vim, mea at omnium oblique.");
			t28 = space();
			p3 = element("p");
			t29 = text("Eum ea quidam oportere imperdiet, facer oportere vituperatoribus eu vix, mea ei iisque legendos hendrerit. Blandit comprehensam eu his, ad eros veniam ridens eum. Id odio lobortis elaboraret pro. Vix te fabulas partiendo.");
			t30 = space();
			p4 = element("p");
			t31 = text("Natum oportere et qui, vis graeco tincidunt instructior an, autem elitr noster per et. Mea eu mundi qualisque. Quo nemore nusquam vituperata et, mea ut abhorreant deseruisse, cu nostrud postulant dissentias qui. Postea tincidunt vel eu.");
			t32 = space();
			p5 = element("p");
			t33 = text("Ad eos alia inermis nominavi, eum nibh docendi definitionem no. Ius eu stet mucius nonumes, no mea facilis philosophia necessitatibus. Te eam vidit iisque legendos, vero meliore deserunt ius ea. An qui inimicus inciderint.");
			t34 = space();
			div31 = element("div");
			div30 = element("div");
			div28 = element("div");
			t35 = space();
			div29 = element("div");
			label3 = element("label");
			input8 = element("input");
			t36 = text(" Agree with the terms and conditions");
			t37 = space();
			div35 = element("div");
			div34 = element("div");
			div32 = element("div");
			t38 = space();
			div33 = element("div");
			button = element("button");
			t39 = text("Submit");
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

			div23 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			t21 = claim_text(div23_nodes, "Terms of use");
			div23_nodes.forEach(detach);
			t22 = claim_text(div26_nodes, "\n                ");

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div24 = claim_element(div25_nodes, "DIV", { class: true, style: true }, false);
			var div24_nodes = children(div24);

			p0 = claim_element(div24_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t23 = claim_text(p0_nodes, "Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.");
			p0_nodes.forEach(detach);
			t24 = claim_text(div24_nodes, "\n                        ");

			p1 = claim_element(div24_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t25 = claim_text(p1_nodes, "Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.");
			p1_nodes.forEach(detach);
			t26 = claim_text(div24_nodes, "\n                        ");

			p2 = claim_element(div24_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t27 = claim_text(p2_nodes, "Mea ea nonumy labores lobortis, duo quaestio antiopam inimicus et. Ea natum solet iisque quo, prodesset mnesarchum ne vim. Sonet detraxit temporibus no has. Omnium blandit in vim, mea at omnium oblique.");
			p2_nodes.forEach(detach);
			t28 = claim_text(div24_nodes, "\n                        ");

			p3 = claim_element(div24_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t29 = claim_text(p3_nodes, "Eum ea quidam oportere imperdiet, facer oportere vituperatoribus eu vix, mea ei iisque legendos hendrerit. Blandit comprehensam eu his, ad eros veniam ridens eum. Id odio lobortis elaboraret pro. Vix te fabulas partiendo.");
			p3_nodes.forEach(detach);
			t30 = claim_text(div24_nodes, "\n                        ");

			p4 = claim_element(div24_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t31 = claim_text(p4_nodes, "Natum oportere et qui, vis graeco tincidunt instructior an, autem elitr noster per et. Mea eu mundi qualisque. Quo nemore nusquam vituperata et, mea ut abhorreant deseruisse, cu nostrud postulant dissentias qui. Postea tincidunt vel eu.");
			p4_nodes.forEach(detach);
			t32 = claim_text(div24_nodes, "\n                        ");

			p5 = claim_element(div24_nodes, "P", { class: true }, false);
			var p5_nodes = children(p5);

			t33 = claim_text(p5_nodes, "Ad eos alia inermis nominavi, eum nibh docendi definitionem no. Ius eu stet mucius nonumes, no mea facilis philosophia necessitatibus. Te eam vidit iisque legendos, vero meliore deserunt ius ea. An qui inimicus inciderint.");
			p5_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			t34 = claim_text(form_nodes, "\n        ");

			div31 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div31_nodes = children(div31);

			div30 = claim_element(div31_nodes, "DIV", { class: true }, false);
			var div30_nodes = children(div30);

			div28 = claim_element(div30_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			div28_nodes.forEach(detach);
			t35 = claim_text(div30_nodes, "\n                ");

			div29 = claim_element(div30_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			label3 = claim_element(div29_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input8 = claim_element(label3_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			t36 = claim_text(label3_nodes, " Agree with the terms and conditions");
			label3_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			div30_nodes.forEach(detach);
			div31_nodes.forEach(detach);
			t37 = claim_text(form_nodes, "\n        ");

			div35 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div35_nodes = children(div35);

			div34 = claim_element(div35_nodes, "DIV", { class: true }, false);
			var div34_nodes = children(div34);

			div32 = claim_element(div34_nodes, "DIV", { class: true }, false);
			var div32_nodes = children(div32);

			div32_nodes.forEach(detach);
			t38 = claim_text(div34_nodes, "\n                ");

			div33 = claim_element(div34_nodes, "DIV", { class: true }, false);
			var div33_nodes = children(div33);

			button = claim_element(div33_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t39 = claim_text(button_nodes, "Submit");
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
			div23.className = "fl w-25 pa2";
			add_location(div23, file, 53, 16, 2472);
			p0.className = "lh-copy";
			add_location(p0, file, 56, 24, 2678);
			p1.className = "lh-copy";
			add_location(p1, file, 57, 24, 3061);
			p2.className = "lh-copy";
			add_location(p2, file, 58, 24, 3395);
			p3.className = "lh-copy";
			add_location(p3, file, 59, 24, 3645);
			p4.className = "lh-copy";
			add_location(p4, file, 60, 24, 3914);
			p5.className = "lh-copy";
			add_location(p5, file, 61, 24, 4198);
			div24.className = "ba b--black-20 br2 ph3";
			set_style(div24, "height", "200px");
			set_style(div24, "overflow-y", "scroll");
			add_location(div24, file, 55, 20, 2574);
			div25.className = "fl w-75";
			add_location(div25, file, 54, 16, 2532);
			div26.className = "fl w-100";
			add_location(div26, file, 52, 12, 2433);
			div27.className = "cf mb2";
			add_location(div27, file, 51, 8, 2400);
			div28.className = "fl w-25 pa2";
			add_location(div28, file, 68, 16, 4608);
			input8.className = "mr2";
			attr(input8, "type", "checkbox");
			input8.name = "agree";
			input8.value = "agree";
			add_location(input8, file, 70, 43, 4721);
			label3.className = "lh-copy";
			add_location(label3, file, 70, 20, 4698);
			div29.className = "fl w-75";
			add_location(div29, file, 69, 16, 4656);
			div30.className = "fl w-100";
			add_location(div30, file, 67, 12, 4569);
			div31.className = "cf mb2";
			add_location(div31, file, 66, 8, 4536);
			div32.className = "fl w-25 pa2";
			add_location(div32, file, 76, 16, 4967);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 78, 20, 5057);
			div33.className = "fl w-50";
			add_location(div33, file, 77, 16, 5015);
			div34.className = "fl w-100";
			add_location(div34, file, 75, 12, 4928);
			div35.className = "cf mb2";
			add_location(div35, file, 74, 8, 4895);
			form.id = "demoForm";
			form.method = "POST";
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
			append(div26, div23);
			append(div23, t21);
			append(div26, t22);
			append(div26, div25);
			append(div25, div24);
			append(div24, p0);
			append(p0, t23);
			append(div24, t24);
			append(div24, p1);
			append(p1, t25);
			append(div24, t26);
			append(div24, p2);
			append(p2, t27);
			append(div24, t28);
			append(div24, p3);
			append(p3, t29);
			append(div24, t30);
			append(div24, p4);
			append(p4, t31);
			append(div24, t32);
			append(div24, p5);
			append(p5, t33);
			append(form, t34);
			append(form, div31);
			append(div31, div30);
			append(div30, div28);
			append(div30, t35);
			append(div30, div29);
			append(div29, label3);
			append(label3, input8);
			append(label3, t36);
			append(form, t37);
			append(form, div35);
			append(div35, div34);
			append(div34, div32);
			append(div34, t38);
			append(div34, div33);
			append(div33, button);
			append(button, t39);
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
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/terms-and-conditions-agreement-validation/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
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

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
    <style>
    .fv-plugins-bootstrap .form-group.row.selectContainer .fv-plugins-icon {
        right: -20px;
    }
    .fv-plugins-message-container {
        display: none;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Bug title</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" name="title" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-6">
                <textarea class="form-control" name="description" rows="8"></textarea>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Operating system</label>
            <div class="col-sm-9">
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="os" value="window" />
                    <label class="form-check-label">Window</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="os" value="centos" />
                    <label class="form-check-label">Centos</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="os" value="fedora" />
                    <label class="form-check-label">Fedora</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="os" value="ubuntu" />
                    <label class="form-check-label">Ubuntu</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="os" value="macos" />
                    <label class="form-check-label">macOS</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Browser(s)</label>
            <div class="col-sm-9">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="browser[]" value="ie" />
                    <label class="form-check-label">IE</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="browser[]" value="chrome" />
                    <label class="form-check-label">Chrome</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="browser[]" value="firefox" />
                    <label class="form-check-label">Firefox</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="browser[]" value="safari" />
                    <label class="form-check-label">Safari</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="browser[]" value="opera" />
                    <label class="form-check-label">Opera</label>
                </div>
            </div>
        </div>

        <div class="form-group row selectContainer">
            <label class="col-sm-3 col-form-label">Priority</label>
            <div class="col-sm-4">
                <select class="form-control" name="priority">
                    <option value="">Choose the priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Report issue</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The title is required'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'The abstract is required'
                        }
                    }
                },
                os: {
                    validators: {
                        notEmpty: {
                            message: 'The operating system is required'
                        }
                    }
                },
                'browser[]': {
                    validators: {
                        notEmpty: {
                            message: 'Choose at least one browser'
                        }
                    }
                },
                priority: {
                    validators: {
                        notEmpty: {
                            message: 'The priority is required'
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
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/hiding-messages/overriding-css/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/hiding-messages/overriding-css/Bootstrap.svelte";

// (10:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div1, label0, t0, t1, div0, input0, t2, div3, label1, t3, t4, div2, textarea, t5, div10, label2, t6, t7, div9, div4, input1, t8, label3, t9, t10, div5, input2, t11, label4, t12, t13, div6, input3, t14, label5, t15, t16, div7, input4, t17, label6, t18, t19, div8, input5, t20, label7, t21, t22, div17, label8, t23, t24, div16, div11, input6, t25, label9, t26, t27, div12, input7, t28, label10, t29, t30, div13, input8, t31, label11, t32, t33, div14, input9, t34, label12, t35, t36, div15, input10, t37, label13, t38, t39, div19, label14, t40, t41, div18, select, option0, t42, option1, t43, option2, t44, option3, t45, t46, div21, div20, button, t47;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			t0 = text("Bug title");
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			label1 = element("label");
			t3 = text("Description");
			t4 = space();
			div2 = element("div");
			textarea = element("textarea");
			t5 = space();
			div10 = element("div");
			label2 = element("label");
			t6 = text("Operating system");
			t7 = space();
			div9 = element("div");
			div4 = element("div");
			input1 = element("input");
			t8 = space();
			label3 = element("label");
			t9 = text("Window");
			t10 = space();
			div5 = element("div");
			input2 = element("input");
			t11 = space();
			label4 = element("label");
			t12 = text("Centos");
			t13 = space();
			div6 = element("div");
			input3 = element("input");
			t14 = space();
			label5 = element("label");
			t15 = text("Fedora");
			t16 = space();
			div7 = element("div");
			input4 = element("input");
			t17 = space();
			label6 = element("label");
			t18 = text("Ubuntu");
			t19 = space();
			div8 = element("div");
			input5 = element("input");
			t20 = space();
			label7 = element("label");
			t21 = text("macOS");
			t22 = space();
			div17 = element("div");
			label8 = element("label");
			t23 = text("Browser(s)");
			t24 = space();
			div16 = element("div");
			div11 = element("div");
			input6 = element("input");
			t25 = space();
			label9 = element("label");
			t26 = text("IE");
			t27 = space();
			div12 = element("div");
			input7 = element("input");
			t28 = space();
			label10 = element("label");
			t29 = text("Chrome");
			t30 = space();
			div13 = element("div");
			input8 = element("input");
			t31 = space();
			label11 = element("label");
			t32 = text("Firefox");
			t33 = space();
			div14 = element("div");
			input9 = element("input");
			t34 = space();
			label12 = element("label");
			t35 = text("Safari");
			t36 = space();
			div15 = element("div");
			input10 = element("input");
			t37 = space();
			label13 = element("label");
			t38 = text("Opera");
			t39 = space();
			div19 = element("div");
			label14 = element("label");
			t40 = text("Priority");
			t41 = space();
			div18 = element("div");
			select = element("select");
			option0 = element("option");
			t42 = text("Choose the priority");
			option1 = element("option");
			t43 = text("Low");
			option2 = element("option");
			t44 = text("Medium");
			option3 = element("option");
			t45 = text("High");
			t46 = space();
			div21 = element("div");
			div20 = element("div");
			button = element("button");
			t47 = text("Report issue");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Bug title");
			label0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n            ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Description");
			label1_nodes.forEach(detach);
			t4 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			textarea = claim_element(div2_nodes, "TEXTAREA", { class: true, name: true, rows: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label2 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Operating system");
			label2_nodes.forEach(detach);
			t7 = claim_text(div10_nodes, "\n            ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div4 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input1 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t8 = claim_text(div4_nodes, "\n                    ");

			label3 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t9 = claim_text(label3_nodes, "Window");
			label3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t10 = claim_text(div9_nodes, "\n                ");

			div5 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t11 = claim_text(div5_nodes, "\n                    ");

			label4 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "Centos");
			label4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t13 = claim_text(div9_nodes, "\n                ");

			div6 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input3 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t14 = claim_text(div6_nodes, "\n                    ");

			label5 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "Fedora");
			label5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t16 = claim_text(div9_nodes, "\n                ");

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input4 = claim_element(div7_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t17 = claim_text(div7_nodes, "\n                    ");

			label6 = claim_element(div7_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t18 = claim_text(label6_nodes, "Ubuntu");
			label6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t19 = claim_text(div9_nodes, "\n                ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input5 = claim_element(div8_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t20 = claim_text(div8_nodes, "\n                    ");

			label7 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t21 = claim_text(label7_nodes, "macOS");
			label7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n    \n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			label8 = claim_element(div17_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			t23 = claim_text(label8_nodes, "Browser(s)");
			label8_nodes.forEach(detach);
			t24 = claim_text(div17_nodes, "\n            ");

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div11 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input6 = claim_element(div11_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t25 = claim_text(div11_nodes, "\n                    ");

			label9 = claim_element(div11_nodes, "LABEL", { class: true }, false);
			var label9_nodes = children(label9);

			t26 = claim_text(label9_nodes, "IE");
			label9_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t27 = claim_text(div16_nodes, "\n                ");

			div12 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			input7 = claim_element(div12_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t28 = claim_text(div12_nodes, "\n                    ");

			label10 = claim_element(div12_nodes, "LABEL", { class: true }, false);
			var label10_nodes = children(label10);

			t29 = claim_text(label10_nodes, "Chrome");
			label10_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t30 = claim_text(div16_nodes, "\n                ");

			div13 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			input8 = claim_element(div13_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			t31 = claim_text(div13_nodes, "\n                    ");

			label11 = claim_element(div13_nodes, "LABEL", { class: true }, false);
			var label11_nodes = children(label11);

			t32 = claim_text(label11_nodes, "Firefox");
			label11_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t33 = claim_text(div16_nodes, "\n                ");

			div14 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			input9 = claim_element(div14_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t34 = claim_text(div14_nodes, "\n                    ");

			label12 = claim_element(div14_nodes, "LABEL", { class: true }, false);
			var label12_nodes = children(label12);

			t35 = claim_text(label12_nodes, "Safari");
			label12_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t36 = claim_text(div16_nodes, "\n                ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			input10 = claim_element(div15_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input10_nodes = children(input10);

			input10_nodes.forEach(detach);
			t37 = claim_text(div15_nodes, "\n                    ");

			label13 = claim_element(div15_nodes, "LABEL", { class: true }, false);
			var label13_nodes = children(label13);

			t38 = claim_text(label13_nodes, "Opera");
			label13_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			t39 = claim_text(form_nodes, "\n    \n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			label14 = claim_element(div19_nodes, "LABEL", { class: true }, false);
			var label14_nodes = children(label14);

			t40 = claim_text(label14_nodes, "Priority");
			label14_nodes.forEach(detach);
			t41 = claim_text(div19_nodes, "\n            ");

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			select = claim_element(div18_nodes, "SELECT", { class: true, name: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t42 = claim_text(option0_nodes, "Choose the priority");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t43 = claim_text(option1_nodes, "Low");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t44 = claim_text(option2_nodes, "Medium");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t45 = claim_text(option3_nodes, "High");
			option3_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t46 = claim_text(form_nodes, "\n    \n        ");

			div21 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			button = claim_element(div20_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t47 = claim_text(button_nodes, "Report issue");
			button_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-3 col-form-label";
			add_location(label0, file, 12, 12, 308);
			attr(input0, "type", "text");
			input0.className = "form-control";
			input0.name = "title";
			add_location(input0, file, 14, 16, 416);
			div0.className = "col-sm-6";
			add_location(div0, file, 13, 12, 377);
			div1.className = "form-group row";
			add_location(div1, file, 11, 8, 267);
			label1.className = "col-sm-3 col-form-label";
			add_location(label1, file, 19, 12, 560);
			textarea.className = "form-control";
			textarea.name = "description";
			textarea.rows = "8";
			add_location(textarea, file, 21, 16, 670);
			div2.className = "col-sm-6";
			add_location(div2, file, 20, 12, 631);
			div3.className = "form-group row";
			add_location(div3, file, 18, 8, 519);
			label2.className = "col-sm-3 col-form-label";
			add_location(label2, file, 26, 12, 829);
			attr(input1, "type", "radio");
			input1.className = "form-check-input";
			input1.name = "os";
			input1.value = "window";
			add_location(input1, file, 29, 20, 1007);
			label3.className = "form-check-label";
			add_location(label3, file, 30, 20, 1100);
			div4.className = "form-check form-check-inline";
			add_location(div4, file, 28, 16, 944);
			attr(input2, "type", "radio");
			input2.className = "form-check-input";
			input2.name = "os";
			input2.value = "centos";
			add_location(input2, file, 33, 20, 1249);
			label4.className = "form-check-label";
			add_location(label4, file, 34, 20, 1342);
			div5.className = "form-check form-check-inline";
			add_location(div5, file, 32, 16, 1186);
			attr(input3, "type", "radio");
			input3.className = "form-check-input";
			input3.name = "os";
			input3.value = "fedora";
			add_location(input3, file, 37, 20, 1491);
			label5.className = "form-check-label";
			add_location(label5, file, 38, 20, 1584);
			div6.className = "form-check form-check-inline";
			add_location(div6, file, 36, 16, 1428);
			attr(input4, "type", "radio");
			input4.className = "form-check-input";
			input4.name = "os";
			input4.value = "ubuntu";
			add_location(input4, file, 41, 20, 1733);
			label6.className = "form-check-label";
			add_location(label6, file, 42, 20, 1826);
			div7.className = "form-check form-check-inline";
			add_location(div7, file, 40, 16, 1670);
			attr(input5, "type", "radio");
			input5.className = "form-check-input";
			input5.name = "os";
			input5.value = "macos";
			add_location(input5, file, 45, 20, 1975);
			label7.className = "form-check-label";
			add_location(label7, file, 46, 20, 2067);
			div8.className = "form-check form-check-inline";
			add_location(div8, file, 44, 16, 1912);
			div9.className = "col-sm-9";
			add_location(div9, file, 27, 12, 905);
			div10.className = "form-group row";
			add_location(div10, file, 25, 8, 788);
			label8.className = "col-sm-3 col-form-label";
			add_location(label8, file, 52, 12, 2224);
			attr(input6, "type", "checkbox");
			input6.className = "form-check-input";
			input6.name = "browser[]";
			input6.value = "ie";
			add_location(input6, file, 55, 20, 2396);
			label9.className = "form-check-label";
			add_location(label9, file, 56, 20, 2495);
			div11.className = "form-check form-check-inline";
			add_location(div11, file, 54, 16, 2333);
			attr(input7, "type", "checkbox");
			input7.className = "form-check-input";
			input7.name = "browser[]";
			input7.value = "chrome";
			add_location(input7, file, 59, 20, 2640);
			label10.className = "form-check-label";
			add_location(label10, file, 60, 20, 2743);
			div12.className = "form-check form-check-inline";
			add_location(div12, file, 58, 16, 2577);
			attr(input8, "type", "checkbox");
			input8.className = "form-check-input";
			input8.name = "browser[]";
			input8.value = "firefox";
			add_location(input8, file, 63, 20, 2892);
			label11.className = "form-check-label";
			add_location(label11, file, 64, 20, 2996);
			div13.className = "form-check form-check-inline";
			add_location(div13, file, 62, 16, 2829);
			attr(input9, "type", "checkbox");
			input9.className = "form-check-input";
			input9.name = "browser[]";
			input9.value = "safari";
			add_location(input9, file, 67, 20, 3146);
			label12.className = "form-check-label";
			add_location(label12, file, 68, 20, 3249);
			div14.className = "form-check form-check-inline";
			add_location(div14, file, 66, 16, 3083);
			attr(input10, "type", "checkbox");
			input10.className = "form-check-input";
			input10.name = "browser[]";
			input10.value = "opera";
			add_location(input10, file, 71, 20, 3398);
			label13.className = "form-check-label";
			add_location(label13, file, 72, 20, 3500);
			div15.className = "form-check form-check-inline";
			add_location(div15, file, 70, 16, 3335);
			div16.className = "col-sm-9";
			add_location(div16, file, 53, 12, 2294);
			div17.className = "form-group row";
			add_location(div17, file, 51, 8, 2183);
			label14.className = "col-sm-3 col-form-label";
			add_location(label14, file, 78, 12, 3673);
			option0.__value = "";
			option0.value = option0.__value;
			add_location(option0, file, 81, 20, 3846);
			option1.__value = "low";
			option1.value = option1.__value;
			add_location(option1, file, 82, 20, 3912);
			option2.__value = "medium";
			option2.value = option2.__value;
			add_location(option2, file, 83, 20, 3965);
			option3.__value = "high";
			option3.value = option3.__value;
			add_location(option3, file, 84, 20, 4024);
			select.className = "form-control";
			select.name = "priority";
			add_location(select, file, 80, 16, 3780);
			div18.className = "col-sm-4";
			add_location(div18, file, 79, 12, 3741);
			div19.className = "form-group row selectContainer";
			add_location(div19, file, 77, 8, 3616);
			button.type = "submit";
			button.className = "btn btn-primary";
			add_location(button, file, 91, 16, 4224);
			div20.className = "col-sm-9 offset-sm-3";
			add_location(div20, file, 90, 12, 4173);
			div21.className = "form-group row";
			add_location(div21, file, 89, 8, 4132);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 10, 4, 224);
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
			append(label1, t3);
			append(div3, t4);
			append(div3, div2);
			append(div2, textarea);
			append(form, t5);
			append(form, div10);
			append(div10, label2);
			append(label2, t6);
			append(div10, t7);
			append(div10, div9);
			append(div9, div4);
			append(div4, input1);
			append(div4, t8);
			append(div4, label3);
			append(label3, t9);
			append(div9, t10);
			append(div9, div5);
			append(div5, input2);
			append(div5, t11);
			append(div5, label4);
			append(label4, t12);
			append(div9, t13);
			append(div9, div6);
			append(div6, input3);
			append(div6, t14);
			append(div6, label5);
			append(label5, t15);
			append(div9, t16);
			append(div9, div7);
			append(div7, input4);
			append(div7, t17);
			append(div7, label6);
			append(label6, t18);
			append(div9, t19);
			append(div9, div8);
			append(div8, input5);
			append(div8, t20);
			append(div8, label7);
			append(label7, t21);
			append(form, t22);
			append(form, div17);
			append(div17, label8);
			append(label8, t23);
			append(div17, t24);
			append(div17, div16);
			append(div16, div11);
			append(div11, input6);
			append(div11, t25);
			append(div11, label9);
			append(label9, t26);
			append(div16, t27);
			append(div16, div12);
			append(div12, input7);
			append(div12, t28);
			append(div12, label10);
			append(label10, t29);
			append(div16, t30);
			append(div16, div13);
			append(div13, input8);
			append(div13, t31);
			append(div13, label11);
			append(label11, t32);
			append(div16, t33);
			append(div16, div14);
			append(div14, input9);
			append(div14, t34);
			append(div14, label12);
			append(label12, t35);
			append(div16, t36);
			append(div16, div15);
			append(div15, input10);
			append(div15, t37);
			append(div15, label13);
			append(label13, t38);
			append(form, t39);
			append(form, div19);
			append(div19, label14);
			append(label14, t40);
			append(div19, t41);
			append(div19, div18);
			append(div18, select);
			append(select, option0);
			append(option0, t42);
			append(select, option1);
			append(option1, t43);
			append(select, option2);
			append(option2, t44);
			append(select, option3);
			append(option3, t45);
			append(form, t46);
			append(form, div21);
			append(div21, div20);
			append(div20, button);
			append(button, t47);
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

	var bootstraplayout = new BootstrapLayout({
		props: {
		onLoaded: ctx.onLoaded,
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
			if (changed.onLoaded) bootstraplayout_changes.onLoaded = ctx.onLoaded;
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
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            title: {
                validators: {
                    notEmpty: {
                        message: 'The title is required'
                    }
                }
            },
            description: {
                validators: {
                    notEmpty: {
                        message: 'The abstract is required'
                    }
                }
            },
            os: {
                validators: {
                    notEmpty: {
                        message: 'The operating system is required'
                    }
                }
            },
            'browser[]': {
                validators: {
                    notEmpty: {
                        message: 'Choose at least one browser'
                    }
                }
            },
            priority: {
                validators: {
                    notEmpty: {
                        message: 'The priority is required'
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
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/hiding-messages/overriding-css/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }));
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

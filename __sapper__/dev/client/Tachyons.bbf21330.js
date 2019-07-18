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
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Bug title</div>
                <div class="fl w-75">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="title" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Description</div>
                <div class="fl w-75">
                    <textarea class="input-reset ba b--black-20 pa2 mb2 db w-100" rows="5" name="description"></textarea>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Operating system</div>
                <div class="fl w-50">
                    <div class="mb2">
                        <label><input type="radio" name="os" value="window" /> Window</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="centos" /> Centos</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="fedora" /> Fedora</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="ubuntu" /> Ubuntu</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="macos" /> Mac OS X</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Browser(s)</div>
                <div class="fl w-50">
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="ie" /> IE</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="chrome" /> Chrome</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="firefox" /> Firefox</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="safari" /> Safari</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="opera" /> Opera</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Priority</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2" name="priority">
                        <option value="">Choose the priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Report issue</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

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
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    )
    .on('plugins.message.displayed', function(e) {
        // e.messageElement presents the error message element
        e.messageElement.style.display = 'none';
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/hiding-messages/event/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/hiding-messages/event/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, t4, div5, textarea, t5, div16, div15, div8, t6, t7, div14, div9, label0, input1, t8, t9, div10, label1, input2, t10, t11, div11, label2, input3, t12, t13, div12, label3, input4, t14, t15, div13, label4, input5, t16, t17, div25, div24, div17, t18, t19, div23, div18, label5, input6, t20, t21, div19, label6, input7, t22, t23, div20, label7, input8, t24, t25, div21, label8, input9, t26, t27, div22, label9, input10, t28, t29, div29, div28, div26, t30, t31, div27, select, option0, t32, option1, t33, option2, t34, option3, t35, t36, div33, div32, div30, t37, div31, button, t38;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Bug title");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = text("Description");
			t4 = space();
			div5 = element("div");
			textarea = element("textarea");
			t5 = space();
			div16 = element("div");
			div15 = element("div");
			div8 = element("div");
			t6 = text("Operating system");
			t7 = space();
			div14 = element("div");
			div9 = element("div");
			label0 = element("label");
			input1 = element("input");
			t8 = text(" Window");
			t9 = space();
			div10 = element("div");
			label1 = element("label");
			input2 = element("input");
			t10 = text(" Centos");
			t11 = space();
			div11 = element("div");
			label2 = element("label");
			input3 = element("input");
			t12 = text(" Fedora");
			t13 = space();
			div12 = element("div");
			label3 = element("label");
			input4 = element("input");
			t14 = text(" Ubuntu");
			t15 = space();
			div13 = element("div");
			label4 = element("label");
			input5 = element("input");
			t16 = text(" Mac OS X");
			t17 = space();
			div25 = element("div");
			div24 = element("div");
			div17 = element("div");
			t18 = text("Browser(s)");
			t19 = space();
			div23 = element("div");
			div18 = element("div");
			label5 = element("label");
			input6 = element("input");
			t20 = text(" IE");
			t21 = space();
			div19 = element("div");
			label6 = element("label");
			input7 = element("input");
			t22 = text(" Chrome");
			t23 = space();
			div20 = element("div");
			label7 = element("label");
			input8 = element("input");
			t24 = text(" Firefox");
			t25 = space();
			div21 = element("div");
			label8 = element("label");
			input9 = element("input");
			t26 = text(" Safari");
			t27 = space();
			div22 = element("div");
			label9 = element("label");
			input10 = element("input");
			t28 = text(" Opera");
			t29 = space();
			div29 = element("div");
			div28 = element("div");
			div26 = element("div");
			t30 = text("Priority");
			t31 = space();
			div27 = element("div");
			select = element("select");
			option0 = element("option");
			t32 = text("Choose the priority");
			option1 = element("option");
			t33 = text("Low");
			option2 = element("option");
			t34 = text("Medium");
			option3 = element("option");
			t35 = text("High");
			t36 = space();
			div33 = element("div");
			div32 = element("div");
			div30 = element("div");
			t37 = space();
			div31 = element("div");
			button = element("button");
			t38 = text("Report issue");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Bug title");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n    \n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Description");
			div4_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			textarea = claim_element(div5_nodes, "TEXTAREA", { class: true, rows: true, name: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n    \n        ");

			div16 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div8 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			t6 = claim_text(div8_nodes, "Operating system");
			div8_nodes.forEach(detach);
			t7 = claim_text(div15_nodes, "\n                ");

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div9 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			label0 = claim_element(div9_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input1 = claim_element(label0_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t8 = claim_text(label0_nodes, " Window");
			label0_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t9 = claim_text(div14_nodes, "\n                    ");

			div10 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label1 = claim_element(div10_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input2 = claim_element(label1_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t10 = claim_text(label1_nodes, " Centos");
			label1_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t11 = claim_text(div14_nodes, "\n                    ");

			div11 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			label2 = claim_element(div11_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			input3 = claim_element(label2_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t12 = claim_text(label2_nodes, " Fedora");
			label2_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t13 = claim_text(div14_nodes, "\n                    ");

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			label3 = claim_element(div12_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			input4 = claim_element(label3_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(label3_nodes, " Ubuntu");
			label3_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t15 = claim_text(div14_nodes, "\n                    ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label4 = claim_element(div13_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			input5 = claim_element(label4_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t16 = claim_text(label4_nodes, " Mac OS X");
			label4_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t17 = claim_text(form_nodes, "\n    \n        ");

			div25 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			div24 = claim_element(div25_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div17 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			t18 = claim_text(div17_nodes, "Browser(s)");
			div17_nodes.forEach(detach);
			t19 = claim_text(div24_nodes, "\n                ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			div18 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			label5 = claim_element(div18_nodes, "LABEL", {}, false);
			var label5_nodes = children(label5);

			input6 = claim_element(label5_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t20 = claim_text(label5_nodes, " IE");
			label5_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t21 = claim_text(div23_nodes, "\n                    ");

			div19 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			label6 = claim_element(div19_nodes, "LABEL", {}, false);
			var label6_nodes = children(label6);

			input7 = claim_element(label6_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t22 = claim_text(label6_nodes, " Chrome");
			label6_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t23 = claim_text(div23_nodes, "\n                    ");

			div20 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			label7 = claim_element(div20_nodes, "LABEL", {}, false);
			var label7_nodes = children(label7);

			input8 = claim_element(label7_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			t24 = claim_text(label7_nodes, " Firefox");
			label7_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			t25 = claim_text(div23_nodes, "\n                    ");

			div21 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			label8 = claim_element(div21_nodes, "LABEL", {}, false);
			var label8_nodes = children(label8);

			input9 = claim_element(label8_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t26 = claim_text(label8_nodes, " Safari");
			label8_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t27 = claim_text(div23_nodes, "\n                    ");

			div22 = claim_element(div23_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			label9 = claim_element(div22_nodes, "LABEL", {}, false);
			var label9_nodes = children(label9);

			input10 = claim_element(label9_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input10_nodes = children(input10);

			input10_nodes.forEach(detach);
			t28 = claim_text(label9_nodes, " Opera");
			label9_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			t29 = claim_text(form_nodes, "\n\n        ");

			div29 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div29_nodes = children(div29);

			div28 = claim_element(div29_nodes, "DIV", { class: true }, false);
			var div28_nodes = children(div28);

			div26 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			t30 = claim_text(div26_nodes, "Priority");
			div26_nodes.forEach(detach);
			t31 = claim_text(div28_nodes, "\n                ");

			div27 = claim_element(div28_nodes, "DIV", { class: true }, false);
			var div27_nodes = children(div27);

			select = claim_element(div27_nodes, "SELECT", { class: true, name: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t32 = claim_text(option0_nodes, "Choose the priority");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t33 = claim_text(option1_nodes, "Low");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t34 = claim_text(option2_nodes, "Medium");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t35 = claim_text(option3_nodes, "High");
			option3_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			div29_nodes.forEach(detach);
			t36 = claim_text(form_nodes, "\n\n        ");

			div33 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div33_nodes = children(div33);

			div32 = claim_element(div33_nodes, "DIV", { class: true }, false);
			var div32_nodes = children(div32);

			div30 = claim_element(div32_nodes, "DIV", { class: true }, false);
			var div30_nodes = children(div30);

			div30_nodes.forEach(detach);
			t37 = claim_text(div32_nodes, "\n                ");

			div31 = claim_element(div32_nodes, "DIV", { class: true }, false);
			var div31_nodes = children(div31);

			button = claim_element(div31_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t38 = claim_text(button_nodes, "Report issue");
			button_nodes.forEach(detach);
			div31_nodes.forEach(detach);
			div32_nodes.forEach(detach);
			div33_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "title";
			add_location(input0, file, 6, 20, 235);
			div1.className = "fl w-75";
			add_location(div1, file, 5, 16, 193);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 464);
			textarea.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			textarea.rows = "5";
			textarea.name = "description";
			add_location(textarea, file, 15, 20, 565);
			div5.className = "fl w-75";
			add_location(div5, file, 14, 16, 523);
			div6.className = "fl w-100";
			add_location(div6, file, 12, 12, 425);
			div7.className = "cf mb2";
			add_location(div7, file, 11, 8, 392);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 22, 16, 809);
			attr(input1, "type", "radio");
			input1.name = "os";
			input1.value = "window";
			add_location(input1, file, 25, 31, 964);
			add_location(label0, file, 25, 24, 957);
			div9.className = "mb2";
			add_location(div9, file, 24, 20, 915);
			attr(input2, "type", "radio");
			input2.name = "os";
			input2.value = "centos";
			add_location(input2, file, 28, 31, 1123);
			add_location(label1, file, 28, 24, 1116);
			div10.className = "mb2";
			add_location(div10, file, 27, 20, 1074);
			attr(input3, "type", "radio");
			input3.name = "os";
			input3.value = "fedora";
			add_location(input3, file, 31, 31, 1282);
			add_location(label2, file, 31, 24, 1275);
			div11.className = "mb2";
			add_location(div11, file, 30, 20, 1233);
			attr(input4, "type", "radio");
			input4.name = "os";
			input4.value = "ubuntu";
			add_location(input4, file, 34, 31, 1441);
			add_location(label3, file, 34, 24, 1434);
			div12.className = "mb2";
			add_location(div12, file, 33, 20, 1392);
			attr(input5, "type", "radio");
			input5.name = "os";
			input5.value = "macos";
			add_location(input5, file, 37, 31, 1600);
			add_location(label4, file, 37, 24, 1593);
			div13.className = "mb2";
			add_location(div13, file, 36, 20, 1551);
			div14.className = "fl w-50";
			add_location(div14, file, 23, 16, 873);
			div15.className = "fl w-100";
			add_location(div15, file, 21, 12, 770);
			div16.className = "cf mb2";
			add_location(div16, file, 20, 8, 737);
			div17.className = "fl w-25 pa2";
			add_location(div17, file, 45, 16, 1833);
			attr(input6, "type", "checkbox");
			input6.name = "browser[]";
			input6.value = "ie";
			add_location(input6, file, 48, 31, 1982);
			add_location(label5, file, 48, 24, 1975);
			div18.className = "mb2";
			add_location(div18, file, 47, 20, 1933);
			attr(input7, "type", "checkbox");
			input7.name = "browser[]";
			input7.value = "chrome";
			add_location(input7, file, 51, 31, 2143);
			add_location(label6, file, 51, 24, 2136);
			div19.className = "mb2";
			add_location(div19, file, 50, 20, 2094);
			attr(input8, "type", "checkbox");
			input8.name = "browser[]";
			input8.value = "firefox";
			add_location(input8, file, 54, 31, 2312);
			add_location(label7, file, 54, 24, 2305);
			div20.className = "mb2";
			add_location(div20, file, 53, 20, 2263);
			attr(input9, "type", "checkbox");
			input9.name = "browser[]";
			input9.value = "safari";
			add_location(input9, file, 57, 31, 2483);
			add_location(label8, file, 57, 24, 2476);
			div21.className = "mb2";
			add_location(div21, file, 56, 20, 2434);
			attr(input10, "type", "checkbox");
			input10.name = "browser[]";
			input10.value = "opera";
			add_location(input10, file, 60, 31, 2652);
			add_location(label9, file, 60, 24, 2645);
			div22.className = "mb2";
			add_location(div22, file, 59, 20, 2603);
			div23.className = "fl w-50";
			add_location(div23, file, 46, 16, 1891);
			div24.className = "fl w-100";
			add_location(div24, file, 44, 12, 1794);
			div25.className = "cf mb2";
			add_location(div25, file, 43, 8, 1761);
			div26.className = "fl w-25 pa2";
			add_location(div26, file, 68, 16, 2888);
			option0.__value = "";
			option0.value = option0.__value;
			add_location(option0, file, 71, 24, 3074);
			option1.__value = "low";
			option1.value = option1.__value;
			add_location(option1, file, 72, 24, 3144);
			option2.__value = "medium";
			option2.value = option2.__value;
			add_location(option2, file, 73, 24, 3201);
			option3.__value = "high";
			option3.value = option3.__value;
			add_location(option3, file, 74, 24, 3264);
			select.className = "input-reset ba b--black-20 pa2";
			select.name = "priority";
			add_location(select, file, 70, 20, 2986);
			div27.className = "fl w-50";
			add_location(div27, file, 69, 16, 2944);
			div28.className = "fl w-100";
			add_location(div28, file, 67, 12, 2849);
			div29.className = "cf mb2";
			add_location(div29, file, 66, 8, 2816);
			div30.className = "fl w-25 pa2";
			add_location(div30, file, 82, 16, 3467);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 84, 20, 3557);
			div31.className = "fl w-50";
			add_location(div31, file, 83, 16, 3515);
			div32.className = "fl w-100";
			add_location(div32, file, 81, 12, 3428);
			div33.className = "cf mb2";
			add_location(div33, file, 80, 8, 3395);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, textarea);
			append(form, t5);
			append(form, div16);
			append(div16, div15);
			append(div15, div8);
			append(div8, t6);
			append(div15, t7);
			append(div15, div14);
			append(div14, div9);
			append(div9, label0);
			append(label0, input1);
			append(label0, t8);
			append(div14, t9);
			append(div14, div10);
			append(div10, label1);
			append(label1, input2);
			append(label1, t10);
			append(div14, t11);
			append(div14, div11);
			append(div11, label2);
			append(label2, input3);
			append(label2, t12);
			append(div14, t13);
			append(div14, div12);
			append(div12, label3);
			append(label3, input4);
			append(label3, t14);
			append(div14, t15);
			append(div14, div13);
			append(div13, label4);
			append(label4, input5);
			append(label4, t16);
			append(form, t17);
			append(form, div25);
			append(div25, div24);
			append(div24, div17);
			append(div17, t18);
			append(div24, t19);
			append(div24, div23);
			append(div23, div18);
			append(div18, label5);
			append(label5, input6);
			append(label5, t20);
			append(div23, t21);
			append(div23, div19);
			append(div19, label6);
			append(label6, input7);
			append(label6, t22);
			append(div23, t23);
			append(div23, div20);
			append(div20, label7);
			append(label7, input8);
			append(label7, t24);
			append(div23, t25);
			append(div23, div21);
			append(div21, label8);
			append(label8, input9);
			append(label8, t26);
			append(div23, t27);
			append(div23, div22);
			append(div22, label9);
			append(label9, input10);
			append(label9, t28);
			append(form, t29);
			append(form, div29);
			append(div29, div28);
			append(div28, div26);
			append(div26, t30);
			append(div28, t31);
			append(div28, div27);
			append(div27, select);
			append(select, option0);
			append(option0, t32);
			append(select, option1);
			append(option1, t33);
			append(select, option2);
			append(option2, t34);
			append(select, option3);
			append(option3, t35);
			append(form, t36);
			append(form, div33);
			append(div33, div32);
			append(div32, div30);
			append(div32, t37);
			append(div32, div31);
			append(div31, button);
			append(button, t38);
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
    const fv = formValidation(document.getElementById('demoForm'), {
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
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/hiding-messages/event/tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('plugins.message.displayed', (e) => {
        // e.messageElement presents the error message element
        // We can hide the message easily
        e.messageElement.style.display = 'none';
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

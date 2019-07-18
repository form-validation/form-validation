import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import './chunk.17752e4f.js';
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
            <label class="col-sm-4 col-form-label">Programming Languages</label>
            <div class="col-sm-6">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="net" />
                    <label class="form-check-label">.Net</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="java" />
                    <label class="form-check-label">Java</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="php" />
                    <label class="form-check-label">PHP</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="perl" />
                    <label class="form-check-label">Perl</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="ruby" />
                    <label class="form-check-label">Ruby</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="python" />
                    <label class="form-check-label">Python</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="javascript" />
                    <label class="form-check-label">JavaScript</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-4 col-form-label">Editors</label>
            <div class="col-sm-6">
                <select name="editors[]" multiple="multiple" class="form-control" style="height: 200px;">
                    <option value="" disabled="disabled">Choose 2 - 3 editors</option>
                    <option value="atom">Atom</option>
                    <option value="eclipse">Eclipse</option>
                    <option value="netbeen">NetBean</option>
                    <option value="nodepadplusplus">Nodepad++</option>
                    <option value="phpstorm">PHP Storm</option>
                    <option value="sublime">Sublime</option>
                    <option value="webstorm">Web Storm</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-8 offset-sm-4">
                <button type="submit" class="btn btn-primary">Submit</button>
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
                'languages[]': {
                    validators: {
                        choice: {
                            min: 2,
                            max: 4,
                            message: 'Please choose 2 - 4 programming languages you are good at'
                        }
                    }
                },
                'editors[]': {
                    validators: {
                        choice: {
                            min: 2,
                            max: 3,
                            message: 'Please choose 2 - 3 editors you use most'
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
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/validators/choice/basic/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/choice/basic/Bootstrap.svelte";

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div8, label0, t0, t1, div7, div0, input0, t2, label1, t3, t4, div1, input1, t5, label2, t6, t7, div2, input2, t8, label3, t9, t10, div3, input3, t11, label4, t12, t13, div4, input4, t14, label5, t15, t16, div5, input5, t17, label6, t18, t19, div6, input6, t20, label7, t21, t22, div10, label8, t23, t24, div9, select, option0, t25, option1, t26, option2, t27, option3, t28, option4, t29, option5, t30, option6, t31, option7, t32;

	return {
		c: function create() {
			form = element("form");
			div8 = element("div");
			label0 = element("label");
			t0 = text("Programming Languages");
			t1 = space();
			div7 = element("div");
			div0 = element("div");
			input0 = element("input");
			t2 = space();
			label1 = element("label");
			t3 = text(".Net");
			t4 = space();
			div1 = element("div");
			input1 = element("input");
			t5 = space();
			label2 = element("label");
			t6 = text("Java");
			t7 = space();
			div2 = element("div");
			input2 = element("input");
			t8 = space();
			label3 = element("label");
			t9 = text("PHP");
			t10 = space();
			div3 = element("div");
			input3 = element("input");
			t11 = space();
			label4 = element("label");
			t12 = text("Perl");
			t13 = space();
			div4 = element("div");
			input4 = element("input");
			t14 = space();
			label5 = element("label");
			t15 = text("Ruby");
			t16 = space();
			div5 = element("div");
			input5 = element("input");
			t17 = space();
			label6 = element("label");
			t18 = text("Python");
			t19 = space();
			div6 = element("div");
			input6 = element("input");
			t20 = space();
			label7 = element("label");
			t21 = text("JavaScript");
			t22 = space();
			div10 = element("div");
			label8 = element("label");
			t23 = text("Editors");
			t24 = space();
			div9 = element("div");
			select = element("select");
			option0 = element("option");
			t25 = text("Choose 2 - 3 editors");
			option1 = element("option");
			t26 = text("Atom");
			option2 = element("option");
			t27 = text("Eclipse");
			option3 = element("option");
			t28 = text("NetBean");
			option4 = element("option");
			t29 = text("Nodepad++");
			option5 = element("option");
			t30 = text("PHP Storm");
			option6 = element("option");
			t31 = text("Sublime");
			option7 = element("option");
			t32 = text("Web Storm");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			label0 = claim_element(div8_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Programming Languages");
			label0_nodes.forEach(detach);
			t1 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div0 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input0 = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t2 = claim_text(div0_nodes, "\n                    ");

			label1 = claim_element(div0_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, ".Net");
			label1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t4 = claim_text(div7_nodes, "\n                ");

			div1 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input1 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t5 = claim_text(div1_nodes, "\n                    ");

			label2 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Java");
			label2_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t7 = claim_text(div7_nodes, "\n                ");

			div2 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input2 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t8 = claim_text(div2_nodes, "\n                    ");

			label3 = claim_element(div2_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			t9 = claim_text(label3_nodes, "PHP");
			label3_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t10 = claim_text(div7_nodes, "\n                ");

			div3 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input3 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t11 = claim_text(div3_nodes, "\n                    ");

			label4 = claim_element(div3_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			t12 = claim_text(label4_nodes, "Perl");
			label4_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t13 = claim_text(div7_nodes, "\n                ");

			div4 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input4 = claim_element(div4_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t14 = claim_text(div4_nodes, "\n                    ");

			label5 = claim_element(div4_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			t15 = claim_text(label5_nodes, "Ruby");
			label5_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t16 = claim_text(div7_nodes, "\n                ");

			div5 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input5 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t17 = claim_text(div5_nodes, "\n                    ");

			label6 = claim_element(div5_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			t18 = claim_text(label6_nodes, "Python");
			label6_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t19 = claim_text(div7_nodes, "\n                ");

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input6 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t20 = claim_text(div6_nodes, "\n                    ");

			label7 = claim_element(div6_nodes, "LABEL", { class: true }, false);
			var label7_nodes = children(label7);

			t21 = claim_text(label7_nodes, "JavaScript");
			label7_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n    \n        ");

			div10 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label8 = claim_element(div10_nodes, "LABEL", { class: true }, false);
			var label8_nodes = children(label8);

			t23 = claim_text(label8_nodes, "Editors");
			label8_nodes.forEach(detach);
			t24 = claim_text(div10_nodes, "\n            ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			select = claim_element(div9_nodes, "SELECT", { name: true, multiple: true, class: true, style: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true, disabled: true }, false);
			var option0_nodes = children(option0);

			t25 = claim_text(option0_nodes, "Choose 2 - 3 editors");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t26 = claim_text(option1_nodes, "Atom");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t27 = claim_text(option2_nodes, "Eclipse");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t28 = claim_text(option3_nodes, "NetBean");
			option3_nodes.forEach(detach);

			option4 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option4_nodes = children(option4);

			t29 = claim_text(option4_nodes, "Nodepad++");
			option4_nodes.forEach(detach);

			option5 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option5_nodes = children(option5);

			t30 = claim_text(option5_nodes, "PHP Storm");
			option5_nodes.forEach(detach);

			option6 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option6_nodes = children(option6);

			t31 = claim_text(option6_nodes, "Sublime");
			option6_nodes.forEach(detach);

			option7 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option7_nodes = children(option7);

			t32 = claim_text(option7_nodes, "Web Storm");
			option7_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label0.className = "col-sm-4 col-form-label";
			add_location(label0, file, 3, 12, 126);
			attr(input0, "type", "checkbox");
			input0.className = "form-check-input";
			input0.name = "languages[]";
			input0.value = "net";
			add_location(input0, file, 6, 20, 291);
			label1.className = "form-check-label";
			add_location(label1, file, 7, 20, 393);
			div0.className = "form-check";
			add_location(div0, file, 5, 16, 246);
			attr(input1, "type", "checkbox");
			input1.className = "form-check-input";
			input1.name = "languages[]";
			input1.value = "java";
			add_location(input1, file, 10, 20, 522);
			label2.className = "form-check-label";
			add_location(label2, file, 11, 20, 625);
			div1.className = "form-check";
			add_location(div1, file, 9, 16, 477);
			attr(input2, "type", "checkbox");
			input2.className = "form-check-input";
			input2.name = "languages[]";
			input2.value = "php";
			add_location(input2, file, 14, 20, 754);
			label3.className = "form-check-label";
			add_location(label3, file, 15, 20, 856);
			div2.className = "form-check";
			add_location(div2, file, 13, 16, 709);
			attr(input3, "type", "checkbox");
			input3.className = "form-check-input";
			input3.name = "languages[]";
			input3.value = "perl";
			add_location(input3, file, 18, 20, 984);
			label4.className = "form-check-label";
			add_location(label4, file, 19, 20, 1087);
			div3.className = "form-check";
			add_location(div3, file, 17, 16, 939);
			attr(input4, "type", "checkbox");
			input4.className = "form-check-input";
			input4.name = "languages[]";
			input4.value = "ruby";
			add_location(input4, file, 22, 20, 1216);
			label5.className = "form-check-label";
			add_location(label5, file, 23, 20, 1319);
			div4.className = "form-check";
			add_location(div4, file, 21, 16, 1171);
			attr(input5, "type", "checkbox");
			input5.className = "form-check-input";
			input5.name = "languages[]";
			input5.value = "python";
			add_location(input5, file, 26, 20, 1448);
			label6.className = "form-check-label";
			add_location(label6, file, 27, 20, 1553);
			div5.className = "form-check";
			add_location(div5, file, 25, 16, 1403);
			attr(input6, "type", "checkbox");
			input6.className = "form-check-input";
			input6.name = "languages[]";
			input6.value = "javascript";
			add_location(input6, file, 30, 20, 1684);
			label7.className = "form-check-label";
			add_location(label7, file, 31, 20, 1793);
			div6.className = "form-check";
			add_location(div6, file, 29, 16, 1639);
			div7.className = "col-sm-6";
			add_location(div7, file, 4, 12, 207);
			div8.className = "form-group row";
			add_location(div8, file, 2, 8, 85);
			label8.className = "col-sm-4 col-form-label";
			add_location(label8, file, 37, 12, 1955);
			option0.__value = "";
			option0.value = option0.__value;
			option0.disabled = "disabled";
			add_location(option0, file, 40, 20, 2171);
			option1.__value = "atom";
			option1.value = option1.__value;
			add_location(option1, file, 41, 20, 2258);
			option2.__value = "eclipse";
			option2.value = option2.__value;
			add_location(option2, file, 42, 20, 2313);
			option3.__value = "netbeen";
			option3.value = option3.__value;
			add_location(option3, file, 43, 20, 2374);
			option4.__value = "nodepadplusplus";
			option4.value = option4.__value;
			add_location(option4, file, 44, 20, 2435);
			option5.__value = "phpstorm";
			option5.value = option5.__value;
			add_location(option5, file, 45, 20, 2506);
			option6.__value = "sublime";
			option6.value = option6.__value;
			add_location(option6, file, 46, 20, 2570);
			option7.__value = "webstorm";
			option7.value = option7.__value;
			add_location(option7, file, 47, 20, 2631);
			select.name = "editors[]";
			select.multiple = "multiple";
			select.className = "form-control";
			set_style(select, "height", "200px");
			add_location(select, file, 39, 16, 2061);
			div9.className = "col-sm-6";
			add_location(div9, file, 38, 12, 2022);
			div10.className = "form-group row";
			add_location(div10, file, 36, 8, 1914);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 42);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div8);
			append(div8, label0);
			append(label0, t0);
			append(div8, t1);
			append(div8, div7);
			append(div7, div0);
			append(div0, input0);
			append(div0, t2);
			append(div0, label1);
			append(label1, t3);
			append(div7, t4);
			append(div7, div1);
			append(div1, input1);
			append(div1, t5);
			append(div1, label2);
			append(label2, t6);
			append(div7, t7);
			append(div7, div2);
			append(div2, input2);
			append(div2, t8);
			append(div2, label3);
			append(label3, t9);
			append(div7, t10);
			append(div7, div3);
			append(div3, input3);
			append(div3, t11);
			append(div3, label4);
			append(label4, t12);
			append(div7, t13);
			append(div7, div4);
			append(div4, input4);
			append(div4, t14);
			append(div4, label5);
			append(label5, t15);
			append(div7, t16);
			append(div7, div5);
			append(div5, input5);
			append(div5, t17);
			append(div5, label6);
			append(label6, t18);
			append(div7, t19);
			append(div7, div6);
			append(div6, input6);
			append(div6, t20);
			append(div6, label7);
			append(label7, t21);
			append(form, t22);
			append(form, div10);
			append(div10, label8);
			append(label8, t23);
			append(div10, t24);
			append(div10, div9);
			append(div9, select);
			append(select, option0);
			append(option0, t25);
			append(select, option1);
			append(option1, t26);
			append(select, option2);
			append(option2, t27);
			append(select, option3);
			append(option3, t28);
			append(select, option4);
			append(option4, t29);
			append(select, option5);
			append(option5, t30);
			append(select, option6);
			append(option6, t31);
			append(select, option7);
			append(option7, t32);
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
            'languages[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: 'Please choose 2 - 4 programming languages you are good at'
                    }
                }
            },
            'editors[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 3,
                        message: 'Please choose 2 - 3 editors you use most'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/choice/basic/bootstrap',
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

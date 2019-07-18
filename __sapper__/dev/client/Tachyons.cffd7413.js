import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
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
                <div class="fl w-third pa2">Programming Languages</div>
                <div class="fl w-two-thirds">
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="net" /> .Net
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="java" /> Java
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="php" /> PHP
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="perl" /> Perl
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="ruby" /> Ruby
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="python" /> Python
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="javascript" /> JavaScript
                    </label>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-third pa2">Editors</div>
                <div class="fl w-two-thirds">
                    <select name="editors[]" multiple="multiple" class="input-reset ba b--black-20 pa2 mb2" style="height: 200px;">
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
                tachyons: new FormValidation.plugins.Tachyons(),
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

/* src/routes/guide/validators/choice/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/choice/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, label0, input0, t2, t3, label1, input1, t4, t5, label2, input2, t6, t7, label3, input3, t8, t9, label4, input4, t10, t11, label5, input5, t12, t13, label6, input6, t14, t15, div7, div6, div4, t16, t17, div5, select, option0, t18, option1, t19, option2, t20, option3, t21, option4, t22, option5, t23, option6, t24, option7, t25;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Programming Languages");
			t1 = space();
			div1 = element("div");
			label0 = element("label");
			input0 = element("input");
			t2 = text(" .Net");
			t3 = space();
			label1 = element("label");
			input1 = element("input");
			t4 = text(" Java");
			t5 = space();
			label2 = element("label");
			input2 = element("input");
			t6 = text(" PHP");
			t7 = space();
			label3 = element("label");
			input3 = element("input");
			t8 = text(" Perl");
			t9 = space();
			label4 = element("label");
			input4 = element("input");
			t10 = text(" Ruby");
			t11 = space();
			label5 = element("label");
			input5 = element("input");
			t12 = text(" Python");
			t13 = space();
			label6 = element("label");
			input6 = element("input");
			t14 = text(" JavaScript");
			t15 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t16 = text("Editors");
			t17 = space();
			div5 = element("div");
			select = element("select");
			option0 = element("option");
			t18 = text("Choose 2 - 3 editors");
			option1 = element("option");
			t19 = text("Atom");
			option2 = element("option");
			t20 = text("Eclipse");
			option3 = element("option");
			t21 = text("NetBean");
			option4 = element("option");
			t22 = text("Nodepad++");
			option5 = element("option");
			t23 = text("PHP Storm");
			option6 = element("option");
			t24 = text("Sublime");
			option7 = element("option");
			t25 = text("Web Storm");
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

			t0 = claim_text(div0_nodes, "Programming Languages");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label0 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label0_nodes = children(label0);

			input0 = claim_element(label0_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t2 = claim_text(label0_nodes, " .Net");
			label0_nodes.forEach(detach);
			t3 = claim_text(div1_nodes, "\n                    ");

			label1 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label1_nodes = children(label1);

			input1 = claim_element(label1_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t4 = claim_text(label1_nodes, " Java");
			label1_nodes.forEach(detach);
			t5 = claim_text(div1_nodes, "\n                    ");

			label2 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label2_nodes = children(label2);

			input2 = claim_element(label2_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			t6 = claim_text(label2_nodes, " PHP");
			label2_nodes.forEach(detach);
			t7 = claim_text(div1_nodes, "\n                    ");

			label3 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label3_nodes = children(label3);

			input3 = claim_element(label3_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			t8 = claim_text(label3_nodes, " Perl");
			label3_nodes.forEach(detach);
			t9 = claim_text(div1_nodes, "\n                    ");

			label4 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label4_nodes = children(label4);

			input4 = claim_element(label4_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			t10 = claim_text(label4_nodes, " Ruby");
			label4_nodes.forEach(detach);
			t11 = claim_text(div1_nodes, "\n                    ");

			label5 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label5_nodes = children(label5);

			input5 = claim_element(label5_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t12 = claim_text(label5_nodes, " Python");
			label5_nodes.forEach(detach);
			t13 = claim_text(div1_nodes, "\n                    ");

			label6 = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label6_nodes = children(label6);

			input6 = claim_element(label6_nodes, "INPUT", { class: true, type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t14 = claim_text(label6_nodes, " JavaScript");
			label6_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t16 = claim_text(div4_nodes, "Editors");
			div4_nodes.forEach(detach);
			t17 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			select = claim_element(div5_nodes, "SELECT", { name: true, multiple: true, class: true, style: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true, disabled: true }, false);
			var option0_nodes = children(option0);

			t18 = claim_text(option0_nodes, "Choose 2 - 3 editors");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t19 = claim_text(option1_nodes, "Atom");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t20 = claim_text(option2_nodes, "Eclipse");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t21 = claim_text(option3_nodes, "NetBean");
			option3_nodes.forEach(detach);

			option4 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option4_nodes = children(option4);

			t22 = claim_text(option4_nodes, "Nodepad++");
			option4_nodes.forEach(detach);

			option5 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option5_nodes = children(option5);

			t23 = claim_text(option5_nodes, "PHP Storm");
			option5_nodes.forEach(detach);

			option6 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option6_nodes = children(option6);

			t24 = claim_text(option6_nodes, "Sublime");
			option6_nodes.forEach(detach);

			option7 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option7_nodes = children(option7);

			t25 = claim_text(option7_nodes, "Web Storm");
			option7_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-30 pa2";
			add_location(div0, file, 4, 16, 136);
			input0.className = "mr2";
			attr(input0, "type", "checkbox");
			input0.name = "languages[]";
			input0.value = "net";
			add_location(input0, file, 7, 24, 298);
			label0.className = "db lh-copy";
			add_location(label0, file, 6, 20, 247);
			input1.className = "mr2";
			attr(input1, "type", "checkbox");
			input1.name = "languages[]";
			input1.value = "java";
			add_location(input1, file, 10, 24, 472);
			label1.className = "db lh-copy";
			add_location(label1, file, 9, 20, 421);
			input2.className = "mr2";
			attr(input2, "type", "checkbox");
			input2.name = "languages[]";
			input2.value = "php";
			add_location(input2, file, 13, 24, 646);
			label2.className = "db h-copy";
			add_location(label2, file, 12, 20, 596);
			input3.className = "mr2";
			attr(input3, "type", "checkbox");
			input3.name = "languages[]";
			input3.value = "perl";
			add_location(input3, file, 16, 24, 819);
			label3.className = "db lh-copy";
			add_location(label3, file, 15, 20, 768);
			input4.className = "mr2";
			attr(input4, "type", "checkbox");
			input4.name = "languages[]";
			input4.value = "ruby";
			add_location(input4, file, 19, 24, 994);
			label4.className = "db lh-copy";
			add_location(label4, file, 18, 20, 943);
			input5.className = "mr2";
			attr(input5, "type", "checkbox");
			input5.name = "languages[]";
			input5.value = "python";
			add_location(input5, file, 22, 24, 1168);
			label5.className = "db h-copy";
			add_location(label5, file, 21, 20, 1118);
			input6.className = "mr2";
			attr(input6, "type", "checkbox");
			input6.name = "languages[]";
			input6.value = "javascript";
			add_location(input6, file, 25, 24, 1346);
			label6.className = "db h-copy";
			add_location(label6, file, 24, 20, 1296);
			div1.className = "fl w-70";
			add_location(div1, file, 5, 16, 205);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-30 pa2";
			add_location(div4, file, 33, 16, 1600);
			option0.__value = "";
			option0.value = option0.__value;
			option0.disabled = "disabled";
			add_location(option0, file, 36, 24, 1833);
			option1.__value = "atom";
			option1.value = option1.__value;
			add_location(option1, file, 37, 24, 1924);
			option2.__value = "eclipse";
			option2.value = option2.__value;
			add_location(option2, file, 38, 24, 1983);
			option3.__value = "netbeen";
			option3.value = option3.__value;
			add_location(option3, file, 39, 24, 2048);
			option4.__value = "nodepadplusplus";
			option4.value = option4.__value;
			add_location(option4, file, 40, 24, 2113);
			option5.__value = "phpstorm";
			option5.value = option5.__value;
			add_location(option5, file, 41, 24, 2188);
			option6.__value = "sublime";
			option6.value = option6.__value;
			add_location(option6, file, 42, 24, 2256);
			option7.__value = "webstorm";
			option7.value = option7.__value;
			add_location(option7, file, 43, 24, 2321);
			select.name = "editors[]";
			select.multiple = "multiple";
			select.className = "input-reset ba b--black-20 pa2 mb2";
			set_style(select, "height", "200px");
			add_location(select, file, 35, 20, 1697);
			div5.className = "fl w-70";
			add_location(div5, file, 34, 16, 1655);
			div6.className = "fl w-100";
			add_location(div6, file, 32, 12, 1561);
			div7.className = "cf mb2";
			add_location(div7, file, 31, 8, 1528);
			form.id = "demoForm";
			form.method = "post";
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
			append(div1, label0);
			append(label0, input0);
			append(label0, t2);
			append(div1, t3);
			append(div1, label1);
			append(label1, input1);
			append(label1, t4);
			append(div1, t5);
			append(div1, label2);
			append(label2, input2);
			append(label2, t6);
			append(div1, t7);
			append(div1, label3);
			append(label3, input3);
			append(label3, t8);
			append(div1, t9);
			append(div1, label4);
			append(label4, input4);
			append(label4, t10);
			append(div1, t11);
			append(div1, label5);
			append(label5, input5);
			append(label5, t12);
			append(div1, t13);
			append(div1, label6);
			append(label6, input6);
			append(label6, t14);
			append(form, t15);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t16);
			append(div6, t17);
			append(div6, div5);
			append(div5, select);
			append(select, option0);
			append(option0, t18);
			append(select, option1);
			append(option1, t19);
			append(select, option2);
			append(option2, t20);
			append(select, option3);
			append(option3, t21);
			append(select, option4);
			append(option4, t22);
			append(select, option5);
			append(option5, t23);
			append(select, option6);
			append(option6, t24);
			append(select, option7);
			append(option7, t25);
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
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/callback/basic/tachyons',
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

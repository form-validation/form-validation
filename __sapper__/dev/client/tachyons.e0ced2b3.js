import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import './chunk.1a65a5cc.js';

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
                <div class="fl w-50">
                    <input type="text" name="fullName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
                <div class="fl w-25 pa2">File type</div>
                <div class="fl w-50">
                    <select name="fileType" class="input-reset ba b--black-20 pa2 mb2 db w-100">
                        <option value="">Select a file type</option>
                        <option value="pdf">CV (.pdf)</option>
                        <option value="zip">Sample code (.zip)</option>
                        <option value="png">Sample design (.png)</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">File</div>
                <div class="fl w-50">
                    <input type="file" name="fileName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Apply for job</button>
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
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            fileType: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a file type'
                    }
                }
            },
            fileName: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a file to upload'
                    },
                    file: {
                        extension: 'pdf',
                        type: 'application/pdf',
                        maxSize: 2 * 1024 * 1024,
                        message: 'The file must be in .pdf format and must not exceed 2MB in size'
                    }
                }
            },
        },
        plugins: {
            submitButton: new FormValidation.plugins.SubmitButton(),
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    });

    demoForm.querySelector('[name="fileType"]').addEventListener('change', function(e) {
        const fileType = e.target.value;
        if (fileType === '') {
            return;
        }

        let maxSize, extension, type, message;
        switch (fileType) {
            case 'png':
                type      = 'image/png';
                extension = 'png';
                maxSize   = 10 * 1024 * 1024;
                message   = 'The file must be in .png format and must not exceed 10MB in size';
                break;

            case 'zip':
                type      = 'application/zip';
                extension = 'zip';
                maxSize   = 5 * 1024 * 1024;
                message   = 'The file must be in .zip format and must not exceed 5MB in size';
                break;

            case 'pdf':
            default:
                type      = 'application/pdf';
                extension = 'pdf';
                maxSize   = 2 * 1024 * 1024;
                message   = 'The file must be in .pdf format and must not exceed 2MB in size';
                break;
        }

        fv
            // Update options
            .updateValidatorOption('fileName', 'file', 'type', type)
            .updateValidatorOption('fileName', 'file', 'extension', extension)
            
            // Update message
            .updateValidatorOption('fileName', 'file', 'message', message)
            
            // You might need to revalidate field
            .revalidateField('fileName');
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/updating-validator-options/tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/updating-validator-options/tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, t4, div5, input1, t5, div11, div10, div8, t6, t7, div9, select, option0, t8, option1, t9, option2, t10, option3, t11, t12, div15, div14, div12, t13, t14, div13, input2, t15, div19, div18, div16, t16, div17, button, t17;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = text("Email");
			t4 = space();
			div5 = element("div");
			input1 = element("input");
			t5 = space();
			div11 = element("div");
			div10 = element("div");
			div8 = element("div");
			t6 = text("File type");
			t7 = space();
			div9 = element("div");
			select = element("select");
			option0 = element("option");
			t8 = text("Select a file type");
			option1 = element("option");
			t9 = text("CV (.pdf)");
			option2 = element("option");
			t10 = text("Sample code (.zip)");
			option3 = element("option");
			t11 = text("Sample design (.png)");
			t12 = space();
			div15 = element("div");
			div14 = element("div");
			div12 = element("div");
			t13 = text("File");
			t14 = space();
			div13 = element("div");
			input2 = element("input");
			t15 = space();
			div19 = element("div");
			div18 = element("div");
			div16 = element("div");
			t16 = space();
			div17 = element("div");
			button = element("button");
			t17 = text("Apply for job");
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

			t0 = claim_text(div0_nodes, "Full name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Email");
			div4_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input1 = claim_element(div5_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			t6 = claim_text(div8_nodes, "File type");
			div8_nodes.forEach(detach);
			t7 = claim_text(div10_nodes, "\n                ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			select = claim_element(div9_nodes, "SELECT", { name: true, class: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t8 = claim_text(option0_nodes, "Select a file type");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t9 = claim_text(option1_nodes, "CV (.pdf)");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t10 = claim_text(option2_nodes, "Sample code (.zip)");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t11 = claim_text(option3_nodes, "Sample design (.png)");
			option3_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n\n        ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			t13 = claim_text(div12_nodes, "File");
			div12_nodes.forEach(detach);
			t14 = claim_text(div14_nodes, "\n                ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			input2 = claim_element(div13_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			t15 = claim_text(form_nodes, "\n\n        ");

			div19 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div18 = claim_element(div19_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div16 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div16_nodes.forEach(detach);
			t16 = claim_text(div18_nodes, "\n                ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			button = claim_element(div17_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t17 = claim_text(button_nodes, "Apply for job");
			button_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.name = "fullName";
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input0, file, 6, 20, 235);
			div1.className = "fl w-50";
			add_location(div1, file, 5, 16, 193);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 463);
			attr(input1, "type", "text");
			input1.name = "email";
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input1, file, 15, 20, 558);
			div5.className = "fl w-50";
			add_location(div5, file, 14, 16, 516);
			div6.className = "fl w-100";
			add_location(div6, file, 12, 12, 424);
			div7.className = "cf mb2";
			add_location(div7, file, 11, 8, 391);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 22, 16, 783);
			option0.__value = "";
			option0.value = option0.__value;
			add_location(option0, file, 25, 24, 983);
			option1.__value = "pdf";
			option1.value = option1.__value;
			add_location(option1, file, 26, 24, 1052);
			option2.__value = "zip";
			option2.value = option2.__value;
			add_location(option2, file, 27, 24, 1115);
			option3.__value = "png";
			option3.value = option3.__value;
			add_location(option3, file, 28, 24, 1187);
			select.name = "fileType";
			select.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(select, file, 24, 20, 882);
			div9.className = "fl w-50";
			add_location(div9, file, 23, 16, 840);
			div10.className = "fl w-100";
			add_location(div10, file, 21, 12, 744);
			div11.className = "cf mb2";
			add_location(div11, file, 20, 8, 711);
			div12.className = "fl w-25 pa2";
			add_location(div12, file, 36, 16, 1405);
			attr(input2, "type", "file");
			input2.name = "fileName";
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input2, file, 38, 20, 1499);
			div13.className = "fl w-50";
			add_location(div13, file, 37, 16, 1457);
			div14.className = "fl w-100";
			add_location(div14, file, 35, 12, 1366);
			div15.className = "cf mb2";
			add_location(div15, file, 34, 8, 1333);
			div16.className = "fl w-25 pa2";
			add_location(div16, file, 45, 16, 1727);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 47, 20, 1817);
			div17.className = "fl w-50";
			add_location(div17, file, 46, 16, 1775);
			div18.className = "fl w-100";
			add_location(div18, file, 44, 12, 1688);
			div19.className = "cf mb2";
			add_location(div19, file, 43, 8, 1655);
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
			append(div1, input0);
			append(form, t2);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t3);
			append(div6, t4);
			append(div6, div5);
			append(div5, input1);
			append(form, t5);
			append(form, div11);
			append(div11, div10);
			append(div10, div8);
			append(div8, t6);
			append(div10, t7);
			append(div10, div9);
			append(div9, select);
			append(select, option0);
			append(option0, t8);
			append(select, option1);
			append(option1, t9);
			append(select, option2);
			append(option2, t10);
			append(select, option3);
			append(option3, t11);
			append(form, t12);
			append(form, div15);
			append(div15, div14);
			append(div14, div12);
			append(div12, t13);
			append(div14, t14);
			append(div14, div13);
			append(div13, input2);
			append(form, t15);
			append(form, div19);
			append(div19, div18);
			append(div18, div16);
			append(div18, t16);
			append(div18, div17);
			append(div17, button);
			append(button, t17);
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
    const demoForm = document.getElementById('demoForm');
    const fv = formValidation(demoForm, {
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            fileType: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a file type'
                    }
                }
            },
            fileName: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a file to upload'
                    },
                    file: {
                        extension: 'pdf',
                        type: 'application/pdf',
                        maxSize: 2 * 1024 * 1024,
                        message: 'The file must be in .pdf format and must not exceed 2MB in size'
                    }
                }
            },
        },
        plugins: {
            submitButton: new SubmitButton(),
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/updating-validator-options/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    demoForm.querySelector('[name="fileType"]').addEventListener('change', (e) => {
        const fileType = e.target.value;
        if (fileType === '') {
            return;
        }

        let extension, type, message;
        switch (fileType) {
            case 'png':
                type      = 'image/png';
                extension = 'png';
                message   = 'The file must be in .png format and must not exceed 10MB in size';
                break;

            case 'zip':
                type      = 'application/zip';
                extension = 'zip';
                message   = 'The file must be in .zip format and must not exceed 5MB in size';
                break;

            case 'pdf':
            default:
                type      = 'application/pdf';
                extension = 'pdf';
                message   = 'The file must be in .pdf format and must not exceed 2MB in size';
                break;
        }

        fv
            // Update options
            .updateValidatorOption('fileName', 'file', 'type', type)
            .updateValidatorOption('fileName', 'file', 'extension', extension)
            
            // Update message
            .updateValidatorOption('fileName', 'file', 'message', message)
            
            // You might need to revalidate field
            .revalidateField('fileName');
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
import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as Excluded } from './chunk.01929f61.js';

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
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="firstName" placeholder="First name" />
                </div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Company</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="company" />
                </div>
                <div class="fl w-25">
                    <button class="bn pa3 pv2" type="button" id="moreInfoButton">More info</button>
                </div>
            </div>
        </div>

        <!-- These fields will not be validated as long as they are not visible -->
        <div class="cf" id="moreInfoFields" style="display: none;">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Job title</div>
                    <div class="fl w-50">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="job" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Department</div>
                    <div class="fl w-50">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="department" />
                    </div>
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
                company: {
                    validators: {
                        notEmpty: {
                            message: 'The company name is required'
                        }
                    }
                },
                // These fields will be validated when being visible
                job: {
                    validators: {
                        notEmpty: {
                            message: 'The job title is required'
                        }
                    }
                },
                department: {
                    validators: {
                        notEmpty: {
                            message: 'The department name is required'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                excluded: new FormValidation.plugins.Excluded(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );

    document.getElementById('moreInfoButton').addEventListener('click', function() {
        const container = document.getElementById('moreInfoFields');
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/excluded/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/excluded/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div4, div3, div0, t0, t1, div1, input0, t2, div2, input1, t3, div9, div8, div5, t4, t5, div6, input2, t6, div7, button0, t7, t8, div18, div13, div12, div10, t9, t10, div11, input3, t11, div17, div16, div14, t12, t13, div15, input4, t14, div22, div21, div19, t15, div20, button1, t16;

	return {
		c: function create() {
			form = element("form");
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div9 = element("div");
			div8 = element("div");
			div5 = element("div");
			t4 = text("Company");
			t5 = space();
			div6 = element("div");
			input2 = element("input");
			t6 = space();
			div7 = element("div");
			button0 = element("button");
			t7 = text("More info");
			t8 = space();
			div18 = element("div");
			div13 = element("div");
			div12 = element("div");
			div10 = element("div");
			t9 = text("Job title");
			t10 = space();
			div11 = element("div");
			input3 = element("input");
			t11 = space();
			div17 = element("div");
			div16 = element("div");
			div14 = element("div");
			t12 = text("Department");
			t13 = space();
			div15 = element("div");
			input4 = element("input");
			t14 = space();
			div22 = element("div");
			div21 = element("div");
			div19 = element("div");
			t15 = space();
			div20 = element("div");
			button1 = element("button");
			t16 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
			var form_nodes = children(form);

			div4 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Full name");
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n                ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n                ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div5 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			t4 = claim_text(div5_nodes, "Company");
			div5_nodes.forEach(detach);
			t5 = claim_text(div8_nodes, "\n                ");

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			input2 = claim_element(div6_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(div8_nodes, "\n                ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			button0 = claim_element(div7_nodes, "BUTTON", { class: true, type: true, id: true }, false);
			var button0_nodes = children(button0);

			t7 = claim_text(button0_nodes, "More info");
			button0_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true, id: true, style: true }, false);
			var div18_nodes = children(div18);

			div13 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			t9 = claim_text(div10_nodes, "Job title");
			div10_nodes.forEach(detach);
			t10 = claim_text(div12_nodes, "\n                    ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input3 = claim_element(div11_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t11 = claim_text(div18_nodes, "\n            ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			t12 = claim_text(div14_nodes, "Department");
			div14_nodes.forEach(detach);
			t13 = claim_text(div16_nodes, "\n                    ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			input4 = claim_element(div15_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t14 = claim_text(form_nodes, "\n\n        ");

			div22 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div21 = claim_element(div22_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div19 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			div19_nodes.forEach(detach);
			t15 = claim_text(div21_nodes, "\n                ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			button1 = claim_element(div20_nodes, "BUTTON", { type: true, class: true }, false);
			var button1_nodes = children(button1);

			t16 = claim_text(button1_nodes, "Submit");
			button1_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 159);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "firstName";
			input0.placeholder = "First name";
			add_location(input0, file, 6, 20, 258);
			div1.className = "fl w-30";
			add_location(div1, file, 5, 16, 216);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "lastName";
			input1.placeholder = "Last name";
			add_location(input1, file, 9, 20, 455);
			div2.className = "fl w-30";
			add_location(div2, file, 8, 16, 413);
			div3.className = "fl w-100";
			add_location(div3, file, 3, 12, 120);
			div4.className = "cf mb2";
			add_location(div4, file, 2, 8, 87);
			div5.className = "fl w-25 pa2";
			add_location(div5, file, 16, 16, 707);
			attr(input2, "type", "text");
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input2.name = "company";
			add_location(input2, file, 18, 20, 804);
			div6.className = "fl w-50";
			add_location(div6, file, 17, 16, 762);
			button0.className = "bn pa3 pv2";
			button0.type = "button";
			button0.id = "moreInfoButton";
			add_location(button0, file, 21, 20, 978);
			div7.className = "fl w-25 pl2";
			add_location(div7, file, 20, 16, 932);
			div8.className = "fl w-100";
			add_location(div8, file, 15, 12, 668);
			div9.className = "cf mb2";
			add_location(div9, file, 14, 8, 635);
			div10.className = "fl w-25 pa2";
			add_location(div10, file, 29, 20, 1276);
			attr(input3, "type", "text");
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input3.name = "job";
			add_location(input3, file, 31, 24, 1383);
			div11.className = "fl w-50";
			add_location(div11, file, 30, 20, 1337);
			div12.className = "fl w-100";
			add_location(div12, file, 28, 16, 1233);
			div13.className = "cf mb2";
			add_location(div13, file, 27, 12, 1196);
			div14.className = "fl w-25 pa2";
			add_location(div14, file, 37, 20, 1629);
			attr(input4, "type", "text");
			input4.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input4.name = "department";
			add_location(input4, file, 39, 24, 1737);
			div15.className = "fl w-50";
			add_location(div15, file, 38, 20, 1691);
			div16.className = "fl w-100";
			add_location(div16, file, 36, 16, 1586);
			div17.className = "cf mb2";
			add_location(div17, file, 35, 12, 1549);
			div18.className = "cf";
			div18.id = "moreInfoFields";
			set_style(div18, "display", "none");
			add_location(div18, file, 26, 8, 1124);
			div19.className = "fl w-25 pa2";
			add_location(div19, file, 47, 16, 1994);
			button1.type = "submit";
			button1.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button1, file, 49, 20, 2084);
			div20.className = "fl w-50";
			add_location(div20, file, 48, 16, 2042);
			div21.className = "fl w-100";
			add_location(div21, file, 46, 12, 1955);
			div22.className = "cf mb2";
			add_location(div22, file, 45, 8, 1922);
			form.id = "demoForm";
			form.method = "POST";
			set_style(form, "height", "280px");
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div4);
			append(div4, div3);
			append(div3, div0);
			append(div0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div9);
			append(div9, div8);
			append(div8, div5);
			append(div5, t4);
			append(div8, t5);
			append(div8, div6);
			append(div6, input2);
			append(div8, t6);
			append(div8, div7);
			append(div7, button0);
			append(button0, t7);
			append(form, t8);
			append(form, div18);
			append(div18, div13);
			append(div13, div12);
			append(div12, div10);
			append(div10, t9);
			append(div12, t10);
			append(div12, div11);
			append(div11, input3);
			append(div18, t11);
			append(div18, div17);
			append(div17, div16);
			append(div16, div14);
			append(div14, t12);
			append(div16, t13);
			append(div16, div15);
			append(div15, input4);
			append(form, t14);
			append(form, div22);
			append(div22, div21);
			append(div21, div19);
			append(div21, t15);
			append(div21, div20);
			append(div20, button1);
			append(button1, t16);
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
            company: {
                validators: {
                    notEmpty: {
                        message: 'The company name is required'
                    }
                }
            },
            // These fields will be validated when being visible
            job: {
                validators: {
                    notEmpty: {
                        message: 'The job title is required'
                    }
                }
            },
            department: {
                validators: {
                    notEmpty: {
                        message: 'The department name is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            excluded: new Excluded(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/excluded/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    // Toogle the container that contains the Job title and Department fields
    // when click the moreInfoButton button
    document.getElementById('moreInfoButton').addEventListener('click', () => {
        const container = document.getElementById('moreInfoFields');
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
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

import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as ResourceLoader } from './chunk.17752e4f.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as StartEndDate } from './chunk.ad8be9f8.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Event</div>
                <div class="fl w-75">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Start date</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="startDate" placeholder="YYYY/MM/DD" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">End date</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="endDate" placeholder="YYYY/MM/DD" />
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
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.js"></script-tag>   
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/StartEndDate.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The event name is required'
                        },
                    }
                },
                startDate: {
                    validators: {
                        notEmpty: {
                            message: 'The start date is required'
                        },
                    }
                },
                endDate: {
                    validators: {
                        notEmpty: {
                            message: 'The end date is required'
                        },
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
                startEndDate: new FormValidation.plugins.StartEndDate({
                    format: 'YYYY/MM/DD',
                    startDate: {
                        field: 'startDate',
                        message: 'The start date must be a valid date and ealier than the end date'
                    },
                    endDate: {
                        field: 'endDate',
                        message: 'The end date must be a valid date and later than the start date'
                    },
                }),
            },
        }
    );

    flatpickr(form.querySelector('[name="startDate"]'), {
        enableTime: false,
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'Y/m/d',
        // After selecting a date, we need to revalidate the field
        onChange: function() {
            fv.revalidateField('startDate');
        },
    });

    flatpickr(form.querySelector('[name="endDate"]'), {
        enableTime: false,
        dateFormat: 'Y/m/d',
        onChange: function() {
            fv.revalidateField('endDate');
        },
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/using-flatpickr-for-start-and-end-dates/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/using-flatpickr-for-start-and-end-dates/Tachyons.svelte";

// (2:4) <ResourceLoader urls={[         'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.css',         'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.js',     ]} onLoaded={onLoaded}>
function create_default_slot_1(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input0, t2, div7, div6, div4, t3, t4, div5, input1, t5, div11, div10, div8, t6, t7, div9, input2;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Event");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = text("Start date");
			t4 = space();
			div5 = element("div");
			input1 = element("input");
			t5 = space();
			div11 = element("div");
			div10 = element("div");
			div8 = element("div");
			t6 = text("End date");
			t7 = space();
			div9 = element("div");
			input2 = element("input");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Event");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n        \n            ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t3 = claim_text(div4_nodes, "Start date");
			div4_nodes.forEach(detach);
			t4 = claim_text(div6_nodes, "\n                    ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input1 = claim_element(div5_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n        \n            ");

			div11 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			t6 = claim_text(div8_nodes, "End date");
			div8_nodes.forEach(detach);
			t7 = claim_text(div10_nodes, "\n                    ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input2 = claim_element(div9_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 8, 20, 398);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "name";
			add_location(input0, file, 10, 24, 501);
			div1.className = "fl w-75";
			add_location(div1, file, 9, 20, 455);
			div2.className = "fl w-100";
			add_location(div2, file, 7, 16, 355);
			div3.className = "cf mb2";
			add_location(div3, file, 6, 12, 318);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 17, 20, 757);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "startDate";
			input1.placeholder = "YYYY/MM/DD";
			add_location(input1, file, 19, 24, 865);
			div5.className = "fl w-50";
			add_location(div5, file, 18, 20, 819);
			div6.className = "fl w-100";
			add_location(div6, file, 16, 16, 714);
			div7.className = "cf mb2";
			add_location(div7, file, 15, 12, 677);
			div8.className = "fl w-25 pa2";
			add_location(div8, file, 26, 20, 1151);
			attr(input2, "type", "text");
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input2.name = "endDate";
			input2.placeholder = "YYYY/MM/DD";
			add_location(input2, file, 28, 24, 1257);
			div9.className = "fl w-50";
			add_location(div9, file, 27, 20, 1211);
			div10.className = "fl w-100";
			add_location(div10, file, 25, 16, 1108);
			div11.className = "cf mb2";
			add_location(div11, file, 24, 12, 1071);
			form.id = "demoForm";
			form.method = "POST";
			set_style(form, "height", "480px");
			add_location(form, file, 5, 8, 248);
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
			append(div9, input2);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}
		}
	};
}

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var current;

	var resourceloader = new ResourceLoader({
		props: {
		urls: [
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.js',
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

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(form, {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The event name is required'
                    },
                }
            },
            startDate: {
                validators: {
                    notEmpty: {
                        message: 'The start date is required'
                    },
                }
            },
            endDate: {
                validators: {
                    notEmpty: {
                        message: 'The end date is required'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            startEndDate: new StartEndDate({
                format: 'YYYY/MM/DD',
                startDate: {
                    field: 'startDate',
                    message: 'The start date must be a valid date and ealier than the end date'
                },
                endDate: {
                    field: 'endDate',
                    message: 'The end date must be a valid date and later than the start date'
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/using-flatpickr-for-start-and-end-dates/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }));

    flatpickr(form.querySelector('[name="startDate"]'), {
        enableTime: false,
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'Y/m/d',
        // After selecting a date, we need to revalidate the field
        onChange: () => {
            fv.revalidateField('startDate');
        },
    });

    flatpickr(form.querySelector('[name="endDate"]'), {
        enableTime: false,
        dateFormat: 'Y/m/d',
        onChange: () => {
            fv.revalidateField('endDate');
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;
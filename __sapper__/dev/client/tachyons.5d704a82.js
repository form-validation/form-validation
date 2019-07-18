import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as ResourceLoader } from './chunk.17752e4f.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-10 pa2">Task(s)</div>
                <div class="fl w-40 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="task[0].title" placeholder="Title" />
                </div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="task[0].dueDate" placeholder="Due date" />
                </div>
                <div class="fl w-10 ph2">
                    <button type="button" class="ba b--black-20 bg-green white ph3 pv2 br2" id="addButton">+</button>
                </div>
            </div>
        </div>

        <!-- Template -->
        <div class="cf mb2" id="template" style="display: none;">
            <div class="fl w-100">
                <div class="fl w-10 pa2"></div>
                <div class="fl w-40 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="task.title" placeholder="Title" />
                </div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="task.dueDate" placeholder="Due date" />
                </div>
                <div class="fl w-10 ph2">
                    <button type="button" class="ba b--black-20 bg-green white ph3 pv2 br2 js-remove-button">-</button>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-10 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script-tag>    
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const titleValidators = {
        validators: {
            notEmpty: {
                message: 'The task is required'
            }
        }
    };
    const dueDateValidators = {
        validators: {
            notEmpty: {
                message: 'The due date is required'
            },
            date: {
                format: 'YYYY/MM/DD',
                min: new Date(),
                message: 'The due date is not valid'
            }
        }
    };

    let rowIndex = 0;
    const demoForm = document.getElementById('demoForm');
    
    const attachPickAdayPicker = function(fieldName) {
        new Pikaday({
            field: demoForm.querySelector('[name="'+ fieldName+ '"]'),
            format: 'YYYY/MM/DD',
            toString: function(date, format) {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                return year + '/' + month + '/' + day;
            },
            onSelect: function() {
                // Revalidate the date field
                if (fv) {
                    fv.revalidateField(fieldName);
                }
            }
        });
    };
    
    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            'task[0].title': titleValidators,
            'task[0].dueDate': dueDateValidators,
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
    }).on('core.field.added', function(e) {
        if (e.field === 'task[' + rowIndex + '].dueDate') {
            // The added field is due date
            attachPickAdayPicker(e.field);
        }
    });

    // Attach pickaday to the first existing due date
    attachPickAdayPicker('task[0].dueDate');

    const removeRow = function(rowIndex) {
        const row = demoForm.querySelector('[data-row-index="' + rowIndex + '"]');

        // Remove field
        fv.removeField('task[' + rowIndex + '].title')
            .removeField('task[' + rowIndex + '].dueDate');

        // Remove row
        row.parentNode.removeChild(row);
    };

    const template = document.getElementById('template');
    document.getElementById('addButton').addEventListener('click', function() {
        rowIndex++;

        const clone = template.cloneNode(true);
        clone.removeAttribute('id');

        // Show the row
        clone.style.display = 'block';

        clone.setAttribute('data-row-index', rowIndex);

        // Insert before the template
        template.before(clone);

        clone.querySelector('[data-name="task.title"]').setAttribute('name', 'task[' + rowIndex + '].title');
        clone.querySelector('[data-name="task.dueDate"]').setAttribute('name', 'task[' + rowIndex + '].dueDate');

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        fv.addField('task[' + rowIndex + '].title', titleValidators)
            .addField('task[' + rowIndex + '].dueDate', dueDateValidators);

        // Handle the click event of removeButton
        const removeBtn = clone.querySelector('.js-remove-button');
        removeBtn.setAttribute('data-row-index', rowIndex);
        removeBtn.addEventListener('click', function(e) {
            // Get the row index
            const index = e.target.getAttribute('data-row-index');
            removeRow(index);
        });
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/adding-dynamic-field/using-other-library/tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/adding-dynamic-field/using-other-library/tachyons.svelte";

// (2:4) <ResourceLoader urls={[         'https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css',         'https://cdn.jsdelivr.net/npm/pikaday/pikaday.js',     ]} onLoaded={onLoaded}>
function create_default_slot_1(ctx) {
	var form, div5, div4, div0, t0, t1, div1, input0, t2, div2, input1, t3, div3, button0, t4, t5, div11, div10, div6, t6, div7, input2, t7, div8, input3, t8, div9, button1, t9, t10, div15, div14, div12, t11, div13, button2, t12;

	return {
		c: function create() {
			form = element("form");
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			t0 = text("Task(s)");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div3 = element("div");
			button0 = element("button");
			t4 = text("+");
			t5 = space();
			div11 = element("div");
			div10 = element("div");
			div6 = element("div");
			t6 = space();
			div7 = element("div");
			input2 = element("input");
			t7 = space();
			div8 = element("div");
			input3 = element("input");
			t8 = space();
			div9 = element("div");
			button1 = element("button");
			t9 = text("-");
			t10 = space();
			div15 = element("div");
			div14 = element("div");
			div12 = element("div");
			t11 = space();
			div13 = element("div");
			button2 = element("button");
			t12 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
			var form_nodes = children(form);

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div0 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Task(s)");
			div0_nodes.forEach(detach);
			t1 = claim_text(div4_nodes, "\n                    ");

			div1 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div4_nodes, "\n                    ");

			div2 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t3 = claim_text(div4_nodes, "\n                    ");

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			button0 = claim_element(div3_nodes, "BUTTON", { type: true, class: true, id: true }, false);
			var button0_nodes = children(button0);

			t4 = claim_text(button0_nodes, "+");
			button0_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n            \n            ");

			div11 = claim_element(form_nodes, "DIV", { class: true, id: true, style: true }, false);
			var div11_nodes = children(div11);

			div10 = claim_element(div11_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			div6 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div6_nodes.forEach(detach);
			t6 = claim_text(div10_nodes, "\n                    ");

			div7 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			input2 = claim_element(div7_nodes, "INPUT", { type: true, class: true, "data-name": true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t7 = claim_text(div10_nodes, "\n                    ");

			div8 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { type: true, class: true, "data-name": true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t8 = claim_text(div10_nodes, "\n                    ");

			div9 = claim_element(div10_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			button1 = claim_element(div9_nodes, "BUTTON", { type: true, class: true }, false);
			var button1_nodes = children(button1);

			t9 = claim_text(button1_nodes, "-");
			button1_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t10 = claim_text(form_nodes, "\n\n            ");

			div15 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			div14 = claim_element(div15_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div12 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div12_nodes.forEach(detach);
			t11 = claim_text(div14_nodes, "\n                    ");

			div13 = claim_element(div14_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			button2 = claim_element(div13_nodes, "BUTTON", { type: true, class: true }, false);
			var button2_nodes = children(button2);

			t12 = claim_text(button2_nodes, "Submit");
			button2_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-10 pa2";
			add_location(div0, file, 8, 20, 358);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "task[0].title";
			input0.placeholder = "Title";
			add_location(input0, file, 10, 24, 467);
			div1.className = "fl w-40 mr2";
			add_location(div1, file, 9, 20, 417);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "task[0].dueDate";
			input1.placeholder = "Due date";
			add_location(input1, file, 13, 24, 679);
			div2.className = "fl w-30 mr2";
			add_location(div2, file, 12, 20, 629);
			button0.type = "button";
			button0.className = "ba b--black-20 bg-green white ph3 pv2 br2";
			button0.id = "addButton";
			add_location(button0, file, 16, 24, 896);
			div3.className = "fl w-10 ph2";
			add_location(div3, file, 15, 20, 846);
			div4.className = "fl w-100";
			add_location(div4, file, 7, 16, 315);
			div5.className = "cf mb2";
			add_location(div5, file, 6, 12, 278);
			div6.className = "fl w-10 pa2";
			add_location(div6, file, 24, 20, 1223);
			attr(input2, "type", "text");
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input2.dataset.name = "task.title";
			input2.placeholder = "Title";
			add_location(input2, file, 26, 24, 1325);
			div7.className = "fl w-40 mr2";
			add_location(div7, file, 25, 20, 1275);
			attr(input3, "type", "text");
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input3.dataset.name = "task.dueDate";
			input3.placeholder = "Due date";
			add_location(input3, file, 29, 24, 1539);
			div8.className = "fl w-30 mr2";
			add_location(div8, file, 28, 20, 1489);
			button1.type = "button";
			button1.className = "ba b--black-20 bg-green white ph3 pv2 br2 js-remove-button";
			add_location(button1, file, 32, 24, 1758);
			div9.className = "fl w-10 ph2";
			add_location(div9, file, 31, 20, 1708);
			div10.className = "fl w-100";
			add_location(div10, file, 23, 16, 1180);
			div11.className = "cf mb2";
			div11.id = "template";
			set_style(div11, "display", "none");
			add_location(div11, file, 22, 12, 1106);
			div12.className = "fl w-10 pa2";
			add_location(div12, file, 39, 20, 2020);
			button2.type = "submit";
			button2.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button2, file, 41, 24, 2118);
			div13.className = "fl w-50";
			add_location(div13, file, 40, 20, 2072);
			div14.className = "fl w-100";
			add_location(div14, file, 38, 16, 1977);
			div15.className = "cf mb2";
			add_location(div15, file, 37, 12, 1940);
			form.id = "demoForm";
			form.method = "post";
			set_style(form, "min-height", "460px");
			add_location(form, file, 5, 8, 204);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div5);
			append(div5, div4);
			append(div4, div0);
			append(div0, t0);
			append(div4, t1);
			append(div4, div1);
			append(div1, input0);
			append(div4, t2);
			append(div4, div2);
			append(div2, input1);
			append(div4, t3);
			append(div4, div3);
			append(div3, button0);
			append(button0, t4);
			append(form, t5);
			append(form, div11);
			append(div11, div10);
			append(div10, div6);
			append(div10, t6);
			append(div10, div7);
			append(div7, input2);
			append(div10, t7);
			append(div10, div8);
			append(div8, input3);
			append(div10, t8);
			append(div10, div9);
			append(div9, button1);
			append(button1, t9);
			append(form, t10);
			append(form, div15);
			append(div15, div14);
			append(div14, div12);
			append(div14, t11);
			append(div14, div13);
			append(div13, button2);
			append(button2, t12);
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
        'https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css',
        'https://cdn.jsdelivr.net/npm/pikaday/pikaday.js',
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
    const titleValidators = {
        validators: {
            notEmpty: {
                message: 'The task is required'
            }
        }
    };
    const dueDateValidators = {
        validators: {
            notEmpty: {
                message: 'The due date is required'
            },
            date: {
                format: 'YYYY/MM/DD',
                min: new Date(),
                message: 'The due date is not valid'
            }
        }
    };

    let rowIndex = 0;
    const demoForm = document.getElementById('demoForm');
    
    const attachPickAdayPicker = (fieldName) => {
        new Pikaday({
            field: demoForm.querySelector(`[name="${fieldName}"]`),
            format: 'YYYY/MM/DD',
            toString: (date, format) => {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                return `${year}/${month}/${day}`;
            },
            onSelect: () => {
                // Revalidate the date field
                if (fv) {
                    fv.revalidateField(fieldName);
                }
            }
        });
    };
    
    $$invalidate('fv', fv = formValidation(demoForm, {
        fields: {
            'task[0].title': titleValidators,
            'task[0].dueDate': dueDateValidators,
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
                sender: '/guide/examples/adding-dynamic-field/using-other-library/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).on('core.field.added', (e) => {
        if (e.field === `task[${rowIndex}].dueDate`) {
            // The added field is due date
            attachPickAdayPicker(e.field);
        }
    }));

    // Attach pickaday to the first existing due date
    attachPickAdayPicker('task[0].dueDate');

    const removeRow = function(rowIndex) {
        const row = demoForm.querySelector('[data-row-index="' + rowIndex + '"]');

        // Remove field
        fv.removeField('task[' + rowIndex + '].title')
            .removeField('task[' + rowIndex + '].dueDate');

        // Remove row
        row.parentNode.removeChild(row);
    };

    const template = document.getElementById('template');
    document.getElementById('addButton').addEventListener('click', function() {
        rowIndex++;

        const clone = template.cloneNode(true);
        clone.removeAttribute('id');

        // Show the row
        clone.style.display = 'block';

        clone.setAttribute('data-row-index', rowIndex);

        // Insert before the template
        template.before(clone);

        clone.querySelector('[data-name="task.title"]').setAttribute('name', 'task[' + rowIndex + '].title');
        clone.querySelector('[data-name="task.dueDate"]').setAttribute('name', 'task[' + rowIndex + '].dueDate');

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        fv.addField('task[' + rowIndex + '].title', titleValidators)
            .addField('task[' + rowIndex + '].dueDate', dueDateValidators);

        // Handle the click event of `removeButton`
        const removeBtn = clone.querySelector('.js-remove-button');
        removeBtn.setAttribute('data-row-index', rowIndex);
        removeBtn.addEventListener('click', function(e) {
            // Get the row index
            const index = e.target.getAttribute('data-row-index');
            removeRow(index);
        });
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

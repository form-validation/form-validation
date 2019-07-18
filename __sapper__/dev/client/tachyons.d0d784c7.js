import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as isbn } from './chunk.369cb23c.js';

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
                <div class="fl w-10 pa2">Book</div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="book[0].title" placeholder="Title" />
                </div>
                <div class="fl w-25 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="book[0].isbn" placeholder="ISBN" />
                </div>
                <div class="fl w-20 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="book[0].price" placeholder="Price" />
                </div>
                <div class="fl w-10 ph2">
                    <button type="button" class="ba b--black-20 bg-green white ph3 pv2 br2" id="addButton">+</button>
                </div>
            </div>
        </div>

        <!-- Template -->
        <div class="cf mb2" id="template" style="display: none;">
            <div class="fl w-100">
                <div class="fl w-10 pa2">Book</div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="book.title" placeholder="Title" />
                </div>
                <div class="fl w-25 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="book.isbn" placeholder="ISBN" />
                </div>
                <div class="fl w-20 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" data-name="book.price" placeholder="Price" />
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<!-- 
You have to include the full version of FormValidation which contains all validators
including the isbn validator 
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const titleValidators = {
        validators: {
            notEmpty: {
                message: 'The title is required'
            }
        }
    };
    const isbnValidators = {
        validators: {
            notEmpty: {
                message: 'The ISBN is required'
            },
            isbn: {
                message: 'The ISBN is not valid'
            }
        }
    };
    const priceValidators = {
        validators: {
            notEmpty: {
                message: 'The price is required'
            },
            numeric: {
                message: 'The price must be a numeric number'
            }
        }
    };

    const demoForm = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            'book[0].title': titleValidators,
            'book[0].isbn': isbnValidators,
            'book[0].price': priceValidators,
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
    }).registerValidator('isbn', isbn);

    const removeRow = function(rowIndex) {
        const row = demoForm.querySelector('[data-row-index="' + rowIndex + '"]');

        // Remove field
        fv.removeField('book[' + rowIndex + '].title')
            .removeField('book[' + rowIndex + '].isbn')
            .removeField('book[' + rowIndex + '].price');

        // Remove row
        row.parentNode.removeChild(row);
    };

    const template = document.getElementById('template');
    let rowIndex = 0;
    document.getElementById('addButton').addEventListener('click', function() {
        rowIndex++;

        const clone = template.cloneNode(true);
        clone.removeAttribute('id');

        // Show the row
        clone.style.display = 'block';

        clone.setAttribute('data-row-index', rowIndex);

        // Insert before the template
        template.before(clone);

        clone.querySelector('[data-name="book.title"]').setAttribute('name', 'book[' + rowIndex + '].title');
        clone.querySelector('[data-name="book.isbn"]').setAttribute('name', 'book[' + rowIndex + '].isbn');
        clone.querySelector('[data-name="book.price"]').setAttribute('name', 'book[' + rowIndex + '].price');

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        fv.addField('book[' + rowIndex + '].title', titleValidators)
            .addField('book[' + rowIndex + '].isbn', isbnValidators)
            .addField('book[' + rowIndex + '].price', priceValidators);

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

/* src/routes/guide/examples/adding-dynamic-field/different-name/tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/adding-dynamic-field/different-name/tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div6, div5, div0, t0, t1, div1, input0, t2, div2, input1, t3, div3, input2, t4, div4, button0, t5, t6, div13, div12, div7, t7, t8, div8, input3, t9, div9, input4, t10, div10, input5, t11, div11, button1, t12, t13, div17, div16, div14, t14, div15, button2, t15;

	return {
		c: function create() {
			form = element("form");
			div6 = element("div");
			div5 = element("div");
			div0 = element("div");
			t0 = text("Book");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div3 = element("div");
			input2 = element("input");
			t4 = space();
			div4 = element("div");
			button0 = element("button");
			t5 = text("+");
			t6 = space();
			div13 = element("div");
			div12 = element("div");
			div7 = element("div");
			t7 = text("Book");
			t8 = space();
			div8 = element("div");
			input3 = element("input");
			t9 = space();
			div9 = element("div");
			input4 = element("input");
			t10 = space();
			div10 = element("div");
			input5 = element("input");
			t11 = space();
			div11 = element("div");
			button1 = element("button");
			t12 = text("-");
			t13 = space();
			div17 = element("div");
			div16 = element("div");
			div14 = element("div");
			t14 = space();
			div15 = element("div");
			button2 = element("button");
			t15 = text("Submit");
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

			t0 = claim_text(div0_nodes, "Book");
			div0_nodes.forEach(detach);
			t1 = claim_text(div5_nodes, "\n                ");

			div1 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div5_nodes, "\n                ");

			div2 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t3 = claim_text(div5_nodes, "\n                ");

			div3 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			input2 = claim_element(div3_nodes, "INPUT", { type: true, class: true, name: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t4 = claim_text(div5_nodes, "\n                ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			button0 = claim_element(div4_nodes, "BUTTON", { type: true, class: true, id: true }, false);
			var button0_nodes = children(button0);

			t5 = claim_text(button0_nodes, "+");
			button0_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        \n        ");

			div13 = claim_element(form_nodes, "DIV", { class: true, id: true, style: true }, false);
			var div13_nodes = children(div13);

			div12 = claim_element(div13_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div7 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			t7 = claim_text(div7_nodes, "Book");
			div7_nodes.forEach(detach);
			t8 = claim_text(div12_nodes, "\n                ");

			div8 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { type: true, class: true, "data-name": true, placeholder: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			t9 = claim_text(div12_nodes, "\n                ");

			div9 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			input4 = claim_element(div9_nodes, "INPUT", { type: true, class: true, "data-name": true, placeholder: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t10 = claim_text(div12_nodes, "\n                ");

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			input5 = claim_element(div10_nodes, "INPUT", { type: true, class: true, "data-name": true, placeholder: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t11 = claim_text(div12_nodes, "\n                ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			button1 = claim_element(div11_nodes, "BUTTON", { type: true, class: true }, false);
			var button1_nodes = children(button1);

			t12 = claim_text(button1_nodes, "-");
			button1_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t13 = claim_text(form_nodes, "\n\n        ");

			div17 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div16 = claim_element(div17_nodes, "DIV", { class: true }, false);
			var div16_nodes = children(div16);

			div14 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div14_nodes = children(div14);

			div14_nodes.forEach(detach);
			t14 = claim_text(div16_nodes, "\n                ");

			div15 = claim_element(div16_nodes, "DIV", { class: true }, false);
			var div15_nodes = children(div15);

			button2 = claim_element(div15_nodes, "BUTTON", { type: true, class: true }, false);
			var button2_nodes = children(button2);

			t15 = claim_text(button2_nodes, "Submit");
			button2_nodes.forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-10 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input0, "type", "text");
			input0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input0.name = "book[0].title";
			input0.placeholder = "Title";
			add_location(input0, file, 6, 20, 234);
			div1.className = "fl w-30 mr2";
			add_location(div1, file, 5, 16, 188);
			attr(input1, "type", "text");
			input1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input1.name = "book[0].isbn";
			input1.placeholder = "ISBN";
			add_location(input1, file, 9, 20, 434);
			div2.className = "fl w-25 mr2";
			add_location(div2, file, 8, 16, 388);
			attr(input2, "type", "text");
			input2.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input2.name = "book[0].price";
			input2.placeholder = "Price";
			add_location(input2, file, 12, 20, 632);
			div3.className = "fl w-20 mr2";
			add_location(div3, file, 11, 16, 586);
			button0.type = "button";
			button0.className = "ba b--black-20 bg-green white ph3 pv2 br2";
			button0.id = "addButton";
			add_location(button0, file, 15, 20, 832);
			div4.className = "fl w-10 ph2";
			add_location(div4, file, 14, 16, 786);
			div5.className = "fl w-100";
			add_location(div5, file, 3, 12, 97);
			div6.className = "cf mb2";
			add_location(div6, file, 2, 8, 64);
			div7.className = "fl w-10 pa2";
			add_location(div7, file, 23, 16, 1131);
			attr(input3, "type", "text");
			input3.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input3.dataset.name = "book.title";
			input3.placeholder = "Title";
			add_location(input3, file, 25, 20, 1229);
			div8.className = "fl w-30 mr2";
			add_location(div8, file, 24, 16, 1183);
			attr(input4, "type", "text");
			input4.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input4.dataset.name = "book.isbn";
			input4.placeholder = "ISBN";
			add_location(input4, file, 28, 20, 1431);
			div9.className = "fl w-25 mr2";
			add_location(div9, file, 27, 16, 1385);
			attr(input5, "type", "text");
			input5.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input5.dataset.name = "book.price";
			input5.placeholder = "Price";
			add_location(input5, file, 31, 20, 1631);
			div10.className = "fl w-20 mr2";
			add_location(div10, file, 30, 16, 1585);
			button1.type = "button";
			button1.className = "ba b--black-20 bg-green white ph3 pv2 br2 js-remove-button";
			add_location(button1, file, 34, 20, 1833);
			div11.className = "fl w-10 ph2";
			add_location(div11, file, 33, 16, 1787);
			div12.className = "fl w-100";
			add_location(div12, file, 22, 12, 1092);
			div13.className = "cf mb2";
			div13.id = "template";
			set_style(div13, "display", "none");
			add_location(div13, file, 21, 8, 1022);
			div14.className = "fl w-10 pa2";
			add_location(div14, file, 41, 16, 2071);
			button2.type = "submit";
			button2.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button2, file, 43, 20, 2161);
			div15.className = "fl w-50";
			add_location(div15, file, 42, 16, 2119);
			div16.className = "fl w-100";
			add_location(div16, file, 40, 12, 2032);
			div17.className = "cf mb2";
			add_location(div17, file, 39, 8, 1999);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div6);
			append(div6, div5);
			append(div5, div0);
			append(div0, t0);
			append(div5, t1);
			append(div5, div1);
			append(div1, input0);
			append(div5, t2);
			append(div5, div2);
			append(div2, input1);
			append(div5, t3);
			append(div5, div3);
			append(div3, input2);
			append(div5, t4);
			append(div5, div4);
			append(div4, button0);
			append(button0, t5);
			append(form, t6);
			append(form, div13);
			append(div13, div12);
			append(div12, div7);
			append(div7, t7);
			append(div12, t8);
			append(div12, div8);
			append(div8, input3);
			append(div12, t9);
			append(div12, div9);
			append(div9, input4);
			append(div12, t10);
			append(div12, div10);
			append(div10, input5);
			append(div12, t11);
			append(div12, div11);
			append(div11, button1);
			append(button1, t12);
			append(form, t13);
			append(form, div17);
			append(div17, div16);
			append(div16, div14);
			append(div16, t14);
			append(div16, div15);
			append(div15, button2);
			append(button2, t15);
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
    const titleValidators = {
        validators: {
            notEmpty: {
                message: 'The title is required'
            }
        }
    };
    const isbnValidators = {
        validators: {
            notEmpty: {
                message: 'The ISBN is required'
            },
            isbn: {
                message: 'The ISBN is not valid'
            }
        }
    };
    const priceValidators = {
        validators: {
            notEmpty: {
                message: 'The price is required'
            },
            numeric: {
                message: 'The price must be a numeric number'
            }
        }
    };

    const demoForm = document.getElementById('demoForm');
    const fv = formValidation(demoForm, {
        fields: {
            'book[0].title': titleValidators,
            'book[0].isbn': isbnValidators,
            'book[0].price': priceValidators,
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
                sender: '/guide/examples/adding-dynamic-field/different-name/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('isbn', isbn);

    const removeRow = function(rowIndex) {
        const row = demoForm.querySelector('[data-row-index="' + rowIndex + '"]');

        // Remove field
        fv.removeField('book[' + rowIndex + '].title')
            .removeField('book[' + rowIndex + '].isbn')
            .removeField('book[' + rowIndex + '].price');

        // Remove row
        row.parentNode.removeChild(row);
    };

    const template = document.getElementById('template');
    let rowIndex = 0;
    document.getElementById('addButton').addEventListener('click', function() {
        rowIndex++;

        const clone = template.cloneNode(true);
        clone.removeAttribute('id');

        // Show the row
        clone.style.display = 'block';

        clone.setAttribute('data-row-index', rowIndex);

        // Insert before the template
        template.before(clone);

        clone.querySelector('[data-name="book.title"]').setAttribute('name', 'book[' + rowIndex + '].title');
        clone.querySelector('[data-name="book.isbn"]').setAttribute('name', 'book[' + rowIndex + '].isbn');
        clone.querySelector('[data-name="book.price"]').setAttribute('name', 'book[' + rowIndex + '].price');

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        fv.addField('book[' + rowIndex + '].title', titleValidators)
            .addField('book[' + rowIndex + '].isbn', isbnValidators)
            .addField('book[' + rowIndex + '].price', priceValidators);

        // Handle the click event of `removeButton`
        const removeBtn = clone.querySelector('.js-remove-button');
        removeBtn.setAttribute('data-row-index', rowIndex);
        removeBtn.addEventListener('click', function(e) {
            // Get the row index
            const index = e.target.getAttribute('data-row-index');
            removeRow(index);
        });
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

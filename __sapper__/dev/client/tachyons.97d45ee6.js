import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as ResourceLoader } from './chunk.17752e4f.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Favorite color</div>
                <div class="fl w-50">
                    <select name="colors" class="input-reset ba b--black-20 pa2 mb2 db w-100" multiple data-placeholder="Choose 2-4 colors" style="width: 100%">
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="white">White</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Favorite colors using tags</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="colors-tags" multiple data-placeholder="Choose 2-4 colors" style="width: 100%"></select>
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script-tag>    
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"></script-tag>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>  
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const demoForm = document.getElementById('demoForm');

    const colorField = jQuery(demoForm.querySelector('[name="colors"]'));
    const colorTagField = jQuery(demoForm.querySelector('[name="colors-tags"]'));

    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            colors: {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorField.select2('data');
                            return (options != null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            },
            'colors-tags': {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorTagField.select2('data');
                            return (options !== null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        }
    });

    colorField
        .select2()
        .on('change.select2', function() {
            // Revalidate the color field when an option is chosen
            fv.revalidateField('colors');
        });

    colorTagField
        .select2({
            tags: ['Black', 'Blue', 'Green', 'Orange', 'Red', 'Yellow', 'White']
        })
        .on('change.select2', function() {
            // Revalidate the color-tags field when a tag is selected
            fv.revalidateField('colors-tags');
        });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/integrating-with-select2/tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/integrating-with-select2/tachyons.svelte";

// (2:4) <ResourceLoader urls={[         'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css',         'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',         'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js',     ]} onLoaded={onLoaded}>
function create_default_slot_1(ctx) {
	var form, div3, div2, div0, t0, t1, div1, select0, option0, t2, option1, t3, option2, t4, option3, t5, option4, t6, option5, t7, option6, t8, t9, div7, div6, div4, t10, t11, div5, select1;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Favorite color");
			t1 = space();
			div1 = element("div");
			select0 = element("select");
			option0 = element("option");
			t2 = text("Black");
			option1 = element("option");
			t3 = text("Blue");
			option2 = element("option");
			t4 = text("Green");
			option3 = element("option");
			t5 = text("Orange");
			option4 = element("option");
			t6 = text("Red");
			option5 = element("option");
			t7 = text("Yellow");
			option6 = element("option");
			t8 = text("White");
			t9 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t10 = text("Favorite colors using tags");
			t11 = space();
			div5 = element("div");
			select1 = element("select");
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

			t0 = claim_text(div0_nodes, "Favorite color");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			select0 = claim_element(div1_nodes, "SELECT", { name: true, class: true, multiple: true, "data-placeholder": true, style: true }, false);
			var select0_nodes = children(select0);

			option0 = claim_element(select0_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t2 = claim_text(option0_nodes, "Black");
			option0_nodes.forEach(detach);

			option1 = claim_element(select0_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t3 = claim_text(option1_nodes, "Blue");
			option1_nodes.forEach(detach);

			option2 = claim_element(select0_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t4 = claim_text(option2_nodes, "Green");
			option2_nodes.forEach(detach);

			option3 = claim_element(select0_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t5 = claim_text(option3_nodes, "Orange");
			option3_nodes.forEach(detach);

			option4 = claim_element(select0_nodes, "OPTION", { value: true }, false);
			var option4_nodes = children(option4);

			t6 = claim_text(option4_nodes, "Red");
			option4_nodes.forEach(detach);

			option5 = claim_element(select0_nodes, "OPTION", { value: true }, false);
			var option5_nodes = children(option5);

			t7 = claim_text(option5_nodes, "Yellow");
			option5_nodes.forEach(detach);

			option6 = claim_element(select0_nodes, "OPTION", { value: true }, false);
			var option6_nodes = children(option6);

			t8 = claim_text(option6_nodes, "White");
			option6_nodes.forEach(detach);
			select0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n            ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t10 = claim_text(div4_nodes, "Favorite colors using tags");
			div4_nodes.forEach(detach);
			t11 = claim_text(div6_nodes, "\n                    ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			select1 = claim_element(div5_nodes, "SELECT", { class: true, name: true, multiple: true, "data-placeholder": true, style: true }, false);
			var select1_nodes = children(select1);

			select1_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 9, 20, 474);
			option0.__value = "black";
			option0.value = option0.__value;
			add_location(option0, file, 12, 28, 755);
			option1.__value = "blue";
			option1.value = option1.__value;
			add_location(option1, file, 13, 28, 820);
			option2.__value = "green";
			option2.value = option2.__value;
			add_location(option2, file, 14, 28, 883);
			option3.__value = "orange";
			option3.value = option3.__value;
			add_location(option3, file, 15, 28, 948);
			option4.__value = "red";
			option4.value = option4.__value;
			add_location(option4, file, 16, 28, 1015);
			option5.__value = "yellow";
			option5.value = option5.__value;
			add_location(option5, file, 17, 28, 1076);
			option6.__value = "white";
			option6.value = option6.__value;
			add_location(option6, file, 18, 28, 1143);
			select0.name = "colors";
			select0.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			select0.multiple = true;
			select0.dataset.placeholder = "Choose 2-4 colors";
			set_style(select0, "width", "100%");
			add_location(select0, file, 11, 24, 586);
			div1.className = "fl w-50";
			add_location(div1, file, 10, 20, 540);
			div2.className = "fl w-100";
			add_location(div2, file, 8, 16, 431);
			div3.className = "cf mb2";
			add_location(div3, file, 7, 12, 394);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 26, 20, 1376);
			select1.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			select1.name = "colors-tags";
			select1.multiple = true;
			select1.dataset.placeholder = "Choose 2-4 colors";
			set_style(select1, "width", "100%");
			add_location(select1, file, 28, 24, 1500);
			div5.className = "fl w-50";
			add_location(div5, file, 27, 20, 1454);
			div6.className = "fl w-100";
			add_location(div6, file, 25, 16, 1333);
			div7.className = "cf mb2";
			add_location(div7, file, 24, 12, 1296);
			form.id = "demoForm";
			form.method = "post";
			set_style(form, "height", "380px");
			add_location(form, file, 6, 8, 324);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, select0);
			append(select0, option0);
			append(option0, t2);
			append(select0, option1);
			append(option1, t3);
			append(select0, option2);
			append(option2, t4);
			append(select0, option3);
			append(option3, t5);
			append(select0, option4);
			append(option4, t6);
			append(select0, option5);
			append(option5, t7);
			append(select0, option6);
			append(option6, t8);
			append(form, t9);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t10);
			append(div6, t11);
			append(div6, div5);
			append(div5, select1);
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
        'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js',
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

function instance($$self) {

const onLoaded = () => {
    const demoForm = document.getElementById('demoForm');

    const colorField = jQuery(demoForm.querySelector('[name="colors"]'));
    const colorTagField = jQuery(demoForm.querySelector('[name="colors-tags"]'));

    const fv = formValidation(demoForm, {
        fields: {
            colors: {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorField.select2('data');
                            return (options != null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            },
            'colors-tags': {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorTagField.select2('data');
                            return (options !== null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            }
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
                sender: '/guide/examples/integrating-with-select2/tachyons',
                sampleCode: sampleCode,
            }),
        }
    });

    colorField
        .select2()
        .on('change.select2', function() {
            // Revalidate the `color` field when an option is chosen
            fv.revalidateField('colors');
        });

    colorTagField
        .select2({
            tags: ['Black', 'Blue', 'Green', 'Orange', 'Red', 'Yellow', 'White']
        })
        .on('change.select2', function() {
            // Revalidate the `color-tags` field when a tag is selected
            fv.revalidateField('colors-tags');
        });
};

onDestroy(() => {
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

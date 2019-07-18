import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';
import './chunk.609a43e8.js';

/* src/routes/guide/examples/multiple-steps-wizard/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/multiple-steps-wizard/index.svelte";

// (9:8) <Tip>
function create_default_slot_1(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("Use the ");
			a = element("a");
			t1 = text("Wizard");
			t2 = text(" plugin to support validating multiple steps form.");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "Use the ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "Wizard");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " plugin to support validating multiple steps form.");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/wizard";
			a.className = "blue dim link";
			add_location(a, file, 8, 21, 205);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, a, anchor);
			append(a, t1);
			insert(target, t2, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(a);
				detach(t2);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, t2, p0, t3, t4, p1, t5, t6, t7, p2, t8, t9, t10, p3, t11, code, t12, t13, t14, p4, t15, span, t16, t17, a, t18, t19, t20, t21, p5, t22, t23, t24, p6, t25, t26, t27, current;

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<style>
.js-step {
    // By default, all steps is hidden        
    display: none;
}
.js-step-active {
    // Show the current step
    display: block;
}
</style>

<form id="demoForm" method="POST">
    <!-- Initially, the first step is active -->
    <div class="js-step js-step-active" data-step="1">
        ...
    </div>

    <div class="js-step" data-step="2">
        ...
    </div>

    <!-- The buttons to go to previous or next step -->
    <button type="button" id="prevButton">Prev</button>
    <button type="button" id="nextButton">Next</button>
</form>
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
const demoForm = document.getElementById('demoForm');
    
const step1 = demoForm.querySelector('.js-step[data-step="1"]');
const step2 = demoForm.querySelector('.js-step[data-step="2"]');

const prevButton = demoForm.querySelector('[id="prevButton"]');
const nextButton = demoForm.querySelector('[id="nextButton"]');

// Track the current step
let currentStep = 1;

// Set the rule for fields in the first step
const fv1 = FormValidation
    .formValidation(
        step1, 
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.form.valid', function() {
        // Jump to the next step when all fields in the current step are valid
        currentStep++;

        nextButton.innerHTML = 'Purchase';

        // Hide the first step
        FormValidation.utils.classSet(step1, {
            'js-step-active': false,
        });
        
        // Show the next step
        FormValidation.utils.classSet(step2, {
            'js-step-active': true,
        });
    });

// Set the rule for fields in the second step
const fv2 = FormValidation
    .formValidation(
        step2,
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.form.valid', function() {
        // You can submit the form
        // demoForm.submit()
        // or send the form data to server via an Ajax request

        // To make the demo simple, I just update the label of button
        nextButton.innerHTML = 'Done';
    });
` },
		$$inline: true
	});

	var samplecode2 = new SampleCode({
		props: { lang: "javascript", code: `
nextButton.addEventListener('click', function() {
    // When click the Next button, we will validate the current step
    switch (currentStep) {
        case 1:
            fv1.validate();
            break;
        
        case 2:
            fv2.validate();
            break;
        
        default:
            break;
    }
});
` },
		$$inline: true
	});

	var samplecode3 = new SampleCode({
		props: { lang: "javascript", code: `
prevButton.addEventListener('click', function() {
    switch (currentStep) {
        case 2:
            currentStep--;
            nextButton.innerHTML = 'Next';
            
            // Hide the second step
            FormValidation.utils.classSet(step2, {
                'js-step-active': false,
            });
            
            // Show the first step
            FormValidation.utils.classSet(step1, {
                'js-step-active': true,
            });
            break;

        case 1:
        default:
            break;
    }
});    
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/multiple-steps-wizard",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Multiple steps wizard',
        'Using Ajax to submit the form',
        'Validating form manually',
    ] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Multiple steps wizard");
			t1 = space();
			section = element("section");
			tip.$$.fragment.c();
			t2 = space();
			p0 = element("p");
			t3 = text("In this example, you will learn how to use FormValidation to validate a multiple steps wizard. The wizard is actually a normal form but is split into multiple steps. By default, all steps are hidden except the active one.");
			t4 = space();
			p1 = element("p");
			t5 = text("We can imagine that the form is structured as following:");
			t6 = space();
			samplecode0.$$.fragment.c();
			t7 = space();
			p2 = element("p");
			t8 = text("We initialize a FormValidation instance for each step. Also, we will bring user to the next step when a step is successfully validated:");
			t9 = space();
			samplecode1.$$.fragment.c();
			t10 = space();
			p3 = element("p");
			t11 = text("The sample code uses the built in method, ");
			code = element("code");
			t12 = text("FormValidation.utils.classSet");
			t13 = text(", to set the CSS classes for given element.");
			t14 = space();
			p4 = element("p");
			t15 = text("Now, we need to validate the current step when clicking the ");
			span = element("span");
			t16 = text("Next");
			t17 = text(" button. It can be done via the ");
			a = element("a");
			t18 = text("validate()");
			t19 = text(" method:");
			t20 = space();
			samplecode2.$$.fragment.c();
			t21 = space();
			p5 = element("p");
			t22 = text("Going to the previous step is much simple:");
			t23 = space();
			samplecode3.$$.fragment.c();
			t24 = space();
			p6 = element("p");
			t25 = text("This example only has two steps, but we can use the same approach if your wizard has more steps. You can play with it in the demo below:");
			t26 = space();
			demo.$$.fragment.c();
			t27 = space();
			examples.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Multiple steps wizard");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			tip.$$.fragment.l(section_nodes);
			t2 = claim_text(section_nodes, "\n        ");

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t3 = claim_text(p0_nodes, "In this example, you will learn how to use FormValidation to validate a multiple steps wizard. The wizard is actually a normal form but is split into multiple steps. By default, all steps are hidden except the active one.");
			p0_nodes.forEach(detach);
			t4 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t5 = claim_text(p1_nodes, "We can imagine that the form is structured as following:");
			p1_nodes.forEach(detach);
			t6 = claim_text(section_nodes, "\n");
			samplecode0.$$.fragment.l(section_nodes);
			t7 = claim_text(section_nodes, "\n        ");

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t8 = claim_text(p2_nodes, "We initialize a FormValidation instance for each step. Also, we will bring user to the next step when a step is successfully validated:");
			p2_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n");
			samplecode1.$$.fragment.l(section_nodes);
			t10 = claim_text(section_nodes, "\n        ");

			p3 = claim_element(section_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t11 = claim_text(p3_nodes, "The sample code uses the built in method, ");

			code = claim_element(p3_nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t12 = claim_text(code_nodes, "FormValidation.utils.classSet");
			code_nodes.forEach(detach);
			t13 = claim_text(p3_nodes, ", to set the CSS classes for given element.");
			p3_nodes.forEach(detach);
			t14 = claim_text(section_nodes, "\n        ");

			p4 = claim_element(section_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t15 = claim_text(p4_nodes, "Now, we need to validate the current step when clicking the ");

			span = claim_element(p4_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t16 = claim_text(span_nodes, "Next");
			span_nodes.forEach(detach);
			t17 = claim_text(p4_nodes, " button. It can be done via the ");

			a = claim_element(p4_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t18 = claim_text(a_nodes, "validate()");
			a_nodes.forEach(detach);
			t19 = claim_text(p4_nodes, " method:");
			p4_nodes.forEach(detach);
			t20 = claim_text(section_nodes, "\n");
			samplecode2.$$.fragment.l(section_nodes);
			t21 = claim_text(section_nodes, "\n        ");

			p5 = claim_element(section_nodes, "P", { class: true }, false);
			var p5_nodes = children(p5);

			t22 = claim_text(p5_nodes, "Going to the previous step is much simple:");
			p5_nodes.forEach(detach);
			t23 = claim_text(section_nodes, "\n");
			samplecode3.$$.fragment.l(section_nodes);
			t24 = claim_text(section_nodes, "\n        ");

			p6 = claim_element(section_nodes, "P", { class: true }, false);
			var p6_nodes = children(p6);

			t25 = claim_text(p6_nodes, "This example only has two steps, but we can use the same approach if your wizard has more steps. You can play with it in the demo below:");
			p6_nodes.forEach(detach);
			t26 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t27 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 103);
			p0.className = "lh-copy";
			add_location(p0, file, 9, 8, 334);
			p1.className = "lh-copy";
			add_location(p1, file, 10, 8, 587);
			p2.className = "lh-copy";
			add_location(p2, file, 38, 8, 1282);
			add_location(code, file, 103, 69, 3163);
			p3.className = "lh-copy";
			add_location(p3, file, 103, 8, 3102);
			span.className = "i";
			add_location(span, file, 104, 87, 3340);
			a.href = "/guide/api/validate";
			a.className = "blue dim link";
			add_location(a, file, 104, 146, 3399);
			p4.className = "lh-copy";
			add_location(p4, file, 104, 8, 3261);
			p5.className = "lh-copy";
			add_location(p5, file, 122, 8, 3866);
			p6.className = "lh-copy";
			add_location(p6, file, 147, 8, 4545);
			section.className = "mv5";
			add_location(section, file, 7, 4, 162);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			mount_component(tip, section, null);
			append(section, t2);
			append(section, p0);
			append(p0, t3);
			append(section, t4);
			append(section, p1);
			append(p1, t5);
			append(section, t6);
			mount_component(samplecode0, section, null);
			append(section, t7);
			append(section, p2);
			append(p2, t8);
			append(section, t9);
			mount_component(samplecode1, section, null);
			append(section, t10);
			append(section, p3);
			append(p3, t11);
			append(p3, code);
			append(code, t12);
			append(p3, t13);
			append(section, t14);
			append(section, p4);
			append(p4, t15);
			append(p4, span);
			append(span, t16);
			append(p4, t17);
			append(p4, a);
			append(a, t18);
			append(p4, t19);
			append(section, t20);
			mount_component(samplecode2, section, null);
			append(section, t21);
			append(section, p5);
			append(p5, t22);
			append(section, t23);
			mount_component(samplecode3, section, null);
			append(section, t24);
			append(section, p6);
			append(p6, t25);
			append(section, t26);
			mount_component(demo, section, null);
			insert(target, t27, anchor);
			mount_component(examples, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);
		},

		i: function intro(local) {
			if (current) return;
			tip.$$.fragment.i(local);

			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			samplecode2.$$.fragment.i(local);

			samplecode3.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tip.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			samplecode2.$$.fragment.o(local);
			samplecode3.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			tip.$destroy();

			samplecode0.$destroy();

			samplecode1.$destroy();

			samplecode2.$destroy();

			samplecode3.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t27);
			}

			examples.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var guidelayout = new GuideLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			guidelayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			guidelayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • Multiple steps wizard";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(guidelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var guidelayout_changes = {};
			if (changed.$$scope) guidelayout_changes.$$scope = { changed, ctx };
			guidelayout.$set(guidelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			guidelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			guidelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			guidelayout.$destroy(detaching);
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
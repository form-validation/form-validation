import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/api/validate/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/api/validate/index.svelte";

// (14:8) <Tip>
function create_default_slot_3(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("If you want the form to be validated automatically when pressing its Submit button, use the ");
			a = element("a");
			t1 = text("SubmitButton");
			t2 = text(" plugin");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "If you want the form to be validated automatically when pressing its Submit button, use the ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "SubmitButton");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " plugin");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/submit-button";
			a.className = "blue dim link";
			add_location(a, file, 13, 105, 561);
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

// (43:12) <PrevButton target="/guide/api/update-validator-option">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("updateValidatorOption() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "updateValidatorOption() method");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (44:12) <NextButton target="/guide/api/validate-element">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("validateElement() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "validateElement() method");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, h2, t2, t3, section0, p, t4, t5, div0, t6, t7, t8, t9, section1, div1, t10, current;

	var samplecode0 = new SampleCode({
		props: { lang: "javascript", code: `validate(): Promise` },
		$$inline: true
	});

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
// Create a FormValidation instance
const fv = FormValidation.formValidation(demoForm, {
    fields: { ... },
    plugins: { ... },
});

// Validate the form when click on a link or normal button
fv
    .validate()
    .then(function(status) {
        // status can be one of the following value
        // 'NotValidated': The form is not yet validated
        // 'Valid': The form is valid
        // 'Invalid': The form is invalid
        ...
    });
` },
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

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/api/update-validator-option",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/api/validate-element",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("validate()");
			t1 = space();
			h2 = element("h2");
			t2 = text("Validate all fields");
			t3 = space();
			section0 = element("section");
			p = element("p");
			t4 = text("It might be used when you want to validate the form manually when pressing given button.");
			t5 = space();
			div0 = element("div");
			samplecode0.$$.fragment.c();
			t6 = space();
			tip.$$.fragment.c();
			t7 = space();
			samplecode1.$$.fragment.c();
			t8 = space();
			examples.$$.fragment.c();
			t9 = space();
			section1 = element("section");
			div1 = element("div");
			prevbutton.$$.fragment.c();
			t10 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "validate()");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Validate all fields");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			p = claim_element(section0_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t4 = claim_text(p_nodes, "It might be used when you want to validate the form manually when pressing given button.");
			p_nodes.forEach(detach);
			t5 = claim_text(section0_nodes, "\n        ");

			div0 = claim_element(section0_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			samplecode0.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n        ");
			tip.$$.fragment.l(section0_nodes);
			t7 = claim_text(section0_nodes, "\n");
			samplecode1.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t8 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t9 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			div1 = claim_element(section1_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			prevbutton.$$.fragment.l(div1_nodes);
			t10 = claim_text(div1_nodes, "\n            ");
			nextbutton.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 99);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 147);
			p.className = "lh-copy";
			add_location(p, file, 9, 8, 229);
			div0.className = "mb3";
			add_location(div0, file, 10, 8, 349);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 199);
			div1.className = "flex";
			add_location(div1, file, 41, 8, 1350);
			section1.className = "mv5";
			add_location(section1, file, 40, 4, 1320);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			append(section0, p);
			append(p, t4);
			append(section0, t5);
			append(section0, div0);
			mount_component(samplecode0, div0, null);
			append(section0, t6);
			mount_component(tip, section0, null);
			append(section0, t7);
			mount_component(samplecode1, section0, null);
			insert(target, t8, anchor);
			mount_component(examples, target, anchor);
			insert(target, t9, anchor);
			insert(target, section1, anchor);
			append(section1, div1);
			mount_component(prevbutton, div1, null);
			append(div1, t10);
			mount_component(nextbutton, div1, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);

			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			tip.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			tip.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			prevbutton.$$.fragment.o(local);
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t3);
				detach(section0);
			}

			samplecode0.$destroy();

			tip.$destroy();

			samplecode1.$destroy();

			if (detaching) {
				detach(t8);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t9);
				detach(section1);
			}

			prevbutton.$destroy();

			nextbutton.$destroy();
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
			document.title = "FormValidation • validate() method";
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
import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import './chunk.47169253.js';
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
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/examples/accepting-test-credit-card-numbers/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/accepting-test-credit-card-numbers/index.svelte";

// (15:8) <Tip heading="Note">
function create_default_slot_1(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("The ");
			a = element("a");
			t1 = text("Transformer");
			t2 = text(" plugin changes the card numbers for validation process only.\n            When the form is submitted, you get the extract number that is initially provided by the user");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "The ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "Transformer");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " plugin changes the card numbers for validation process only.\n            When the form is submitted, you get the extract number that is initially provided by the user");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/transformer";
			a.className = "blue dim link";
			add_location(a, file, 15, 16, 905);
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
	var h1, t0, t1, section, p0, t2, t3, p1, t4, a, t5, t6, t7, p2, t8, t9, t10, p3, t11, t12, ul, li0, t13, t14, li1, t15, t16, t17, t18, current;

	var tip = new Tip({
		props: {
		heading: "Note",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/accepting-test-credit-card-numbers",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Showing credit card icon',
        'Validating credit card expiration date',
    ] },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['creditCard'] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Accepting test credit card numbers");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("Do you want some of fake, even invalid credit card numbers to be valid? For example, in the developing phase,\n            you might want the creditCard validator to accept a few of particular card numbers.");
			t3 = space();
			p1 = element("p");
			t4 = text("Of course, you don't need to modify the source code of creditCard validator and add your own numbers there.\n            FormValidation allows you to do it in a nice way via the ");
			a = element("a");
			t5 = text("Transformer");
			t6 = text(" plugin.");
			t7 = space();
			p2 = element("p");
			t8 = text("By using this option, we transform your test card numbers from an invalid to a valid one.");
			t9 = space();
			tip.$$.fragment.c();
			t10 = space();
			p3 = element("p");
			t11 = text("Test (invalid) credit card numbers that you want it to be valid:");
			t12 = space();
			ul = element("ul");
			li0 = element("li");
			t13 = text("3333222233332222");
			t14 = space();
			li1 = element("li");
			t15 = text("30030008444444");
			t16 = space();
			demo.$$.fragment.c();
			t17 = space();
			examples.$$.fragment.c();
			t18 = space();
			relatedvalidators.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Accepting test credit card numbers");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "Do you want some of fake, even invalid credit card numbers to be valid? For example, in the developing phase,\n            you might want the creditCard validator to accept a few of particular card numbers.");
			p0_nodes.forEach(detach);
			t3 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t4 = claim_text(p1_nodes, "Of course, you don't need to modify the source code of creditCard validator and add your own numbers there.\n            FormValidation allows you to do it in a nice way via the ");

			a = claim_element(p1_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t5 = claim_text(a_nodes, "Transformer");
			a_nodes.forEach(detach);
			t6 = claim_text(p1_nodes, " plugin.");
			p1_nodes.forEach(detach);
			t7 = claim_text(section_nodes, "\n        ");

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t8 = claim_text(p2_nodes, "By using this option, we transform your test card numbers from an invalid to a valid one.");
			p2_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n\n        ");
			tip.$$.fragment.l(section_nodes);
			t10 = claim_text(section_nodes, "\n\n        ");

			p3 = claim_element(section_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t11 = claim_text(p3_nodes, "Test (invalid) credit card numbers that you want it to be valid:");
			p3_nodes.forEach(detach);
			t12 = claim_text(section_nodes, "\n        ");

			ul = claim_element(section_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t13 = claim_text(li0_nodes, "3333222233332222");
			li0_nodes.forEach(detach);
			t14 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t15 = claim_text(li1_nodes, "30030008444444");
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t16 = claim_text(section_nodes, "\n\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t17 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t18 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 116);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 218);
			a.href = "/guide/plugins/transformer";
			a.className = "blue dim link";
			add_location(a, file, 11, 69, 651);
			p1.className = "lh-copy";
			add_location(p1, file, 10, 8, 455);
			p2.className = "lh-copy";
			add_location(p2, file, 12, 8, 746);
			p3.className = "lh-copy";
			add_location(p3, file, 19, 8, 1171);
			add_location(li0, file, 21, 12, 1308);
			add_location(li1, file, 22, 12, 1346);
			ul.className = "ma0 pl3 lh-copy";
			add_location(ul, file, 20, 8, 1267);
			section.className = "mv5";
			add_location(section, file, 7, 4, 188);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(section, t3);
			append(section, p1);
			append(p1, t4);
			append(p1, a);
			append(a, t5);
			append(p1, t6);
			append(section, t7);
			append(section, p2);
			append(p2, t8);
			append(section, t9);
			mount_component(tip, section, null);
			append(section, t10);
			append(section, p3);
			append(p3, t11);
			append(section, t12);
			append(section, ul);
			append(ul, li0);
			append(li0, t13);
			append(ul, t14);
			append(ul, li1);
			append(li1, t15);
			append(section, t16);
			mount_component(demo, section, null);
			insert(target, t17, anchor);
			mount_component(examples, target, anchor);
			insert(target, t18, anchor);
			mount_component(relatedvalidators, target, anchor);
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

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tip.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			tip.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t17);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t18);
			}

			relatedvalidators.$destroy(detaching);
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
			document.title = "FormValidation • Accepting test credit card numbers";
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
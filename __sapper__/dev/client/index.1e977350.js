import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.8206184d.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as ChangelogLayout } from './chunk.4a563e90.js';

/* src/routes/updates/v0.2.0/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/updates/v0.2.0/index.svelte";

// (10:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("New features");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "New features");
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

// (21:8) <Heading>
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Improvements");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Improvements");
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

// (28:8) <Heading>
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Bug fixes");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Bug fixes");
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

// (5:0) <ChangelogLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, h2, t2, t3, section0, t4, ul0, li0, t5, a0, t6, t7, li1, t8, a1, t9, t10, li2, t11, code0, t12, t13, t14, li3, t15, a2, t16, t17, li4, t18, code1, t19, t20, t21, section1, t22, ul1, li5, t23, code2, t24, t25, code3, t26, t27, code4, t28, t29, t30, section2, t31, ul2, li6, t32, a3, t33, t34, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Version 0.2.0");
			t1 = space();
			h2 = element("h2");
			t2 = text("Released 21 October 2013");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			ul0 = element("ul");
			li0 = element("li");
			t5 = text("Add ");
			a0 = element("a");
			t6 = text("creditCard validator");
			t7 = space();
			li1 = element("li");
			t8 = text("Add ");
			a1 = element("a");
			t9 = text("different validator");
			t10 = space();
			li2 = element("li");
			t11 = text("Add custom submit handler using ");
			code0 = element("code");
			t12 = text("submitHandler");
			t13 = text(" option");
			t14 = space();
			li3 = element("li");
			t15 = text("Add ");
			a2 = element("a");
			t16 = text("callback validator");
			t17 = space();
			li4 = element("li");
			t18 = text("Add ");
			code1 = element("code");
			t19 = text("live");
			t20 = text(" option");
			t21 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t22 = space();
			ul1 = element("ul");
			li5 = element("li");
			t23 = text("Support form that labels are placed in extra small (");
			code2 = element("code");
			t24 = text("col-xs-");
			t25 = text("), small (");
			code3 = element("code");
			t26 = text("col-sm-");
			t27 = text("), medium (");
			code4 = element("code");
			t28 = text("col-md-");
			t29 = text(") elements");
			t30 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t31 = space();
			ul2 = element("ul");
			li6 = element("li");
			t32 = text("The ");
			a3 = element("a");
			t33 = text("regexp validator");
			t34 = text(" does not work");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Version 0.2.0");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Released 21 October 2013");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			ul0 = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul0_nodes = children(ul0);

			li0 = claim_element(ul0_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t5 = claim_text(li0_nodes, "Add ");

			a0 = claim_element(li0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t6 = claim_text(a0_nodes, "creditCard validator");
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t7 = claim_text(ul0_nodes, "\n            ");

			li1 = claim_element(ul0_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t8 = claim_text(li1_nodes, "Add ");

			a1 = claim_element(li1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t9 = claim_text(a1_nodes, "different validator");
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t10 = claim_text(ul0_nodes, "\n            ");

			li2 = claim_element(ul0_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			t11 = claim_text(li2_nodes, "Add custom submit handler using ");

			code0 = claim_element(li2_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t12 = claim_text(code0_nodes, "submitHandler");
			code0_nodes.forEach(detach);
			t13 = claim_text(li2_nodes, " option");
			li2_nodes.forEach(detach);
			t14 = claim_text(ul0_nodes, "\n            ");

			li3 = claim_element(ul0_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			t15 = claim_text(li3_nodes, "Add ");

			a2 = claim_element(li3_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t16 = claim_text(a2_nodes, "callback validator");
			a2_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			t17 = claim_text(ul0_nodes, "\n            ");

			li4 = claim_element(ul0_nodes, "LI", {}, false);
			var li4_nodes = children(li4);

			t18 = claim_text(li4_nodes, "Add ");

			code1 = claim_element(li4_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t19 = claim_text(code1_nodes, "live");
			code1_nodes.forEach(detach);
			t20 = claim_text(li4_nodes, " option");
			li4_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t21 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t22 = claim_text(section1_nodes, "\n        ");

			ul1 = claim_element(section1_nodes, "UL", { class: true }, false);
			var ul1_nodes = children(ul1);

			li5 = claim_element(ul1_nodes, "LI", {}, false);
			var li5_nodes = children(li5);

			t23 = claim_text(li5_nodes, "Support form that labels are placed in extra small (");

			code2 = claim_element(li5_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t24 = claim_text(code2_nodes, "col-xs-");
			code2_nodes.forEach(detach);
			t25 = claim_text(li5_nodes, "), small (");

			code3 = claim_element(li5_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t26 = claim_text(code3_nodes, "col-sm-");
			code3_nodes.forEach(detach);
			t27 = claim_text(li5_nodes, "), medium (");

			code4 = claim_element(li5_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t28 = claim_text(code4_nodes, "col-md-");
			code4_nodes.forEach(detach);
			t29 = claim_text(li5_nodes, ") elements");
			li5_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t30 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t31 = claim_text(section2_nodes, "\n        ");

			ul2 = claim_element(section2_nodes, "UL", { class: true }, false);
			var ul2_nodes = children(ul2);

			li6 = claim_element(ul2_nodes, "LI", {}, false);
			var li6_nodes = children(li6);

			t32 = claim_text(li6_nodes, "The ");

			a3 = claim_element(li6_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t33 = claim_text(a3_nodes, "regexp validator");
			a3_nodes.forEach(detach);
			t34 = claim_text(li6_nodes, " does not work");
			li6_nodes.forEach(detach);
			ul2_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 92);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 143);
			a0.href = "/guide/validators/credit-card";
			a0.className = "blue dim link";
			add_location(a0, file, 11, 20, 323);
			add_location(li0, file, 11, 12, 315);
			a1.href = "/guide/validators/different";
			a1.className = "blue dim link";
			add_location(a1, file, 12, 20, 435);
			add_location(li1, file, 12, 12, 427);
			add_location(code0, file, 13, 48, 572);
			add_location(li2, file, 13, 12, 536);
			a2.href = "/guide/validators/callback";
			a2.className = "blue dim link";
			add_location(a2, file, 14, 20, 631);
			add_location(li3, file, 14, 12, 623);
			add_location(code1, file, 15, 20, 738);
			add_location(li4, file, 15, 12, 730);
			ul0.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul0, file, 10, 8, 270);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 200);
			add_location(code2, file, 22, 68, 973);
			add_location(code3, file, 22, 98, 1003);
			add_location(code4, file, 22, 129, 1034);
			add_location(li5, file, 22, 12, 917);
			ul1.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul1, file, 21, 8, 872);
			section1.className = "mv5";
			add_location(section1, file, 19, 4, 802);
			a3.href = "/guide/validators/regexp";
			a3.className = "blue dim link";
			add_location(a3, file, 29, 20, 1224);
			add_location(li6, file, 29, 12, 1216);
			ul2.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul2, file, 28, 8, 1171);
			section2.className = "mv5";
			add_location(section2, file, 26, 4, 1104);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t4);
			append(section0, ul0);
			append(ul0, li0);
			append(li0, t5);
			append(li0, a0);
			append(a0, t6);
			append(ul0, t7);
			append(ul0, li1);
			append(li1, t8);
			append(li1, a1);
			append(a1, t9);
			append(ul0, t10);
			append(ul0, li2);
			append(li2, t11);
			append(li2, code0);
			append(code0, t12);
			append(li2, t13);
			append(ul0, t14);
			append(ul0, li3);
			append(li3, t15);
			append(li3, a2);
			append(a2, t16);
			append(ul0, t17);
			append(ul0, li4);
			append(li4, t18);
			append(li4, code1);
			append(code1, t19);
			append(li4, t20);
			insert(target, t21, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t22);
			append(section1, ul1);
			append(ul1, li5);
			append(li5, t23);
			append(li5, code2);
			append(code2, t24);
			append(li5, t25);
			append(li5, code3);
			append(code3, t26);
			append(li5, t27);
			append(li5, code4);
			append(code4, t28);
			append(li5, t29);
			insert(target, t30, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t31);
			append(section2, ul2);
			append(ul2, li6);
			append(li6, t32);
			append(li6, a3);
			append(a3, t33);
			append(li6, t34);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
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

			heading0.$destroy();

			if (detaching) {
				detach(t21);
				detach(section1);
			}

			heading1.$destroy();

			if (detaching) {
				detach(t30);
				detach(section2);
			}

			heading2.$destroy();
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var changeloglayout = new ChangelogLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			changeloglayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			changeloglayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • v0.2.0";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(changeloglayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var changeloglayout_changes = {};
			if (changed.$$scope) changeloglayout_changes.$$scope = { changed, ctx };
			changeloglayout.$set(changeloglayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			changeloglayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			changeloglayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			changeloglayout.$destroy(detaching);
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
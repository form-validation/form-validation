import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.8206184d.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as ChangelogLayout } from './chunk.4a563e90.js';

/* src/routes/updates/v0.7.1/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/updates/v0.7.1/index.svelte";

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

// (31:8) <Heading>
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
	var h1, t0, t1, h2, t2, t3, section0, t4, ul0, li0, t5, code0, t6, t7, t8, li1, t9, code1, t10, t11, code2, t12, t13, code3, t14, t15, code4, t16, t17, t18, li2, t19, a0, t20, t21, code5, t22, t23, t24, li3, t25, a1, t26, t27, code6, t28, t29, t30, li4, t31, a2, t32, t33, t34, section1, t35, ul1, li5, t36, a3, t37, t38, t39, li6, t40, a4, t41, t42, t43, li7, t44, code7, t45, t46, a5, t47, t48, t49, li8, t50, a6, t51, t52, t53, section2, t54, ul2, li9, t55, a7, t56, t57, code8, t58, t59, code9, t60, t61, code10, t62, t63, li10, t64, a8, t65, t66, t67, li11, t68, a9, t69, t70, t71, li12, t72, t73, li13, t74, code11, t75, t76, code12, t77, t78, current;

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
			t0 = text("Version 0.7.1");
			t1 = space();
			h2 = element("h2");
			t2 = text("Released 01 February 2016");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			ul0 = element("ul");
			li0 = element("li");
			t5 = text("Add new ");
			code0 = element("code");
			t6 = text("priority");
			t7 = text(" option that allows to set the validator execution order");
			t8 = space();
			li1 = element("li");
			t9 = text("Add ");
			code1 = element("code");
			t10 = text("rst.field.fv");
			t11 = text(" and ");
			code2 = element("code");
			t12 = text("rst.form.fv");
			t13 = text(" events that are triggered after calling ");
			code3 = element("code");
			t14 = text("resetField()");
			t15 = text(" and ");
			code4 = element("code");
			t16 = text("resetForm()");
			t17 = text(" methods, respectively");
			t18 = space();
			li2 = element("li");
			t19 = text("The ");
			a0 = element("a");
			t20 = text("regexp");
			t21 = text(" validator provides new ");
			code5 = element("code");
			t22 = text("flags");
			t23 = text(" option to use in declarative mode");
			t24 = space();
			li3 = element("li");
			t25 = text("The ");
			a1 = element("a");
			t26 = text("remote");
			t27 = text(" validator supports synchronous via new ");
			code6 = element("code");
			t28 = text("async");
			t29 = text(" option");
			t30 = space();
			li4 = element("li");
			t31 = text("The ");
			a2 = element("a");
			t32 = text("id");
			t33 = text(" validator now supports Turkish identification number");
			t34 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t35 = space();
			ul1 = element("ul");
			li5 = element("li");
			t36 = text("The ");
			a3 = element("a");
			t37 = text("mac");
			t38 = text(" validator now supports all formats of IEEE 802 standards");
			t39 = space();
			li6 = element("li");
			t40 = text("Support ");
			a4 = element("a");
			t41 = text("UIKit form-password");
			t42 = text(" component");
			t43 = space();
			li7 = element("li");
			t44 = text("The fields of ");
			code7 = element("code");
			t45 = text("fields");
			t46 = text(" option provided by the ");
			a5 = element("a");
			t47 = text("different");
			t48 = text(" validator can be separated by a comma with or without a space");
			t49 = space();
			li8 = element("li");
			t50 = text("The ");
			a6 = element("a");
			t51 = text("phone");
			t52 = text(" validator adds support for (123) 456-7890 US phone numbers");
			t53 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t54 = space();
			ul2 = element("ul");
			li9 = element("li");
			t55 = text("Fix an issue caused by the ");
			a7 = element("a");
			t56 = text("date");
			t57 = text(" validator when the ");
			code8 = element("code");
			t58 = text("min");
			t59 = text(", ");
			code9 = element("code");
			t60 = text("max");
			t61 = text(" options follows the same format as ");
			code10 = element("code");
			t62 = text("format");
			t63 = space();
			li10 = element("li");
			t64 = text("The ");
			a8 = element("a");
			t65 = text("numeric");
			t66 = text(" validator accepts numbers without a preceding zero");
			t67 = space();
			li11 = element("li");
			t68 = text("The ");
			a9 = element("a");
			t69 = text("ein");
			t70 = text(" validator now supports identification numbers that start with \"47-\"");
			t71 = space();
			li12 = element("li");
			t72 = text("Fix the typo in German language package");
			t73 = space();
			li13 = element("li");
			t74 = text("The ");
			code11 = element("code");
			t75 = text("updateMessage()");
			t76 = text(" method doesn't work properly if the ");
			code12 = element("code");
			t77 = text("selector");
			t78 = text(" contains multiple class names");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Version 0.7.1");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Released 01 February 2016");
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

			t5 = claim_text(li0_nodes, "Add new ");

			code0 = claim_element(li0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t6 = claim_text(code0_nodes, "priority");
			code0_nodes.forEach(detach);
			t7 = claim_text(li0_nodes, " option that allows to set the validator execution order");
			li0_nodes.forEach(detach);
			t8 = claim_text(ul0_nodes, "\n            ");

			li1 = claim_element(ul0_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t9 = claim_text(li1_nodes, "Add ");

			code1 = claim_element(li1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t10 = claim_text(code1_nodes, "rst.field.fv");
			code1_nodes.forEach(detach);
			t11 = claim_text(li1_nodes, " and ");

			code2 = claim_element(li1_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t12 = claim_text(code2_nodes, "rst.form.fv");
			code2_nodes.forEach(detach);
			t13 = claim_text(li1_nodes, " events that are triggered after calling ");

			code3 = claim_element(li1_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t14 = claim_text(code3_nodes, "resetField()");
			code3_nodes.forEach(detach);
			t15 = claim_text(li1_nodes, " and ");

			code4 = claim_element(li1_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t16 = claim_text(code4_nodes, "resetForm()");
			code4_nodes.forEach(detach);
			t17 = claim_text(li1_nodes, " methods, respectively");
			li1_nodes.forEach(detach);
			t18 = claim_text(ul0_nodes, "\n            ");

			li2 = claim_element(ul0_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			t19 = claim_text(li2_nodes, "The ");

			a0 = claim_element(li2_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t20 = claim_text(a0_nodes, "regexp");
			a0_nodes.forEach(detach);
			t21 = claim_text(li2_nodes, " validator provides new ");

			code5 = claim_element(li2_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t22 = claim_text(code5_nodes, "flags");
			code5_nodes.forEach(detach);
			t23 = claim_text(li2_nodes, " option to use in declarative mode");
			li2_nodes.forEach(detach);
			t24 = claim_text(ul0_nodes, "\n            ");

			li3 = claim_element(ul0_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			t25 = claim_text(li3_nodes, "The ");

			a1 = claim_element(li3_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t26 = claim_text(a1_nodes, "remote");
			a1_nodes.forEach(detach);
			t27 = claim_text(li3_nodes, " validator supports synchronous via new ");

			code6 = claim_element(li3_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t28 = claim_text(code6_nodes, "async");
			code6_nodes.forEach(detach);
			t29 = claim_text(li3_nodes, " option");
			li3_nodes.forEach(detach);
			t30 = claim_text(ul0_nodes, "\n            ");

			li4 = claim_element(ul0_nodes, "LI", {}, false);
			var li4_nodes = children(li4);

			t31 = claim_text(li4_nodes, "The ");

			a2 = claim_element(li4_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t32 = claim_text(a2_nodes, "id");
			a2_nodes.forEach(detach);
			t33 = claim_text(li4_nodes, " validator now supports Turkish identification number");
			li4_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t34 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t35 = claim_text(section1_nodes, "\n        ");

			ul1 = claim_element(section1_nodes, "UL", { class: true }, false);
			var ul1_nodes = children(ul1);

			li5 = claim_element(ul1_nodes, "LI", {}, false);
			var li5_nodes = children(li5);

			t36 = claim_text(li5_nodes, "The ");

			a3 = claim_element(li5_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t37 = claim_text(a3_nodes, "mac");
			a3_nodes.forEach(detach);
			t38 = claim_text(li5_nodes, " validator now supports all formats of IEEE 802 standards");
			li5_nodes.forEach(detach);
			t39 = claim_text(ul1_nodes, "\n            ");

			li6 = claim_element(ul1_nodes, "LI", {}, false);
			var li6_nodes = children(li6);

			t40 = claim_text(li6_nodes, "Support ");

			a4 = claim_element(li6_nodes, "A", { href: true, class: true }, false);
			var a4_nodes = children(a4);

			t41 = claim_text(a4_nodes, "UIKit form-password");
			a4_nodes.forEach(detach);
			t42 = claim_text(li6_nodes, " component");
			li6_nodes.forEach(detach);
			t43 = claim_text(ul1_nodes, "\n            ");

			li7 = claim_element(ul1_nodes, "LI", {}, false);
			var li7_nodes = children(li7);

			t44 = claim_text(li7_nodes, "The fields of ");

			code7 = claim_element(li7_nodes, "CODE", {}, false);
			var code7_nodes = children(code7);

			t45 = claim_text(code7_nodes, "fields");
			code7_nodes.forEach(detach);
			t46 = claim_text(li7_nodes, " option provided by the ");

			a5 = claim_element(li7_nodes, "A", { href: true, class: true }, false);
			var a5_nodes = children(a5);

			t47 = claim_text(a5_nodes, "different");
			a5_nodes.forEach(detach);
			t48 = claim_text(li7_nodes, " validator can be separated by a comma with or without a space");
			li7_nodes.forEach(detach);
			t49 = claim_text(ul1_nodes, "\n            ");

			li8 = claim_element(ul1_nodes, "LI", {}, false);
			var li8_nodes = children(li8);

			t50 = claim_text(li8_nodes, "The ");

			a6 = claim_element(li8_nodes, "A", { href: true, class: true }, false);
			var a6_nodes = children(a6);

			t51 = claim_text(a6_nodes, "phone");
			a6_nodes.forEach(detach);
			t52 = claim_text(li8_nodes, " validator adds support for (123) 456-7890 US phone numbers");
			li8_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t53 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t54 = claim_text(section2_nodes, "\n        ");

			ul2 = claim_element(section2_nodes, "UL", { class: true }, false);
			var ul2_nodes = children(ul2);

			li9 = claim_element(ul2_nodes, "LI", {}, false);
			var li9_nodes = children(li9);

			t55 = claim_text(li9_nodes, "Fix an issue caused by the ");

			a7 = claim_element(li9_nodes, "A", { href: true, class: true }, false);
			var a7_nodes = children(a7);

			t56 = claim_text(a7_nodes, "date");
			a7_nodes.forEach(detach);
			t57 = claim_text(li9_nodes, " validator when the ");

			code8 = claim_element(li9_nodes, "CODE", {}, false);
			var code8_nodes = children(code8);

			t58 = claim_text(code8_nodes, "min");
			code8_nodes.forEach(detach);
			t59 = claim_text(li9_nodes, ", ");

			code9 = claim_element(li9_nodes, "CODE", {}, false);
			var code9_nodes = children(code9);

			t60 = claim_text(code9_nodes, "max");
			code9_nodes.forEach(detach);
			t61 = claim_text(li9_nodes, " options follows the same format as ");

			code10 = claim_element(li9_nodes, "CODE", {}, false);
			var code10_nodes = children(code10);

			t62 = claim_text(code10_nodes, "format");
			code10_nodes.forEach(detach);
			li9_nodes.forEach(detach);
			t63 = claim_text(ul2_nodes, "\n            ");

			li10 = claim_element(ul2_nodes, "LI", {}, false);
			var li10_nodes = children(li10);

			t64 = claim_text(li10_nodes, "The ");

			a8 = claim_element(li10_nodes, "A", { href: true, class: true }, false);
			var a8_nodes = children(a8);

			t65 = claim_text(a8_nodes, "numeric");
			a8_nodes.forEach(detach);
			t66 = claim_text(li10_nodes, " validator accepts numbers without a preceding zero");
			li10_nodes.forEach(detach);
			t67 = claim_text(ul2_nodes, "\n            ");

			li11 = claim_element(ul2_nodes, "LI", {}, false);
			var li11_nodes = children(li11);

			t68 = claim_text(li11_nodes, "The ");

			a9 = claim_element(li11_nodes, "A", { href: true, class: true }, false);
			var a9_nodes = children(a9);

			t69 = claim_text(a9_nodes, "ein");
			a9_nodes.forEach(detach);
			t70 = claim_text(li11_nodes, " validator now supports identification numbers that start with \"47-\"");
			li11_nodes.forEach(detach);
			t71 = claim_text(ul2_nodes, "\n            ");

			li12 = claim_element(ul2_nodes, "LI", {}, false);
			var li12_nodes = children(li12);

			t72 = claim_text(li12_nodes, "Fix the typo in German language package");
			li12_nodes.forEach(detach);
			t73 = claim_text(ul2_nodes, "\n            ");

			li13 = claim_element(ul2_nodes, "LI", {}, false);
			var li13_nodes = children(li13);

			t74 = claim_text(li13_nodes, "The ");

			code11 = claim_element(li13_nodes, "CODE", {}, false);
			var code11_nodes = children(code11);

			t75 = claim_text(code11_nodes, "updateMessage()");
			code11_nodes.forEach(detach);
			t76 = claim_text(li13_nodes, " method doesn't work properly if the ");

			code12 = claim_element(li13_nodes, "CODE", {}, false);
			var code12_nodes = children(code12);

			t77 = claim_text(code12_nodes, "selector");
			code12_nodes.forEach(detach);
			t78 = claim_text(li13_nodes, " contains multiple class names");
			li13_nodes.forEach(detach);
			ul2_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 92);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 143);
			add_location(code0, file, 11, 24, 328);
			add_location(li0, file, 11, 12, 316);
			add_location(code1, file, 12, 20, 431);
			add_location(code2, file, 12, 50, 461);
			add_location(code3, file, 12, 115, 526);
			add_location(code4, file, 12, 145, 556);
			add_location(li1, file, 12, 12, 423);
			a0.href = "/guide/validators/regexp";
			a0.className = "blue dim link";
			add_location(a0, file, 13, 20, 628);
			add_location(code5, file, 13, 111, 719);
			add_location(li2, file, 13, 12, 620);
			a1.href = "/guide/validators/remote";
			a1.className = "blue dim link";
			add_location(a1, file, 14, 20, 797);
			add_location(code6, file, 14, 127, 904);
			add_location(li3, file, 14, 12, 789);
			a2.href = "/guide/validators/id";
			a2.className = "blue dim link";
			add_location(a2, file, 15, 20, 955);
			add_location(li4, file, 15, 12, 947);
			ul0.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul0, file, 10, 8, 271);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 201);
			a3.href = "/guide/validators/mac";
			a3.className = "blue dim link";
			add_location(a3, file, 22, 20, 1230);
			add_location(li5, file, 22, 12, 1222);
			a4.href = "http://getuikit.com/docs/form-password.html";
			a4.className = "blue dim link";
			add_location(a4, file, 23, 24, 1378);
			add_location(li6, file, 23, 12, 1366);
			add_location(code7, file, 24, 30, 1523);
			a5.href = "/guide/validators/different";
			a5.className = "blue dim link";
			add_location(a5, file, 24, 73, 1566);
			add_location(li7, file, 24, 12, 1505);
			a6.href = "/guide/validators/phone";
			a6.className = "blue dim link";
			add_location(a6, file, 25, 20, 1727);
			add_location(li8, file, 25, 12, 1719);
			ul1.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul1, file, 21, 8, 1177);
			section1.className = "mv5";
			add_location(section1, file, 19, 4, 1107);
			a7.href = "/guide/validators/date";
			a7.className = "blue dim link";
			add_location(a7, file, 32, 43, 2034);
			add_location(code8, file, 32, 126, 2117);
			add_location(code9, file, 32, 144, 2135);
			add_location(code10, file, 32, 196, 2187);
			add_location(li9, file, 32, 12, 2003);
			a8.href = "/guide/validators/numeric";
			a8.className = "blue dim link";
			add_location(a8, file, 33, 20, 2232);
			add_location(li10, file, 33, 12, 2224);
			a9.href = "/guide/validators/ein";
			a9.className = "blue dim link";
			add_location(a9, file, 34, 20, 2378);
			add_location(li11, file, 34, 12, 2370);
			add_location(li12, file, 35, 12, 2525);
			add_location(code11, file, 36, 20, 2594);
			add_location(code12, file, 36, 85, 2659);
			add_location(li13, file, 36, 12, 2586);
			ul2.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul2, file, 31, 8, 1958);
			section2.className = "mv5";
			add_location(section2, file, 29, 4, 1891);
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
			append(li0, code0);
			append(code0, t6);
			append(li0, t7);
			append(ul0, t8);
			append(ul0, li1);
			append(li1, t9);
			append(li1, code1);
			append(code1, t10);
			append(li1, t11);
			append(li1, code2);
			append(code2, t12);
			append(li1, t13);
			append(li1, code3);
			append(code3, t14);
			append(li1, t15);
			append(li1, code4);
			append(code4, t16);
			append(li1, t17);
			append(ul0, t18);
			append(ul0, li2);
			append(li2, t19);
			append(li2, a0);
			append(a0, t20);
			append(li2, t21);
			append(li2, code5);
			append(code5, t22);
			append(li2, t23);
			append(ul0, t24);
			append(ul0, li3);
			append(li3, t25);
			append(li3, a1);
			append(a1, t26);
			append(li3, t27);
			append(li3, code6);
			append(code6, t28);
			append(li3, t29);
			append(ul0, t30);
			append(ul0, li4);
			append(li4, t31);
			append(li4, a2);
			append(a2, t32);
			append(li4, t33);
			insert(target, t34, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t35);
			append(section1, ul1);
			append(ul1, li5);
			append(li5, t36);
			append(li5, a3);
			append(a3, t37);
			append(li5, t38);
			append(ul1, t39);
			append(ul1, li6);
			append(li6, t40);
			append(li6, a4);
			append(a4, t41);
			append(li6, t42);
			append(ul1, t43);
			append(ul1, li7);
			append(li7, t44);
			append(li7, code7);
			append(code7, t45);
			append(li7, t46);
			append(li7, a5);
			append(a5, t47);
			append(li7, t48);
			append(ul1, t49);
			append(ul1, li8);
			append(li8, t50);
			append(li8, a6);
			append(a6, t51);
			append(li8, t52);
			insert(target, t53, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t54);
			append(section2, ul2);
			append(ul2, li9);
			append(li9, t55);
			append(li9, a7);
			append(a7, t56);
			append(li9, t57);
			append(li9, code8);
			append(code8, t58);
			append(li9, t59);
			append(li9, code9);
			append(code9, t60);
			append(li9, t61);
			append(li9, code10);
			append(code10, t62);
			append(ul2, t63);
			append(ul2, li10);
			append(li10, t64);
			append(li10, a8);
			append(a8, t65);
			append(li10, t66);
			append(ul2, t67);
			append(ul2, li11);
			append(li11, t68);
			append(li11, a9);
			append(a9, t69);
			append(li11, t70);
			append(ul2, t71);
			append(ul2, li12);
			append(li12, t72);
			append(ul2, t73);
			append(ul2, li13);
			append(li13, t74);
			append(li13, code11);
			append(code11, t75);
			append(li13, t76);
			append(li13, code12);
			append(code12, t77);
			append(li13, t78);
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
				detach(t34);
				detach(section1);
			}

			heading1.$destroy();

			if (detaching) {
				detach(t53);
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
			document.title = "FormValidation • v0.7.1";
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
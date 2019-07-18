import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/validators/different/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/different/index.svelte";

// (10:8) <Heading>
function create_default_slot_5(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Options");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Options");
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

// (58:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Basic Example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Basic Example");
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

// (61:8) <Tip>
function create_default_slot_3(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("Take a look at the ");
			a = element("a");
			t1 = text("Asking fields to be unique");
			t2 = text(" example if you want to compare more than two fields at the same time");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "Take a look at the ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "Asking fields to be unique");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " example if you want to compare more than two fields at the same time");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/examples/asking-fields-to-be-unique";
			a.className = "blue dim link";
			add_location(a, file, 60, 32, 2322);
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

// (69:12) <PrevButton target="/guide/validators/date">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("date validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "date validator");
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

// (70:12) <NextButton target="/guide/validators/digits">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("digits validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "digits validator");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, h30, t5, t6, p0, sup0, t7, t8, a, t9, t10, t11, table, tr0, th0, t12, t13, th1, t14, t15, th2, t16, t17, th3, t18, t19, tr1, td0, code0, t20, sup1, t21, t22, td1, code1, t23, t24, td2, t25, t26, td3, t27, t28, tr2, td4, code2, t29, t30, td5, code3, t31, t32, td6, t33, t34, td7, t35, t36, h31, t37, t38, t39, section1, t40, p1, t41, t42, t43, t44, t45, section2, div, t46, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import different from 'formvalidation/dist/es6/validators/different';

const result = different().validate({
    value: ...,
    options: {
        compare: ...,
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message     
}
*/
` },
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/validators/different/basic",
		frameworks: ['bootstrap', 'tachyons']
	},
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['identical'] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators/date",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/validators/digits",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("different validator");
			t1 = space();
			h2 = element("h2");
			t2 = text("Check if the input value is different with given value");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			h30 = element("h3");
			t5 = text("Using with form field");
			t6 = space();
			p0 = element("p");
			sup0 = element("sup");
			t7 = text("*");
			t8 = text(" presents a required option. The HTML attributes are used to set the validator options via the ");
			a = element("a");
			t9 = text("Declarative");
			t10 = text(" plugin");
			t11 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t12 = text("Name");
			t13 = space();
			th1 = element("th");
			t14 = text("HTML attribute");
			t15 = space();
			th2 = element("th");
			t16 = text("Type");
			t17 = space();
			th3 = element("th");
			t18 = text("Description");
			t19 = space();
			tr1 = element("tr");
			td0 = element("td");
			code0 = element("code");
			t20 = text("compare");
			sup1 = element("sup");
			t21 = text("*");
			t22 = space();
			td1 = element("td");
			code1 = element("code");
			t23 = text("data-fv-different___compare");
			t24 = space();
			td2 = element("td");
			t25 = text("String or a function returns a string");
			t26 = space();
			td3 = element("td");
			t27 = text("The value that the field has to be different with");
			t28 = space();
			tr2 = element("tr");
			td4 = element("td");
			code2 = element("code");
			t29 = text("message");
			t30 = space();
			td5 = element("td");
			code3 = element("code");
			t31 = text("data-fv-different___message");
			t32 = space();
			td6 = element("td");
			t33 = text("String");
			t34 = space();
			td7 = element("td");
			t35 = text("The error message");
			t36 = space();
			h31 = element("h3");
			t37 = text("Using with ES6 module");
			t38 = space();
			samplecode.$$.fragment.c();
			t39 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t40 = space();
			p1 = element("p");
			t41 = text("The registration form below doesn't allow the username and password to be the same:");
			t42 = space();
			tip.$$.fragment.c();
			t43 = space();
			demo.$$.fragment.c();
			t44 = space();
			relatedvalidators.$$.fragment.c();
			t45 = space();
			section2 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t46 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "different validator");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Check if the input value is different with given value");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n\n        ");

			h30 = claim_element(section0_nodes, "H3", {}, false);
			var h30_nodes = children(h30);

			t5 = claim_text(h30_nodes, "Using with form field");
			h30_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			sup0 = claim_element(p0_nodes, "SUP", {}, false);
			var sup0_nodes = children(sup0);

			t7 = claim_text(sup0_nodes, "*");
			sup0_nodes.forEach(detach);
			t8 = claim_text(p0_nodes, " presents a required option. The HTML attributes are used to set the validator options via the ");

			a = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t9 = claim_text(a_nodes, "Declarative");
			a_nodes.forEach(detach);
			t10 = claim_text(p0_nodes, " plugin");
			p0_nodes.forEach(detach);
			t11 = claim_text(section0_nodes, "\n        ");

			table = claim_element(section0_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr0 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr0_nodes = children(tr0);

			th0 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t12 = claim_text(th0_nodes, "Name");
			th0_nodes.forEach(detach);
			t13 = claim_text(tr0_nodes, "\n                ");

			th1 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t14 = claim_text(th1_nodes, "HTML attribute");
			th1_nodes.forEach(detach);
			t15 = claim_text(tr0_nodes, "\n                ");

			th2 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th2_nodes = children(th2);

			t16 = claim_text(th2_nodes, "Type");
			th2_nodes.forEach(detach);
			t17 = claim_text(tr0_nodes, "\n                ");

			th3 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th3_nodes = children(th3);

			t18 = claim_text(th3_nodes, "Description");
			th3_nodes.forEach(detach);
			tr0_nodes.forEach(detach);
			t19 = claim_text(table_nodes, "\n            ");

			tr1 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code0 = claim_element(td0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t20 = claim_text(code0_nodes, "compare");
			code0_nodes.forEach(detach);

			sup1 = claim_element(td0_nodes, "SUP", {}, false);
			var sup1_nodes = children(sup1);

			t21 = claim_text(sup1_nodes, "*");
			sup1_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t22 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			code1 = claim_element(td1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t23 = claim_text(code1_nodes, "data-fv-different___compare");
			code1_nodes.forEach(detach);
			td1_nodes.forEach(detach);
			t24 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			t25 = claim_text(td2_nodes, "String or a function returns a string");
			td2_nodes.forEach(detach);
			t26 = claim_text(tr1_nodes, "\n                ");

			td3 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			t27 = claim_text(td3_nodes, "The value that the field has to be different with");
			td3_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			t28 = claim_text(table_nodes, "\n            ");

			tr2 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr2_nodes = children(tr2);

			td4 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td4_nodes = children(td4);

			code2 = claim_element(td4_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t29 = claim_text(code2_nodes, "message");
			code2_nodes.forEach(detach);
			td4_nodes.forEach(detach);
			t30 = claim_text(tr2_nodes, "\n                ");

			td5 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td5_nodes = children(td5);

			code3 = claim_element(td5_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t31 = claim_text(code3_nodes, "data-fv-different___message");
			code3_nodes.forEach(detach);
			td5_nodes.forEach(detach);
			t32 = claim_text(tr2_nodes, "\n                ");

			td6 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td6_nodes = children(td6);

			t33 = claim_text(td6_nodes, "String");
			td6_nodes.forEach(detach);
			t34 = claim_text(tr2_nodes, "\n                ");

			td7 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td7_nodes = children(td7);

			t35 = claim_text(td7_nodes, "The error message");
			td7_nodes.forEach(detach);
			tr2_nodes.forEach(detach);
			table_nodes.forEach(detach);
			t36 = claim_text(section0_nodes, "\n\n        ");

			h31 = claim_element(section0_nodes, "H3", {}, false);
			var h31_nodes = children(h31);

			t37 = claim_text(h31_nodes, "Using with ES6 module");
			h31_nodes.forEach(detach);
			t38 = claim_text(section0_nodes, "\n");
			samplecode.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t39 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t40 = claim_text(section1_nodes, "\n\n        ");

			p1 = claim_element(section1_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t41 = claim_text(p1_nodes, "The registration form below doesn't allow the username and password to be the same:");
			p1_nodes.forEach(detach);
			t42 = claim_text(section1_nodes, "\n        ");
			tip.$$.fragment.l(section1_nodes);
			t43 = claim_text(section1_nodes, "\n        ");
			demo.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t44 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			t45 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			div = claim_element(section2_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t46 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 101);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 158);
			add_location(h30, file, 11, 8, 311);
			add_location(sup0, file, 12, 29, 371);
			a.href = "/guide/plugins/declarative";
			a.className = "blue dim link";
			add_location(a, file, 12, 136, 478);
			p0.className = "lh-copy i";
			add_location(p0, file, 12, 8, 350);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 15, 16, 691);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 16, 16, 751);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 17, 16, 821);
			th3.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th3, file, 18, 16, 881);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 14, 12, 642);
			add_location(code0, file, 21, 36, 1031);
			add_location(sup1, file, 21, 56, 1051);
			td0.className = "pv2 ph3";
			add_location(td0, file, 21, 16, 1011);
			add_location(code1, file, 22, 36, 1105);
			td1.className = "pv2 ph3";
			add_location(td1, file, 22, 16, 1085);
			td2.className = "pv2 ph3";
			add_location(td2, file, 23, 16, 1167);
			td3.className = "pv2 ph3";
			add_location(td3, file, 24, 16, 1246);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 20, 12, 962);
			add_location(code2, file, 27, 36, 1420);
			td4.className = "pv2 ph3";
			add_location(td4, file, 27, 16, 1400);
			add_location(code3, file, 28, 36, 1482);
			td5.className = "pv2 ph3";
			add_location(td5, file, 28, 16, 1462);
			td6.className = "pv2 ph3";
			add_location(td6, file, 29, 16, 1544);
			td7.className = "pv2 ph3";
			add_location(td7, file, 30, 16, 1592);
			tr2.className = "striped--light-gray";
			add_location(tr2, file, 26, 12, 1351);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100";
			add_location(table, file, 13, 8, 572);
			add_location(h31, file, 34, 8, 1679);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 245);
			p1.className = "lh-copy";
			add_location(p1, file, 59, 8, 2183);
			section1.className = "mv5";
			add_location(section1, file, 56, 4, 2111);
			div.className = "flex";
			add_location(div, file, 67, 8, 2706);
			section2.className = "mv5";
			add_location(section2, file, 66, 4, 2676);
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
			append(section0, h30);
			append(h30, t5);
			append(section0, t6);
			append(section0, p0);
			append(p0, sup0);
			append(sup0, t7);
			append(p0, t8);
			append(p0, a);
			append(a, t9);
			append(p0, t10);
			append(section0, t11);
			append(section0, table);
			append(table, tr0);
			append(tr0, th0);
			append(th0, t12);
			append(tr0, t13);
			append(tr0, th1);
			append(th1, t14);
			append(tr0, t15);
			append(tr0, th2);
			append(th2, t16);
			append(tr0, t17);
			append(tr0, th3);
			append(th3, t18);
			append(table, t19);
			append(table, tr1);
			append(tr1, td0);
			append(td0, code0);
			append(code0, t20);
			append(td0, sup1);
			append(sup1, t21);
			append(tr1, t22);
			append(tr1, td1);
			append(td1, code1);
			append(code1, t23);
			append(tr1, t24);
			append(tr1, td2);
			append(td2, t25);
			append(tr1, t26);
			append(tr1, td3);
			append(td3, t27);
			append(table, t28);
			append(table, tr2);
			append(tr2, td4);
			append(td4, code2);
			append(code2, t29);
			append(tr2, t30);
			append(tr2, td5);
			append(td5, code3);
			append(code3, t31);
			append(tr2, t32);
			append(tr2, td6);
			append(td6, t33);
			append(tr2, t34);
			append(tr2, td7);
			append(td7, t35);
			append(section0, t36);
			append(section0, h31);
			append(h31, t37);
			append(section0, t38);
			mount_component(samplecode, section0, null);
			insert(target, t39, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t40);
			append(section1, p1);
			append(p1, t41);
			append(section1, t42);
			mount_component(tip, section1, null);
			append(section1, t43);
			mount_component(demo, section1, null);
			insert(target, t44, anchor);
			mount_component(relatedvalidators, target, anchor);
			insert(target, t45, anchor);
			insert(target, section2, anchor);
			append(section2, div);
			mount_component(prevbutton, div, null);
			append(div, t46);
			mount_component(nextbutton, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

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
			heading0.$$.fragment.i(local);

			samplecode.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			tip.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			tip.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
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

			heading0.$destroy();

			samplecode.$destroy();

			if (detaching) {
				detach(t39);
				detach(section1);
			}

			heading1.$destroy();

			tip.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t44);
			}

			relatedvalidators.$destroy(detaching);

			if (detaching) {
				detach(t45);
				detach(section2);
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
			document.title = "FormValidation • different validator";
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
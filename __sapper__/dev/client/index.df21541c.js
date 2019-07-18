import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, k as claim_element, l as children, n as add_location, i as text, p as append, z as check_outros, I as destroy_each, r as noop, y as on_outro, x as group_outros } from './chunk.989912da.js';
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
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import { a as slug } from './chunk.7ee4e2c0.js';
import './chunk.609a43e8.js';
import { a as SampleData } from './chunk.41999a23.js';
import { a as vatData } from './chunk.c04993c9.js';

/* src/routes/guide/validators/vin/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/vin/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.sample = list[i];
	return child_ctx;
}

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

// (51:8) <Heading>
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

// (59:12) {#each _samples as sample}
function create_each_block(ctx) {
	var tr, current;

	var sampledata = new SampleData({
		props: {
		sample: ctx.sample,
		sender: "/guide/validators/vin/basic"
	},
		$$inline: true
	});

	return {
		c: function create() {
			tr = element("tr");
			sampledata.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			tr = claim_element(nodes, "TR", { class: true }, false);
			var tr_nodes = children(tr);

			sampledata.$$.fragment.l(tr_nodes);
			tr_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			tr.className = "striped--light-gray";
			add_location(tr, file, 59, 12, 2179);
		},

		m: function mount(target, anchor) {
			insert(target, tr, anchor);
			mount_component(sampledata, tr, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var sampledata_changes = {};
			if (changed._samples) sampledata_changes.sample = ctx.sample;
			sampledata.$set(sampledata_changes);
		},

		i: function intro(local) {
			if (current) return;
			sampledata.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			sampledata.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(tr);
			}

			sampledata.$destroy();
		}
	};
}

// (70:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("ES6 Module Example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "ES6 Module Example");
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

// (97:12) <PrevButton target="/guide/validators/vat/{slug(vatData[vatData.length - 1].adjective)}-vat-number">
function create_default_slot_2(ctx) {
	var t0_value = vatData[vatData.length - 1].adjective, t0, t1;

	return {
		c: function create() {
			t0 = text(t0_value);
			t1 = text(" vat validator");
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_text(nodes, " vat validator");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(t1);
			}
		}
	};
}

// (98:12) <NextButton target="/guide/validators/zip-code">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("zipCode validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "zipCode validator");
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
	var h1, t0, t1, h2, t2, a0, t3, t4, section0, t5, h30, t6, t7, p0, t8, a1, t9, t10, t11, table0, tr0, th0, t12, t13, th1, t14, t15, th2, t16, t17, th3, t18, t19, tr1, td0, code0, t20, t21, td1, code1, t22, t23, td2, t24, t25, td3, t26, t27, h31, t28, t29, t30, section1, t31, p1, t32, t33, table1, tr2, th4, t34, t35, th5, t36, t37, t38, t39, section2, t40, p2, t41, t42, t43, section3, div, t44, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import vin from 'formvalidation/dist/es6/validators/vin';

const result = vin().validate({
    value: ...,
    options: {
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

	var each_value = ctx._samples;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	function outro_block(i, detaching, local) {
		if (each_blocks[i]) {
			if (detaching) {
				on_outro(() => {
					each_blocks[i].d(detaching);
					each_blocks[i] = null;
				});
			}

			each_blocks[i].o(local);
		}
	}

	var demo = new Demo({
		props: {
		prefix: "/guide/validators/vin/basic",
		frameworks: ['bootstrap', 'tachyons']
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import vin from 'formvalidation/dist/es6/validators/vin';

const res1 = vin().validate({
    value: '192.168.1.1',
    options: {
        message: 'The value is not valid IP address',
    },
});
// res1.valid === true

const res2 = vin().validate({
    value: 'JTMKF4DV5B5309254',
    options: {
        message: 'The value is not valid VIN',
    },
});
// res2.valid === false
` },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators/vat/" + slug(vatData[vatData.length - 1].adjective) + "-vat-number",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/validators/zip-code",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("vin validator");
			t1 = space();
			h2 = element("h2");
			t2 = text("Validate an ");
			a0 = element("a");
			t3 = text("US VIN (Vehicle Identification Number)");
			t4 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t5 = space();
			h30 = element("h3");
			t6 = text("Using with form field");
			t7 = space();
			p0 = element("p");
			t8 = text("The HTML attributes are used to set the validator options via the ");
			a1 = element("a");
			t9 = text("Declarative");
			t10 = text(" plugin");
			t11 = space();
			table0 = element("table");
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
			t20 = text("message");
			t21 = space();
			td1 = element("td");
			code1 = element("code");
			t22 = text("data-fv-vin___message");
			t23 = space();
			td2 = element("td");
			t24 = text("String");
			t25 = space();
			td3 = element("td");
			t26 = text("The error message");
			t27 = space();
			h31 = element("h3");
			t28 = text("Using with ES6 module");
			t29 = space();
			samplecode0.$$.fragment.c();
			t30 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t31 = space();
			p1 = element("p");
			t32 = text("You can click on sample to see if it's a valid or invalid VIN.");
			t33 = space();
			table1 = element("table");
			tr2 = element("tr");
			th4 = element("th");
			t34 = text("Sample");
			t35 = space();
			th5 = element("th");
			t36 = text("Is valid?");
			t37 = space();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t38 = space();
			demo.$$.fragment.c();
			t39 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t40 = space();
			p2 = element("p");
			t41 = text("The following snippet shows how to use the vin validator with ES6 module:");
			t42 = space();
			samplecode1.$$.fragment.c();
			t43 = space();
			section3 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t44 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "vin validator");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Validate an ");

			a0 = claim_element(h2_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "US VIN (Vehicle Identification Number)");
			a0_nodes.forEach(detach);
			h2_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t5 = claim_text(section0_nodes, "\n\n        ");

			h30 = claim_element(section0_nodes, "H3", {}, false);
			var h30_nodes = children(h30);

			t6 = claim_text(h30_nodes, "Using with form field");
			h30_nodes.forEach(detach);
			t7 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t8 = claim_text(p0_nodes, "The HTML attributes are used to set the validator options via the ");

			a1 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t9 = claim_text(a1_nodes, "Declarative");
			a1_nodes.forEach(detach);
			t10 = claim_text(p0_nodes, " plugin");
			p0_nodes.forEach(detach);
			t11 = claim_text(section0_nodes, "\n        ");

			table0 = claim_element(section0_nodes, "TABLE", { class: true }, false);
			var table0_nodes = children(table0);

			tr0 = claim_element(table0_nodes, "TR", { class: true }, false);
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
			t19 = claim_text(table0_nodes, "\n            ");

			tr1 = claim_element(table0_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code0 = claim_element(td0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t20 = claim_text(code0_nodes, "message");
			code0_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t21 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			code1 = claim_element(td1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t22 = claim_text(code1_nodes, "data-fv-vin___message");
			code1_nodes.forEach(detach);
			td1_nodes.forEach(detach);
			t23 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			t24 = claim_text(td2_nodes, "String");
			td2_nodes.forEach(detach);
			t25 = claim_text(tr1_nodes, "\n                ");

			td3 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			t26 = claim_text(td3_nodes, "The error message");
			td3_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			table0_nodes.forEach(detach);
			t27 = claim_text(section0_nodes, "\n\n        ");

			h31 = claim_element(section0_nodes, "H3", {}, false);
			var h31_nodes = children(h31);

			t28 = claim_text(h31_nodes, "Using with ES6 module");
			h31_nodes.forEach(detach);
			t29 = claim_text(section0_nodes, "\n");
			samplecode0.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t30 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t31 = claim_text(section1_nodes, "\n\n        ");

			p1 = claim_element(section1_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t32 = claim_text(p1_nodes, "You can click on sample to see if it's a valid or invalid VIN.");
			p1_nodes.forEach(detach);
			t33 = claim_text(section1_nodes, "\n        ");

			table1 = claim_element(section1_nodes, "TABLE", { class: true }, false);
			var table1_nodes = children(table1);

			tr2 = claim_element(table1_nodes, "TR", { class: true }, false);
			var tr2_nodes = children(tr2);

			th4 = claim_element(tr2_nodes, "TH", { class: true }, false);
			var th4_nodes = children(th4);

			t34 = claim_text(th4_nodes, "Sample");
			th4_nodes.forEach(detach);
			t35 = claim_text(tr2_nodes, "\n                ");

			th5 = claim_element(tr2_nodes, "TH", { class: true }, false);
			var th5_nodes = children(th5);

			t36 = claim_text(th5_nodes, "Is valid?");
			th5_nodes.forEach(detach);
			tr2_nodes.forEach(detach);
			t37 = claim_text(table1_nodes, "\n            ");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(table1_nodes);
			}

			table1_nodes.forEach(detach);
			t38 = claim_text(section1_nodes, "\n\n        ");
			demo.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t39 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t40 = claim_text(section2_nodes, "\n\n        ");

			p2 = claim_element(section2_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t41 = claim_text(p2_nodes, "The following snippet shows how to use the vin validator with ES6 module:");
			p2_nodes.forEach(detach);
			t42 = claim_text(section2_nodes, "\n");
			samplecode1.$$.fragment.l(section2_nodes);
			section2_nodes.forEach(detach);
			t43 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			div = claim_element(section3_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t44 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 95);
			a0.href = "https://en.wikipedia.org/wiki/Vehicle_identification_number";
			a0.className = "blue dim link";
			add_location(a0, file, 6, 38, 180);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 146);
			add_location(h30, file, 11, 8, 391);
			a1.href = "/guide/plugins/declarative";
			a1.className = "blue dim link";
			add_location(a1, file, 12, 95, 517);
			p0.className = "lh-copy i";
			add_location(p0, file, 12, 8, 430);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 15, 16, 730);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 16, 16, 790);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 17, 16, 860);
			th3.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th3, file, 18, 16, 920);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 14, 12, 681);
			add_location(code0, file, 21, 36, 1070);
			td0.className = "pv2 ph3";
			add_location(td0, file, 21, 16, 1050);
			add_location(code1, file, 22, 36, 1132);
			td1.className = "pv2 ph3";
			add_location(td1, file, 22, 16, 1112);
			td2.className = "pv2 ph3";
			add_location(td2, file, 23, 16, 1188);
			td3.className = "pv2 ph3";
			add_location(td3, file, 24, 16, 1236);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 20, 12, 1001);
			table0.className = "collapse ba br2 b--black-10 pv2 ph3 w-100";
			add_location(table0, file, 13, 8, 611);
			add_location(h31, file, 28, 8, 1323);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 325);
			p1.className = "lh-copy";
			add_location(p1, file, 52, 8, 1782);
			th4.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th4, file, 55, 16, 1999);
			th5.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th5, file, 56, 16, 2061);
			tr2.className = "striped--light-gray";
			add_location(tr2, file, 54, 12, 1950);
			table1.className = "collapse ba br2 b--black-10 pv2 ph3 w-100 mb4";
			add_location(table1, file, 53, 8, 1876);
			section1.className = "mv5";
			add_location(section1, file, 49, 4, 1710);
			p2.className = "lh-copy";
			add_location(p2, file, 71, 8, 2543);
			section2.className = "mv5";
			add_location(section2, file, 68, 4, 2466);
			div.className = "flex";
			add_location(div, file, 95, 8, 3159);
			section3.className = "mv5";
			add_location(section3, file, 94, 4, 3129);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			append(h2, a0);
			append(a0, t3);
			insert(target, t4, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t5);
			append(section0, h30);
			append(h30, t6);
			append(section0, t7);
			append(section0, p0);
			append(p0, t8);
			append(p0, a1);
			append(a1, t9);
			append(p0, t10);
			append(section0, t11);
			append(section0, table0);
			append(table0, tr0);
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
			append(table0, t19);
			append(table0, tr1);
			append(tr1, td0);
			append(td0, code0);
			append(code0, t20);
			append(tr1, t21);
			append(tr1, td1);
			append(td1, code1);
			append(code1, t22);
			append(tr1, t23);
			append(tr1, td2);
			append(td2, t24);
			append(tr1, t25);
			append(tr1, td3);
			append(td3, t26);
			append(section0, t27);
			append(section0, h31);
			append(h31, t28);
			append(section0, t29);
			mount_component(samplecode0, section0, null);
			insert(target, t30, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t31);
			append(section1, p1);
			append(p1, t32);
			append(section1, t33);
			append(section1, table1);
			append(table1, tr2);
			append(tr2, th4);
			append(th4, t34);
			append(tr2, t35);
			append(tr2, th5);
			append(th5, t36);
			append(table1, t37);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table1, null);
			}

			append(section1, t38);
			mount_component(demo, section1, null);
			insert(target, t39, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t40);
			append(section2, p2);
			append(p2, t41);
			append(section2, t42);
			mount_component(samplecode1, section2, null);
			insert(target, t43, anchor);
			insert(target, section3, anchor);
			append(section3, div);
			mount_component(prevbutton, div, null);
			append(div, t44);
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

			if (changed._samples) {
				each_value = ctx._samples;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(table1, null);
					}
				}

				group_outros();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				check_outros();
			}

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);

			var prevbutton_changes = {};
			if (changed.slug || changed.vatData) prevbutton_changes.target = "/guide/validators/vat/" + slug(vatData[vatData.length - 1].adjective) + "-vat-number";
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			samplecode0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

			demo.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);

			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			demo.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			prevbutton.$$.fragment.o(local);
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t4);
				detach(section0);
			}

			heading0.$destroy();

			samplecode0.$destroy();

			if (detaching) {
				detach(t30);
				detach(section1);
			}

			heading1.$destroy();

			destroy_each(each_blocks, detaching);

			demo.$destroy();

			if (detaching) {
				detach(t39);
				detach(section2);
			}

			heading2.$destroy();

			samplecode1.$destroy();

			if (detaching) {
				detach(t43);
				detach(section3);
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
			document.title = "FormValidation • vin validator";
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

function instance($$self) {
	

const _samples = ['1FAHP26W49G252740', '2FTRX07W53C371582', 'WP0CA29863U153381', 'JTMKF4DV5B5309254'];

	return { _samples };
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Index;
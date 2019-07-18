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
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/plugins/start-end-date/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/start-end-date/index.svelte";

// (10:8) <Heading>
function create_default_slot_6(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Usage");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Usage");
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

// (65:8) <Heading>
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

// (105:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Basic example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Basic example");
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

// (110:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Changelog");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Changelog");
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

// (124:12) <PrevButton target="/guide/plugins/spectre">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Spectre plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Spectre plugin");
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

// (125:12) <NextButton target="/guide/plugins/submit-button">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("SubmitButton plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "SubmitButton plugin");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, p0, t5, t6, t7, p1, t8, code0, t9, t10, t11, section1, t12, p2, sup0, t13, t14, t15, table, tr0, th0, t16, t17, th1, t18, t19, th2, t20, t21, tr1, td0, code1, t22, t23, sup1, t24, t25, td1, t26, t27, td2, t28, code2, t29, t30, a0, t31, t32, t33, tr2, td3, code3, t34, t35, sup2, t36, t37, td4, t38, t39, td5, t40, ul0, li0, code4, t41, t42, t43, li1, code5, t44, t45, t46, tr3, td6, code6, t47, t48, sup3, t49, t50, td7, t51, t52, td8, t53, ul1, li2, code7, t54, t55, t56, li3, code8, t57, t58, t59, p3, t60, a1, t61, t62, t63, section2, t64, t65, section3, t66, ul2, li4, t67, t68, t69, t70, section4, div, t71, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode = new SampleCode({
		props: { lang: "html", code: `
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <!-- The start date field -->
        <input type="text" name="startDate" placeholder="Start date" />

        <!-- The end date field -->
        <input type="text" name="endDate" placeholder="End date" />

        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/StartEndDate.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                startEndDate: new FormValidation.plugins.StartEndDate({
                    format: '...',
                    startDate: {
                        field: 'startDate',
                        message: 'The start date must be ealier than the end date',
                    },
                    endDate: {
                        field: 'endDate',
                        message: 'The end date must be later than the start date',
                    },
                }),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
` },
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/plugins/start-end-date/basic",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var heading3 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Using flatpickr for start and end dates'
    ] },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['date'] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/plugins/spectre",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/plugins/submit-button",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("StartEndDate plugin");
			t1 = space();
			h2 = element("h2");
			t2 = text("Validate start and end dates");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			p0 = element("p");
			t5 = text("The following piece of code is the starting point to use the StartEndDate plugin:");
			t6 = space();
			samplecode.$$.fragment.c();
			t7 = space();
			p1 = element("p");
			t8 = text("The sample code above assumes that the FormValidation files are placed inside the ");
			code0 = element("code");
			t9 = text("vendors");
			t10 = text(" directory. You might need to change the path depending on where you place them on the server.");
			t11 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t12 = space();
			p2 = element("p");
			sup0 = element("sup");
			t13 = text("*");
			t14 = text(" presents a required option");
			t15 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t16 = text("Option");
			t17 = space();
			th1 = element("th");
			t18 = text("Type");
			t19 = space();
			th2 = element("th");
			t20 = text("Description");
			t21 = space();
			tr1 = element("tr");
			td0 = element("td");
			code1 = element("code");
			t22 = text("format");
			t23 = space();
			sup1 = element("sup");
			t24 = text("*");
			t25 = space();
			td1 = element("td");
			t26 = text("String");
			t27 = space();
			td2 = element("td");
			t28 = text("The date format that both start and end dates have to follow. It's the same as the ");
			code2 = element("code");
			t29 = text("format");
			t30 = text(" option provided by the ");
			a0 = element("a");
			t31 = text("date");
			t32 = text(" validator");
			t33 = space();
			tr2 = element("tr");
			td3 = element("td");
			code3 = element("code");
			t34 = text("startDate");
			t35 = space();
			sup2 = element("sup");
			t36 = text("*");
			t37 = space();
			td4 = element("td");
			t38 = text("Object");
			t39 = space();
			td5 = element("td");
			t40 = text("Contains two require properties:\n                    ");
			ul0 = element("ul");
			li0 = element("li");
			code4 = element("code");
			t41 = text("field");
			t42 = text(" (String): The name of start date field");
			t43 = space();
			li1 = element("li");
			code5 = element("code");
			t44 = text("message");
			t45 = text(" (String): The message when the start date is not a valid date or not ealier than the end date");
			t46 = space();
			tr3 = element("tr");
			td6 = element("td");
			code6 = element("code");
			t47 = text("endDate");
			t48 = space();
			sup3 = element("sup");
			t49 = text("*");
			t50 = space();
			td7 = element("td");
			t51 = text("Object");
			t52 = space();
			td8 = element("td");
			t53 = text("Contains two require properties:\n                    ");
			ul1 = element("ul");
			li2 = element("li");
			code7 = element("code");
			t54 = text("field");
			t55 = text(" (String): The name of end date field");
			t56 = space();
			li3 = element("li");
			code8 = element("code");
			t57 = text("message");
			t58 = text(" (String): The message when the end date is not a valid date or not later than the start date");
			t59 = space();
			p3 = element("p");
			t60 = text("You don't have to define the ");
			a1 = element("a");
			t61 = text("date");
			t62 = text(" validator rules for start and end date fiels, because it's handled by the StartEndDate plugin automatically.");
			t63 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t64 = space();
			demo.$$.fragment.c();
			t65 = space();
			section3 = element("section");
			heading3.$$.fragment.c();
			t66 = space();
			ul2 = element("ul");
			li4 = element("li");
			t67 = text("v1.1.0: First release. It means that the StartEndDate plugin requires FormValidation v1.1.0 or newer.");
			t68 = space();
			examples.$$.fragment.c();
			t69 = space();
			relatedvalidators.$$.fragment.c();
			t70 = space();
			section4 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t71 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "StartEndDate plugin");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Validate start and end dates");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t5 = claim_text(p0_nodes, "The following piece of code is the starting point to use the StartEndDate plugin:");
			p0_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n");
			samplecode.$$.fragment.l(section0_nodes);
			t7 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t8 = claim_text(p1_nodes, "The sample code above assumes that the FormValidation files are placed inside the ");

			code0 = claim_element(p1_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t9 = claim_text(code0_nodes, "vendors");
			code0_nodes.forEach(detach);
			t10 = claim_text(p1_nodes, " directory. You might need to change the path depending on where you place them on the server.");
			p1_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t12 = claim_text(section1_nodes, "\n        ");

			p2 = claim_element(section1_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			sup0 = claim_element(p2_nodes, "SUP", {}, false);
			var sup0_nodes = children(sup0);

			t13 = claim_text(sup0_nodes, "*");
			sup0_nodes.forEach(detach);
			t14 = claim_text(p2_nodes, " presents a required option");
			p2_nodes.forEach(detach);
			t15 = claim_text(section1_nodes, "\n        ");

			table = claim_element(section1_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr0 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr0_nodes = children(tr0);

			th0 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t16 = claim_text(th0_nodes, "Option");
			th0_nodes.forEach(detach);
			t17 = claim_text(tr0_nodes, "\n                ");

			th1 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t18 = claim_text(th1_nodes, "Type");
			th1_nodes.forEach(detach);
			t19 = claim_text(tr0_nodes, "\n                ");

			th2 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th2_nodes = children(th2);

			t20 = claim_text(th2_nodes, "Description");
			th2_nodes.forEach(detach);
			tr0_nodes.forEach(detach);
			t21 = claim_text(table_nodes, "\n            ");

			tr1 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code1 = claim_element(td0_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t22 = claim_text(code1_nodes, "format");
			code1_nodes.forEach(detach);
			t23 = claim_text(td0_nodes, " ");

			sup1 = claim_element(td0_nodes, "SUP", {}, false);
			var sup1_nodes = children(sup1);

			t24 = claim_text(sup1_nodes, "*");
			sup1_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t25 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			t26 = claim_text(td1_nodes, "String");
			td1_nodes.forEach(detach);
			t27 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			t28 = claim_text(td2_nodes, "The date format that both start and end dates have to follow. It's the same as the ");

			code2 = claim_element(td2_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t29 = claim_text(code2_nodes, "format");
			code2_nodes.forEach(detach);
			t30 = claim_text(td2_nodes, " option provided by the ");

			a0 = claim_element(td2_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t31 = claim_text(a0_nodes, "date");
			a0_nodes.forEach(detach);
			t32 = claim_text(td2_nodes, " validator");
			td2_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			t33 = claim_text(table_nodes, "\n            ");

			tr2 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr2_nodes = children(tr2);

			td3 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			code3 = claim_element(td3_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t34 = claim_text(code3_nodes, "startDate");
			code3_nodes.forEach(detach);
			t35 = claim_text(td3_nodes, " ");

			sup2 = claim_element(td3_nodes, "SUP", {}, false);
			var sup2_nodes = children(sup2);

			t36 = claim_text(sup2_nodes, "*");
			sup2_nodes.forEach(detach);
			td3_nodes.forEach(detach);
			t37 = claim_text(tr2_nodes, "\n                ");

			td4 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td4_nodes = children(td4);

			t38 = claim_text(td4_nodes, "Object");
			td4_nodes.forEach(detach);
			t39 = claim_text(tr2_nodes, "\n                ");

			td5 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td5_nodes = children(td5);

			t40 = claim_text(td5_nodes, "Contains two require properties:\n                    ");

			ul0 = claim_element(td5_nodes, "UL", { class: true }, false);
			var ul0_nodes = children(ul0);

			li0 = claim_element(ul0_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			code4 = claim_element(li0_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t41 = claim_text(code4_nodes, "field");
			code4_nodes.forEach(detach);
			t42 = claim_text(li0_nodes, " (String): The name of start date field");
			li0_nodes.forEach(detach);
			t43 = claim_text(ul0_nodes, "\n                        ");

			li1 = claim_element(ul0_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			code5 = claim_element(li1_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t44 = claim_text(code5_nodes, "message");
			code5_nodes.forEach(detach);
			t45 = claim_text(li1_nodes, " (String): The message when the start date is not a valid date or not ealier than the end date");
			li1_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			td5_nodes.forEach(detach);
			tr2_nodes.forEach(detach);
			t46 = claim_text(table_nodes, "\n            ");

			tr3 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr3_nodes = children(tr3);

			td6 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td6_nodes = children(td6);

			code6 = claim_element(td6_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t47 = claim_text(code6_nodes, "endDate");
			code6_nodes.forEach(detach);
			t48 = claim_text(td6_nodes, " ");

			sup3 = claim_element(td6_nodes, "SUP", {}, false);
			var sup3_nodes = children(sup3);

			t49 = claim_text(sup3_nodes, "*");
			sup3_nodes.forEach(detach);
			td6_nodes.forEach(detach);
			t50 = claim_text(tr3_nodes, "\n                ");

			td7 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td7_nodes = children(td7);

			t51 = claim_text(td7_nodes, "Object");
			td7_nodes.forEach(detach);
			t52 = claim_text(tr3_nodes, "\n                ");

			td8 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td8_nodes = children(td8);

			t53 = claim_text(td8_nodes, "Contains two require properties:\n                    ");

			ul1 = claim_element(td8_nodes, "UL", { class: true }, false);
			var ul1_nodes = children(ul1);

			li2 = claim_element(ul1_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			code7 = claim_element(li2_nodes, "CODE", {}, false);
			var code7_nodes = children(code7);

			t54 = claim_text(code7_nodes, "field");
			code7_nodes.forEach(detach);
			t55 = claim_text(li2_nodes, " (String): The name of end date field");
			li2_nodes.forEach(detach);
			t56 = claim_text(ul1_nodes, "\n                        ");

			li3 = claim_element(ul1_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			code8 = claim_element(li3_nodes, "CODE", {}, false);
			var code8_nodes = children(code8);

			t57 = claim_text(code8_nodes, "message");
			code8_nodes.forEach(detach);
			t58 = claim_text(li3_nodes, " (String): The message when the end date is not a valid date or not later than the start date");
			li3_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			td8_nodes.forEach(detach);
			tr3_nodes.forEach(detach);
			table_nodes.forEach(detach);
			t59 = claim_text(section1_nodes, "\n        ");

			p3 = claim_element(section1_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t60 = claim_text(p3_nodes, "You don't have to define the ");

			a1 = claim_element(p3_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t61 = claim_text(a1_nodes, "date");
			a1_nodes.forEach(detach);
			t62 = claim_text(p3_nodes, " validator rules for start and end date fiels, because it's handled by the StartEndDate plugin automatically.");
			p3_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t63 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t64 = claim_text(section2_nodes, "\n        ");
			demo.$$.fragment.l(section2_nodes);
			section2_nodes.forEach(detach);
			t65 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			heading3.$$.fragment.l(section3_nodes);
			t66 = claim_text(section3_nodes, "\n        ");

			ul2 = claim_element(section3_nodes, "UL", { class: true }, false);
			var ul2_nodes = children(ul2);

			li4 = claim_element(ul2_nodes, "LI", {}, false);
			var li4_nodes = children(li4);

			t67 = claim_text(li4_nodes, "v1.1.0: First release. It means that the StartEndDate plugin requires FormValidation v1.1.0 or newer.");
			li4_nodes.forEach(detach);
			ul2_nodes.forEach(detach);
			section3_nodes.forEach(detach);
			t68 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t69 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			t70 = claim_text(nodes, "\n\n    ");

			section4 = claim_element(nodes, "SECTION", { class: true }, false);
			var section4_nodes = children(section4);

			div = claim_element(section4_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t71 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section4_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 101);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 158);
			p0.className = "lh-copy";
			add_location(p0, file, 10, 8, 282);
			add_location(code0, file, 60, 109, 2043);
			p1.className = "lh-copy";
			add_location(p1, file, 60, 8, 1942);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 219);
			add_location(sup0, file, 65, 29, 2268);
			p2.className = "lh-copy i";
			add_location(p2, file, 65, 8, 2247);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 68, 16, 2439);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 69, 16, 2501);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 70, 16, 2561);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 67, 12, 2390);
			add_location(code1, file, 73, 36, 2711);
			add_location(sup1, file, 73, 56, 2731);
			td0.className = "pv2 ph3";
			add_location(td0, file, 73, 16, 2691);
			td1.className = "pv2 ph3";
			add_location(td1, file, 74, 16, 2765);
			add_location(code2, file, 75, 127, 2924);
			a0.href = "/guide/validators/date";
			a0.className = "blue dim link";
			add_location(a0, file, 75, 170, 2967);
			td2.className = "pv2 ph3 lh-copy";
			add_location(td2, file, 75, 16, 2813);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 72, 12, 2642);
			add_location(code3, file, 78, 36, 3145);
			add_location(sup2, file, 78, 59, 3168);
			td3.className = "pv2 ph3";
			add_location(td3, file, 78, 16, 3125);
			td4.className = "pv2 ph3";
			add_location(td4, file, 79, 16, 3202);
			add_location(code4, file, 83, 28, 3409);
			add_location(li0, file, 83, 24, 3405);
			add_location(code5, file, 84, 28, 3500);
			add_location(li1, file, 84, 24, 3496);
			ul0.className = "ma0 pl3 lh-copy";
			add_location(ul0, file, 82, 20, 3352);
			td5.className = "pv2 ph3 lh-copy";
			add_location(td5, file, 80, 16, 3250);
			tr2.className = "striped--light-gray";
			add_location(tr2, file, 77, 12, 3076);
			add_location(code6, file, 89, 36, 3767);
			add_location(sup3, file, 89, 57, 3788);
			td6.className = "pv2 ph3";
			add_location(td6, file, 89, 16, 3747);
			td7.className = "pv2 ph3";
			add_location(td7, file, 90, 16, 3822);
			add_location(code7, file, 94, 28, 4029);
			add_location(li2, file, 94, 24, 4025);
			add_location(code8, file, 95, 28, 4118);
			add_location(li3, file, 95, 24, 4114);
			ul1.className = "ma0 pl3 lh-copy";
			add_location(ul1, file, 93, 20, 3972);
			td8.className = "pv2 ph3 lh-copy";
			add_location(td8, file, 91, 16, 3870);
			tr3.className = "striped--light-gray";
			add_location(tr3, file, 88, 12, 3698);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100";
			add_location(table, file, 66, 8, 2320);
			a1.href = "/guide/validators/date";
			a1.className = "blue dim link";
			add_location(a1, file, 100, 56, 4376);
			p3.className = "lh-copy";
			add_location(p3, file, 100, 8, 4328);
			section1.className = "mv5";
			add_location(section1, file, 63, 4, 2182);
			section2.className = "mv5";
			add_location(section2, file, 103, 4, 4573);
			add_location(li4, file, 111, 12, 4856);
			ul2.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul2, file, 110, 8, 4811);
			section3.className = "mv5";
			add_location(section3, file, 108, 4, 4744);
			div.className = "flex";
			add_location(div, file, 122, 8, 5167);
			section4.className = "mv5";
			add_location(section4, file, 121, 4, 5137);
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
			append(section0, p0);
			append(p0, t5);
			append(section0, t6);
			mount_component(samplecode, section0, null);
			append(section0, t7);
			append(section0, p1);
			append(p1, t8);
			append(p1, code0);
			append(code0, t9);
			append(p1, t10);
			insert(target, t11, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t12);
			append(section1, p2);
			append(p2, sup0);
			append(sup0, t13);
			append(p2, t14);
			append(section1, t15);
			append(section1, table);
			append(table, tr0);
			append(tr0, th0);
			append(th0, t16);
			append(tr0, t17);
			append(tr0, th1);
			append(th1, t18);
			append(tr0, t19);
			append(tr0, th2);
			append(th2, t20);
			append(table, t21);
			append(table, tr1);
			append(tr1, td0);
			append(td0, code1);
			append(code1, t22);
			append(td0, t23);
			append(td0, sup1);
			append(sup1, t24);
			append(tr1, t25);
			append(tr1, td1);
			append(td1, t26);
			append(tr1, t27);
			append(tr1, td2);
			append(td2, t28);
			append(td2, code2);
			append(code2, t29);
			append(td2, t30);
			append(td2, a0);
			append(a0, t31);
			append(td2, t32);
			append(table, t33);
			append(table, tr2);
			append(tr2, td3);
			append(td3, code3);
			append(code3, t34);
			append(td3, t35);
			append(td3, sup2);
			append(sup2, t36);
			append(tr2, t37);
			append(tr2, td4);
			append(td4, t38);
			append(tr2, t39);
			append(tr2, td5);
			append(td5, t40);
			append(td5, ul0);
			append(ul0, li0);
			append(li0, code4);
			append(code4, t41);
			append(li0, t42);
			append(ul0, t43);
			append(ul0, li1);
			append(li1, code5);
			append(code5, t44);
			append(li1, t45);
			append(table, t46);
			append(table, tr3);
			append(tr3, td6);
			append(td6, code6);
			append(code6, t47);
			append(td6, t48);
			append(td6, sup3);
			append(sup3, t49);
			append(tr3, t50);
			append(tr3, td7);
			append(td7, t51);
			append(tr3, t52);
			append(tr3, td8);
			append(td8, t53);
			append(td8, ul1);
			append(ul1, li2);
			append(li2, code7);
			append(code7, t54);
			append(li2, t55);
			append(ul1, t56);
			append(ul1, li3);
			append(li3, code8);
			append(code8, t57);
			append(li3, t58);
			append(section1, t59);
			append(section1, p3);
			append(p3, t60);
			append(p3, a1);
			append(a1, t61);
			append(p3, t62);
			insert(target, t63, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t64);
			mount_component(demo, section2, null);
			insert(target, t65, anchor);
			insert(target, section3, anchor);
			mount_component(heading3, section3, null);
			append(section3, t66);
			append(section3, ul2);
			append(ul2, li4);
			append(li4, t67);
			insert(target, t68, anchor);
			mount_component(examples, target, anchor);
			insert(target, t69, anchor);
			mount_component(relatedvalidators, target, anchor);
			insert(target, t70, anchor);
			insert(target, section4, anchor);
			append(section4, div);
			mount_component(prevbutton, div, null);
			append(div, t71);
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

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);

			var heading3_changes = {};
			if (changed.$$scope) heading3_changes.$$scope = { changed, ctx };
			heading3.$set(heading3_changes);

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

			heading2.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			heading3.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			heading3.$$.fragment.o(local);
			examples.$$.fragment.o(local);
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
				detach(t11);
				detach(section1);
			}

			heading1.$destroy();

			if (detaching) {
				detach(t63);
				detach(section2);
			}

			heading2.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t65);
				detach(section3);
			}

			heading3.$destroy();

			if (detaching) {
				detach(t68);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t69);
			}

			relatedvalidators.$destroy(detaching);

			if (detaching) {
				detach(t70);
				detach(section4);
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
			document.title = "FormValidation • StartEndDate plugin";
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
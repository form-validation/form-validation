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

/* src/routes/guide/plugins/trigger/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/trigger/index.svelte";

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

// (52:8) <Heading>
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

// (133:8) <Heading>
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

// (139:8) <Heading>
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

// (153:12) <PrevButton target="/guide/plugins/transformer">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Transformer plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Transformer plugin");
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

// (154:12) <NextButton target="/guide/plugins/turret">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Turret plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Turret plugin");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, p0, t5, code0, t6, t7, t8, t9, p1, t10, code1, t11, t12, t13, section1, t14, table, tr0, th0, t15, t16, th1, t17, t18, th2, t19, t20, tr1, td0, code2, t21, t22, td1, t23, t24, td2, p2, t25, t26, t27, tr2, td3, code3, t28, t29, td4, t30, t31, td5, p3, t32, t33, t34, p4, t35, t36, tr3, td6, code4, t37, t38, td7, t39, t40, td8, p5, t41, a, t42, t43, t44, t45, section2, t46, p6, t47, span0, t48, t49, code5, t50, t51, span1, t52, t53, code6, t54, t55, t56, t57, section3, t58, ul, li0, t59, code7, t60, t61, t62, li1, t63, t64, t65, section4, div, t66, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger({
                    event: ...,
                    threshold: ...,
                    delay: ...,
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

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
// Validate fields when the blur events are triggered
event: 'blur',

// If you need multiple events are fired,
// then separate them by a space
event: 'blur change',

// We can indicate different events for 
// each particular field
event: {
    fullName: 'blur',
    email: 'change',
},

// If we do not want the field to be validated 
// automatically, set the associate value to false
event: {
    // The field is only validated when we click the 
    // submit button of form 
    // (if the SubmitButton plugin is used)
    email: false,
},
` },
		$$inline: true
	});

	var samplecode2 = new SampleCode({
		props: { lang: "javascript", code: `
// Validate fields when they have at least 5 characters
threshold: 5,

// We can indicate different threshold for 
// each particular field
threshold: {
    fullName: 15,
    email: 10,
},
` },
		$$inline: true
	});

	var samplecode3 = new SampleCode({
		props: { lang: "javascript", code: `
// Validate fields after 5 seconds from the moment
// user stops filling in the field
delay: 5,

// We can indicate different delay for 
// each particular field
delay: {
    fullName: 0,
    username: 5,
},
` },
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
		prefix: "/guide/plugins/trigger/basic",
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
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/plugins/transformer",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/plugins/turret",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Trigger plugin");
			t1 = space();
			h2 = element("h2");
			t2 = text("Indicate the events which the validation will be executed when these events are triggered");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			p0 = element("p");
			t5 = text("By default, the field will be validated automatically when the ");
			code0 = element("code");
			t6 = text("input");
			t7 = text(" event is triggered. This plugin allows to set the specific events for given field as fllowing:");
			t8 = space();
			samplecode0.$$.fragment.c();
			t9 = space();
			p1 = element("p");
			t10 = text("The sample code above assumes that the FormValidation files are placed inside the ");
			code1 = element("code");
			t11 = text("vendors");
			t12 = text(" directory. You might need to change the path depending on where you place them on the server.");
			t13 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t14 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t15 = text("Option");
			t16 = space();
			th1 = element("th");
			t17 = text("Type");
			t18 = space();
			th2 = element("th");
			t19 = text("Description");
			t20 = space();
			tr1 = element("tr");
			td0 = element("td");
			code2 = element("code");
			t21 = text("event");
			t22 = space();
			td1 = element("td");
			t23 = text("String or Object");
			t24 = space();
			td2 = element("td");
			p2 = element("p");
			t25 = text("Define the events. Can be one of the following formats:");
			t26 = space();
			samplecode1.$$.fragment.c();
			t27 = space();
			tr2 = element("tr");
			td3 = element("td");
			code3 = element("code");
			t28 = text("threshold");
			t29 = space();
			td4 = element("td");
			t30 = text("Number or Object");
			t31 = space();
			td5 = element("td");
			p3 = element("p");
			t32 = text("Only perform the validation if the field value exceed this number of characters. By default, it's set to 0.");
			t33 = space();
			samplecode2.$$.fragment.c();
			t34 = space();
			p4 = element("p");
			t35 = text("This option does not effect to the elements which user cannot type, such as radio, checkbox, select one.");
			t36 = space();
			tr3 = element("tr");
			td6 = element("td");
			code4 = element("code");
			t37 = text("delay");
			t38 = space();
			td7 = element("td");
			t39 = text("Number or Object");
			t40 = space();
			td8 = element("td");
			p5 = element("p");
			t41 = text("Pending validation for a given number of seconds after user stops filling in the field. By default, it's set to 0.\n                        It's really useful if the field needs to perform validation in server side, such as the ");
			a = element("a");
			t42 = text("remote");
			t43 = text(" validator.");
			t44 = space();
			samplecode3.$$.fragment.c();
			t45 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t46 = space();
			p6 = element("p");
			t47 = text("In the following form, the ");
			span0 = element("span");
			t48 = text("Title");
			t49 = text(" field will be validated while user type any character (");
			code5 = element("code");
			t50 = text("trigger=\"keyup\"");
			t51 = text("). The ");
			span1 = element("span");
			t52 = text("Summary");
			t53 = text(" field will be validated when user lose the focus (");
			code6 = element("code");
			t54 = text("trigger=\"blur\"");
			t55 = text(").");
			t56 = space();
			demo.$$.fragment.c();
			t57 = space();
			section3 = element("section");
			heading3.$$.fragment.c();
			t58 = space();
			ul = element("ul");
			li0 = element("li");
			t59 = text("v1.1.0: Added new ");
			code7 = element("code");
			t60 = text("delay");
			t61 = text(" option");
			t62 = space();
			li1 = element("li");
			t63 = text("v1.0.0: First release");
			t64 = space();
			examples.$$.fragment.c();
			t65 = space();
			section4 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t66 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Trigger plugin");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Indicate the events which the validation will be executed when these events are triggered");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t5 = claim_text(p0_nodes, "By default, the field will be validated automatically when the ");

			code0 = claim_element(p0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t6 = claim_text(code0_nodes, "input");
			code0_nodes.forEach(detach);
			t7 = claim_text(p0_nodes, " event is triggered. This plugin allows to set the specific events for given field as fllowing:");
			p0_nodes.forEach(detach);
			t8 = claim_text(section0_nodes, "\n");
			samplecode0.$$.fragment.l(section0_nodes);
			t9 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t10 = claim_text(p1_nodes, "The sample code above assumes that the FormValidation files are placed inside the ");

			code1 = claim_element(p1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t11 = claim_text(code1_nodes, "vendors");
			code1_nodes.forEach(detach);
			t12 = claim_text(p1_nodes, " directory. You might need to change the path depending on where you place them on the server.");
			p1_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t13 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t14 = claim_text(section1_nodes, "\n        ");

			table = claim_element(section1_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr0 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr0_nodes = children(tr0);

			th0 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t15 = claim_text(th0_nodes, "Option");
			th0_nodes.forEach(detach);
			t16 = claim_text(tr0_nodes, "\n                ");

			th1 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t17 = claim_text(th1_nodes, "Type");
			th1_nodes.forEach(detach);
			t18 = claim_text(tr0_nodes, "\n                ");

			th2 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th2_nodes = children(th2);

			t19 = claim_text(th2_nodes, "Description");
			th2_nodes.forEach(detach);
			tr0_nodes.forEach(detach);
			t20 = claim_text(table_nodes, "\n            ");

			tr1 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code2 = claim_element(td0_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t21 = claim_text(code2_nodes, "event");
			code2_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t22 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			t23 = claim_text(td1_nodes, "String or Object");
			td1_nodes.forEach(detach);
			t24 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			p2 = claim_element(td2_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t25 = claim_text(p2_nodes, "Define the events. Can be one of the following formats:");
			p2_nodes.forEach(detach);
			t26 = claim_text(td2_nodes, "\n");
			samplecode1.$$.fragment.l(td2_nodes);
			td2_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			t27 = claim_text(table_nodes, "\n            ");

			tr2 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr2_nodes = children(tr2);

			td3 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			code3 = claim_element(td3_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t28 = claim_text(code3_nodes, "threshold");
			code3_nodes.forEach(detach);
			td3_nodes.forEach(detach);
			t29 = claim_text(tr2_nodes, "\n                ");

			td4 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td4_nodes = children(td4);

			t30 = claim_text(td4_nodes, "Number or Object");
			td4_nodes.forEach(detach);
			t31 = claim_text(tr2_nodes, "\n                ");

			td5 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td5_nodes = children(td5);

			p3 = claim_element(td5_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t32 = claim_text(p3_nodes, "Only perform the validation if the field value exceed this number of characters. By default, it's set to 0.");
			p3_nodes.forEach(detach);
			t33 = claim_text(td5_nodes, "\n");
			samplecode2.$$.fragment.l(td5_nodes);
			t34 = claim_text(td5_nodes, "\n                    ");

			p4 = claim_element(td5_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t35 = claim_text(p4_nodes, "This option does not effect to the elements which user cannot type, such as radio, checkbox, select one.");
			p4_nodes.forEach(detach);
			td5_nodes.forEach(detach);
			tr2_nodes.forEach(detach);
			t36 = claim_text(table_nodes, "\n            ");

			tr3 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr3_nodes = children(tr3);

			td6 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td6_nodes = children(td6);

			code4 = claim_element(td6_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t37 = claim_text(code4_nodes, "delay");
			code4_nodes.forEach(detach);
			td6_nodes.forEach(detach);
			t38 = claim_text(tr3_nodes, "\n                ");

			td7 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td7_nodes = children(td7);

			t39 = claim_text(td7_nodes, "Number or Object");
			td7_nodes.forEach(detach);
			t40 = claim_text(tr3_nodes, "\n                ");

			td8 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td8_nodes = children(td8);

			p5 = claim_element(td8_nodes, "P", { class: true }, false);
			var p5_nodes = children(p5);

			t41 = claim_text(p5_nodes, "Pending validation for a given number of seconds after user stops filling in the field. By default, it's set to 0.\n                        It's really useful if the field needs to perform validation in server side, such as the ");

			a = claim_element(p5_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t42 = claim_text(a_nodes, "remote");
			a_nodes.forEach(detach);
			t43 = claim_text(p5_nodes, " validator.");
			p5_nodes.forEach(detach);
			t44 = claim_text(td8_nodes, "\n");
			samplecode3.$$.fragment.l(td8_nodes);
			td8_nodes.forEach(detach);
			tr3_nodes.forEach(detach);
			table_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t45 = claim_text(nodes, "\n    \n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t46 = claim_text(section2_nodes, "\n        ");

			p6 = claim_element(section2_nodes, "P", { class: true }, false);
			var p6_nodes = children(p6);

			t47 = claim_text(p6_nodes, "In the following form, the ");

			span0 = claim_element(p6_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			t48 = claim_text(span0_nodes, "Title");
			span0_nodes.forEach(detach);
			t49 = claim_text(p6_nodes, " field will be validated while user type any character (");

			code5 = claim_element(p6_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t50 = claim_text(code5_nodes, "trigger=\"keyup\"");
			code5_nodes.forEach(detach);
			t51 = claim_text(p6_nodes, "). The ");

			span1 = claim_element(p6_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t52 = claim_text(span1_nodes, "Summary");
			span1_nodes.forEach(detach);
			t53 = claim_text(p6_nodes, " field will be validated when user lose the focus (");

			code6 = claim_element(p6_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t54 = claim_text(code6_nodes, "trigger=\"blur\"");
			code6_nodes.forEach(detach);
			t55 = claim_text(p6_nodes, ").");
			p6_nodes.forEach(detach);
			t56 = claim_text(section2_nodes, "\n        ");
			demo.$$.fragment.l(section2_nodes);
			section2_nodes.forEach(detach);
			t57 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			heading3.$$.fragment.l(section3_nodes);
			t58 = claim_text(section3_nodes, "\n        ");

			ul = claim_element(section3_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t59 = claim_text(li0_nodes, "v1.1.0: Added new ");

			code7 = claim_element(li0_nodes, "CODE", {}, false);
			var code7_nodes = children(code7);

			t60 = claim_text(code7_nodes, "delay");
			code7_nodes.forEach(detach);
			t61 = claim_text(li0_nodes, " option");
			li0_nodes.forEach(detach);
			t62 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t63 = claim_text(li1_nodes, "v1.0.0: First release");
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section3_nodes.forEach(detach);
			t64 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t65 = claim_text(nodes, "\n\n    ");

			section4 = claim_element(nodes, "SECTION", { class: true }, false);
			var section4_nodes = children(section4);

			div = claim_element(section4_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t66 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section4_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 96);
			h2.className = "f4 fw4 tc lh-copy";
			add_location(h2, file, 6, 4, 148);
			add_location(code0, file, 10, 90, 423);
			p0.className = "lh-copy";
			add_location(p0, file, 10, 8, 341);
			add_location(code1, file, 47, 109, 1581);
			p1.className = "lh-copy";
			add_location(p1, file, 47, 8, 1480);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 278);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 54, 16, 1904);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 55, 16, 1966);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 56, 16, 2026);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 53, 12, 1855);
			add_location(code2, file, 59, 36, 2176);
			td0.className = "pv2 ph3";
			add_location(td0, file, 59, 16, 2156);
			td1.className = "pv2 ph3";
			add_location(td1, file, 60, 16, 2216);
			p2.className = "lh-copy";
			add_location(p2, file, 62, 20, 2315);
			td2.className = "pv2 ph3";
			add_location(td2, file, 61, 16, 2274);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 58, 12, 2107);
			add_location(code3, file, 90, 36, 3106);
			td3.className = "pv2 ph3";
			add_location(td3, file, 90, 16, 3086);
			td4.className = "pv2 ph3";
			add_location(td4, file, 91, 16, 3150);
			p3.className = "lh-copy";
			add_location(p3, file, 93, 20, 3249);
			p4.className = "lh-copy";
			add_location(p4, file, 105, 20, 3633);
			td5.className = "pv2 ph3";
			add_location(td5, file, 92, 16, 3208);
			tr2.className = "striped--light-gray";
			add_location(tr2, file, 89, 12, 3037);
			add_location(code4, file, 109, 36, 3882);
			td6.className = "pv2 ph3";
			add_location(td6, file, 109, 16, 3862);
			td7.className = "pv2 ph3";
			add_location(td7, file, 110, 16, 3922);
			a.href = "/guide/validators/remote";
			a.className = "blue dim link";
			add_location(a, file, 113, 112, 4267);
			p5.className = "lh-copy";
			add_location(p5, file, 112, 20, 4021);
			td8.className = "pv2 ph3";
			add_location(td8, file, 111, 16, 3980);
			tr3.className = "striped--light-gray";
			add_location(tr3, file, 108, 12, 3813);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100";
			add_location(table, file, 52, 8, 1785);
			section1.className = "mv5";
			add_location(section1, file, 50, 4, 1720);
			span0.className = "i";
			add_location(span0, file, 133, 54, 4820);
			add_location(code5, file, 133, 138, 4904);
			span1.className = "i";
			add_location(span1, file, 133, 173, 4939);
			add_location(code6, file, 133, 254, 5020);
			p6.className = "lh-copy";
			add_location(p6, file, 133, 8, 4774);
			section2.className = "mv5";
			add_location(section2, file, 131, 4, 4703);
			add_location(code7, file, 140, 34, 5289);
			add_location(li0, file, 140, 12, 5267);
			add_location(li1, file, 141, 12, 5332);
			ul.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul, file, 139, 8, 5222);
			section3.className = "mv5";
			add_location(section3, file, 137, 4, 5155);
			div.className = "flex";
			add_location(div, file, 151, 8, 5606);
			section4.className = "mv5";
			add_location(section4, file, 150, 4, 5576);
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
			append(p0, code0);
			append(code0, t6);
			append(p0, t7);
			append(section0, t8);
			mount_component(samplecode0, section0, null);
			append(section0, t9);
			append(section0, p1);
			append(p1, t10);
			append(p1, code1);
			append(code1, t11);
			append(p1, t12);
			insert(target, t13, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t14);
			append(section1, table);
			append(table, tr0);
			append(tr0, th0);
			append(th0, t15);
			append(tr0, t16);
			append(tr0, th1);
			append(th1, t17);
			append(tr0, t18);
			append(tr0, th2);
			append(th2, t19);
			append(table, t20);
			append(table, tr1);
			append(tr1, td0);
			append(td0, code2);
			append(code2, t21);
			append(tr1, t22);
			append(tr1, td1);
			append(td1, t23);
			append(tr1, t24);
			append(tr1, td2);
			append(td2, p2);
			append(p2, t25);
			append(td2, t26);
			mount_component(samplecode1, td2, null);
			append(table, t27);
			append(table, tr2);
			append(tr2, td3);
			append(td3, code3);
			append(code3, t28);
			append(tr2, t29);
			append(tr2, td4);
			append(td4, t30);
			append(tr2, t31);
			append(tr2, td5);
			append(td5, p3);
			append(p3, t32);
			append(td5, t33);
			mount_component(samplecode2, td5, null);
			append(td5, t34);
			append(td5, p4);
			append(p4, t35);
			append(table, t36);
			append(table, tr3);
			append(tr3, td6);
			append(td6, code4);
			append(code4, t37);
			append(tr3, t38);
			append(tr3, td7);
			append(td7, t39);
			append(tr3, t40);
			append(tr3, td8);
			append(td8, p5);
			append(p5, t41);
			append(p5, a);
			append(a, t42);
			append(p5, t43);
			append(td8, t44);
			mount_component(samplecode3, td8, null);
			insert(target, t45, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t46);
			append(section2, p6);
			append(p6, t47);
			append(p6, span0);
			append(span0, t48);
			append(p6, t49);
			append(p6, code5);
			append(code5, t50);
			append(p6, t51);
			append(p6, span1);
			append(span1, t52);
			append(p6, t53);
			append(p6, code6);
			append(code6, t54);
			append(p6, t55);
			append(section2, t56);
			mount_component(demo, section2, null);
			insert(target, t57, anchor);
			insert(target, section3, anchor);
			mount_component(heading3, section3, null);
			append(section3, t58);
			append(section3, ul);
			append(ul, li0);
			append(li0, t59);
			append(li0, code7);
			append(code7, t60);
			append(li0, t61);
			append(ul, t62);
			append(ul, li1);
			append(li1, t63);
			insert(target, t64, anchor);
			mount_component(examples, target, anchor);
			insert(target, t65, anchor);
			insert(target, section4, anchor);
			append(section4, div);
			mount_component(prevbutton, div, null);
			append(div, t66);
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

			samplecode0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			samplecode2.$$.fragment.i(local);

			samplecode3.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			heading3.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			samplecode2.$$.fragment.o(local);
			samplecode3.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			heading3.$$.fragment.o(local);
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

			heading0.$destroy();

			samplecode0.$destroy();

			if (detaching) {
				detach(t13);
				detach(section1);
			}

			heading1.$destroy();

			samplecode1.$destroy();

			samplecode2.$destroy();

			samplecode3.$destroy();

			if (detaching) {
				detach(t45);
				detach(section2);
			}

			heading2.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t57);
				detach(section3);
			}

			heading3.$destroy();

			if (detaching) {
				detach(t64);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t65);
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
			document.title = "FormValidation • Trigger plugin";
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
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
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/plugins/submit-button/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/submit-button/index.svelte";

// (10:8) <Heading>
function create_default_slot_7(ctx) {
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

// (52:8) <Tip>
function create_default_slot_6(ctx) {
	var t0, a, t1;

	return {
		c: function create() {
			t0 = text("If you want the form to be submited to the server after pressing its Submit button and all fields are valid, use the ");
			a = element("a");
			t1 = text("DefaultSubmit plugin");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "If you want the form to be submited to the server after pressing its Submit button and all fields are valid, use the ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "DefaultSubmit plugin");
			a_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/default-submit";
			a.className = "blue dim link";
			add_location(a, file, 51, 130, 1990);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, a, anchor);
			append(a, t1);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(a);
			}
		}
	};
}

// (53:8) <Tip>
function create_default_slot_5(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("Look at the ");
			a = element("a");
			t1 = text("FieldStatus plugin");
			t2 = text(" to see how you can disable the Submit button when there is at least one invalid field");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "Look at the ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "FieldStatus plugin");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " to see how you can disable the Submit button when there is at least one invalid field");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/field-status";
			a.className = "blue dim link";
			add_location(a, file, 52, 25, 2108);
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

// (57:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Example");
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

// (63:8) <Heading>
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

// (79:12) <PrevButton target="/guide/plugins/start-end-date">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("StartEndDate plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "StartEndDate plugin");
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

// (80:12) <NextButton target="/guide/plugins/tachyons">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Tachyons plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Tachyons plugin");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, p0, t5, t6, t7, p1, t8, code0, t9, t10, t11, t12, t13, section1, t14, p2, t15, span, t16, t17, t18, t19, section2, t20, ul, li0, t21, code1, t22, t23, code2, t24, t25, t26, li1, t27, t28, t29, section3, div, t30, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_7] },
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
        ...
        <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
        <button type="submit">Submit</button>
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
                submitButton: new FormValidation.plugins.SubmitButton({
                    // Optional setting:
                    // Set it to true if you are using a traditional ASP.Net form 
                    // and there is a custom handler for the submit button 
                    // aspNetButton: false,
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

	var tip0 = new Tip({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var tip1 = new Tip({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/plugins/tachyons/horizontal-form",
		frameworks: ['tachyons']
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

	var examples = new Examples({
		props: { examples: [
        'Enabling submit button only when all fields are valid',
        'Multiple steps wizard',
        'Using Ajax to submit the form',
        'Validating form manually',
    ] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/plugins/start-end-date",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/plugins/tachyons",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("SubmitButton plugin");
			t1 = space();
			h2 = element("h2");
			t2 = text("Automatically validate the form when pressing its Submit button");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			p0 = element("p");
			t5 = text("The following piece of code is the starting point to use the SubmitButton plugin:");
			t6 = space();
			samplecode.$$.fragment.c();
			t7 = space();
			p1 = element("p");
			t8 = text("The sample code above assumes that the FormValidation files are placed inside the ");
			code0 = element("code");
			t9 = text("vendors");
			t10 = text(" directory. You might need to change the path depending on where you place them on the server.");
			t11 = space();
			tip0.$$.fragment.c();
			t12 = space();
			tip1.$$.fragment.c();
			t13 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t14 = space();
			p2 = element("p");
			t15 = text("Try to press the ");
			span = element("span");
			t16 = text("Add product");
			t17 = text(" button to see the form will be validated.");
			t18 = space();
			demo.$$.fragment.c();
			t19 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t20 = space();
			ul = element("ul");
			li0 = element("li");
			t21 = text("v1.5.0: Fixed an issue that the click handler of submit button of ASP.Net form isn't executed. Now you can fix it by setting the ");
			code1 = element("code");
			t22 = text("aspNetButton");
			t23 = text(" option to ");
			code2 = element("code");
			t24 = text("true");
			t25 = text(".");
			t26 = space();
			li1 = element("li");
			t27 = text("v1.0.0: First release");
			t28 = space();
			examples.$$.fragment.c();
			t29 = space();
			section3 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t30 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "SubmitButton plugin");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Automatically validate the form when pressing its Submit button");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t5 = claim_text(p0_nodes, "The following piece of code is the starting point to use the SubmitButton plugin:");
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
			t11 = claim_text(section0_nodes, "\n        ");
			tip0.$$.fragment.l(section0_nodes);
			t12 = claim_text(section0_nodes, "\n        ");
			tip1.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t13 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t14 = claim_text(section1_nodes, "\n        ");

			p2 = claim_element(section1_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t15 = claim_text(p2_nodes, "Try to press the ");

			span = claim_element(p2_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t16 = claim_text(span_nodes, "Add product");
			span_nodes.forEach(detach);
			t17 = claim_text(p2_nodes, " button to see the form will be validated.");
			p2_nodes.forEach(detach);
			t18 = claim_text(section1_nodes, "\n        ");
			demo.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t19 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t20 = claim_text(section2_nodes, "\n        ");

			ul = claim_element(section2_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t21 = claim_text(li0_nodes, "v1.5.0: Fixed an issue that the click handler of submit button of ASP.Net form isn't executed. Now you can fix it by setting the ");

			code1 = claim_element(li0_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t22 = claim_text(code1_nodes, "aspNetButton");
			code1_nodes.forEach(detach);
			t23 = claim_text(li0_nodes, " option to ");

			code2 = claim_element(li0_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t24 = claim_text(code2_nodes, "true");
			code2_nodes.forEach(detach);
			t25 = claim_text(li0_nodes, ".");
			li0_nodes.forEach(detach);
			t26 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t27 = claim_text(li1_nodes, "v1.0.0: First release");
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			t28 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t29 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			div = claim_element(section3_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t30 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 101);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 158);
			p0.className = "lh-copy";
			add_location(p0, file, 10, 8, 317);
			add_location(code0, file, 50, 109, 1741);
			p1.className = "lh-copy";
			add_location(p1, file, 50, 8, 1640);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 254);
			span.className = "i";
			add_location(span, file, 57, 44, 2404);
			p2.className = "lh-copy";
			add_location(p2, file, 57, 8, 2368);
			section1.className = "mv5";
			add_location(section1, file, 55, 4, 2303);
			add_location(code1, file, 64, 145, 2842);
			add_location(code2, file, 64, 181, 2878);
			add_location(li0, file, 64, 12, 2709);
			add_location(li1, file, 65, 12, 2914);
			ul.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul, file, 63, 8, 2664);
			section2.className = "mv5";
			add_location(section2, file, 61, 4, 2597);
			div.className = "flex";
			add_location(div, file, 77, 8, 3221);
			section3.className = "mv5";
			add_location(section3, file, 76, 4, 3191);
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
			append(section0, t11);
			mount_component(tip0, section0, null);
			append(section0, t12);
			mount_component(tip1, section0, null);
			insert(target, t13, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t14);
			append(section1, p2);
			append(p2, t15);
			append(p2, span);
			append(span, t16);
			append(p2, t17);
			append(section1, t18);
			mount_component(demo, section1, null);
			insert(target, t19, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t20);
			append(section2, ul);
			append(ul, li0);
			append(li0, t21);
			append(li0, code1);
			append(code1, t22);
			append(li0, t23);
			append(li0, code2);
			append(code2, t24);
			append(li0, t25);
			append(ul, t26);
			append(ul, li1);
			append(li1, t27);
			insert(target, t28, anchor);
			mount_component(examples, target, anchor);
			insert(target, t29, anchor);
			insert(target, section3, anchor);
			append(section3, div);
			mount_component(prevbutton, div, null);
			append(div, t30);
			mount_component(nextbutton, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var tip0_changes = {};
			if (changed.$$scope) tip0_changes.$$scope = { changed, ctx };
			tip0.$set(tip0_changes);

			var tip1_changes = {};
			if (changed.$$scope) tip1_changes.$$scope = { changed, ctx };
			tip1.$set(tip1_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);

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

			tip0.$$.fragment.i(local);

			tip1.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode.$$.fragment.o(local);
			tip0.$$.fragment.o(local);
			tip1.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
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

			samplecode.$destroy();

			tip0.$destroy();

			tip1.$destroy();

			if (detaching) {
				detach(t13);
				detach(section1);
			}

			heading1.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t19);
				detach(section2);
			}

			heading2.$destroy();

			if (detaching) {
				detach(t28);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t29);
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
			document.title = "FormValidation • SubmitButton plugin";
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
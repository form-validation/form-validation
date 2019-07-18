import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import './chunk.095827ef.js';
import './chunk.75c83501.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';

/* src/routes/guide/plugins/default-submit/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/default-submit/index.svelte";

// (10:8) <Heading>
function create_default_slot_5(ctx) {
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

// (48:8) <Tip>
function create_default_slot_4(ctx) {
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
			add_location(a, file, 47, 105, 1929);
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

// (52:8) <Heading>
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

// (60:12) <PrevButton target="/guide/plugins/declarative">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Declarative plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Declarative plugin");
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

// (61:12) <NextButton target="/guide/plugins/excluded">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Excluded plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Excluded plugin");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, p0, t5, t6, t7, p1, t8, code, t9, t10, t11, p2, t12, a, t13, t14, t15, t16, section1, t17, ul, li, t18, t19, section2, div, t20, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
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
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
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

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/plugins/declarative",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/plugins/excluded",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("DefaultSubmit plugin");
			t1 = space();
			h2 = element("h2");
			t2 = text("Submit the form if all fields are valid after validating");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			p0 = element("p");
			t5 = text("The following piece of code is the starting point to use the DefaultSubmit plugin:");
			t6 = space();
			samplecode.$$.fragment.c();
			t7 = space();
			p1 = element("p");
			t8 = text("The sample code above assumes that the FormValidation files are placed inside the ");
			code = element("code");
			t9 = text("vendors");
			t10 = text(" directory. You might need to change the path depending on where you place them on the server.");
			t11 = space();
			p2 = element("p");
			t12 = text("Instead of submitting the form, you can use an ");
			a = element("a");
			t13 = text("Ajax request");
			t14 = text(" to send the form data to the server.");
			t15 = space();
			tip.$$.fragment.c();
			t16 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t17 = space();
			ul = element("ul");
			li = element("li");
			t18 = text("v1.0.0: First release");
			t19 = space();
			section2 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t20 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "DefaultSubmit plugin");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Submit the form if all fields are valid after validating");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t5 = claim_text(p0_nodes, "The following piece of code is the starting point to use the DefaultSubmit plugin:");
			p0_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n");
			samplecode.$$.fragment.l(section0_nodes);
			t7 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t8 = claim_text(p1_nodes, "The sample code above assumes that the FormValidation files are placed inside the ");

			code = claim_element(p1_nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t9 = claim_text(code_nodes, "vendors");
			code_nodes.forEach(detach);
			t10 = claim_text(p1_nodes, " directory. You might need to change the path depending on where you place them on the server.");
			p1_nodes.forEach(detach);
			t11 = claim_text(section0_nodes, "\n        ");

			p2 = claim_element(section0_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t12 = claim_text(p2_nodes, "Instead of submitting the form, you can use an ");

			a = claim_element(p2_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t13 = claim_text(a_nodes, "Ajax request");
			a_nodes.forEach(detach);
			t14 = claim_text(p2_nodes, " to send the form data to the server.");
			p2_nodes.forEach(detach);
			t15 = claim_text(section0_nodes, "\n        ");
			tip.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t16 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t17 = claim_text(section1_nodes, "\n        ");

			ul = claim_element(section1_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li = claim_element(ul_nodes, "LI", {}, false);
			var li_nodes = children(li);

			t18 = claim_text(li_nodes, "v1.0.0: First release");
			li_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t19 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			div = claim_element(section2_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t20 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 102);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 160);
			p0.className = "lh-copy";
			add_location(p0, file, 10, 8, 312);
			add_location(code, file, 45, 109, 1472);
			p1.className = "lh-copy";
			add_location(p1, file, 45, 8, 1371);
			a.href = "/guide/events/core.form.valid/#example-using-ajax-to-submit-the-form";
			a.className = "blue dim link";
			add_location(a, file, 46, 74, 1665);
			p2.className = "lh-copy";
			add_location(p2, file, 46, 8, 1599);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 249);
			add_location(li, file, 53, 12, 2152);
			ul.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul, file, 52, 8, 2107);
			section1.className = "mv5";
			add_location(section1, file, 50, 4, 2040);
			div.className = "flex";
			add_location(div, file, 58, 8, 2247);
			section2.className = "mv5";
			add_location(section2, file, 57, 4, 2217);
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
			append(p1, code);
			append(code, t9);
			append(p1, t10);
			append(section0, t11);
			append(section0, p2);
			append(p2, t12);
			append(p2, a);
			append(a, t13);
			append(p2, t14);
			append(section0, t15);
			mount_component(tip, section0, null);
			insert(target, t16, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t17);
			append(section1, ul);
			append(ul, li);
			append(li, t18);
			insert(target, t19, anchor);
			insert(target, section2, anchor);
			append(section2, div);
			mount_component(prevbutton, div, null);
			append(div, t20);
			mount_component(nextbutton, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

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

			tip.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode.$$.fragment.o(local);
			tip.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
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

			tip.$destroy();

			if (detaching) {
				detach(t16);
				detach(section1);
			}

			heading1.$destroy();

			if (detaching) {
				detach(t19);
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
			document.title = "FormValidation • DefaultSubmit plugin";
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
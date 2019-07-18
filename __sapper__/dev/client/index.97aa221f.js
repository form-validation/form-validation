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
import './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/plugins/excluded/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/excluded/index.svelte";

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

// (63:8) <Heading>
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

// (70:8) <Heading>
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

// (82:12) <PrevButton target="/guide/plugins/default-submit">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("DefaultSubmit plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "DefaultSubmit plugin");
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

// (83:12) <NextButton target="/guide/plugins/field-status">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("FieldStatus plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "FieldStatus plugin");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, p0, t5, t6, ul0, li0, t7, t8, li1, t9, t10, li2, t11, t12, p1, t13, t14, t15, p2, t16, code, t17, t18, t19, section1, t20, p3, t21, span0, t22, t23, span1, t24, t25, span2, t26, t27, t28, p4, t29, span3, t30, t31, t32, t33, section2, t34, ul1, li3, t35, t36, t37, section3, div, t38, current;

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
                excluded: new FormValidation.plugins.Excluded({
                    excluded: function(field, element, elements) {
                        // field is the field name
                        // element is the field element
                        // elements is the list of field elements in case
                        // we have multiple elements with the same name

                        // return true if you want to exclude the field
                    }
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
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/plugins/excluded/basic",
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
        'Excluding field by given condition',
    ] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/plugins/default-submit",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/plugins/field-status",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Excluded plugin");
			t1 = space();
			h2 = element("h2");
			t2 = text("Ignore validations on particular field");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			p0 = element("p");
			t5 = text("This plugin allows you to indicate fields which won't be validated. By default, the plugin will not validate the following kind of fields:");
			t6 = space();
			ul0 = element("ul");
			li0 = element("li");
			t7 = text("disabled");
			t8 = space();
			li1 = element("li");
			t9 = text("hidden");
			t10 = space();
			li2 = element("li");
			t11 = text("invisible");
			t12 = space();
			p1 = element("p");
			t13 = text("The following piece of code is the starting point to use the Excluded plugin:");
			t14 = space();
			samplecode.$$.fragment.c();
			t15 = space();
			p2 = element("p");
			t16 = text("The sample code above assumes that the FormValidation files are placed inside the ");
			code = element("code");
			t17 = text("vendors");
			t18 = text(" directory. You might need to change the path depending on where you place them on the server.");
			t19 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t20 = space();
			p3 = element("p");
			t21 = text("In the following form, there are two invisible fields called ");
			span0 = element("span");
			t22 = text("Job title");
			t23 = text(" and ");
			span1 = element("span");
			t24 = text("Department");
			t25 = text(". Since they are not visible initially, they will not be validated when you click the ");
			span2 = element("span");
			t26 = text("Submit");
			t27 = text(" button.");
			t28 = space();
			p4 = element("p");
			t29 = text("Clicking the ");
			span3 = element("span");
			t30 = text("More info");
			t31 = text(" button will turn them into visible fields, and as result, they will be required due to their validation rules.");
			t32 = space();
			demo.$$.fragment.c();
			t33 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t34 = space();
			ul1 = element("ul");
			li3 = element("li");
			t35 = text("v1.3.0: First release. It means that the Excluded plugin requires FormValidation v1.3.0 or newer.");
			t36 = space();
			examples.$$.fragment.c();
			t37 = space();
			section3 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t38 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Excluded plugin");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Ignore validations on particular field");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t5 = claim_text(p0_nodes, "This plugin allows you to indicate fields which won't be validated. By default, the plugin will not validate the following kind of fields:");
			p0_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n        ");

			ul0 = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul0_nodes = children(ul0);

			li0 = claim_element(ul0_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t7 = claim_text(li0_nodes, "disabled");
			li0_nodes.forEach(detach);
			t8 = claim_text(ul0_nodes, "\n            ");

			li1 = claim_element(ul0_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t9 = claim_text(li1_nodes, "hidden");
			li1_nodes.forEach(detach);
			t10 = claim_text(ul0_nodes, "\n            ");

			li2 = claim_element(ul0_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			t11 = claim_text(li2_nodes, "invisible");
			li2_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			t12 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t13 = claim_text(p1_nodes, "The following piece of code is the starting point to use the Excluded plugin:");
			p1_nodes.forEach(detach);
			t14 = claim_text(section0_nodes, "\n");
			samplecode.$$.fragment.l(section0_nodes);
			t15 = claim_text(section0_nodes, "\n        ");

			p2 = claim_element(section0_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t16 = claim_text(p2_nodes, "The sample code above assumes that the FormValidation files are placed inside the ");

			code = claim_element(p2_nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t17 = claim_text(code_nodes, "vendors");
			code_nodes.forEach(detach);
			t18 = claim_text(p2_nodes, " directory. You might need to change the path depending on where you place them on the server.");
			p2_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t19 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t20 = claim_text(section1_nodes, "\n        ");

			p3 = claim_element(section1_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t21 = claim_text(p3_nodes, "In the following form, there are two invisible fields called ");

			span0 = claim_element(p3_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			t22 = claim_text(span0_nodes, "Job title");
			span0_nodes.forEach(detach);
			t23 = claim_text(p3_nodes, " and ");

			span1 = claim_element(p3_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t24 = claim_text(span1_nodes, "Department");
			span1_nodes.forEach(detach);
			t25 = claim_text(p3_nodes, ". Since they are not visible initially, they will not be validated when you click the ");

			span2 = claim_element(p3_nodes, "SPAN", { class: true }, false);
			var span2_nodes = children(span2);

			t26 = claim_text(span2_nodes, "Submit");
			span2_nodes.forEach(detach);
			t27 = claim_text(p3_nodes, " button.");
			p3_nodes.forEach(detach);
			t28 = claim_text(section1_nodes, "\n        ");

			p4 = claim_element(section1_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t29 = claim_text(p4_nodes, "Clicking the ");

			span3 = claim_element(p4_nodes, "SPAN", { class: true }, false);
			var span3_nodes = children(span3);

			t30 = claim_text(span3_nodes, "More info");
			span3_nodes.forEach(detach);
			t31 = claim_text(p4_nodes, " button will turn them into visible fields, and as result, they will be required due to their validation rules.");
			p4_nodes.forEach(detach);
			t32 = claim_text(section1_nodes, "\n        ");
			demo.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t33 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t34 = claim_text(section2_nodes, "\n        ");

			ul1 = claim_element(section2_nodes, "UL", { class: true }, false);
			var ul1_nodes = children(ul1);

			li3 = claim_element(ul1_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			t35 = claim_text(li3_nodes, "v1.3.0: First release. It means that the Excluded plugin requires FormValidation v1.3.0 or newer.");
			li3_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			t36 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t37 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			div = claim_element(section3_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t38 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 97);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 150);
			p0.className = "lh-copy";
			add_location(p0, file, 10, 8, 284);
			add_location(li0, file, 12, 12, 499);
			add_location(li1, file, 13, 12, 529);
			add_location(li2, file, 14, 12, 557);
			ul0.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul0, file, 11, 8, 454);
			p1.className = "lh-copy";
			add_location(p1, file, 16, 8, 598);
			add_location(code, file, 58, 109, 2052);
			p2.className = "lh-copy";
			add_location(p2, file, 58, 8, 1951);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 221);
			span0.className = "i";
			add_location(span0, file, 63, 88, 2342);
			span1.className = "i";
			add_location(span1, file, 63, 125, 2379);
			span2.className = "i";
			add_location(span2, file, 63, 244, 2498);
			p3.className = "lh-copy";
			add_location(p3, file, 63, 8, 2262);
			span3.className = "i";
			add_location(span3, file, 64, 40, 2580);
			p4.className = "lh-copy";
			add_location(p4, file, 64, 8, 2548);
			section1.className = "mv5";
			add_location(section1, file, 61, 4, 2191);
			add_location(li3, file, 71, 12, 2942);
			ul1.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul1, file, 70, 8, 2897);
			section2.className = "mv5";
			add_location(section2, file, 68, 4, 2830);
			div.className = "flex";
			add_location(div, file, 80, 8, 3196);
			section3.className = "mv5";
			add_location(section3, file, 79, 4, 3166);
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
			append(section0, ul0);
			append(ul0, li0);
			append(li0, t7);
			append(ul0, t8);
			append(ul0, li1);
			append(li1, t9);
			append(ul0, t10);
			append(ul0, li2);
			append(li2, t11);
			append(section0, t12);
			append(section0, p1);
			append(p1, t13);
			append(section0, t14);
			mount_component(samplecode, section0, null);
			append(section0, t15);
			append(section0, p2);
			append(p2, t16);
			append(p2, code);
			append(code, t17);
			append(p2, t18);
			insert(target, t19, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t20);
			append(section1, p3);
			append(p3, t21);
			append(p3, span0);
			append(span0, t22);
			append(p3, t23);
			append(p3, span1);
			append(span1, t24);
			append(p3, t25);
			append(p3, span2);
			append(span2, t26);
			append(p3, t27);
			append(section1, t28);
			append(section1, p4);
			append(p4, t29);
			append(p4, span3);
			append(span3, t30);
			append(p4, t31);
			append(section1, t32);
			mount_component(demo, section1, null);
			insert(target, t33, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t34);
			append(section2, ul1);
			append(ul1, li3);
			append(li3, t35);
			insert(target, t36, anchor);
			mount_component(examples, target, anchor);
			insert(target, t37, anchor);
			insert(target, section3, anchor);
			append(section3, div);
			mount_component(prevbutton, div, null);
			append(div, t38);
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

			if (detaching) {
				detach(t19);
				detach(section1);
			}

			heading1.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t33);
				detach(section2);
			}

			heading2.$destroy();

			if (detaching) {
				detach(t36);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t37);
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
			document.title = "FormValidation • Excluded plugin";
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
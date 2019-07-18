import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/examples/showing-icons-in-custom-area/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/showing-icons-in-custom-area/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, code, t3, t4, t5, t6, p1, t7, t8, div, t9, t10, current;

	var samplecode0 = new SampleCode({
		props: { lang: "javascript", code: `
icon: new FormValidation.plugins.Icon({
    ...,
    onPlaced: function(e) {
        // e.classes is an object containing values 
        // for valid, invalid and validating CSS classes
        
        // e.element is the field element
        // e.field is the field name
        // e.iconElement is the icon element
    }
}),
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "html", code: `
<style>
.fv-plugins-icon[data-field="username"],
.fv-plugins-icon[data-field="email"] {
    display: inline-block;
    position: static;
    height: auto;
    line-height: normal;
}
</style>

<input name="username" />
...
<input name="email" />
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/showing-icons-in-custom-area",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Adjusting icon position',
        'Showing icons in custom area',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Showing icons in custom area");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("In this example, I will help you how to show the feedback icons in custom area which are right after the labels. We're going to archive it by setting the ");
			code = element("code");
			t3 = text("onPlaced");
			t4 = text(" option which is called when the icon element is inserted to the document.");
			t5 = space();
			samplecode0.$$.fragment.c();
			t6 = space();
			p1 = element("p");
			t7 = text("Despite that the feedback icons are placed at the particular area, you might need customized CSS styles to adjust their position:");
			t8 = space();
			div = element("div");
			samplecode1.$$.fragment.c();
			t9 = space();
			demo.$$.fragment.c();
			t10 = space();
			examples.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Showing icons in custom area");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In this example, I will help you how to show the feedback icons in custom area which are right after the labels. We're going to archive it by setting the ");

			code = claim_element(p0_nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t3 = claim_text(code_nodes, "onPlaced");
			code_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " option which is called when the icon element is inserted to the document.");
			p0_nodes.forEach(detach);
			t5 = claim_text(section_nodes, "\n");
			samplecode0.$$.fragment.l(section_nodes);
			t6 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t7 = claim_text(p1_nodes, "Despite that the feedback icons are placed at the particular area, you might need customized CSS styles to adjust their position:");
			p1_nodes.forEach(detach);
			t8 = claim_text(section_nodes, "\n        ");

			div = claim_element(section_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			samplecode1.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t10 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 110);
			add_location(code, file, 8, 181, 379);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 206);
			p1.className = "lh-copy";
			add_location(p1, file, 22, 8, 861);
			div.className = "mb4";
			add_location(div, file, 23, 8, 1022);
			section.className = "mv5";
			add_location(section, file, 7, 4, 176);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(p0, code);
			append(code, t3);
			append(p0, t4);
			append(section, t5);
			mount_component(samplecode0, section, null);
			append(section, t6);
			append(section, p1);
			append(p1, t7);
			append(section, t8);
			append(section, div);
			mount_component(samplecode1, div, null);
			append(section, t9);
			mount_component(demo, section, null);
			insert(target, t10, anchor);
			mount_component(examples, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			samplecode0.$destroy();

			samplecode1.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t10);
			}

			examples.$destroy(detaching);
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
			document.title = "FormValidation • Showing icons in custom area";
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
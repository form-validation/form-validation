import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';

/* src/routes/guide/examples/updating-validator-options/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/updating-validator-options/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, t3, t4, p1, t5, p2, t6, a, t7, t8, t9, current;

	var samplecode = new SampleCode({
		props: { lang: "javascript", code: `
FormValidation.formValidation(yourForm, {
    fields: {
        fieldName: {
            validators: {
                validatorName: {
                    // The error message
                    message: '...',

                    // Other validator options
                    // ...
                }
            }
        }
    }
});
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/updating-validator-options",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Updating validator options");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("When setting validator options for fields, the usual way is");
			t3 = space();
			samplecode.$$.fragment.c();
			t4 = space();
			p1 = element("p");
			t5 = text("The following example demonstrates the ability of updating message and validator options on the fly. It is simple job application form which asks user to upload the correct file based on the selected job position.\n        ");
			p2 = element("p");
			t6 = text("The validator options can be updated via the ");
			a = element("a");
			t7 = text("updateValidatorOption()");
			t8 = text(" method.");
			t9 = space();
			demo.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Updating validator options");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "When setting validator options for fields, the usual way is");
			p0_nodes.forEach(detach);
			t3 = claim_text(section_nodes, "\n\n");
			samplecode.$$.fragment.l(section_nodes);
			t4 = claim_text(section_nodes, "\n\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t5 = claim_text(p1_nodes, "The following example demonstrates the ability of updating message and validator options on the fly. It is simple job application form which asks user to upload the correct file based on the selected job position.\n        ");
			p1_nodes.forEach(detach);

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t6 = claim_text(p2_nodes, "The validator options can be updated via the ");

			a = claim_element(p2_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t7 = claim_text(a_nodes, "updateValidatorOption()");
			a_nodes.forEach(detach);
			t8 = claim_text(p2_nodes, " method.");
			p2_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 108);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 202);
			p1.className = "lh-copy";
			add_location(p1, file, 28, 8, 679);
			a.href = "/guide/api/update-validator-option";
			a.className = "blue dim link";
			add_location(a, file, 29, 72, 984);
			p2.className = "lh-copy";
			add_location(p2, file, 29, 8, 920);
			section.className = "mv5";
			add_location(section, file, 7, 4, 172);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(section, t3);
			mount_component(samplecode, section, null);
			append(section, t4);
			append(section, p1);
			append(p1, t5);
			append(section, p2);
			append(p2, t6);
			append(p2, a);
			append(a, t7);
			append(p2, t8);
			append(section, t9);
			mount_component(demo, section, null);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			samplecode.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			samplecode.$destroy();

			demo.$destroy();
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
			document.title = "FormValidation • Updating validator options";
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
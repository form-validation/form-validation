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

/* src/routes/guide/examples/using-glyphicons-icons/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/using-glyphicons-icons/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p, t2, a, t3, t4, t5, div, t6, t7, current;

	var samplecode = new SampleCode({
		props: { lang: "html", code: `
<!-- Put them in the head tag -->
<link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
<link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

<form id="demoForm">
    ...
</form>

<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap3.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                bootstrap3: new FormValidation.plugins.Bootstrap3(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh',
                }),
            },
        }
    );
});
</script-tag>
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/using-glyphicons-icons",
		frameworks: ['bootstrap3']
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
			t0 = text("Using Glyphicons icons");
			t1 = space();
			section = element("section");
			p = element("p");
			t2 = text("The Glyphicons icon set is included with ");
			a = element("a");
			t3 = text("Bootstrap v3");
			t4 = text(", so you can use it as:");
			t5 = space();
			div = element("div");
			samplecode.$$.fragment.c();
			t6 = space();
			demo.$$.fragment.c();
			t7 = space();
			examples.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Using Glyphicons icons");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p = claim_element(section_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t2 = claim_text(p_nodes, "The Glyphicons icon set is included with ");

			a = claim_element(p_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t3 = claim_text(a_nodes, "Bootstrap v3");
			a_nodes.forEach(detach);
			t4 = claim_text(p_nodes, ", so you can use it as:");
			p_nodes.forEach(detach);
			t5 = claim_text(section_nodes, "\n        ");

			div = claim_element(section_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			samplecode.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			t6 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t7 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 104);
			a.href = "/guide/plugins/bootstrap3";
			a.className = "blue dim link";
			add_location(a, file, 8, 68, 254);
			p.className = "lh-copy";
			add_location(p, file, 8, 8, 194);
			div.className = "mb4";
			add_location(div, file, 9, 8, 364);
			section.className = "mv5";
			add_location(section, file, 7, 4, 164);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p);
			append(p, t2);
			append(p, a);
			append(a, t3);
			append(p, t4);
			append(section, t5);
			append(section, div);
			mount_component(samplecode, div, null);
			append(section, t6);
			mount_component(demo, section, null);
			insert(target, t7, anchor);
			mount_component(examples, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			samplecode.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode.$$.fragment.o(local);
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

			samplecode.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t7);
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
			document.title = "FormValidation • Using Glyphicons icons";
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
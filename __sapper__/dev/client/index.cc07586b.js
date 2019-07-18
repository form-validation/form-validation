import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/examples/bundling-with-rollup/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/bundling-with-rollup/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, code0, t3, t4, a0, t5, t6, t7, p1, t8, t9, t10, p2, t11, a1, t12, t13, t14, t15, p3, t16, code1, t17, t18, t19, t20, p4, t21, t22, t23, current;

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
the-root-directory
    |
    ├── node_modules
    ├── vendors
    |   └── formvalidation
    |       └── dist
    |           └── es6
    └── rollup.config.js
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "html", code: `
// Run this command from the root directory
$ npm install --save-dev rollup-plugin-alias
` },
		$$inline: true
	});

	var samplecode2 = new SampleCode({
		props: { lang: "javascript", code: `
// rollup.config.js
import alias from 'rollup-plugin-alias';
const path = require('path');

module.exports = {
    plugins: [
        alias({
            formvalidation: path.resolve(__dirname, 'vendors/formvalidation'),
        }),
    ],
    ...
};
` },
		$$inline: true
	});

	var samplecode3 = new SampleCode({
		props: { lang: "javascript", code: `
// Use the algorithms
import luhn from 'formvalidation/dist/es6/luhn';

// Use the validators
import creditCard from 'formvalidation/dist/es6/validators/creditCard';

const result = creditCard().validate({
    value: ...,
    options: {
        message: ...,
    },
});

// Use the core library
import formValidation from 'formvalidation/dist/es6/core/Core';

// Use the plugins
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
...
` },
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Bundling with Rollup',
        'Bundling with Webpack',
    ] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Bundling with Rollup");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("FormValidation was rewritten in ES6 from v1.0.0. It comes with the ");
			code0 = element("code");
			t3 = text("dist/es6");
			t4 = text(" directory that consists of ES6 compatible classes. This guide shows how you can bundle FormValidation with ");
			a0 = element("a");
			t5 = text("Rollup");
			t6 = text(".");
			t7 = space();
			p1 = element("p");
			t8 = text("Assume that your folder has the following structure:");
			t9 = space();
			samplecode0.$$.fragment.c();
			t10 = space();
			p2 = element("p");
			t11 = text("Now, you can set the alias to FormValidation by installing the ");
			a1 = element("a");
			t12 = text("rollup-plugin-alias");
			t13 = text(" plugin:");
			t14 = space();
			samplecode1.$$.fragment.c();
			t15 = space();
			p3 = element("p");
			t16 = text("and using it in ");
			code1 = element("code");
			t17 = text("rollup.config.js");
			t18 = text(":");
			t19 = space();
			samplecode2.$$.fragment.c();
			t20 = space();
			p4 = element("p");
			t21 = text("From now on, you can import any file from FormValidation ES6 package as following:");
			t22 = space();
			samplecode3.$$.fragment.c();
			t23 = space();
			examples.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Bundling with Rollup");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "FormValidation was rewritten in ES6 from v1.0.0. It comes with the ");

			code0 = claim_element(p0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t3 = claim_text(code0_nodes, "dist/es6");
			code0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " directory that consists of ES6 compatible classes. This guide shows how you can bundle FormValidation with ");

			a0 = claim_element(p0_nodes, "A", { href: true, target: true, rel: true, class: true }, false);
			var a0_nodes = children(a0);

			t5 = claim_text(a0_nodes, "Rollup");
			a0_nodes.forEach(detach);
			t6 = claim_text(p0_nodes, ".");
			p0_nodes.forEach(detach);
			t7 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t8 = claim_text(p1_nodes, "Assume that your folder has the following structure:");
			p1_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n\n");
			samplecode0.$$.fragment.l(section_nodes);
			t10 = claim_text(section_nodes, "\n        \n        ");

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t11 = claim_text(p2_nodes, "Now, you can set the alias to FormValidation by installing the ");

			a1 = claim_element(p2_nodes, "A", { href: true, target: true, rel: true, class: true }, false);
			var a1_nodes = children(a1);

			t12 = claim_text(a1_nodes, "rollup-plugin-alias");
			a1_nodes.forEach(detach);
			t13 = claim_text(p2_nodes, " plugin:");
			p2_nodes.forEach(detach);
			t14 = claim_text(section_nodes, "\n        \n");
			samplecode1.$$.fragment.l(section_nodes);
			t15 = claim_text(section_nodes, "\n\n        ");

			p3 = claim_element(section_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t16 = claim_text(p3_nodes, "and using it in ");

			code1 = claim_element(p3_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t17 = claim_text(code1_nodes, "rollup.config.js");
			code1_nodes.forEach(detach);
			t18 = claim_text(p3_nodes, ":");
			p3_nodes.forEach(detach);
			t19 = claim_text(section_nodes, "\n");
			samplecode2.$$.fragment.l(section_nodes);
			t20 = claim_text(section_nodes, "\n\n        ");

			p4 = claim_element(section_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t21 = claim_text(p4_nodes, "From now on, you can import any file from FormValidation ES6 package as following:");
			p4_nodes.forEach(detach);
			t22 = claim_text(section_nodes, "\n\n");
			samplecode3.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t23 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 102);
			add_location(code0, file, 8, 94, 272);
			a0.href = "https://rollupjs.org";
			a0.target = "_blank";
			a0.rel = "noopener";
			a0.className = "blue dim link";
			add_location(a0, file, 8, 223, 401);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 186);
			p1.className = "lh-copy";
			add_location(p1, file, 9, 8, 509);
			a1.href = "https://github.com/rollup/rollup-plugin-alias";
			a1.target = "_blank";
			a1.rel = "noopener";
			a1.className = "blue dim link";
			add_location(a1, file, 22, 90, 882);
			p2.className = "lh-copy";
			add_location(p2, file, 22, 8, 800);
			add_location(code1, file, 29, 43, 1207);
			p3.className = "lh-copy";
			add_location(p3, file, 29, 8, 1172);
			p4.className = "lh-copy";
			add_location(p4, file, 45, 8, 1546);
			section.className = "mv5";
			add_location(section, file, 7, 4, 156);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(p0, code0);
			append(code0, t3);
			append(p0, t4);
			append(p0, a0);
			append(a0, t5);
			append(p0, t6);
			append(section, t7);
			append(section, p1);
			append(p1, t8);
			append(section, t9);
			mount_component(samplecode0, section, null);
			append(section, t10);
			append(section, p2);
			append(p2, t11);
			append(p2, a1);
			append(a1, t12);
			append(p2, t13);
			append(section, t14);
			mount_component(samplecode1, section, null);
			append(section, t15);
			append(section, p3);
			append(p3, t16);
			append(p3, code1);
			append(code1, t17);
			append(p3, t18);
			append(section, t19);
			mount_component(samplecode2, section, null);
			append(section, t20);
			append(section, p4);
			append(p4, t21);
			append(section, t22);
			mount_component(samplecode3, section, null);
			insert(target, t23, anchor);
			mount_component(examples, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			samplecode2.$$.fragment.i(local);

			samplecode3.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			samplecode2.$$.fragment.o(local);
			samplecode3.$$.fragment.o(local);
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

			samplecode2.$destroy();

			samplecode3.$destroy();

			if (detaching) {
				detach(t23);
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
			document.title = "FormValidation • Bundling with Rollup";
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
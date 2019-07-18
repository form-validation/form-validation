import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, w as empty, x as group_outros, z as check_outros, I as destroy_each, y as on_outro, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import { a as Cards, b as Card } from './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import './chunk.38eb3b47.js';
import { a as GuideLayout, d as Plugins, c as camelCaseToDash } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';

/* src/routes/guide/plugins/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.p = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.p = list[i];
	return child_ctx;
}

// (12:8) <Heading>
function create_default_slot_8(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Core plugins");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Core plugins");
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

// (17:12) <Card target="/guide/plugins/{camelCaseToDash(p.name)}" title="{p.name}">
function create_default_slot_7(ctx) {
	var t_value = ctx.p.desc, t;

	return {
		c: function create() {
			t = text(t_value);
		},

		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (16:12) {#each CorePlugins as p}
function create_each_block_1(ctx) {
	var current;

	var card = new Card({
		props: {
		target: "/guide/plugins/" + camelCaseToDash(ctx.p.name),
		title: ctx.p.name,
		$$slots: { default: [create_default_slot_7] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			card.$$.fragment.c();
		},

		l: function claim(nodes) {
			card.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(card, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var card_changes = {};
			if (changed.camelCaseToDash || changed.CorePlugins) card_changes.target = "/guide/plugins/" + camelCaseToDash(ctx.p.name);
			if (changed.CorePlugins) card_changes.title = ctx.p.name;
			if (changed.$$scope) card_changes.$$scope = { changed, ctx };
			card.$set(card_changes);
		},

		i: function intro(local) {
			if (current) return;
			card.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			card.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			card.$destroy(detaching);
		}
	};
}

// (15:8) <Cards>
function create_default_slot_6(ctx) {
	var each_1_anchor, current;

	var each_value_1 = ctx.CorePlugins;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},

		l: function claim(nodes) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.camelCaseToDash || changed.CorePlugins) {
				each_value_1 = ctx.CorePlugins;

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value_1.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			current = false;
		},

		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);

			if (detaching) {
				detach(each_1_anchor);
			}
		}
	};
}

// (23:8) <Heading>
function create_default_slot_5(ctx) {
	var t;

	return {
		c: function create() {
			t = text("External plugins");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "External plugins");
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

// (39:12) <Card target="/guide/plugins/{camelCaseToDash(p.name)}" title="{p.name}">
function create_default_slot_4(ctx) {
	var t_value = ctx.p.desc, t;

	return {
		c: function create() {
			t = text(t_value);
		},

		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (38:12) {#each ExternalPlugins as p}
function create_each_block(ctx) {
	var current;

	var card = new Card({
		props: {
		target: "/guide/plugins/" + camelCaseToDash(ctx.p.name),
		title: ctx.p.name,
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			card.$$.fragment.c();
		},

		l: function claim(nodes) {
			card.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(card, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var card_changes = {};
			if (changed.camelCaseToDash || changed.ExternalPlugins) card_changes.target = "/guide/plugins/" + camelCaseToDash(ctx.p.name);
			if (changed.ExternalPlugins) card_changes.title = ctx.p.name;
			if (changed.$$scope) card_changes.$$scope = { changed, ctx };
			card.$set(card_changes);
		},

		i: function intro(local) {
			if (current) return;
			card.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			card.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			card.$destroy(detaching);
		}
	};
}

// (37:8) <Cards>
function create_default_slot_3(ctx) {
	var each_1_anchor, current;

	var each_value = ctx.ExternalPlugins;

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

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},

		l: function claim(nodes) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.camelCaseToDash || changed.ExternalPlugins) {
				each_value = ctx.ExternalPlugins;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			current = false;
		},

		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);

			if (detaching) {
				detach(each_1_anchor);
			}
		}
	};
}

// (46:12) <PrevButton target="/guide/validators">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Validators");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Validators");
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

// (47:12) <NextButton target="/guide/plugins/alias">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Alias plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Alias plugin");
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
	var h1, t0, t1, h2, t2, t3, p0, t4, t5, section0, t6, p1, t7, code0, t8, t9, t10, t11, section1, t12, p2, t13, code1, t14, t15, t16, div0, t17, t18, section2, div1, t19, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_8] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var cards0 = new Cards({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode = new SampleCode({
		props: { lang: "html", code: `
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<!-- 
You need to insert external plugin (Bootstrap in this case) 
after FormValidation.min.js
-->
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>
` },
		$$inline: true
	});

	var cards1 = new Cards({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/plugins/alias",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Plugins");
			t1 = space();
			h2 = element("h2");
			t2 = text("A collection of useful plugins that do additional jobs");
			t3 = space();
			p0 = element("p");
			t4 = text("FormValidation comes with various built-in plugins listed in the alphabetical order, split into two groups as following:");
			t5 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t6 = space();
			p1 = element("p");
			t7 = text("These plugins are often used and included in the ");
			code0 = element("code");
			t8 = text("dist/js/FormValidation(.min).js");
			t9 = text(" file. You don't need to include any external plugin file to use them.");
			t10 = space();
			cards0.$$.fragment.c();
			t11 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t12 = space();
			p2 = element("p");
			t13 = text("You don't need all external plugins most of the times. So, you have to include them right after the ");
			code1 = element("code");
			t14 = text("dist/js/FormValidation(.min).js");
			t15 = text(" file in your page.");
			t16 = space();
			div0 = element("div");
			samplecode.$$.fragment.c();
			t17 = space();
			cards1.$$.fragment.c();
			t18 = space();
			section2 = element("section");
			div1 = element("div");
			prevbutton.$$.fragment.c();
			t19 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Plugins");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "A collection of useful plugins that do additional jobs");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			p0 = claim_element(nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t4 = claim_text(p0_nodes, "FormValidation comes with various built-in plugins listed in the alphabetical order, split into two groups as following:");
			p0_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t6 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t7 = claim_text(p1_nodes, "These plugins are often used and included in the ");

			code0 = claim_element(p1_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t8 = claim_text(code0_nodes, "dist/js/FormValidation(.min).js");
			code0_nodes.forEach(detach);
			t9 = claim_text(p1_nodes, " file. You don't need to include any external plugin file to use them.");
			p1_nodes.forEach(detach);
			t10 = claim_text(section0_nodes, "\n\n        ");
			cards0.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t12 = claim_text(section1_nodes, "\n        ");

			p2 = claim_element(section1_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t13 = claim_text(p2_nodes, "You don't need all external plugins most of the times. So, you have to include them right after the ");

			code1 = claim_element(p2_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t14 = claim_text(code1_nodes, "dist/js/FormValidation(.min).js");
			code1_nodes.forEach(detach);
			t15 = claim_text(p2_nodes, " file in your page.");
			p2_nodes.forEach(detach);
			t16 = claim_text(section1_nodes, "\n        ");

			div0 = claim_element(section1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			samplecode.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t17 = claim_text(section1_nodes, "  \n\n        ");
			cards1.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t18 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			div1 = claim_element(section2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			prevbutton.$$.fragment.l(div1_nodes);
			t19 = claim_text(div1_nodes, "\n            ");
			nextbutton.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 89);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 134);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 4, 221);
			add_location(code0, file, 12, 76, 509);
			p1.className = "lh-copy";
			add_location(p1, file, 12, 8, 441);
			section0.className = "mv5";
			add_location(section0, file, 10, 4, 370);
			add_location(code1, file, 23, 127, 1033);
			p2.className = "lh-copy";
			add_location(p2, file, 23, 8, 914);
			div0.className = "mb3";
			add_location(div0, file, 24, 8, 1109);
			section1.className = "mv5";
			add_location(section1, file, 21, 4, 840);
			div1.className = "flex";
			add_location(div1, file, 44, 8, 1699);
			section2.className = "mv5";
			add_location(section2, file, 43, 4, 1669);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, p0, anchor);
			append(p0, t4);
			insert(target, t5, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t6);
			append(section0, p1);
			append(p1, t7);
			append(p1, code0);
			append(code0, t8);
			append(p1, t9);
			append(section0, t10);
			mount_component(cards0, section0, null);
			insert(target, t11, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t12);
			append(section1, p2);
			append(p2, t13);
			append(p2, code1);
			append(code1, t14);
			append(p2, t15);
			append(section1, t16);
			append(section1, div0);
			mount_component(samplecode, div0, null);
			append(section1, t17);
			mount_component(cards1, section1, null);
			insert(target, t18, anchor);
			insert(target, section2, anchor);
			append(section2, div1);
			mount_component(prevbutton, div1, null);
			append(div1, t19);
			mount_component(nextbutton, div1, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var cards0_changes = {};
			if (changed.$$scope) cards0_changes.$$scope = { changed, ctx };
			cards0.$set(cards0_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var cards1_changes = {};
			if (changed.$$scope) cards1_changes.$$scope = { changed, ctx };
			cards1.$set(cards1_changes);

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

			cards0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			samplecode.$$.fragment.i(local);

			cards1.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			cards0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			samplecode.$$.fragment.o(local);
			cards1.$$.fragment.o(local);
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
				detach(p0);
				detach(t5);
				detach(section0);
			}

			heading0.$destroy();

			cards0.$destroy();

			if (detaching) {
				detach(t11);
				detach(section1);
			}

			heading1.$destroy();

			samplecode.$destroy();

			cards1.$destroy();

			if (detaching) {
				detach(t18);
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
			document.title = "FormValidation • Plugins";
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
	

const CorePlugins = Plugins.filter((p) => p.isCorePlugin);
const ExternalPlugins = Plugins.filter((p) => !p.isCorePlugin);

	return { CorePlugins, ExternalPlugins };
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Index;
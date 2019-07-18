import { a as SvelteComponentDev, b as init, c as safe_not_equal, d as create_slot, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, o as insert, p as append, q as set_data, e as get_slot_changes, f as get_slot_context } from './chunk.989912da.js';

/* src/components/Tip.svelte generated by Svelte v3.4.2 */

const file = "src/components/Tip.svelte";

function create_fragment(ctx) {
	var blockquote, div1, h4, t0, t1, div0, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			blockquote = element("blockquote");
			div1 = element("div");
			h4 = element("h4");
			t0 = text(ctx.heading);
			t1 = space();
			div0 = element("div");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			blockquote = claim_element(nodes, "BLOCKQUOTE", { class: true }, false);
			var blockquote_nodes = children(blockquote);

			div1 = claim_element(blockquote_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			h4 = claim_element(div1_nodes, "H4", { class: true }, false);
			var h4_nodes = children(h4);

			t0 = claim_text(h4_nodes, ctx.heading);
			h4_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n        ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			if (default_slot) default_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			blockquote_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h4.className = "mv0";
			add_location(h4, file, 2, 8, 105);

			div0.className = "lh-copy";
			add_location(div0, file, 3, 8, 144);
			div1.className = "bl bw2 pa3 b--light-blue";
			add_location(div1, file, 1, 4, 58);
			blockquote.className = "ba b--light-blue ma0 mv3 lh-copy";
			add_location(blockquote, file, 0, 0, 0);
		},

		m: function mount(target, anchor) {
			insert(target, blockquote, anchor);
			append(blockquote, div1);
			append(div1, h4);
			append(h4, t0);
			append(div1, t1);
			append(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed.heading) {
				set_data(t0, ctx.heading);
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(blockquote);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	// Props
let { heading = 'Tip' } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('heading' in $$props) $$invalidate('heading', heading = $$props.heading);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { heading, $$slots, $$scope };
}

class Tip extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["heading"]);
	}

	get heading() {
		throw new Error("<Tip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set heading(value) {
		throw new Error("<Tip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Tip as a };
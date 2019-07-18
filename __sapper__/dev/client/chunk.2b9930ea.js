import { a as SvelteComponentDev, b as init, c as safe_not_equal, h as element, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, o as insert, t as mount_component, p as append, B as onMount, i as text, q as set_data, w as empty, x as group_outros, z as check_outros, I as destroy_each, y as on_outro } from './chunk.989912da.js';
import { a as Cards, b as Card } from './chunk.77ca656e.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import { a as slug } from './chunk.7ee4e2c0.js';

/* src/components/Examples.svelte generated by Svelte v3.4.2 */

const file = "src/components/Examples.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.example = list[i];
	return child_ctx;
}

// (2:4) <Heading>
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text(ctx.heading);
		},

		l: function claim(nodes) {
			t = claim_text(nodes, ctx.heading);
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		p: function update(changed, ctx) {
			if (changed.heading) {
				set_data(t, ctx.heading);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (4:8) {#each examples as example}
function create_each_block(ctx) {
	var current;

	var card = new Card({
		props: {
		target: "/guide/examples/" + slug(ctx.example),
		title: ctx.example
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
			if (changed.slug || changed.examples) card_changes.target = "/guide/examples/" + slug(ctx.example);
			if (changed.examples) card_changes.title = ctx.example;
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

// (3:4) <Cards>
function create_default_slot(ctx) {
	var each_1_anchor, current;

	var each_value = ctx.examples;

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
			if (changed.slug || changed.examples) {
				each_value = ctx.examples;

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

function create_fragment(ctx) {
	var section, t, current;

	var heading_1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var cards = new Cards({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			section = element("section");
			heading_1.$$.fragment.c();
			t = space();
			cards.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			heading_1.$$.fragment.l(section_nodes);
			t = claim_text(section_nodes, "\n    ");
			cards.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			section.className = "mv5";
			add_location(section, file, 0, 0, 0);
		},

		m: function mount(target, anchor) {
			insert(target, section, anchor);
			mount_component(heading_1, section, null);
			append(section, t);
			mount_component(cards, section, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading_1_changes = {};
			if (changed.$$scope || changed.heading) heading_1_changes.$$scope = { changed, ctx };
			heading_1.$set(heading_1_changes);

			var cards_changes = {};
			if (changed.$$scope || changed.examples) cards_changes.$$scope = { changed, ctx };
			cards.$set(cards_changes);
		},

		i: function intro(local) {
			if (current) return;
			heading_1.$$.fragment.i(local);

			cards.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading_1.$$.fragment.o(local);
			cards.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(section);
			}

			heading_1.$destroy();

			cards.$destroy();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let { examples = [], heading = 'More examples' } = $$props;

onMount(() => {
    const path = window.location.pathname;
    $$invalidate('examples', examples = examples.filter((item) => `/guide/examples/${slug(item)}` !== path));
});

	$$self.$set = $$props => {
		if ('examples' in $$props) $$invalidate('examples', examples = $$props.examples);
		if ('heading' in $$props) $$invalidate('heading', heading = $$props.heading);
	};

	return { examples, heading };
}

class Examples extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["examples", "heading"]);
	}

	get examples() {
		throw new Error("<Examples>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set examples(value) {
		throw new Error("<Examples>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get heading() {
		throw new Error("<Examples>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set heading(value) {
		throw new Error("<Examples>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Examples as a };
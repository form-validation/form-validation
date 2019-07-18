import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, d as create_slot, e as get_slot_changes, f as get_slot_context } from './chunk.989912da.js';
import { a as classSet } from './chunk.fb19edaf.js';
import { a as Framework } from './chunk.79c24606.js';
import { a as ResourceLoader } from './chunk.17752e4f.js';

class Bulma extends Framework {
    constructor(opts) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-bulma',
            messageClass: 'help is-danger',
            rowInvalidClass: 'fv-has-error',
            rowPattern: /^.*field.*$/,
            rowSelector: '.field',
            rowValidClass: 'fv-has-success',
        }, opts));
    }
    onIconPlaced(e) {
        classSet(e.iconElement, {
            'fv-plugins-icon': false,
        });
        const span = document.createElement('span');
        span.setAttribute('class', 'icon is-small is-right');
        e.iconElement.parentNode.insertBefore(span, e.iconElement);
        span.appendChild(e.iconElement);
        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            classSet(parent.parentElement, {
                'has-icons-right': true,
            });
            classSet(span, {
                'fv-plugins-icon-check': true,
            });
            parent.parentElement.insertBefore(span, parent.nextSibling);
        }
        else {
            classSet(parent, {
                'has-icons-right': true,
            });
        }
    }
}

/* src/components/demo/BulmaLayout.svelte generated by Svelte v3.4.2 */

// (11:0) <ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css']} onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			if (default_slot) default_slot.c();
		},

		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},

		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},

		p: function update(changed, ctx) {
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
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var resourceloader = new ResourceLoader({
		props: {
		useExternalFramework: "true",
		urls: ['https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css'],
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			resourceloader.$$.fragment.c();
		},

		l: function claim(nodes) {
			resourceloader.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(resourceloader, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var resourceloader_changes = {};
			if (changed.onLoaded) resourceloader_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) resourceloader_changes.$$scope = { changed, ctx };
			resourceloader.$set(resourceloader_changes);
		},

		i: function intro(local) {
			if (current) return;
			resourceloader.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			resourceloader.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			resourceloader.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { onLoaded = () => {} } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('onLoaded' in $$props) $$invalidate('onLoaded', onLoaded = $$props.onLoaded);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { onLoaded, $$slots, $$scope };
}

class BulmaLayout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["onLoaded"]);
	}

	get onLoaded() {
		throw new Error("<BulmaLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onLoaded(value) {
		throw new Error("<BulmaLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { BulmaLayout as a, Bulma as b };
import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, d as create_slot, e as get_slot_changes, f as get_slot_context } from './chunk.989912da.js';
import { a as Loader } from './chunk.04c942d0.js';

/* src/components/ResourceLoader.svelte generated by Svelte v3.4.2 */

// (1:0) <Loader isDone={_loaded}>
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

	var loader = new Loader({
		props: {
		isDone: ctx._loaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			loader.$$.fragment.c();
		},

		l: function claim(nodes) {
			loader.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(loader, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var loader_changes = {};
			if (changed._loaded) loader_changes.isDone = ctx._loaded;
			if (changed.$$scope) loader_changes.$$scope = { changed, ctx };
			loader.$set(loader_changes);
		},

		i: function intro(local) {
			if (current) return;
			loader.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			loader.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			loader.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let _loaded = false;

// Props
let { useExternalFramework = false, urls = [], onLoaded = () => {} } = $$props;

onMount(() => {
    // Get the default style which is defined by `data-default-framework="true"` in `template.html`
    const defaultStyle = document.querySelector('link[rel="stylesheet"][data-default-framework="true"]');

    // Disable the default style
    if (useExternalFramework) {
        defaultStyle.setAttribute('disabled', 'true');
    }

    const js = [];
    const css = [];
    urls.forEach(url => {
        if (url.endsWith('.js')) {
            // The resource is a JavaScript file
            js.push(url);
        } else if (url.endsWith('.css') || url.startsWith('https://fonts.googleapis.com/')) {
            // The resource is a CSS file
            css.push(url);
        }
    });

    let numLoaded = 0;
    const total = css.length + js.length;
    const checkResourcesLoaded = () => {
        if (numLoaded === total) {
            $$invalidate('_loaded', _loaded = true);
            onLoaded();
        }
    };
    
    // Load CSS
    const head = document.querySelector('head');
    css.forEach(url => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', url);
        link.addEventListener('load', () => {
            numLoaded++;
            checkResourcesLoaded();
        });

        // Add new style right after the default one (which is now disabled)
        // We don't append it to `head` because we need the `formValidation.css` is loaded lastly
        defaultStyle.parentElement.insertBefore(link, defaultStyle.nextSibling);
    });

    const loadScript = () => {
        if (js.length == 0) {
            checkResourcesLoaded();
        } else {
            const script = document.createElement('script');
            script.onload = () => {
                numLoaded++;
                loadScript();
            };
            script.src = js.shift();
            head.appendChild(script);
        }
    };

    loadScript();
});

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('useExternalFramework' in $$props) $$invalidate('useExternalFramework', useExternalFramework = $$props.useExternalFramework);
		if ('urls' in $$props) $$invalidate('urls', urls = $$props.urls);
		if ('onLoaded' in $$props) $$invalidate('onLoaded', onLoaded = $$props.onLoaded);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return {
		_loaded,
		useExternalFramework,
		urls,
		onLoaded,
		$$slots,
		$$scope
	};
}

class ResourceLoader extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["useExternalFramework", "urls", "onLoaded"]);
	}

	get useExternalFramework() {
		throw new Error("<ResourceLoader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set useExternalFramework(value) {
		throw new Error("<ResourceLoader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get urls() {
		throw new Error("<ResourceLoader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set urls(value) {
		throw new Error("<ResourceLoader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onLoaded() {
		throw new Error("<ResourceLoader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onLoaded(value) {
		throw new Error("<ResourceLoader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ResourceLoader as a };
import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, g as space, k as claim_element, l as children, m as detach, j as claim_text, n as add_location, o as insert, p as append, x as group_outros, z as check_outros, I as destroy_each, d as create_slot, i as text, D as add_binding_callback, y as on_outro, e as get_slot_changes, f as get_slot_context, r as noop } from './chunk.989912da.js';
import { a as Layout } from './chunk.058c0688.js';
import { b as SidebarLink, a as SidebarLinkWithToc } from './chunk.4e6dbbb2.js';

var Plugins = [
    {
        name: 'Alias',
        isCorePlugin: true,
        desc: 'Allow to use multiple instances of the same validator',
    },
    {
        name: 'Aria',
        isCorePlugin: true,
        desc: 'Add ARIA attributes based on the field validity',
    },
    {
        name: 'AutoFocus',
        isCorePlugin: false,
        desc: 'Focus on the first invalid element when submit form',
    },
    {
        name: 'Bootstrap',
        isCorePlugin: false,
        desc: 'Integrate with Bootstrap v4 framework',
    },
    {
        name: 'Bootstrap 3',
        isCorePlugin: false,
        desc: 'Integrate with Bootstrap framework',
    },
    {
        name: 'Bulma',
        isCorePlugin: false,
        desc: 'Integrate with Bulma framework',
    },
    {
        name: 'Declarative',
        isCorePlugin: true,
        desc: 'Provide the ability of declaring validator options via HTML attributes',
    },
    {
        name: 'DefaultSubmit',
        isCorePlugin: true,
        desc: 'Submit the form if all fields are valid after validating',
    },
    {
        name: 'Excluded',
        isCorePlugin: true,
        desc: 'Ignore validations on particular field',
    },
    {
        name: 'FieldStatus',
        isCorePlugin: true,
        desc: 'Track the field status, and allow to perform an action when a field status is changed',
    },
    {
        name: 'Foundation',
        isCorePlugin: false,
        desc: 'Integrate with Foundation framework',
    },
    {
        name: 'Icon',
        isCorePlugin: true,
        desc: 'Display various icons based on the field validity',
    },
    {
        name: 'J',
        isCorePlugin: false,
        desc: 'Use FormValidation as a jQuery plugin',
    },
    {
        name: 'L10n',
        isCorePlugin: false,
        desc: 'Support multiple locales for error messages',
    },
    {
        name: 'Mailgun',
        isCorePlugin: false,
        desc: 'Validate an email address by using Mailgun API',
    },
    {
        name: 'MandatoryIcon',
        isCorePlugin: false,
        desc: 'Show required icons for mandatory fields',
    },
    {
        name: 'Materialize',
        isCorePlugin: false,
        desc: 'Integrate with Materialize framework',
    },
    {
        name: 'Message',
        isCorePlugin: true,
        desc: 'Display error message',
    },
    {
        name: 'Milligram',
        isCorePlugin: false,
        desc: 'Integrate with milligram framework',
    },
    {
        name: 'Mini',
        isCorePlugin: false,
        desc: 'Integrate with Mini framework',
    },
    {
        name: 'Mui',
        isCorePlugin: false,
        desc: 'Integrate with MUI framework',
    },
    {
        name: 'PasswordStrength',
        isCorePlugin: false,
        desc: 'Check the strength of a password',
    },
    {
        name: 'Pure',
        isCorePlugin: false,
        desc: 'Integrate with Pure library',
    },
    {
        name: 'Recaptcha',
        isCorePlugin: false,
        desc: 'Shows and validates a Google reCAPTCHA v2',
    },
    {
        name: 'Recaptcha3',
        isCorePlugin: false,
        desc: 'Shows and validates a Google reCAPTCHA v3',
    },
    {
        name: 'Semantic',
        isCorePlugin: false,
        desc: 'Integrate with Semantic UI framework',
    },
    {
        name: 'Sequence',
        isCorePlugin: true,
        desc: 'Stop performing remaining validators if there is a validator that the field does not pass',
    },
    {
        name: 'Shoelace',
        isCorePlugin: false,
        desc: 'Integrate with Shoelace library',
    },
    {
        name: 'Spectre',
        isCorePlugin: false,
        desc: 'Integrate with Spectre framework',
    },
    {
        name: 'StartEndDate',
        isCorePlugin: false,
        desc: 'Validate start and end dates',
    },
    {
        name: 'SubmitButton',
        isCorePlugin: true,
        desc: 'Automatically validate the form when pressing its Submit button',
    },
    {
        name: 'Tachyons',
        isCorePlugin: false,
        desc: 'Integrate with Tachyons library',
    },
    {
        name: 'Tooltip',
        isCorePlugin: true,
        desc: 'Show error message in a tooltip',
    },
    {
        name: 'Transformer',
        isCorePlugin: false,
        desc: 'Modify the field value before doing validation',
    },
    {
        name: 'Trigger',
        isCorePlugin: true,
        desc: 'Indicate the events which the validation will be executed',
    },
    {
        name: 'Turret',
        isCorePlugin: false,
        desc: 'Integrate with turretcss framework',
    },
    {
        name: 'Uikit',
        isCorePlugin: false,
        desc: 'Integrate with UIKit framework',
    },
    {
        name: 'Wizard',
        isCorePlugin: false,
        desc: 'Support validating multiple steps form',
    },
];

var AllValidators = [
    {
        name: 'base64',
        requireFullVersion: true,
        description: 'Validate a base64 encoded string',
    },
    {
        name: 'between',
        requireFullVersion: false,
        description: 'Check if the input value is between (strictly or not) two given numbers',
    },
    {
        name: 'bic',
        requireFullVersion: true,
        description: 'Validate a BIC (Business Identifier Codes)',
    },
    {
        name: 'callback',
        requireFullVersion: false,
        description: 'Check if the input value passes a callback method',
    },
    {
        name: 'choice',
        requireFullVersion: false,
        description: 'Check if the number of checked boxes are less or more than a given number',
    },
    {
        name: 'color',
        requireFullVersion: true,
        description: 'Validate a color in different formats',
    },
    {
        name: 'creditCard',
        requireFullVersion: false,
        description: 'Validate a credit card number',
    },
    {
        name: 'cusip',
        requireFullVersion: true,
        description: 'Validate a CUSIP',
    },
    {
        name: 'date',
        requireFullVersion: false,
        description: 'Validate date',
    },
    {
        name: 'different',
        requireFullVersion: false,
        description: 'Check if the input value is different with given value',
    },
    {
        name: 'digits',
        requireFullVersion: false,
        description: 'Check if the value contains only digits',
    },
    {
        name: 'ean',
        requireFullVersion: true,
        description: 'Validate an EAN (International Article Number)',
    },
    {
        name: 'ein',
        requireFullVersion: true,
        description: 'Validate an EIN (Employer Identification Number)',
    },
    {
        name: 'emailAddress',
        requireFullVersion: false,
        description: 'Validate an email address',
    },
    {
        name: 'file',
        requireFullVersion: false,
        description: 'Validate a file',
    },
    {
        name: 'greaterThan',
        requireFullVersion: false,
        description: 'Check if the value is greater than or equals to given number',
    },
    {
        name: 'grid',
        requireFullVersion: true,
        description: 'Validate a GRId (Global Release Identifier)',
    },
    {
        name: 'hex',
        requireFullVersion: true,
        description: 'Validate a hexadecimal number',
    },
    {
        name: 'iban',
        requireFullVersion: true,
        description: 'Validate an International Bank Account Number (IBAN)',
    },
    {
        name: 'id',
        requireFullVersion: true,
        description: 'Validate an identification number',
    },
    {
        name: 'identical',
        requireFullVersion: false,
        description: 'Check if the value is the same as one of given value',
    },
    {
        name: 'imei',
        requireFullVersion: true,
        description: 'Validate an IMEI (International Mobile Station Equipment Identity)',
    },
    {
        name: 'imo',
        requireFullVersion: true,
        description: 'Validate an IMO (International Maritime Organization)',
    },
    {
        name: 'integer',
        requireFullVersion: false,
        description: 'Validate an integer number. Accept both positive and negative number',
    },
    {
        name: 'ip',
        requireFullVersion: false,
        description: 'Validate an IP address. Support both IPv4 and IPv6',
    },
    {
        name: 'isbn',
        requireFullVersion: true,
        description: 'Validate an ISBN (International Standard Book Number). Support both ISBN 10 and ISBN 13',
    },
    {
        name: 'isin',
        requireFullVersion: true,
        description: 'Validate an ISIN (International Securities Identification Number)',
    },
    {
        name: 'ismn',
        requireFullVersion: true,
        description: 'Validate an ISMN (International Standard Music Number)',
    },
    {
        name: 'issn',
        requireFullVersion: true,
        description: 'Validate an ISSN (International Standard Serial Number)',
    },
    {
        name: 'lessThan',
        requireFullVersion: false,
        description: 'Check if the value is less than or equals to given number',
    },
    {
        name: 'mac',
        requireFullVersion: true,
        description: 'Validate a MAC address',
    },
    {
        name: 'meid',
        requireFullVersion: true,
        description: 'Validate a MEID (mobile equipment identifier)',
    },
    {
        name: 'notEmpty',
        requireFullVersion: false,
        description: 'Check if the value an is empty string',
    },
    {
        name: 'numeric',
        requireFullVersion: false,
        description: 'Check if the value is numeric',
    },
    {
        name: 'phone',
        requireFullVersion: true,
        description: 'Validate a phone number',
    },
    {
        name: 'promise',
        requireFullVersion: false,
        description: 'Use Promise to validate value',
    },
    {
        name: 'regexp',
        requireFullVersion: false,
        description: 'Check if the value matches given JavaScript regular expression',
    },
    {
        name: 'remote',
        requireFullVersion: false,
        description: 'Perform remote checking via Ajax request',
    },
    {
        name: 'rtn',
        requireFullVersion: true,
        description: 'Validate a RTN (Routing transit number)',
    },
    {
        name: 'sedol',
        requireFullVersion: true,
        description: 'Validate a SEDOL (Stock Exchange Daily Official List)',
    },
    {
        name: 'siren',
        requireFullVersion: true,
        description: 'Validate a Siren number',
    },
    {
        name: 'siret',
        requireFullVersion: true,
        description: 'Validate a Siret number',
    },
    {
        name: 'step',
        requireFullVersion: true,
        description: 'Check if the value is valid step one',
    },
    {
        name: 'stringCase',
        requireFullVersion: false,
        description: 'Check if a string is a lower or upper case one',
    },
    {
        name: 'stringLength',
        requireFullVersion: false,
        description: 'Validate the length of a string',
    },
    {
        name: 'uri',
        requireFullVersion: false,
        description: 'Validate an URL address',
    },
    {
        name: 'uuid',
        requireFullVersion: true,
        description: 'Validate an UUID, support v3, v4, v5',
    },
    {
        name: 'vat',
        requireFullVersion: true,
        description: 'Validate VAT number',
    },
    {
        name: 'vin',
        requireFullVersion: true,
        description: 'Validate an US VIN (Vehicle Identification Number)',
    },
    {
        name: 'zipCode',
        requireFullVersion: true,
        description: 'Validate a zip code',
    },
];

var camelCaseToDash = (s) => {
    return s.replace(/ /g, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

/* src/components/GuideLayout.svelte generated by Svelte v3.4.2 */

const file = "src/components/GuideLayout.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.name = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.name = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.p = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.v = list[i];
	return child_ctx;
}

// (7:20) {#if path.startsWith('/guide/getting-started')}
function create_if_block_4(ctx) {
	var ul, li0, t0, li1, t1, li2, t2, li3, t3, li4, current;

	var sidebarlinkwithtoc0 = new SidebarLinkWithToc({
		props: {
		url: "/guide/getting-started",
		title: "Overview",
		content: ctx.func,
		$$slots: { default: [create_default_slot_14] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var sidebarlinkwithtoc1 = new SidebarLinkWithToc({
		props: {
		url: "/guide/getting-started/usage",
		title: "Usage",
		content: ctx.func_1,
		$$slots: { default: [create_default_slot_13] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var sidebarlinkwithtoc2 = new SidebarLinkWithToc({
		props: {
		url: "/guide/getting-started/localization",
		title: "Localization",
		content: ctx.func_2,
		$$slots: { default: [create_default_slot_12] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var sidebarlinkwithtoc3 = new SidebarLinkWithToc({
		props: {
		url: "/guide/getting-started/special-field-name",
		title: "Special field name",
		content: ctx.func_3,
		$$slots: { default: [create_default_slot_11] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var sidebarlinkwithtoc4 = new SidebarLinkWithToc({
		props: {
		url: "/guide/getting-started/field-selector",
		title: "Field selector",
		content: ctx.func_4,
		$$slots: { default: [create_default_slot_10] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			sidebarlinkwithtoc0.$$.fragment.c();
			t0 = space();
			li1 = element("li");
			sidebarlinkwithtoc1.$$.fragment.c();
			t1 = space();
			li2 = element("li");
			sidebarlinkwithtoc2.$$.fragment.c();
			t2 = space();
			li3 = element("li");
			sidebarlinkwithtoc3.$$.fragment.c();
			t3 = space();
			li4 = element("li");
			sidebarlinkwithtoc4.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			sidebarlinkwithtoc0.$$.fragment.l(li0_nodes);
			li0_nodes.forEach(detach);
			t0 = claim_text(ul_nodes, "\n                        ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			sidebarlinkwithtoc1.$$.fragment.l(li1_nodes);
			li1_nodes.forEach(detach);
			t1 = claim_text(ul_nodes, "\n                        ");

			li2 = claim_element(ul_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			sidebarlinkwithtoc2.$$.fragment.l(li2_nodes);
			li2_nodes.forEach(detach);
			t2 = claim_text(ul_nodes, "\n                        ");

			li3 = claim_element(ul_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			sidebarlinkwithtoc3.$$.fragment.l(li3_nodes);
			li3_nodes.forEach(detach);
			t3 = claim_text(ul_nodes, "\n                        ");

			li4 = claim_element(ul_nodes, "LI", {}, false);
			var li4_nodes = children(li4);

			sidebarlinkwithtoc4.$$.fragment.l(li4_nodes);
			li4_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li0, file, 8, 24, 404);
			add_location(li1, file, 9, 24, 557);
			add_location(li2, file, 10, 24, 710);
			add_location(li3, file, 11, 24, 884);
			add_location(li4, file, 12, 24, 1076);
			ul.className = "list pa0 ma0 f5 lh-copy";
			add_location(ul, file, 7, 20, 343);
		},

		m: function mount(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li0);
			mount_component(sidebarlinkwithtoc0, li0, null);
			append(ul, t0);
			append(ul, li1);
			mount_component(sidebarlinkwithtoc1, li1, null);
			append(ul, t1);
			append(ul, li2);
			mount_component(sidebarlinkwithtoc2, li2, null);
			append(ul, t2);
			append(ul, li3);
			mount_component(sidebarlinkwithtoc3, li3, null);
			append(ul, t3);
			append(ul, li4);
			mount_component(sidebarlinkwithtoc4, li4, null);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc0.$$.fragment.i(local);

			sidebarlinkwithtoc1.$$.fragment.i(local);

			sidebarlinkwithtoc2.$$.fragment.i(local);

			sidebarlinkwithtoc3.$$.fragment.i(local);

			sidebarlinkwithtoc4.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc0.$$.fragment.o(local);
			sidebarlinkwithtoc1.$$.fragment.o(local);
			sidebarlinkwithtoc2.$$.fragment.o(local);
			sidebarlinkwithtoc3.$$.fragment.o(local);
			sidebarlinkwithtoc4.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(ul);
			}

			sidebarlinkwithtoc0.$destroy();

			sidebarlinkwithtoc1.$destroy();

			sidebarlinkwithtoc2.$destroy();

			sidebarlinkwithtoc3.$destroy();

			sidebarlinkwithtoc4.$destroy();
		}
	};
}

// (9:28) <SidebarLinkWithToc url="/guide/getting-started" title="Overview" content={() => content}>
function create_default_slot_14(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Overview");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Overview");
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

// (10:28) <SidebarLinkWithToc url="/guide/getting-started/usage" title="Usage" content={() => content}>
function create_default_slot_13(ctx) {
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

// (11:28) <SidebarLinkWithToc url="/guide/getting-started/localization" title="Localization" content={() => content}>
function create_default_slot_12(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Localization");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Localization");
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

// (12:28) <SidebarLinkWithToc url="/guide/getting-started/special-field-name" title="Special field name" content={() => content}>
function create_default_slot_11(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Special field name");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Special field name");
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

// (13:28) <SidebarLinkWithToc url="/guide/getting-started/field-selector" title="Field selector" content={() => content}>
function create_default_slot_10(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Field selector");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Field selector");
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

// (19:20) {#if path.startsWith('/guide/validators')}
function create_if_block_3(ctx) {
	var ul, li, t, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/validators",
		title: "Overview",
		content: ctx.func_5,
		$$slots: { default: [create_default_slot_9] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var each_value_3 = AllValidators;

	var each_blocks = [];

	for (var i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
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
			ul = element("ul");
			li = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			t = space();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li = claim_element(ul_nodes, "LI", {}, false);
			var li_nodes = children(li);

			sidebarlinkwithtoc.$$.fragment.l(li_nodes);
			li_nodes.forEach(detach);
			t = claim_text(ul_nodes, "\n                        ");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 20, 24, 1597);
			ul.className = "list pa0 ma0 f5 lh-copy";
			add_location(ul, file, 19, 20, 1536);
		},

		m: function mount(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li);
			mount_component(sidebarlinkwithtoc, li, null);
			append(ul, t);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);

			if (changed.camelCaseToDash || changed.Validators) {
				each_value_3 = AllValidators;

				for (var i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			for (var i = 0; i < each_value_3.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);

			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(ul);
			}

			sidebarlinkwithtoc.$destroy();

			destroy_each(each_blocks, detaching);
		}
	};
}

// (21:28) <SidebarLinkWithToc url="/guide/validators" title="Overview" content={() => content}>
function create_default_slot_9(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Overview");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Overview");
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

// (23:28) <SidebarLinkWithToc url="/guide/validators/{camelCaseToDash(v.name)}" title="{v.description}" content={() => content} isActive={(p, url) => p.startsWith(url)}>
function create_default_slot_8(ctx) {
	var t_value = ctx.v.name, t;

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

// (22:24) {#each Validators as v}
function create_each_block_3(ctx) {
	var li, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/validators/" + camelCaseToDash(ctx.v.name),
		title: ctx.v.description,
		content: ctx.func_6,
		isActive: func_7,
		$$slots: { default: [create_default_slot_8] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			li = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			sidebarlinkwithtoc.$$.fragment.l(li_nodes);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 22, 24, 1793);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			mount_component(sidebarlinkwithtoc, li, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.camelCaseToDash || changed.Validators) sidebarlinkwithtoc_changes.url = "/guide/validators/" + camelCaseToDash(ctx.v.name);
			if (changed.Validators) sidebarlinkwithtoc_changes.title = ctx.v.description;
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}

			sidebarlinkwithtoc.$destroy();
		}
	};
}

// (30:20) {#if path.startsWith('/guide/plugins')}
function create_if_block_2(ctx) {
	var ul, li, t, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/plugins",
		title: "Overview",
		content: ctx.func_8,
		$$slots: { default: [create_default_slot_7] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var each_value_2 = Plugins;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
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
			ul = element("ul");
			li = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			t = space();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li = claim_element(ul_nodes, "LI", {}, false);
			var li_nodes = children(li);

			sidebarlinkwithtoc.$$.fragment.l(li_nodes);
			li_nodes.forEach(detach);
			t = claim_text(ul_nodes, "\n                        ");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 31, 24, 2376);
			ul.className = "list pa0 ma0 f5 lh-copy";
			add_location(ul, file, 30, 20, 2315);
		},

		m: function mount(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li);
			mount_component(sidebarlinkwithtoc, li, null);
			append(ul, t);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);

			if (changed.camelCaseToDash || changed.Plugins) {
				each_value_2 = Plugins;

				for (var i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			for (var i = 0; i < each_value_2.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);

			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(ul);
			}

			sidebarlinkwithtoc.$destroy();

			destroy_each(each_blocks, detaching);
		}
	};
}

// (32:28) <SidebarLinkWithToc url="/guide/plugins" title="Overview" content={() => content}>
function create_default_slot_7(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Overview");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Overview");
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

// (34:28) <SidebarLinkWithToc url="/guide/plugins/{camelCaseToDash(p.name)}" title="{p.desc.replace(/<\/?[^>]+(>|$)/g, "")}" content={() => content}>
function create_default_slot_6(ctx) {
	var t_value = ctx.p.name, t;

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

// (33:24) {#each Plugins as p}
function create_each_block_2(ctx) {
	var li, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/plugins/" + camelCaseToDash(ctx.p.name),
		title: ctx.p.desc.replace(/<\/?[^>]+(>|$)/g, ""),
		content: ctx.func_9,
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			li = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			sidebarlinkwithtoc.$$.fragment.l(li_nodes);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 33, 24, 2566);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			mount_component(sidebarlinkwithtoc, li, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.camelCaseToDash || changed.Plugins) sidebarlinkwithtoc_changes.url = "/guide/plugins/" + camelCaseToDash(ctx.p.name);
			if (changed.Plugins) sidebarlinkwithtoc_changes.title = ctx.p.desc.replace(/<\/?[^>]+(>|$)/g, "");
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}

			sidebarlinkwithtoc.$destroy();
		}
	};
}

// (41:20) {#if path.startsWith('/guide/api')}
function create_if_block_1(ctx) {
	var ul, li0, li1, t, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/api",
		title: "Overview",
		content: ctx.func_10,
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var each_value_1 = ctx.APIs;

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
			ul = element("ul");
			li0 = element("li");
			li1 = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			t = space();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			li0_nodes.forEach(detach);

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			sidebarlinkwithtoc.$$.fragment.l(li1_nodes);
			li1_nodes.forEach(detach);
			t = claim_text(ul_nodes, "\n                        ");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li0, file, 42, 24, 3085);
			add_location(li1, file, 42, 28, 3089);
			ul.className = "list pa0 ma0 f5 lh-copy";
			add_location(ul, file, 41, 20, 3024);
		},

		m: function mount(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li0);
			append(ul, li1);
			mount_component(sidebarlinkwithtoc, li1, null);
			append(ul, t);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);

			if (changed.camelCaseToDash || changed.APIs) {
				each_value_1 = ctx.APIs;

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			for (var i = 0; i < each_value_1.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);

			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(ul);
			}

			sidebarlinkwithtoc.$destroy();

			destroy_each(each_blocks, detaching);
		}
	};
}

// (43:32) <SidebarLinkWithToc url="/guide/api" title="Overview" content={() => content}>
function create_default_slot_5(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Overview");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Overview");
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

// (45:28) <SidebarLinkWithToc url="/guide/api/{camelCaseToDash(name)}" title="{name}() method" content={() => content}>
function create_default_slot_4(ctx) {
	var t_value = ctx.name, t;

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

// (44:24) {#each APIs as name}
function create_each_block_1(ctx) {
	var li, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/api/" + camelCaseToDash(ctx.name),
		title: "" + ctx.name + "() method",
		content: ctx.func_11,
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			li = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			sidebarlinkwithtoc.$$.fragment.l(li_nodes);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 44, 24, 3275);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			mount_component(sidebarlinkwithtoc, li, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.camelCaseToDash || changed.APIs) sidebarlinkwithtoc_changes.url = "/guide/api/" + camelCaseToDash(ctx.name);
			if (changed.APIs) sidebarlinkwithtoc_changes.title = "" + ctx.name + "() method";
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}

			sidebarlinkwithtoc.$destroy();
		}
	};
}

// (52:20) {#if path.startsWith('/guide/events')}
function create_if_block(ctx) {
	var ul, li, t, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/events",
		title: "Overview",
		content: ctx.func_12,
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var each_value = ctx.Events;

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
			ul = element("ul");
			li = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			t = space();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li = claim_element(ul_nodes, "LI", {}, false);
			var li_nodes = children(li);

			sidebarlinkwithtoc.$$.fragment.l(li_nodes);
			li_nodes.forEach(detach);
			t = claim_text(ul_nodes, "\n                        ");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 53, 24, 3771);
			ul.className = "list pa0 ma0 f5 lh-copy";
			add_location(ul, file, 52, 20, 3710);
		},

		m: function mount(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li);
			mount_component(sidebarlinkwithtoc, li, null);
			append(ul, t);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);

			if (changed.Events) {
				each_value = ctx.Events;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						each_blocks[i].i(1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].i(1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();
				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);

			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(ul);
			}

			sidebarlinkwithtoc.$destroy();

			destroy_each(each_blocks, detaching);
		}
	};
}

// (54:28) <SidebarLinkWithToc url="/guide/events" title="Overview" content={() => content}>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Overview");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Overview");
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

// (56:28) <SidebarLinkWithToc url="/guide/events/{name}" title="{name}" content={() => content}>
function create_default_slot_2(ctx) {
	var t_value = ctx.name, t;

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

// (55:24) {#each Events as name}
function create_each_block(ctx) {
	var li, current;

	var sidebarlinkwithtoc = new SidebarLinkWithToc({
		props: {
		url: "/guide/events/" + ctx.name,
		title: ctx.name,
		content: ctx.func_13,
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			li = element("li");
			sidebarlinkwithtoc.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			sidebarlinkwithtoc.$$.fragment.l(li_nodes);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 55, 24, 3962);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			mount_component(sidebarlinkwithtoc, li, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var sidebarlinkwithtoc_changes = {};
			if (changed.Events) sidebarlinkwithtoc_changes.url = "/guide/events/" + ctx.name;
			if (changed.Events) sidebarlinkwithtoc_changes.title = ctx.name;
			if (changed.$$scope) sidebarlinkwithtoc_changes.$$scope = { changed, ctx };
			sidebarlinkwithtoc.$set(sidebarlinkwithtoc_changes);
		},

		i: function intro(local) {
			if (current) return;
			sidebarlinkwithtoc.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			sidebarlinkwithtoc.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}

			sidebarlinkwithtoc.$destroy();
		}
	};
}

// (61:20) <SidebarLink url="/guide/examples" title="Examples" customClasses="mv2 pl3 fw6" isActive={(p, url) => p.startsWith(url)}>
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Examples");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Examples");
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

// (1:0) <Layout>
function create_default_slot(ctx) {
	var div2, div0, ul, li0, a0, t0, t1, t2, li1, a1, t3, t4_value = Object.keys(AllValidators).length, t4, t5, t6, t7, li2, a2, t8, t9_value = Object.keys(Plugins).length, t9, t10, t11, t12, li3, a3, t13, t14, t15, li4, a4, t16, t17, t18, li5, t19, div1, current;

	var if_block0 = (ctx.path.startsWith('/guide/getting-started')) && create_if_block_4(ctx);

	var if_block1 = (ctx.path.startsWith('/guide/validators')) && create_if_block_3(ctx);

	var if_block2 = (ctx.path.startsWith('/guide/plugins')) && create_if_block_2(ctx);

	var if_block3 = (ctx.path.startsWith('/guide/api')) && create_if_block_1(ctx);

	var if_block4 = (ctx.path.startsWith('/guide/events')) && create_if_block(ctx);

	var sidebarlink = new SidebarLink({
		props: {
		url: "/guide/examples",
		title: "Examples",
		customClasses: "mv2 pl3 fw6",
		isActive: func_14,
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t0 = text("Getting Started");
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			li1 = element("li");
			a1 = element("a");
			t3 = text("Validators (");
			t4 = text(t4_value);
			t5 = text(")");
			t6 = space();
			if (if_block1) if_block1.c();
			t7 = space();
			li2 = element("li");
			a2 = element("a");
			t8 = text("Plugins (");
			t9 = text(t9_value);
			t10 = text(")");
			t11 = space();
			if (if_block2) if_block2.c();
			t12 = space();
			li3 = element("li");
			a3 = element("a");
			t13 = text("API");
			t14 = space();
			if (if_block3) if_block3.c();
			t15 = space();
			li4 = element("li");
			a4 = element("a");
			t16 = text("Events");
			t17 = space();
			if (if_block4) if_block4.c();
			t18 = space();
			li5 = element("li");
			sidebarlink.$$.fragment.c();
			t19 = space();
			div1 = element("div");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			ul = claim_element(div0_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t0 = claim_text(a0_nodes, "Getting Started");
			a0_nodes.forEach(detach);
			t1 = claim_text(li0_nodes, "\n                    ");
			if (if_block0) if_block0.l(li0_nodes);
			li0_nodes.forEach(detach);
			t2 = claim_text(ul_nodes, "\n                ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t3 = claim_text(a1_nodes, "Validators (");
			t4 = claim_text(a1_nodes, t4_value);
			t5 = claim_text(a1_nodes, ")");
			a1_nodes.forEach(detach);
			t6 = claim_text(li1_nodes, "\n                    ");
			if (if_block1) if_block1.l(li1_nodes);
			li1_nodes.forEach(detach);
			t7 = claim_text(ul_nodes, "\n                ");

			li2 = claim_element(ul_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			a2 = claim_element(li2_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t8 = claim_text(a2_nodes, "Plugins (");
			t9 = claim_text(a2_nodes, t9_value);
			t10 = claim_text(a2_nodes, ")");
			a2_nodes.forEach(detach);
			t11 = claim_text(li2_nodes, "\n                    ");
			if (if_block2) if_block2.l(li2_nodes);
			li2_nodes.forEach(detach);
			t12 = claim_text(ul_nodes, "\n                ");

			li3 = claim_element(ul_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			a3 = claim_element(li3_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t13 = claim_text(a3_nodes, "API");
			a3_nodes.forEach(detach);
			t14 = claim_text(li3_nodes, "\n                    ");
			if (if_block3) if_block3.l(li3_nodes);
			li3_nodes.forEach(detach);
			t15 = claim_text(ul_nodes, "\n                ");

			li4 = claim_element(ul_nodes, "LI", {}, false);
			var li4_nodes = children(li4);

			a4 = claim_element(li4_nodes, "A", { href: true, class: true }, false);
			var a4_nodes = children(a4);

			t16 = claim_text(a4_nodes, "Events");
			a4_nodes.forEach(detach);
			t17 = claim_text(li4_nodes, "\n                    ");
			if (if_block4) if_block4.l(li4_nodes);
			li4_nodes.forEach(detach);
			t18 = claim_text(ul_nodes, "\n                ");

			li5 = claim_element(ul_nodes, "LI", {}, false);
			var li5_nodes = children(li5);

			sidebarlink.$$.fragment.l(li5_nodes);
			li5_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t19 = claim_text(div2_nodes, "\n\n        ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			a0.href = "/guide/getting-started";
			a0.className = "mv2 pl3 fw6 db link";
			add_location(a0, file, 5, 20, 174);
			add_location(li0, file, 4, 16, 149);
			a1.href = "/guide/validators";
			a1.className = "mv2 pl3 fw6 db link";
			add_location(a1, file, 17, 20, 1347);
			add_location(li1, file, 16, 16, 1322);
			a2.href = "/guide/plugins";
			a2.className = "mv2 pl3 fw6 db link";
			add_location(a2, file, 28, 20, 2138);
			add_location(li2, file, 27, 16, 2113);
			a3.href = "/guide/api";
			a3.className = "mv2 pl3 fw6 db link";
			add_location(a3, file, 39, 20, 2891);
			add_location(li3, file, 38, 16, 2866);
			a4.href = "/guide/events";
			a4.className = "mv2 pl3 fw6 db link";
			add_location(a4, file, 50, 20, 3568);
			add_location(li4, file, 49, 16, 3543);
			add_location(li5, file, 60, 16, 4207);
			ul.className = "list pa0 ma0 f3 lh-copy";
			add_location(ul, file, 3, 12, 96);
			div0.className = "w-25 pv3 br b--black-30";
			add_location(div0, file, 2, 8, 46);

			div1.className = "w-75 pv3 ph4";
			add_location(div1, file, 64, 8, 4402);
			div2.className = "flex h-100";
			add_location(div2, file, 1, 4, 13);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, ul);
			append(ul, li0);
			append(li0, a0);
			append(a0, t0);
			append(li0, t1);
			if (if_block0) if_block0.m(li0, null);
			append(ul, t2);
			append(ul, li1);
			append(li1, a1);
			append(a1, t3);
			append(a1, t4);
			append(a1, t5);
			append(li1, t6);
			if (if_block1) if_block1.m(li1, null);
			append(ul, t7);
			append(ul, li2);
			append(li2, a2);
			append(a2, t8);
			append(a2, t9);
			append(a2, t10);
			append(li2, t11);
			if (if_block2) if_block2.m(li2, null);
			append(ul, t12);
			append(ul, li3);
			append(li3, a3);
			append(a3, t13);
			append(li3, t14);
			if (if_block3) if_block3.m(li3, null);
			append(ul, t15);
			append(ul, li4);
			append(li4, a4);
			append(a4, t16);
			append(li4, t17);
			if (if_block4) if_block4.m(li4, null);
			append(ul, t18);
			append(ul, li5);
			mount_component(sidebarlink, li5, null);
			append(div2, t19);
			append(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			add_binding_callback(() => ctx.div1_binding(div1, null));
			current = true;
		},

		p: function update(changed, ctx) {
			if (ctx.path.startsWith('/guide/getting-started')) {
				if (!if_block0) {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					if_block0.i(1);
					if_block0.m(li0, null);
				} else {
									if_block0.i(1);
				}
			} else if (if_block0) {
				group_outros();
				on_outro(() => {
					if_block0.d(1);
					if_block0 = null;
				});

				if_block0.o(1);
				check_outros();
			}

			if (ctx.path.startsWith('/guide/validators')) {
				if (if_block1) {
					if_block1.p(changed, ctx);
					if_block1.i(1);
				} else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					if_block1.i(1);
					if_block1.m(li1, null);
				}
			} else if (if_block1) {
				group_outros();
				on_outro(() => {
					if_block1.d(1);
					if_block1 = null;
				});

				if_block1.o(1);
				check_outros();
			}

			if (ctx.path.startsWith('/guide/plugins')) {
				if (if_block2) {
					if_block2.p(changed, ctx);
					if_block2.i(1);
				} else {
					if_block2 = create_if_block_2(ctx);
					if_block2.c();
					if_block2.i(1);
					if_block2.m(li2, null);
				}
			} else if (if_block2) {
				group_outros();
				on_outro(() => {
					if_block2.d(1);
					if_block2 = null;
				});

				if_block2.o(1);
				check_outros();
			}

			if (ctx.path.startsWith('/guide/api')) {
				if (if_block3) {
					if_block3.p(changed, ctx);
					if_block3.i(1);
				} else {
					if_block3 = create_if_block_1(ctx);
					if_block3.c();
					if_block3.i(1);
					if_block3.m(li3, null);
				}
			} else if (if_block3) {
				group_outros();
				on_outro(() => {
					if_block3.d(1);
					if_block3 = null;
				});

				if_block3.o(1);
				check_outros();
			}

			if (ctx.path.startsWith('/guide/events')) {
				if (if_block4) {
					if_block4.p(changed, ctx);
					if_block4.i(1);
				} else {
					if_block4 = create_if_block(ctx);
					if_block4.c();
					if_block4.i(1);
					if_block4.m(li4, null);
				}
			} else if (if_block4) {
				group_outros();
				on_outro(() => {
					if_block4.d(1);
					if_block4 = null;
				});

				if_block4.o(1);
				check_outros();
			}

			var sidebarlink_changes = {};
			if (changed.$$scope) sidebarlink_changes.$$scope = { changed, ctx };
			sidebarlink.$set(sidebarlink_changes);

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (changed.items) {
				ctx.div1_binding(null, div1);
				ctx.div1_binding(div1, null);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block0) if_block0.i();
			if (if_block1) if_block1.i();
			if (if_block2) if_block2.i();
			if (if_block3) if_block3.i();
			if (if_block4) if_block4.i();

			sidebarlink.$$.fragment.i(local);

			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (if_block0) if_block0.o();
			if (if_block1) if_block1.o();
			if (if_block2) if_block2.o();
			if (if_block3) if_block3.o();
			if (if_block4) if_block4.o();
			sidebarlink.$$.fragment.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div2);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();

			sidebarlink.$destroy();

			if (default_slot) default_slot.d(detaching);
			ctx.div1_binding(null, div1);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var layout = new Layout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var layout_changes = {};
			if (changed.$$scope || changed.content || changed.path) layout_changes.$$scope = { changed, ctx };
			layout.$set(layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			layout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			layout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			layout.$destroy(detaching);
		}
	};
}

function func_7(p, url) {
	return p.startsWith(url);
}

function func_14(p, url) {
	return p.startsWith(url);
}

function instance($$self, $$props, $$invalidate) {
	

// Private
let path = '';
let content;
let APIs = [
    'addField',
    'deregisterFilter',
    'deregisterPlugin',
    'destroy',
    'disableValidator',
    'enableValidator',
    'getElements',
    'getElementValue',
    'getFields',
    'getFormElement',
    'getPlugin',
    'off',
    'on',
    'registerFilter',
    'registerPlugin',
    'registerValidator',
    'removeField',
    'resetField',
    'resetForm',
    'revalidateField',
    'setLocale',
    'updateElementStatus',
    'updateFieldStatus',
    'updateValidatorOption',
    'validate',
    'validateElement',
    'validateField',
];
let Events = [
    'core.element.notvalidated',
    'core.element.validated',
    'core.element.validating',
    'core.field.added',
    'core.field.invalid',
    'core.field.removed',
    'core.field.reset',
    'core.field.valid',
    'core.field.validating',
    'core.form.invalid',
    'core.form.notvalidated',
    'core.form.reset',
    'core.form.valid',
    'core.form.validating',
    'core.validator.notvalidated',
    'core.validator.validated',
    'core.validator.validating',
];

onMount(() => {
    $$invalidate('path', path = window.location.pathname);
});

	let { $$slots = {}, $$scope } = $$props;

	function func() {
		return content;
	}

	function func_1() {
		return content;
	}

	function func_2() {
		return content;
	}

	function func_3() {
		return content;
	}

	function func_4() {
		return content;
	}

	function func_5() {
		return content;
	}

	function func_6() {
		return content;
	}

	function func_8() {
		return content;
	}

	function func_9() {
		return content;
	}

	function func_10() {
		return content;
	}

	function func_11() {
		return content;
	}

	function func_12() {
		return content;
	}

	function func_13() {
		return content;
	}

	function div1_binding($$node, check) {
		content = $$node;
		$$invalidate('content', content);
	}

	$$self.$set = $$props => {
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return {
		path,
		content,
		APIs,
		Events,
		func,
		func_1,
		func_2,
		func_3,
		func_4,
		func_5,
		func_6,
		func_8,
		func_9,
		func_10,
		func_11,
		func_12,
		func_13,
		div1_binding,
		$$slots,
		$$scope
	};
}

class GuideLayout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export { GuideLayout as a, AllValidators as b, camelCaseToDash as c, Plugins as d };

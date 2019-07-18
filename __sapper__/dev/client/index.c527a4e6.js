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

/* src/routes/guide/examples/integrating-with-bootbox/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/integrating-with-bootbox/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, p0, t2, a0, t3, t4, t5, p1, t6, t7, t8, p2, t9, a1, t10, t11, t12, t13, p3, t14, span, t15, t16, t17, t18, p4, t19, a2, t20, t21, code, t22, t23, t24, current;

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<button type="submit" class="btn btn-default" id="loginButton">Login</button>

<form id="loginForm" method="POST" class="form-horizontal" style="display: none;">
    ...
</form>
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
const loginForm = document.getElementById('loginForm');

const fv = FormValidation.formValidation(loginForm, {
    fields: {
        ...
    },
    plugins: {
        ...
    },
});

document.getElementById('loginButton').addEventListener('click', function() {
    bootbox
        .dialog({
            title: 'Login',
            message: loginForm,
            size: 'small',
            show: false // We will show it manually later
        })
        .on('shown.bs.modal', function() {
            // Show the login form
            loginForm.style.display = 'block';
            
            // Reset form
            fv.resetForm(true);
        })
        .on('hide.bs.modal', function() {
            // Bootbox will remove the modal (including the body 
            // which contains the login form) after hiding the modal
            // Therefor, we need to backup the form

            loginForm.style.display = 'none';
            document.body.appendChild(loginForm);
        })
        .modal('show');
});
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/integrating-with-bootbox",
		frameworks: ['bootstrap3']
	},
		$$inline: true
	});

	var samplecode2 = new SampleCode({
		props: { lang: "javascript", code: `
const fv = FormValidation
    .formValidation(loginForm, {
        fields: {
            ...
        },
        plugins: {
            ...
        },
    })
    .on('core.form.valid', function() {
        // Send the form data to back-end
        // You need to grab the form data and create an Ajax request to send them
        
        // Since the Bootbox and Bootstrap require jQuery
        // we can use jQuery methods for getting the form data
        // and creating Ajax request
        
        $.post($(loginForm).attr('action'), $(loginForm).serialize(), function(result) {
            // ... Process the result ...

            // Hide the modal containing the form
            $(loginForm).parents('.bootbox').modal('hide');
        }, 'json');
    });
` },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Integrating with Bootbox");
			t1 = space();
			p0 = element("p");
			t2 = text("In this example, we will use ");
			a0 = element("a");
			t3 = text("bootbox.js");
			t4 = text(" to display and validate a login form inside a modal.");
			t5 = space();
			p1 = element("p");
			t6 = text("Initially, the login form isn't displayed:");
			t7 = space();
			samplecode0.$$.fragment.c();
			t8 = space();
			p2 = element("p");
			t9 = text("When click the login button, we will show up the modal. We might need to reset the previous form values using the ");
			a1 = element("a");
			t10 = text("resetForm");
			t11 = text(" method.");
			t12 = space();
			samplecode1.$$.fragment.c();
			t13 = space();
			p3 = element("p");
			t14 = text("You can take a look at the ");
			span = element("span");
			t15 = text("Code");
			t16 = text(" tab to see the full code:");
			t17 = space();
			demo.$$.fragment.c();
			t18 = space();
			p4 = element("p");
			t19 = text("If you want to use Ajax to ");
			a2 = element("a");
			t20 = text("submit");
			t21 = text(" the form, we can trigger the ");
			code = element("code");
			t22 = text("core.form.valid");
			t23 = text(" event:");
			t24 = space();
			samplecode2.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Integrating with Bootbox");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n    ");

			p0 = claim_element(nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In this example, we will use ");

			a0 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "bootbox.js");
			a0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " to display and validate a login form inside a modal.");
			p0_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n    ");

			p1 = claim_element(nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t6 = claim_text(p1_nodes, "Initially, the login form isn't displayed:");
			p1_nodes.forEach(detach);
			t7 = claim_text(nodes, "\n");
			samplecode0.$$.fragment.l(nodes);
			t8 = claim_text(nodes, "\n    ");

			p2 = claim_element(nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t9 = claim_text(p2_nodes, "When click the login button, we will show up the modal. We might need to reset the previous form values using the ");

			a1 = claim_element(p2_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t10 = claim_text(a1_nodes, "resetForm");
			a1_nodes.forEach(detach);
			t11 = claim_text(p2_nodes, " method.");
			p2_nodes.forEach(detach);
			t12 = claim_text(nodes, "\n");
			samplecode1.$$.fragment.l(nodes);
			t13 = claim_text(nodes, "\n    ");

			p3 = claim_element(nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t14 = claim_text(p3_nodes, "You can take a look at the ");

			span = claim_element(p3_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t15 = claim_text(span_nodes, "Code");
			span_nodes.forEach(detach);
			t16 = claim_text(p3_nodes, " tab to see the full code:");
			p3_nodes.forEach(detach);
			t17 = claim_text(nodes, "\n    ");
			demo.$$.fragment.l(nodes);
			t18 = claim_text(nodes, "\n    ");

			p4 = claim_element(nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t19 = claim_text(p4_nodes, "If you want to use Ajax to ");

			a2 = claim_element(p4_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t20 = claim_text(a2_nodes, "submit");
			a2_nodes.forEach(detach);
			t21 = claim_text(p4_nodes, " the form, we can trigger the ");

			code = claim_element(p4_nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t22 = claim_text(code_nodes, "core.form.valid");
			code_nodes.forEach(detach);
			t23 = claim_text(p4_nodes, " event:");
			p4_nodes.forEach(detach);
			t24 = claim_text(nodes, "\n");
			samplecode2.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 106);
			a0.href = "http://bootboxjs.com";
			a0.className = "blue dim link";
			add_location(a0, file, 7, 52, 212);
			p0.className = "lh-copy";
			add_location(p0, file, 7, 4, 164);
			p1.className = "lh-copy";
			add_location(p1, file, 8, 4, 341);
			a1.href = "/guide/api/reset-form";
			a1.className = "blue dim link";
			add_location(a1, file, 16, 137, 760);
			p2.className = "lh-copy";
			add_location(p2, file, 16, 4, 627);
			span.className = "i";
			add_location(span, file, 55, 50, 1953);
			p3.className = "lh-copy";
			add_location(p3, file, 55, 4, 1907);
			a2.href = "/guide/examples/using-ajax-to-submit-the-form";
			a2.className = "blue dim link";
			add_location(a2, file, 57, 50, 2152);
			add_location(code, file, 57, 168, 2270);
			p4.className = "lh-copy";
			add_location(p4, file, 57, 4, 2106);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, p0, anchor);
			append(p0, t2);
			append(p0, a0);
			append(a0, t3);
			append(p0, t4);
			insert(target, t5, anchor);
			insert(target, p1, anchor);
			append(p1, t6);
			insert(target, t7, anchor);
			mount_component(samplecode0, target, anchor);
			insert(target, t8, anchor);
			insert(target, p2, anchor);
			append(p2, t9);
			append(p2, a1);
			append(a1, t10);
			append(p2, t11);
			insert(target, t12, anchor);
			mount_component(samplecode1, target, anchor);
			insert(target, t13, anchor);
			insert(target, p3, anchor);
			append(p3, t14);
			append(p3, span);
			append(span, t15);
			append(p3, t16);
			insert(target, t17, anchor);
			mount_component(demo, target, anchor);
			insert(target, t18, anchor);
			insert(target, p4, anchor);
			append(p4, t19);
			append(p4, a2);
			append(a2, t20);
			append(p4, t21);
			append(p4, code);
			append(code, t22);
			append(p4, t23);
			insert(target, t24, anchor);
			mount_component(samplecode2, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			samplecode2.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			samplecode2.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(p0);
				detach(t5);
				detach(p1);
				detach(t7);
			}

			samplecode0.$destroy(detaching);

			if (detaching) {
				detach(t8);
				detach(p2);
				detach(t12);
			}

			samplecode1.$destroy(detaching);

			if (detaching) {
				detach(t13);
				detach(p3);
				detach(t17);
			}

			demo.$destroy(detaching);

			if (detaching) {
				detach(t18);
				detach(p4);
				detach(t24);
			}

			samplecode2.$destroy(detaching);
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
			document.title = "FormValidation • Integrating with Bootbox";
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
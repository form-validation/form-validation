<svelte:head>
	<title>FormValidation • Integrating with Bootbox</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with Bootbox</h1>

    <p class="lh-copy">In this example, we will use <a href="http://bootboxjs.com" class="blue dim link">bootbox.js</a> to display and validate a login form inside a modal.</p>
    <p class="lh-copy">Initially, the login form isn't displayed:</p>
<SampleCode lang="html" code={`
<button type="submit" class="btn btn-default" id="loginButton">Login</button>

<form id="loginForm" method="POST" class="form-horizontal" style="display: none;">
    ...
</form>
`} />
    <p class="lh-copy">When click the login button, we will show up the modal. We might need to reset the previous form values using the <a href="/guide/api/reset-form" class="blue dim link">resetForm</a> method.</p>
<SampleCode lang="javascript" code={`
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
`} />
    <p class="lh-copy">You can take a look at the <span class="i">Code</span> tab to see the full code:</p>
    <Demo prefix="/guide/examples/integrating-with-bootbox" frameworks={['Bootstrap3']} />
    <p class="lh-copy">If you want to use Ajax to <a href="/guide/examples/using-ajax-to-submit-the-form" class="blue dim link">submit</a> the form, we can trigger the <code>core.form.valid</code> event:</p>
<SampleCode lang="javascript" code={`
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
`} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
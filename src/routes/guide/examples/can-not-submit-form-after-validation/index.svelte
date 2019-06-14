<svelte:head>
	<title>FormValidation • Can not submit form after validation</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Can not submit form after validation</h1>

    <p class="lh-copy">There are some mistakes causing the issue that the form can't be submitted although the validation is working fine.</p>
    <p class="lh-copy">This page collects some popular check list to avoid this problem.</p>
    
    <section class="mv5">
        <Heading>Enabling the DefaultSubmit plugin</Heading>

        <p class="lh-copy">Before v1.0.0, the form will be submitted automatically if all fields are valid. There are some cases user wants to do something else such as</p>
        <ul class="ma0 pl3 lh-copy">
            <li>sending form to back-end via an <a href="/guide/examples/using-ajax-to-submit-the-form" class="blue dim link">Ajax request</a></li>
            <li>jumping to the next step in a <a href="/guide/examples/multiple-steps-wizard" class="blue dim link">wizard</a></li>
        </ul>
        <p class="lh-copy">So, the default behaviour is removed from v1.0.0. It's up to users to decide what they want to do. If you want to submit the form when all fields are valid, then enable the 
            <a href="/guide/plugins/default-submit" class="blue dim link">DefaultSubmit</a> plugin:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            ...
        },
        plugins: {
            // Validate fields when clicking the Submit button
            submitButton: new FormValidation.plugins.SubmitButton(),

            // Submit the form when all fields are valid
            defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
            ...
        },
    }
);
`} />
    </section>

    <section class="mv5">
        <Heading>The target is not a form</Heading>
        <p class="lh-copy">Please ensure that the target is a HTML form element:</p>
<SampleCode lang="html" code={`
<!-- It will be submitted because it is NOT a form tag -->
<div id="container" method="POST">
    ...
</div>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('container'),
        {
            fields: {
                ...
            },
            plugins: {
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                ...
            },
        }
    );
});
</script-tag>
`} />
    </section>

    <section class="mv5">
        <Heading>The target's ID is duplicated</Heading>
        <p class="lh-copy">In the case you are using an ID selector, ensure that there is only one element on page having that ID:</p>
<SampleCode lang="html" code={`
<div id="payment"></div>

<form id="payment"></form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('payment'),
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    );
});
</script-tag>
`} />       
    </section>

    <section class="mv5">
        <Heading>The submit button's name is not valid</Heading>
        <p class="lh-copy">If the form can't be submitted, the reason might be caused by using <code>name="submit"</code> or <code>id="submit"</code> attribute for the submit button.</p>
        <p class="lh-copy">Behind the scene, FormValidation uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit" class="blue dim link">submit()</a> method to submit the form.
            If the submit button has either <code>name="submit"</code> or <code>id="submit"</code> attribute, then <code>form.submit</code> will
            return the submit button instance instead of submitting the form.</p>
        <p class="lh-copy">That's why we can't submit the form. The similar issue occurs when using special properties of form such as <code>reset</code>, <code>length</code>, <code>method</code>.</p>
<SampleCode lang="html" code={`
<!-- Do NOT -->
<button type="submit" name="submit">Submit</button>
<button type="submit" id="submit">Submit</button>

<!-- Do -->
<button type="submit" name="submitButton">Submit</button>
`} />
        <p class="lh-copy"><a href="http://kangax.github.com/domlint" class="blue dim link">DOMLint</a> has a complete list of rules to check the markup for these kind of problems.</p>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

<svelte:head>
	<title>FormValidation • Validating form manually</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Validating form manually</h1>
    
    <section class="mv5">
        <p class="lh-copy">In most cases, the form can be validated automatically when user click its Submit button via the <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton</a> plugin.</p>
        <p class="lh-copy">FormValidation also allows us to validate the form manually by using the <a href="/guide/api/validate" class="blue dim link">validate()</a> method. The following piece of code demonstrates how to validate a form when user click on a normal button:</p>
<SampleCode lang="html" code={`
<form>
    <!-- It is a normal button -->
    <button id="loginButton" type="button">Login</a>
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // Create a FormValidation instance
    const fv = FormValidation.formValidation(demoForm, {
        fields: { ... },
        plugins: { ... },
    });

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        fv.validate().then(function(status) {
            // status can be one of the following value
            // 'NotValidated': The form is not yet validated
            // 'Valid': The form is valid
            // 'Invalid': The form is invalid
            ...
        });
    });
});
</script-tag>
`} />  
        <p class="lh-copy">We are able to improve the user experience by letting user know that the form is going to be validated. It's useful if the validation takes time (let's say that you are using the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator).</p>
        <p class="lh-copy">For example, by triggering the <a href="/guide/events/core.form.validating" class="blue dim link">core.form.validating</a> event, we can show a progress bar or simply update the button content such as:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
const loginButton = document.getElementById('loginButton');

// Create a FormValidation instance
const fv = FormValidation.formValidation(demoForm, {
    fields: { ... },
    plugins: { ... },
}).on('core.form.validating', function() {
    loginButton.innerHTML = 'Validating ...';
});

loginButton.addEventListener('click', function() {
    fv.validate().then(function(status) {
        // Update the login button content based on the validation status
        loginButton.innerHTML = (status === 'Valid') 
            ? 'Form is validated. Logging in ...'
            : 'Please try again';
    });
});
`} />
        </div>
        <Demo prefix="/guide/examples/validating-form-manually" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Multiple steps wizard',
        'Using Ajax to submit the form',
        'Validating form manually',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

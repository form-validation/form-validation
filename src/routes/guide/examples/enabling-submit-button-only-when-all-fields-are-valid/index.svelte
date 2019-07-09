<svelte:head>
	<title>FormValidation • Enabling submit button only when all fields are valid</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Enabling submit button only when all fields are valid</h1>
    
    <section class="mv5">
        <p class="lh-copy">The following example will disable the <a href="/guide/plugins/submit-button" class="blue dim link">Submit button</a> as long as there is at least one invalid field. In case all of fields are valid, the button will be enabled.</p>
        <p class="lh-copy">We can archive it by using the <code>onStatusChanged</code> option provided by the <a href="/guide/plugins/field-status" class="blue dim link">FieldStatus plugin</a>.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
document.addEventListener('DOMContentLoaded', function(e) {
    const demoForm = document.getElementById('demoForm'); 

    // Get the submit button element
    const submitButton = demoForm.querySelector('[type="submit"]');

    FormValidation.formValidation(
        demoForm,
        {
            fields: {
                ...
            },
            plugins: {
                fieldStatus: new FormValidation.plugins.FieldStatus({
                    onStatusChanged: function(areFieldsValid) {
                        areFieldsValid
                            // Enable the submit button
                            // so user has a chance to submit the form again
                            ? submitButton.removeAttribute('disabled')
                            // Disable the submit button
                            : submitButton.setAttribute('disabled', 'disabled'); 
                    }
                }),
                ...
            },
        }
    );
});
`} />
        </div>
        <Demo prefix="/guide/examples/enabling-submit-button-only-when-all-fields-are-valid" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Enabling submit button only when all fields are valid',
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

<svelte:head>
	<title>FormValidation • Updating validator options</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Updating validator options</h1>
    
    <section class="mv5">
        <p class="lh-copy">When setting validator options for fields, the usual way is</p>

<SampleCode lang="javascript" code={`
FormValidation.formValidation(yourForm, {
    fields: {
        fieldName: {
            validators: {
                validatorName: {
                    // The error message
                    message: '...',

                    // Other validator options
                    // ...
                }
            }
        }
    }
});
`} />

        <p class="lh-copy">The following example demonstrates the ability of updating message and validator options on the fly. It is simple job application form which asks user to upload the correct file based on the selected job position.
        <p class="lh-copy">The validator options can be updated via the <a href="/guide/api/update-validator-option" class="blue dim link">updateValidatorOption()</a> method.</p>

        <Demo prefix="/guide/examples/updating-validator-options" frameworks={['tachyons']} />
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

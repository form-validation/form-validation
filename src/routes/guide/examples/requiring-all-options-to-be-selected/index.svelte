<svelte:head>
	<title>FormValidation • Requiring all options to be selected</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Requiring all options to be selected</h1>
    
    <section class="mv5">
        <p class="lh-copy">This example uses the <a href="/guide/validators/choice" class="blue dim link">choice</a> validator to ask user to accept all the terms and conditions in order to continue.</p>
        <div class="mb4">
<SampleCode lang="html" code={`
<form id="demoForm" method="POST">
    <input class="mr2" type="checkbox" name="agreements[]" value="terms" /> I have read and agree to the Terms
    <input class="mr2" type="checkbox" name="agreements[]" value="privacy-policy" />  I accept the Privacy Policy
    ...
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(document.getElementById('demoForm'), {
        fields: {
            'agreements[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 2,
                        message: 'Please check all agreements to continue'
                    }
                }
            },
        },
        plugins: {
            ...
        },
    });
});    
</script-tag>
`} />
        </div>

        <Demo prefix="/guide/examples/requiring-all-options-to-be-selected" frameworks={['tachyons']} />        
    </section>

    <RelatedValidators validators={['choice']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

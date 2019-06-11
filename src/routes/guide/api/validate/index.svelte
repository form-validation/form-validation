<svelte:head>
	<title>FormValidation • validate() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">validate()</h1>
    <h2 class="f4 fw4 tc">Validate all fields</h2>

    <section class="mv5">
        <p class="lh-copy">It might be used when you want to validate the form manually when pressing given button.</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`validate(): Promise`} />
        </div>
        <Tip>If you want the form to be validated automatically when pressing its Submit button, use the <a href="/guide/plugins/submit-button/" class="blue dim link">SubmitButton</a> plugin</Tip>
<SampleCode lang="javascript" code={`
fv
    .validate()
    .then(function(status) {
        // status can be one of the following value
        // 'NotValidated' (FormValidation.Status.NotValidated): The form is not yet validated
        // 'Valid' (FormValidation.Status.Valid): The form is valid
        // 'Invalid' (FormValidation.Status.Invalid): The form is invalid
        ...
    });
`} />    
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/update-validator-option/">updateValidatorOption() method</PrevButton>
            <NextButton href="/guide/api/validate-element/" class="b blue dim link pa2">validateElement() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

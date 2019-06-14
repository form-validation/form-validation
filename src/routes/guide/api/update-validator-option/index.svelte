<svelte:head>
	<title>FormValidation • updateValidatorOption() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">updateValidatorOption()</h1>
    <h2 class="f4 fw4 tc">Update option of particular validator for given field</h2>

    <section class="mv5">
        <div class="mb3">
<SampleCode lang="javascript" code={`
updateValidatorOption(
    field: String,
    validator: String,
    name: String,
    value: Any
): Core
`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>validator</code> <sup>*</sup> — The validator name</li>
            <li><code>name</code> <sup>*</sup> — The option's name</li>
            <li><code>value</code> <sup>*</sup> — The option's value</li>
        </ul>
    </section>  

    <Examples examples={[
        'Showing custom message returned from server',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/update-field-status">updateFieldStatus() method</PrevButton>
            <NextButton target="/guide/api/validate">validate() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

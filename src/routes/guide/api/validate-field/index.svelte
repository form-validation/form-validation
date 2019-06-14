<svelte:head>
	<title>FormValidation • validateField() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">validateField()</h1>
    <h2 class="f4 fw4 tc">Validate a particular field</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`validateField(field: String): Promise`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 mb3 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
        </ul>
<SampleCode lang="javascript" code={`
fv
    .validateField('userName')
    .then(function(status) {
        // status can be one of the following value
        // 'NotValidated' (FormValidation.Status.NotValidated): The field is not yet validated
        // 'Valid' (FormValidation.Status.Valid): The field is valid
        // 'Invalid' (FormValidation.Status.Invalid): The field is invalid
        ...
    });
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/validate-element">validateElement() method</PrevButton>
            <NextButton target="/guide/events">Events</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

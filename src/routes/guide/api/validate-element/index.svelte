<svelte:head>
	<title>FormValidation • validateElement() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">validateElement()</h1>
    <h2 class="f4 fw4 tc">Validate a particular element</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`validateElement(field: String, element: HTMLElement): Promise`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>element</code> <sup>*</sup> — The field element</li>
        </ul>
<SampleCode lang="javascript" code={`
fv
    .validateElement('userName', userNameEle)
    .then(function(status) {
        // status can be one of the following value
        // 'NotValidated': The element is not yet validated
        // 'Valid': The element is valid
        // 'Invalid': The element is invalid
        ...
    });
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/validate">validate() method</PrevButton>
            <NextButton target="/guide/api/validate-field">validateField() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

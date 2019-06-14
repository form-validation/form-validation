<svelte:head>
	<title>FormValidation • getElementValue() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">getElementValue()</h1>
    <h2 class="f4 fw4 tc">Return the element value</h2>

    <section class="mv5">
        <p class="lh-copy">The element value might be modified by the <code>field-value</code> filter, via the <a href="/guide/plugins/transformer" class="blue dim link">Transformer</a> plugin, for example</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`getElementValue(field: String, ele: HTMLElement, validator: String): String`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>ele</code> <sup>*</sup> — The field element</li>
            <li><code>validator</code> — The validator name</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/get-elements">getElements() method</PrevButton>
            <NextButton target="/guide/api/get-fields">getFields() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

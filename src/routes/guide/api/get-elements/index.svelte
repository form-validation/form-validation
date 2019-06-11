<svelte:head>
	<title>FormValidation • getElements() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">getElements()</h1>
    <h2 class="f4 fw4 tc">Return an array of field elements by given field name.</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`getElements(field: String): HTMLElement[]`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/get-element-value/">getElementValue() method</PrevButton>
            <NextButton href="/guide/api/get-fields/">getFields() method</NextButton>
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

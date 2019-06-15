<svelte:head>
	<title>FormValidation • addField() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">addField()</h1>
    <h2 class="f4 fw4 tc">Add a field</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`addField(field: String, options: Object): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>options</code> — The field options. The options will be merged with the original validator rules if the field is already defined</li>
        </ul>
    </section>

    <Examples examples={[
        'Adding dynamic field',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api">Overview</PrevButton>
            <NextButton target="/guide/api/deregister-filter">deregisterFilter() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

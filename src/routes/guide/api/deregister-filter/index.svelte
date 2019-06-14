<svelte:head>
	<title>FormValidation • deregisterFilter() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">deregisterFilter()</h1>
    <h2 class="f4 fw4 tc lh-copy">Deregister a filer which is registered earlier by <a href="/guide/api/register-filter" class="blue dim link">registerFilter()</a> method.</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`deregisterFilter(name: String, func: Function): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>name</code> <sup>*</sup> — The name of filter</li>
            <li><code>func</code> <sup>*</sup> — The filter function</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/add-field">addField() method</PrevButton>
            <NextButton target="/guide/api/deregister-plugin">deregisterPlugin() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

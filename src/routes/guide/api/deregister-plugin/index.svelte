<svelte:head>
	<title>FormValidation • deregisterPlugin() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">deregisterPlugin()</h1>
    <h2 class="f4 fw4 tc lh-copy">Deregister a plugin which is registered earlier by <a href="/guide/api/register-plugin" class="blue dim link">registerPlugin()</a> method.</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`deregisterPlugin(name: String): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>name</code> <sup>*</sup> — The name of plugin</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/deregister-filter">deregisterFilter() method</PrevButton>
            <NextButton target="/guide/api/destroy">destroy() method</NextButton>
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

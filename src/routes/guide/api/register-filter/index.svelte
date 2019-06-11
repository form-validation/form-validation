<svelte:head>
	<title>FormValidation • registerFilter() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">registerFilter()</h1>
    <h2 class="f4 fw4 tc lh-copy">Register a filter</h2>

    <section class="mv5">
        <p class="lh-copy">You can remove the filter by using the <a href="/guide/api/deregister-filter/" class="blue dim link">deregisterFilter()</a> method.</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`registerFilter(name: String, func: Function): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>name</code> <sup>*</sup> — The name of filter</li>
            <li><code>func</code> <sup>*</sup> — The filter function</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/on/">on() method</PrevButton>
            <NextButton href="/guide/api/register-plugin/">registerPlugin() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

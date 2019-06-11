<svelte:head>
	<title>FormValidation • registerPlugin() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">registerPlugin()</h1>
    <h2 class="f4 fw4 tc">Register a plugin</h2>

    <section class="mv5">
        <p class="lh-copy">The plugin instance then can be accessed via the <a href="/guide/api/get-plugin/" class="blue dim link">getPlugin()</a> method, or removed completely by the <a href="/guide/api/deregister-plugin/" class="blue dim link">deregisterPlugin()</a> method</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`registerPlugin(name: String, plugin: Object): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>name</code> <sup>*</sup> — The name of plugin</li>
            <li><code>plugin</code> <sup>*</sup> — The plugin instance</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/register-filter/">registerFilter() method</PrevButton>
            <NextButton href="/guide/api/register-validator/">registerValidator() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

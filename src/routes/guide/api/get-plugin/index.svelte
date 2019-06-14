<svelte:head>
	<title>FormValidation • getPlugin() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">getPlugin()</h1>
    <h2 class="f4 fw4 tc">Return an instance of plugin by given name.</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`getPlugin(name: String): Plugin`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>name</code> <sup>*</sup> — The plugin name</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/get-form-element">getFormElement() method</PrevButton>
            <NextButton target="/guide/api/off">off() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

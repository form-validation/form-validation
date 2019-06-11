<svelte:head>
	<title>FormValidation • registerValidator() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">registerValidator()</h1>
    <h2 class="f4 fw4 tc">Register a validator</h2>

    <section class="mv5">
        <p class="lh-copy">It is used when you want to use a custom validator.</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`registerValidator(name: String, func: Function): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>name</code> <sup>*</sup> — The name of validator</li>
            <li><code>func</code> <sup>*</sup> — The validator function</li>
        </ul>
    </section>

    <Examples examples={[
        'Preventing user to have same value as the placeholder',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/register-plugin/">registerPlugin() method</PrevButton>
            <NextButton href="/guide/api/remove-field/">removeField() method</NextButton>
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

<svelte:head>
	<title>FormValidation • disableValidator() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">disableValidator()</h1>
    <h2 class="f4 fw4 tc">Disable particular validator for given field.</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`disableValidator(field: String, validator: String): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>validator</code> — The validator name. If it isn't specified, all validators will be disabled</li>
        </ul>
    </section>

    <Examples examples={[
        'Enabling validators on the fly',
        'Switching validators on the same field',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/destroy/">destroy() method</PrevButton>
            <NextButton href="/guide/api/enable-validator/">enableValidator() method</NextButton>
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

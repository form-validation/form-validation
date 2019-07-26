<svelte:head>
	<title>FormValidation • enableValidator() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">enableValidator()</h1>
    <h2 class="f4 fw4 tc">Enable particular validator for given field.</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`enableValidator(field: String, validator: String): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>validator</code> — The validator name. If it isn't specified, all validators will be enabled</li>
        </ul>
    </section>

    <Examples examples={[
        'Enabling validators on the fly',
        'Setting dynamic regular expression',
        'Switching validators on the same field',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/disable-validator">disableValidator() method</PrevButton>
            <NextButton target="/guide/api/get-elements">getElements() method</NextButton>
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

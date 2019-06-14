<svelte:head>
	<title>FormValidation • resetField() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">resetField()</h1>
    <h2 class="f4 fw4 tc">Reset the field</h2>

    <section class="mv5">
        <p class="lh-copy">This method also clears all the messages, hide the feedback icons, etc.</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`resetField(field: String, reset: Boolean): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>reset</code> — If <code>true</code>, the method resets field value to empty or remove <code>checked</code>, <code>selected</code> attributes</li>
        </ul>
    </section>

    <Examples examples={[
        'Clearing field when clicking the icon',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/remove-field">removeField() method</PrevButton>
            <NextButton target="/guide/api/reset-form">resetForm() method</NextButton>
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

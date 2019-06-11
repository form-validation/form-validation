<svelte:head>
	<title>FormValidation • removeField() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">removeField()</h1>
    <h2 class="f4 fw4 tc">Remove given field by name</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`removeField(field: String): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/register-validator/">registerValidator() method</PrevButton>
            <NextButton href="/guide/api/reset-field/">resetField() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

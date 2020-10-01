<svelte:head>
	<title>FormValidation • setFieldOptions() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">setFieldOptions()</h1>
    <h2 class="f4 fw4 tc">set the options for given field</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`setFieldOptions(field: String, options: FieldOptions): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>options</code> <sup>*</sup> — The field options</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/revalidate-field">revalidateField() method</PrevButton>
            <NextButton target="/guide/api/set-locale">setLocale() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

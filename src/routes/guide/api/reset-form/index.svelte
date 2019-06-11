<svelte:head>
	<title>FormValidation • resetForm() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">resetForm()</h1>
    <h2 class="f4 fw4 tc">Reset the form</h2>

    <section class="mv5">
        <p class="lh-copy">This method also clears all the messages, hide the feedback icons, etc.</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`resetForm(reset: Boolean): Core`} />
        </div>
        <ul class="ma0 pl3 lh-copy">
            <li><code>reset</code> — If <code>true</code>, the method resets field value to empty or remove <code>checked</code>, <code>selected</code> attributes</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/reset-field/">resetField() method</PrevButton>
            <NextButton href="/guide/api/revalidate-field/">revalidateField() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

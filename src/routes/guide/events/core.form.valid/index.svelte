<svelte:head>
	<title>FormValidation • core.form.valid event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.form.valid event</h1>
    <h2 class="f4 fw4 tc lh-copy">Triggered when the form is completely validated, and all fields are valid</h2>

    <Examples examples={[
        'Multiple steps wizard',
        'Using Ajax to submit the form',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/events/core.form.reset/">core.form.reset event</PrevButton>
            <NextButton href="/guide/events/core.form.validating/">core.form.validating event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

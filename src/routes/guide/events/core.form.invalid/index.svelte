<svelte:head>
	<title>FormValidation • core.form.invalid event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.form.invalid event</h1>
    <h2 class="f4 fw4 tc">Triggered when the form is completely validated, and all fields are invalid</h2>

    <Examples examples={[
        'Regenerating captcha when the form is invalid',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/events/core.field.validating">core.field.validating event</PrevButton>
            <NextButton target="/guide/events/core.form.notvalidated">core.form.notvalidated event</NextButton>
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

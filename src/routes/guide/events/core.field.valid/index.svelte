<svelte:head>
	<title>FormValidation • core.field.valid event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.field.valid event</h1>
    <h2 class="f4 fw4 tc">Triggered after validating a field, and it is a valid field</h2>

    <section class="mv5">
        <p class="lh-copy">The event parameter presents the field name.</p>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/events/core.field.reset">core.field.reset event</PrevButton>
            <NextButton target="/guide/events/core.field.validating">core.field.validating event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
</script>

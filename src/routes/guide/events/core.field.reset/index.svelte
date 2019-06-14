<svelte:head>
	<title>FormValidation • core.field.reset event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.field.reset event</h1>
    <h2 class="f4 fw4 tc">Triggered after reseting a field via the <a href="/guide/api/reset-field" class="blue dim link">resetField()</a> method</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code>: String — The field name</li>
            <li><code>reset</code>: Boolean — If true, the method resets field value to empty or remove <code>checked</code>, <code>selected</code> attributes</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/events/core.field.removed">core.field.removed event</PrevButton>
            <NextButton target="/guide/events/core.field.valid">core.field.valid event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
</script>

<svelte:head>
	<title>FormValidation • core.form.reset event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.form.reset event</h1>
    <h2 class="f4 fw4 tc">Triggered after reseting the form via the <a href="/guide/api/reset-form/" class="blue dim link">resetForm()</a> method</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>reset</code>: Boolean — If true, the method resets field value to empty or remove <code>checked</code>, <code>selected</code> attributes</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/events/core.form.notvalidated/">core.form.notvalidated event</PrevButton>
            <NextButton href="/guide/events/core.form.valid/">core.form.valid event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
</script>

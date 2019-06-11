<svelte:head>
	<title>FormValidation • core.validator.notvalidated event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.validator.notvalidated event</h1>
    <h2 class="f4 fw4 tc">Triggered when a particular validator isn't ignored and will not be excuted</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>element</code>: HTMLElement — The field element which is being validated</li>
            <li><code>elements</code>: HTMLElement[] — The field elements</li>
            <li><code>field</code>: String — The field name</li>
            <li><code>validator</code>: String — The validator name</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/events/core.form.validating/">core.form.validating event</PrevButton>
            <NextButton href="/guide/events/core.validator.validated/">core.validator.validated event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
</script>

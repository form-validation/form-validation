<svelte:head>
	<title>FormValidation • core.validator.validated event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.validator.validated event</h1>
    <h2 class="f4 fw4 tc">Triggered after executing validation of particular validator on a field element</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>element</code>: HTMLElement — The field element which is being validated</li>
            <li><code>elements</code>: HTMLElement[] — The field elements</li>
            <li><code>field</code>: String — The field name</li>
            <li><code>validator</code>: String — The validator name</li>
            <li><code>result</code>: Object — The validation result. It can include other meta data</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/events/core.validator.notvalidated/">core.validator.notvalidated event</PrevButton>
            <NextButton href="/guide/events/core.validator.validating/">core.validator.validating event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
</script>

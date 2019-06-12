<svelte:head>
	<title>FormValidation • core.element.validated event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.element.validated event</h1>
    <h2 class="f4 fw4 tc">Triggered after validating a field element</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>element</code>: HTMLElement — The field element which is being validated</li>
            <li><code>elements</code>: HTMLElement[] — The field elements</li>
            <li><code>field</code>: String — The field name</li>
            <li><code>valid</code>: Boolean — Can be <code>true</code> if the field element is valid, <code>false</code> otherwise.</li>
        </ul>
    </section>

    <Examples examples={[
        'Hiding success class',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/events/core.element.notvalidated/">core.element.notvalidated event</PrevButton>
            <NextButton href="/guide/events/core.element.validating/">core.element.validating event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
</script>

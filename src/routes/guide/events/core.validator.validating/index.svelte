<svelte:head>
	<title>FormValidation • core.validator.validating event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.validator.validating event</h1>
    <h2 class="f4 fw4 tc">Triggered when start excuting validation of particular validator on a field element</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>element</code>: HTMLElement — The field element which is being validated</li>
            <li><code>elements</code>: HTMLElement[] — The field elements</li>
            <li><code>field</code>: String — The field name</li>
            <li><code>validator</code>: String — The validator name</li>
        </ul>
    </section>

    <Examples examples={[
        'Getting notified while field is being validated',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/events/core.validator.validated">core.validator.validated event</PrevButton>
            <NextButton target="/guide/examples">Examples</NextButton>
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

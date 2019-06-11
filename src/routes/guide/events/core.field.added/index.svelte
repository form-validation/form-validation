<svelte:head>
	<title>FormValidation • core.field.added event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.field.added event</h1>
    <h2 class="f4 fw4 tc">Triggered after adding a field via the <a href="/guide/api/add-field/" class="blue dim link">addField()</a> method</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>elements</code>: HTMLElement[] — The field elements</li>
            <li><code>field</code>: String — The field name</li>
            <li><code>options</code>: Object — The field options</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/events/core.element.validating/">core.element.validating event</PrevButton>
            <NextButton href="/guide/events/core.field.invalid/">core.field.invalid event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

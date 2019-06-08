<svelte:head>
	<title>FormValidation • Field selector</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Asking credit card number to match with selected type</h2>
    
    <section class="mv5">
        <p class="lh-copy">The following form asks to fill in the valid credit card number which matches the selected type.</p>
        <Demo prefix="/guide/examples/asking-credit-card-number-to-match-with-selected-type" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Showing credit card icon',
    ]} />

    <RelatedValidators validators={['creditCard']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

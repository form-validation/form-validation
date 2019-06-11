<svelte:head>
	<title>FormValidation • Supporting custom date format</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Supporting custom date format</h2>
    
    <section class="mv5">
        <p class="lh-copy">This example illustrates the ability of validating date in custom format by using the <a href="/guide/validators/callback/" class="blue dim link">callback</a> validator and <a href="http://momentjs.com/" class="blue dim link">momentjs</a> to parse/validate.</p>
        <Demo prefix="/guide/examples/supporting-custom-date-format" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Disabling date',
        'Integrating with flatpickr',
        'Supporting custom date format',
        'Validating date range',
        'Validating multiple inputs as one',
    ]} />

    <RelatedValidators validators={['date']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

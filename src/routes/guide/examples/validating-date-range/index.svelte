<svelte:head>
	<title>FormValidation • Validating date range</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Validating date range</h1>
    
    <section class="mv5">
        <p class="lh-copy">The following form asks you to enter a date in the range of 2000/01/01 and 2020/12/30. It can be implemented by using the <code>min</code> and <code>max</code> options.</p>
        <Demo prefix="/guide/examples/validating-date-range/range" frameworks={['Tachyons']} />
        <p class="lh-copy">You also can use the <a href="/guide/validators/callback/" class="blue dim link">callback</a> validator and <a href="http://momentjs.com/docs/#/query/is-before/" class="blue dim link"><code>isBefore()</code></a>, <a href="http://momentjs.com/docs/#/query/is-after/" class="blue dim link"><code>isAfter()</code></a> methods provided <a href="http://momentjs.com/" class="blue dim link">momentjs</a>
            to check if the date is in the range.</p>
        <Demo prefix="/guide/examples/validating-date-range/range-moment" frameworks={['Tachyons']} />
        <Tip>Use the <a href="/guide/plugins/start-end-date/" class="blue dim link">StartEndDate</a> plugin if you want to validate start and end dates</Tip>
    </section>

    <Examples examples={[
        'Disabling date',
        'Integrating with Bootstrap Datepicker',
        'Integrating with flatpickr',
        'Supporting custom date format',
        'Validating date range',
        'Validating multiple inputs as one',
    ]} />

    <RelatedValidators validators={['callback', 'date']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

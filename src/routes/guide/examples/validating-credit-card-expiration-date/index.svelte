<svelte:head>
	<title>FormValidation • Validating credit card expiration date</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Validating credit card expiration date</h1>
    
    <section class="mv5">
        <p class="lh-copy">The following form requires to provide a valid expiration month and year of credit card. Because the <a href="/guide/validators/date" class="blue dim link">date</a> validator asks for all the year, month and day, it isn't helpful in that case.</p>
        <p class="lh-copy">Instead, we will use the <a href="/guide/validators/callback" class="blue dim link">callback</a> validator to check the validity of month and year fields. Because these fields depend on each other, the
            <code>updateFieldStatus()</code> method is used to set month/year field as valid one.</p>
        <Tip heading="Note">For demonstrating purpose, the expiration date is treated as valid if it is in the range of current month and next 10 year</Tip>
        <Demo prefix="/guide/examples/validating-credit-card-expiration-date" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Showing credit card icon',
        'Validating credit card expiration date',
    ]} />

    <RelatedValidators validators={['callback', 'creditCard', 'date']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

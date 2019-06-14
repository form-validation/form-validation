<svelte:head>
	<title>FormValidation • Accepting test credit card numbers</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Accepting test credit card numbers</h1>
    
    <section class="mv5">
        <p class="lh-copy">Do you want some of fake, even invalid credit card numbers to be valid? For example, in the developing phase,
            you might want the creditCard validator to accept a few of particular card numbers.</p>
        <p class="lh-copy">Of course, you don't need to modify the source code of creditCard validator and add your own numbers there.
            FormValidation allows you to do it in a nice way via the <a href="/guide/plugins/transformer" class="blue dim link">Transformer</a> plugin.</p>
        <p class="lh-copy">By using this option, we transform your test card numbers from an invalid to a valid one.</p>

        <Tip heading="Note">
            The <a href="/guide/plugins/transformer" class="blue dim link">Transformer</a> plugin changes the card numbers for validation process only.
            When the form is submitted, you get the extract number that is initially provided by the user
        </Tip>

        <p class="lh-copy">Test (invalid) credit card numbers that you want it to be valid:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>3333222233332222</li>
            <li>30030008444444</li>
        </ul>

        <Demo prefix="/guide/examples/accepting-test-credit-card-numbers" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Showing credit card icon',
        'Validating credit card expiration date',
    ]} />

    <RelatedValidators validators={['creditCard']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

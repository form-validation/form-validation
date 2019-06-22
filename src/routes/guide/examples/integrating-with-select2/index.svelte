<svelte:head>
	<title>FormValidation • Integrating with Select2</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with Select2</h1>

    <section class="mv5">
        <p class="lh-copy">This example demonstrates how to integrate with <a href="https://select2.org" class="blue dim link">Select2.js</a>.</p>
        <p class="lh-copy">The <strong>Favorite color</strong> and the <strong>Favorite color using tags</strong> options requires to choose 2-4 colors you like most.</p>
        <Tip>You should look at the <a href="/guide/examples/integrating-with-3rd-party-libraries" class="blue dim link">basic principle</a> when integrating FormValidation with 3rd party libraries</Tip>
        <Demo prefix="/guide/examples/integrating-with-select2" frameworks={['tachyons']} />
    </section>

    <RelatedValidators validators={['choice']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

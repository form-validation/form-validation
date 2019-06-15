<svelte:head>
	<title>FormValidation • Showing dynamic message</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Showing dynamic message</h1>
    
    <section class="mv5">
        <p class="lh-copy">The form below ask to enter a secure password, which must satisfies all the following conditions:</p>
        <ul class="ma0 mb4 pl3 lh-copy">
            <li>Must be more than 8 characters long</li>
            <li>Must contain at least one upper case character</li>
            <li>Must contain at least one lower case character</li>
            <li>Must contain at least one digit</li>
        </ul>

        <Demo prefix="/guide/examples/showing-dynamic-message" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <Examples examples={[
        'Hiding messages',
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing messages in custom area',
        'Showing only one message each time',
    ]} />

    <RelatedValidators validators={['callback']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

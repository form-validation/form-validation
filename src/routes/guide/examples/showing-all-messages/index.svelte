<svelte:head>
	<title>FormValidation • Showing all messages</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Showing all messages</h2>
    
    <section class="mv5">
        <p class="lh-copy">This example asks user to enter a secure password, which must satisfies all the following conditions:</p>
        <ul class="ma0 mb4 pl3 lh-copy">
            <li>Must be more than 8 characters long</li>
            <li>Must contain at least one upper case character</li>
            <li>Must contain at least one lower case character</li>
            <li>Must contain at least one digit</li>
        </ul>

        <p class="lh-copy">It's also possible to show all the messages initially. Then whenever the password passes a particular rule, the message associated with the rule will disappear.</p>
        <p class="lh-copy">We need to trigger field events to archive this. In this example, the <code>core.validator.validated</code> and <code>plugins.message.displayed</code> events are used.</p>

        <Demo prefix="/guide/examples/showing-all-messages" frameworks={['Tachyons']} />
    </section>

    <Examples examples={['Showing all messages', 'Showing dynamic message']} />

    <RelatedValidators validators={['callback']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

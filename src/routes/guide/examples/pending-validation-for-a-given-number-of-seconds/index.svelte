<svelte:head>
	<title>FormValidation • Pending validation for a given number of seconds</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Pending validation for a given number of seconds</h1>
    
    <section class="mv5">
        <p class="lh-copy">In the following form, the <span class="i">username</span> field validations will be postponed for 3 seconds after user stops filling in the field. Other field will be validated instantly right after each key stroke.</p>
        <p class="lh-copy">It is done by using the <code>delay</code> option provided by the <a href="/guide/plugins/trigger" class="blue dim link">Trigger plugin</a>.</p>
        <p class="lh-copy">For testing purpose, the demo always answers that the username is already taken no matter what you input.</p>        
        <Demo prefix="/guide/examples/pending-validation-for-a-given-number-of-seconds" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
</script>

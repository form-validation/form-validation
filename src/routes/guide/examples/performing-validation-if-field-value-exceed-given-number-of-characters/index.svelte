<svelte:head>
	<title>FormValidation • Performing validation if field value exceed given number of characters</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Performing validation if field value exceed given number of characters</h2>
    
    <section class="mv5">
        <p class="lh-copy">In the following form, the <span class="i">Full name</span> and <span class="i">Phone number</span> fields will be validated when they have at least 10 and 5 characters, respectively.</p>
        <p class="lh-copy">It is done by using the <code>threshold</code> option provided by the <a href="/guide/plugins/trigger/" class="blue dim link">Trigger plugin</a>. Notice that this option doesn't effect on radio, checkbox, select elements.</p>
        <Demo prefix="/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters" frameworks={['Tachyons']} />
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

<svelte:head>
	<title>FormValidation • Examples</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">A collection of useful examples you can play with</h2>

    <Examples heading="Events and APIs" examples={[
        'Asking fields to be unique'
    ]} />

    <Examples heading="Validators" examples={[
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Disabling date',
        'Is a@b valid email address',
        'Showing credit card icon',
        'Supporting custom date format',
        'Validating date range',
    ]} />

    <Examples heading="Customize icons and messages" examples={[
        'Showing all messages',
        'Showing dynamic message'
    ]} />

    <Examples heading="Integrate with 3rd party libraries" examples={[
        'Integrating with flatpickr',
    ]} />
</GuideLayout>

<script>
import Examples from '../../../components/Examples.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>